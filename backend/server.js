import express from "express"
import mongoose from "mongoose"
import connectDB from "./db.js"
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"
import cors from "cors"

const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())
app.use("/api/users", userRoutes)



app.get("/", (req, res) => {
    return res.send("Hello King!")
})

app.listen(3000, () => {
    connectDB();
    console.log("Server is running at the port 3000")
})


//ubvHEr4t1jPbd1kO