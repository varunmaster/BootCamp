var orm = require("./config/orm.js");

// Call orm method, passing in the anonymous function(with "res") as the callback.
orm.selectWhere("parties", "party_type", "grown-up", function(result) {
  var data = result;
  console.log(data);
});
//look at orm file
//we are passing in a function to the orm so that when the query is complete, it will call the callback function which then consoles it