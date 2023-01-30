$(function () {
    function displayTime() {

    
    let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#date").text(currentTime);
    }
    setInterval(displayTime, 1000)
})