"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addViewToListingRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var addViewToListingRoute = {
  method: "POST",
  path: "/api/listings/{id}/add-view",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var id, _yield$connection$doQ, results, updatedListing;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return _database.connection.doQuery("UPDATE listings SET views=views+1 WHERE id=?", [id]);
          case 3:
            _context.next = 5;
            return _database.connection.doQuery("SELECT * FROM listings WHERE id=?", [id]);
          case 5:
            _yield$connection$doQ = _context.sent;
            results = _yield$connection$doQ.results;
            updatedListing = results[0];
            return _context.abrupt("return", updatedListing);
          case 9:
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
exports.addViewToListingRoute = addViewToListingRoute;