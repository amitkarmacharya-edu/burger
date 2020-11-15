const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: "3000",
  user: "root",
  password: "root",
  database: "burgers_db",
});

connection.connect(function(err) {
    if(err) {
        console.log("Error connection: " + err.stack);
        return false;
    }
    console.log("Database connected, connected as id :" + connection.threadId);
});

module.exports = connection;