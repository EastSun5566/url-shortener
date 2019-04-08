// 404 路由處理
exports.notFoundHandler = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;

  next(err);
};

// 統一錯誤處理
exports.errorHandler = (err, req, res, next) => {
  const { stack, output } = err;
  const { statusCode, message } = output.payload;

  res
    .status(statusCode || 500)
    .json({
      message,
      statusCode,
      stack: process.env.NODE_ENV === 'production' ? undefined : stack,
    });
};
