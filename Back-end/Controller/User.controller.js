const {UserValidSchema,loginValidation}=require('../Validation/User.validation');

const jwt = require("jsonwebtoken");
const User=require('../Model/User')
const bcrypt=require('bcrypt')
const Reqister=async(req,res,next)=>{
   try{

    const{error,value}= UserValidSchema.validate(req.body,{
      abortEarly:false,
      stripUnknown:true
    });
    //console.log(value)
    if(error){
       console.log(error)
      return res.status(400).json({msg:"error occured"})
    };
   
    const {username,email,password,department,role}=value;
    // console.log(req.body)
     const existUser = await User.findOne({ email }).select("-password");;

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
      
      
     return  res.status(201).json({msg:"Sucess","UserInfo": newUser})
    }
    catch(err){
      console.log(err)
      return res.status(500).json({msg:"Server error"})
      
      
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
    const user = await User.findOne({email}).select("+password");

    if(!user) return res.status(400).json({
        msg:"Invalid email or password"
    });
    // return console.log(user)
    const matchpassword = await bcrypt.compare(password,user.password);
    //   return console.log(matchpassword)
    if(!matchpassword) return res.status(400).json({
        msg:"Invalid email or password"
    });
    const token = jwt.sign(
        {role:user.role},
        process.env.JWT_SECRET,
        {expiresIn:"30d"});
   // return console.log(token)
    return res.status(200).json({
        msg:"Login successful",
        token
    });
  
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"Server error"  
        })
    }
}
module.exports={Reqister,login}