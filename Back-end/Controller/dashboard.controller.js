const User = require("../Model/User");
const Leave = require("../Model/Leave");
const asyncWrapper = require("../Middelware/asyncWrraper");

const getDashboard = asyncWrapper(async (req, res, next) => {
  const userId = req.user.id;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const leaves = await Leave.find({ userId });

  let pendingRequests = 0;
  let usedDays = 0;

  let usedAnnual = 0;
  let usedSick = 0;
  let usedCasual = 0;

  for (const leave of leaves) {
    
    if (leave.status_leave === "pending") {
      pendingRequests++;
    }

    
    if (leave.status_leave === "approved") {
      const days = leave.totalDays || 0;

   
      if (leave.leave_type === "annual") {
        usedAnnual += days;
      } 
      else if (leave.leave_type === "sick") {
        usedSick += days;
      } 
      else if (leave.leave_type === "casual") {
        usedCasual += days;
      }

      usedDays += days;
    }
  }

  const TOTAL = {
    annual: 7,
    sick: 7,
    casual: 7,
  };

  const totalBalance =
    (TOTAL.annual - usedAnnual) +
    (TOTAL.sick - usedSick) +
    (TOTAL.casual - usedCasual);

  return res.status(200).json({
    pendingRequests,
    totalBalance,
    usedDays,
  });
});

module.exports = { getDashboard };

