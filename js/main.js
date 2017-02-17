/*====================
JS code to handle alert
=====================*/
function addAlerts(alertElement) {
    var $a = $("<a href='#' class='close-button'>X</a>");
    alertElement.append($a);
    $("#alert").append(alertElement);
}
var $alert = $("<div id='alert1'></div>");
var $p = $("<p>Alert1: How you doing</p>");
$alert.append($p);
addAlerts($alert);
//Close the alert box
$(".close-button").click(function () {
    $(this).parent().css('display', 'none');
});
$('#myDropDown').hide();
//Toggle the display of alert dropdown
$('.dropdown').click(function (event) {
    event.stopPropagation();
    event.preventDefault();
    $('#myDropDown').toggle();
});
//Close the alert dropdown on pressing "Esc" key
$(document).keyup(function (e) {
    if (e.keyCode == 27) { // esc keycode
        $('#myDropDown').hide();
    }
});
/*============================
JS code to handle Charts/Graphs
==============================*/
//Chart global settings
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.scale.gridLines.drawTicks = false;
Chart.defaults.scale.ticks.beginAtZero = false;
Chart.defaults.global.elements.line.tension = 0;
//Chart.defaults.global.elements.line.backgroundColor = 'lightblue';
Chart.defaults.global.elements.point.radius = 6;
Chart.defaults.global.elements.point.backgroundColor = 'white';
Chart.defaults.global.elements.point.borderColor = 'blue';



var ctx = document.getElementById("trafficChart").getContext("2d");
if(window.screen.width > 767) {
    ctx.canvas.height = 300;
}
var obj = {
    type: 'line'
    , data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"]
        , datasets: [{            
             data: [500, 1000, 950, 1300, 1700, 1300, 1500, 1000, 1500, 2000, 1500]            
            , fill: true
                }]
    }
    , options: {
        legend : {
          display: false  
        }
    }
}
var trafficChart = new Chart(ctx, obj);

obj = {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "TH", "F", "SU"]
        , datasets: [{
            label: 'DAILY TRAFFIC'
            , data: [50, 75, 150, 100, 200, 175, 75]
            , backgroundColor: [
                        '#ADBFE6'
                        , '#ADBFE6'
                        , '#ADBFE6'
                        , '#ADBFE6'
                        , '#ADBFE6'
                        , '#ADBFE6'
                        , '#ADBFE6'
                    ]
            , borderWidth: 1
            , fill: false
                }]
    },
    options : {    
        maintainAspectRatio: true  
    }
    

}


ctx = document.getElementById("dailyTrafficChart").getContext("2d");
var dailyTrafficChart = new Chart(ctx, obj);
obj = {
    type: 'doughnut'
    , data: {
        labels: ["Mobile", "Tablet", "Laptop", "Desktop"]
        , datasets: [{
            label: 'MOBILE USERS'
            , data: [20, 30, 50, 100]
            , backgroundColor: [
                        '#ADBFE6'
                        , 'Red'
                        , 'Green'
                        , 'blue'

                    ]
                , }]
    }
    , options: {
             legend: {
            position: 'right'
        },
         maintainAspectRatio: true 
    }
}
ctx = document.getElementById("mobileChart").getContext("2d");
var mobileChart = new Chart(ctx, obj);