const Boom = require('boom');
const bcrypt = require('bcrypt');

const User = require('../../models/User');
const createJwt = require('../../services/createJwt');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  // 驗證請求
  const { error } = User.validate({ email, password });
  if (error) return next(Boom.badRequest(error.details[0].message));

  // 先查詢信箱是否被註冊過
  const user = await User.findOne({ email });
  if (user) return next(Boom.badRequest('這信箱已被註冊 😢'));

  // DB 新增使用者
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new User({ email, password: hashedPassword });
  try {
    await newUser.save();
  } catch (errors) {
    const errorMassage = Object
      .values(errors)
      .map(err => err.message);

    return next(Boom.internal(errorMassage));
  }

  // 產生 JWT
  const { _id, createdAt } = newUser;
  const token = createJwt({ _id, createdAt });

  res.set('x-auth-token', token);
  res
    .status(200)
    .json({ _id, createdAt });
};
