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
exports.id = "pages/article/[id]";
exports.ids = ["pages/article/[id]"];
exports.modules = {

/***/ "./pages/article/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/article/[id]/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/pierre/Documents/GitHub/next-example-project/pages/article/[id]/index.js\";\n\n\n\nconst article = ({\n  article\n}) => {\n  /* You can fetch id from next router like the example below */\n  // const router = useRouter()\n  // const {id} = router.query\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: article.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: article.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\",\n      children: \"Go Back\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n/* Using getServerSideProps vs getStaticProps + getStaticPaths */\n// export const getServerSideProps = async (context) => {\n//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)\n//     const article = await res.json()\n//     return {\n//         props: {\n//             article\n//         }\n//     }\n// }\n\n\nconst getStaticProps = async context => {\n  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);\n  const article = await res.json();\n  return {\n    props: {\n      article\n    }\n  };\n};\nconst getStaticPaths = async () => {\n  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);\n  const articles = await res.json();\n  const ids = articles.map(article => article.id);\n  const paths = ids.map(id => ({\n    params: {\n      id: id.toString()\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (article);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV4YW1wbGUvLi9wYWdlcy9hcnRpY2xlL1tpZF0vaW5kZXguanM/NzBiZCJdLCJuYW1lcyI6WyJhcnRpY2xlIiwidGl0bGUiLCJib2R5IiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicmVzIiwiZmV0Y2giLCJwYXJhbXMiLCJpZCIsImpzb24iLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiYXJ0aWNsZXMiLCJpZHMiLCJtYXAiLCJwYXRocyIsInRvU3RyaW5nIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQztBQUFDQTtBQUFELENBQUQsS0FBZTtBQUMzQjtBQUNBO0FBQ0E7QUFFQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQUtBLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxnQkFBSUQsT0FBTyxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUksOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBLGtCQURKO0FBUUgsQ0FiRDtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFTyxNQUFNQyxjQUFjLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUM3QyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLDhDQUE2Q0YsT0FBTyxDQUFDRyxNQUFSLENBQWVDLEVBQUcsRUFBakUsQ0FBdkI7QUFFQSxRQUFNUixPQUFPLEdBQUcsTUFBTUssR0FBRyxDQUFDSSxJQUFKLEVBQXRCO0FBRUEsU0FBTztBQUNIQyxTQUFLLEVBQUU7QUFDSFY7QUFERztBQURKLEdBQVA7QUFLSCxDQVZNO0FBWUEsTUFBTVcsY0FBYyxHQUFHLFlBQVc7QUFDckMsUUFBTU4sR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDbEIsNENBRGtCLENBQXZCO0FBSUEsUUFBTU0sUUFBUSxHQUFHLE1BQU1QLEdBQUcsQ0FBQ0ksSUFBSixFQUF2QjtBQUVBLFFBQU1JLEdBQUcsR0FBR0QsUUFBUSxDQUFDRSxHQUFULENBQWFkLE9BQU8sSUFBSUEsT0FBTyxDQUFDUSxFQUFoQyxDQUFaO0FBRUEsUUFBTU8sS0FBSyxHQUFHRixHQUFHLENBQUNDLEdBQUosQ0FBU04sRUFBRCxLQUFTO0FBQUNELFVBQU0sRUFBRTtBQUFDQyxRQUFFLEVBQUVBLEVBQUUsQ0FBQ1EsUUFBSDtBQUFMO0FBQVQsR0FBVCxDQUFSLENBQWQ7QUFFQSxTQUFPO0FBQ0hELFNBREc7QUFFSEUsWUFBUSxFQUFFO0FBRlAsR0FBUDtBQUlILENBZk07QUFpQlAsK0RBQWVqQixPQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXJ0aWNsZS9baWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBhcnRpY2xlID0gKHthcnRpY2xlfSkgPT4ge1xuICAgIC8qIFlvdSBjYW4gZmV0Y2ggaWQgZnJvbSBuZXh0IHJvdXRlciBsaWtlIHRoZSBleGFtcGxlIGJlbG93ICovXG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAvLyBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPnthcnRpY2xlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD57YXJ0aWNsZS5ib2R5fTwvcD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+R28gQmFjazwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG4vKiBVc2luZyBnZXRTZXJ2ZXJTaWRlUHJvcHMgdnMgZ2V0U3RhdGljUHJvcHMgKyBnZXRTdGF0aWNQYXRocyAqL1xuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke2NvbnRleHQucGFyYW1zLmlkfWApXG5cbi8vICAgICBjb25zdCBhcnRpY2xlID0gYXdhaXQgcmVzLmpzb24oKVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgICAgIGFydGljbGVcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7Y29udGV4dC5wYXJhbXMuaWR9YClcblxuICAgIGNvbnN0IGFydGljbGUgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYXJ0aWNsZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c2BcbiAgICApXG5cbiAgICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIGNvbnN0IGlkcyA9IGFydGljbGVzLm1hcChhcnRpY2xlID0+IGFydGljbGUuaWQpXG5cbiAgICBjb25zdCBwYXRocyA9IGlkcy5tYXAoKGlkKSA9PiAoe3BhcmFtczoge2lkOiBpZC50b1N0cmluZygpfX0pKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/article/[id]/index.js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/article/[id]/index.js"); });
module.exports = __webpack_exports__;

})();