
const mongoose = require("mongoose");
const User=require('../Model/User')
const LeaveSchema=new mongoose.Schema({
 userId:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"User",
  required:true
 },
 leave_type:{

 },
 start_Date:{

 },
 end_Date:{

 },
reason: {
    type: String,
    required: true
},
status_leave:{
  type: String,
    enum: ['pending', 'approved','rejected'],
    default: 'pending'

}


},{timestamps: true});
const Leave = mongoose.model('Leave',LeaveSchema);
module.exports=Leave