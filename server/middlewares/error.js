const Boom = require('boom');

// 404 路由處理
exports.notFoundHandler = (req, res, next) => next(Boom.notFound());

// 統一錯誤處理
exports.errorHandler = (err, req, res, next) => {
  const { stack, output } = err;
  const { statusCode, message, error } = output.payload;

  res
    .status(statusCode || 500)
    .json({
      message: message || error,
      statusCode,
      stack: process.env.NODE_ENV === 'production' ? undefined : stack,
    });
};
