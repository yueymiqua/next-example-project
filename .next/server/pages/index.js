(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(6452);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
;// CONCATENATED MODULE: ./components/ArticleItem.js





const ArticleItem = ({
  article
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/article/[id]",
    as: `/article/${article.id}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: (Article_module_default()).card,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: [article.title, " \u2192"]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: article.body
      })]
    })
  });
};

/* harmony default export */ var components_ArticleItem = (ArticleItem);
;// CONCATENATED MODULE: ./components/ArticleList.js




const ArticleList = ({
  articles
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Article_module_default()).grid,
    children: articles.map(article => /*#__PURE__*/jsx_runtime_.jsx(components_ArticleItem, {
      article: article
    }))
  });
};

/* harmony default export */ var components_ArticleList = (ArticleList);
;// CONCATENATED MODULE: ./pages/index.js




function Home({
  articles
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "WebDev News"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: "web development, programming"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_ArticleList, {
      articles: articles
    })]
  });
}
const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  };
};

/***/ }),

/***/ 6452:
/***/ (function(module) {

// Exports
module.exports = {
	"grid": "Article_grid__2WPYc",
	"card": "Article_card__2DgoW",
	"logo": "Article_logo__p8cMG"
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

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(7595); });
module.exports = __webpack_exports__;

})();