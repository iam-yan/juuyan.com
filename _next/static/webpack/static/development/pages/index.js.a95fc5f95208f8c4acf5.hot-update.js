webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/story/projectionRoom.tsx":
/*!*********************************************!*\
  !*** ./components/story/projectionRoom.tsx ***!
  \*********************************************/
/*! exports provided: ProjectionRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectionRoom", function() { return ProjectionRoom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appContext */ "./components/appContext.ts");
/* harmony import */ var _config_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/stories */ "./components/story/config/stories/index.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ProjectionRoom = function ProjectionRoom(_ref) {
  var index = _ref.index,
      berthLineProgress = _ref.berthLineProgress,
      cursorSetterRef = _ref.cursorSetterRef,
      progressSetterRef = _ref.progressSetterRef;
  var _stories$index$env = _config_stories__WEBPACK_IMPORTED_MODULE_2__["stories"][index].env,
      bg = _stories$index$env.bg,
      slogan = _stories$index$env.slogan;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_appContext__WEBPACK_IMPORTED_MODULE_1__["AppContext"]),
      cursorCoordRef = _useContext.cursorCoordRef;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      progress = _useState[0],
      setProgress = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(cursorCoordRef.current),
      cursorCoord = _useState2[0],
      setCursor = _useState2[1];

  var normalizedProgress = progress / berthLineProgress;
  var clipPath = progressSetterRef === undefined ? 'circle(100%) at 50% 50%' : "circle(".concat(normalizedProgress * 100, "% at calc(50% + (").concat(cursorCoord.x, "px - 50%) * ").concat(Math.max(0, 1 - normalizedProgress), ") calc(50% + (").concat(cursorCoord.y, "px - 50%) * ").concat(Math.max(0, 1 - normalizedProgress), "))");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (progressSetterRef !== undefined) {
      progressSetterRef.current = function (p) {
        return setProgress(p);
      };

      cursorSetterRef.current = function (x, y) {
        setCursor({
          x: x,
          y: y
        });
      };

      return function () {
        if (progressSetterRef !== undefined) setProgress(1); // progressSetterRef.current = (p) => {};
        // cursorSetterRef.current = (x, y) => {};
      };
    }
  }, [progressSetterRef]);
  return __jsx("div", {
    className: "fixed inset-0 z-back",
    style: {
      clipPath: clipPath
    }
  }, __jsx("div", {
    className: "fixed inset-0 text-center flex justify-center items-center z-back",
    style: {
      padding: '80px',
      background: bg
    }
  }, __jsx("h1", {
    className: "type-display text-inverse capitalize"
  }, slogan)));
};

/***/ })

})
//# sourceMappingURL=index.js.a95fc5f95208f8c4acf5.hot-update.js.map