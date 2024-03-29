class Vehicle {
  constructor(topSpeed = 50) { //if you have equal sign in your parameter, then that is your default value
    this.speed = 0;
    this.topSpeed = topSpeed;
  }

  accelerate(increase = 10) {
    console.log("Accelerating!");
    this.speed = Math.min(this.speed + increase, this.topSpeed);
    this.logSpeed();
  }

  logSpeed() {
    console.log(`Current Speed: ${this.speed}`); //`` backstroke means that everything is a string and you can use variable with ${}
  }

  brake() {
    console.log("Hitting the brakes!");
    this.speed = 0;
    this.logSpeed();
  }
}

var vehicle = new Vehicle(); //We did not specify an input param of topSpeed so it's defaulted to 50

vehicle.logSpeed();

vehicle.accelerate(); //accelerate by 10 bc nothing was passed in

vehicle.accelerate(30);

// --- Pre ES6 version

// function Vehicle(topSpeed) {
//   this.speed = 0;
//   this.topSpeed = topSpeed || 50;
// }

// Vehicle.prototype.accelerate = function(increase) {
//   increase = increase || 10;
//   console.log("Accelerating!");
//   var newSpeed = this.speed + increase;

//   if (newSpeed > this.topSpeed) {
//     this.speed = topSpeed;
//   } else {
//     this.speed = newSpeed;
//   }

//   this.logSpeed();
// };

// Vehicle.prototype.logSpeed = function() {
//   console.log("Current Speed: " + this.speed);
// };

// Vehicle.prototype.brake = function() {
//   console.log("Hitting the brakes!");
//   this.speed = 0;
//   this.logSpeed();
// };

// var vehicle = new Vehicle();

// vehicle.logSpeed();

// vehicle.accelerate();

// vehicle.accelerate(30);

module.exports = Vehicle;
