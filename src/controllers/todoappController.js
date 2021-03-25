const { response } = require("express");
const todolist = require("../models/todolist");

exports.findAll = (request, response) => {
    //recuperer les liste de taches
    todolist.getAll((error, todolist) => {
        if (error) {
            response.send(error.message);
        }

        //create html page
        response.render("home.ejs", { todolist });

        //return listedetaches;
    });
}

exports.findTask = (request, response) => {
    // des taches
    const { id } = request.params;
    todolist.getTasks(id, (error, tasks) => {
        if (error) {
            response.send(error.message);
        }
        response.render("task.ejs", { tasks });


    });

}

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


exports.updateTask = (request, response) => {


    const { id } = request.params;
    todolist.updateTask(request.body, id, (error, tasks) => {
        if (error) {
            response.send(error.message);
        }

        response.redirect("/task/" + id);

    });

}

exports.addTask = (request, response) => {
    // des taches
    const { list_id } = request.params;
    console.log(request.body);
    todolist.addTask(request.body, list_id, (error, tasks) => {
        if (error) {
            response.send(error.message);
        }

        response.redirect("/task/" + list_id);

    })


}