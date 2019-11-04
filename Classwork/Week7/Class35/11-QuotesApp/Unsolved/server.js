var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));//use the express.static middleware to serve content for the app from the "public" directory. letting express know where your content is

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "vsmaster",
  database: "quotes_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get("/", function (req, res) {
  connection.query("select * from quotes", (err, result) => {
    if (err) return res.send(500).end();
    res.render("index", { quotes: result });
  });
});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", function (req, res) {
  connection.query("select * from quotes where id = ?",[req.params.id], (err, result) => {
    if (err) return res.send(500).end();
    res.render("single-quote", result[0]);
  });
  // connection.end();

});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function (req, res) {
  connection.query("insert into quotes (author, quote) values (?, ?)", [req.body.author, req.body,quote], (err, result) => {
    if (err) return res.send(500).end();
    res.json({id: result.insertId});
  });
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function (req, res) {
  connection.query("Delete from quotes where id = ?", [req.params.id], (err, result) => {
    if (err) return res.send(500).end();
    else if(result.changedRow === 0) res.send(404).end();
    res.status(200).end();
  })
});

// Update a quote.
app.put("/api/quotes/:id", function (req, res) {
  connection.query("update quotes set quote = ? where id = ?", [req.body.quote, req.params.id], (err, result) => {
    if (err) return res.send(500).end();
    console.log(result.affectedRows);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
