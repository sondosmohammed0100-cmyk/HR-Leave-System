const user =require('../Model/User');
const leaveModel=require('../Model/Leave');
const LeaveValidation=require('../Validation/Leave.validation');

function calculateLeaveDays(start_date,end_date){
  const start = new Date(start_date);
  const end = new Date(end_date);
  const differtime=(end-start)
  const diffdays= differtime/(1000*60*60*24)+1;
  return diffdays;
}
const insertLeave=async (req,res,next)=>{
  try{
    
    const {error,value}=LeaveValidation.validate(req.body,{
      abortEarly:false,
      stripUnknown:true
    });
    if(error){
      return res.status(400).json({msg:error.details.map((err)=>err.message)});
    } 
    const {userId,leave_type,start_Date,end_Date,reason,status_leave}=value;
    // return console.log(value)
    if(start_Date>end_Date){
      return res.status(400).json({msg:"Start date must be before end date"});
    }
    const totalDays=calculateLeaveDays(start_Date,end_Date);
    const findUser=await user.findById(userId);
    
   if (totalDays > findUser.leaveBalance) {
      return res.status(400).json({
        message: "Not enough leave balance",
      });
    }
    if (totalDays <= 0) {
      return res.status(400).json({ message: "Invalid date range" });
    }
  //   if(!req.file){
  //     return res.status(400).json({msg:"Image is required"})
  //   }
  // return console.log(req.file)
   // const image=`/image/${req.file.filename}`

    const leave=await leaveModel.create({
      leave_type,
      totalDays,
      start_Date,
      end_Date,
      reason,
      status_leave
  });
  return res.status(201).json({msg:"Succesfully Created",leave})
  }
  catch(err){
    console.log(err)
    return res.status(500).json({msg:"Server Error",err})
  }

}
module.exports=insertLeave;