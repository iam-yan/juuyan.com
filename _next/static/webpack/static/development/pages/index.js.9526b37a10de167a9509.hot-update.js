webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/story/stories.tsx":
/*!**************************************!*\
  !*** ./components/story/stories.tsx ***!
  \**************************************/
/*! exports provided: Stories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stories", function() { return Stories; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _projectionRoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectionRoom */ "./components/story/projectionRoom.tsx");
/* harmony import */ var _mainBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainBody */ "./components/story/mainBody.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./components/story/config/index.tsx");
/* harmony import */ var _floatCard_floatCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./floatCard/floatCard */ "./components/story/floatCard/floatCard.tsx");
/* harmony import */ var _appContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appContext */ "./components/appContext.ts");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-ga */ "../../node_modules/react-ga/dist/esm/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var stories = _config__WEBPACK_IMPORTED_MODULE_4__["config"].stories,
    _config$design = _config__WEBPACK_IMPORTED_MODULE_4__["config"].design,
    topBoundary = _config$design.topBoundary,
    bottomBoundary = _config$design.bottomBoundary,
    berthLine = _config$design.berthLine;

var getBerthLineProgress = function getBerthLineProgress(h) {
  return (bottomBoundary + 1 - berthLine) * window.innerHeight / ((bottomBoundary + 1 - topBoundary) * window.innerHeight + h);
};

var Stories = function Stories() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_appContext__WEBPACK_IMPORTED_MODULE_6__["AppContext"]),
      cursorSetterRef = _useContext.cursorSetterRef;

  var tickingRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var storiesContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // const [story, set] = useState({
  //   index: 0,
  //   berthLineProgress: undefined,
  // });
  // const { index, berthLineProgress, costarBerthLineProgress } = story;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      index = _useState[0],
      set = _useState[1];

  var berthLineProgressRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0); // Manage state of projection rooms.

  var roomProgressSetterRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // const cardsProgressSetterRef: ProgressSetterRef = useRef(null);

  var curCardProgressSetterRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var preCardProgressSetterRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var storyNodes = storiesContainerRef.current.childNodes;

    var updateIndex = function updateIndex(newIndex) {
      berthLineProgressRef.current = getBerthLineProgress(storyNodes[newIndex].offsetHeight);
      set(newIndex);
    };

    if (index === undefined) {
      updateIndex(Array.from(storyNodes).findIndex(function (node) {
        var storyEl = node;
        return storyEl.offsetTop + storyEl.offsetHeight - window.scrollY >= window.innerHeight * topBoundary;
      }));
    } else {
      // GA
      react_ga__WEBPACK_IMPORTED_MODULE_7__["default"].event({
        category: 'Browse',
        action: "User is browsing story ".concat(index + 1, ".")
      }); // ClientY off critical lines.

      var topBoundaryClientY = window.innerHeight * topBoundary;
      var bottomBoundaryClientY = window.innerHeight * (bottomBoundary + 1); // Tar element.

      var el = storyNodes[index]; // Total distance.

      var s = bottomBoundaryClientY - topBoundaryClientY + el.offsetHeight;

      var updateProgress = function updateProgress() {
        var newIndex; // Past distance.

        var elClientY = el.offsetTop - window.scrollY;
        var past = bottomBoundaryClientY - elClientY; // Calculate progress.

        var progress = past / s; // Should the story be changed?

        if (progress < 0) {
          if (index > 0) {
            progress = 1 - progress;
            newIndex = index - 1;
          } else progress = 0;
        } else if (progress >= 1 && index < storyNodes.length - 1) {
          progress = progress - 1;
          newIndex = index + 1;
        }

        if (newIndex !== undefined) {
          berthLineProgressRef.current = getBerthLineProgress(storyNodes[newIndex].offsetHeight);
          set(newIndex);
        } else {
          // Use progress to update projection rooms.
          roomProgressSetterRef.current(progress); // cardsProgressSetterRef.current(progress);

          curCardProgressSetterRef.current(progress);
          if (index > 0) preCardProgressSetterRef.current(progress);
        }

        tickingRef.current = false;
      };

      var handleScroll = function handleScroll() {
        if (!tickingRef.current) {
          tickingRef.current = true;
          window.requestAnimationFrame(updateProgress);
        }
      };

      updateProgress(); // Attach listener.

      window.addEventListener('scroll', handleScroll);
      return function () {
        window.removeEventListener('scroll', handleScroll);
      };
    } // Initialize progress.
    // if (!initializedRef.current) {
    //   updateProgress();
    //   initializedRef.current = true;
    // }

  }, [index]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    ref: storiesContainerRef,
    className: "relative z-mid",
    style: {
      paddingTop: "".concat((1 + bottomBoundary) * 100, "vh"),
      paddingBottom: '50vh',
      marginLeft: '50vw',
      marginRight: '10vw'
    }
  }, stories.map(function (c, i) {
    return __jsx(_mainBody__WEBPACK_IMPORTED_MODULE_3__["MainBody"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, c.mainBody, {
      isLast: i === stories.length - 1
    }));
  })), index !== undefined && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, index > 0 && __jsx(_projectionRoom__WEBPACK_IMPORTED_MODULE_2__["ProjectionRoom"], {
    key: "room-".concat(index - 1),
    index: index - 1
  }), __jsx(_projectionRoom__WEBPACK_IMPORTED_MODULE_2__["ProjectionRoom"], {
    key: "room-".concat(index),
    index: index,
    berthLineProgress: berthLineProgressRef.current,
    cursorSetterRef: cursorSetterRef,
    progressSetterRef: roomProgressSetterRef
  }), stories.map(function (s, i) {
    return __jsx(_floatCard_floatCard__WEBPACK_IMPORTED_MODULE_5__["FloatCard"], {
      key: "card-".concat(i),
      progressSetterRef: i === index ? curCardProgressSetterRef : i === index - 1 ? preCardProgressSetterRef : null,
      index: i,
      costar: i === index - 1,
      mainBodyHeight: storiesContainerRef.current.childNodes[i].offsetHeight
    });
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.9526b37a10de167a9509.hot-update.js.map