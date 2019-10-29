var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            return readFle(res, "/index.html");

        case "/food":
            return readFle(res, "/food.html");

        case "/movie":
            return readFle(res, "/movie.html");

        case "/css":
            return readFle(res, "/css.html");

        default:
            return display404(path, res);
    }
}

function readFle(res, name) {
    fs.readFile(__dirname + name, function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(url, res) {
    var myHTML = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
}
