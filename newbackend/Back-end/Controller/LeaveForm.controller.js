const user=require('../Model/User')
const leaveModel=require('../Model/Leave');
const asyncWrapper=require('../Middelware/asyncWrraper');
const {LeaveValidation , UpdateLeaveStatusValidation }=require('../Validation/Leave.validation');

/////////////////////////////// insert Leave  ////////////////////////////////////////////////////////////

function calculateLeaveDays(start_date,end_date){
  const start = new Date(start_date);
  const end = new Date(end_date);
  const differtime=(end-start)
  const diffdays= differtime/(1000*60*60*24)+1;
  return diffdays;
}


const insertLeave=asyncWrapper(
async (req,res,next)=>{
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
    
    const findUser = await user.findById(req.userId);

      if (!findUser) {
        return res.status(404).json({ msg: "User not found" });
      }
    //  return console.log("userId:", req.userId);
    
   if (totalDays > findUser.leaveBalance) {
      return res.status(400).json({
        message: "Not enough leave balance",
      });
    }
    if (totalDays <= 0) {
      return res.status(400).json({ message: "Invalid date range" });
    }
    if(!req.file){
      return res.status(400).json({msg:"Image is required"})
    }
 // return console.log(req.file)
   const attachment=`/attach/${req.file.filename}`

    const leave=await leaveModel.create({
      leave_type,
      totalDays,
      start_Date,
      end_Date,
      reason,
      status_leave,
      attachedFile:attachment
  });
  return res.status(201).json({msg:"Succesfully Created",leave})
})









// /////////////////////////////  Aprrove or Reject from hr  ////////////////////////////////////////////////////////////

const updateLeaveStatus = asyncWrapper(async (req, res, next) => {
    const { id } = req.params; 

   
    const { error, value } = UpdateLeaveStatusValidation.validate(req.body, {
        abortEarly: false,
        stripUnknown: true 
    });

  
    if (error) {
        return res.status(400).json({ msg: error.details.map((err) => err.message) });
    }

   
    const { status_leave } = value; 


    const leave = await leaveModel.findById(id);
    if (!leave) {
        return res.status(404).json({ msg: "Leave request not found" });
    }

    if (leave.status_leave !== 'Pending') {
        return res.status(400).json({ msg: "This leave request has already been processed" });
    }

    if (status_leave === 'Approved') {
     
        const user = await userModel.findById(leave.userId);
        
        if (!user) {
            return res.status(404).json({ msg: "User associated with this leave not found" });
        }

        if (user.leaveBalance < leave.totalDays) {
            return res.status(400).json({ msg: "Insufficient user leave balance" });
        }

        user.leaveBalance -= leave.totalDays;
        await user.save();
    }

    leave.status_leave = status_leave;
    await leave.save();

    res.status(200).json({ msg: `Leave request ${status_leave}`, leave });
});


module.exports = { insertLeave, updateLeaveStatus };













module.exports=insertLeave;