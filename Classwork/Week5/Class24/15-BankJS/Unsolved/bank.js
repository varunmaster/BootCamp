var fs = require("fs");

switch (process.argv[2]) {
    case "total":
        total();
        break;
    case "deposit":
        deposit(process.argv[3]);
        break;
    case "withdraw":
        withdraw(process.argv[3]);
        break;
    case "lotto":
        lotto();
        break;
    default: 
        console.log("You didnt enter anything useful");
        break;
}

function withdraw(text) {
    fs.appendFile("bank.txt", ", -" + text, (err) => {
        if (err) {
            return console.log("err: ", err);
        }
    });
}

function deposit(text) {
    fs.appendFile("bank.txt", ", " + text, (err) => {
        if (err) {
            return console.log("err: ", err);
        }
    });
}

function total() {
    fs.readFile("bank.txt", "utf8", (err, data) => {
        if (err) {
            console.log("err: ", err);
        }
        var dataArr = data.split(", ");
        // console.log(dataArr);
        var total = 0;
        for (var i = 0; i < dataArr.length; i++) {
            // console.log(parseFloat(dataArr[i]));
            total += parseFloat(dataArr[i]);
            // console.log(total);
        }
        console.log(total.toFixed(2));
    });
}

function lotto() {

}
