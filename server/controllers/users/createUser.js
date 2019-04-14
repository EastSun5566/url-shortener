const Boom = require('boom');

const User = require('../../models/User');

module.exports = async (req, res, next) => {
  const { body } = req;

  // 驗證請求
  const { error } = User.validate(body);
  if (error) return next(Boom.badRequest(error.details[0].message));

  // 先查詢信箱是否被註冊過
  const { email } = body;
  const doc = await User.findOne({ email });
  if (doc) return next(Boom.badRequest('這信箱已被註冊 😢'));

  // DB 新增使用者
  const user = new User(body);
  try {
    await user.save();
  } catch (errors) {
    const errorMassage = Object
      .values(errors)
      .map(err => err.message);

    return next(Boom.internal(errorMassage));
  }

  res
    .status(200)
    .json(user);
};
