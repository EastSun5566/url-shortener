const router = require('express').Router();
const redirectLink = require('../controllers/redirectLink');

router.get('/:customizedPath', redirectLink);

module.exports = router;
