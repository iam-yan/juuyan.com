webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tailwind.css */ "./styles/tailwind.css");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _juuyan_org_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @juuyan.org/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _styles_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/icons */ "./styles/icons.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "../../node_modules/react-spring/web.js");
/* harmony import */ var _juuyan_org_utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @juuyan.org/utility */ "../../libs/utility/src/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 // ReactGA.initialize('UA-167143117-1');

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      isTouchScreen = _useState[0],
      setIsTouchScreen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_6__["useSpring"])(function () {
    return {
      config: react_spring__WEBPACK_IMPORTED_MODULE_6__["config"].wobbly,
      y: 0,
      onChange: function onChange(y) {
        console.log(y);
        window.scroll(0, y);
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      scroll = _useSpring2[0],
      setScroll = _useSpring2[1];

  var cursorCoordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    x: 0,
    y: 0
  });
  var cursorSetterRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(function (x, y) {
    cursorCoordRef.current = {
      x: x,
      y: y
    };
  });
  Object(_juuyan_org_utility__WEBPACK_IMPORTED_MODULE_7__["useDetectTouchScreen"])(function (isTS) {
    setIsTouchScreen(isTS);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (loaded) {
      setScroll({
        y: window.innerHeight * 0.8
      }); // window.scrollBy(0, window.innerHeight * 0.8);

      console.log('loaded');
    }
  }, [loaded]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Loading"], {
    onAssetsLoad: function onAssetsLoad() {
      return setLoaded(true);
    }
  }), isTouchScreen === false && __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Cursor"], {
    cursorSetterRef: cursorSetterRef,
    cursorCoordRef: cursorCoordRef
  }), isTouchScreen !== undefined && __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["AppContext"].Provider, {
    value: {
      cursorCoordRef: cursorCoordRef,
      cursorSetterRef: cursorSetterRef
    }
  }, __jsx(_juuyan_org_ui__WEBPACK_IMPORTED_MODULE_3__["IconConfig"].Provider, {
    value: _styles_icons__WEBPACK_IMPORTED_MODULE_4__["icons"]
  }, loaded && __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Header"], null), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(!loaded && 'fixed inset-0 overflow-hidden')
  }, __jsx(Component, pageProps)))));
});

/***/ })

})
//# sourceMappingURL=_app.js.ea13d7e7c4c37ee4073f.hot-update.js.map