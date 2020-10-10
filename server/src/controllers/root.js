const Boom = require('boom');

const Link = require('../models/Link');

module.exports.redirectLink = async (req, res, next) => {
  const { customizedPath } = req.params; // 拿客製化路徑

  // 先查詢連結
  const link = await Link.findOne({ customizedPath: encodeURIComponent(customizedPath) });
  if (!link) {
    next(Boom.notFound());
    return;
  }

  const { originalUrl } = link;
  res.redirect(originalUrl); // 導向原網址
};
