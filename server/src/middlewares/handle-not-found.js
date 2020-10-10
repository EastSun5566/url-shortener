const Boom = require('boom');

module.exports = (_req, _res, next) => next(Boom.notFound());
