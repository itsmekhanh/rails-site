$(document).ready(function(){
    var projectImages = $(".project-images");

    if(projectImages){
        var images = projectImages.find("img");
        var index = 0;

        projectImages.remove();

        $("#banner").css({"background-image":"url('"+images[index].src+"')"});

        setInterval(function(){
            if(index < images.length-1){
                index++;
            }else{
                index = 0;
            }
            $("#banner").css({"background-image":"url('"+images[index].src+"')"});
        }, 5000);
    }
});