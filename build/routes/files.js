"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticFilesRoute = exports.filesRoute = void 0;
var angularRoutePaths = ["/", "/listings", "/contact/{id}", "/edit-listing/{id}", "/listings/{id}", "/my-listings", "/new-listing"];
var filesRoute = angularRoutePaths.map(function (path) {
  return {
    method: "GET",
    path: path,
    handler: function handler(req, h) {
      return h.file("dist/app-angular/index.html");
    }
  };
});
exports.filesRoute = filesRoute;
var staticFilesRoute = {
  method: "GET",
  path: "/{params*}",
  handler: {
    directory: {
      path: "dist/app-angular"
    }
  }
};
exports.staticFilesRoute = staticFilesRoute;