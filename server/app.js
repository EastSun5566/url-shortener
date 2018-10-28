const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();

require('./db/connect');
const linksRouter = require('./routes/links');
const IndexRouter = require('./routes');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', IndexRouter);
app.use('/api/links', linksRouter);

module.exports = app;
