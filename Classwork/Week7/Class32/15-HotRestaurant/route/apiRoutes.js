var tableData = require('../data/tableData.js');
var waitinglistData = require('../data/waitinglistData.js');

var currentTableCount = 0;
var getTable = '';

if (currentTableCount < 5) {
    getTable = tableData;
}
else{
    getTable = waitinglistData;
}

app.get("/api/" + tableData, function(req, res) {
    console.log(tableData)
    return res.json(tableData);
});

app.get("/api/" + waitinglistData, function(req, res) {
    console.log(waitinglistData)
    return res.json(waitinglistData);
});

app.post("/api/" + getTable, function(req, res) {
    var newTable = req.body;
    console.log(newTable);
    getTable.push(newTable);
    res.json(newTable);
    currentTableCount ++;
});
  
