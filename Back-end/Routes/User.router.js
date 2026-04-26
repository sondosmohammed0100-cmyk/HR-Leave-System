const express=require('express')
const router=express.Router();
const Reqister=require('../Controller/User.controller');

router.post('/register',Reqister);
module.exports=router