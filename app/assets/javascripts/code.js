$(document).ready(function(){
    var projectImages = $(".project-images");

    if(projectImages){
        var images = projectImages.find("img");
        var index = 0;

        projectImages.remove();

        $("#banner").append(images[index]);

        if (images.length > 1){
            setInterval(function(){
                if(index < images.length-1){
                    index++;
                }else{
                    index = 0;
                }
                $("#banner").find("img").fadeTo(500, .1, function(){
                    $(this).attr("src", images[index].src).fadeTo(200,1);
                });
            }, 8000);
        }

    }
});