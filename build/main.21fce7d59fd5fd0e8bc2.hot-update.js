exports.id = "main";
exports.modules = {

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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_containers_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/containers/App */ "./src/common/containers/App.js");
/* harmony import */ var _common_containers_App__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_containers_App__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_store_configureStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/store/configureStore */ "./src/common/store/configureStore.js");
/* harmony import */ var _common_api_counter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/api/counter */ "./src/common/api/counter.js");
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/services */ "./src/common/services/index.js");



var _jsxFileName = '/Users/thomaslai/dev/manhldgs/react-redux-ssr/src/server/index.js',
    _this = undefined;














var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
var server = express__WEBPACK_IMPORTED_MODULE_3___default()();

server
// .disable('x-powered-by')
.use(helmet__WEBPACK_IMPORTED_MODULE_8___default()()).use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static("/Users/thomaslai/dev/manhldgs/react-redux-ssr/public")).get('/course-ads', function () {
  var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var _ref2, data, preloadedState, store, markup;

    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _common_services__WEBPACK_IMPORTED_MODULE_12__["CourseAdService"].find();

          case 3:
            _ref2 = _context.sent;
            data = _ref2.data;


            // Compile an initial state
            preloadedState = { courseAds: data };

            // Create a new Redux store instance

            store = Object(_common_store_configureStore__WEBPACK_IMPORTED_MODULE_10__["default"])(preloadedState);

            // Render the component to a string

            markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"],
              { store: store, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_containers_App__WEBPACK_IMPORTED_MODULE_9___default.a, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              })
            ));


            res.send('\n        <!doctype html>\n        <html lang="">\n          <head>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n            <meta charSet=\'utf-8\' />\n            <title>Razzle Redux Example</title>\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n            ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n          </head>\n          <body>\n           <div id="root">' + markup + '</div>\n            <script>\n              window.__PRELOADED_STATE__ = ' + serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(finalState) + '\n            </script>\n          </body>\n        </html>');
            // res.send({ data });
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](0);

            console.log('err', _context.t0);
            res.send(500);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()).get('/*', function (req, res) {
  Object(_common_api_counter__WEBPACK_IMPORTED_MODULE_11__["fetchCounter"])(function (apiResult) {
    // Read the counter from the request, if provided
    var params = qs__WEBPACK_IMPORTED_MODULE_5___default.a.parse(req.query);
    var counter = parseInt(params.counter, 10) || apiResult || 0;

    // Compile an initial state
    var preloadedState = { counter: counter };

    // Create a new Redux store instance
    var store = Object(_common_store_configureStore__WEBPACK_IMPORTED_MODULE_10__["default"])(preloadedState);

    // Render the component to a string
    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"],
      { store: store, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      },
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_containers_App__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })
    ));

    // Grab the initial state from our Redux store
    var finalState = store.getState();

    res.send('<!doctype html>\n    <html lang="">\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta charSet=\'utf-8\' />\n        <title>Razzle Redux Example</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n          ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n    </head>\n    <body>\n        <div id="root">' + markup + '</div>\n        <script>\n          window.__PRELOADED_STATE__ = ' + serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(finalState) + '\n        </script>\n    </body>\n</html>');
  });
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.21fce7d59fd5fd0e8bc2.hot-update.js.map