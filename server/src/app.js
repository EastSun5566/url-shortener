const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { config } = require('dotenv');

const { connectDB } = require('./db/mongodb');
const {
  rateLimit,
  handleNotFound,
  handleErrors,
} = require('./middlewares');
const router = require('./routers');

const createApp = async () => {
  config({ path: `../env/.env.${process.env.NODE_ENV}` });

  await connectDB();

  const app = express()
    .use(rateLimit)
    .use(cors())
    .use(compression())
    .use(helmet())
    .use(logger('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cookieParser())
    .use(router)
    .use(handleNotFound)
    .use(handleErrors);

  return app;
};

module.exports = createApp;
