const express = require('express');
const redirectLink = require('../controllers/redirectLink');

const router = express.Router();

router.get('/:customizedPath', redirectLink);

module.exports = router;
