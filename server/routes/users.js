const router = require('express').Router();

const parseJwt = require('../middlewares/parseJwt');
const auth = require('../middlewares/auth');

const getMe = require('../controllers/users/getMe');
const createUser = require('../controllers/users/createUser');

router.get('/me', parseJwt, auth, getMe);
router.post('/', createUser);

module.exports = router;
