const router = require('express').Router();
const addLinks = require('../controllers/addLinks');

router.post('/', addLinks);

module.exports = router;
