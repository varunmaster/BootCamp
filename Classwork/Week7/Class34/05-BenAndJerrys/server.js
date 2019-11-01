var express = require("express");
var exphbs = require("express-handlebars"); //hsb = handlebars

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" })); // we are specifying the engine that will be used. 
app.set("view engine", "handlebars");

var icecreams = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
    { name: "pistachio", price: 11, awesomeness: 15 }
];

app.get("/icecreams/:name", function (req, res) {
    for (var i = 0; i < icecreams.length; i++) {
        if (req.params.name === icecreams[i].name) {
            return res.render("index", icecreams[i]);
        }
    }
});

app.get("/icecreams", function(req, res) {
    return res.render("all-icecreams", {
        flavors: icecreams
    });
});

app.get("/*",function(req, res){
    return res.render("home")
});

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});