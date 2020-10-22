const Boom = require('boom');

const Link = require('../models/Link');

module.exports.redirectLink = async (req, res, next) => {
  const { customizedPath } = req.params;

  const cacheLink = Link.cache.get(customizedPath);
  if (cacheLink) {
    res.redirect(cacheLink.originalUrl);
  }

  const link = await Link.findOne({ customizedPath: encodeURIComponent(customizedPath) });
  if (!link) {
    next(Boom.notFound());
    return;
  }

  res.redirect(link.originalUrl);
};
