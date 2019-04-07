const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// 環境變數
require('dotenv').config({ path: `./env/.env.${process.env.NODE_ENV}` });

// 資料庫
require('./db/mongoDb');

const IndexRouter = require('./routes');
const linksRouter = require('./routes/links');
const usersRouter = require('./routes/users');
const { notFoundHandler, errorHandler } = require('./middlewares/error');

const app = express();

// 中間件
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 路由
app.use(IndexRouter);
app.use('/v1/links', linksRouter);
app.use('/v1/users', usersRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
