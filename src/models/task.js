const db = require("../db");

class Task {
    constructor(name) {
        this.name = name;
    }
    static getAll(callback) {

        db.query("SELECT * FROM task where to_do_id=1", (error, result) => {
            if (error) {
                console.log(error);
                callback(error, null);
                return;
            }
            //console.log(result);
            callback(null, result);
        });
    }

}

module.exports = Task;