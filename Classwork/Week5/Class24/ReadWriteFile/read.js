var fs = require("fs");

//param1 is always error and param2 is data from the file
fs.readFile("movies.txt", "utf8", function (err, data){
    if (err) {
        return console.log("error ", err);
    }
    console.log(data);

    var dataArr = data.split(",");
    console.log(dataArr);
});


