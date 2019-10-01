//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function() { //window.onload is javascript and not jquery. difference is: 
  //that this one depends on browser and jquery is cross-platform. 
  //jquery is based on DOM (document object model) and only waits for DOM to be ready whereas javascript waits for everthing to be ready first then runs the script
  $("#lap").on("click", recordLap);
  $("#stop").on("click", stop);
  $("#reset").on("click", reset);
  $("#start").on("click", start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
var lap = 1;

function reset() {

  time = 0;
  lap = 1;

  //  TODO: Change the "display" div to "00:00."
  $("#display").text("00:00");
  $("#laps").text(""); //reseting the laps section to empty
  stop();

}

function start() {

  //  TODO: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    // clearInterval(intervalId);
    intervalId = setInterval(count,1000); // we are assigning setInterval to intervalId bc we want to store that value somewhere so when we click on stop
    //the clearInterval will stop the intervalId
    clockRunning = true; //clearing the interval and setting clockRunning to true will prevent user from clicking start multiple times and the timer speeding up
  }

}
function stop() {

  //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
  clearInterval(intervalId);
  clockRunning = false;

}

function recordLap() {

  //  TODO: Get the current time, pass that into the timeConverter function,
  //        and save the result in a variable.
  var currTime = timeConverter(time);

  //  TODO: Add the current lap and time to the "laps" div.
  $("#laps").append("Lap " + lap + ": " + currTime + "<br>");

  //  TODO: Increment lap by 1. Remember, we can't use "this" here.
  lap += 1;
}
function count() {

  //  TODO: increment time by 1, remember we cant use "this" here.
  time += 1;

  //  TODO: Get the current time, pass that into the timeConverter function,
  //        and save the result in a variable.
  var convertedTime = timeConverter(time);

  //  TODO: Use the variable you just created to show the converted time in the "display" div.
  $("#display").text(convertedTime);

}

//  THIS FUNCTION IS DONE FOR US!
//  We do not need to touch it.

function timeConverter(t) {

  //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

