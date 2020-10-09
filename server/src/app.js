const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// 環境變數
require('dotenv').config({ path: `../env/.env.${process.env.NODE_ENV}` });

// 資料庫
require('../db/mongoDb');

const rateLimit = require('./middlewares/rate-limit');
const handleNotFound = require('./middlewares/handle-not-found');
const handleErrors = require('./middlewares/handle-errors');

const indexRouter = require('./routes');
const linksRouter = require('./routes/links');
const usersRouter = require('./routes/users');
const AuthRouter = require('./routes/auth');

const app = express();

// 中間件
app.use(rateLimit);
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 路由
app.use(indexRouter);
app.use('/v1/links', linksRouter);
app.use('/v1/users', usersRouter);
app.use('/v1/auth', AuthRouter);

app.use(handleNotFound);
app.use(handleErrors);

module.exports = app;
