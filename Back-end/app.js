const express=require("express")
const app=express()
require('dotenv').config()
const cors = require('cors');
app.use(cors())
const mongoose = require('mongoose');
const db_URL=process.env.DB_URL
async function DB_Connection() {

  try{
    await mongoose.connect(db_URL);
    console.log("Connected to DB")

  }
  catch(err) {
    console.log("Faild to connect to DB")
    
  }
  
} 
DB_Connection();

const authRouter=require('./Routes/User.router')
app.use('/api',authRouter)




const port=process.env.PORT || 3000
app.listen(port,()=>{
  console.log(`Server running on port------->${port}`)
})