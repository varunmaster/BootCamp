var mysql = require("mysql");
var inquirer = require("inquirer");
var Password = require("./passwordPrompt");

new Password().getPassword(loginCallback);

function loginCallback(password) {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: password,
        database: "top_songsDB"
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");

        runSearch(connection);
    });
} //loginCallback

function runSearch(conn) {
    inquirer.prompt(
        {
            name: "startQuestion",
            type: "list",
            message: "Please choose an option",
            choices: ["Search specific artist", "Serch artist who appear more than once", "Search data within specific range", "Search specific song"]
        }
    ).then((ans) => {
        if (ans.startQuestion === "Search specific artist") {
            specificArtist(conn);
        } else if (ans.startQuestion === "Serch artist who appear more than once") {
            multipleArtist(conn);
        } else if (ans.startQuestion === "Search data within specific range") {

        } else {

        }
    })
}

function specificArtist(conn) {
    inquirer.prompt(
        {
            name: "userArtist",
            type: "input",
            message: "Please enter the artist name"
        }
    ).then((ans) => {
        var query = conn.query("Select * from top5000 where artist like ?",
            ['%' + ans.userArtist + '%'],
            (err, res) => {
                if (err) console.log("Error is: ", err);
                console.table(res);
            });
        console.log("Query: ", query.sql);
        conn.end();
    });
}

function multipleArtist(conn) {
    var query = conn.query("Select artist from Top5000 group by artist having count(artist) > 1",
        (err, res) => {
            if (err) console.log("Error is: ", err);
            console.table(res);
        });
    console.log("Query: ", query.sql);
    conn.end();
}
