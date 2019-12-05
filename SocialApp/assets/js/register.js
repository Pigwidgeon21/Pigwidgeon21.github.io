 $(document).ready(function() {
//onclick signup, hide login and show registration
    $("#signup").click(function() {
        $("#first").slideUp("slow", function() {
                $("#second").slideDown("slow");
        });  
    });
    

    //onclick signup, hide registration and show login
    $("#signin").click(function() {
        $("#second").slideUp("slow", function() {
                $("#first").slideDown("slow");
        });  
    });

});