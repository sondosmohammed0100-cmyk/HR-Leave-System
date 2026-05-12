const mongoose = require("mongoose");
const UserSchema=new mongoose.Schema({
  username:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password:{
    type: String,
    minlength:6,
    required: true,
    select: false
  },
  department:{
    type:String,
    required:true
  },
  role:{
    type: String,
    enum: ['emplyee', 'HR'],
    default: 'emplyee'
  },
  leaveBalance: {
   type: Number,
   default:21,
  }

},{timestamps: true});
const User = mongoose.model('User',UserSchema);
module.exports=User