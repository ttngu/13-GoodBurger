// Wait to attach handlers until DOM is fully loaded

// Create an onclick function to change devoured status
$(function() {
    $(".change-eaten").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newEatenState = {
            eaten: newEaten
        };

        // Send the PUT request, AJAX 
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log("changed eaten to", newEaten);

                // Page reload, for the updated list
                location.reload();
            }
        );
    });

    // Create form on submit
    $(".create-form").on("submit", function(event) {
        // On submit, prevent default
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };
        console.log(newBurger);

        // Send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Page reload, for the updated list
                location.reload();
            }
        );
    });
});


    
