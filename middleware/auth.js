const jwt = require("jsonwebtoken");
const { Admin } = require("../models");

module.exports = {
  authentication: async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return next('token must be provided');
    const data = jwt.verify(authorization.split(" ")[1], process.env.JWT_SECRET);
    try {
      if (data.type === 'admin') {
        const admin = await Admin.findByPk(data.id);
        if (admin) return next();
        const error = {
          status: 400,
          name: "Not Authenticated",
          message: "User not found"
        };
        return next(error);
      }
    }
    catch (err) {
      next(err)
    }
  }
}