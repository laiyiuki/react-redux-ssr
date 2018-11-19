exports.id = "main";
exports.modules = {

/***/ "./src/common/store/configureStore.js":
/*!********************************************!*\
  !*** ./src/common/store/configureStore.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/common/reducers/index.js");




var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];

var configureStore = function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(undefined, middlewares)

  // compose(
  //   applyMiddleware(...middlewares),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //     window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
  );

  if (true) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(/*! ../reducers */ "./src/common/reducers/index.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/common/reducers/index.js");
(function () {
      var nextRootReducer = __webpack_require__(/*! ../reducers */ "./src/common/reducers/index.js").default;
      store.replaceReducer(nextRootReducer);
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  }

  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ })

};
//# sourceMappingURL=main.ec173d31a0025b1b91e4.hot-update.js.map