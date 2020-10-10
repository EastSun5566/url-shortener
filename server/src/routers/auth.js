const router = require('express').Router();

const { login } = require('../controllers/auth');

router.post('/', login);

module.exports = router;
