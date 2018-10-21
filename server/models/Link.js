const mongoose = require('mongoose');
const Joi = require('joi');

const validate = (link) => {
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

const Link = mongoose.model('Link', new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    trim: true,
  },
  customizedPath: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}));

exports.Link = Link;
exports.validate = validate;
