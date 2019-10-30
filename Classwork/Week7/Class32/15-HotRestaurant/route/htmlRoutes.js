var path = require("path");

module.exports = function (app) {
    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    app.get("*", function (req, res) { //if user goes to any other site, default it to home
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
