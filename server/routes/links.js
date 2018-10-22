const express = require('express');

const addLinks = require('../controllers/addLinks');
const redirectLink = require('../controllers/redirectLink');

const router = express.Router();

router.post('/api/links', addLinks);
router.get('/:customizedPath', redirectLink);

module.exports = router;
