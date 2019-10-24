var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "vsmaster",
    database: "great_bay_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    connection.end();
    askQuestion();
});

function askQuestion() {
    inquirer.prompt(
        {
            name: "bidOrPost",
            message: "Would you like to BID or POST an item?",
            type: "list",
            choices: ["Bid", "Post"]
        }
    ).then((ans) => {
        if (ans.bidOrPost === "Post") {
            post();
        } else {
            bid();
        }
    })
}

function post() {
    inquirer.prompt(
        {
            name: "name",
            message: "What would you like to post?",
            type: "input"
        },
        {
            name: "startBid",
            message: "What should be the start bid?",
            type: "input",
            validate: (val) => {
                if (isNaN(val) === false) {
                    return true;
                }
            }
        }
    ).then((ans) => {
        connection.query("INSERT INTO items SET ?",
            [{
                name: ans.name,
                start_bid: ans.startBid || 0,
                highest_bid: ans.startBid || 0
            }]
        )
    })
}

function bid() {

}
