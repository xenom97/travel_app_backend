const router = require("express").Router();
const controller = require("../controllers/admin");

router
  .post("/register", controller.register)
  .post("/login", controller.login);

module.exports = router;