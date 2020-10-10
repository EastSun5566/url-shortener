const router = require('express').Router();

const { parseJwt, auth } = require('../middlewares');
const { getMe, createUser } = require('../controllers/user');

router
  .get('/me', parseJwt, auth, getMe)
  .post('/', createUser);

module.exports = router;
