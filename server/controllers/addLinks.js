const { Link, validate } = require('../models/Link');

module.exports = (req, res) => {
  const { body } = req;
  const { error } = validate(body);

  if (error) {
    return res
      .status(400)
      .send(error.details[0].message);
  }

  const { customizedPath } = body;

  Link
    .find({
      customizedPath,
    })
    .countDocuments()
    .then((num) => {
      if (num) return res.status(400).send('客製化路徑重複了 🤔');

      const link = new Link(body);
      return link.save();
    })
    .then(link => res.status(200).send(link))
    .catch(({ errors }) => {
      const err = Object
        .values(errors)
        .map(err => err.message);

      console.error(err);
      res.status(500).send(err);
    });
};
