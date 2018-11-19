exports.id = "main";
exports.modules = {

/***/ "./src/common/actions/index.js":
/*!*************************************!*\
  !*** ./src/common/actions/index.js ***!
  \*************************************/
/*! exports provided: FETCH_COURSE_ADS, fetchCourseAds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COURSE_ADS", function() { return FETCH_COURSE_ADS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCourseAds", function() { return fetchCourseAds; });
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var feathers_hooks_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! feathers-hooks-common */ "feathers-hooks-common");
/* harmony import */ var feathers_hooks_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(feathers_hooks_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/common/services/index.js");




var _this = undefined;




var FETCH_COURSE_ADS = 'FETCH_COURSE_ADS';

var fetchCourseAds = function fetchCourseAds(q) {
  return function () {
    var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var query, res;
      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, q, { $limit: 100, $sort: { createdAt: -1 } });
              _context.prev = 1;
              _context.next = 4;
              return _services__WEBPACK_IMPORTED_MODULE_4__["CourseAdService"].find({ query: query });

            case 4:
              res = _context.sent;

              console.log('res', res);
              dispatch({
                type: FETCH_COURSE_ADS,
                payload: res.data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](1);

              console.log('fetchCourseAds err', _context.t0);

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ })

};
//# sourceMappingURL=main.a0275a48bfbb3bb330b4.hot-update.js.map