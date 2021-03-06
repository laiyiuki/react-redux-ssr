exports.id = "main";
exports.modules = {

/***/ "./src/common/App.js":
false,

/***/ "./src/common/reducers/course-ads.js":
false,

/***/ "./src/common/reducers/index.js":
false,

/***/ "./src/common/store/configureStore.js":
false,

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
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/services */ "./src/common/services/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./src/routes.js");



var _jsxFileName = '/Users/thomaslai/dev/manhldgs/react-redux-ssr/src/server/index.js',
    _this = undefined;










var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
var server = express();

server
// .disable('x-powered-by')
.use(helmet()).use(express.static("/Users/thomaslai/dev/manhldgs/react-redux-ssr/public")).get('/*', function () {
  var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var _ref2, data, preloadedState, store, finalState, staticContext, markup;

    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _common_services__WEBPACK_IMPORTED_MODULE_7__["CourseAdService"].find();

          case 3:
            _ref2 = _context.sent;
            data = _ref2.data;


            // Compile an initial state
            preloadedState = { courseAds: data };

            // Create a new Redux store instance

            store = configureStore(preloadedState);
            // Grab the initial state from our Redux store

            finalState = store.getState();
            staticContext = {};
            // Render the component to a string

            markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"],
              { store: store, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"],
                { location: req.url, context: staticContext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App, { routes: _routes__WEBPACK_IMPORTED_MODULE_8__["default"], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                })
              )
            ));


            res.send('\n        <!doctype html>\n        <html lang="">\n          <head>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n            <meta charSet=\'utf-8\' />\n            <title>Razzle Redux Example</title>\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n            ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n          </head>\n          <body>\n           <div id="root">' + markup + '</div>\n            <script>\n              window.__PRELOADED_STATE__ = ' + serialize(finalState) + '\n            </script>\n          </body>\n        </html>');
            // res.send({ data });
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](0);

            console.log('err', _context.t0);
            res.send(500);

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
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
false,

/***/ "helmet":
false,

/***/ "qs":
false,

/***/ "redux":
false,

/***/ "redux-thunk":
false,

/***/ "serialize-javascript":
false

};
//# sourceMappingURL=main.3663dccefa2e825bd8f1.hot-update.js.map