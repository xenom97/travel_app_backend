const { Admin } = require("../models");
const jwt = require("jsonwebtoken");

const controller = {
  register: async (req, res, next) => {
    const { username, password, confirmPassword } = req.body;
    if (password !== confirmPassword) return next("password not match");
    try {
      const newAdmin = await Admin.create({ username, password });
      const msg = {
        username: newAdmin.username
      }
      res.status(201).json({ msg });
    }
    catch (err) {
      next(err)
    }
  },

  login: async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const admin = await Admin.login(username, password);
      const token = jwt.sign(admin, process.env.JWT_SECRET, {
        expiresIn: '12h'
      });
      const msg = { token }
      res.status(200).json({ msg })
    }
    catch (err) {
      next(err)
    }
  }
};

module.exports = controller;