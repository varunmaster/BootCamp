//using the '/' will tell the compiler that we are using a file and not a node package
var camping = require("./ess.js");

console.log("----------------");
console.log("Stuff i need for camping:");
console.log(camping);
console.log("----------------");

console.log("----------------");
console.log("essentials:");
console.log(camping.essentials);
console.log(camping.essentials.drink);
console.log("----------------");

console.log("----------------");
console.log("nice to have:");
console.log(camping.niceToHaves);
console.log(camping.niceToHaves.tools[2]);
console.log("----------------");
