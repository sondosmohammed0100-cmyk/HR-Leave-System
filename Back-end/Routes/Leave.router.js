const express = require("express");
const router = express.Router();
const authmiddleware = require("../Middelware/auth");
const AttachFile = require("../Middelware/UploadAttachment");
const insertLeave = require("../Controller/LeaveForm.controller");
const {
  ApproveLeave,
  getBalance

} = require("../Controller/LeaveBalance");
router.post("/inserleave", authmiddleware, AttachFile, insertLeave);




router.patch("/approve/:id",authmiddleware ,ApproveLeave);
router.get('/getbalance',authmiddleware,getBalance)

module.exports = router;
