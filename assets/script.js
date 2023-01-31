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

function loadStorage(){
    var savedTasks = JSON.parse(localStorage.getItem("savedTasks"))
    console.log(savedTasks)
    if(savedTasks == null){
        localStorage.setItem("savedTasks", JSON.stringify([null,null,null,null,null,null,null,null,null]))
        return
    }
    // We will need to render it soon!
    var inputElements = document.getElementsByTagName("input")
    console.log(inputElements)
    for(let i=0; i< inputElements.length; i++){
        if(savedTasks[i] != null){
            inputElements[i].value = savedTasks[i]
        }
    }
}


var saveButtons = document.getElementsByClassName("save")
console.log(saveButtons)

for(let i=0; i < saveButtons.length; i++){
    saveButtons[i].addEventListener("click", function(event){
        event.preventDefault()
        var savedTasks = JSON.parse(localStorage.getItem("savedTasks"))
        console.log(savedTasks)
        console.log(this.previousElementSibling.value)
        savedTasks[i] = this.previousElementSibling.value
        console.log(savedTasks)
        localStorage.setItem("savedTasks", JSON.stringify(savedTasks))
    })
}

Array.from(rows).forEach((row) => {
  let rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  console.log(row)
  console.log(rowHour)
  console.log(currentHour, "Current hour")
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


loadStorage()