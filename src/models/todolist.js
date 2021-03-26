const db = require("../db");

class ToDoList {
    constructor(name) {
        this.name = name;
    }


    //consulter la liste des listes de tâches

    static getAll(callback) {

        db.query("SELECT * FROM to_do", (error, result) => {
            if (error) {
                console.log(error);
                callback(error, null);
                return;
            }
            //console.log(result);
            callback(null, result);
        });
    }

    //consulter une liste des tâches en particulier pour afficher les différentes tâches
    static getTasks(id, callback) {

        db.query(`

        SELECT t.*, d.id as list_id, d.name as list_name FROM todolistapp.to_do d  left join todolistapp.task t on d.id=t.to_do_id where d.id=${id} `, (error, result) => {
            if (error) {
                console.log(error);
                callback(error, null);
                return;
            }
            console.log(result);
            callback(null, result);
        });
    }

    //créer une nouvelle liste de tâches
    static addTodoList(requestBody, callback) {
        console.log(requestBody.nameList);
        db.query(` insert into todolistapp.to_do (NAME) values ("${requestBody.nameList}") `, (error, result) => {
            if (error) {
                console.log(error);
                callback(error, null);
                return;
            }
            console.log(result);
            callback(null, result);
        });
    }



    // le détail d'une tâche (date de création, description)
    static getTaskDetail(id, callback) {
        console.log("id task=" + id);
        db.query(`SELECT * FROM task where id=${id} `, (error, result) => {
            if (error) {
                console.log(error);
                callback(error, null);
                return;
            }
            console.log(result);
            callback(null, result);
        });
    }



    //modifier la description d'une tâche
    static updateTask(requestBody, id, callback) {
        let status = 0;
        if (requestBody.status == 1) {
            status = 1;
        }
        var queryUpdate = ` update task set description="${requestBody.description}" ,status=${status} ,name = "${requestBody.name}" where id=${requestBody.task_id} `;
        console.log(queryUpdate);
        db.query(queryUpdate, (error, result) => {
            if (error) {
                console.log(error);
                callback(error, null);
                return;
            }

            callback(null, result);
        });
    }



    // créer une nouvelle tâches dans une liste de tâches donnée
    static addTask(requestBody, list_id, callback) {

        var query = ` insert into todolistapp.task (NAME,date_creation,status,to_do_id) values ("${requestBody.name}",CURDATE(),false,${list_id}) `;
        console.log(query);
        db.query(query, (error, result) => {
            if (error) {
                console.log(error);
                callback(error, null);
                return;
            }
            console.log(result);
            callback(null, result);
        });
    }


    //supprimer une tâche d'une liste
    static deleteTask(requestBody, id, callback) {
        var queryUpdate = ` delete  from task  where id=${id} `;
        console.log(queryUpdate);
        db.query(queryUpdate, (error, result) => {
            if (error) {
                console.log(error);
                callback(error, null);
                return;
            }

            callback(null, result);
        });
    }



}

module.exports = ToDoList;