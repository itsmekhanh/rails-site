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

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-31362963-1', 'auto');
        ga('send', 'pageview');


});