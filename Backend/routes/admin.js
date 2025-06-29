const { Router } = require("express");
const adminRouter = Router();

const { adminModel, courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");
const { JWT_ADMIN_PASSWORD } = require("../config");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");
const multer = require("multer");
const path = require("path");
const bucket = require("../firebase/firebase");
const upload = multer({ dest: "temp/" });


adminRouter.post("/signup", async function (req, res) {

    // input structure
    const requireBody = zod.object({
        email: zod.string().email().min(5),
        password: zod.string().min(5),
        firstName: zod.string().min(3),
        lastName: zod.string().min(3),
    });
    
    //input validation using zod module
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    // destructuring the parsed data into variables 
    const { email, password, firstName, lastName } = parseDataWithSuccess.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });
    } catch (error) {
        return res.status(400).json({
            message: "You are already signup!",
        });
    }

    res.status(201).json({
        message: "Signup successful!",
    });
});



adminRouter.post("/signin", async function (req, res) {
    const requireBody = zod.object({
        email: zod.string().email(),
        password: zod.string().min(5),
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const { email, password } = req.body;

    //search for the admin from admin model
    const admin = await adminModel.findOne({ email });


    if (!admin) {
        return res.status(403).json({
            message: "Invalid Credentials!",
        });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    //if login successful then create a token
    if (passwordMatch) {
        const token = jwt.sign({ id: admin._id }, JWT_ADMIN_PASSWORD);
        const firstName = admin.firstName;
        const lastName = admin.lastName;
        
        res.status(200).json({ token,
                               firstName,
                               lastName
         });
    } else {
        res.status(403).json({
            message: "Invalid Credentials!",
        });
    }

    
});

adminRouter.get("/dashboard", adminMiddleware, async (req, res) => {
  console.log("Dashboard route hit. Admin ID:", req.adminId);

  try {
    const admin = await adminModel.findById(req.adminId);
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const courseCount = await courseModel.countDocuments({creatorId: req.adminId});

    res.json({
      firstName: admin.firstName,
      lastName: admin.lastName,
      stats: {
        courses: courseCount,
        studentsEnrolled: admin.dashBoardStats.studentsEnrolled,
      },
    });
  } catch (err) {
    console.error("Dashboard error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


adminRouter.post("/course", adminMiddleware, async function (req, res) {
    const adminId = req.adminId; //set by adminMiddleware

    const requireBody = zod.object({
        title: zod.string().min(3),
        description: zod.string().min(10),
        imageUrl: zod.string().url(),
        price: zod.number().positive(),
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId,
    });


    await adminModel.findByIdAndUpdate(adminId, {
        $inc: { "dashBoardStats.courses": 1 }
    });


    res.status(201).json({
        message: "Course created!",
        courseId: course._id,
        
    });
});



adminRouter.put("/course", adminMiddleware, async function (req, res) {
    const adminId = req.adminId;

    const requireBody = zod.object({
        courseId: zod.string().min(5),
        title: zod.string().min(3).optional(),
        description: zod.string().min(5).optional(),
        imageUrl: zod.string().url().min(5).optional(),
        price: zod.number().positive().optional(),
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const { courseId, title, description, imageUrl, price } = req.body;

    const course = await courseModel.findOne({
        _id: courseId,
        creatorId: adminId,
    });

    if (!course) {
        return res.status(404).json({
            message: "Course not found!",
        });
    }

    await courseModel.updateOne(
        { _id: courseId, creatorId: adminId },
        {
            title: title || course.title,
            description: description || course.description,
            imageUrl: imageUrl || course.imageUrl,
            price: price || course.price,
        }
    );

    res.status(200).json({
        message: "Course updated!",
    });
});

adminRouter.post("/course/:id/upload", upload.single("file"), async (req,res) =>{
    try {
        const {title, type} = req.body;
        const courseId = req.params.id;
        const file = req.file;

        if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
         }
        
        //Storing the file given by user to firebase storage
        // eg destination - /courses/22325324/lecture2.mp4
        const destination = `courses/${Date.now()}_${file.originalname}`
 
        await bucket.upload(file.path, { destination, public: true });

        const fileUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;
        
        //$push - to appends the items to content array
        await courseModel.findByIdAndUpdate(courseId,{
            $push:{
                content: {
                    title,
                    type,
                    url: fileUrl,
                },
            },
        });

        res.status(200).json({ message: "Content uploaded", url: fileUrl });
    } catch(err) {
         console.error(err);
    res.status(500).json({ message: "Upload failed" });
        
    }
})


adminRouter.delete("/course", adminMiddleware, async function (req, res) {
    const adminId = req.adminId;

    const requireBody = zod.object({
        courseId: zod.string().min(5),
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const { courseId } = req.body;

    const course = await courseModel.findOne({
        _id: courseId,
        creatorId: adminId,
    });

    if (!course) {
        return res.status(404).json({
            message: "Course not found!",
        });
    }

    await courseModel.deleteOne({
        _id: courseId,
        creatorId: adminId,
    });

    res.status(200).json({
        message: "Course deleted!",
    });
});

adminRouter.get("/course/bulk", adminMiddleware, async function (req, res) {
    const adminId = req.adminId;

    const courses = await courseModel.find({
        creatorId: adminId,
    });

    res.status(200).json({
        courses,
    });
});

module.exports = {
    adminRouter,
};
