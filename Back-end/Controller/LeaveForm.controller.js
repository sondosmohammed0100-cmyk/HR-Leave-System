const user = require("../Model/User");
const leaveModel = require("../Model/Leave");
const Balance = require("../Model/Balance");
const asyncWrapper = require("../Middelware/asyncWrraper");
const LeaveValidation = require("../Validation/Leave.validation");

function calculateLeaveDays(start_date, end_date) {

    const start = new Date(start_date);
    const end = new Date(end_date);

    const differtime = end - start;

    const diffdays =
    differtime / (1000 * 60 * 60 * 24) + 1;

    return diffdays;
}

const insertLeave = asyncWrapper(async (req, res, next) => {

    const { error, value } = LeaveValidation.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });

    if (error) {
        return res.status(400).json({
            msg: error.details.map((err) => err.message),
        });
    }

    const {
        leave_type,
        start_Date,
        end_Date,
        reason,
        status_leave,
    } = value;

    if (new Date(start_Date) > new Date(end_Date)) {
        return res.status(400).json({
            msg: "Start date must be before end date",
        });
    }

    const totalDays = calculateLeaveDays(
        start_Date,
        end_Date
    );

    if (totalDays <= 0) {
        return res.status(400).json({
            message: "Invalid date range",
        });
    }

    const findUser = await user.findById(req.userId);

    if (!findUser) {
        return res.status(404).json({
            msg: "User not found",
        });
    }

    const userBalance = await Balance.findOne({
        userId: req.userId,
    });
if (!userBalance) {
   userBalance = await Balance.create({
      userId: req.userId
   });
}
    const balance = userBalance[leave_type];

    if (balance.total < totalDays) {
        return res.status(400).json({
            message: "Not enough leave balance",
        });
    }

    const attachment = req.file
    ? `/attach/${req.file.filename}`
    : null;

    const leave = await leaveModel.create({

        userId: req.userId,
        leave_type,
        totalDays,
        start_Date,
        end_Date,
        reason,
        status_leave,
        attachedFile: attachment,

    });

    return res.status(201).json({
        msg: "Successfully Created",
        leave,
    });

});

module.exports = insertLeave;