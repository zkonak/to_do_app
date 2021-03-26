//const { request } = require("express");
const express = require("express");
const todoappController = require("../controllers/todoappController");

const router = express.Router();
//consulter la liste des listes de tâches
router.get("/", todoappController.findAll);
//consulter une liste des tâches en particulier pour afficher les différentes tâches
router.get("/task/:id", todoappController.findTask);
//créer une nouvelle liste de tâches
router.post("/task", todoappController.addTodoList);
// le détail d'une tâche (date de création, description)
router.get("/taskDetail/:id", todoappController.findTaskDetail);
// créer une nouvelle tâches dans une liste de tâches donnée
router.post("/addTask/:list_id", todoappController.addTask);
//modifier la description d'une tâche
router.post("/updateTask/:list_id", todoappController.updateTask);
//supprimer une tâche d'une liste
router.post("/deleteTask/:id/:list_id", todoappController.deleteTask);

module.exports = router;