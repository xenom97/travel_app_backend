const jwt = require("jsonwebtoken");
const { Admin } = require("../models");

module.exports = {
  authentication: async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization || "Bearer ";
    try {
      const data = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
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