const Joi = require("joi");

// 註冊是否合乎資料庫規格
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
    role: Joi.string().required().valid("student", "instructor"),
  });

  return schema.validate(data);
};

// 登入是否合乎資料庫規格
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
