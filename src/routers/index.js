//const { request } = require("express");
const express = require("express");
const todoappController = require("../controllers/todoappController");

const router = express.Router();
//recuperer les list;
router.get("/", todoappController.findAll);
router.get("/task/:id", todoappController.findTask);
router.post("/task", todoappController.addTodoList);
router.get("/taskDetail/:id", todoappController.findTaskDetail);
router.post("/addTask/:list_id", todoappController.addTask);
router.post("/updateTask/:id", todoappController.updateTask);

module.exports = router;