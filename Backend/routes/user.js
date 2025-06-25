const { Router } = require("express");
const userRouter = Router();

const { userModel, purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");
const { JWT_USER_PASSWORD } = require("../config");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

userRouter.post("/signup", async function (req, res) {
    const requireBody = zod.object({
        email: zod.string().email().min(5),
        password: zod.string().min(5),
        firstName: zod.string().min(3),
        lastName: zod.string().min(3),
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await userModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });
    } catch (error) {
        return res.status(400).json({
            message: "You are already signup",
        });
    }

    res.status(201).json({
        message: "Signup Successful!",
    });
});

userRouter.post("/signin", async function (req, res) {
    const requireBody = zod.object({
        email: zod.string().email(),
        password: zod.string(),
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(403).json({
            message: "Incorrect Credentials!",
        });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD); // creating token at the backend
        res.status(200).json({ token: token, }); // sending token, to the frontend
    } else {
        res.status(403).json({
            message: "Invalid Credentials!",
        });
    }
});

userRouter.get("/dashboard", userMiddleware, async (req,res) =>{
    const userId = req.userId;
    console.log("Dashboard route hit. USER ID:", req.userId);

    try {
        const user = await userModel.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        })
    } catch (error) {
        console.log("Error in Dashboard retrival" + error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
    
});



userRouter.get("/purchases", userMiddleware, async function (req, res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({ userId });

    if (!purchases) {
        return res.status(404).json({
            message: "No purchases found",
        });
    }

    const purchasesCourseIds = purchases.map(p => p.courseId);

    const coursesData = await courseModel.find({
        _id: { $in: purchasesCourseIds },
    });

    res.status(200).json({
        purchases,
        coursesData,
    });
});

module.exports = {
    userRouter,
};
