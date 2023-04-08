const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task_controller.js");

// router to handle the all requests 
router.post("/", taskController.createTask);
router.get("/", taskController.deleteTask);

module.exports = router;