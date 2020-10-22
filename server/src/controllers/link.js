const Boom = require('boom');
const getSomeCoolEmojis = require('get-some-cool-emojis');

const Link = require('../models/Link');

module.exports.createLink = async (req, res, next) => {
  const { user, body } = req;
  const { originalUrl, customizedPath } = body;

  const { error } = Link.validate({ originalUrl, customizedPath });
  if (error) {
    next(Boom.badRequest(error.details[0].message));
    return;
  }

  const customizedPathWithEmoji = encodeURIComponent(`${getSomeCoolEmojis(50)}${customizedPath}${getSomeCoolEmojis(50)}`);

  const link = await Link.findOne({ customizedPath: customizedPathWithEmoji });
  if (link) {
    next(Boom.badRequest('這路徑有人用了 😢'));
    return;
  }

  const newLink = new Link({
    originalUrl,
    customizedPath: customizedPathWithEmoji,
    // eslint-disable-next-line no-underscore-dangle
    userId: user._id || null,
  });
  try {
    await newLink.save();

    await Link.cache.set(customizedPathWithEmoji, originalUrl);
  } catch (errors) {
    const errorMassage = Object
      .values(errors)
      .map((err) => err.message);

    next(Boom.internal(errorMassage));
    return;
  }

  const { _id, userId } = newLink;
  res
    .status(200)
    .json({
      _id,
      userId,
      shortUrl: `${req.protocol}://${req.get('host')}/${decodeURIComponent(customizedPath)}`,
    });
};
