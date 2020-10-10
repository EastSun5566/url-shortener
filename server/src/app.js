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

(async () => {
  config({ path: `../env/.env.${process.env.NODE_ENV}` });

  await connectDB();

  const app = express();

  app.use(rateLimit);
  app.use(cors());
  app.use(compression());
  app.use(helmet());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(router);

  app.use(handleNotFound);
  app.use(handleErrors);
})();
