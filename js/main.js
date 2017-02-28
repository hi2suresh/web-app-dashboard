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
Code to handle Charts/Graphs
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

var hourlyLabels = ["6-7", "7-8", "9-10", "11-12", "13-14", "15-16", "17-18", "19-20", "21-22", "23-24", "1-2"];
var hourlyData =  [25, 35, 45, 35, 75, 85, 65, 35, 25, 20, 15];

var dailyLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
var dailyData =  [50, 75, 150, 100, 200, 175, 75, 150, 450, 650, 300, 150];

var weeklyLabels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
var weeklyData =  [500, 1000, 950, 1300, 1700, 1300, 1500, 1000, 1500, 2000, 1500];

var monthlyLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
var monthlyData =  [1200, 1500, 1100, 1300, 1700, 1300, 2500, 2700, 1500, 2000, 1500];

var labels = weeklyLabels;
var data = weeklyData;

var objTrafficChart =  {
    type: 'line'
    , data: {
        labels: labels,
        datasets: [{            
             data: data,
             fill: true
                }]
    }
    , options: {
        legend : {
          display: false  
        }
    }
}
//Draw the default weekly traffic chart
var trafficChart = new Chart(ctx, objTrafficChart);

//Redraw the chart based on link selection
$('.traffic-chart a').click(function(event){    
    //If the link is already active then donot know anything
    if($(this).hasClass('active-link')) {
        return;
    }
    var linkText = $(this).text();    
    $('.traffic-chart a').removeClass('active-link');
    
    if(linkText.startsWith('W')) {
        objTrafficChart.data.labels = weeklyLabels;
        objTrafficChart.data.datasets[0].data = weeklyData;
    }
    
    
    if(linkText.startsWith('H')){
        objTrafficChart.data.labels = hourlyLabels;
        objTrafficChart.data.datasets[0].data = hourlyData;
        
    }
    else if(linkText.startsWith('D')){
        objTrafficChart.data.labels = dailyLabels;
        objTrafficChart.data.datasets[0].data = dailyData;       
    }
    
    else if(linkText.startsWith('M')) {
        objTrafficChart.data.labels = monthlyLabels;
        objTrafficChart.data.datasets[0].data = monthlyData;  
    }
    $(this).addClass('active-link');
    ctx = document.getElementById("trafficChart").getContext("2d");
    trafficChart.destroy();
    trafficChart = new Chart(ctx, objTrafficChart);        
});


var obj = {
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

/*===============================================
Code to handle user members and recent activty
================================================*/

var userData =  [ {
     
          userDetails : {
            imgSource : 'images/user-pic.jpg',
            name : 'Victoria Berlin',
            email: 'Victoria@gmail.com',
            date : '1/10/2017'
          },
          activityDetails : {
            activityName : "Victoria Berlin commented on facebook about Healthy Diet",
            activityTime: '4 hours ago'
          }
        }, 
                 {
     
          userDetails : {
            imgSource : 'images/user-pic.jpg',
            name : 'Chess Grandmasters',
            email: 'Chessmasters@yahoo.com',
            date : '1/10/2016'
          },
          activityDetails : {
            activityName : 'Chess Grandmasters commented on chess world championship',
            activityTime: '3 hours ago'
          }
        },
           {      
        userDetails : {
            imgSource : 'images/user-pic.jpg',
            name : 'Ray Hudson',
            email: 'Ray@gmail.com',
            date : '1/10/2015'
          },
          activityDetails : {
            activityName : "Ray Hudson commented on ESPN about Champions League",
            activityTime: '2 hours ago'
          }
        }, 
        
           {      
        userDetails : {
            imgSource : 'images/user-pic.jpg',
            name : 'Sid Lowe',
            email: 'sid@gmail.com',
            date : '1/10/2014'
          },
          activityDetails : {
            activityName : "Sid Lowe wrote an excellent artcle on football worldcup",
            activityTime: '5 hours ago'
          }
        }
         
    ]

var $newMembers = $("#new-members");
var $recentActvity = $("#recent-activity");
for(var i=0; i<userData.length; i++){    
    var imgSource = userData[i].userDetails.imgSource;
    var name = userData[i].userDetails.name;
    var email = userData[i].userDetails.email;
    var activityName = userData[i].activityDetails.activityName;
    var actvityTime = userData[i].activityDetails.activityTime;
    var $divElement = updateUserDetails('members-list', imgSource, name, email);    
    var $h2Date = $('<p></p>');
    $h2Date.text(userData[i].userDetails.date);
    $divElement.append($h2Date);    
    $newMembers.append($divElement);
    
    $divElement = updateUserDetails('activity-list', imgSource, activityName, actvityTime); 
    var $arrow = $('<p></p>');
    $arrow.text('>');
    $divElement.append($arrow);    
    $newMembers.append($divElement);    
    $recentActvity.append($divElement);        
}

function updateUserDetails(className, imgSource, divDetail1, divDetail2){
    var $divElement = $('<div></div>');
    $divElement.addClass(className);
    
    var $img = $('<img></img>');
    $img.attr('src', imgSource);
    $divElement.append($img);
     
    var $internalDiv = $('<div></div>');
    var $detail1 = $('<p></p>');
    $detail1.text(divDetail1);
    $internalDiv.append($detail1);
    
    var $detail2 = $('<p></p>');
    $detail2.text(divDetail2);
    $internalDiv.append($detail2);
    
    $divElement.append($internalDiv);
    
    return $divElement;  
}

/*============================
Code to handle User search
==============================*/

let userNames = [];
for (let i=0; i< userData.length; i++){
    userNames.push(userData[i].userDetails.name);
}

const searchComplete = new autoComplete({
    selector: 'input[type="search"]',
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = userNames;
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});

/*============================
Code to handle Toggle button
==============================*/
$('.toggle').toggles({
  drag: true, // allow dragging the toggle between positions
  click: true, // allow clicking on the toggle
  text: {
    on: 'ON', // text for the ON position
    off: 'OFF' // and off
  },
  on: true, // is the toggle ON on init
  animate: 250, // animation time (ms)
  easing: 'swing', // animation transition easing function
  checkbox: null, // the checkbox to toggle (for use in forms)
  clicker: null, // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
  width: 50, // width used if not set in css
  height: 20, // height if not set in css
  type: 'select' // if this is set to 'select' then the select style toggle will be used
});

/*============================
Code to handle Message user widget
==============================*/
const form = document.getElementById('form');
const sendButton = document.getElementById('send');
const user = document.querySelector('form input');
const userMessage = document.querySelector('form textarea');
sendButton.addEventListener('click', function(e){
    e.preventDefault();
    //Remove the previous message if exists
    let pElement = document.querySelector('#form p');
    if(pElement !== null){
        form.removeChild(pElement);    }
    
    pElement = document.createElement('p');
    if( user.value && userMessage.value && userNames.indexOf(user.value) > -1){
        pElement.textContent = "Message sent successfully";
        pElement.style.color = 'green';
        //Store the message in the local storage
        storeMessage(userMessage.value);
        //Clear the input data
        user.value = "";
        userMessage.value = "";
    }
    else {
        pElement.textContent = " Message not sent! Please enter valid user and data"; 
        pElement.style.color = 'red';                
    }
    form.appendChild(pElement);   
    
});

function clearMessages(parent, selector){
    let pElements = document.querySelectorAll(selector);
    if(pElements !== null){
        for(var i=0; i<pElements.length; i++){
            parent.removeChild(pElements[i]);
        }
     }
}
/*============================
Code to handle Local storage
==============================*/
let messages = JSON.parse(localStorage.getItem('storedMessages'));
if(messages === null){
    messages = [];
}
function storeMessage(msg){   
    messages.push(msg);
    localStorage.setItem("storedMessages", JSON.stringify(messages));
}

function showMessages(){
    const divMessages = document.getElementById('local-messages');
    const msgs = JSON.parse(localStorage.getItem('storedMessages'));
    //Remove the previously shown messages 
    clearMessages(divMessages, '#local-messages p');
    for(var i=0; i<msgs.length; i++){
    var messageElement = document.createElement('p');
    messageElement.style.color = 'blue';
    messageElement.textContent = msgs[i];
    divMessages.appendChild(messageElement);
    }
}

const showMessagesButton = document.getElementById('show-messages');
showMessagesButton.addEventListener('click', showMessages);

const clearMessagesButton = document.getElementById('clear-messages');
clearMessagesButton.addEventListener('click', function(){
    const divMessages = document.getElementById('local-messages');
    clearMessages(divMessages, '#local-messages p');
});