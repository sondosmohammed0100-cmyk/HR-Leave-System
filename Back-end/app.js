//dotenv
require("dotenv").config();
//express
const express= require("express");
const app = express();
//middleware
app.use(express.json())
///port
const port = process.env.port ||5000 
//dbconection
const mongoose = require("mongoose");
async function dbconnection(){
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("db connected")
    }
    catch(error){
        console.log("error")
    }
}
dbconnection()
//routes
const authRoutes = require("./routes/authRoutes");

app.use("/auth", authRoutes);

//server
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
