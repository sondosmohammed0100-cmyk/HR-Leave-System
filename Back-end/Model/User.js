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
    required: true
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

});
const User = mongoose.model('User',UserSchema);
module.exports=User