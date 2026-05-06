// const express = require("express");
// const router = express.Router();
// const {login} = require("../controller/authcontroller");
// const authmiddleware = require("../middleware/authmiddleware");
// const Reqister =require('../Controller/authcontroller');



// router.post("/login",authmiddleware,login);
// router.post('/register',Reqister);

// module.exports = router





const express = require("express");
const router = express.Router();

const { login, Reqister } = require("../controller/authcontroller");
const authmiddlewaare = require("../middleware/authmiddleware");


router.post("/login" , login);
router.post("/register", Reqister);

module.exports = router;