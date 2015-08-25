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

    // charts
    new Chartist.Pie('.ct-chart-php', {
        series: [95,5]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-ruby', {
        series: [60,40]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-python', {
        series: [50,50]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-java', {
        series: [50,50]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-javascript', {
        series: [95,5]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-html', {
        series: [90,10]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-css', {
        series: [85,20]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-react', {
        series: [70,30]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-mysql', {
        series: [90,10]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-mariadb', {
        series: [90,10]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-mongodb', {
        series: [50,50]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-photography', {
        series: [95,5]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-drawing', {
        series: [90,10]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-painting', {
        series: [90,10]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-dancing', {
        series: [10,90]
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

});