const UserSchema=require('../Validation/User.validation');
const User=require('../Model/User')
const bcrypt=require('bcrypt')
const Reqister=async(req,res,next)=>{
   try{

    const{error,value}= UserSchema.validate(req.body,{
      abortEarly:false,
      stripUnknown:true
    });

    if(error){
      return res.status(400).json({msg:"error occured"})
    };

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
      
      
    }
  
  
};
module.exports=Reqister