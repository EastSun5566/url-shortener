const getSomeCoolEmojis = require('get-some-cool-emojis');
const Link = require('../../models/Link');

module.exports = (req, res, next) => {
  const { body } = req; // 請求身體

  // 驗證請求
  const { error } = Link.validate(body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.status = 400;
    return next(err);
  }

  // 隨機產生 Emoji 加至客製化路徑 🔥🚀👌
  body.customizedPath = encodeURIComponent(`${getSomeCoolEmojis(50)}${body.customizedPath}${getSomeCoolEmojis(50)}`);
  const { customizedPath } = body;

  // 先查詢客製化路徑是否被用過
  Link
    .findOne({ customizedPath })
    .then((doc) => {
      if (doc) { // 若被用過
        const err = new Error('這路徑有人用了 😢');
        err.status = 400;
        return next(err);
      }

      const link = new Link(body);
      link
        .save()
        .then((link) => { // 新增連結
          const linkObj = link.toObject();
          linkObj.shortUrl = `${req.protocol}://${req.get('host')}/${decodeURIComponent(customizedPath)}`;

          res
            .status(200)
            .json(linkObj);
        })
        .catch(({ errors }) => {
          const errorMassage = Object
            .values(errors)
            .map(err => err.message);

          const err = new Error(errorMassage);
          next(err);
        });
    });
};
