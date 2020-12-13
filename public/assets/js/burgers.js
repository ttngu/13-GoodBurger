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
            
        )


    })
})

// Page reload, for the updated list

    
// Create form on submit
// On submit, prevent default
// Send POST request
// Page reload, for the updated list
