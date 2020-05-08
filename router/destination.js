const router = require("express").Router();
const controller = require("../controllers/destination");
const { authentication } = require("../middleware/auth");
const multer = require("multer");
const upload = multer().array('images');

router
  .get("/", controller.findAll)
  .post("/create", upload, controller.create)
  .put("/update/:id", controller.update)
  .delete("/delete/:id", controller.delete)
  .post("/images/:DestinationId", upload, controller.addImages)
  .delete("/images/:id/:name", controller.deleteImages);

module.exports = router;