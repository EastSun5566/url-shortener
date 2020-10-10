const Boom = require('boom');

module.exports = validate => (req, _res, next) => {
  const { body } = req;

  const { error } = validate(body);
  if (error) next(Boom.badRequest(error.details[0].message));
};
