function Character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function () {
        console.log("Name: ", this.name);
        console.log("Profession: ", this.profession);
        console.log("Gender: ", this.gender);
        console.log("Age: ", this.age);
        console.log("Strength: ", this.strength);
        console.log("HP: ", this.hp);
    };
    this.isAlive = function () {
        if (this.hp > 0) {
            console.log("Still alive");
            return true; 
        } else {
            console.log("not alive");
            return false;
        }
    };
    this.attack = function (opponent) {
        opponent.hp -= this.strength;
        console.log(this.name + " just attacked " + opponent.name + "!")
        // console.log("name: ", opponent.name);
        // console.log("Your character: ", opponent.hp);
    };
}

var kirby = new Character("Kirby", "Professional eater", "male", 2, 20, 80);
var pikachu = new Character("Pikachu", "Electrician", "male", 2, 15, 85);

// console.log(kirby);
// console.log(kirby.name);
// console.log(kirby.profession);
// console.log(kirby.gender);
// console.log(kirby.age);
// console.log(kirby.strength);
// console.log(kirby.hp);
// kirby.printStats();

console.log("--------------------");

// console.log(pikachu);
// console.log(pikachu.name);
// console.log(pikachu.profession);
// console.log(pikachu.gender);
// console.log(pikachu.age);
// console.log(pikachu.strength);
// console.log(pikachu.hp);
// pikachu.printStats();

console.log("--------------------");
console.log("attacker stats: ")
console.log(kirby.printStats());
kirby.attack(pikachu);
console.log("--------------------");
console.log("attackee stats: ");
console.log(pikachu.printStats());
