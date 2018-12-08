const Link = require('../../models/Link');

module.exports = (req, res, next) => {
  const { customizedPath } = req.params; // 拿客製化路徑

  Link
    .findOne({
      customizedPath,
    })
    .then((doc) => {
      if (!doc) { // 若找不到
        const err = new Error('Not Found');
        err.status = 404;

        next(err);
        return;
      }

      const { originalUrl } = doc;
      res.redirect(originalUrl); // 導向原網址
    })
    .catch(err => next(err));
};
