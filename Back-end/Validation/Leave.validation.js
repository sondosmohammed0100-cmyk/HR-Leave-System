const JOI=require('joi');
const LeaveValidation=JOI.object({
  leave_type:JOI.string().required(),
  start_Date:JOI.date().required(),
  end_Date:JOI.date().required(),
  reason:JOI.string().required(),
  status_leave:JOI.string().valid('pending', 'approved','rejected').default('pending')
});
module.exports=LeaveValidation