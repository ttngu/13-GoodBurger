// Setup MySQL connection
var mysql = require("mysql");
var connection
if (process.env.JAWSDB_URL) {
  connection = myswl.createConnection(process.env.JAWSDB_URL)
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
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export for ORM to use
module.exports = connection;