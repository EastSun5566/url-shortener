const router = require('express').Router();
const createUser = require('../controllers/users/createUser');

router.post('/', createUser);

module.exports = router;
