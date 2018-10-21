const express = require('express');

const addLinks = require('../controllers/addLinks');
const redirectLink = require('../controllers/redirectLink');

const router = express.Router();

router.post('/links', addLinks);
router.get('/links/:customizedPath', redirectLink);

module.exports = router;
