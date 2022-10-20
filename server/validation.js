const Joi = require("joi");

// 註冊是否合乎資料庫規格
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
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

//收集是否合乎資料庫規格
const collectionValidation = (data) => {
  const schema = Joi.object({
    id: Joi.string().required(),
    photographer: Joi.string().required(),
    photographer_url: Joi.string().required(),
    src: Joi.string().required(),
    alt: Joi.string(),
    original: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.collectionValidation = collectionValidation;
