
$(document).ready(
// Function to add a task.

function(){
let submitButton = $("#submit");
// var task = $("#task-input").val();
// var days = $("#date-input").val();
let taskValidation = function(){
    
    if ($("#task-input").val() !== ""){
        $("#task-input").removeClass("is-invalid")
        $("#task-input").addClass("is-valid")
        dateValidation()
    }
    else{
        $("#task-input").addClass("is-invalid")
        console.log("task was invalid");
    }
}
let dateValidation = function(){
    if ( $("#date-input").val() === ""){
        $("#date-input").removeClass("is-valid")
        $("#date-input").addClass("is-invalid")

    }
    else{
        $("#date-input").removeClass("is-invalid")
        $("#date-input").addClass("is-valid")
        finalCheck()
    }
}

let addTask = function() {
    event.preventDefault();
    console.log("adding task");
      // Get the content (value) of the input box.
    var task = $("#task-input").val();
    var days = $("#date-input").val();

    chooseColor(task, days);
      // Append that content to the #tasks div.
      // Nest our content in another div in another div
      // with a span containing an X.
      // Notice the id? We can delete the task whenever the user clicks the span.
    
    
      // Clear the content of the input box.
    //   $("#task-input").val("");
    //   $("#date-input").val("");
    }
let finalCheck = function(){
    if ($("#task-input").hasClass("is-valid") && $("#date-input").hasClass("is-valid")){
        addTask();
    }
    else{ $("#formArea").prepend("<div class='alert alert-danger'>" + "Please make sure you've completed both fields!")}
}
let chooseColor = function(task, timeLeft){
    let alert;
    if (timeLeft < 4){
        alert = "<div class='alert alert-danger col-md alert-trim' style='margin:5px'>" + task + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button>" + "<br>" + timeLeft + " day(s) left";
    }
    else if (timeLeft < 8){
        alert = "<div class='alert alert-warning col-md alert-trim' style='margin:5px'>" + task + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button>" + "<br>" + timeLeft + " day(s) left";
    }
    else {
        alert = "<div class='conatiner-fluid alert alert-secondary col-md alert-trim ' style='margin:5px'>" + task + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button>" + "<br>" + timeLeft + " day(s) left";
    }
    $("#toDoAlerts").append(alert);
}
submitButton.click(function(){
    event.preventDefault();
    taskValidation();
})
// When the user submits the form, run addTask.

// {
// event.preventDefault();
// console.log("pressed submit");
// addTask();
// });
// Add a listener to the document.
// It should keep an ear out for a click on elements with an id of "delete".
// We can't use .click, because the element is dynamically created.
$(document).on("click", "#delete", removeTask);

// When a user presses any key on their keyboard,
$("form").keypress(function(event) {

  // listen to see that key was "enter."
  if (event.which === 13) {

    // If so, run addTask.
    taskValidation();
  }
});



// Function to remove a task.
function removeTask() {

  // Grab the closest div to the element that was clicked and remove it.
  // (In this case, the closest element is the one that's encapsulating it.)
  $(this).closest("div").remove();
}
});

    