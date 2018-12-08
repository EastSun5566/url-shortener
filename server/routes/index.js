const router = require('express').Router();
const redirectLink = require('../controllers/index/redirectLink');

router.get('/:customizedPath?', redirectLink);

module.exports = router;
