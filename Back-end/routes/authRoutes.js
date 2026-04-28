const express = require("express");
const router = express.Router();
const {login} = require("../controller/authcontroller");
const authmiddleware = require("../middleware/authmiddleware");
router.post("/login",login)
module.exports = router;