exports.id = "main";
exports.modules = {

/***/ "./src/common/services/index.js":
/*!**************************************!*\
  !*** ./src/common/services/index.js ***!
  \**************************************/
/*! exports provided: CourseAdService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseAdService", function() { return CourseAdService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feathersjs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @feathersjs/client */ "@feathersjs/client");
/* harmony import */ var _feathersjs_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_feathersjs_client__WEBPACK_IMPORTED_MODULE_1__);



var HOST =  false ? undefined : // : 'http://localhost:3030';
'https://learnla-api-staging.herokuapp.com';

var socketio = _feathersjs_client__WEBPACK_IMPORTED_MODULE_1___default.a.socketio,
    authentication = _feathersjs_client__WEBPACK_IMPORTED_MODULE_1___default.a.authentication;


var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(HOST);
var feathersClient = _feathersjs_client__WEBPACK_IMPORTED_MODULE_1___default()();

feathersClient.configure(socketio(socket, { timeout: 15000 }));
// feathersClient.configure(
//   authentication({
//     storage: window.localStorage,
//     storageKey: 'learnla',
//   })
// );

var CourseAdService = feathersClient.service('course-ads');
/* harmony default export */ __webpack_exports__["default"] = (feathersClient);

/***/ })

};
//# sourceMappingURL=main.e90425e96fd83fc3bdeb.hot-update.js.map