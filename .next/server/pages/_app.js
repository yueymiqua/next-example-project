(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6235:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/nav.module.css
var nav_module = __webpack_require__(9893);
var nav_module_default = /*#__PURE__*/__webpack_require__.n(nav_module);
;// CONCATENATED MODULE: ./components/Nav.js





const Nav = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: (nav_module_default()).nav,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: "Home"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: "About"
        })
      })]
    })
  });
};

/* harmony default export */ var components_Nav = (Nav);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(6514);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header.js




const Header = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
      className: (Header_module_default()).title,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "WebDev"
      }), "News"]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (Header_module_default()).description,
      children: "Keep up to date with the latest web dev news"
    })]
  });
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(296);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout.js







const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Nav, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Layout_module_default()).container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
        className: (Layout_module_default()).main,
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), children]
      })
    })]
  });
};

/* harmony default export */ var components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 6514:
/***/ (function(module) {

// Exports
module.exports = {
	"title": "Header_title__1vi4d",
	"description": "Header_description__1lhe1"
};


/***/ }),

/***/ 296:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Layout_container__1SPwL",
	"main": "Layout_main__cgm7e",
	"footer": "Layout_footer__3-iLi",
	"title": "Layout_title__9r3ai",
	"description": "Layout_description__s8cXx"
};


/***/ }),

/***/ 9893:
/***/ (function(module) {

// Exports
module.exports = {
	"nav": "nav_nav__36Q7g"
};


/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(6235); });
module.exports = __webpack_exports__;

})();