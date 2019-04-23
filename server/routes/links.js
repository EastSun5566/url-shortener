const router = require('express').Router();
const createLink = require('../controllers/links/createLink');

const parseJwt = require('../middlewares/parseJwt');

router.post('/', parseJwt, createLink);

module.exports = router;
