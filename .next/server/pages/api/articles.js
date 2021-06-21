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
exports.id = "pages/api/articles";
exports.ids = ["pages/api/articles"];
exports.modules = {

/***/ "./pages/api/articles/index.js":
/*!*************************************!*\
  !*** ./pages/api/articles/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ \"./data.js\");\n\nfunction handler(req, res) {\n  res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__.articles);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV4YW1wbGUvLi9wYWdlcy9hcGkvYXJ0aWNsZXMvaW5kZXguanM/ZGNkMCJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImFydGljbGVzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3RDQSxLQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkMsMkNBQXJCO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXJ0aWNsZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FydGljbGVzfSBmcm9tICcuLi8uLi8uLi9kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXJ0aWNsZXMpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/articles/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["data_js"], function() { return __webpack_exec__("./pages/api/articles/index.js"); });
module.exports = __webpack_exports__;

})();