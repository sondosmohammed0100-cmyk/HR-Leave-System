
const express=require("express")
const app=express()
require('dotenv').config()
const cors = require('cors');
app.use(cors())
//middleware
app.use(express.json())

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


const port=process.env.PORT || 3000
app.listen(port,()=>{
  console.log(`Server running on port------->${port}`)
})


//routes
const authRoutes = require("./Routes/authRoutes");

app.use("/api", authRoutes);



