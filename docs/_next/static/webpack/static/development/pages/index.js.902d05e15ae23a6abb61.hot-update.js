webpackHotUpdate("static/development/pages/index.js",{

/***/ "./styles/tokens/typography.js":
/*!*************************************!*\
  !*** ./styles/tokens/typography.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./options/typography */ "./styles/tokens/options/typography.js"),
    weight = _require.weight,
    scale = _require.scale;

var lg = 1440;
var sm = 375;
var scrDelta = lg - sm;

var dynamicSize = function dynamicSize(max, min) {
  return "calc((100vw - ".concat(sm, "px) * ").concat((max - min) / scrDelta, " + ").concat(min, "px)");
};

module.exports = {
  fontFamily: {
    expressive: ['Mont'],
    productive: ['Overpass']
  },
  typography: {
    display: ['e', dynamicSize(160, 64), 1.25, weight.expressive.heavy],
    // display: ['e', scale[160], scale[200], weight.expressive.heavy],
    heading: [, dynamicSize(40, 24), 1.2, weight.productive.heavy],
    subheading: [, dynamicSize(24, 20), 1.33, weight.productive.heavy],
    label: [, dynamicSize(16, 12), 1.5, weight.productive.heavy],
    body: [, dynamicSize(20, 16), 1.2, weight.productive.regular] // display: ['e', scale[40], scale[48], weight.productive.heavy],
    // 'heading-01': [, scale[15], scale[20], weight.productive.heavy],
    // 'heading-02': [, scale[18], scale[24], weight.productive.heavy],
    // 'heading-03': [, scale[20], scale[32], weight.productive.heavy],
    // // 'heading-03': [, scale[32], scale[56], weight.productive.heavy],
    // 'display-00': [, scale[32], scale[48], weight.expressive.heavy],
    // 'display-01': [, scale[56], scale[64], weight.expressive.heavy],
    // 'display-02': [, scale[96], scale[112], weight.expressive.heavy],
    // 'display-body': [, scale[18], scale[24], weight.expressive.regular],
    // // 'display-01': ['e', scale[24], scale[32], weight.expressive.heavy],
    // 'body-01': [, scale[13], scale[16], weight.productive.regular],
    // 'body-01plus': [, scale[13], scale[16], weight.productive.heavy],
    // 'body-02': [, scale[15], scale[20], weight.productive.regular],
    // 'body-02plus': [, scale[15], scale[20], weight.productive.heavy],
    // // 'body-s-1line': [, scale[14], scale[16], weight.productive.regular],
    // label: [, scale[13], scale[16], weight.productive.heavy],
    // 'btn-01': [, scale[13], scale[16], weight.productive.regular],
    // 'btn-02': [, scale[15], scale[16], weight.productive.heavy],
    // caption: [, scale[11], scale[16], weight.productive.regular]

  }
};

/***/ })

})
//# sourceMappingURL=index.js.902d05e15ae23a6abb61.hot-update.js.map