const { Router } = require("express");
const courseRouter = Router();

const { purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");

courseRouter.post("/purchase", userMiddleware, async function (req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    if (!courseId) {
        return res.status(400).json({
            message: "Please provide a courseId",
        });
    }

    const existingPurchase = await purchaseModel.findOne({
        courseId,
        userId,
    });

    if (existingPurchase) {
        return res.status(400).json({
            message: "You have already bought this course",
        });
    }

    await purchaseModel.create({
        courseId,
        userId,
    });

    res.status(201).json({
        message: "You have successfully bought the course",
    });
});



courseRouter.get("/preview", async function (req, res) {
    const courses = await courseModel
    .find({})
    .populate("creatorId", "firstName lastName");

    const data = await courseModel.findOne().populate("creatorId", "firstName lastName");
    console.log("Hello HI please",data);

    res.status(200).json({
        courses,
    });
});

module.exports = {
    courseRouter,
};
