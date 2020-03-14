module.exports = (err, req, res) => {
  const { stack, output } = err;
  const { statusCode, message, error } = output.payload;

  res
    .status(statusCode || 500)
    .json({
      message: message || error,
      statusCode,
      ...(process.env.NODE_ENV === 'production' && { stack }),
    });
};
