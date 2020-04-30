const router = require("express").Router();
const controller = require("../controllers/destination");
const { authentication } = require("../middleware/auth");

router.get("/", authentication, controller.findAll);
router.post("/create", authentication, controller.create);

module.exports = router;