// Requiring our CastMember constructor function we exported from castMember.js
var CastMember = require("./castMember");

// Constructor function for creating Movie objects
var Movie = function(movieName, genre, budget) {
  // this.cast will hold all of our CastMember objects
  this.cast = []; //cast member variable is using the castMember.js file which is another object so its an array of objects. this member variable will also be able to use any of the methods defined in that file
  this.movieName = movieName;
  this.genre = genre;
  this.budget = budget;

  // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.cast` array
  this.addCastMember = function(gender, name, role) {
    this.cast.push(new CastMember(gender, name, role));
  };
};

// Exporting the Movie constructor which we will use in main.js
module.exports = Movie;