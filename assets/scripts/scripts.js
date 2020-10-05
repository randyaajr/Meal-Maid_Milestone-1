//Here is where I'll place some jquery animate effects
$(document).ready(function() {

    $("#b-card-1").mouseenter(function() {
        $("#card-1, #card-title-1").fadeTo(1000, 0.5);
    });

    $("#b-card-1").mouseleave(function() {
        $("#card-1, #card-title-1").fadeTo(1000, 1)
    });


    $("#b-card-2").mouseenter(function() {
        $("#card-2, #card-title-2").fadeTo(1000, 0.5);
    });

    $("#b-card-2").mouseleave(function() {
        $("#card-2, #card-title-2").fadeTo(1000, 1)
    });


    $("#b-card-3").mouseenter(function() {
        $("#card-3, #card-title-3").fadeTo(1000, 0.5);
    });

    $("#b-card-3").mouseleave(function() {
        $("#card-3, #card-title-3").fadeTo(1000, 1)
    });
});