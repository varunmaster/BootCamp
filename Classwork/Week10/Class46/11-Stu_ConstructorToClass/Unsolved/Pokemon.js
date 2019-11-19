// function Pokemon(name) {
//   this.name = name;
//   this.isSleepy = true;
//   this.isHungry = false;
// }

// Pokemon.prototype.sayName = function() {
//   console.log(this.name + "!");
// };

// Pokemon.prototype.eat = function() {
//   if (this.isHungry) {
//     this.isHungry = false;
//     this.isSleepy = true;
//     console.log(
//       this.name + " finished eating, " + this.name + " is sleepy now."
//     );
//   } else {
//     console.log(
//       this.name + " isn't hungry. " + this.name + " is sleepy though."
//     );
//   }
// };

// Pokemon.prototype.sleep = function() {
//   if (this.isSleepy) {
//     this.isSleepy = false;
//     this.isHungry = true;
//     console.log(this.name + " went to sleep...");
//     console.log(this.name + " woke up refreshed! And hungry!");
//   } else {
//     console.log(
//       this.name + " isn't sleepy. " + this.name + " is hungry though."
//     );
//   }
// };

// var pikachu = new Pokemon("Pikachu");

// pikachu.sayName();

// pikachu.sleep();
// pikachu.eat();

/********************************************************************************************************************************/
class Pokemon {
  constructor(name, isSleepy = true, isHungry = false){
    this.name = name;
    this.isSleepy = isSleepy;
    this.isHungry = isHungry;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  eat() {
    if (this.isHungry) {
      this.isHungry = false;
      this.isSleepy = true;
      console.log(`${this.name} finished eating. ${this.name} is sleepy now`);
    } else {
      console.log(`${this.name} is not hungry. ${this.name} is sleepy`);
    }
  }

  sleep() {
    if (this.isSleepy) {
      this.isHungry = true;
      this.isSleepy = false;
      console.log(`${this.name} slept and woke up and is hungry`);
    } else {
      console.log(`${this.name} isn't sleepy but hungry`);
    }
  }

}

var pika = new Pokemon("Pikachu");
pika.sayName();
pika.eat();
pika.sleep();

var bulbasaur = new Pokemon("Bulbasaur", false, true);
bulbasaur.sayName();
bulbasaur.eat();
bulbasaur.sleep();
