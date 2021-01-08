// Import ORM here
var orm = require("../config/orm.js");

// Code that will call the ORM functions using specific input for ORM
var burger = {
    all: function(cb) {
        
        orm.all("burgers", function(res) {
            cb(res);

        });
    },
    // Create Function
    // These variables col and vals are arrays
    create: function(cols, vals, cb) {
        orm.create("burgers", col, vals, function(res) {
            cb(res);
        });
    },
    // Update Function
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export
module.exports = burger;