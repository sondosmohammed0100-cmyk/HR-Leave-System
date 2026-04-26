const user = require("../models/user");
const loginValidation = require("./validation/authvalidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = async(req,res)=>{
    try{
       
  const{error, value} = loginValidation.validate(req.body,{
    abortEarly:false,
    stripUnknown:true
  });
    if(error){
        return res.status(400).json({
            msg:error.details.map((err)=>err.message)
        });
    }
    const {email,password} = value;
    const user = await user.findOne({email});
    if(!user) return res.status(400).json({
        msg:"Invalid email or password"
    });

    const matchpassword = await bcrypt.compare(password,user.password);
    if(!matchpassword) return res.status(400).json({
        msg:"Invalid email or password"
    });
    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"30d"});
    return res.status(200).json({
        msg:"Login successful",
        token
    });
  
    }catch(error){
        return res.status(500).json({
            msg:"Server error"  
        })
    }
}
module.exports = { login };
