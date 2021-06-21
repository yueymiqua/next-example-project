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

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"server\": function() { return /* binding */ server; }\n/* harmony export */ });\nconst dev = true;\nconst server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV4YW1wbGUvLi9jb25maWcvaW5kZXguanM/YWNlNyJdLCJuYW1lcyI6WyJkZXYiLCJzZXJ2ZXIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLE9BQVQ7QUFFTyxNQUFNQyxNQUFNLEdBQUdELEdBQUcsR0FBRyx1QkFBSCxHQUE2Qix5QkFBL0MiLCJmaWxlIjoiLi9jb25maWcvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBkZXYgPyAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyA6ICdodHRwczovL3lvdXJ3ZWJzaXRlLmNvbSciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./pages/article/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/article/[id]/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ \"./config/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Meta */ \"./components/Meta.js\");\n\n\nvar _jsxFileName = \"/Users/pierre/Documents/GitHub/next-example-project/pages/article/[id]/index.js\";\n\n\n\n\n\nconst article = ({\n  article\n}) => {\n  /* You can fetch id from next router like the example below */\n  // const router = useRouter()\n  // const {id} = router.query\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_4__.default, {\n      title: article.title,\n      description: article.excerpt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: article.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: article.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\",\n      children: \"Go Back\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\nconst getStaticProps = async context => {\n  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__.server}/api/articles/${context.params.id}`);\n  const article = await res.json();\n  return {\n    props: {\n      article\n    }\n  };\n};\nconst getStaticPaths = async () => {\n  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__.server}/api/articles`);\n  const articles = await res.json();\n  const ids = articles.map(article => article.id);\n  const paths = ids.map(id => ({\n    params: {\n      id: id.toString()\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n};\n/* Fetching from jsonplaceholder instead of from our API Using getServerSideProps */\n// export const getServerSideProps = async (context) => {\n//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)\n//     const article = await res.json()\n//     return {\n//         props: {\n//             article\n//         }\n//     }\n// }\n\n/* Fetching from jsonplaceholder instead of from our API using getStaticProps + getStaticPaths */\n// export const getStaticProps = async (context) => {\n//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)\n//     const article = await res.json()\n//     return {\n//         props: {\n//             article\n//         }\n//     }\n// }\n// export const getStaticPaths = async() => {\n//     const res = await fetch(\n//         `https://jsonplaceholder.typicode.com/posts`\n//     )\n//     const articles = await res.json()\n//     const ids = articles.map(article => article.id)\n//     const paths = ids.map((id) => ({params: {id: id.toString()}}))\n//     return {\n//         paths,\n//         fallback: false,\n//     }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (article);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV4YW1wbGUvLi9wYWdlcy9hcnRpY2xlL1tpZF0vaW5kZXguanM/NzBiZCJdLCJuYW1lcyI6WyJhcnRpY2xlIiwidGl0bGUiLCJleGNlcnB0IiwiYm9keSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwic2VydmVyIiwicGFyYW1zIiwiaWQiLCJqc29uIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsImFydGljbGVzIiwiaWRzIiwibWFwIiwicGF0aHMiLCJ0b1N0cmluZyIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBQ0E7QUFBRCxDQUFELEtBQWU7QUFDM0I7QUFDQTtBQUNBO0FBRUEsc0JBQ0k7QUFBQSw0QkFDQSw4REFBQyxxREFBRDtBQUFNLFdBQUssRUFBRUEsT0FBTyxDQUFDQyxLQUFyQjtBQUE0QixpQkFBVyxFQUFFRCxPQUFPLENBQUNFO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFFSTtBQUFBLGdCQUFLRixPQUFPLENBQUNDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsZ0JBQUlELE9BQU8sQ0FBQ0c7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQSxrQkFESjtBQVNILENBZEQ7O0FBZ0JPLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQzdDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsMkNBQU8saUJBQWdCSCxPQUFPLENBQUNJLE1BQVIsQ0FBZUMsRUFBRyxFQUE3QyxDQUF2QjtBQUVBLFFBQU1WLE9BQU8sR0FBRyxNQUFNTSxHQUFHLENBQUNLLElBQUosRUFBdEI7QUFFQSxTQUFPO0FBQ0hDLFNBQUssRUFBRTtBQUNIWjtBQURHO0FBREosR0FBUDtBQUtILENBVk07QUFZQSxNQUFNYSxjQUFjLEdBQUcsWUFBVztBQUNyQyxRQUFNUCxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUNsQixHQUFFQywyQ0FBTyxlQURTLENBQXZCO0FBSUEsUUFBTU0sUUFBUSxHQUFHLE1BQU1SLEdBQUcsQ0FBQ0ssSUFBSixFQUF2QjtBQUVBLFFBQU1JLEdBQUcsR0FBR0QsUUFBUSxDQUFDRSxHQUFULENBQWFoQixPQUFPLElBQUlBLE9BQU8sQ0FBQ1UsRUFBaEMsQ0FBWjtBQUVBLFFBQU1PLEtBQUssR0FBR0YsR0FBRyxDQUFDQyxHQUFKLENBQVNOLEVBQUQsS0FBUztBQUFDRCxVQUFNLEVBQUU7QUFBQ0MsUUFBRSxFQUFFQSxFQUFFLENBQUNRLFFBQUg7QUFBTDtBQUFULEdBQVQsQ0FBUixDQUFkO0FBRUEsU0FBTztBQUNIRCxTQURHO0FBRUhFLFlBQVEsRUFBRTtBQUZQLEdBQVA7QUFJSCxDQWZNO0FBaUJQO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUFlbkIsT0FBZiIsImZpbGUiOiIuL3BhZ2VzL2FydGljbGUvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2VydmVyfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL01ldGEnXG5cbmNvbnN0IGFydGljbGUgPSAoe2FydGljbGV9KSA9PiB7XG4gICAgLyogWW91IGNhbiBmZXRjaCBpZCBmcm9tIG5leHQgcm91dGVyIGxpa2UgdGhlIGV4YW1wbGUgYmVsb3cgKi9cbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxNZXRhIHRpdGxlPXthcnRpY2xlLnRpdGxlfSBkZXNjcmlwdGlvbj17YXJ0aWNsZS5leGNlcnB0fS8+XG4gICAgICAgICAgICA8aDE+e2FydGljbGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPnthcnRpY2xlLmJvZHl9PC9wPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5HbyBCYWNrPC9MaW5rPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9hcGkvYXJ0aWNsZXMvJHtjb250ZXh0LnBhcmFtcy5pZH1gKVxuXG4gICAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhcnRpY2xlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtzZXJ2ZXJ9L2FwaS9hcnRpY2xlc2BcbiAgICApXG5cbiAgICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIGNvbnN0IGlkcyA9IGFydGljbGVzLm1hcChhcnRpY2xlID0+IGFydGljbGUuaWQpXG5cbiAgICBjb25zdCBwYXRocyA9IGlkcy5tYXAoKGlkKSA9PiAoe3BhcmFtczoge2lkOiBpZC50b1N0cmluZygpfX0pKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9XG59XG5cbi8qIEZldGNoaW5nIGZyb20ganNvbnBsYWNlaG9sZGVyIGluc3RlYWQgb2YgZnJvbSBvdXIgQVBJIFVzaW5nIGdldFNlcnZlclNpZGVQcm9wcyAqL1xuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke2NvbnRleHQucGFyYW1zLmlkfWApXG5cbi8vICAgICBjb25zdCBhcnRpY2xlID0gYXdhaXQgcmVzLmpzb24oKVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgICAgIGFydGljbGVcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLyogRmV0Y2hpbmcgZnJvbSBqc29ucGxhY2Vob2xkZXIgaW5zdGVhZCBvZiBmcm9tIG91ciBBUEkgdXNpbmcgZ2V0U3RhdGljUHJvcHMgKyBnZXRTdGF0aWNQYXRocyAqL1xuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7Y29udGV4dC5wYXJhbXMuaWR9YClcblxuLy8gICAgIGNvbnN0IGFydGljbGUgPSBhd2FpdCByZXMuanNvbigpXG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwcm9wczoge1xuLy8gICAgICAgICAgICAgYXJ0aWNsZVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYygpID0+IHtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbi8vICAgICAgICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c2Bcbi8vICAgICApXG5cbi8vICAgICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IHJlcy5qc29uKClcblxuLy8gICAgIGNvbnN0IGlkcyA9IGFydGljbGVzLm1hcChhcnRpY2xlID0+IGFydGljbGUuaWQpXG5cbi8vICAgICBjb25zdCBwYXRocyA9IGlkcy5tYXAoKGlkKSA9PiAoe3BhcmFtczoge2lkOiBpZC50b1N0cmluZygpfX0pKVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcGF0aHMsXG4vLyAgICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/article/[id]/index.js\n");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Meta_js"], function() { return __webpack_exec__("./pages/article/[id]/index.js"); });
module.exports = __webpack_exports__;

})();