var Classroom = require("./classroom.js");

var Class1 = new Classroom("Joe Han", "Magnolia");
Class1.addStudents("Varun", "Algo", "1.0");
Class1.addStudents("Craig", "networking", "4.0");
Class1.addStudents("Hawke", "Game", "4.0");

console.log("Prof Name: ",Class1.nameProf);
console.log("Room Number: ",Class1.roomNum);
console.log("Number of students: ",Class1.numStud());
console.log("Students (as objects):",Class1.students);
Class1.displayAllStudents();

// console.log(Class1);
