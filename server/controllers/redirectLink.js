const Link = require('../models/Link');

module.exports = (req, res) => {
  const { customizedPath } = req.params;

  Link
    .findOne({
      customizedPath,
    })
    .then(({ originalUrl }) => res.redirect(originalUrl))
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
};
