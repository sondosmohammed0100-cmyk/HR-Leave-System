const express = require("express");
const router = express.Router();

const leaveController = require("../Controller/leave.controller");
const adminMiddleware=require('../Middelware/AdminMiddelware')
router.delete("/reject/:id", adminMiddleware,leaveController.rejectLeave);

module.exports = router;