$(document).ready(function(){
    var donutWidth = 25;
    // charts
    new Chartist.Pie('.ct-chart-php', {
        series: [95,5]
    }, {
        donut: true,
        donutWidth: donutWidth,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-ruby', {
        series: [60,40]
    }, {
        donut: true,
        donutWidth: donutWidth,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-python', {
        series: [50,50]
    }, {
        donut: true,
        donutWidth: donutWidth,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-java', {
        series: [50,50]
    }, {
        donut: true,
        donutWidth: donutWidth,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-javascript', {
        series: [95,5]
    }, {
        donut: true,
        donutWidth: donutWidth,
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
        donutWidth: donutWidth,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    new Chartist.Pie('.ct-chart-mongodb', {
        series: [50,50]
    }, {
        donut: true,
        donutWidth: donutWidth,
        startAngle: 0,
        total: 100,
        showLabel: false
    });

    $("#view-profile").click(function(){
        $("html, body").animate({scrollTop: ($("#main-banner").height()-$("#main-navigation").height())+"px"}, 1000);
    });

});