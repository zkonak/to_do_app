const db = require("../db");

class ToDoList {
    constructor(name) {
        this.name = name;
    }
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




    static updateTask(requestBody, id, callback) {
        var queryUpdate = ` update task set description="${requestBody.description}" ,status=${requestBody.status} ,name = "${requestBody.name}" where id=${id} `;
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



}

module.exports = ToDoList;