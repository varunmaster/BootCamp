var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.get("/cast", (req, res) => {

});

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "view.html")); //we are sending the 'view' html file using the sendFile() method instead of the fs.readFile() method
//   });


function viewCast(conn) {

}