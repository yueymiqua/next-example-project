/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[id]",{

/***/ "./pages/article/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/article/[id]/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Meta */ \"./components/Meta.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/pierre/Documents/GitHub/next-example-project/pages/article/[id]/index.js\",\n    _this = undefined;\n\n\n\n\n\nvar article = function article(_ref) {\n  var article = _ref.article;\n\n  /* You can fetch id from next router like the example below */\n  // const router = useRouter()\n  // const {id} = router.query\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_3__.default, {\n      title: article.title,\n      description: article.excerpt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: article.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: article.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\",\n      children: \"Go Back\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n/* Fetching from jsonplaceholder instead of from our API Using getServerSideProps */\n// export const getServerSideProps = async (context) => {\n//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)\n//     const article = await res.json()\n//     return {\n//         props: {\n//             article\n//         }\n//     }\n// }\n\n/* Fetching from jsonplaceholder instead of from our API using getStaticProps + getStaticPaths */\n// export const getStaticProps = async (context) => {\n//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)\n//     const article = await res.json()\n//     return {\n//         props: {\n//             article\n//         }\n//     }\n// }\n// export const getStaticPaths = async() => {\n//     const res = await fetch(\n//         `https://jsonplaceholder.typicode.com/posts`\n//     )\n//     const articles = await res.json()\n//     const ids = articles.map(article => article.id)\n//     const paths = ids.map((id) => ({params: {id: id.toString()}}))\n//     return {\n//         paths,\n//         fallback: false,\n//     }\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (article);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9baWRdL2luZGV4LmpzPzcwYmQiXSwibmFtZXMiOlsiYXJ0aWNsZSIsInRpdGxlIiwiZXhjZXJwdCIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsdUJBQWU7QUFBQSxNQUFiQSxPQUFhLFFBQWJBLE9BQWE7O0FBQzNCO0FBQ0E7QUFDQTtBQUVBLHNCQUNJO0FBQUEsNEJBQ0EsOERBQUMscURBQUQ7QUFBTSxXQUFLLEVBQUVBLE9BQU8sQ0FBQ0MsS0FBckI7QUFBNEIsaUJBQVcsRUFBRUQsT0FBTyxDQUFDRTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFFSTtBQUFBLGdCQUFLRixPQUFPLENBQUNDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0k7QUFBQSxnQkFBSUQsT0FBTyxDQUFDRztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQUtJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBLGtCQURKO0FBU0gsQ0FkRDs7QUE2Q0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWVILE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NlcnZlcn0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9NZXRhJ1xuXG5jb25zdCBhcnRpY2xlID0gKHthcnRpY2xlfSkgPT4ge1xuICAgIC8qIFlvdSBjYW4gZmV0Y2ggaWQgZnJvbSBuZXh0IHJvdXRlciBsaWtlIHRoZSBleGFtcGxlIGJlbG93ICovXG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAvLyBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8TWV0YSB0aXRsZT17YXJ0aWNsZS50aXRsZX0gZGVzY3JpcHRpb249e2FydGljbGUuZXhjZXJwdH0vPlxuICAgICAgICAgICAgPGgxPnthcnRpY2xlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD57YXJ0aWNsZS5ib2R5fTwvcD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+R28gQmFjazwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3NlcnZlcn0vYXBpL2FydGljbGVzLyR7Y29udGV4dC5wYXJhbXMuaWR9YClcblxuICAgIGNvbnN0IGFydGljbGUgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYXJ0aWNsZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7c2VydmVyfS9hcGkvYXJ0aWNsZXNgXG4gICAgKVxuXG4gICAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zdCBpZHMgPSBhcnRpY2xlcy5tYXAoYXJ0aWNsZSA9PiBhcnRpY2xlLmlkKVxuXG4gICAgY29uc3QgcGF0aHMgPSBpZHMubWFwKChpZCkgPT4gKHtwYXJhbXM6IHtpZDogaWQudG9TdHJpbmcoKX19KSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfVxufVxuXG4vKiBGZXRjaGluZyBmcm9tIGpzb25wbGFjZWhvbGRlciBpbnN0ZWFkIG9mIGZyb20gb3VyIEFQSSBVc2luZyBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtjb250ZXh0LnBhcmFtcy5pZH1gKVxuXG4vLyAgICAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IHJlcy5qc29uKClcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgICAgICBhcnRpY2xlXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8qIEZldGNoaW5nIGZyb20ganNvbnBsYWNlaG9sZGVyIGluc3RlYWQgb2YgZnJvbSBvdXIgQVBJIHVzaW5nIGdldFN0YXRpY1Byb3BzICsgZ2V0U3RhdGljUGF0aHMgKi9cbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke2NvbnRleHQucGFyYW1zLmlkfWApXG5cbi8vICAgICBjb25zdCBhcnRpY2xlID0gYXdhaXQgcmVzLmpzb24oKVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgICAgIGFydGljbGVcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMoKSA9PiB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgXG4vLyAgICAgKVxuXG4vLyAgICAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCByZXMuanNvbigpXG5cbi8vICAgICBjb25zdCBpZHMgPSBhcnRpY2xlcy5tYXAoYXJ0aWNsZSA9PiBhcnRpY2xlLmlkKVxuXG4vLyAgICAgY29uc3QgcGF0aHMgPSBpZHMubWFwKChpZCkgPT4gKHtwYXJhbXM6IHtpZDogaWQudG9TdHJpbmcoKX19KSlcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHBhdGhzLFxuLy8gICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4vLyAgICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/article/[id]/index.js\n");

/***/ })

});