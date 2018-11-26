exports.id = "main";
exports.modules = {

/***/ "./src/common/reducers/course-ads.js":
/*!*******************************************!*\
  !*** ./src/common/reducers/course-ads.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/common/actions/index.js");



var courseAds = function courseAds() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_COURSE_ADS"]:
      return [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(action.payload));

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (courseAds);

/***/ }),

/***/ "./src/common/reducers/index.js":
/*!**************************************!*\
  !*** ./src/common/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _course_ads__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-ads */ "./src/common/reducers/course-ads.js");




var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  courseAds: _course_ads__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

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

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/services */ "./src/common/services/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes */ "./src/routes.js");
/* harmony import */ var _common_store_configureStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/store/configureStore */ "./src/common/store/configureStore.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_13__);




var _jsxFileName = '/Users/thomaslai/dev/manhldgs/react-redux-ssr/src/server/index.js',
    _this = undefined;














var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
var server = express__WEBPACK_IMPORTED_MODULE_8___default()();

server
// .disable('x-powered-by')
.use(helmet__WEBPACK_IMPORTED_MODULE_9___default()()).use(express__WEBPACK_IMPORTED_MODULE_8___default.a.static("/Users/thomaslai/dev/manhldgs/react-redux-ssr/public")).get('/course-ads', function () {
  var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var store, promises, finalState, staticContext, markup;
    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            store = Object(_common_store_configureStore__WEBPACK_IMPORTED_MODULE_12__["default"])();
            promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__["matchRoutes"])(_routes__WEBPACK_IMPORTED_MODULE_11__["default"], req.url).map(function (_ref2) {
              var route = _ref2.route;
              return route.loadData ? route.loadData : null;
            });
            _context.next = 5;
            return babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(promises);

          case 5:
            finalState = store.getState();
            staticContext = {};
            // Render the component to a string

            markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"],
              { store: store, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"],
                { location: req.url, context: staticContext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, { routes: _routes__WEBPACK_IMPORTED_MODULE_11__["default"], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                })
              )
            ));


            res.send('\n        <!doctype html>\n        <html lang="">\n          <head>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n            <meta charSet=\'utf-8\' />\n            <title>Razzle Redux Example</title>\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n            ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n          </head>\n          <body>\n           <div id="root">' + markup + '</div>\n            <script>\n              window.__PRELOADED_STATE__ = ' + serialize(finalState) + '\n            </script>\n          </body>\n        </html>');
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](0);

            console.log('err', _context.t0);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()).get('/courses', function () {
  var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {
    var _ref4, data, preloadedState, store, finalState, staticContext, markup;

    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            // First we iterate through our top level routes
            // looking for matches against the current url.
            // const matches = routes.map((route, index) => {
            //   const match = matchPath(req.url, route.path, route);
            //   // We then look for static getInitialData function on each top level component
            //   if (match) {
            //     const obj = {
            //       route,
            //       match,
            //       promise: route.component.getInitialData
            //         ? route.component.getInitialData({ match, req, res })
            //         : Promise.resolve(null),
            //     };
            //     return obj;
            //   }
            //   return null;
            // });
            console.log(req.path);
            console.log(req.url);

            _context2.next = 5;
            return _common_services__WEBPACK_IMPORTED_MODULE_10__["CourseAdService"].find();

          case 5:
            _ref4 = _context2.sent;
            data = _ref4.data;


            // Compile an initial state
            preloadedState = { courseAds: data };

            // Create a new Redux store instance

            store = Object(_common_store_configureStore__WEBPACK_IMPORTED_MODULE_12__["default"])(preloadedState);
            // Grab the initial state from our Redux store

            finalState = store.getState();
            staticContext = {};
            // Render the component to a string

            markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"],
              { store: store, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 109
                }
              },
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"],
                { location: req.url, context: staticContext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, { routes: _routes__WEBPACK_IMPORTED_MODULE_11__["default"], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                  }
                })
              )
            ));


            res.send('\n        <!doctype html>\n        <html lang="">\n          <head>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n            <meta charSet=\'utf-8\' />\n            <title>Razzle Redux Example</title>\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n            ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n          </head>\n          <body>\n           <div id="root">' + markup + '</div>\n            <script>\n              window.__PRELOADED_STATE__ = ' + serialize(finalState) + '\n            </script>\n          </body>\n        </html>');
            // res.send({ data });
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2['catch'](0);

            console.log('err', _context2.t0);
            res.send(500);

          case 19:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 15]]);
  }));

  return function (_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}());

//   .get('/*', (req, res) => {
//     fetchCounter(apiResult => {
//       // Read the counter from the request, if provided
//       const params = qs.parse(req.query);
//       const counter = parseInt(params.counter, 10) || apiResult || 0;

//       // Compile an initial state
//       const preloadedState = { counter };

//       // Create a new Redux store instance
//       const store = configureStore(preloadedState);

//       // Render the component to a string
//       const markup = renderToString(
//         <Provider store={store}>
//           <App />
//         </Provider>
//       );

//       // Grab the initial state from our Redux store
//       const finalState = store.getState();

//       res.send(`<!doctype html>
//     <html lang="">
//     <head>
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta charSet='utf-8' />
//         <title>Razzle Redux Example</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         ${
//           assets.client.css
//             ? `<link rel="stylesheet" href="${assets.client.css}">`
//             : ''
//         }
//           ${
//             process.env.NODE_ENV === 'production'
//               ? `<script src="${assets.client.js}" defer></script>`
//               : `<script src="${assets.client.js}" defer crossorigin></script>`
//           }
//     </head>
//     <body>
//         <div id="root">${markup}</div>
//         <script>
//           window.__PRELOADED_STATE__ = ${serialize(finalState)}
//         </script>
//     </body>
// </html>`);
//     });
//   });

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
/*!**********************************************************!*\
  !*** external "babel-runtime/helpers/toConsumableArray" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

};
//# sourceMappingURL=main.0ed1e05dce4533cd1adf.hot-update.js.map