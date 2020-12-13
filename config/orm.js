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
     
    // For loop to push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            // add quotaions if the string has spaces
            if (typeof value === "string" && value.indexOf("") >=0 ) {
                value = "'" + value + "'";
            }

            // push the array
            arr.push(key + "=" + value);
        }
    }

    // Return array of strings as a single string seperated by commas
    return arr.toString();
}

// Select and Create functions - Object for all SQL statement functions
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // Update function

}








// Export the orm object for the model (cat.js).
module.exports = orm;