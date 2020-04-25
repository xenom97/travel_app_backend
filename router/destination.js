const router = require("express").Router();
const controller = require("../controllers/destination");
const { authentication } = require("../middleware/auth");

router.get("/", authentication, controller.findAll);

module.exports = router;