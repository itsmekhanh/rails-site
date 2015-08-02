$(document).ready(function(){
    var app = app || {};

    app.showMenu = true;

    $("#navigation-icon").on("click", function(){
        $("#navigation-menu").slideToggle({
            complete: function(){
                app.showMenu = !app.showMenu;
                if(app.showMenu)
                    $("#navigation-menu").removeAttr("style");
            }
        });
    });
});