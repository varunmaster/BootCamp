const Vehicle = require("./Vehicle");

class Car extends Vehicle {
  constructor(model, topSpeed) {
    super(topSpeed); //super calls the parent and sets the top speed to whatever is used when the constructor is called in line 14
    this.model = model;
  }

  logSpeed() { //we are overloading the logSpeed() function bc Vehicle class has this too
    console.log(`${this.model} is going ${this.speed}`);
  }
}

const ferarri = new Car("Ferrari", 200); //this calls the constructor in line 4 and sets the model and topSpeed

ferarri.logSpeed();
ferarri.accelerate();
ferarri.accelerate(50);
ferarri.brake();

//when you run this code, the first few lines will be from the Vehicle class

// function Car(model, topSpeed) {
//   Vehicle.call(this, topSpeed);
//   this.model = model;
// }

// Car.prototype = Object.create(Vehicle.prototype);

// Car.prototype.logSpeed = function() {
//   console.log(this.model + " is going " + this.speed);
// };

// var ferarri = new Car("Ferrari", 200);

// ferarri.logSpeed();
// ferarri.accelerate();
// ferarri.accelerate(50);
// ferarri.brake();
