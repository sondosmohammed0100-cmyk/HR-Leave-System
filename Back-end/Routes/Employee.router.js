const express = require('express');
const router = express.Router();
const { getEmployeeStats } = require('../controllers/userController');

router.get('/employees/stats', getEmployeeStats);

module.exports = router;