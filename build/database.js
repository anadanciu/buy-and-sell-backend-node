"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;
var _mysql = _interopRequireDefault(require("mysql"));
var connection = undefined;
/*
host: "34.116.142.123",
  user: "hapi-server",
  password: "nanes-sql", //or 1QRtana1234!
  database: "buy-and-sell",

 host: "localhost", 
  user: "hapi-server",
  password: "abc123!DaBc?rwg4554gv_%gfeR", //or nanes-sql or 1QRtana1234!
  database: "buy-an-sell", -is the one from workbench localhost33:06
*/

var db = {
  connect: function connect() {
    connection = _mysql["default"].createConnection({
      host: process.env.INSTANCE_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      socketPath: process.env.INSTANCE_UNIX_SOCKET
    });
  },
  query: function query(queryString, escapedValues) {
    return new Promise(function (resolve, reject) {
      connection.query(queryString, escapedValues, function (error, results, fields) {
        if (error) reject(error);
        resolve({
          results: results,
          fields: fields
        });
      });
    });
  },
  end: function end() {
    return connection.end();
  }
};
exports.db = db;