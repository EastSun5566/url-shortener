const Link = require('../../models/Link');

module.exports = (req, res, next) => {
  const { customizedPath } = req.params; // 拿客製化路徑

  // 先查詢連結
  Link
    .findOne({
      customizedPath: encodeURIComponent(customizedPath.trim()),
    })
    .then((link) => {
      if (!link) { // 若找不到
        const err = new Error('Not Found');
        err.status = 404;

        next(err);
        return;
      }

      const { originalUrl } = link;
      res.redirect(originalUrl); // 導向原網址
    })
    .catch(err => next(err));
};
