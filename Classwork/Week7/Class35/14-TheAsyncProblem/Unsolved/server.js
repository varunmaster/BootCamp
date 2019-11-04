var orm = require("./config/orm.js");

var data = orm.selectWhere("parties", "party_type", "grown-up");

console.log(data); // Data is undefined. Why?
//this returns undefined bc we are making a call to the ORM and and storing the value inside of data variable
//but before the query is complete we are logging it so it comes back as undefined
//resolution is to create a callback function for the orm to call when query is complete