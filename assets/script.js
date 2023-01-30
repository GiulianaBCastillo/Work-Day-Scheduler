$(document).ready(function () {
  function displayTime() {
    let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentTime);
  }
  setInterval(displayTime, 1000);
});

let rows = document.getElementsByClassName(
  "list-group-item d-flex justify-content-between align-items-center"
);
let currentHour = parseInt(moment().format("H"));

Array.from(rows).forEach((row) => {
  let rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if (currentHour < rowHour && currentHour > rowHour - 6) {
      setColor(row, "green");
    } else if (currentHour > rowHour && currentHour < rowHour + 6) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
