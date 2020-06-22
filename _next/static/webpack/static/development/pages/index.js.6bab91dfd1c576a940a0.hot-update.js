webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/story/mainBody.tsx":
/*!***************************************!*\
  !*** ./components/story/mainBody.tsx ***!
  \***************************************/
/*! exports provided: MainBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBody", function() { return MainBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./components/story/config/index.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var _config$design = _config__WEBPACK_IMPORTED_MODULE_1__["config"].design,
    bottomBoundary = _config$design.bottomBoundary,
    topBoundary = _config$design.topBoundary,
    berthLine = _config$design.berthLine;
var mb = (1 + bottomBoundary - topBoundary) * 100;
var mbOfLast = 0;
var MainBody = function MainBody(_ref) {
  var brief = _ref.brief,
      sub = _ref.sub,
      sectons = _ref.sectons,
      isLast = _ref.isLast;
  return __jsx("div", {
    style: {
      marginBottom: "".concat(isLast ? mbOfLast : mb, "vh")
    }
  }, sub && __jsx("h2", {
    className: "mb-micro-8 type-subheading"
  }, sub), brief && __jsx("h1", {
    className: "type-heading whitespace-pre-line"
  }, brief), sectons && sectons.map(function (section, i) {
    return __jsx(Section, {
      key: i,
      label: section.name,
      content: section.value
    });
  }));
};

var Section = function Section(_ref2) {
  var label = _ref2.label,
      content = _ref2.content;
  return __jsx("div", {
    className: "mt-micro-32"
  }, __jsx("h3", {
    className: "type-label uppercase"
  }, label), __jsx("p", {
    className: "mt-micro-8 type-body"
  }, content));
};

/***/ })

})
//# sourceMappingURL=index.js.6bab91dfd1c576a940a0.hot-update.js.map