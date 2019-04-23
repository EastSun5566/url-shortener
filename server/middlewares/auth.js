const Boom = require('boom');

module.exports = (req, res, next) => {
  if (!req.user._id) return next(Boom.unauthorized('No Token'));
};
