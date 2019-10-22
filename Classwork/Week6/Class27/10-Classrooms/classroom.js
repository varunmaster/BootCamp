var Student = require("./student.js");

var Classroom = function(nameProf, roomNum) {
    this.students = [];
    this.numStud = function(){
        return this.students.length;
    }
    this.nameProf = nameProf;
    this.roomNum = roomNum;

    this.addStudents = function(name, favSubject, GPA){
        this.students.push(new Student(name, favSubject, GPA));
    }

    this.displayAllStudents = function(){
        for(let i = 0; i < this.students.length; i++) {
            console.log("-------------------------");
            console.log("name: ", this.students[i].name);
            console.log("fav subj: ", this.students[i].favSubject);
            console.log("gpa: ", this.students[i].GPA);
            console.log("-------------------------");
        }
    }
};

module.exports = Classroom;
