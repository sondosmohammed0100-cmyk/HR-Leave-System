const jwt = require("jsonwebtoken");



const authmiddleware = (req,res,next)=>{
    try{
        
        const token = req.headers.authorization;
        if(!token) return res.status(401).json({
            msg:"No token, authorization denied"
        });
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        req.user = payload;
        req.userId=payload.id;
        next();
    }
    catch(error){
        return res.status(401).json({
            msg:"Invalid token"
        })
    }  
    
    
const allowedTo = (...roles) => {
    return (req, res, next) => {
       
        if (!roles.includes(req.userRole)) {
            return res.status(403).json({ msg: "Access denied. Managers only." });
        }
        next();
    };
};


}
module.exports = {authmiddleware , allowedTo};


























