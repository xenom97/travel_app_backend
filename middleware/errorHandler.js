module.exports = (err, req, res, next) => {
  const errors = err.message || err;
  res.status(500).json({ errors });
};