// require("dotenv").config({path: "./.env"})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ 
    path: "./.env" 
});

connectDB()



























/*
import express from "express"
const app = express()


( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        app.on("error", () => {
            console.log("ERROR", err);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        }

    }catch(err){
        console.log("ERROR", err)
        throw err
    }
})()
*/
