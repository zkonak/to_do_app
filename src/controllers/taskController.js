const { response } = require("express");
const todolist = require("../models/task");

exports.findAll = (request, response) => {
    //recuperer les  taches
    todolist.getAll((error, task) => {
        if (error) {
            response.send(error.message);
        }
        console.log("PROMOOOOOOOOOOOOOO ", task);
        //create html page
        response.render("task.ejs", { task });

        //return listedetaches;
    });
}