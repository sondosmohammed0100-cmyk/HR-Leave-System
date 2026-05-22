const express = require("express");
const router = express.Router();
const { getDashboard } = require("../Controller/dashboard.controller");
const authmiddleware=require('../Middelware/auth');

router.get("/dashboard",authmiddleware, getDashboard);
module.exports = router;
