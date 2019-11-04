var connection = require("./connection.js");

var orm = {
    select: function (colName, tableName) {
        connection.query("select ?? from ??", [colName, tableName], (err, result) => {
            if (err) console.log("error with connection: ", err);
            console.table(result);
        });
    },
    selectWhere: function (tableName, type, val) {
        connection.query("Select * from ?? where ?? = ?", [tableName, type, val], (err, result) => {
            if (err) console.log("error with connection: ", err);
            console.table(result);
        });
    },
    clientParties: function(tableName1, tableName2, fkCol) {
        connection.query("Select * from ?? left join ?? on ??.?? = ??.id", [tableName1, tableName2, tableName1, fkCol, tableName2], 
        (err, result) => {
            if (err) console.log("error with connection: ", err);
            console.table(result);
        });
    }
};

module.exports = orm;
