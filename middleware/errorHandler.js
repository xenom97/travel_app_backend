module.exports = (err, req, res, next) => {
  let message = err.message || err;
  let code = 500;
  const result = [];
  const success = false;
  switch (err.name) {
    case 'SequelizeValidationError':
      code = 400;
      message = err.name;
      err.errors.forEach(e => result.push(e.message));
      break;
    case 'SequelizeUniqueConstraintError':
      code = 400;
      message = err.name;
      err.errors.forEach(e => result.push(e.message));
      break;
    case 'SequelizeForeignKeyConstraintError':
      code = 400;
      message = err.parent.detail;
      break;
    case 'JsonWebTokenError':
      code = 401;
      break;
    case 'REGISTER_FAILED':
      code = 400;
      break;
    case 'LOGIN_FAILED':
      code = 400;
      break;
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