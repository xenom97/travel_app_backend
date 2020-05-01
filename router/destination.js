const router = require("express").Router();
const controller = require("../controllers/destination");
const { authentication } = require("../middleware/auth");

router.get("/", controller.findAll);
router.post("/create", controller.create);
router.post("/images/add/:DestinationId", controller.addImages);
router.delete("/images/delete/:id", controller.deleteImages);

module.exports = router;