const leave = require("../Model/Leave");
const Balance = require("../Model/Balance");
const ApproveLeave = async (req, res, next) => {

    const updatedLeave = await leave.findById(req.params.id);

    if (!updatedLeave) {
        return res.status(404).json({
            msg: "Leave not found",
        });
    }

    updatedLeave.status_leave = req.body.status_leave;

    if (req.body.status_leave === "approved") {

        const leaveType =
        updatedLeave.leave_type.toLowerCase();

        const days = updatedLeave.totalDays;

        
        const userBalance = await Balance.findOne({
            userId: updatedLeave.userId,
        });

        const balance = userBalance[leaveType];

        if (!balance) {
            return res.status(400).json({
                msg: "Invalid leave type",
            });
        }

        if (balance.total < days) {
            return res.status(400).json({
                msg: "Not enough leave balance",
            });
        }

        balance.used += days;
        balance.total -= days;

        await userBalance.save();
    }

    const result = await leave.findByIdAndUpdate(

        req.params.id,

        {
            $set: {
                status_leave: req.body.status_leave,
            },
        },

        { new: true }

    );

    res.status(200).json({
        msg: "Leave updated successfully",
        result
    });

};

const getBalance = async (req, res, next) => {
  const userLeave = await leave.findById(req.params.id);
  console.log(userLeave);
  if (!userLeave) {
    return res.status(404).json({
      msg: "No leave data found",
    });
  }

  res.status(200).json({
    leaveBalance: {
      annual: {
        used: userLeave.annual.used,
        total: userLeave.annual.total,
      },

      sick: {
        used: userLeave.sick.used,
        total: userLeave.sick.total,
      },

      casual: {
        used: userLeave.casual.used,
        total: userLeave.casual.total,
      },
    },
  });
};





module.exports = { ApproveLeave, getBalance };
