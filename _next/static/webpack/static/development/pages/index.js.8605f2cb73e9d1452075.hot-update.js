webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _juuyan_org_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @juuyan.org/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "../../node_modules/react-spring/web.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Header = function Header() {
  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])(function () {
    return {
      config: react_spring__WEBPACK_IMPORTED_MODULE_3__["config"].stiff,
      y: 0,
      onChange: function onChange(y) {
        window.scroll(0, y);
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      scroll = _useSpring2[0],
      setScroll = _useSpring2[1];

  return __jsx("div", {
    className: "fixed z-shell inset-x-0 top-0 p-micro-40 flex justify-between"
  }, __jsx(_juuyan_org_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    icon: "home",
    onClick: function onClick() {}
  }), __jsx(_juuyan_org_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    icon: "mail",
    onClick: function onClick() {},
    href: 'mailto:'
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.8605f2cb73e9d1452075.hot-update.js.map