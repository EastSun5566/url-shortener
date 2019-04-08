const router = require('express').Router();
const addLinks = require('../controllers/links/createLink');

router.post('/', addLinks);

module.exports = router;
