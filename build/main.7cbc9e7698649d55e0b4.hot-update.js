exports.id = "main";
exports.modules = {

/***/ "./src/common/App.js":
/*!***************************!*\
  !*** ./src/common/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = '/Users/thomaslai/dev/manhldgs/react-redux-ssr/src/common/App.js';



var App = function App(routes) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      routes.map(function (route) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: route.exact,
          path: route.path,
          name: route.name,
          component: route.component,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        });
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/common/components/CourseAds.js":
false,

/***/ "babel-runtime/core-js/object/get-prototype-of":
false,

/***/ "babel-runtime/helpers/classCallCheck":
false,

/***/ "babel-runtime/helpers/createClass":
false,

/***/ "babel-runtime/helpers/inherits":
false,

/***/ "babel-runtime/helpers/possibleConstructorReturn":
false

};
//# sourceMappingURL=main.7cbc9e7698649d55e0b4.hot-update.js.map