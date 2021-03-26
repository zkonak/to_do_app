const { response } = require("express");
const todolist = require("../models/todolist");

//consulter la liste des listes de tâches
exports.findAll = (request, response) => {

        todolist.getAll((error, todolist) => {
            if (error) {
                response.send(error.message);
            }

            //create html page
            response.render("home.ejs", { todolist });


        });
    }
    //consulter une liste des tâches en particulier pour afficher les différentes tâches
exports.findTask = (request, response) => {

        const { id } = request.params;
        todolist.getTasks(id, (error, tasks) => {
            if (error) {
                response.send(error.message);
            }
            response.render("task.ejs", { tasks });


        });

    }
    //créer une nouvelle liste de tâches
exports.addTodoList = (request, response) => {
    // des taches
    console.log(request.body);
    todolist.addTodoList(request.body, (error, tasks) => {
        if (error) {
            response.send(error.message);
        }

        response.redirect("/");

    })


}

// le détail d'une tâche (date de création, description)
exports.findTaskDetail = (request, response) => {
    // des taches
    const { id } = request.params;
    todolist.getTaskDetail(id, (error, result) => {
        if (error) {
            response.send(error.message);
        }
        taskDetail = result[0];
        response.render("taskDetail.ejs", { taskDetail });


    });

}

//modifier la description d'une tâche
exports.updateTask = (request, response) => {


        const { list_id } = request.params;
        console.log("list_id=" + list_id);
        todolist.updateTask(request.body, list_id, (error, tasks) => {
            if (error) {
                response.send(error.message);
            }

            response.redirect("/task/" + list_id);

        });

    }
    // créer une nouvelle tâches dans une liste de tâches donnée
exports.addTask = (request, response) => {
        // des taches
        const { list_id } = request.params;

        todolist.addTask(request.body, list_id, (error, tasks) => {
            if (error) {
                response.send(error.message);
            }

            response.redirect("/task/" + list_id);

        })


    }
    //supprimer une tâche d'une liste
exports.deleteTask = (request, response) => {


    const { id } = request.params;

    todolist.deleteTask(request.body, id, (error, tasks) => {
        if (error) {
            response.send(error.message);
        }

        response.redirect("/task/" + request.params.list_id);

    });

}

exports.updateStatus = (request, response) => {


    const { id } = request.params;

    console.log("listid:" + request.params.list_id + "id" + request.params.id);

    todolist.updateStatus(request.body, id, (error, tasks) => {
        if (error) {
            response.send(error.message);
        }


        response.redirect("/task/" + request.params.list_id);

    });

}