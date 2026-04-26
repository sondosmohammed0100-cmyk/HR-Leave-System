const jwt = require("jsonwebtoken");
const authmiddleware = (req,res,next)=>{
    try{
        const token = req.header("Authorization");
        if(!token) return res.status(401).json({
            msg:"No token, authorization denied"
        });
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        req.user = payload;
        next();
    }
    catch(error){
        return res.status(401).json({
            msg:"Invalid token"
        })
    }   
}
module.exports = authmiddleware;


























