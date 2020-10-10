const router = require('express').Router();

const { redirectLink } = require('../controllers/root');

router
  .get('/', (_req, res) => res.json({ '🔥': '歡迎來到最 Chill der 短網址 API 🎉' }))
  .get('/:customizedPath', redirectLink);

module.exports = router;
