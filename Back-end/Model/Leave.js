
const mongoose = require("mongoose");

const LeaveSchema=new mongoose.Schema({
 userId:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"User",
  required:true
 },
 leave_type:{
  type:String,
  required:true

 },
 start_Date:{
  type:Date,
  required:true

 },
 end_Date:{
  type:Date,
  required:true

 },
reason: {
    type: String,
    required: true
},
attachedFile:{
  type: String,


},
status_leave:{
  type: String,
    enum: ['pending', 'approved','rejected'],
    default: 'pending'

}


},{timestamps: true});
const Leave = mongoose.model('Leave',LeaveSchema);
module.exports=Leave