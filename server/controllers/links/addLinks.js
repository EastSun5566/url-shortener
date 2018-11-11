const Link = require('../../models/Link');

module.exports = (req, res) => {
  const { body } = req;
  const { error } = Link.validate(body);

  if (error) return res.status(400).send(error.details[0].message);

  body.customizedPath = `💩💩💩${body.customizedPath}💩💩💩`;
  const { customizedPath } = body;
  Link
    .find({
      customizedPath,
    })
    .countDocuments()
    .then((num) => {
      if (num) return res.status(400).send('customized path is repeated');

      const link = new Link(body);
      return link.save();
    })
    .then((link) => {
      const linkObj = link.toObject();
      linkObj.shortUrl = `${req.protocol}://${req.get('host')}/${customizedPath}`;
      res.status(200).json(linkObj);
    })
    .catch(({ errors }) => {
      const err = Object
        .values(errors)
        .map(err => err.message);

      console.error(err);
      res.status(500).send(err);
    });
};
