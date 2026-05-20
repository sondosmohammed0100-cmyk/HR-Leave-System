const User = require('../models/User'); 

const getEmployeeStats = async (req, res) => {
    try {
        const employees = await User.find({ role: 'employee' });

        const totalEmployees = employees.length;

        
        return res.status(200).json({
            success: true,
            totalEmployees: totalEmployees,
            data: employees
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error fetching employees",
            error: error.message
        });
    }
};

module.exports = { getEmployeeStats };