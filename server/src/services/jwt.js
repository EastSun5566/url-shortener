const jwt = require('jsonwebtoken');

exports.createJwt = (payload) => jwt.sign(
  payload,
  process.env.JWT_SECRET,
  { expiresIn: '1h' },
);
