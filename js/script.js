$(document).ready(function() {

    $(".box").on("click", function() {
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            $("." + className).css("background-color", "#000");
        } else {
            $("." + className).css("background-color", "#000");
            $("." + className).css("backgroudn-color", "red");
        }
    });

    
})