var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", (err, data) => {
    if (err) {
        return console.log("err: ", err);
    }
    var dataArr = data.split(", ");
    for (var i = 0; i < dataArr.length; i++) {
        console.log(dataArr[i]);
    }
});
