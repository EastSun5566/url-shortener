const mongoose = require('mongoose');
const Joi = require('joi');

const linkSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    trim: true,
  },
  customizedPath: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

linkSchema.statics.validate = (link) => {
  const schema = Joi.object().keys({
    originalUrl: Joi
      .string()
      .trim()
      .uri()
      .required(),
    customizedPath: Joi
      .string()
      .trim()
      .required(),
  });

  return Joi.validate(link, schema);
};

module.exports = mongoose.model('Link', linkSchema);
