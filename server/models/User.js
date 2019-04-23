const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.statics.validate = (user) => {
  const schema = Joi.object().keys({
    email: Joi
      .string()
      .trim()
      .required()
      .email(),
    password: Joi
      .string()
      .required()
      .min(5),
  });

  return Joi.validate(user, schema);
};

module.exports = mongoose.model('User', userSchema);
