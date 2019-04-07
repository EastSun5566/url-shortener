const User = require('../../models/User');

module.exports = async (req, res, next) => {
  const { body } = req;

  // 驗證請求
  const { error } = User.validate(body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.status = 400;

    next(err);
    return;
  }

  // 先查詢信箱是否被註冊過
  const { email } = body;
  const doc = await User.findOne({ email });
  if (doc) {
    const err = new Error('這信箱已被註冊 😢');
    err.status = 400;

    next(err);
    return;
  }

  // 新增使用者
  const user = new User(body);
  try {
    await user.save();
  } catch (errors) {
    const errorMassage = Object
      .values(errors)
      .map(err => err.message);

    const err = new Error(errorMassage);
    next(err);
    return;
  }

  res
    .status(200)
    .json(user);
};
