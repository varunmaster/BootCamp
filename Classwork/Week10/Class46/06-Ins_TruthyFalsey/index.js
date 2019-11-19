// 1.
console.log(true || false); //true
console.log(true && false); //false
console.log(0 && "lol"); //0 is false, any other number is true. as long as there is something in the string, its true
console.log(false || "IDK MY BFF JILL"); //true --> "IDK MY BFF JILL"

// 2.
console.log("" && [].length); //false --> ""
console.log("" || [].length); //0 --> it prints 0 bc the last thing it evaluated was [].length and it prints that value
console.log("" || [].length || 0); //0


// 3.
const likesVeggies = false;
const meal = likesVeggies ? "Vegetable Stir Fry" : "Cheeseburger";
console.log(meal);

// 4.
const feelingWell = false;
const goingOutTonight = feelingWell ? "Of course I'm going!" : "Not tonight, I'm not feeling well.";
console.log(goingOutTonight);
