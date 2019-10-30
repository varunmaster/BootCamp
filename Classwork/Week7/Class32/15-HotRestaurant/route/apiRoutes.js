var tableData = require('../data/tableData.js');
var waitinglistData = require('../data/waitinglistData.js');

var currentTableCount = 0;

var routes = function(app){
    app.get("/api/tableData", function(req, res) {
        console.log(tableData)
        return res.json(tableData);
    });
    
    app.get("/api/waitinglistData", function(req, res) {
        console.log(waitinglistData)
        return res.json(waitinglistData);
    });
    
    if (currentTableCount < 5) {
        app.post("/api/reservations", function(req, res) {
            var newTable = req.body;
            console.log(newTable);
            tableData.push(newTable);
            res.json(newTable);
            currentTableCount ++;
        });
    }
    else {
        app.post("/api/reservations", function(req, res) {
            var newTable = req.body;
            console.log(newTable);
            waitinglistData.push(newTable);
            res.json(newTable);
            currentTableCount ++;
        });
    }
}

module.exports = routes;
