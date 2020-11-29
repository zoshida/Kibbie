$("document").ready(function() {

    
    $("#playButton").on("click", function() {
        $("#img").attr("src", "src/images/cenario/img003.png");
        $("div").remove("#playButton");
        loading();
    });
});
