// Import MySQL connection.
var connection = require("../config/connection.js");

// Create methods that execute the necessary MySql commands in the controllers:

// Printing questions marks because the example does?
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert obj to key/value pairs in SQL syntax
function objToSql(ob) {
    var arr = [];
     
    // For lopp to push the key/value as a string int arr

    // Return array of strings as a single string seperated by commas
}

// Create function - Object for all SQL statement functions




// Update function



// Export the orm object for the model (cat.js).
module.exports = orm;