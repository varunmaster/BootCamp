var http = require("http");

var PORT = 7500;

//this function will handle the actual client request and response that will come from server.listen
function handleRequest(request, response) {
    response.write("Boo \n");
    response.end("It Works!! Path Hit: " + request.url); //Nothing should go after response.end() -- this ends the response
}

var server = http.createServer(handleRequest);

//this just tells the computer that be on standby on port xxxx and then send the request to handleRequest() function
server.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
