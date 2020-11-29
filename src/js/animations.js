


// Loading and Building animation //

function loading() {
    $("#txtLoading").show();
    var loadCount = -1;

    loadingLoop()
    function loadingLoop() {
        setTimeout(function() {
            $("#txtLoading").html("Loading.");
        }, 500); 
        setTimeout(function() {
            $("#txtLoading").html("Loading..");
        }, 1000);
        setTimeout(function() {
            $("#txtLoading").html("Loading...");
        }, 1500);
        setTimeout(function() {
            $("#txtLoading").html("Loading");
        }, 2000);
        loadCount++;

        switch (loadCount) {
            // Loading animation //
            case 1:
                $("#img").attr("src", "src/images/cenario/img004.png");
                break;
            case 2:
                $("#img").attr("src", "src/images/cenario/img005.png");
                break;
            case 3:
                $("#img").attr("src", "src/images/cenario/img006.png");
                break;
            case 4:
                alert("ALERTA DE VÍRUS!!! clique em 'OK' para proteger o seu computador.");
                break;
            case 5:
                $("#img").attr("src", "src/images/cenario/img007.png");
                break;

                 // Building animation //
            case 6:
                $("#img").attr("src", "src/images/cenario/img007-1.png");
                break;
            case 7:
                $("#img").attr("src", "src/images/cenario/img008.png");
                break;
            case 8:
                $("#img").attr("src", "src/images/cenario/img009.png");
                break;
            case 9:
                $("#img").attr("src", "src/images/cenario/img010.png");
                break;
            case 10:
                $("#img").attr("src", "src/images/cenario/img011.png");
                break;
            case 11:
                $("#img").attr("src", "src/images/cenario/img012.png");
                break;
        }
    }

    
    setInterval(function(){ 
        if (loadCount <= 6){
            loadingLoop();
            if (loadCount === 6){
                $("#txtLoading").remove();
            }
            console.log(loadCount);
        }
    }, 2000);

    setInterval(function(){ 
        if (loadCount >= 6 && loadCount <= 10){
            loadingLoop();
            if (loadCount === 10) {
                clearInterval();
            }
            console.log(loadCount);
        }
    }, 500);
    
}
