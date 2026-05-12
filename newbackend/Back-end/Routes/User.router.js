const express=require('express')
const router=express.Router();
const {Register,login}=require('../Controller/User.controller');
const authmiddleware = require("../Middelware/auth");
router.post('/register',Register);
router.post("/login",login)
module.exports=router