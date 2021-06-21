/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/articles/[id]";
exports.ids = ["pages/api/articles/[id]"];
exports.modules = {

/***/ "./pages/api/articles/[id].js":
/*!************************************!*\
  !*** ./pages/api/articles/[id].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ \"./data.js\");\n\nfunction handler({\n  query: {\n    id\n  }\n}, res) {\n  const filtered = _data__WEBPACK_IMPORTED_MODULE_0__.articles.filter(article => article.id === id);\n\n  if (filtered.length > 0) {\n    res.status(200).json(filtered[0]);\n  } else {\n    res.status(404).json({\n      message: `article with the id of ${id} is not found`\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV4YW1wbGUvLi9wYWdlcy9hcGkvYXJ0aWNsZXMvW2lkXS5qcz85OGNlIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJxdWVyeSIsImlkIiwicmVzIiwiZmlsdGVyZWQiLCJhcnRpY2xlcyIsImFydGljbGUiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUI7QUFBQ0MsT0FBSyxFQUFFO0FBQUNDO0FBQUQ7QUFBUixDQUFqQixFQUFnQ0MsR0FBaEMsRUFBcUM7QUFDaEQsUUFBTUMsUUFBUSxHQUFHQyxrREFBQSxDQUFnQkMsT0FBTyxJQUFJQSxPQUFPLENBQUNKLEVBQVIsS0FBY0EsRUFBekMsQ0FBakI7O0FBRUEsTUFBR0UsUUFBUSxDQUFDRyxNQUFULEdBQWtCLENBQXJCLEVBQXdCO0FBQ3BCSixPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkwsUUFBUSxDQUFDLENBQUQsQ0FBN0I7QUFDSCxHQUZELE1BRU87QUFDSEQsT0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsYUFBTyxFQUFHLDBCQUF5QlIsRUFBRztBQUF2QyxLQUFyQjtBQUNIO0FBQ0oiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXJ0aWNsZXMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXJ0aWNsZXN9IGZyb20gJy4uLy4uLy4uL2RhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoe3F1ZXJ5OiB7aWR9fSwgcmVzKSB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBhcnRpY2xlcy5maWx0ZXIoYXJ0aWNsZSA9PiBhcnRpY2xlLmlkID09PWlkKVxuXG4gICAgaWYoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihmaWx0ZXJlZFswXSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogYGFydGljbGUgd2l0aCB0aGUgaWQgb2YgJHtpZH0gaXMgbm90IGZvdW5kYH0pXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/articles/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["data_js"], function() { return __webpack_exec__("./pages/api/articles/[id].js"); });
module.exports = __webpack_exports__;

})();