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
// selectALL()
// insertOne()
// updateOne()






// Export the orm object for the model (cat.js).
module.exports = orm;