module.exports = (err, req, res, next) => {
  const message = err.message || err;
  const code = 500;
  const success = false;
  const result = [];
  res.status(code).json({
    success,
    code,
    message,
    result
  });
};