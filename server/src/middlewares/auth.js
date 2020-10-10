const Boom = require('boom');

module.exports = (req, _res, next) => {
  // eslint-disable-next-line no-underscore-dangle
  if (!req.user._id) {
    next(Boom.unauthorized('No Token'));
  }
};
