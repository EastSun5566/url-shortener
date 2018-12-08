// 找不到路由處理
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;

  next(err);
};

// 統一錯誤處理
exports.errorHandler = (err, req, res, next) => {
  const { status, message, stack } = err;

  res
    .status(status || 500)
    .json({
      message,
      stack,
    });
};
