const mysql = require("mysql");

let connection;

connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burger_db"
});

connection.connect(err => {
    if(err) {
        console.error("Connection error: " + err.stack);
        return;
    }
    console.log("Connected as Id " + connection.threadId);
});


module.exports = connection;