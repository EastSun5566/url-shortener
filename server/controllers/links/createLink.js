const Boom = require('boom');
const getSomeCoolEmojis = require('get-some-cool-emojis');

const Link = require('../../models/Link');

module.exports = async (req, res, next) => {
  const { body } = req;

  // 驗證請求
  const { error } = Link.validate(body);
  if (error) return next(Boom.badRequest(error.details[0].message));

  // Emoji 化客製化路徑 🔥🚀👌
  const customizedPath = encodeURIComponent(`${getSomeCoolEmojis(50)}${body.customizedPath}${getSomeCoolEmojis(50)}`);

  // 先查詢客製化路徑是否被用過
  const doc = await Link.findOne({ customizedPath });
  if (doc) return next(Boom.badRequest('這路徑有人用了 😢'));

  // DB 新增連結
  const link = new Link({ ...body, customizedPath });
  try {
    await link.save();
  } catch (errors) {
    const errorMassage = Object
      .values(errors)
      .map(err => err.message);

    return next(Boom.internal(errorMassage));
  }

  res
    .status(200)
    .json({
      ...link,
      shortUrl: `${req.protocol}://${req.get('host')}/${decodeURIComponent(customizedPath)}`,
    });
};
