"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _addViewToListings = require("./addViewToListings");
var _getAllListings = require("./getAllListings");
var _getListing = require("./getListing");
var _getUserListings = require("./getUserListings");
var _createNewListing = require("./createNewListing");
var _updateListing = require("./updateListing");
var _deleteListing = require("./deleteListing");
var _files = require("./files");
var _default = [_getAllListings.getAllListingsRoute, _getListing.getListingRoute, _addViewToListings.addViewToListingRoute, _getUserListings.getUserListingsRoute, _createNewListing.createNewListingRoute, _updateListing.updatedListingRoute, _deleteListing.deleteListingRoute, _files.staticFilesRoute].concat((0, _toConsumableArray2["default"])(_files.filesRoute));
exports["default"] = _default;