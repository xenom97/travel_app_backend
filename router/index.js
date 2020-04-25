const router = require("express").Router();
const errorHandler = require("../middleware/errorHandler");
const adminRoutes = require("./admin");
const destinationRoutes = require("./destination");

router.get("/", (req, res, next) => res.send("Home"));
router.use("/admins", adminRoutes);
router.use("/destinations", destinationRoutes);
router.use(errorHandler);

module.exports = router;