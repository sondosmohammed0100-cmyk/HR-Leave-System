const Leave = require("../Model/Leave");

const rejectLeave = async (req, res) => {
  try {
    const { id } = req.params;

    const leave = await Leave.findByIdAndUpdate(
      id,
      { status_leave: "rejected" },
    );

    if (!leave) {
      return res.status(404).json({ message: "Leave not found" });
    }

    res.status(200).json({
      message: "Leave rejected successfully",
      leave
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { rejectLeave };