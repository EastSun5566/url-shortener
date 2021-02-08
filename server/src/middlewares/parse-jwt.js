const jwt = require('express-jwt');

module.exports = () => jwt({
  secret: process.env.JWT_SECRET,
  getToken(req) {
    return req.get('x-auth-token');
  },
});
