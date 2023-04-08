const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

// Home router
router.get("/", homeController.home);

// use express router // middleware function // for user other routers
router.use("/create-list",require("./task"));
router.use("/delete-task", require("./task"));

module.exports = router;