module.exports = (err, req, res, next) => {
  let message = err.message || err;
  let code = 500;
  const result = [];
  const success = false;
  switch (err.name) {
    case 'SequelizeValidationError':
    case 'SequelizeUniqueConstraintError':
      code = 400;
      message = err.name;
      err.errors.forEach(e => result.push(e.message));
      break;
    case 'SequelizeForeignKeyConstraintError':
      code = 400;
      message = err.parent.detail;
      break;
    case 'LOGIN_FAILED':
      code = 400;
      break;
    case 'JsonWebTokenError':
    case 'TokenExpiredError':
      code = 401;
      break;
  }
  res.status(code).json({
    success,
    code,
    message,
    result
  });
};