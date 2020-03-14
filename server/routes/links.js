const router = require('express').Router();
const createLink = require('../controllers/links/createLink');

const parseJwt = require('../middlewares/parse-jwt');

router.post('/', parseJwt, createLink);

module.exports = router;
