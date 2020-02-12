module.exports = (err, req, res) => {
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
