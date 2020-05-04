const router = require("express").Router();
const controller = require("../controllers/destination");
const { authentication } = require("../middleware/auth");
const multer = require("multer");
const upload = multer().array('images');

router.get("/", controller.findAll);
router.post("/create", upload, controller.create);
router.post("/images/add/:DestinationId", upload, controller.addImages);
router.delete("/images/delete/:id", controller.deleteImages);

module.exports = router;