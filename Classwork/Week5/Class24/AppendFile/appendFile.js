var fs = require("fs");

var text = process.argv[2];

fs.appendFile("sample.txt", text + "\r\n", (err) => {
    if (err) {
        return console.log("err: ", err);
    }
    else {
        return console.log("added text");
    }
})