const mysql = require("mysql2");
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pars1803?',
    database: 'todolistapp'
});
db.connect((error) => {
    if (error) throw error;
    console.log("connection successful");
});

module.exports = db;