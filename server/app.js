const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const linksRouter = require('./routes/links');
const IndexRouter = require('./routes');
const { notFound, errorHandler } = require('./middlewares/error');

// 環境變數
require('dotenv').config();

// 資料庫
require('./db');

const app = express();

// 中介體
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 路由
app.use('/api/links', linksRouter);
app.use(IndexRouter);

app.use(notFound);
app.use(errorHandler);


module.exports = app;
