const Boom = require('boom');
const getSomeCoolEmojis = require('get-some-cool-emojis');

const Link = require('../../models/Link');

module.exports = async (req, res, next) => {
  const { originalUrl, customizedPath } = req.body;

  // 驗證請求
  const { error } = Link.validate({ originalUrl, customizedPath });
  if (error) return next(Boom.badRequest(error.details[0].message));

  // Emoji 化客製化路徑 🔥🚀👌
  const customizedPathWithEmoji = encodeURIComponent(`${getSomeCoolEmojis(50)}${customizedPath}${getSomeCoolEmojis(50)}`);

  // 先查詢客製化路徑是否被用過
  const link = await Link.findOne({ customizedPath: customizedPathWithEmoji });
  if (link) return next(Boom.badRequest('這路徑有人用了 😢'));

  // DB 新增連結
  const newLink = new Link({ originalUrl, customizedPath: customizedPathWithEmoji });
  try {
    await newLink.save();
  } catch (errors) {
    const errorMassage = Object
      .values(errors)
      .map(err => err.message);

    return next(Boom.internal(errorMassage));
  }

  res
    .status(200)
    .json({
      ...newLink,
      shortUrl: `${req.protocol}://${req.get('host')}/${decodeURIComponent(customizedPath)}`,
    });
};
