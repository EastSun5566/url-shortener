const mongoose = require('mongoose');
const Joi = require('joi');

const { createRedisClient } = require('../db/redis');

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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
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

linkSchema.static.cache = {
  set(path, url) {
    const cache = createRedisClient();
    return cache.set(path, url);
  },

  get(path) {
    const cache = createRedisClient();
    return cache.get(path);
  },
};

module.exports = mongoose.model('Link', linkSchema);
