// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get("/api/all", (req, res) => {
    connection.query("select * from chirps", (err, result) => {
      if (err) res.send(500).end();
      res.send(result);
    });
  });


  // Add a chirp
  app.post("/api/new", (req, res) => {
    connection.query("INSERT INTO chirps (author, chirp, created_at) VALUES (?, ?, ?)",[req.body.author, req.body.body, req.body.created_at], (err, result) => {
      if (err) {
        res.send(500).end();
      }
      else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      else {
        return res.send("Good");
      }
    });
  });


};
