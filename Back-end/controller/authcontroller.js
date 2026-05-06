const User = require("../Model/User.js");
const   {loginValidation , UserValidSchema}= require("./validation/authvalidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const Reqister=async(req,res,next)=>{
   try{

    const{error,value}= UserValidSchema.validate(req.body,{
      abortEarly:false,
      stripUnknown:true
    });

    if (error) {
  return res.status(400).json({ msg: error.details[0].message });
}

    const {username,email,password,department,role}=value;

     const existUser = await User.findOne({ email });

    if (existUser) {
        return res.status(409).json({ msg: "User already Exist"});
     }
     const hashPassword=await bcrypt.hash(password,10);
      const newUser = await User.create({
        username,
        email,
        password:hashPassword,
        department,
        role
      });
      res.status(201).json({msg:"Sucess","UserInfo": newUser})
    }
    catch(err){
      return res.status(500).json({msg:"Server error"})
       console.log(err);
       
      
    }
  
  
};



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
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({
        msg:"Invalid email or password"
    });

    const matchpassword = await bcrypt.compare(password,user.password);
    if(!matchpassword) return res.status(400).json({
        msg:"Invalid email or password"
    });

    const token = jwt.sign({role:user.role},process.env.JWT_SECRET,{expiresIn:"30d"});
    return res.status(200).json({
        msg:"Login successful",
        token
    });
  
    }catch(err){
        console.log(err)
        return res.status(500).json({
            msg:"Server error"  
        })
    }
}


module.exports = { login , Reqister };






