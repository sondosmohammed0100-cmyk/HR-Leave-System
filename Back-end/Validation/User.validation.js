const JOI=require('joi')
const UserValidSchema=JOI.object({

  username:JOI.string().required().min(3).max(30),

  email:JOI.string().email().required(),

  password:JOI.string().min(6).required(),

  confirmPassword:JOI.string().min(6).required().valid( JOI.ref("password")),

  department :JOI.string().required(),
  role:JOI.string().valid('emplyee','HR').default('emplyee')

});
 
 const loginValidation = JOI.object({
  email:JOI.string().email().required(),
  password:JOI.string().min(6).required()

 })


module.exports = {UserValidSchema,loginValidation};