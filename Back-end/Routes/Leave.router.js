const express = require("express");
const router = express.Router();
const authmiddleware = require("../Middelware/auth");
const AttachFile = require("../Middelware/UploadAttachment");
const insertLeave = require("../Controller/LeaveForm.controller");
const {
  ApproveLeave,
  getBalance

} = require("../Controller/LeaveBalance");
const authorizeRole=require('../Middelware/AdminMiddelware')
const getEmployeeStats=require('../Controller/Employee.controller')


router.post("/insertleave", authmiddleware, AttachFile, insertLeave);
router.patch("/leave/approve/:id",authmiddleware,authorizeRole,ApproveLeave);
router.get('/leave/getbalance',authmiddleware,getBalance);
router.get('/employee/:userid',authmiddleware,getEmployeeStats)

module.exports = router;
