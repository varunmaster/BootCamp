// Initialize Firebase (YOUR OWN APP)

// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)

// Create a variable to reference the database
var config = {
  apiKey: "AIzaSyA80R6FtX0jub45y6Do_EmN8V79l3b3tQ4",
  authDomain: "varun-bootcamp.firebaseapp.com",
  databaseURL: "https://varun-bootcamp.firebaseio.com",
  projectId: "varun-bootcamp",
  storageBucket: "",
  // messagingSenderId: "1042011200496",
  // appId: "1:1042011200496:web:30b51d677764aac9b6db35",
  // measurementId: "G-77XCMWE2KP"
};
firebase.initializeApp(config);
var database = firebase.database();


// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
database.ref().on("value", function(snapshot) {
// We are now inside our .on function...

// Console.log the "snapshot" value (a point-in-time representation of the database)
console.log(snapshot.val());
// This "snapshot" allows the page to get the most current values in firebase.


// Change the value of our clickCounter to match the value in the database
clickCounter = snapshot.val().clickCount;

// Console Log the value of the clickCounter
console.log(clickCounter);

// Change the HTML using jQuery to reflect the updated clickCounter value
$("#click-value").text(clickCounter);
// Then include Firebase error logging
// HINT: }, function(errorObject)
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });


  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
