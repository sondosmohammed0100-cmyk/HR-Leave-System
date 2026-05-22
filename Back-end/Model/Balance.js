const mongoose = require("mongoose");

const balanceSchema = new mongoose.Schema(
{
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        unique:true
    },

    annual:{
        used:{ type:Number, default:0 },
        total:{ type:Number, default:7 }
    },

    sick:{
        used:{ type:Number, default:0 },
        total:{ type:Number, default:7 }
    },

    casual:{
        used:{ type:Number, default:0 },
        total:{ type:Number, default:7 }
    }

},
{ timestamps:true }
);

const Balance = mongoose.model("Balance", balanceSchema);

module.exports = Balance;