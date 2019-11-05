// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sequelize_chirpy", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: { //the pool is basically getting 5 connections to the database ready and putting it in a pool and application will use one these 5 connections. it'll stay open until you close it
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
