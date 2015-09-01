$(document).ready(function(){
    var app = app || {};
    var $navigationIcon = $("#navigation-icon");
    var $navigationMenu = $("#navigation-menu");

    app.showMenu = true;
    app.showSmallMenu = false;
    app.menuBgThreshold = 20;

    $navigationIcon.on("click", function(){
        if(app.showMenu){
            $navigationMenu.addClass("show-small-bg");
        }else{
            $navigationMenu.removeClass("show-small-bg");
        }

        app.showMenu = !app.showMenu;
    });

    $(window).on("scroll", function(){
        if($(this).scrollTop() > app.menuBgThreshold && !app.showSmallMenu){
            $navigationMenu.removeClass("hide-bg").addClass("show-bg");
            app.showSmallMenu = true;
        }else if( $(this).scrollTop() < app.menuBgThreshold){
            $navigationMenu.removeClass("show-bg").addClass("hide-bg");
            app.showSmallMenu = false;
        }
    });

});