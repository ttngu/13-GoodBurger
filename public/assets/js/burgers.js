// Wait to attach handlers until DOM is fully loaded

// Create an onclick function to change devoured status
$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request, AJAX 
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);

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
            name: $("#bur").val().trim(),
            devoured: $("[burger_name=devoured]:checked").val().trim()
        };

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


    
