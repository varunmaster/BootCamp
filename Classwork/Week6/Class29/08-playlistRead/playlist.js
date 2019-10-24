var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "vsmaster",
    database: "playlist_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //   connection.end();
    afterConnection();
});

function afterConnection() {
    connection.query("select * From songs", (err, res) => {
        if (err) console.log("err: ", err);
        console.log(res);
        connection.end();
    });
}
