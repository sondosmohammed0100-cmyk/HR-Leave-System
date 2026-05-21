const express = require("express");
const router = express.Router();
const authmiddleware = require("../Middelware/auth");
const AttachFile = require("../Middelware/UploadAttachment");
const insertLeave = require("../Controller/LeaveForm.controller");
const {
  ApproveLeave,
  getBalance

} = require("../Controller/LeaveBalance");
const getEmployeeStats=require('../Controller/Employee.controller')
router.post("/inserleave", authmiddleware, AttachFile, insertLeave);




router.patch("/approve/:id",authmiddleware ,ApproveLeave);
router.get('/getbalance',authmiddleware,getBalance);
router.get('/employee',authmiddleware,getEmployeeStats)

module.exports = router;
