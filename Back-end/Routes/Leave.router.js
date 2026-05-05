const express=require('express');
const router=express.Router();
const authmiddleware=require('../Middelware/auth');

const insertLeave=require('../Controller/LeaveForm.controller');
router.post('/inserleave',insertLeave)
module.exports=router;

