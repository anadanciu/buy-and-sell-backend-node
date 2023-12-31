"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllListingsRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getAllListingsRoute = {
  method: "GET",
  path: "/api/listings",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var _yield$connection$doQ, results;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log("it gets here");
            _context.next = 3;
            return _database.connection.doQuery("SELECT * FROM listings");
          case 3:
            _yield$connection$doQ = _context.sent;
            results = _yield$connection$doQ.results;
            console.log("it gets to api/listings, fetching ".concat(results));
            return _context.abrupt("return", results);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};
exports.getAllListingsRoute = getAllListingsRoute;