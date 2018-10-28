const express = require('express');
const addLinks = require('../controllers/addLinks');

const router = express.Router();

router.post('/', addLinks);

module.exports = router;
