const JOI=require('joi');
const LeaveValidation=JOI.object({
  leave_type:JOI.string().required(),
  start_Date:JOI.date().required(),
  end_Date:JOI.date().required(),
  reason:JOI.string().required(),
  status_leave:JOI.string().valid('Pending', 'Approved','Rejected').default('Pending')


});



const UpdateLeaveStatusValidation = JOI.object({
    status_leave: JOI.string().valid('Approved', 'Rejected').required()
});


module.exports = {
    LeaveValidation,
    UpdateLeaveStatusValidation
};


