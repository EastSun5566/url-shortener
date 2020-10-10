const rateLimit = require('express-rate-limit');
const Boom = require('boom');

module.exports = rateLimit({
  windowMs: 60 * 1000,
  max: 12,
  handler(req, res, next) {
    next(Boom.tooManyRequests(this.message));
  },
});
