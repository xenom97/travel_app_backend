const router = require("express").Router();
const errorHandler = require("../middleware/errorHandler");
const adminRoutes = require("./admin");

router.get("/", (req, res, next) => res.send("Home"));
router.use("/admins", adminRoutes);
router.use(errorHandler);

module.exports = router;