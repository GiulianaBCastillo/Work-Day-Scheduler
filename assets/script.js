$(document).ready(function () {
    function displayTime() {

    
    let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentTime);
    }
    setInterval(displayTime, 1000)
})