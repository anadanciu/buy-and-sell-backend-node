"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;
var _mysql = _interopRequireDefault(require("mysql2"));
require("dotenv/config");
var pool;
// create a new MySQL connection
var db = {
  connect: function connect() {
    pool = _mysql["default"].createPool({
      connectionLimit: 100,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      socketPath: process.env.INSTANCE_UNIX_SOCKET,
      port: process.env.DB_PORT
    });
  },
  query: function query(queryString, escapedValues) {
    return new Promise(function (resolve, reject) {
      pool.query(queryString, escapedValues, function (error, results, fields) {
        if (error) reject(error);
        resolve({
          results: results,
          fields: fields
        });
      });
    });
  },
  end: function end() {
    pool.end();
  }
};
exports.db = db;