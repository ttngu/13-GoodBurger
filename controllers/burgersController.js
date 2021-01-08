// Dependancies
var express = require("express");
var router = express.Router();

// Import burger.js model
var burger = require("../models/burger.js");

// Create GET route
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Create POST route 
router.post("/api/burgers", function(req,res) {
    burger.create( ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        // Send back ID of new burger
        res.json({ id: result.insertId });
    });
});


// Create PUT route 
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                // ID does not exist if no rows were changed, thus 404 error
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});


// Export router
module.exports = router;