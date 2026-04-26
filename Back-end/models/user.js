//call mongoose
//create schema 
//create model
//export module
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6

    },
     confirmPassword:{
     type: String,
     required: true
      },
      department:{
      type:String,
     required:true
     },
      role:{
     type: String,
     enum: ['emplyee', 'HR'],
     default: 'emplyee'
 }
}  
,{
    timestamps:true
    
})

const User = mongoose.model("User",userSchema);
module.exports = User;