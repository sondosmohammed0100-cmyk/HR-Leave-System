 const joi = require("joi");

const UserValidSchema=joi.object({

  username:joi.string().required().min(3).max(30),

  emailL:joi.string().email().required(),

  password:joi.string().min(6).required(),

  confirmPassword:joi.string().min(6).required().valid(joi.ref("password")),

  department :joi.string().required(),
  role:joi.string().valid('emplyee','HR').default('emplyee')

});


  const loginValidation = joi.object({

  email:joi.string().email().required(),
  password:joi.string().min(6).required()

 })










 module.exports = {loginValidation , UserValidSchema} ;