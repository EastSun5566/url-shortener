const router = require('express').Router();

const rootRouter = require('./root');
const linkRouter = require('./link');
const userRouter = require('./user');
const authRouter = require('./auth');

router.use(rootRouter);
router.use('/v1/links', linkRouter);
router.use('/v1/users', userRouter);
router.use('/v1/auth', authRouter);

module.exports = router;
