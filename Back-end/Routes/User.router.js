const express=require('express')
const router=express.Router();
const {Reqister,login}=require('../Controller/User.controller');

const authmiddleware = require("../Middelware/auth");

router.post('/register',Reqister);
router.post("/login",login)
module.exports=router