const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema(
{
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    leave_type:{
        type:String,
        enum:["annual","sick","casual"],
        required:true,
    },

    start_Date:{
        type:Date,
        required:true,
    },

    end_Date:{
        type:Date,
        required:true,
    },

    totalDays:{
        type:Number,
    },

    reason:{
        type:String,
        required:true,
    },

    attachedFile:{
        type:String,
    },

    status_leave:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending",
    }

},
{ timestamps:true }
);

const Leave = mongoose.model("Leave", LeaveSchema);

module.exports = Leave;