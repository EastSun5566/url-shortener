const router = require('express').Router();
const redirectLink = require('../../controllers/index/redirectLink');

router.get('/', (req, res) => res.json({ '🔥': '歡迎來到最 Chill der 短網址 API 🎉' }));
router.get('/:customizedPath', redirectLink);

module.exports = router;
