const Boom = require('boom');

module.exports = validate => (req, res, next) => {
  const { body } = req;

  const { error } = validate(body);
  if (error) return next(Boom.badRequest(error.details[0].message));
};
