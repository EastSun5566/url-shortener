const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();

require('./db');
const linksRouter = require('./routes/links');
const IndexRouter = require('./routes');

const app = express();

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/links', linksRouter);
app.use(IndexRouter);

module.exports = app;
