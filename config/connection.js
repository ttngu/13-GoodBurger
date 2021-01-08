// Setup MySQL connection
var mysql = require("mysql");
var connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "harrypotter",
    // process.env.LOCAL_MYSQL_PW,
    database: "burgers_db"
  });

}


// Make connection
connection.connect();



// Export for ORM to use
module.exports = connection;