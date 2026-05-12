const express=require('express');
const router=express.Router();
const authmiddleware=require('../Middelware/auth');
const AttachFile=require('../Middelware/UploadAttachment')
const insertLeave=require('../Controller/LeaveForm.controller');
router.post('/inserleave',authmiddleware,AttachFile,insertLeave)
module.exports=router;

