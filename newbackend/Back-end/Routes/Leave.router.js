const express=require('express');
const router=express.Router();
const {  authmiddleware , allowedTo }=require('../Middelware/auth');
const AttachFile=require('../Middelware/UploadAttachment')
const { insertLeave , updateLeaveStatus }=require('../Controller/LeaveForm.controller');





//  AttachFile


router.post('/inserleave',authmiddleware,insertLeave)



router.patch('/update-status/:id', authmiddleware, allowedTo('emplyee', 'HR'), updateLeaveStatus)


module.exports=router;

