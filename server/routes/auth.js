const router = require('express').Router();
const login = require('../controllers/auth/login');

router.post('/', login);

module.exports = router;
