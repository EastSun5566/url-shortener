const router = require('express').Router();
const createLink = require('../controllers/links/createLink');

router.post('/', createLink);

module.exports = router;
