function myCalculator() {
  var a = parseInt($("#valueOne").val());
  var b = parseInt($("#valueTwo").val());
  /*don't need to use parseInt for operator because it is a string*/
  var op = $("#operator").val();
  /*you should declare an empty variable called calculate and assign values to it
  later because then you would just keep on reassigning variables*/
  var calculate;

  if (op === "Add") {
    calculate = (a + b).toFixed(2);
  } else if (op === "Subtract") {
    calculate = (a - b).toFixed(2);
  } else if (op === "Multiply") {
    calculate = (a * b).toFixed(2);
  } else if (op === "Divide"){
    calculate = (a / b).toFixed(2);
  }

  $("#results").html("<strong>Results: </strong>" + calculate);


};

$("#btn").click(function() {
  myCalculator();
});
