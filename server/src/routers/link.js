const router = require('express').Router();

const { createLink } = require('../controllers/link');
const { parseJwt } = require('../middlewares');

router.post('/', parseJwt, createLink);

module.exports = router;
