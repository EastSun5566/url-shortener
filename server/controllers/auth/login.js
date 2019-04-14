const Boom = require('boom');
const bcrypt = require('bcrypt');

const User = require('../../models/User');
const createJwt = require('../../services/createJwt');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  // 驗證請求
  const { error } = User.validate({ email, password });
  if (error) return next(Boom.badRequest(error.details[0].message));

  // 先查詢是否有此信箱
  const user = await User.findOne({ email });
  if (!user) return next(Boom.badRequest('無效的信箱或密碼 😢'));

  // 驗證密碼
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) return next(Boom.badRequest('無效的信箱或密碼 😢'));

  // 產生 JWT
  const { _id, createdAt } = user;
  const token = createJwt({ _id, createdAt });

  res
    .status(200)
    .json({ token });
};
