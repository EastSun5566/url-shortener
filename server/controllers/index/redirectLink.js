const Boom = require('boom');

const Link = require('../../models/Link');

module.exports = async (req, res, next) => {
  const { customizedPath } = req.params; // 拿客製化路徑

  // 先查詢連結
  const link = await Link.findOne({ customizedPath: encodeURIComponent(customizedPath) });
  if (!link) return next(Boom.notFound());

  const { originalUrl } = link;
  res.redirect(originalUrl); // 導向原網址
};
