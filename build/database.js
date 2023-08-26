"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connection = void 0;
var _mysql = _interopRequireDefault(require("mysql2"));
require("dotenv/config");
// create a new MySQL connection
var connection = _mysql["default"].createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  socketPath: process.env.INSTANCE_UNIX_SOCKET,
  port: process.env.DB_PORT
});
// connect to the MySQL database
exports.connection = connection;
connection.connect(function (error) {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});
connection.doQuery = function (queryString, escapedValues) {
  return new Promise(function (resolve, reject) {
    //console.log(`...to database call...`);
    connection.query(queryString, escapedValues, function (error, results, fields) {
      //console.log("error...", error);
      if (error) reject(error);
      resolve({
        results: results,
        fields: fields
      });
    });
  });
};