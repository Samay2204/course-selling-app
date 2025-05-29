//load environment variables from .env file 
require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");


//import route handlers from routes folder

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use(express.json());

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;


// All admin-related requests will go to /api/admin
app.use("/api/admin", adminRouter);

// All user-related requests will go to /api/user
app.use("/api/user",userRouter);

// All course-related requests will go to /api/course
app.use("/api/course", courseRouter);

//main function to handle database start the server
async function main(){
    try{

        await mongoose.connect(MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "course-selling-app", // Explicitly set the DB name
        });

        console.log("Connected to the database");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }catch(error){
        console.error("Failed to connect to the database", error);
    }
}

main();

