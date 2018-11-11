const router = require('express').Router();
const addLinks = require('../controllers/links/addLinks');

router.post('/', addLinks);

module.exports = router;
