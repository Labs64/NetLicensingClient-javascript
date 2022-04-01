(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("NetLicensing", [], factory);
	else if(typeof exports === 'object')
		exports["NetLicensing"] = factory();
	else
		root["NetLicensing"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _get.apply(this, arguments);
}

module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ "./node_modules/axios/lib/defaults/transitional.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults/index.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ (function(module) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ../core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
var transitionalDefaults = __webpack_require__(/*! ./transitional */ "./node_modules/axios/lib/defaults/transitional.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ../adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ../adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = {
  "version": "0.26.1"
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ (function(module) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ (function(module) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/axios/lib/env/data.js").version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var _default = {
  BASIC_AUTHENTICATION: 'BASIC_AUTH',
  APIKEY_IDENTIFICATION: 'APIKEY',
  ANONYMOUS_IDENTIFICATION: 'ANONYMOUS',
  ACTIVE: 'active',
  NUMBER: 'number',
  NAME: 'name',
  VERSION: 'version',
  DELETED: 'deleted',
  CASCADE: 'forceCascade',
  PRICE: 'price',
  DISCOUNT: 'discount',
  CURRENCY: 'currency',
  IN_USE: 'inUse',
  FILTER: 'filter',
  BASE_URL: 'baseUrl',
  USERNAME: 'username',
  PASSWORD: 'password',
  SECURITY_MODE: 'securityMode',
  LicensingModel: {
    VALID: 'valid',
    TryAndBuy: {
      NAME: 'TryAndBuy'
    },
    Rental: {
      NAME: 'Rental',
      RED_THRESHOLD: 'redThreshold',
      YELLOW_THRESHOLD: 'yellowThreshold'
    },
    Subscription: {
      NAME: 'Subscription'
    },
    Floating: {
      NAME: 'Floating'
    },
    MultiFeature: {
      NAME: 'MultiFeature'
    },
    PayPerUse: {
      NAME: 'PayPerUse'
    },
    PricingTable: {
      NAME: 'PricingTable'
    },
    Quota: {
      NAME: 'Quota'
    },
    NodeLocked: {
      NAME: 'NodeLocked'
    }
  },
  Vendor: {
    VENDOR_NUMBER: 'vendorNumber',
    VENDOR_TYPE: 'Vendor'
  },
  Product: {
    ENDPOINT_PATH: 'product',
    PRODUCT_NUMBER: 'productNumber',
    LICENSEE_AUTO_CREATE: 'licenseeAutoCreate',
    DESCRIPTION: 'description',
    LICENSING_INFO: 'licensingInfo',
    DISCOUNTS: 'discounts',

    /**
     * @deprecated use ProductModule.PROP_LICENSEE_SECRET_MODE instead
     */
    PROP_LICENSEE_SECRET_MODE: 'licenseeSecretMode',
    PROP_VAT_MODE: 'vatMode',
    Discount: {
      TOTAL_PRICE: 'totalPrice',
      AMOUNT_FIX: 'amountFix',
      AMOUNT_PERCENT: 'amountPercent'
    },
    LicenseeSecretMode: {
      /**
       * @deprecated DISABLED mode is deprecated
       */
      DISABLED: 'DISABLED',
      PREDEFINED: 'PREDEFINED',
      CLIENT: 'CLIENT'
    }
  },
  ProductModule: {
    ENDPOINT_PATH: 'productmodule',
    PRODUCT_MODULE_NUMBER: 'productModuleNumber',
    PRODUCT_MODULE_NAME: 'productModuleName',
    LICENSING_MODEL: 'licensingModel',
    PROP_LICENSEE_SECRET_MODE: 'licenseeSecretMode'
  },
  LicenseTemplate: {
    ENDPOINT_PATH: 'licensetemplate',
    LICENSE_TEMPLATE_NUMBER: 'licenseTemplateNumber',
    LICENSE_TYPE: 'licenseType',
    AUTOMATIC: 'automatic',
    HIDDEN: 'hidden',
    HIDE_LICENSES: 'hideLicenses',
    PROP_LICENSEE_SECRET: 'licenseeSecret',
    LicenseType: {
      FEATURE: 'FEATURE',
      TIMEVOLUME: 'TIMEVOLUME',
      FLOATING: 'FLOATING',
      QUANTITY: 'QUANTITY'
    }
  },
  Token: {
    ENDPOINT_PATH: 'token',
    EXPIRATION_TIME: 'expirationTime',
    TOKEN_TYPE: 'tokenType',
    API_KEY: 'apiKey',
    TOKEN_PROP_EMAIL: 'email',
    TOKEN_PROP_VENDORNUMBER: 'vendorNumber',
    TOKEN_PROP_SHOP_URL: 'shopURL',
    Type: {
      DEFAULT: 'DEFAULT',
      SHOP: 'SHOP',
      APIKEY: 'APIKEY'
    }
  },
  Transaction: {
    ENDPOINT_PATH: 'transaction',
    TRANSACTION_NUMBER: 'transactionNumber',
    GRAND_TOTAL: 'grandTotal',
    STATUS: 'status',
    SOURCE: 'source',
    DATE_CREATED: 'datecreated',
    DATE_CLOSED: 'dateclosed',
    VAT: 'vat',
    VAT_MODE: 'vatMode',
    LICENSE_TRANSACTION_JOIN: 'licenseTransactionJoin',
    SOURCE_SHOP_ONLY: 'shopOnly',

    /**
     * @deprecated
     */
    Status: {
      CANCELLED: 'CANCELLED',
      CLOSED: 'CLOSED',
      PENDING: 'PENDING'
    }
  },
  Licensee: {
    ENDPOINT_PATH: 'licensee',
    ENDPOINT_PATH_VALIDATE: 'validate',
    ENDPOINT_PATH_TRANSFER: 'transfer',
    LICENSEE_NUMBER: 'licenseeNumber',
    SOURCE_LICENSEE_NUMBER: 'sourceLicenseeNumber',
    PROP_LICENSEE_NAME: 'licenseeName',

    /**
     * @deprecated use License.PROP_LICENSEE_SECRET
     */
    PROP_LICENSEE_SECRET: 'licenseeSecret',
    PROP_MARKED_FOR_TRANSFER: 'markedForTransfer'
  },
  License: {
    ENDPOINT_PATH: 'license',
    LICENSE_NUMBER: 'licenseNumber',
    HIDDEN: 'hidden',
    PROP_LICENSEE_SECRET: 'licenseeSecret'
  },
  PaymentMethod: {
    ENDPOINT_PATH: 'paymentmethod'
  },
  Utility: {
    ENDPOINT_PATH: 'utility',
    ENDPOINT_PATH_LICENSE_TYPES: 'licenseTypes',
    ENDPOINT_PATH_LICENSING_MODELS: 'licensingModels',
    ENDPOINT_PATH_COUNTRIES: 'countries',
    LICENSING_MODEL_PROPERTIES: 'LicensingModelProperties',
    LICENSE_TYPE: 'LicenseType'
  },
  APIKEY: {
    ROLE_APIKEY_LICENSEE: 'ROLE_APIKEY_LICENSEE',
    ROLE_APIKEY_ANALYTICS: 'ROLE_APIKEY_ANALYTICS',
    ROLE_APIKEY_OPERATION: 'ROLE_APIKEY_OPERATION',
    ROLE_APIKEY_MAINTENANCE: 'ROLE_APIKEY_MAINTENANCE',
    ROLE_APIKEY_ADMIN: 'ROLE_APIKEY_ADMIN'
  },
  Validation: {
    FOR_OFFLINE_USE: 'forOfflineUse'
  },
  WarningLevel: {
    GREEN: 'GREEN',
    YELLOW: 'YELLOW',
    RED: 'RED'
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/converters/itemToCountry.js":
/*!*****************************************!*\
  !*** ./src/converters/itemToCountry.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ./itemToObject */ "./src/converters/itemToObject.js"));

var _Country = _interopRequireDefault(__webpack_require__(/*! ../entities/Country */ "./src/entities/Country.js"));

var _default = function _default(item) {
  return new _Country.default((0, _itemToObject.default)(item));
};

exports["default"] = _default;

/***/ }),

/***/ "./src/converters/itemToLicense.js":
/*!*****************************************!*\
  !*** ./src/converters/itemToLicense.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ./itemToObject */ "./src/converters/itemToObject.js"));

var _License = _interopRequireDefault(__webpack_require__(/*! ../entities/License */ "./src/entities/License.js"));

var _default = function _default(item) {
  return new _License.default((0, _itemToObject.default)(item));
};

exports["default"] = _default;

/***/ }),

/***/ "./src/converters/itemToLicenseTemplate.js":
/*!*************************************************!*\
  !*** ./src/converters/itemToLicenseTemplate.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ./itemToObject */ "./src/converters/itemToObject.js"));

var _LicenseTemplate = _interopRequireDefault(__webpack_require__(/*! ../entities/LicenseTemplate */ "./src/entities/LicenseTemplate.js"));

var _default = function _default(item) {
  return new _LicenseTemplate.default((0, _itemToObject.default)(item));
};

exports["default"] = _default;

/***/ }),

/***/ "./src/converters/itemToLicensee.js":
/*!******************************************!*\
  !*** ./src/converters/itemToLicensee.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ./itemToObject */ "./src/converters/itemToObject.js"));

var _Licensee = _interopRequireDefault(__webpack_require__(/*! ../entities/Licensee */ "./src/entities/Licensee.js"));

var _default = function _default(item) {
  return new _Licensee.default((0, _itemToObject.default)(item));
};

exports["default"] = _default;

/***/ }),

/***/ "./src/converters/itemToObject.js":
/*!****************************************!*\
  !*** ./src/converters/itemToObject.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var itemToObject = function itemToObject(item) {
  var object = {};
  var property = item.property,
      list = item.list;

  if (property && Array.isArray(property)) {
    property.forEach(function (p) {
      var name = p.name,
          value = p.value;
      if (name) object[name] = value;
    });
  }

  if (list && Array.isArray(list)) {
    list.forEach(function (l) {
      var name = l.name;

      if (name) {
        object[name] = object[name] || [];
        object[name].push(itemToObject(l));
      }
    });
  }

  return object;
};

var _default = itemToObject;
exports["default"] = _default;

/***/ }),

/***/ "./src/converters/itemToPaymentMethod.js":
/*!***********************************************!*\
  !*** ./src/converters/itemToPaymentMethod.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ./itemToObject */ "./src/converters/itemToObject.js"));

var _PaymentMethod = _interopRequireDefault(__webpack_require__(/*! ../entities/PaymentMethod */ "./src/entities/PaymentMethod.js"));

var _default = function _default(item) {
  return new _PaymentMethod.default((0, _itemToObject.default)(item));
};

exports["default"] = _default;

/***/ }),

/***/ "./src/converters/itemToProduct.js":
/*!*****************************************!*\
  !*** ./src/converters/itemToProduct.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ./itemToObject */ "./src/converters/itemToObject.js"));

var _Product = _interopRequireDefault(__webpack_require__(/*! ../entities/Product */ "./src/entities/Product.js"));

var _default = function _default(item) {
  var object = (0, _itemToObject.default)(item);
  var discounts = object.discount;
  delete object.discount;
  var product = new _Product.default(object);
  product.setProductDiscounts(discounts);
  return product;
};

exports["default"] = _default;

/***/ }),

/***/ "./src/converters/itemToProductModule.js":
/*!***********************************************!*\
  !*** ./src/converters/itemToProductModule.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ./itemToObject */ "./src/converters/itemToObject.js"));

var _ProductModule = _interopRequireDefault(__webpack_require__(/*! ../entities/ProductModule */ "./src/entities/ProductModule.js"));

var _default = function _default(item) {
  return new _ProductModule.default((0, _itemToObject.default)(item));
};

exports["default"] = _default;

/***/ }),

/***/ "./src/converters/itemToToken.js":
/*!***************************************!*\
  !*** ./src/converters/itemToToken.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ./itemToObject */ "./src/converters/itemToObject.js"));

var _Token = _interopRequireDefault(__webpack_require__(/*! ../entities/Token */ "./src/entities/Token.js"));

var _default = function _default(item) {
  return new _Token.default((0, _itemToObject.default)(item));
};

exports["default"] = _default;

/***/ }),

/***/ "./src/converters/itemToTransaction.js":
/*!*********************************************!*\
  !*** ./src/converters/itemToTransaction.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ./itemToObject */ "./src/converters/itemToObject.js"));

var _Transaction = _interopRequireDefault(__webpack_require__(/*! ../entities/Transaction */ "./src/entities/Transaction.js"));

var _License = _interopRequireDefault(__webpack_require__(/*! ../entities/License */ "./src/entities/License.js"));

var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(/*! ../entities/LicenseTransactionJoin */ "./src/entities/LicenseTransactionJoin.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _default = function _default(item) {
  var object = (0, _itemToObject.default)(item);
  var licenseTransactionJoin = object.licenseTransactionJoin;
  delete object.licenseTransactionJoin;
  var transaction = new _Transaction.default(object);

  if (licenseTransactionJoin) {
    var joins = [];
    licenseTransactionJoin.forEach(function (v) {
      var join = new _LicenseTransactionJoin.default();
      join.setLicense(new _License.default({
        number: v[_Constants.default.License.LICENSE_NUMBER]
      }));
      join.setTransaction(new _Transaction.default({
        number: v[_Constants.default.Transaction.TRANSACTION_NUMBER]
      }));
      joins.push(join);
    });
    transaction.setLicenseTransactionJoins(joins);
  }

  return transaction;
};

exports["default"] = _default;

/***/ }),

/***/ "./src/entities/BaseEntity.js":
/*!************************************!*\
  !*** ./src/entities/BaseEntity.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

var _CastsUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CastsUtils */ "./src/util/CastsUtils.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * The entity properties.
 * @type {{}}
 * @private
 */
var propertiesMap = new WeakMap();
/**
 * List of properties that was defined
 * @type {{}}
 * @private
 */

var definedMap = new WeakMap();
/**
 * List of properties that need be casts
 * @type {{}}
 * @private
 */

var castsMap = new WeakMap();

var BaseEntity = /*#__PURE__*/function () {
  function BaseEntity(_ref) {
    var properties = _ref.properties,
        casts = _ref.casts;
    (0, _classCallCheck2.default)(this, BaseEntity);
    propertiesMap.set(this, {});
    definedMap.set(this, {});
    castsMap.set(this, casts || []);

    if (properties) {
      this.setProperties(properties);
    }
  }
  /**
   * Set a given property on the entity.
   * @param property
   * @param value
   * @returns {BaseEntity}
   */


  (0, _createClass2.default)(BaseEntity, [{
    key: "setProperty",
    value: function setProperty(property, value) {
      // if property name has bad native type
      if (!_CheckUtils.default.isValid(property) || (0, _typeof2.default)(property) === 'object') {
        throw new TypeError("Bad property name:".concat(property));
      }

      var castedValue = this.cast(property, value); // define to property

      this.define(property); // save property to propertiesMap

      var properties = propertiesMap.get(this);
      properties[property] = castedValue;
      return this;
    }
    /**
     * Alias for setProperty
     * @param property
     * @param value
     * @returns {BaseEntity}
     */

  }, {
    key: "addProperty",
    value: function addProperty(property, value) {
      return this.setProperty(property, value);
    }
    /**
     * Set the entity properties.
     * @param properties
     * @returns {BaseEntity}
     */

  }, {
    key: "setProperties",
    value: function setProperties(properties) {
      var _this = this;

      this.removeProperties();
      var has = Object.prototype.hasOwnProperty;
      Object.keys(properties).forEach(function (key) {
        if (has.call(properties, key)) {
          _this.setProperty(key, properties[key]);
        }
      });
      return this;
    }
    /**
     * Check if we has property
     * @param property
     * @protected
     */

  }, {
    key: "hasProperty",
    value: function hasProperty(property) {
      return Object.prototype.hasOwnProperty.call(propertiesMap.get(this), property);
    }
    /**
     * Get an property from the entity.
     * @param property
     * @param def
     * @returns {*}
     */

  }, {
    key: "getProperty",
    value: function getProperty(property, def) {
      return Object.prototype.hasOwnProperty.call(propertiesMap.get(this), property) ? propertiesMap.get(this)[property] : def;
    }
    /**
     * Get all of the current properties on the entity.
     */

  }, {
    key: "getProperties",
    value: function getProperties() {
      return _objectSpread({}, propertiesMap.get(this));
    }
    /**
     * Remove property
     * @param property
     * @returns {BaseEntity}
     */

  }, {
    key: "removeProperty",
    value: function removeProperty(property) {
      var properties = propertiesMap.get(this);
      delete properties[property];
      this.removeDefine(property);
      return this;
    }
    /**
     * Remove properties
     * @param properties
     */

  }, {
    key: "removeProperties",
    value: function removeProperties(properties) {
      var _this2 = this;

      var propertiesForRemove = properties || Object.keys(propertiesMap.get(this));
      propertiesForRemove.forEach(function (property) {
        _this2.removeProperty(property);
      });
    }
  }, {
    key: "cast",
    value: function cast(property, value) {
      if (!castsMap.get(this)[property]) return value;
      return (0, _CastsUtils.default)(castsMap.get(this)[property], value);
    }
    /**
     * Check if property has defined
     * @param property
     * @protected
     */

  }, {
    key: "hasDefine",
    value: function hasDefine(property) {
      return Boolean(definedMap.get(this)[property]);
    }
    /**
     * Define property getter and setter
     * @param property
     * @protected
     */

  }, {
    key: "define",
    value: function define(property) {
      if (this.hasDefine(property)) return;

      if (!_CheckUtils.default.isValid(property) || (0, _typeof2.default)(property) === 'object') {
        throw new TypeError("Bad property name:".concat(property));
      }

      var self = this; // delete property

      delete this[property];
      var descriptors = {
        enumerable: true,
        configurable: true,
        get: function get() {
          return self.getProperty(property);
        },
        set: function set(value) {
          self.setProperty(property, value);
        }
      };
      var defined = definedMap.get(this);
      defined[property] = true;
      Object.defineProperty(this, property, descriptors);
    }
    /**
     * Remove property getter and setter
     * @param property
     * @protected
     */

  }, {
    key: "removeDefine",
    value: function removeDefine(property) {
      if (!this.hasDefine(property)) return;
      var defined = definedMap.get(this);
      delete defined[property];
      delete this[property];
    }
    /**
     * Get properties map
     */

  }, {
    key: "asPropertiesMap",
    value: function asPropertiesMap() {
      var _this3 = this;

      var properties = this.getProperties();
      var customProperties = {};
      var has = Object.prototype.hasOwnProperty;
      Object.keys(this).forEach(function (key) {
        if (!has.call(_this3, key)) return;
        customProperties[key] = _this3[key];
      });
      return _objectSpread(_objectSpread({}, customProperties), properties);
    }
  }]);
  return BaseEntity;
}();

exports["default"] = BaseEntity;

/***/ }),

/***/ "./src/entities/Country.js":
/*!*********************************!*\
  !*** ./src/entities/Country.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Country entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * @property code - Unique code of country.
 *
 * @property name - Unique name of country
 *
 * @property vatPercent - Country vat.
 *
 * @property isEu - is country in EU.
 */
var Country = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Country, _BaseEntity);

  var _super = _createSuper(Country);

  function Country(properties) {
    (0, _classCallCheck2.default)(this, Country);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        code: 'string',
        name: 'string',
        vatPercent: 'int',
        isEu: 'boolean'
      }
    });
  }

  (0, _createClass2.default)(Country, [{
    key: "setCode",
    value: function setCode(code) {
      return this.setProperty('code', code);
    }
  }, {
    key: "getCode",
    value: function getCode(def) {
      return this.getProperty('code', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setVatPercent",
    value: function setVatPercent(vat) {
      return this.setProperty('vatPercent', vat);
    }
  }, {
    key: "getVatPercent",
    value: function getVatPercent(def) {
      return this.getProperty('vatPercent', def);
    }
  }, {
    key: "setIsEu",
    value: function setIsEu(isEu) {
      return this.setProperty('isEu', isEu);
    }
  }, {
    key: "getIsEu",
    value: function getIsEu(def) {
      return this.getProperty('isEu', def);
    }
  }]);
  return Country;
}(_BaseEntity2.default);

exports["default"] = Country;

/***/ }),

/***/ "./src/entities/License.js":
/*!*********************************!*\
  !*** ./src/entities/License.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * License entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can
 * assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation
 * transaction status is set to closed.
 * @property string number
 *
 * Name for the licensed item. Set from license template on creation, if not specified explicitly.
 * @property string name
 *
 * If set to false, the license is disabled. License can be re-enabled, but as long as it is disabled,
 * the license is excluded from the validation process.
 * @property boolean active
 *
 * price for the license. If >0, it must always be accompanied by the currency specification. Read-only,
 * set from license template on creation.
 * @property float price
 *
 * specifies currency for the license price. Check data types to discover which currencies are
 * supported. Read-only, set from license template on creation.
 * @property string currency
 *
 * If set to true, this license is not shown in NetLicensing Shop as purchased license. Set from license
 * template on creation, if not specified explicitly.
 * @property boolean $hidden
 *
 * @property string startDate
 *
 * Arbitrary additional user properties of string type may be associated with each license. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, licenseeNumber,
 * licenseTemplateNumber.
 */
var License = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(License, _BaseEntity);

  var _super = _createSuper(License);

  function License(properties) {
    (0, _classCallCheck2.default)(this, License);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string',
        price: 'float',
        hidden: 'boolean',
        parentfeature: 'string',
        timeVolume: 'int',
        startDate: 'date',
        inUse: 'boolean'
      }
    });
  }

  (0, _createClass2.default)(License, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setHidden",
    value: function setHidden(hidden) {
      return this.setProperty('hidden', hidden);
    }
  }, {
    key: "getHidden",
    value: function getHidden(def) {
      return this.getProperty('hidden', def);
    }
  }, {
    key: "setParentfeature",
    value: function setParentfeature(parentfeature) {
      return this.setProperty('parentfeature', parentfeature);
    }
  }, {
    key: "getParentfeature",
    value: function getParentfeature(def) {
      return this.getProperty('parentfeature', def);
    }
  }, {
    key: "setTimeVolume",
    value: function setTimeVolume(timeVolume) {
      return this.setProperty('timeVolume', timeVolume);
    }
  }, {
    key: "getTimeVolume",
    value: function getTimeVolume(def) {
      return this.getProperty('timeVolume', def);
    }
  }, {
    key: "setStartDate",
    value: function setStartDate(startDate) {
      return this.setProperty('startDate', startDate);
    }
  }, {
    key: "getStartDate",
    value: function getStartDate(def) {
      return this.getProperty('startDate', def);
    }
  }, {
    key: "getInUse",
    value: function getInUse(def) {
      return this.getProperty('inUse', def);
    }
  }, {
    key: "getPrice",
    value: function getPrice(def) {
      return this.getProperty('price', def);
    }
  }, {
    key: "getCurrency",
    value: function getCurrency(def) {
      return this.getProperty('currency', def);
    }
  }]);
  return License;
}(_BaseEntity2.default);

exports["default"] = License;

/***/ }),

/***/ "./src/entities/LicenseTemplate.js":
/*!*****************************************!*\
  !*** ./src/entities/LicenseTemplate.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * License template entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the license template. Vendor can
 * assign this number when creating a license template or let NetLicensing  generate one.
 * Read-only after creation of the first license from this license template.
 * @property string number
 *
 * If set to false, the license template is disabled. Licensee can not obtain any new licenses off this
 * license template.
 * @property boolean active
 *
 * Name for the licensed item.
 * @property string name
 *
 * Type of licenses created from this license template. Supported types: "FEATURE", "TIMEVOLUME",
 * "FLOATING", "QUANTITY"
 * @property string licenseType
 *
 * Price for the license. If >0, it must always be accompanied by the currency specification.
 * @property double price
 *
 * Specifies currency for the license price. Check data types to discover which currencies are
 * supported.
 * @property string currency
 *
 * If set to true, every new licensee automatically gets one license out of this license template on
 * creation. Automatic licenses must have their price set to 0.
 * @property boolean automatic
 *
 * If set to true, this license template is not shown in NetLicensing  Shop as offered for purchase.
 * @property boolean hidden
 *
 * If set to true, licenses from this license template are not visible to the end customer, but
 * participate in validation.
 * @property boolean hideLicenses
 *
 * If set to true, this license template defines grace period of validity granted after subscription expiration.
 * @property boolean gracePeriod
 *
 * Mandatory for 'TIMEVOLUME' license type.
 * @property integer timeVolume
 *
 * Time volume period for 'TIMEVOLUME' license type. Supported types: "DAY", "WEEK", "MONTH", "YEAR"
 * @property integer timeVolumePeriod
 *
 * Mandatory for 'FLOATING' license type.
 * @property integer maxSessions
 *
 * Mandatory for 'QUANTITY' license type.
 * @property integer quantity
 *
 * @constructor
 */
var LicenseTemplate = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(LicenseTemplate, _BaseEntity);

  var _super = _createSuper(LicenseTemplate);

  function LicenseTemplate(properties) {
    (0, _classCallCheck2.default)(this, LicenseTemplate);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string',
        licenseType: 'string',
        price: 'double',
        currency: 'string',
        automatic: 'boolean',
        hidden: 'boolean',
        hideLicenses: 'boolean',
        gracePeriod: 'boolean',
        timeVolume: 'int',
        timeVolumePeriod: 'string',
        maxSessions: 'int',
        quantity: 'int',
        inUse: 'boolean'
      }
    });
  }

  (0, _createClass2.default)(LicenseTemplate, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setLicenseType",
    value: function setLicenseType(licenseType) {
      return this.setProperty('licenseType', licenseType);
    }
  }, {
    key: "getLicenseType",
    value: function getLicenseType(def) {
      return this.getProperty('licenseType', def);
    }
  }, {
    key: "setPrice",
    value: function setPrice(price) {
      return this.setProperty('price', price);
    }
  }, {
    key: "getPrice",
    value: function getPrice(def) {
      return this.getProperty('price', def);
    }
  }, {
    key: "setCurrency",
    value: function setCurrency(currency) {
      return this.setProperty('currency', currency);
    }
  }, {
    key: "getCurrency",
    value: function getCurrency(def) {
      return this.getProperty('currency', def);
    }
  }, {
    key: "setAutomatic",
    value: function setAutomatic(automatic) {
      return this.setProperty('automatic', automatic);
    }
  }, {
    key: "getAutomatic",
    value: function getAutomatic(def) {
      return this.getProperty('automatic', def);
    }
  }, {
    key: "setHidden",
    value: function setHidden(hidden) {
      return this.setProperty('hidden', hidden);
    }
  }, {
    key: "getHidden",
    value: function getHidden(def) {
      return this.getProperty('hidden', def);
    }
  }, {
    key: "setHideLicenses",
    value: function setHideLicenses(hideLicenses) {
      return this.setProperty('hideLicenses', hideLicenses);
    }
  }, {
    key: "getHideLicenses",
    value: function getHideLicenses(def) {
      return this.getProperty('hideLicenses', def);
    }
  }, {
    key: "setTimeVolume",
    value: function setTimeVolume(timeVolume) {
      return this.setProperty('timeVolume', timeVolume);
    }
  }, {
    key: "getTimeVolume",
    value: function getTimeVolume(def) {
      return this.getProperty('timeVolume', def);
    }
  }, {
    key: "setTimeVolumePeriod",
    value: function setTimeVolumePeriod(timeVolumePeriod) {
      return this.setProperty('timeVolumePeriod', timeVolumePeriod);
    }
  }, {
    key: "getTimeVolumePeriod",
    value: function getTimeVolumePeriod(def) {
      return this.getProperty('timeVolumePeriod', def);
    }
  }, {
    key: "setMaxSessions",
    value: function setMaxSessions(maxSessions) {
      return this.setProperty('maxSessions', maxSessions);
    }
  }, {
    key: "getMaxSessions",
    value: function getMaxSessions(def) {
      return this.getProperty('maxSessions', def);
    }
  }, {
    key: "setQuantity",
    value: function setQuantity(quantity) {
      return this.setProperty('quantity', quantity);
    }
  }, {
    key: "getQuantity",
    value: function getQuantity(def) {
      return this.getProperty('quantity', def);
    }
  }, {
    key: "getInUse",
    value: function getInUse(def) {
      return this.getProperty('inUse', def);
    }
  }]);
  return LicenseTemplate;
}(_BaseEntity2.default);

exports["default"] = LicenseTemplate;

/***/ }),

/***/ "./src/entities/LicenseTransactionJoin.js":
/*!************************************************!*\
  !*** ./src/entities/LicenseTransactionJoin.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var LicenseTransactionJoin = /*#__PURE__*/function () {
  function LicenseTransactionJoin(transaction, license) {
    (0, _classCallCheck2.default)(this, LicenseTransactionJoin);
    this.transaction = transaction;
    this.license = license;
  }

  (0, _createClass2.default)(LicenseTransactionJoin, [{
    key: "setTransaction",
    value: function setTransaction(transaction) {
      this.transaction = transaction;
      return this;
    }
  }, {
    key: "getTransaction",
    value: function getTransaction(def) {
      return this.transaction || def;
    }
  }, {
    key: "setLicense",
    value: function setLicense(license) {
      this.license = license;
      return this;
    }
  }, {
    key: "getLicense",
    value: function getLicense(def) {
      return this.license || def;
    }
  }]);
  return LicenseTransactionJoin;
}();

exports["default"] = LicenseTransactionJoin;

/***/ }),

/***/ "./src/entities/Licensee.js":
/*!**********************************!*\
  !*** ./src/entities/Licensee.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Licensee entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this
 * number when creating a licensee or let NetLicensing  generate one. Read-only after creation of the first license for
 * the licensee.
 * @property string number
 *
 * Licensee name.
 * @property string name
 *
 * If set to false, the licensee is disabled. Licensee can not obtain new licenses, and validation is
 * disabled (tbd).
 * @property boolean active
 *
 * Licensee Secret for licensee
 * @property string licenseeSecret
 *
 * Mark licensee for transfer.
 * @property boolean markedForTransfer
 *
 * Arbitrary additional user properties of string type may be associated with each licensee. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, productNumber
 *
 * @constructor
 */
var Licensee = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Licensee, _BaseEntity);

  var _super = _createSuper(Licensee);

  function Licensee(properties) {
    (0, _classCallCheck2.default)(this, Licensee);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string',
        licenseeSecret: 'string',
        markedForTransfer: 'boolean',
        inUse: 'boolean'
      }
    });
  }

  (0, _createClass2.default)(Licensee, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setProductNumber",
    value: function setProductNumber(productNumber) {
      return this.setProperty('productNumber', productNumber);
    }
  }, {
    key: "getProductNumber",
    value: function getProductNumber(def) {
      return this.getProperty('productNumber', def);
    }
    /**
     * @deprecated
     */

  }, {
    key: "setLicenseeSecret",
    value: function setLicenseeSecret(licenseeSecret) {
      return this.setProperty('licenseeSecret', licenseeSecret);
    }
    /**
     * @deprecated
     */

  }, {
    key: "getLicenseeSecret",
    value: function getLicenseeSecret(def) {
      return this.getProperty('licenseeSecret', def);
    }
  }, {
    key: "setMarkedForTransfer",
    value: function setMarkedForTransfer(markedForTransfer) {
      return this.setProperty('markedForTransfer', markedForTransfer);
    }
  }, {
    key: "getMarkedForTransfer",
    value: function getMarkedForTransfer(def) {
      return this.getProperty('markedForTransfer', def);
    }
  }, {
    key: "getInUse",
    value: function getInUse(def) {
      return this.getProperty('inUse', def);
    }
  }]);
  return Licensee;
}(_BaseEntity2.default);

exports["default"] = Licensee;

/***/ }),

/***/ "./src/entities/PaymentMethod.js":
/*!***************************************!*\
  !*** ./src/entities/PaymentMethod.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */
var PaymentMethod = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(PaymentMethod, _BaseEntity);

  var _super = _createSuper(PaymentMethod);

  function PaymentMethod(properties) {
    (0, _classCallCheck2.default)(this, PaymentMethod);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        'paypal.subject': 'string'
      }
    });
  }

  (0, _createClass2.default)(PaymentMethod, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setPaypalSubject",
    value: function setPaypalSubject(paypalSubject) {
      return this.setProperty('paypal.subject', paypalSubject);
    }
  }, {
    key: "getPaypalSubject",
    value: function getPaypalSubject(def) {
      return this.getProperty('paypal.subject', def);
    }
  }]);
  return PaymentMethod;
}(_BaseEntity2.default);

exports["default"] = PaymentMethod;

/***/ }),

/***/ "./src/entities/Product.js":
/*!*********************************!*\
  !*** ./src/entities/Product.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js"));

var _ProductDiscount = _interopRequireDefault(__webpack_require__(/*! ./ProductDiscount */ "./src/entities/ProductDiscount.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * The discounts map
 * @type {{}}
 * @private
 */
var discountsMap = new WeakMap();
/**
 * An identifier that show if discounts was touched
 * @type {{}}
 * @private
 */

var discountsTouched = new WeakMap();
/**
 * NetLicensing  Product entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the product. Vendor can assign this number when creating a product or
 * let NetLicensing  generate one. Read-only after creation of the first licensee for the product.
 * @property string number
 *
 * If set to false, the product is disabled. No new licensees can be registered for the product,
 * existing licensees can not obtain new licenses.
 * @property boolean active
 *
 * Product name. Together with the version identifies the product for the end customer.
 * @property string name
 *
 * Product version. Convenience parameter, additional to the product name.
 * @property float version
 *
 * If set to 'true', non-existing licensees will be created at first validation attempt.
 * @property boolean licenseeAutoCreate
 *
 * Licensee secret mode for product.Supported types: "DISABLED", "PREDEFINED", "CLIENT"
 * @property boolean licenseeSecretMode
 *
 * Product description. Optional.
 * @property string description
 *
 * Licensing information. Optional.
 * @property string licensingInfo
 *
 * @property boolean inUse
 *
 * Arbitrary additional user properties of string type may be associated with each product. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 *
 * @constructor
 */

var Product = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Product, _BaseEntity);

  var _super = _createSuper(Product);

  function Product(properties) {
    var _this;

    (0, _classCallCheck2.default)(this, Product);
    _this = _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string',
        version: 'string',
        description: 'string',
        licensingInfo: 'string',
        licenseeAutoCreate: 'boolean',
        licenseeSecretMode: 'string',
        inUse: 'boolean'
      }
    });
    discountsMap.set((0, _assertThisInitialized2.default)(_this), []);
    discountsTouched.set((0, _assertThisInitialized2.default)(_this), false);
    return _this;
  }

  (0, _createClass2.default)(Product, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setVersion",
    value: function setVersion(version) {
      return this.setProperty('version', version);
    }
  }, {
    key: "getVersion",
    value: function getVersion(def) {
      return this.getProperty('version', def);
    }
  }, {
    key: "setLicenseeAutoCreate",
    value: function setLicenseeAutoCreate(licenseeAutoCreate) {
      return this.setProperty('licenseeAutoCreate', licenseeAutoCreate);
    }
  }, {
    key: "getLicenseeAutoCreate",
    value: function getLicenseeAutoCreate(def) {
      return this.getProperty('licenseeAutoCreate', def);
    }
    /**
     * @deprecated use ProductModule.setLicenseeSecretMode instead
     */

  }, {
    key: "setLicenseeSecretMode",
    value: function setLicenseeSecretMode(licenseeSecretMode) {
      return this.setProperty('licenseeSecretMode', licenseeSecretMode);
    }
    /**
     * @deprecated use ProductModule.getLicenseeSecretMode instead
     */

  }, {
    key: "getLicenseeSecretMode",
    value: function getLicenseeSecretMode(def) {
      return this.getProperty('licenseeSecretMode', def);
    }
  }, {
    key: "setDescription",
    value: function setDescription(description) {
      return this.setProperty('description', description);
    }
  }, {
    key: "getDescription",
    value: function getDescription(def) {
      return this.getProperty('description', def);
    }
  }, {
    key: "setLicensingInfo",
    value: function setLicensingInfo(licensingInfo) {
      return this.setProperty('licensingInfo', licensingInfo);
    }
  }, {
    key: "getLicensingInfo",
    value: function getLicensingInfo(def) {
      return this.getProperty('licensingInfo', def);
    }
  }, {
    key: "getInUse",
    value: function getInUse(def) {
      return this.getProperty('inUse', def);
    }
    /**
     * Add discount to product
     *
     * @param discount NetLicensing.ProductDiscount
     * @returns {NetLicensing.Product}
     */

  }, {
    key: "addDiscount",
    value: function addDiscount(discount) {
      var discounts = discountsMap.get(this);
      var productDiscount = discount;

      if (typeof productDiscount !== 'string' && !(productDiscount instanceof _ProductDiscount.default)) {
        productDiscount = new _ProductDiscount.default(productDiscount);
      }

      discounts.push(productDiscount);
      discountsMap.set(this, discounts);
      discountsTouched.set(this, true);
      return this;
    }
    /**
     * Set discounts to product
     * @param discounts
     */

  }, {
    key: "setProductDiscounts",
    value: function setProductDiscounts(discounts) {
      var _this2 = this;

      discountsMap.set(this, []);
      discountsTouched.set(this, true);
      if (!discounts) return this;

      if (Array.isArray(discounts)) {
        discounts.forEach(function (discount) {
          _this2.addDiscount(discount);
        });
        return this;
      }

      this.addDiscount(discounts);
      return this;
    }
    /**
     * Get array of objects discounts
     * @returns {Array}
     */

  }, {
    key: "getProductDiscounts",
    value: function getProductDiscounts() {
      return Object.assign([], discountsMap.get(this));
    }
  }, {
    key: "asPropertiesMap",
    value: function asPropertiesMap() {
      var propertiesMap = (0, _get2.default)((0, _getPrototypeOf2.default)(Product.prototype), "asPropertiesMap", this).call(this);

      if (discountsMap.get(this).length) {
        propertiesMap.discount = discountsMap.get(this).map(function (discount) {
          return discount.toString();
        });
      }

      if (!propertiesMap.discount && discountsTouched.get(this)) {
        propertiesMap.discount = '';
      }

      return propertiesMap;
    }
  }]);
  return Product;
}(_BaseEntity2.default);

exports["default"] = Product;

/***/ }),

/***/ "./src/entities/ProductDiscount.js":
/*!*****************************************!*\
  !*** ./src/entities/ProductDiscount.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProductDiscount = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(ProductDiscount, _BaseEntity);

  var _super = _createSuper(ProductDiscount);

  function ProductDiscount(properties) {
    (0, _classCallCheck2.default)(this, ProductDiscount);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        totalPrice: 'float',
        currency: 'string',
        amountFix: 'float',
        amountPercent: 'int'
      }
    });
  }

  (0, _createClass2.default)(ProductDiscount, [{
    key: "setTotalPrice",
    value: function setTotalPrice(totalPrice) {
      return this.setProperty('totalPrice', totalPrice);
    }
  }, {
    key: "getTotalPrice",
    value: function getTotalPrice(def) {
      return this.getProperty('totalPrice', def);
    }
  }, {
    key: "setCurrency",
    value: function setCurrency(currency) {
      return this.setProperty('currency', currency);
    }
  }, {
    key: "getCurrency",
    value: function getCurrency(def) {
      return this.getProperty('currency', def);
    }
  }, {
    key: "setAmountFix",
    value: function setAmountFix(amountFix) {
      return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
    }
  }, {
    key: "getAmountFix",
    value: function getAmountFix(def) {
      return this.getProperty('amountFix', def);
    }
  }, {
    key: "setAmountPercent",
    value: function setAmountPercent(amountPercent) {
      return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
    }
  }, {
    key: "getAmountPercent",
    value: function getAmountPercent(def) {
      return this.getProperty('amountPercent', def);
    }
  }, {
    key: "toString",
    value: function toString() {
      var totalPrice = this.getTotalPrice();
      var currency = this.getCurrency();
      var amount = 0;
      if (this.getAmountFix(null)) amount = this.getAmountFix();
      if (this.getAmountPercent(null)) amount = "".concat(this.getAmountPercent(), "%");
      return "".concat(totalPrice, ";").concat(currency, ";").concat(amount);
    }
  }]);
  return ProductDiscount;
}(_BaseEntity2.default);

exports["default"] = ProductDiscount;

/***/ }),

/***/ "./src/entities/ProductModule.js":
/*!***************************************!*\
  !*** ./src/entities/ProductModule.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Product module entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the product module. Vendor can assign
 * this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first
 * licensee for the product.
 * @property string number
 *
 * If set to false, the product module is disabled. Licensees can not obtain any new licenses for this
 * product module.
 * @property boolean active
 *
 * Product module name that is visible to the end customers in NetLicensing Shop.
 * @property string name
 *
 * Licensing model applied to this product module. Defines what license templates can be
 * configured for the product module and how licenses for this product module are processed during validation.
 * @property string licensingModel
 *
 * Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
 * @property integer maxCheckoutValidity
 *
 * Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.
 * @property integer yellowThreshold
 *
 * Remaining time volume for red level. Mandatory for 'Rental' licensing model.
 * @property integer redThreshold
 *
 * License template. Mandatory for 'Try & Buy' licensing model. Supported types: "TIMEVOLUME", "FEATURE".
 * @property string licenseTemplate
 *
 * Licensee secret mode for product.Supported types: "PREDEFINED", "CLIENT"
 * @property boolean licenseeSecretMode
 *
 * @constructor
 */
var ProductModule = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(ProductModule, _BaseEntity);

  var _super = _createSuper(ProductModule);

  function ProductModule(properties) {
    (0, _classCallCheck2.default)(this, ProductModule);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string',
        licensingModel: 'string',
        maxCheckoutValidity: 'int',
        yellowThreshold: 'int',
        redThreshold: 'int',
        licenseTemplate: 'string',
        inUse: 'boolean',
        licenseeSecretMode: 'string'
      }
    });
  }

  (0, _createClass2.default)(ProductModule, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setLicensingModel",
    value: function setLicensingModel(licensingModel) {
      return this.setProperty('licensingModel', licensingModel);
    }
  }, {
    key: "getLicensingModel",
    value: function getLicensingModel(def) {
      return this.getProperty('licensingModel', def);
    }
  }, {
    key: "setMaxCheckoutValidity",
    value: function setMaxCheckoutValidity(maxCheckoutValidity) {
      return this.setProperty('maxCheckoutValidity', maxCheckoutValidity);
    }
  }, {
    key: "getMaxCheckoutValidity",
    value: function getMaxCheckoutValidity(def) {
      return this.getProperty('maxCheckoutValidity', def);
    }
  }, {
    key: "setYellowThreshold",
    value: function setYellowThreshold(yellowThreshold) {
      return this.setProperty('yellowThreshold', yellowThreshold);
    }
  }, {
    key: "getYellowThreshold",
    value: function getYellowThreshold(def) {
      return this.getProperty('yellowThreshold', def);
    }
  }, {
    key: "setRedThreshold",
    value: function setRedThreshold(redThreshold) {
      return this.setProperty('redThreshold', redThreshold);
    }
  }, {
    key: "getRedThreshold",
    value: function getRedThreshold(def) {
      return this.getProperty('redThreshold', def);
    }
  }, {
    key: "setLicenseTemplate",
    value: function setLicenseTemplate(licenseTemplate) {
      return this.setProperty('licenseTemplate', licenseTemplate);
    }
  }, {
    key: "getLicenseTemplate",
    value: function getLicenseTemplate(def) {
      return this.getProperty('licenseTemplate', def);
    }
  }, {
    key: "getInUse",
    value: function getInUse(def) {
      return this.getProperty('inUse', def);
    }
  }, {
    key: "setLicenseeSecretMode",
    value: function setLicenseeSecretMode(licenseeSecretMode) {
      return this.setProperty('licenseeSecretMode', licenseeSecretMode);
    }
  }, {
    key: "getLicenseeSecretMode",
    value: function getLicenseeSecretMode(def) {
      return this.getProperty('licenseeSecretMode', def);
    }
  }]);
  return ProductModule;
}(_BaseEntity2.default);

exports["default"] = ProductModule;

/***/ }),

/***/ "./src/entities/Token.js":
/*!*******************************!*\
  !*** ./src/entities/Token.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Product module entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number
 * @property string number
 *
 * If set to false, the token is disabled.
 * @property boolean active
 *
 * Expiration Time
 * @property string expirationTime
 *
 * @property string vendorNumber
 *
 * Token type to be generated.
 * DEFAULT - default one-time token (will be expired after first request)
 * SHOP - shop token is used to redirect customer to the netlicensingShop(licenseeNumber is mandatory)
 * APIKEY - APIKey-token
 * @property string tokenType
 *
 * @property string licenseeNumber
 *
 * @constructor
 */
var Token = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Token, _BaseEntity);

  var _super = _createSuper(Token);

  function Token(properties) {
    (0, _classCallCheck2.default)(this, Token);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        expirationTime: 'date',
        vendorNumber: 'string',
        tokenType: 'string',
        licenseeNumber: 'string',
        successURL: 'string',
        successURLTitle: 'string',
        cancelURL: 'string',
        cancelURLTitle: 'string',
        shopURL: 'string'
      }
    });
  }

  (0, _createClass2.default)(Token, [{
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setExpirationTime",
    value: function setExpirationTime(expirationTime) {
      return this.setProperty('expirationTime', expirationTime);
    }
  }, {
    key: "getExpirationTime",
    value: function getExpirationTime(def) {
      return this.getProperty('expirationTime', def);
    }
  }, {
    key: "setVendorNumber",
    value: function setVendorNumber(vendorNumber) {
      return this.setProperty('vendorNumber', vendorNumber);
    }
  }, {
    key: "getVendorNumber",
    value: function getVendorNumber(def) {
      return this.getProperty('vendorNumber', def);
    }
  }, {
    key: "setTokenType",
    value: function setTokenType(tokenType) {
      return this.setProperty('tokenType', tokenType);
    }
  }, {
    key: "getTokenType",
    value: function getTokenType(def) {
      return this.getProperty('tokenType', def);
    }
  }, {
    key: "setLicenseeNumber",
    value: function setLicenseeNumber(licenseeNumber) {
      return this.setProperty('licenseeNumber', licenseeNumber);
    }
  }, {
    key: "getLicenseeNumber",
    value: function getLicenseeNumber(def) {
      return this.getProperty('licenseeNumber', def);
    }
  }, {
    key: "setSuccessURL",
    value: function setSuccessURL(successURL) {
      return this.setProperty('successURL', successURL);
    }
  }, {
    key: "getSuccessURL",
    value: function getSuccessURL(def) {
      return this.getProperty('successURL', def);
    }
  }, {
    key: "setSuccessURLTitle",
    value: function setSuccessURLTitle(successURLTitle) {
      return this.setProperty('successURLTitle', successURLTitle);
    }
  }, {
    key: "getSuccessURLTitle",
    value: function getSuccessURLTitle(def) {
      return this.getProperty('successURLTitle', def);
    }
  }, {
    key: "setCancelURL",
    value: function setCancelURL(cancelURL) {
      return this.setProperty('cancelURL', cancelURL);
    }
  }, {
    key: "getCancelURL",
    value: function getCancelURL(def) {
      return this.getProperty('cancelURL', def);
    }
  }, {
    key: "setCancelURLTitle",
    value: function setCancelURLTitle(cancelURLTitle) {
      return this.setProperty('cancelURLTitle', cancelURLTitle);
    }
  }, {
    key: "getCancelURLTitle",
    value: function getCancelURLTitle(def) {
      return this.getProperty('cancelURLTitle', def);
    }
  }, {
    key: "getShopURL",
    value: function getShopURL(def) {
      return this.getProperty('shopURL', def);
    }
    /**
     * @deprecated
     * @alias setApiKeyRole
     * @param role
     * @returns {*}
     */

  }, {
    key: "setRole",
    value: function setRole(role) {
      return this.setApiKeyRole(role);
    }
    /**
     * @deprecated
     * @alias getApiKeyRole
     * @param def
     * @returns {*}
     */

  }, {
    key: "getRole",
    value: function getRole(def) {
      return this.getApiKeyRole(def);
    }
  }, {
    key: "setApiKeyRole",
    value: function setApiKeyRole(apiKeyRole) {
      return this.setProperty('apiKeyRole', apiKeyRole);
    }
  }, {
    key: "getApiKeyRole",
    value: function getApiKeyRole(def) {
      return this.getProperty('apiKeyRole', def);
    }
  }]);
  return Token;
}(_BaseEntity2.default);

exports["default"] = Token;

/***/ }),

/***/ "./src/entities/Transaction.js":
/*!*************************************!*\
  !*** ./src/entities/Transaction.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js"));

var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(/*! ./LicenseTransactionJoin */ "./src/entities/LicenseTransactionJoin.js"));

var _License = _interopRequireDefault(__webpack_require__(/*! ./License */ "./src/entities/License.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Transaction entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the transaction. This number is
 * always generated by NetLicensing.
 * @property string number
 *
 * always true for transactions
 * @property boolean active
 *
 * Status of transaction. "CANCELLED", "CLOSED", "PENDING".
 * @property string status
 *
 * "SHOP". AUTO transaction for internal use only.
 * @property string source
 *
 * grand total for SHOP transaction (see source).
 * @property float grandTotal
 *
 * discount for SHOP transaction (see source).
 * @property float discount
 *
 * specifies currency for money fields (grandTotal and discount). Check data types to discover which
 * @property string currency
 *
 * Date created. Optional.
 * @property string dateCreated
 *
 * Date closed. Optional.
 * @property string dateClosed
 *
 * @constructor
 */
var Transaction = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Transaction, _BaseEntity);

  var _super = _createSuper(Transaction);

  function Transaction(properties) {
    (0, _classCallCheck2.default)(this, Transaction);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        name: 'string',
        status: 'string',
        source: 'string',
        grandTotal: 'float',
        discount: 'float',
        currency: 'string',
        dateCreated: 'date',
        dateClosed: 'date',
        active: 'boolean',
        paymentMethod: 'string'
      }
    });
  }

  (0, _createClass2.default)(Transaction, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setStatus",
    value: function setStatus(status) {
      return this.setProperty('status', status);
    }
  }, {
    key: "getStatus",
    value: function getStatus(def) {
      return this.getProperty('status', def);
    }
  }, {
    key: "setSource",
    value: function setSource(source) {
      return this.setProperty('source', source);
    }
  }, {
    key: "getSource",
    value: function getSource(def) {
      return this.getProperty('source', def);
    }
  }, {
    key: "setGrandTotal",
    value: function setGrandTotal(grandTotal) {
      return this.setProperty('grandTotal', grandTotal);
    }
  }, {
    key: "getGrandTotal",
    value: function getGrandTotal(def) {
      return this.getProperty('grandTotal', def);
    }
  }, {
    key: "setDiscount",
    value: function setDiscount(discount) {
      return this.setProperty('discount', discount);
    }
  }, {
    key: "getDiscount",
    value: function getDiscount(def) {
      return this.getProperty('discount', def);
    }
  }, {
    key: "setCurrency",
    value: function setCurrency(currency) {
      return this.setProperty('currency', currency);
    }
  }, {
    key: "getCurrency",
    value: function getCurrency(def) {
      return this.getProperty('currency', def);
    }
  }, {
    key: "setDateCreated",
    value: function setDateCreated(dateCreated) {
      return this.setProperty('dateCreated', dateCreated);
    }
  }, {
    key: "getDateCreated",
    value: function getDateCreated(def) {
      return this.getProperty('dateCreated', def);
    }
  }, {
    key: "setDateClosed",
    value: function setDateClosed(dateClosed) {
      return this.setProperty('dateClosed', dateClosed);
    }
  }, {
    key: "getDateClosed",
    value: function getDateClosed(def) {
      return this.getProperty('dateClosed', def);
    }
  }, {
    key: "setPaymentMethod",
    value: function setPaymentMethod(paymentMethod) {
      return this.setProperty('paymentMethod', paymentMethod);
    }
  }, {
    key: "getPaymentMethod",
    value: function getPaymentMethod(def) {
      return this.getProperty('paymentMethod', def);
    }
  }, {
    key: "setActive",
    value: function setActive() {
      return this.setProperty('active', true);
    }
  }, {
    key: "getLicenseTransactionJoins",
    value: function getLicenseTransactionJoins(def) {
      return this.getProperty('licenseTransactionJoins', def);
    }
  }, {
    key: "setLicenseTransactionJoins",
    value: function setLicenseTransactionJoins(licenseTransactionJoins) {
      return this.setProperty('licenseTransactionJoins', licenseTransactionJoins);
    }
  }, {
    key: "setListLicenseTransactionJoin",
    value: function setListLicenseTransactionJoin(properties) {
      if (!properties) return;
      var licenseTransactionJoins = this.getProperty('licenseTransactionJoins', []);
      var licenseTransactionJoin = new _LicenseTransactionJoin.default();
      properties.forEach(function (property) {
        if (property.name === 'licenseNumber') {
          licenseTransactionJoin.setLicense(new _License.default({
            number: property.value
          }));
        }

        if (property.name === 'transactionNumber') {
          licenseTransactionJoin.setTransaction(new Transaction({
            number: property.value
          }));
        }
      });
      licenseTransactionJoins.push(licenseTransactionJoin);
      this.setProperty('licenseTransactionJoins', licenseTransactionJoins);
    }
  }]);
  return Transaction;
}(_BaseEntity2.default);

exports["default"] = Transaction;

/***/ }),

/***/ "./src/errors/NlicError.js":
/*!*********************************!*\
  !*** ./src/errors/NlicError.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NlicError = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(NlicError, _Error);

  var _super = _createSuper(NlicError);

  function NlicError() {
    var _this;

    (0, _classCallCheck2.default)(this, NlicError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.config = {};
    _this.response = {};
    _this.request = {};
    _this.code = '';
    _this.isNlicError = true;
    _this.isAxiosError = true;
    return _this;
  }

  (0, _createClass2.default)(NlicError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    }
  }]);
  return NlicError;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));

exports["default"] = NlicError;

/***/ }),

/***/ "./src/services/LicenseService.js":
/*!****************************************!*\
  !*** ./src/services/LicenseService.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _Service = _interopRequireDefault(__webpack_require__(/*! ./Service */ "./src/services/Service.js"));

var _FilterUtils = _interopRequireDefault(__webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js"));

var _itemToLicense = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToLicense */ "./src/converters/itemToLicense.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ../vo/Page */ "./src/vo/Page.js"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/license-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new license object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#create-license
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent licensee to which the new license is to be added
   * @param licenseeNumber string
   *
   *  license template that the license is created from
   * @param licenseTemplateNumber string
   *
   * For privileged logins specifies transaction for the license creation. For regular logins new
   * transaction always created implicitly, and the operation will be in a separate transaction.
   * Transaction is generated with the provided transactionNumber, or, if transactionNumber is null, with
   * auto-generated number.
   * @param transactionNumber null|string
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param license NetLicensing.License
   *
   * return the newly created license object in promise
   * @returns {Promise}
   */
  create: function create(context, licenseeNumber, licenseTemplateNumber, transactionNumber, license) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(licenseeNumber, _Constants.default.Licensee.LICENSEE_NUMBER);

              _CheckUtils.default.paramNotEmpty(licenseTemplateNumber, _Constants.default.LicenseTemplate.LICENSE_TEMPLATE_NUMBER);

              license.setProperty(_Constants.default.Licensee.LICENSEE_NUMBER, licenseeNumber);
              license.setProperty(_Constants.default.LicenseTemplate.LICENSE_TEMPLATE_NUMBER, licenseTemplateNumber);
              if (transactionNumber) license.setProperty(_Constants.default.Transaction.TRANSACTION_NUMBER, transactionNumber);
              _context.next = 7;
              return _Service.default.post(context, _Constants.default.License.ENDPOINT_PATH, license.asPropertiesMap());

            case 7:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'License';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToLicense.default)(item));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Gets license by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#get-license
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the license number
   * @param number string
   *
   * return the license in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.License.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'License';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToLicense.default)(item));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   * Returns licenses of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#licenses-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * return array of licenses (of all products) or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};

              if (!filter) {
                _context3.next = 5;
                break;
              }

              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }

              throw new TypeError("filter has bad value ".concat(filter));

            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);

            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.License.ENDPOINT_PATH, queryParams);

            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'License';
              }).map(function (v) {
                return (0, _itemToLicense.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },

  /**
   * Updates license properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#update-license
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license number
   * @param number string
   *
   * transaction for the license update. Created implicitly if transactionNumber is null. In this case the
   * operation will be in a separate transaction.
   * @param transactionNumber string|null
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param license NetLicensing.License
   *
   * return updated license in promise.
   * @returns {Promise}
   */
  update: function update(context, number, transactionNumber, license) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              if (transactionNumber) license.setProperty(_Constants.default.Transaction.TRANSACTION_NUMBER, transactionNumber);
              _context4.next = 4;
              return _Service.default.post(context, "".concat(_Constants.default.License.ENDPOINT_PATH, "/").concat(number), license.asPropertiesMap());

            case 4:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'License';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToLicense.default)(item));

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },

  /**
   * Deletes license.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#delete-license
   *
   * When any license is deleted, corresponding transaction is created automatically.
   *
   *  determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.License.ENDPOINT_PATH, "/").concat(number), queryParams);
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/services/LicenseTemplateService.js":
/*!************************************************!*\
  !*** ./src/services/LicenseTemplateService.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _Service = _interopRequireDefault(__webpack_require__(/*! ./Service */ "./src/services/Service.js"));

var _FilterUtils = _interopRequireDefault(__webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js"));

var _itemToLicenseTemplate = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToLicenseTemplate */ "./src/converters/itemToLicenseTemplate.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ../vo/Page */ "./src/vo/Page.js"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/license-template-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new license template object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#create-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent product module to which the new license template is to be added
   * @param productModuleNumber
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param licenseTemplate NetLicensing.LicenseTemplate
   *
   * the newly created license template object in promise
   * @returns {Promise}
   */
  create: function create(context, productModuleNumber, licenseTemplate) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(productModuleNumber, _Constants.default.ProductModule.PRODUCT_MODULE_NUMBER);

              licenseTemplate.setProperty(_Constants.default.ProductModule.PRODUCT_MODULE_NUMBER, productModuleNumber);
              _context.next = 4;
              return _Service.default.post(context, _Constants.default.LicenseTemplate.ENDPOINT_PATH, licenseTemplate.asPropertiesMap());

            case 4:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'LicenseTemplate';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToLicenseTemplate.default)(item));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Gets license template by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#get-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the license template number
   * @param number string
   *
   * return the license template object in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.LicenseTemplate.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'LicenseTemplate';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToLicenseTemplate.default)(item));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   * Returns all license templates of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#license-templates-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of license templates (of all products/modules) or null/empty list if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};

              if (!filter) {
                _context3.next = 5;
                break;
              }

              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }

              throw new TypeError("filter has bad value ".concat(filter));

            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);

            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.LicenseTemplate.ENDPOINT_PATH, queryParams);

            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'LicenseTemplate';
              }).map(function (v) {
                return (0, _itemToLicenseTemplate.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },

  /**
   * Updates license template properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#update-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license template number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param licenseTemplate NetLicensing.LicenseTemplate
   *
   * updated license template in promise.
   * @returns {Promise}
   */
  update: function update(context, number, licenseTemplate) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var path, _yield$Service$post2, items, _items$filter5, _items$filter6, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              path = "".concat(_Constants.default.LicenseTemplate.ENDPOINT_PATH, "/").concat(number);
              _context4.next = 4;
              return _Service.default.post(context, path, licenseTemplate.asPropertiesMap());

            case 4:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'LicenseTemplate';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToLicenseTemplate.default)(item));

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },

  /**
   * Deletes license template.See NetLicensingAPI JavaDoc for details:
   * @see https://netlicensing.io/wiki/license-template-services#delete-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license template number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.LicenseTemplate.ENDPOINT_PATH, "/").concat(number), queryParams);
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/services/LicenseeService.js":
/*!*****************************************!*\
  !*** ./src/services/LicenseeService.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

var _FilterUtils = _interopRequireDefault(__webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _Service = _interopRequireDefault(__webpack_require__(/*! ./Service */ "./src/services/Service.js"));

var _ValidationResults = _interopRequireDefault(__webpack_require__(/*! ../vo/ValidationResults */ "./src/vo/ValidationResults.js"));

var _itemToLicensee = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToLicensee */ "./src/converters/itemToLicensee.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ../vo/Page */ "./src/vo/Page.js"));

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToObject */ "./src/converters/itemToObject.js"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/licensee-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new licensee object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#create-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent product to which the new licensee is to be added
   * @param productNumber string
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param licensee NetLicensing.Licensee
   *
   * return the newly created licensee object in promise
   * @returns {Promise}
   */
  create: function create(context, productNumber, licensee) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(productNumber, _Constants.default.Product.PRODUCT_NUMBER);

              licensee.setProperty(_Constants.default.Product.PRODUCT_NUMBER, productNumber);
              _context.next = 4;
              return _Service.default.post(context, _Constants.default.Licensee.ENDPOINT_PATH, licensee.asPropertiesMap());

            case 4:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'Licensee';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToLicensee.default)(item));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Gets licensee by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#get-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the licensee number
   * @param number string
   *
   * return the licensee in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'Licensee';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToLicensee.default)(item));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   * Returns all licensees of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#licensees-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of licensees (of all products) or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};

              if (!filter) {
                _context3.next = 5;
                break;
              }

              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }

              throw new TypeError("filter has bad value ".concat(filter));

            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);

            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.Licensee.ENDPOINT_PATH, queryParams);

            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Licensee';
              }).map(function (v) {
                return (0, _itemToLicensee.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },

  /**
   * Updates licensee properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#update-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * licensee number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param licensee NetLicensing.Licensee
   *
   * return updated licensee in promise.
   * @returns {Promise}
   */
  update: function update(context, number, licensee) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number), licensee.asPropertiesMap());

            case 3:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'Licensee';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToLicensee.default)(item));

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },

  /**
   * Deletes licensee.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#delete-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * licensee number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number), queryParams);
  },

  /**
   * Validates active licenses of the licensee.
   * In the case of multiple product modules validation,
   * required parameters indexes will be added automatically.
   * See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#validate-licensee
   *
   * @param context NetLicensing.Context
   *
   * licensee number
   * @param number string
   *
   * optional validation parameters. See ValidationParameters and licensing model documentation for
   * details.
   * @param validationParameters NetLicensing.ValidationParameters.
   *
   * @returns {ValidationResults}
   */
  validate: function validate(context, number, validationParameters) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var queryParams, pmIndex, parameters, has, _yield$Service$post3, _yield$Service$post3$, items, ttl, validationResults;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              queryParams = {};

              if (validationParameters.getProductNumber()) {
                queryParams.productNumber = validationParameters.getProductNumber();
              }

              if (validationParameters.getLicenseeName()) {
                queryParams.licenseeName = validationParameters.getLicenseeName();
              }

              if (validationParameters.getLicenseeSecret()) {
                queryParams.licenseeSecret = validationParameters.getLicenseeSecret();
              }

              if (validationParameters.isForOfflineUse()) {
                queryParams.forOfflineUse = true;
              }

              if (validationParameters.getDryRun()) {
                queryParams.dryRun = true;
              }

              pmIndex = 0;
              parameters = validationParameters.getParameters();
              has = Object.prototype.hasOwnProperty;
              Object.keys(parameters).forEach(function (productModuleName) {
                queryParams["".concat(_Constants.default.ProductModule.PRODUCT_MODULE_NUMBER).concat(pmIndex)] = productModuleName;
                if (!has.call(parameters, productModuleName)) return;
                var parameter = parameters[productModuleName];
                Object.keys(parameter).forEach(function (key) {
                  if (has.call(parameter, key)) {
                    queryParams[key + pmIndex] = parameter[key];
                  }
                });
                pmIndex += 1;
              });
              _context5.next = 13;
              return _Service.default.post(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number, "/").concat(_Constants.default.Licensee.ENDPOINT_PATH_VALIDATE), queryParams);

            case 13:
              _yield$Service$post3 = _context5.sent;
              _yield$Service$post3$ = _yield$Service$post3.data;
              items = _yield$Service$post3$.items.item;
              ttl = _yield$Service$post3$.ttl;
              validationResults = new _ValidationResults.default();
              validationResults.setTtl(ttl);
              items.filter(function (_ref5) {
                var type = _ref5.type;
                return type === 'ProductModuleValidation';
              }).forEach(function (v) {
                var item = (0, _itemToObject.default)(v);
                validationResults.setProductModuleValidation(item[_Constants.default.ProductModule.PRODUCT_MODULE_NUMBER], item);
              });
              return _context5.abrupt("return", validationResults);

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },

  /**
   * Transfer licenses between licensees.
   * @see https://netlicensing.io/wiki/licensee-services#transfer-licenses
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the number of the licensee receiving licenses
   * @param number string
   *
   * the number of the licensee delivering licenses
   * @param sourceLicenseeNumber string
   *
   * @returns {Promise}
   */
  transfer: function transfer(context, number, sourceLicenseeNumber) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

    _CheckUtils.default.paramNotEmpty(sourceLicenseeNumber, _Constants.default.Licensee.SOURCE_LICENSEE_NUMBER);

    var queryParams = {
      sourceLicenseeNumber: sourceLicenseeNumber
    };
    return _Service.default.post(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number, "/").concat(_Constants.default.Licensee.ENDPOINT_PATH_TRANSFER), queryParams);
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/services/PaymentMethodService.js":
/*!**********************************************!*\
  !*** ./src/services/PaymentMethodService.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

var _Service = _interopRequireDefault(__webpack_require__(/*! ./Service */ "./src/services/Service.js"));

var _FilterUtils = _interopRequireDefault(__webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js"));

var _itemToPaymentMethod = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToPaymentMethod */ "./src/converters/itemToPaymentMethod.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ../vo/Page */ "./src/vo/Page.js"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var _default = {
  /**
   * Gets payment method by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/payment-method-services#get-payment-method
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the payment method number
   * @param number string
   *
   * return the payment method in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$get, items, _items$filter, _items$filter2, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.PaymentMethod.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _yield$Service$get = _context.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'PaymentMethod';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToPaymentMethod.default)(item));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Returns payment methods of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/payment-method-services#payment-methods-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of payment method entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var queryParams, _yield$Service$get2, data;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              queryParams = {};

              if (!filter) {
                _context2.next = 5;
                break;
              }

              if (_CheckUtils.default.isValid(filter)) {
                _context2.next = 4;
                break;
              }

              throw new TypeError("filter has bad value ".concat(filter));

            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);

            case 5:
              _context2.next = 7;
              return _Service.default.get(context, _Constants.default.PaymentMethod.ENDPOINT_PATH, queryParams);

            case 7:
              _yield$Service$get2 = _context2.sent;
              data = _yield$Service$get2.data;
              return _context2.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'PaymentMethod';
              }).map(function (v) {
                return (0, _itemToPaymentMethod.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   * Updates payment method properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/payment-method-services#update-payment-method
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the payment method number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param paymentMethod NetLicensing.PaymentMethod
   *
   * return updated payment method in promise.
   * @returns {Promise}
   */
  update: function update(context, number, paymentMethod) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var path, _yield$Service$post, items, _items$filter3, _items$filter4, item;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              path = "".concat(_Constants.default.PaymentMethod.ENDPOINT_PATH, "/").concat(number);
              _context3.next = 4;
              return _Service.default.post(context, path, paymentMethod.asPropertiesMap());

            case 4:
              _yield$Service$post = _context3.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter3 = items.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'PaymentMethod';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context3.abrupt("return", (0, _itemToPaymentMethod.default)(item));

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/services/ProductModuleService.js":
/*!**********************************************!*\
  !*** ./src/services/ProductModuleService.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _Service = _interopRequireDefault(__webpack_require__(/*! ./Service */ "./src/services/Service.js"));

var _FilterUtils = _interopRequireDefault(__webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js"));

var _itemToProductModule = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToProductModule */ "./src/converters/itemToProductModule.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ../vo/Page */ "./src/vo/Page.js"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/product-module-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new product module object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#create-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent product to which the new product module is to be added
   * @param productNumber string
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param productModule NetLicensing.ProductModule
   *
   * the newly created product module object in promise
   * @returns {Promise}
   */
  create: function create(context, productNumber, productModule) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(productNumber, _Constants.default.Product.PRODUCT_NUMBER);

              productModule.setProperty(_Constants.default.Product.PRODUCT_NUMBER, productNumber);
              _context.next = 4;
              return _Service.default.post(context, _Constants.default.ProductModule.ENDPOINT_PATH, productModule.asPropertiesMap());

            case 4:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'ProductModule';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToProductModule.default)(item));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Gets product module by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#get-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the product module number
   * @param number string
   *
   * return the product module object in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.ProductModule.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'ProductModule';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToProductModule.default)(item));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   * Returns products of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#product-modules-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of product modules entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};

              if (!filter) {
                _context3.next = 5;
                break;
              }

              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }

              throw new TypeError("filter has bad value ".concat(filter));

            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);

            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.ProductModule.ENDPOINT_PATH, queryParams);

            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'ProductModule';
              }).map(function (v) {
                return (0, _itemToProductModule.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },

  /**
   * Updates product module properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#update-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product module number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param productModule NetLicensing.ProductModule
   *
   * updated product module in promise.
   * @returns {Promise}
   */
  update: function update(context, number, productModule) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.ProductModule.ENDPOINT_PATH, "/").concat(number), productModule.asPropertiesMap());

            case 3:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'ProductModule';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToProductModule.default)(item));

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },

  /**
   * Deletes product module.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#delete-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product module number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.ProductModule.ENDPOINT_PATH, "/").concat(number), queryParams);
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/services/ProductService.js":
/*!****************************************!*\
  !*** ./src/services/ProductService.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _Service = _interopRequireDefault(__webpack_require__(/*! ./Service */ "./src/services/Service.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

var _FilterUtils = _interopRequireDefault(__webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js"));

var _itemToProduct = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToProduct */ "./src/converters/itemToProduct.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ../vo/Page */ "./src/vo/Page.js"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/product-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new product with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#create-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param product NetLicensing.Product
   *
   * return the newly created product object in promise
   * @returns {Promise}
   */
  create: function create(context, product) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.post(context, _Constants.default.Product.ENDPOINT_PATH, product.asPropertiesMap());

            case 2:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'Product';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToProduct.default)(item));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Gets product by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#get-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the product number
   * @param number string
   *
   * return the product object in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Product.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'Product';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToProduct.default)(item));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   * Returns products of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#products-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of product entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};

              if (!filter) {
                _context3.next = 5;
                break;
              }

              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }

              throw new TypeError("filter has bad value ".concat(filter));

            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);

            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.Product.ENDPOINT_PATH, queryParams);

            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Product';
              }).map(function (v) {
                return (0, _itemToProduct.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },

  /**
   * Updates product properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#update-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param product NetLicensing.Product
   *
   * updated product in promise.
   * @returns {Promise}
   */
  update: function update(context, number, product) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.Product.ENDPOINT_PATH, "/").concat(number), product.asPropertiesMap());

            case 3:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'Product';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToProduct.default)(item));

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },

  /**
   * Deletes product.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#delete-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.Product.ENDPOINT_PATH, "/").concat(number), queryParams);
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/services/Service.js":
/*!*********************************!*\
  !*** ./src/services/Service.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _btoa = _interopRequireDefault(__webpack_require__(/*! btoa */ "./node_modules/btoa/index.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _NlicError = _interopRequireDefault(__webpack_require__(/*! ../errors/NlicError */ "./src/errors/NlicError.js"));

var _package = _interopRequireDefault(__webpack_require__(/*! ../../package.json */ "./package.json"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var httpXHR = {};
var axiosInstance = null;

var Service = /*#__PURE__*/function () {
  function Service() {
    (0, _classCallCheck2.default)(this, Service);
  }

  (0, _createClass2.default)(Service, null, [{
    key: "getAxiosInstance",
    value: function getAxiosInstance() {
      return axiosInstance || _axios.default;
    }
  }, {
    key: "setAxiosInstance",
    value: function setAxiosInstance(instanse) {
      axiosInstance = instanse;
    }
  }, {
    key: "getLastHttpRequestInfo",
    value: function getLastHttpRequestInfo() {
      return httpXHR;
    }
    /**
     * Helper method for performing GET request to N
     etLicensing API services. Finds and returns first suitable item with
     * type resultType from the response.
     *
     * Context for the NetLicensing API call
     * @param context
     *
     * the REST URL template
     * @param urlTemplate
     *
     * The REST query parameters values. May be null if there are no parameters.
     * @param queryParams
     *
     * @returns {Promise}
     */

  }, {
    key: "get",
    value: function get(context, urlTemplate, queryParams) {
      return Service.request(context, 'get', urlTemplate, queryParams);
    }
    /**
     * Helper method for performing POST request to NetLicensing API services. Finds and returns first suitable item
     * with type resultType from the response.
     *
     * context for the NetLicensing API call
     * @param context
     *
     * the REST URL template
     * @param urlTemplate
     *
     * The REST query parameters values. May be null if there are no parameters.
     * @param queryParams
     *
     * @returns {Promise}
     */

  }, {
    key: "post",
    value: function post(context, urlTemplate, queryParams) {
      return Service.request(context, 'post', urlTemplate, queryParams);
    }
    /**
     *
     * @param context
     * @param urlTemplate
     * @param queryParams
     * @returns {Promise}
     */

  }, {
    key: "delete",
    value: function _delete(context, urlTemplate, queryParams) {
      return Service.request(context, 'delete', urlTemplate, queryParams);
    }
    /**
     * Send request to NetLicensing  RestApi
     * @param context
     * @param method
     * @param urlTemplate
     * @param queryParams
     * @returns {Promise}
     */

  }, {
    key: "request",
    value: function request(context, method, urlTemplate, queryParams) {
      var template = String(urlTemplate);
      var params = queryParams || {};
      if (!template) throw new TypeError('Url template must be specified'); // validate http method

      if (['get', 'post', 'delete'].indexOf(method.toLowerCase()) < 0) {
        throw new Error("Invalid request type:".concat(method, ", allowed requests types: GET, POST, DELETE."));
      } // validate context


      if (!context.getBaseUrl(null)) {
        throw new Error('Base url must be specified');
      }

      var request = {
        url: encodeURI("".concat(context.getBaseUrl(), "/").concat(template)),
        method: method.toLowerCase(),
        responseType: 'json',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        transformRequest: [function (data, headers) {
          if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            return Service.toQueryString(data);
          }

          if (!headers['NetLicensing-Origin']) {
            // eslint-disable-next-line no-param-reassign
            headers['NetLicensing-Origin'] = "NetLicensing/Javascript ".concat(_package.default.version);
          }

          return data;
        }]
      }; // only node.js has a process variable that is of [[Class]] process

      if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        request.headers['User-agent'] = "NetLicensing/Javascript ".concat(_package.default.version, "/node&").concat(process.version);
      }

      if (['put', 'post', 'patch'].indexOf(request.method) >= 0) {
        if (request.method === 'post') {
          request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }

        request.data = params;
      } else {
        request.params = params;
      }

      switch (context.getSecurityMode()) {
        // Basic Auth
        case _Constants.default.BASIC_AUTHENTICATION:
          if (!context.getUsername()) throw new Error('Missing parameter "username"');
          if (!context.getPassword()) throw new Error('Missing parameter "password"');
          request.auth = {
            username: context.getUsername(),
            password: context.getPassword()
          };
          break;
        // ApiKey Auth

        case _Constants.default.APIKEY_IDENTIFICATION:
          if (!context.getApiKey()) throw new Error('Missing parameter "apiKey"');
          request.headers.Authorization = "Basic ".concat((0, _btoa.default)("apiKey:".concat(context.getApiKey())));
          break;
        // without authorization

        case _Constants.default.ANONYMOUS_IDENTIFICATION:
          break;

        default:
          throw new Error('Unknown security mode');
      }

      return Service.getAxiosInstance()(request).then(function (response) {
        response.infos = Service.getInfo(response, []);
        var errors = response.infos.filter(function (_ref) {
          var type = _ref.type;
          return type === 'ERROR';
        });

        if (errors.length) {
          var error = new Error(errors[0].value);
          error.config = response.config;
          error.request = response.request;
          error.response = response;
          throw error;
        }

        httpXHR = response;
        return response;
      }).catch(function (e) {
        if (e.response) {
          httpXHR = e.response; // The request was made and the server responded with a status code
          // that falls out of the range of 2xx

          var error = new _NlicError.default(e);
          error.config = e.config;
          error.code = e.code;
          error.request = e.request;
          error.response = e.response; // The request was made and the server responded with a status code
          // that falls out of the range of 2xx

          var data = e.response.data;

          if (data) {
            error.infos = Service.getInfo(e.response, []);

            var _error$infos$filter = error.infos.filter(function (_ref2) {
              var type = _ref2.type;
              return type === 'ERROR';
            }),
                _error$infos$filter2 = (0, _slicedToArray2.default)(_error$infos$filter, 1),
                _error$infos$filter2$ = _error$infos$filter2[0],
                info = _error$infos$filter2$ === void 0 ? {} : _error$infos$filter2$;

            error.message = info.value || 'Unknown';
          }

          throw error;
        }

        throw e;
      });
    }
  }, {
    key: "getInfo",
    value: function getInfo(response, def) {
      try {
        return response.data.infos.info || def;
      } catch (e) {
        return def;
      }
    }
  }, {
    key: "isValidUrl",
    value: function isValidUrl(url) {
      var pattern = new RegExp('^(https?:\\/\\/)?' // protocol
      + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' // domain name
      + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
      + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
      + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
      + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

      return pattern.test(url);
    }
  }, {
    key: "toQueryString",
    value: function toQueryString(data, prefix) {
      var query = [];
      var has = Object.prototype.hasOwnProperty;
      Object.keys(data).forEach(function (key) {
        if (has.call(data, key)) {
          var k = prefix ? "".concat(prefix, "[").concat(key, "]") : key;
          var v = data[key];
          v = v instanceof Date ? v.toISOString() : v;
          query.push(v !== null && (0, _typeof2.default)(v) === 'object' ? Service.toQueryString(v, k) : "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(v)));
        }
      });
      return query.join('&').replace(/%5B[0-9]+%5D=/g, '=');
    }
  }]);
  return Service;
}();

exports["default"] = Service;

/***/ }),

/***/ "./src/services/TokenService.js":
/*!**************************************!*\
  !*** ./src/services/TokenService.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _Service = _interopRequireDefault(__webpack_require__(/*! ./Service */ "./src/services/Service.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

var _FilterUtils = _interopRequireDefault(__webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js"));

var _itemToToken = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToToken */ "./src/converters/itemToToken.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ../vo/Page */ "./src/vo/Page.js"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/token-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new token.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#create-token
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param token NetLicensing.Token
   *
   * return created token in promise
   * @returns {Promise}
   */
  create: function create(context, token) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.post(context, _Constants.default.Token.ENDPOINT_PATH, token.asPropertiesMap());

            case 2:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'Token';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToToken.default)(item));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Gets token by its number..See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#get-token
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the token number
   * @param number
   *
   * return the token in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Token.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'Token';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToToken.default)(item));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   * Returns tokens of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#tokens-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of token entities or empty array if nothing found.
   * @return array
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};

              if (!filter) {
                _context3.next = 5;
                break;
              }

              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }

              throw new TypeError("filter has bad value ".concat(filter));

            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);

            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.Token.ENDPOINT_PATH, queryParams);

            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Token';
              }).map(function (v) {
                return (0, _itemToToken.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },

  /**
   * Delete token by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#delete-token
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   *  the token number
   * @param number string
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

    return _Service.default.delete(context, "".concat(_Constants.default.Token.ENDPOINT_PATH, "/").concat(number));
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/services/TransactionService.js":
/*!********************************************!*\
  !*** ./src/services/TransactionService.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _Service = _interopRequireDefault(__webpack_require__(/*! ./Service */ "./src/services/Service.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

var _FilterUtils = _interopRequireDefault(__webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js"));

var _itemToTransaction = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToTransaction */ "./src/converters/itemToTransaction.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ../vo/Page */ "./src/vo/Page.js"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/transaction-services
 *
 * Transaction is created each time change to  LicenseService licenses happens. For instance licenses are
 * obtained by a licensee, licenses disabled by vendor, licenses deleted, etc. Transaction is created no matter what
 * source has initiated the change to licenses: it can be either a direct purchase of licenses by a licensee via
 * NetLicensing Shop, or licenses can be given to a licensee by a vendor. Licenses can also be assigned implicitly by
 * NetLicensing if it is defined so by a license model (e.g. evaluation license may be given automatically). All these
 * events are reflected in transactions. Of all the transaction handling routines only read-only routines are exposed to
 * the public API, as transactions are only allowed to be created and modified by NetLicensing internally.
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new transaction object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#create-transaction
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param transaction NetLicensing.Transaction
   *
   * return the newly created transaction object in promise
   * @returns {Promise}
   */
  create: function create(context, transaction) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.post(context, _Constants.default.Transaction.ENDPOINT_PATH, transaction.asPropertiesMap());

            case 2:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'Transaction';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToTransaction.default)(item));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Gets transaction by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#get-transaction
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the transaction number
   * @param number string
   *
   * return the transaction in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Transaction.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'Transaction';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToTransaction.default)(item));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   * Returns all transactions of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#transactions-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string
   *
   * array of transaction entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};

              if (!filter) {
                _context3.next = 5;
                break;
              }

              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }

              throw new TypeError("filter has bad value ".concat(filter));

            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);

            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.Transaction.ENDPOINT_PATH, queryParams);

            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Transaction';
              }).map(function (v) {
                return (0, _itemToTransaction.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },

  /**
   * Updates transaction properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#update-transaction
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * transaction number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param transaction NetLicensing.Transaction
   *
   * return updated transaction in promise.
   * @returns {Promise}
   */
  update: function update(context, number, transaction) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.Transaction.ENDPOINT_PATH, "/").concat(number), transaction.asPropertiesMap());

            case 3:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'Transaction';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToTransaction.default)(item));

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/services/UtilityService.js":
/*!****************************************!*\
  !*** ./src/services/UtilityService.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _Service = _interopRequireDefault(__webpack_require__(/*! ./Service */ "./src/services/Service.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

var _FilterUtils = _interopRequireDefault(__webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js"));

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToObject */ "./src/converters/itemToObject.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ../vo/Page */ "./src/vo/Page.js"));

var _itemToCountry = _interopRequireDefault(__webpack_require__(/*! ../converters/itemToCountry */ "./src/converters/itemToCountry.js"));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/utility-services
 * @constructor
 */
var _default = {
  /**
   * Returns all license types. See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/utility-services#license-types-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * array of available license types or empty array if nothing found in promise.
   * @returns {Promise}
   */
  listLicenseTypes: function listLicenseTypes(context) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$get, data;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.get(context, "".concat(_Constants.default.Utility.ENDPOINT_PATH, "/").concat(_Constants.default.Utility.ENDPOINT_PATH_LICENSE_TYPES));

            case 2:
              _yield$Service$get = _context.sent;
              data = _yield$Service$get.data;
              return _context.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref) {
                var type = _ref.type;
                return type === 'LicenseType';
              }).map(function (v) {
                return (0, _itemToObject.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Returns all license models. See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/utility-services#licensing-models-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * array of available license models or empty array if nothing found in promise.
   * @returns {Promise}
   */
  listLicensingModels: function listLicensingModels(context) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get2, data;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _Service.default.get(context, "".concat(_Constants.default.Utility.ENDPOINT_PATH, "/").concat(_Constants.default.Utility.ENDPOINT_PATH_LICENSING_MODELS));

            case 2:
              _yield$Service$get2 = _context2.sent;
              data = _yield$Service$get2.data;
              return _context2.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'LicensingModelProperties';
              }).map(function (v) {
                return (0, _itemToObject.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   * Returns all countries.
   *
   * determines the vendor on whose behalf the call is performed
   * @param context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter
   *
   * collection of available countries or null/empty list if nothing found in promise.
   * @returns {Promise}
   */
  listCountries: function listCountries(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get3, data;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};

              if (!filter) {
                _context3.next = 5;
                break;
              }

              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }

              throw new TypeError("filter has bad value ".concat(filter));

            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);

            case 5:
              _context3.next = 7;
              return _Service.default.get(context, "".concat(_Constants.default.Utility.ENDPOINT_PATH, "/").concat(_Constants.default.Utility.ENDPOINT_PATH_COUNTRIES), queryParams);

            case 7:
              _yield$Service$get3 = _context3.sent;
              data = _yield$Service$get3.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Country';
              }).map(function (v) {
                return (0, _itemToCountry.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/util/CastsUtils.js":
/*!********************************!*\
  !*** ./src/util/CastsUtils.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// Cast an attribute to a native JS type.
var _default = function _default(key, value) {
  switch (key.trim().toLowerCase()) {
    case 'str':
    case 'string':
      return String(value);

    case 'int':
    case 'integer':
      {
        var n = parseInt(value, 10);
        return Number.isNaN(n) ? value : n;
      }

    case 'float':
    case 'double':
      {
        var _n = parseFloat(value);

        return Number.isNaN(_n) ? value : _n;
      }

    case 'bool':
    case 'boolean':
      switch (value) {
        case 'true':
        case 'TRUE':
          return true;

        case 'false':
        case 'FALSE':
          return false;

        default:
          return Boolean(value);
      }

    case 'date':
      return value === 'now' ? 'now' : new Date(String(value));

    default:
      return value;
  }
};

exports["default"] = _default;

/***/ }),

/***/ "./src/util/CheckUtils.js":
/*!********************************!*\
  !*** ./src/util/CheckUtils.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var _default = {
  isValid: function isValid(value) {
    var valid = value !== undefined && typeof value !== 'function';
    if (typeof value === 'number') valid = Number.isFinite(value) && !Number.isNaN(value);
    return valid;
  },
  paramNotNull: function paramNotNull(parameter, parameterName) {
    if (!this.isValid(parameter)) throw new TypeError("Parameter ".concat(parameterName, " has bad value ").concat(parameter));
    if (parameter === null) throw new TypeError("Parameter ".concat(parameterName, " cannot be null"));
  },
  paramNotEmpty: function paramNotEmpty(parameter, parameterName) {
    if (!this.isValid(parameter)) throw new TypeError("Parameter ".concat(parameterName, " has bad value ").concat(parameter));
    if (!parameter) throw new TypeError("Parameter ".concat(parameterName, " cannot be null or empty string"));
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/util/FilterUtils.js":
/*!*********************************!*\
  !*** ./src/util/FilterUtils.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _default = {
  FILTER_DELIMITER: ';',
  FILTER_PAIR_DELIMITER: '=',
  encode: function encode() {
    var _this = this;

    var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var query = [];
    var has = Object.prototype.hasOwnProperty;
    Object.keys(filter).forEach(function (key) {
      if (has.call(filter, key)) {
        query.push("".concat(key).concat(_this.FILTER_PAIR_DELIMITER).concat(filter[key]));
      }
    });
    return query.join(this.FILTER_DELIMITER);
  },
  decode: function decode() {
    var _this2 = this;

    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var filter = {};
    query.split(this.FILTER_DELIMITER).forEach(function (v) {
      var _v$split = v.split(_this2.FILTER_PAIR_DELIMITER),
          _v$split2 = (0, _slicedToArray2.default)(_v$split, 2),
          name = _v$split2[0],
          value = _v$split2[1];

      filter[name] = value;
    });
    return filter;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/vo/Context.js":
/*!***************************!*\
  !*** ./src/vo/Context.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _Constants = _interopRequireDefault(__webpack_require__(/*! ../Constants */ "./src/Constants.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * The context values.
 * @type {{}}
 * @private
 */
var valuesMap = new WeakMap();
/**
 * List of values that was defined
 * @type {{}}
 * @private
 */

var definedMap = new WeakMap();
/**
 * Context defaults
 * @type {{baseUrl: string, securityMode}}
 * @private
 */

var defaultsMap = new WeakMap();

var Context = /*#__PURE__*/function () {
  function Context(values) {
    (0, _classCallCheck2.default)(this, Context);
    defaultsMap.set(this, {
      baseUrl: 'https://go.netlicensing.io/core/v2/rest',
      securityMode: _Constants.default.BASIC_AUTHENTICATION
    });
    valuesMap.set(this, {});
    definedMap.set(this, {});
    this.setValues(_objectSpread(_objectSpread({}, defaultsMap.get(this)), values));
  }

  (0, _createClass2.default)(Context, [{
    key: "setBaseUrl",
    value: function setBaseUrl(baseUrl) {
      return this.setValue('baseUrl', baseUrl);
    }
  }, {
    key: "getBaseUrl",
    value: function getBaseUrl(def) {
      return this.getValue('baseUrl', def);
    }
  }, {
    key: "setUsername",
    value: function setUsername(username) {
      return this.setValue('username', username);
    }
  }, {
    key: "getUsername",
    value: function getUsername(def) {
      return this.getValue('username', def);
    }
  }, {
    key: "setPassword",
    value: function setPassword(password) {
      return this.setValue('password', password);
    }
  }, {
    key: "getPassword",
    value: function getPassword(def) {
      return this.getValue('password', def);
    }
  }, {
    key: "setApiKey",
    value: function setApiKey(apiKey) {
      return this.setValue('apiKey', apiKey);
    }
  }, {
    key: "getApiKey",
    value: function getApiKey(def) {
      return this.getValue('apiKey', def);
    }
  }, {
    key: "setSecurityMode",
    value: function setSecurityMode(securityMode) {
      return this.setValue('securityMode', securityMode);
    }
  }, {
    key: "getSecurityMode",
    value: function getSecurityMode(def) {
      return this.getValue('securityMode', def);
    }
  }, {
    key: "setVendorNumber",
    value: function setVendorNumber(vendorNumber) {
      return this.setValue('vendorNumber', vendorNumber);
    }
  }, {
    key: "getVendorNumber",
    value: function getVendorNumber(def) {
      return this.getValue('vendorNumber', def);
    }
    /**
     * Set a given values on the context.
     * @param key
     * @param value
     * @returns {Context}
     */

  }, {
    key: "setValue",
    value: function setValue(key, value) {
      // check values
      if (!_CheckUtils.default.isValid(key) || (0, _typeof2.default)(key) === 'object') throw new Error("Bad value key:".concat(key));
      if (!_CheckUtils.default.isValid(value)) throw new Error("Value ".concat(key, " has wrong value").concat(value)); // define keys

      this.define(key);
      var copedValue = value;

      if ((0, _typeof2.default)(value) === 'object' && value !== null) {
        copedValue = Array.isArray(value) ? Object.assign([], value) : _objectSpread({}, value);
      }

      var values = valuesMap.get(this);
      values[key] = copedValue;
      return this;
    }
    /**
     * Set the array of context values.
     * @param values
     * @returns {Context}
     */

  }, {
    key: "setValues",
    value: function setValues(values) {
      var _this = this;

      this.removeValues();
      var has = Object.prototype.hasOwnProperty;
      Object.keys(values).forEach(function (key) {
        if (has.call(values, key)) {
          _this.setValue(key, values[key]);
        }
      });
      return this;
    }
    /**
     * Get an value from the context.
     * @param key
     * @param def
     * @returns {*}
     */

  }, {
    key: "getValue",
    value: function getValue(key, def) {
      return key in valuesMap.get(this) ? valuesMap.get(this)[key] : def;
    }
    /**
     * Get all of the current value on the context.
     */

  }, {
    key: "getValues",
    value: function getValues() {
      return _objectSpread({}, valuesMap.get(this));
    }
    /**
     * Remove value
     * @param key
     * @returns {Context}
     */

  }, {
    key: "removeValue",
    value: function removeValue(key) {
      var values = valuesMap.get(this);
      delete values[key];
      this.removeDefine(key);
      return this;
    }
    /**
     * Remove values
     * @param keys
     */

  }, {
    key: "removeValues",
    value: function removeValues(keys) {
      var _this2 = this;

      var keysAr = keys || Object.keys(valuesMap.get(this));
      keysAr.forEach(function (key) {
        return _this2.removeValue(key);
      });
    }
    /**
     * Define value getter and setter
     * @param key
     * @param onlyGetter
     * @private
     */

  }, {
    key: "define",
    value: function define(key, onlyGetter) {
      if (this.hasDefine(key)) return;

      if (!_CheckUtils.default.isValid(key) || (typeof property === "undefined" ? "undefined" : (0, _typeof2.default)(property)) === 'object') {
        throw new TypeError("Bad value name:".concat(key));
      }

      var self = this; // delete property

      delete this[key];
      var descriptors = {
        enumerable: true,
        configurable: true,
        get: function get() {
          return self.getValue(key);
        }
      };

      if (!onlyGetter) {
        descriptors.set = function (value) {
          return self.setValue(key, value);
        };
      }

      var defined = definedMap.get(this);
      defined[key] = true;
      Object.defineProperty(this, key, descriptors);
    }
    /**
     * Check if value has defined
     * @param key
     * @private
     */

  }, {
    key: "hasDefine",
    value: function hasDefine(key) {
      return Boolean(definedMap.get(this)[key]);
    }
    /**
     * Remove value getter and setter
     * @param key
     * @private
     */

  }, {
    key: "removeDefine",
    value: function removeDefine(key) {
      if (!this.hasDefine(key)) return;
      var defined = definedMap.get(this);
      delete defined[key];
      delete this[key];
    }
  }]);
  return Context;
}();

exports["default"] = Context;

/***/ }),

/***/ "./src/vo/Page.js":
/*!************************!*\
  !*** ./src/vo/Page.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _default = function _default() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var pageNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var itemsNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var totalPages = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var totalItems = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var paginator = {
    getContent: function getContent() {
      return content;
    },
    getPageNumber: function getPageNumber() {
      return pageNumber;
    },
    getItemsNumber: function getItemsNumber() {
      return itemsNumber;
    },
    getTotalPages: function getTotalPages() {
      return totalPages;
    },
    getTotalItems: function getTotalItems() {
      return totalItems;
    },
    hasNext: function hasNext() {
      return totalPages > pageNumber + 1;
    }
  };
  var paginatorKeys = Object.keys(paginator);
  return new Proxy(content, {
    get: function get(target, key) {
      if (paginatorKeys.indexOf(key) !== -1) {
        return paginator[key];
      }

      return target[key];
    }
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./src/vo/ValidationParameters.js":
/*!****************************************!*\
  !*** ./src/vo/ValidationParameters.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var ValidationParameters = /*#__PURE__*/function () {
  function ValidationParameters() {
    (0, _classCallCheck2.default)(this, ValidationParameters);
    this.parameters = {};
  }
  /**
   * Sets the target product
   *
   * optional productNumber, must be provided in case licensee auto-create is enabled
   * @param productNumber
   * @returns {ValidationParameters}
   */


  (0, _createClass2.default)(ValidationParameters, [{
    key: "setProductNumber",
    value: function setProductNumber(productNumber) {
      this.productNumber = productNumber;
      return this;
    }
    /**
     * Get the target product
     * @returns {*}
     */

  }, {
    key: "getProductNumber",
    value: function getProductNumber() {
      return this.productNumber;
    }
    /**
     * Sets the name for the new licensee
     *
     * optional human-readable licensee name in case licensee will be auto-created. This parameter must not
     * be the name, but can be used to store any other useful string information with new licensees, up to
     * 1000 characters.
     * @param licenseeName
     * @returns {ValidationParameters}
     */

  }, {
    key: "setLicenseeName",
    value: function setLicenseeName(licenseeName) {
      this.licenseeName = licenseeName;
      return this;
    }
    /**
     * Get the licensee name
     * @returns {*}
     */

  }, {
    key: "getLicenseeName",
    value: function getLicenseeName() {
      return this.licenseeName;
    }
    /**
     * Sets the licensee secret
     *
     * licensee secret stored on the client side. Refer to Licensee Secret documentation for details.
     * @param licenseeSecret
     * @returns {ValidationParameters}
     * @deprecated use 'NodeLocked' licensingModel instead
     */

  }, {
    key: "setLicenseeSecret",
    value: function setLicenseeSecret(licenseeSecret) {
      this.licenseeSecret = licenseeSecret;
      return this;
    }
    /**
     * Get the licensee secret
     * @returns {*}
     * @deprecated use 'NodeLocked' licensingModel instead
     */

  }, {
    key: "getLicenseeSecret",
    value: function getLicenseeSecret() {
      return this.licenseeSecret;
    }
    /**
     * Indicates, that the validation response is intended the offline use
     *
     * @param forOfflineUse
     *            if "true", validation response will be extended with data required for the offline use
     */

  }, {
    key: "setForOfflineUse",
    value: function setForOfflineUse(forOfflineUse) {
      this.forOfflineUse = !!forOfflineUse;
      return this;
    }
  }, {
    key: "isForOfflineUse",
    value: function isForOfflineUse() {
      return !!this.forOfflineUse;
    }
  }, {
    key: "setDryRun",
    value: function setDryRun(dryRun) {
      this.dryRun = !!dryRun;
      return this;
    }
  }, {
    key: "getDryRun",
    value: function getDryRun(def) {
      return this.dryRun || def;
    }
    /**
     * Get validation parameters
     * @returns {*}
     */

  }, {
    key: "getParameters",
    value: function getParameters() {
      return _objectSpread({}, this.parameters);
    }
  }, {
    key: "getProductModuleValidationParameters",
    value: function getProductModuleValidationParameters(productModuleNumber) {
      return _objectSpread({}, this.parameters[productModuleNumber]);
    }
  }, {
    key: "setProductModuleValidationParameters",
    value: function setProductModuleValidationParameters(productModuleNumber, productModuleParameters) {
      if (this.parameters[productModuleNumber] === undefined || !Object.keys(this.parameters[productModuleNumber]).length) {
        this.parameters[productModuleNumber] = {};
      }

      this.parameters[productModuleNumber] = _objectSpread(_objectSpread({}, this.parameters[productModuleNumber]), productModuleParameters);
      return this;
    }
  }]);
  return ValidationParameters;
}();

exports["default"] = ValidationParameters;

/***/ }),

/***/ "./src/vo/ValidationResults.js":
/*!*************************************!*\
  !*** ./src/vo/ValidationResults.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ValidationResults = /*#__PURE__*/function () {
  function ValidationResults() {
    (0, _classCallCheck2.default)(this, ValidationResults);
    this.validators = {};
  }

  (0, _createClass2.default)(ValidationResults, [{
    key: "getValidators",
    value: function getValidators() {
      return _objectSpread({}, this.validators);
    }
  }, {
    key: "setProductModuleValidation",
    value: function setProductModuleValidation(productModuleNumber, productModuleValidation) {
      if (!_CheckUtils.default.isValid(productModuleNumber) || (0, _typeof2.default)(productModuleNumber) === 'object') {
        throw new TypeError("Bad productModuleNumber:".concat(productModuleNumber));
      }

      this.validators[productModuleNumber] = productModuleValidation;
      return this;
    }
  }, {
    key: "getProductModuleValidation",
    value: function getProductModuleValidation(productModuleNumber) {
      if (!_CheckUtils.default.isValid(productModuleNumber) || (0, _typeof2.default)(productModuleNumber) === 'object') {
        throw new TypeError("Bad productModuleNumber:".concat(productModuleNumber));
      }

      return this.validators[productModuleNumber];
    }
  }, {
    key: "setTtl",
    value: function setTtl(ttl) {
      if (!_CheckUtils.default.isValid(ttl) || (0, _typeof2.default)(ttl) === 'object') {
        throw new TypeError("Bad ttl:".concat(ttl));
      }

      this.ttl = new Date(String(ttl));
      return this;
    }
  }, {
    key: "getTtl",
    value: function getTtl() {
      return this.ttl ? new Date(this.ttl) : undefined;
    }
  }, {
    key: "toString",
    value: function toString() {
      var data = 'ValidationResult [';
      var validators = this.getValidators();
      var has = Object.prototype.hasOwnProperty;
      Object.keys(validators).forEach(function (productModuleNumber) {
        data += "ProductModule<".concat(productModuleNumber, ">");

        if (has.call(validators, productModuleNumber)) {
          data += JSON.stringify(validators[productModuleNumber]);
        }
      });
      data += ']';
      return data;
    }
  }]);
  return ValidationResults;
}();

exports["default"] = ValidationResults;

/***/ }),

/***/ "./node_modules/btoa/index.js":
/*!************************************!*\
  !*** ./node_modules/btoa/index.js ***!
  \************************************/
/***/ (function(module) {

(function () {
  "use strict";

  function btoa(str) {
    var buffer;

    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = Buffer.from(str.toString(), 'binary');
    }

    return buffer.toString('base64');
  }

  module.exports = btoa;
}());


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"netlicensing-client","version":"1.2.28","description":"JavaScript Wrapper for Labs64 NetLicensing RESTful API","keywords":["labs64","netlicensing","licensing","licensing-as-a-service","license","license-management","software-license","client","restful","restful-api","javascript","wrapper","api","client"],"license":"Apache-2.0","author":"Labs64 GmbH","homepage":"https://netlicensing.io","repository":{"type":"git","url":"https://github.com/Labs64/NetLicensingClient-javascript"},"bugs":{"url":"https://github.com/Labs64/NetLicensingClient-javascript/issues"},"contributors":[{"name":"Ready Brown","email":"ready.brown@hotmail.de","url":"https://github.com/r-brown"},{"name":"Viacheslav Rudkovskiy","email":"viachaslau.rudkovski@labs64.de","url":"https://github.com/v-rudkovskiy"},{"name":"Andrei Yushkevich","email":"yushkevich@me.com","url":"https://github.com/yushkevich"}],"main":"dist/netlicensing-client.js","files":["dist"],"scripts":{"build":"node build/build.cjs","release":"npm run build && npm run test","dev":"webpack --progress --watch --config build/webpack.dev.conf.cjs","test":"karma start test/karma.conf.js --single-run","test-mocha":"webpack --config build/webpack.test.conf.cjs","test-for-travis":"karma start test/karma.conf.js --single-run --browsers Firefox","lint":"eslint --ext .js,.vue src test"},"dependencies":{"axios":"^0.26.1","btoa":"^1.2.1","es6-promise":"^4.2.8"},"devDependencies":{"@babel/core":"^7.17.8","@babel/plugin-proposal-class-properties":"^7.16.7","@babel/plugin-proposal-decorators":"^7.17.8","@babel/plugin-proposal-export-namespace-from":"^7.16.7","@babel/plugin-proposal-function-sent":"^7.16.7","@babel/plugin-proposal-json-strings":"^7.16.7","@babel/plugin-proposal-numeric-separator":"^7.16.7","@babel/plugin-proposal-throw-expressions":"^7.16.7","@babel/plugin-syntax-dynamic-import":"^7.8.3","@babel/plugin-syntax-import-meta":"^7.10.4","@babel/plugin-transform-modules-commonjs":"^7.17.7","@babel/plugin-transform-runtime":"^7.17.0","@babel/preset-env":"^7.16.11","@babel/runtime":"^7.17.8","axios-mock-adapter":"^1.20.0","babel-eslint":"^10.1.0","babel-loader":"^8.2.2","chalk":"^4.1.2","eslint":"^8.12.0","eslint-config-airbnb-base":"^15.0.0","eslint-friendly-formatter":"^4.0.1","eslint-import-resolver-webpack":"^0.13.1","eslint-plugin-import":"^2.25.4","eslint-plugin-jasmine":"^4.1.3","eslint-webpack-plugin":"^3.1.1","faker":"^5.5.3","is-docker":"^2.2.1","jasmine":"^4.0.2","jasmine-core":"^4.0.1","karma":"^6.3.17","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.2","karma-jasmine":"^4.0.2","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.33","karma-webpack":"^5.0.0","lodash":"^4.17.21","ora":"^5.4.1","rimraf":"^3.0.2","terser-webpack-plugin":"^5.3.1","webpack":"^5.70.0","webpack-cli":"^4.9.2","webpack-merge":"^5.8.0"},"engines":{"node":">= 10.0.0","npm":">= 6.0.0"},"browserslist":["> 1%","last 2 versions","not ie <= 10"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _Constants = _interopRequireDefault(__webpack_require__(/*! ./Constants */ "./src/Constants.js"));

var _Context = _interopRequireDefault(__webpack_require__(/*! ./vo/Context */ "./src/vo/Context.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ./vo/Page */ "./src/vo/Page.js"));

var _ValidationParameters = _interopRequireDefault(__webpack_require__(/*! ./vo/ValidationParameters */ "./src/vo/ValidationParameters.js"));

var _ValidationResults = _interopRequireDefault(__webpack_require__(/*! ./vo/ValidationResults */ "./src/vo/ValidationResults.js"));

var _Service = _interopRequireDefault(__webpack_require__(/*! ./services/Service */ "./src/services/Service.js"));

var _LicenseeService = _interopRequireDefault(__webpack_require__(/*! ./services/LicenseeService */ "./src/services/LicenseeService.js"));

var _LicenseService = _interopRequireDefault(__webpack_require__(/*! ./services/LicenseService */ "./src/services/LicenseService.js"));

var _LicenseTemplateService = _interopRequireDefault(__webpack_require__(/*! ./services/LicenseTemplateService */ "./src/services/LicenseTemplateService.js"));

var _PaymentMethodService = _interopRequireDefault(__webpack_require__(/*! ./services/PaymentMethodService */ "./src/services/PaymentMethodService.js"));

var _ProductModuleService = _interopRequireDefault(__webpack_require__(/*! ./services/ProductModuleService */ "./src/services/ProductModuleService.js"));

var _ProductService = _interopRequireDefault(__webpack_require__(/*! ./services/ProductService */ "./src/services/ProductService.js"));

var _TokenService = _interopRequireDefault(__webpack_require__(/*! ./services/TokenService */ "./src/services/TokenService.js"));

var _TransactionService = _interopRequireDefault(__webpack_require__(/*! ./services/TransactionService */ "./src/services/TransactionService.js"));

var _UtilityService = _interopRequireDefault(__webpack_require__(/*! ./services/UtilityService */ "./src/services/UtilityService.js"));

var _BaseEntity = _interopRequireDefault(__webpack_require__(/*! ./entities/BaseEntity */ "./src/entities/BaseEntity.js"));

var _Country = _interopRequireDefault(__webpack_require__(/*! ./entities/Country */ "./src/entities/Country.js"));

var _License = _interopRequireDefault(__webpack_require__(/*! ./entities/License */ "./src/entities/License.js"));

var _Licensee = _interopRequireDefault(__webpack_require__(/*! ./entities/Licensee */ "./src/entities/Licensee.js"));

var _LicenseTemplate = _interopRequireDefault(__webpack_require__(/*! ./entities/LicenseTemplate */ "./src/entities/LicenseTemplate.js"));

var _PaymentMethod = _interopRequireDefault(__webpack_require__(/*! ./entities/PaymentMethod */ "./src/entities/PaymentMethod.js"));

var _Product = _interopRequireDefault(__webpack_require__(/*! ./entities/Product */ "./src/entities/Product.js"));

var _ProductDiscount = _interopRequireDefault(__webpack_require__(/*! ./entities/ProductDiscount */ "./src/entities/ProductDiscount.js"));

var _ProductModule = _interopRequireDefault(__webpack_require__(/*! ./entities/ProductModule */ "./src/entities/ProductModule.js"));

var _Token = _interopRequireDefault(__webpack_require__(/*! ./entities/Token */ "./src/entities/Token.js"));

var _Transaction = _interopRequireDefault(__webpack_require__(/*! ./entities/Transaction */ "./src/entities/Transaction.js"));

var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(/*! ./entities/LicenseTransactionJoin */ "./src/entities/LicenseTransactionJoin.js"));

var _itemToCountry = _interopRequireDefault(__webpack_require__(/*! ./converters/itemToCountry */ "./src/converters/itemToCountry.js"));

var _itemToLicense = _interopRequireDefault(__webpack_require__(/*! ./converters/itemToLicense */ "./src/converters/itemToLicense.js"));

var _itemToLicensee = _interopRequireDefault(__webpack_require__(/*! ./converters/itemToLicensee */ "./src/converters/itemToLicensee.js"));

var _itemToLicenseTemplate = _interopRequireDefault(__webpack_require__(/*! ./converters/itemToLicenseTemplate */ "./src/converters/itemToLicenseTemplate.js"));

var _itemToObject = _interopRequireDefault(__webpack_require__(/*! ./converters/itemToObject */ "./src/converters/itemToObject.js"));

var _itemToPaymentMethod = _interopRequireDefault(__webpack_require__(/*! ./converters/itemToPaymentMethod */ "./src/converters/itemToPaymentMethod.js"));

var _itemToProduct = _interopRequireDefault(__webpack_require__(/*! ./converters/itemToProduct */ "./src/converters/itemToProduct.js"));

var _itemToProductModule = _interopRequireDefault(__webpack_require__(/*! ./converters/itemToProductModule */ "./src/converters/itemToProductModule.js"));

var _itemToToken = _interopRequireDefault(__webpack_require__(/*! ./converters/itemToToken */ "./src/converters/itemToToken.js"));

var _itemToTransaction = _interopRequireDefault(__webpack_require__(/*! ./converters/itemToTransaction */ "./src/converters/itemToTransaction.js"));

var _CastsUtils = _interopRequireDefault(__webpack_require__(/*! ./util/CastsUtils */ "./src/util/CastsUtils.js"));

var _CheckUtils = _interopRequireDefault(__webpack_require__(/*! ./util/CheckUtils */ "./src/util/CheckUtils.js"));

var _FilterUtils = _interopRequireDefault(__webpack_require__(/*! ./util/FilterUtils */ "./src/util/FilterUtils.js"));

var _NlicError = _interopRequireDefault(__webpack_require__(/*! ./errors/NlicError */ "./src/errors/NlicError.js"));

// Constants
// VO
// Services
// Entities
// Converters
// Utils
// Errors
// Create the default instance to be exported
var NetLicensing = {
  // Constants
  Constants: _Constants.default,
  // Expose VO
  Context: _Context.default,
  Page: _Page.default,
  ValidationParameters: _ValidationParameters.default,
  ValidationResults: _ValidationResults.default,
  // Expose Services
  Service: _Service.default,
  LicenseeService: _LicenseeService.default,
  LicenseService: _LicenseService.default,
  LicenseTemplateService: _LicenseTemplateService.default,
  PaymentMethodService: _PaymentMethodService.default,
  ProductModuleService: _ProductModuleService.default,
  ProductService: _ProductService.default,
  TokenService: _TokenService.default,
  TransactionService: _TransactionService.default,
  UtilityService: _UtilityService.default,
  // Expose Entities
  BaseEntity: _BaseEntity.default,
  Country: _Country.default,
  License: _License.default,
  Licensee: _Licensee.default,
  LicenseTemplate: _LicenseTemplate.default,
  PaymentMethod: _PaymentMethod.default,
  Product: _Product.default,
  ProductDiscount: _ProductDiscount.default,
  ProductModule: _ProductModule.default,
  Token: _Token.default,
  Transaction: _Transaction.default,
  LicenseTransactionJoin: _LicenseTransactionJoin.default,
  // Expose Converters
  itemToCountry: _itemToCountry.default,
  itemToLicense: _itemToLicense.default,
  itemToLicensee: _itemToLicensee.default,
  itemToLicenseTemplate: _itemToLicenseTemplate.default,
  itemToObject: _itemToObject.default,
  itemToPaymentMethod: _itemToPaymentMethod.default,
  itemToProduct: _itemToProduct.default,
  itemToProductModule: _itemToProductModule.default,
  itemToToken: _itemToToken.default,
  itemToTransaction: _itemToTransaction.default,
  // Expose Utils
  CastsUtils: _CastsUtils.default,
  CheckUtils: _CheckUtils.default,
  FilterUtils: _FilterUtils.default,
  // Errors
  NlicError: _NlicError.default
}; // module.exports = NetLicensing;
// Allow use of default import syntax in TypeScript

var _default = NetLicensing;
exports["default"] = _default;
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixNQUFNO0FBQ04sZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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dmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL2luZGV4LmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZW52L2RhdGEuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9jb252ZXJ0ZXJzL2l0ZW1Ub0NvdW50cnkuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL2NvbnZlcnRlcnMvaXRlbVRvTGljZW5zZS5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvY29udmVydGVycy9pdGVtVG9MaWNlbnNlVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL2NvbnZlcnRlcnMvaXRlbVRvTGljZW5zZWUuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL2NvbnZlcnRlcnMvaXRlbVRvT2JqZWN0LmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9jb252ZXJ0ZXJzL2l0ZW1Ub1BheW1lbnRNZXRob2QuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL2NvbnZlcnRlcnMvaXRlbVRvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvY29udmVydGVycy9pdGVtVG9Qcm9kdWN0TW9kdWxlLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9jb252ZXJ0ZXJzL2l0ZW1Ub1Rva2VuLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9jb252ZXJ0ZXJzL2l0ZW1Ub1RyYW5zYWN0aW9uLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9lbnRpdGllcy9CYXNlRW50aXR5LmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9lbnRpdGllcy9Db3VudHJ5LmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9lbnRpdGllcy9MaWNlbnNlLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9lbnRpdGllcy9MaWNlbnNlVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL2VudGl0aWVzL0xpY2Vuc2VUcmFuc2FjdGlvbkpvaW4uanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL2VudGl0aWVzL0xpY2Vuc2VlLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9lbnRpdGllcy9QYXltZW50TWV0aG9kLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9lbnRpdGllcy9Qcm9kdWN0LmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9lbnRpdGllcy9Qcm9kdWN0RGlzY291bnQuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL2VudGl0aWVzL1Byb2R1Y3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL2VudGl0aWVzL1Rva2VuLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9lbnRpdGllcy9UcmFuc2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvZXJyb3JzL05saWNFcnJvci5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvc2VydmljZXMvTGljZW5zZVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL3NlcnZpY2VzL0xpY2Vuc2VUZW1wbGF0ZVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL3NlcnZpY2VzL0xpY2Vuc2VlU2VydmljZS5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvc2VydmljZXMvUGF5bWVudE1ldGhvZFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL3NlcnZpY2VzL1Byb2R1Y3RNb2R1bGVTZXJ2aWNlLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9zZXJ2aWNlcy9Qcm9kdWN0U2VydmljZS5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvc2VydmljZXMvU2VydmljZS5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvc2VydmljZXMvVG9rZW5TZXJ2aWNlLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9zZXJ2aWNlcy9UcmFuc2FjdGlvblNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL3NlcnZpY2VzL1V0aWxpdHlTZXJ2aWNlLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy91dGlsL0Nhc3RzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL3V0aWwvQ2hlY2tVdGlscy5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvdXRpbC9GaWx0ZXJVdGlscy5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvdm8vQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvdm8vUGFnZS5qcyIsIndlYnBhY2s6Ly9OZXRMaWNlbnNpbmcvLi9zcmMvdm8vVmFsaWRhdGlvblBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nLy4vc3JjL3ZvL1ZhbGlkYXRpb25SZXN1bHRzLmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9idG9hL2luZGV4LmpzIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vTmV0TGljZW5zaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL05ldExpY2Vuc2luZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk5ldExpY2Vuc2luZ1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJOZXRMaWNlbnNpbmdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTmV0TGljZW5zaW5nXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiKTtcblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZUZ1bmN0aW9uLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3QsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbnZhciBpc05hdGl2ZUZ1bmN0aW9uID0gcmVxdWlyZShcIi4vaXNOYXRpdmVGdW5jdGlvbi5qc1wiKTtcblxudmFyIGNvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdC5qc1wiKTtcblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIWlzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfd3JhcE5hdGl2ZVN1cGVyLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciB0cmFuc2l0aW9uYWxEZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzL3RyYW5zaXRpb25hbCcpO1xudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9DYW5jZWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuICAgIHZhciByZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIHZhciBvbkNhbmNlbGVkO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi51bnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgZnVuY3Rpb24gb25sb2FkZW5kKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIXJlc3BvbnNlVHlwZSB8fCByZXNwb25zZVR5cGUgPT09ICd0ZXh0JyB8fCAgcmVzcG9uc2VUeXBlID09PSAnanNvbicgP1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dCA/ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICB2YXIgdHJhbnNpdGlvbmFsID0gY29uZmlnLnRyYW5zaXRpb25hbCB8fCB0cmFuc2l0aW9uYWxEZWZhdWx0cztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyAnRVRJTUVET1VUJyA6ICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4gfHwgY29uZmlnLnNpZ25hbCkge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIG9uQ2FuY2VsZWQgPSBmdW5jdGlvbihjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdCghY2FuY2VsIHx8IChjYW5jZWwgJiYgY2FuY2VsLnR5cGUpID8gbmV3IENhbmNlbCgnY2FuY2VsZWQnKSA6IGNhbmNlbCk7XG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4gJiYgY29uZmlnLmNhbmNlbFRva2VuLnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwuYWJvcnRlZCA/IG9uQ2FuY2VsZWQoKSA6IGNvbmZpZy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlcXVlc3REYXRhKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG4gIGluc3RhbmNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICAgIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhkZWZhdWx0Q29uZmlnLCBpbnN0YW5jZUNvbmZpZykpO1xuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcbmF4aW9zLlZFUlNJT04gPSByZXF1aXJlKCcuL2Vudi9kYXRhJykudmVyc2lvbjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzQXhpb3NFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuXG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHRoaXMucHJvbWlzZS50aGVuKGZ1bmN0aW9uKGNhbmNlbCkge1xuICAgIGlmICghdG9rZW4uX2xpc3RlbmVycykgcmV0dXJuO1xuXG4gICAgdmFyIGk7XG4gICAgdmFyIGwgPSB0b2tlbi5fbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRva2VuLl9saXN0ZW5lcnNbaV0oY2FuY2VsKTtcbiAgICB9XG4gICAgdG9rZW4uX2xpc3RlbmVycyA9IG51bGw7XG4gIH0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHRoaXMucHJvbWlzZS50aGVuID0gZnVuY3Rpb24ob25mdWxmaWxsZWQpIHtcbiAgICB2YXIgX3Jlc29sdmU7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgIHRva2VuLnN1YnNjcmliZShyZXNvbHZlKTtcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KS50aGVuKG9uZnVsZmlsbGVkKTtcblxuICAgIHByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gcmVqZWN0KCkge1xuICAgICAgdG9rZW4udW5zdWJzY3JpYmUoX3Jlc29sdmUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBTdWJzY3JpYmUgdG8gdGhlIGNhbmNlbCBzaWduYWxcbiAqL1xuXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIGxpc3RlbmVyKHRoaXMucmVhc29uKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IFtsaXN0ZW5lcl07XG4gIH1cbn07XG5cbi8qKlxuICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgY2FuY2VsIHNpZ25hbFxuICovXG5cbkNhbmNlbFRva2VuLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpbmRleCA9IHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcbnZhciB2YWxpZGF0b3IgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3ZhbGlkYXRvcicpO1xuXG52YXIgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZ09yVXJsID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBjb25maWcudXJsID0gY29uZmlnT3JVcmw7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnT3JVcmwgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIHZhciB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsO1xuXG4gIGlmICh0cmFuc2l0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHRyYW5zaXRpb25hbCwge1xuICAgICAgc2lsZW50SlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICBmb3JjZWRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbilcbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gIHZhciByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICB2YXIgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBpbnRlcmNlcHRvci5ydW5XaGVuID09PSAnZnVuY3Rpb24nICYmIGludGVyY2VwdG9yLnJ1bldoZW4oY29uZmlnKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0b3Iuc3luY2hyb25vdXM7XG5cbiAgICByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB2YXIgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluID0gW107XG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHZhciBwcm9taXNlO1xuXG4gIGlmICghc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzKSB7XG4gICAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcblxuICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGNoYWluLCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbik7XG4gICAgY2hhaW4gPSBjaGFpbi5jb25jYXQocmVzcG9uc2VJbnRlcmNlcHRvckNoYWluKTtcblxuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cblxuICB2YXIgbmV3Q29uZmlnID0gY29uZmlnO1xuICB3aGlsZSAocmVxdWVzdEludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoKSB7XG4gICAgdmFyIG9uRnVsZmlsbGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKTtcbiAgICB2YXIgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnNoaWZ0KCk7XG4gICAgdHJ5IHtcbiAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG9uUmVqZWN0ZWQoZXJyb3IpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBwcm9taXNlID0gZGlzcGF0Y2hSZXF1ZXN0KG5ld0NvbmZpZyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG4gIHdoaWxlIChyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKSwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWQsXG4gICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXG4gICAgcnVuV2hlbjogb3B0aW9ucyA/IG9wdGlvbnMucnVuV2hlbiA6IG51bGxcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvQ2FuY2VsJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNpZ25hbCAmJiBjb25maWcuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICB0aHJvdyBuZXcgQ2FuY2VsKCdjYW5jZWxlZCcpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICBjb25maWcsXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgIGNvbmZpZyxcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgc3RhdHVzOiB0aGlzLnJlc3BvbnNlICYmIHRoaXMucmVzcG9uc2Uuc3RhdHVzID8gdGhpcy5yZXNwb25zZS5zdGF0dXMgOiBudWxsXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UodGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURpcmVjdEtleXMocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIG1lcmdlTWFwID0ge1xuICAgICd1cmwnOiB2YWx1ZUZyb21Db25maWcyLFxuICAgICdtZXRob2QnOiB2YWx1ZUZyb21Db25maWcyLFxuICAgICdkYXRhJzogdmFsdWVGcm9tQ29uZmlnMixcbiAgICAnYmFzZVVSTCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RyYW5zZm9ybVJlcXVlc3QnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0cmFuc2Zvcm1SZXNwb25zZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3BhcmFtc1NlcmlhbGl6ZXInOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0aW1lb3V0JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndGltZW91dE1lc3NhZ2UnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd3aXRoQ3JlZGVudGlhbHMnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdhZGFwdGVyJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAncmVzcG9uc2VUeXBlJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAneHNyZkNvb2tpZU5hbWUnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd4c3JmSGVhZGVyTmFtZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ29uVXBsb2FkUHJvZ3Jlc3MnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdvbkRvd25sb2FkUHJvZ3Jlc3MnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdkZWNvbXByZXNzJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnbWF4Q29udGVudExlbmd0aCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ21heEJvZHlMZW5ndGgnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0cmFuc3BvcnQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdodHRwQWdlbnQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdodHRwc0FnZW50JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnY2FuY2VsVG9rZW4nOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdzb2NrZXRQYXRoJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAncmVzcG9uc2VFbmNvZGluZyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3ZhbGlkYXRlU3RhdHVzJzogbWVyZ2VEaXJlY3RLZXlzXG4gIH07XG5cbiAgdXRpbHMuZm9yRWFjaChPYmplY3Qua2V5cyhjb25maWcxKS5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIHZhciBtZXJnZSA9IG1lcmdlTWFwW3Byb3BdIHx8IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgdmFyIGNvbmZpZ1ZhbHVlID0gbWVyZ2UocHJvcCk7XG4gICAgKHV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZ1ZhbHVlKSAmJiBtZXJnZSAhPT0gbWVyZ2VEaXJlY3RLZXlzKSB8fCAoY29uZmlnW3Byb3BdID0gY29uZmlnVmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgdmFyIGNvbnRleHQgPSB0aGlzIHx8IGRlZmF1bHRzO1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbi5jYWxsKGNvbnRleHQsIGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvZW5oYW5jZUVycm9yJyk7XG52YXIgdHJhbnNpdGlvbmFsRGVmYXVsdHMgPSByZXF1aXJlKCcuL3RyYW5zaXRpb25hbCcpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5U2FmZWx5KHJhd1ZhbHVlLCBwYXJzZXIsIGVuY29kZXIpIHtcbiAgaWYgKHV0aWxzLmlzU3RyaW5nKHJhd1ZhbHVlKSkge1xuICAgIHRyeSB7XG4gICAgICAocGFyc2VyIHx8IEpTT04ucGFyc2UpKHJhd1ZhbHVlKTtcbiAgICAgIHJldHVybiB1dGlscy50cmltKHJhd1ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lICE9PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChlbmNvZGVyIHx8IEpTT04uc3RyaW5naWZ5KShyYXdWYWx1ZSk7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcblxuICB0cmFuc2l0aW9uYWw6IHRyYW5zaXRpb25hbERlZmF1bHRzLFxuXG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkgfHwgKGhlYWRlcnMgJiYgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJykpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeVNhZmVseShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIHZhciB0cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgdmFyIHNpbGVudEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5zaWxlbnRKU09OUGFyc2luZztcbiAgICB2YXIgZm9yY2VkSlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLmZvcmNlZEpTT05QYXJzaW5nO1xuICAgIHZhciBzdHJpY3RKU09OUGFyc2luZyA9ICFzaWxlbnRKU09OUGFyc2luZyAmJiB0aGlzLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nO1xuXG4gICAgaWYgKHN0cmljdEpTT05QYXJzaW5nIHx8IChmb3JjZWRKU09OUGFyc2luZyAmJiB1dGlscy5pc1N0cmluZyhkYXRhKSAmJiBkYXRhLmxlbmd0aCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcpIHtcbiAgICAgICAgICBpZiAoZS5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBlbmhhbmNlRXJyb3IoZSwgdGhpcywgJ0VfSlNPTl9QQVJTRScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9LFxuXG4gIGhlYWRlcnM6IHtcbiAgICBjb21tb246IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgIH1cbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2Vcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4yNi4xXCJcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGQrXFwtLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHBheWxvYWQpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWRVJTSU9OID0gcmVxdWlyZSgnLi4vZW52L2RhdGEnKS52ZXJzaW9uO1xuXG52YXIgdmFsaWRhdG9ycyA9IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuWydvYmplY3QnLCAnYm9vbGVhbicsICdudW1iZXInLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ3N5bWJvbCddLmZvckVhY2goZnVuY3Rpb24odHlwZSwgaSkge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxudmFyIGRlcHJlY2F0ZWRXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIFRyYW5zaXRpb25hbCBvcHRpb24gdmFsaWRhdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xudmFsaWRhdG9ycy50cmFuc2l0aW9uYWwgPSBmdW5jdGlvbiB0cmFuc2l0aW9uYWwodmFsaWRhdG9yLCB2ZXJzaW9uLCBtZXNzYWdlKSB7XG4gIGZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2Uob3B0LCBkZXNjKSB7XG4gICAgcmV0dXJuICdbQXhpb3MgdicgKyBWRVJTSU9OICsgJ10gVHJhbnNpdGlvbmFsIG9wdGlvbiBcXCcnICsgb3B0ICsgJ1xcJycgKyBkZXNjICsgKG1lc3NhZ2UgPyAnLiAnICsgbWVzc2FnZSA6ICcnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3B0LCBvcHRzKSB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSkpO1xuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uICYmICFkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSkge1xuICAgICAgZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0gPSB0cnVlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgZm9ybWF0TWVzc2FnZShcbiAgICAgICAgICBvcHQsXG4gICAgICAgICAgJyBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIHYnICsgdmVyc2lvbiArICcgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmVhciBmdXR1cmUnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvciA/IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRzKSA6IHRydWU7XG4gIH07XG59O1xuXG4vKipcbiAqIEFzc2VydCBvYmplY3QncyBwcm9wZXJ0aWVzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBhbGxvd1Vua25vd25cbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRPcHRpb25zKG9wdGlvbnMsIHNjaGVtYSwgYWxsb3dVbmtub3duKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICB2YXIgb3B0ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsaWRhdG9yID0gc2NoZW1hW29wdF07XG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhc3NlcnRPcHRpb25zOiBhc3NlcnRPcHRpb25zLFxuICB2YWxpZGF0b3JzOiB2YWxpZGF0b3JzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAoaXNBcnJheUJ1ZmZlcih2YWwuYnVmZmVyKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IFVSTFNlYXJjaFBhcmFtc10nO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIudHJpbSA/IHN0ci50cmltKCkgOiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqIEByZXR1cm4ge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5mdW5jdGlvbiBzdHJpcEJPTShjb250ZW50KSB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NXG59O1xuIiwiLyoqXHJcbiAqIEBhdXRob3IgICAgTGFiczY0IDxuZXRsaWNlbnNpbmdAbGFiczY0LmNvbT5cclxuICogQGxpY2Vuc2UgICBBcGFjaGUtMi4wXHJcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW9cclxuICogQGNvcHlyaWdodCAyMDE3IExhYnM2NCBOZXRMaWNlbnNpbmdcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBCQVNJQ19BVVRIRU5USUNBVElPTjogJ0JBU0lDX0FVVEgnLFxyXG4gICAgQVBJS0VZX0lERU5USUZJQ0FUSU9OOiAnQVBJS0VZJyxcclxuICAgIEFOT05ZTU9VU19JREVOVElGSUNBVElPTjogJ0FOT05ZTU9VUycsXHJcblxyXG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcclxuICAgIE5VTUJFUjogJ251bWJlcicsXHJcbiAgICBOQU1FOiAnbmFtZScsXHJcbiAgICBWRVJTSU9OOiAndmVyc2lvbicsXHJcbiAgICBERUxFVEVEOiAnZGVsZXRlZCcsXHJcbiAgICBDQVNDQURFOiAnZm9yY2VDYXNjYWRlJyxcclxuICAgIFBSSUNFOiAncHJpY2UnLFxyXG4gICAgRElTQ09VTlQ6ICdkaXNjb3VudCcsXHJcbiAgICBDVVJSRU5DWTogJ2N1cnJlbmN5JyxcclxuICAgIElOX1VTRTogJ2luVXNlJyxcclxuICAgIEZJTFRFUjogJ2ZpbHRlcicsXHJcbiAgICBCQVNFX1VSTDogJ2Jhc2VVcmwnLFxyXG4gICAgVVNFUk5BTUU6ICd1c2VybmFtZScsXHJcbiAgICBQQVNTV09SRDogJ3Bhc3N3b3JkJyxcclxuICAgIFNFQ1VSSVRZX01PREU6ICdzZWN1cml0eU1vZGUnLFxyXG5cclxuICAgIExpY2Vuc2luZ01vZGVsOiB7XHJcbiAgICAgICAgVkFMSUQ6ICd2YWxpZCcsXHJcbiAgICAgICAgVHJ5QW5kQnV5OiB7XHJcbiAgICAgICAgICAgIE5BTUU6ICdUcnlBbmRCdXknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVudGFsOiB7XHJcbiAgICAgICAgICAgIE5BTUU6ICdSZW50YWwnLFxyXG4gICAgICAgICAgICBSRURfVEhSRVNIT0xEOiAncmVkVGhyZXNob2xkJyxcclxuICAgICAgICAgICAgWUVMTE9XX1RIUkVTSE9MRDogJ3llbGxvd1RocmVzaG9sZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBTdWJzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgTkFNRTogJ1N1YnNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBGbG9hdGluZzoge1xyXG4gICAgICAgICAgICBOQU1FOiAnRmxvYXRpbmcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTXVsdGlGZWF0dXJlOiB7XHJcbiAgICAgICAgICAgIE5BTUU6ICdNdWx0aUZlYXR1cmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUGF5UGVyVXNlOiB7XHJcbiAgICAgICAgICAgIE5BTUU6ICdQYXlQZXJVc2UnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUHJpY2luZ1RhYmxlOiB7XHJcbiAgICAgICAgICAgIE5BTUU6ICdQcmljaW5nVGFibGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUXVvdGE6IHtcclxuICAgICAgICAgICAgTkFNRTogJ1F1b3RhJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIE5vZGVMb2NrZWQ6IHtcclxuICAgICAgICAgICAgTkFNRTogJ05vZGVMb2NrZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIFZlbmRvcjoge1xyXG4gICAgICAgIFZFTkRPUl9OVU1CRVI6ICd2ZW5kb3JOdW1iZXInLFxyXG4gICAgICAgIFZFTkRPUl9UWVBFOiAnVmVuZG9yJyxcclxuICAgIH0sXHJcblxyXG4gICAgUHJvZHVjdDoge1xyXG4gICAgICAgIEVORFBPSU5UX1BBVEg6ICdwcm9kdWN0JyxcclxuICAgICAgICBQUk9EVUNUX05VTUJFUjogJ3Byb2R1Y3ROdW1iZXInLFxyXG4gICAgICAgIExJQ0VOU0VFX0FVVE9fQ1JFQVRFOiAnbGljZW5zZWVBdXRvQ3JlYXRlJyxcclxuICAgICAgICBERVNDUklQVElPTjogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICBMSUNFTlNJTkdfSU5GTzogJ2xpY2Vuc2luZ0luZm8nLFxyXG4gICAgICAgIERJU0NPVU5UUzogJ2Rpc2NvdW50cycsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgdXNlIFByb2R1Y3RNb2R1bGUuUFJPUF9MSUNFTlNFRV9TRUNSRVRfTU9ERSBpbnN0ZWFkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUFJPUF9MSUNFTlNFRV9TRUNSRVRfTU9ERTogJ2xpY2Vuc2VlU2VjcmV0TW9kZScsXHJcbiAgICAgICAgUFJPUF9WQVRfTU9ERTogJ3ZhdE1vZGUnLFxyXG5cclxuICAgICAgICBEaXNjb3VudDoge1xyXG4gICAgICAgICAgICBUT1RBTF9QUklDRTogJ3RvdGFsUHJpY2UnLFxyXG4gICAgICAgICAgICBBTU9VTlRfRklYOiAnYW1vdW50Rml4JyxcclxuICAgICAgICAgICAgQU1PVU5UX1BFUkNFTlQ6ICdhbW91bnRQZXJjZW50JyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBMaWNlbnNlZVNlY3JldE1vZGU6IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBkZXByZWNhdGVkIERJU0FCTEVEIG1vZGUgaXMgZGVwcmVjYXRlZFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgRElTQUJMRUQ6ICdESVNBQkxFRCcsXHJcbiAgICAgICAgICAgIFBSRURFRklORUQ6ICdQUkVERUZJTkVEJyxcclxuICAgICAgICAgICAgQ0xJRU5UOiAnQ0xJRU5UJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBQcm9kdWN0TW9kdWxlOiB7XHJcbiAgICAgICAgRU5EUE9JTlRfUEFUSDogJ3Byb2R1Y3Rtb2R1bGUnLFxyXG4gICAgICAgIFBST0RVQ1RfTU9EVUxFX05VTUJFUjogJ3Byb2R1Y3RNb2R1bGVOdW1iZXInLFxyXG4gICAgICAgIFBST0RVQ1RfTU9EVUxFX05BTUU6ICdwcm9kdWN0TW9kdWxlTmFtZScsXHJcbiAgICAgICAgTElDRU5TSU5HX01PREVMOiAnbGljZW5zaW5nTW9kZWwnLFxyXG4gICAgICAgIFBST1BfTElDRU5TRUVfU0VDUkVUX01PREU6ICdsaWNlbnNlZVNlY3JldE1vZGUnLFxyXG4gICAgfSxcclxuXHJcbiAgICBMaWNlbnNlVGVtcGxhdGU6IHtcclxuICAgICAgICBFTkRQT0lOVF9QQVRIOiAnbGljZW5zZXRlbXBsYXRlJyxcclxuICAgICAgICBMSUNFTlNFX1RFTVBMQVRFX05VTUJFUjogJ2xpY2Vuc2VUZW1wbGF0ZU51bWJlcicsXHJcbiAgICAgICAgTElDRU5TRV9UWVBFOiAnbGljZW5zZVR5cGUnLFxyXG4gICAgICAgIEFVVE9NQVRJQzogJ2F1dG9tYXRpYycsXHJcbiAgICAgICAgSElEREVOOiAnaGlkZGVuJyxcclxuICAgICAgICBISURFX0xJQ0VOU0VTOiAnaGlkZUxpY2Vuc2VzJyxcclxuICAgICAgICBQUk9QX0xJQ0VOU0VFX1NFQ1JFVDogJ2xpY2Vuc2VlU2VjcmV0JyxcclxuICAgICAgICBMaWNlbnNlVHlwZToge1xyXG4gICAgICAgICAgICBGRUFUVVJFOiAnRkVBVFVSRScsXHJcbiAgICAgICAgICAgIFRJTUVWT0xVTUU6ICdUSU1FVk9MVU1FJyxcclxuICAgICAgICAgICAgRkxPQVRJTkc6ICdGTE9BVElORycsXHJcbiAgICAgICAgICAgIFFVQU5USVRZOiAnUVVBTlRJVFknLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIFRva2VuOiB7XHJcbiAgICAgICAgRU5EUE9JTlRfUEFUSDogJ3Rva2VuJyxcclxuICAgICAgICBFWFBJUkFUSU9OX1RJTUU6ICdleHBpcmF0aW9uVGltZScsXHJcbiAgICAgICAgVE9LRU5fVFlQRTogJ3Rva2VuVHlwZScsXHJcbiAgICAgICAgQVBJX0tFWTogJ2FwaUtleScsXHJcbiAgICAgICAgVE9LRU5fUFJPUF9FTUFJTDogJ2VtYWlsJyxcclxuICAgICAgICBUT0tFTl9QUk9QX1ZFTkRPUk5VTUJFUjogJ3ZlbmRvck51bWJlcicsXHJcbiAgICAgICAgVE9LRU5fUFJPUF9TSE9QX1VSTDogJ3Nob3BVUkwnLFxyXG4gICAgICAgIFR5cGU6IHtcclxuICAgICAgICAgICAgREVGQVVMVDogJ0RFRkFVTFQnLFxyXG4gICAgICAgICAgICBTSE9QOiAnU0hPUCcsXHJcbiAgICAgICAgICAgIEFQSUtFWTogJ0FQSUtFWScsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgVHJhbnNhY3Rpb246IHtcclxuICAgICAgICBFTkRQT0lOVF9QQVRIOiAndHJhbnNhY3Rpb24nLFxyXG4gICAgICAgIFRSQU5TQUNUSU9OX05VTUJFUjogJ3RyYW5zYWN0aW9uTnVtYmVyJyxcclxuICAgICAgICBHUkFORF9UT1RBTDogJ2dyYW5kVG90YWwnLFxyXG4gICAgICAgIFNUQVRVUzogJ3N0YXR1cycsXHJcbiAgICAgICAgU09VUkNFOiAnc291cmNlJyxcclxuICAgICAgICBEQVRFX0NSRUFURUQ6ICdkYXRlY3JlYXRlZCcsXHJcbiAgICAgICAgREFURV9DTE9TRUQ6ICdkYXRlY2xvc2VkJyxcclxuICAgICAgICBWQVQ6ICd2YXQnLFxyXG4gICAgICAgIFZBVF9NT0RFOiAndmF0TW9kZScsXHJcbiAgICAgICAgTElDRU5TRV9UUkFOU0FDVElPTl9KT0lOOiAnbGljZW5zZVRyYW5zYWN0aW9uSm9pbicsXHJcbiAgICAgICAgU09VUkNFX1NIT1BfT05MWTogJ3Nob3BPbmx5JyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFN0YXR1czoge1xyXG4gICAgICAgICAgICBDQU5DRUxMRUQ6ICdDQU5DRUxMRUQnLFxyXG4gICAgICAgICAgICBDTE9TRUQ6ICdDTE9TRUQnLFxyXG4gICAgICAgICAgICBQRU5ESU5HOiAnUEVORElORycsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgTGljZW5zZWU6IHtcclxuICAgICAgICBFTkRQT0lOVF9QQVRIOiAnbGljZW5zZWUnLFxyXG4gICAgICAgIEVORFBPSU5UX1BBVEhfVkFMSURBVEU6ICd2YWxpZGF0ZScsXHJcbiAgICAgICAgRU5EUE9JTlRfUEFUSF9UUkFOU0ZFUjogJ3RyYW5zZmVyJyxcclxuICAgICAgICBMSUNFTlNFRV9OVU1CRVI6ICdsaWNlbnNlZU51bWJlcicsXHJcbiAgICAgICAgU09VUkNFX0xJQ0VOU0VFX05VTUJFUjogJ3NvdXJjZUxpY2Vuc2VlTnVtYmVyJyxcclxuICAgICAgICBQUk9QX0xJQ0VOU0VFX05BTUU6ICdsaWNlbnNlZU5hbWUnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBkZXByZWNhdGVkIHVzZSBMaWNlbnNlLlBST1BfTElDRU5TRUVfU0VDUkVUXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUFJPUF9MSUNFTlNFRV9TRUNSRVQ6ICdsaWNlbnNlZVNlY3JldCcsXHJcbiAgICAgICAgUFJPUF9NQVJLRURfRk9SX1RSQU5TRkVSOiAnbWFya2VkRm9yVHJhbnNmZXInLFxyXG4gICAgfSxcclxuXHJcbiAgICBMaWNlbnNlOiB7XHJcbiAgICAgICAgRU5EUE9JTlRfUEFUSDogJ2xpY2Vuc2UnLFxyXG4gICAgICAgIExJQ0VOU0VfTlVNQkVSOiAnbGljZW5zZU51bWJlcicsXHJcbiAgICAgICAgSElEREVOOiAnaGlkZGVuJyxcclxuICAgICAgICBQUk9QX0xJQ0VOU0VFX1NFQ1JFVDogJ2xpY2Vuc2VlU2VjcmV0JyxcclxuICAgIH0sXHJcblxyXG4gICAgUGF5bWVudE1ldGhvZDoge1xyXG4gICAgICAgIEVORFBPSU5UX1BBVEg6ICdwYXltZW50bWV0aG9kJyxcclxuICAgIH0sXHJcblxyXG4gICAgVXRpbGl0eToge1xyXG4gICAgICAgIEVORFBPSU5UX1BBVEg6ICd1dGlsaXR5JyxcclxuICAgICAgICBFTkRQT0lOVF9QQVRIX0xJQ0VOU0VfVFlQRVM6ICdsaWNlbnNlVHlwZXMnLFxyXG4gICAgICAgIEVORFBPSU5UX1BBVEhfTElDRU5TSU5HX01PREVMUzogJ2xpY2Vuc2luZ01vZGVscycsXHJcbiAgICAgICAgRU5EUE9JTlRfUEFUSF9DT1VOVFJJRVM6ICdjb3VudHJpZXMnLFxyXG4gICAgICAgIExJQ0VOU0lOR19NT0RFTF9QUk9QRVJUSUVTOiAnTGljZW5zaW5nTW9kZWxQcm9wZXJ0aWVzJyxcclxuICAgICAgICBMSUNFTlNFX1RZUEU6ICdMaWNlbnNlVHlwZScsXHJcbiAgICB9LFxyXG5cclxuICAgIEFQSUtFWToge1xyXG4gICAgICAgIFJPTEVfQVBJS0VZX0xJQ0VOU0VFOiAnUk9MRV9BUElLRVlfTElDRU5TRUUnLFxyXG4gICAgICAgIFJPTEVfQVBJS0VZX0FOQUxZVElDUzogJ1JPTEVfQVBJS0VZX0FOQUxZVElDUycsXHJcbiAgICAgICAgUk9MRV9BUElLRVlfT1BFUkFUSU9OOiAnUk9MRV9BUElLRVlfT1BFUkFUSU9OJyxcclxuICAgICAgICBST0xFX0FQSUtFWV9NQUlOVEVOQU5DRTogJ1JPTEVfQVBJS0VZX01BSU5URU5BTkNFJyxcclxuICAgICAgICBST0xFX0FQSUtFWV9BRE1JTjogJ1JPTEVfQVBJS0VZX0FETUlOJyxcclxuICAgIH0sXHJcblxyXG4gICAgVmFsaWRhdGlvbjoge1xyXG4gICAgICAgIEZPUl9PRkZMSU5FX1VTRTogJ2Zvck9mZmxpbmVVc2UnLFxyXG4gICAgfSxcclxuXHJcbiAgICBXYXJuaW5nTGV2ZWw6IHtcclxuICAgICAgICBHUkVFTjogJ0dSRUVOJyxcclxuICAgICAgICBZRUxMT1c6ICdZRUxMT1cnLFxyXG4gICAgICAgIFJFRDogJ1JFRCcsXHJcbiAgICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgaXRlbVRvT2JqZWN0IGZyb20gJy4vaXRlbVRvT2JqZWN0JztcclxuaW1wb3J0IENvdW50cnkgZnJvbSAnLi4vZW50aXRpZXMvQ291bnRyeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaXRlbSkgPT4gbmV3IENvdW50cnkoaXRlbVRvT2JqZWN0KGl0ZW0pKTtcclxuIiwiaW1wb3J0IGl0ZW1Ub09iamVjdCBmcm9tICcuL2l0ZW1Ub09iamVjdCc7XHJcbmltcG9ydCBMaWNlbnNlIGZyb20gJy4uL2VudGl0aWVzL0xpY2Vuc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGl0ZW0pID0+IG5ldyBMaWNlbnNlKGl0ZW1Ub09iamVjdChpdGVtKSk7XHJcbiIsImltcG9ydCBpdGVtVG9PYmplY3QgZnJvbSAnLi9pdGVtVG9PYmplY3QnO1xyXG5pbXBvcnQgTGljZW5zZVRlbXBsYXRlIGZyb20gJy4uL2VudGl0aWVzL0xpY2Vuc2VUZW1wbGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaXRlbSkgPT4gbmV3IExpY2Vuc2VUZW1wbGF0ZShpdGVtVG9PYmplY3QoaXRlbSkpO1xyXG4iLCJpbXBvcnQgaXRlbVRvT2JqZWN0IGZyb20gJy4vaXRlbVRvT2JqZWN0JztcclxuaW1wb3J0IExpY2Vuc2VlIGZyb20gJy4uL2VudGl0aWVzL0xpY2Vuc2VlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpdGVtKSA9PiBuZXcgTGljZW5zZWUoaXRlbVRvT2JqZWN0KGl0ZW0pKTtcclxuIiwiY29uc3QgaXRlbVRvT2JqZWN0ID0gKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG9iamVjdCA9IHt9O1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgbGlzdCB9ID0gaXRlbTtcclxuXHJcbiAgICBpZiAocHJvcGVydHkgJiYgQXJyYXkuaXNBcnJheShwcm9wZXJ0eSkpIHtcclxuICAgICAgICBwcm9wZXJ0eS5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IHA7XHJcbiAgICAgICAgICAgIGlmIChuYW1lKSBvYmplY3RbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGlzdCAmJiBBcnJheS5pc0FycmF5KGxpc3QpKSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbDtcclxuICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdFtuYW1lXSA9IG9iamVjdFtuYW1lXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIG9iamVjdFtuYW1lXS5wdXNoKGl0ZW1Ub09iamVjdChsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXRlbVRvT2JqZWN0O1xyXG4iLCJpbXBvcnQgaXRlbVRvT2JqZWN0IGZyb20gJy4vaXRlbVRvT2JqZWN0JztcclxuaW1wb3J0IFBheW1lbnRNZXRob2QgZnJvbSAnLi4vZW50aXRpZXMvUGF5bWVudE1ldGhvZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaXRlbSkgPT4gbmV3IFBheW1lbnRNZXRob2QoaXRlbVRvT2JqZWN0KGl0ZW0pKTtcclxuIiwiaW1wb3J0IGl0ZW1Ub09iamVjdCBmcm9tICcuL2l0ZW1Ub09iamVjdCc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL2VudGl0aWVzL1Byb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG9iamVjdCA9IGl0ZW1Ub09iamVjdChpdGVtKTtcclxuXHJcbiAgICBjb25zdCBkaXNjb3VudHMgPSBvYmplY3QuZGlzY291bnQ7XHJcblxyXG4gICAgZGVsZXRlIG9iamVjdC5kaXNjb3VudDtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3Qob2JqZWN0KTtcclxuICAgIHByb2R1Y3Quc2V0UHJvZHVjdERpc2NvdW50cyhkaXNjb3VudHMpO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0O1xyXG59O1xyXG4iLCJpbXBvcnQgaXRlbVRvT2JqZWN0IGZyb20gJy4vaXRlbVRvT2JqZWN0JztcclxuaW1wb3J0IFByb2R1Y3RNb2R1bGUgZnJvbSAnLi4vZW50aXRpZXMvUHJvZHVjdE1vZHVsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaXRlbSkgPT4gbmV3IFByb2R1Y3RNb2R1bGUoaXRlbVRvT2JqZWN0KGl0ZW0pKTtcclxuIiwiaW1wb3J0IGl0ZW1Ub09iamVjdCBmcm9tICcuL2l0ZW1Ub09iamVjdCc7XHJcbmltcG9ydCBUb2tlbiBmcm9tICcuLi9lbnRpdGllcy9Ub2tlbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaXRlbSkgPT4gbmV3IFRva2VuKGl0ZW1Ub09iamVjdChpdGVtKSk7XHJcbiIsImltcG9ydCBpdGVtVG9PYmplY3QgZnJvbSAnLi9pdGVtVG9PYmplY3QnO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSAnLi4vZW50aXRpZXMvVHJhbnNhY3Rpb24nO1xyXG5pbXBvcnQgTGljZW5zZSBmcm9tICcuLi9lbnRpdGllcy9MaWNlbnNlJztcclxuaW1wb3J0IExpY2Vuc2VUcmFuc2FjdGlvbkpvaW4gZnJvbSAnLi4vZW50aXRpZXMvTGljZW5zZVRyYW5zYWN0aW9uSm9pbic7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBvYmplY3QgPSBpdGVtVG9PYmplY3QoaXRlbSk7XHJcblxyXG4gICAgY29uc3QgeyBsaWNlbnNlVHJhbnNhY3Rpb25Kb2luIH0gPSBvYmplY3Q7XHJcblxyXG4gICAgZGVsZXRlIG9iamVjdC5saWNlbnNlVHJhbnNhY3Rpb25Kb2luO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKG9iamVjdCk7XHJcblxyXG4gICAgaWYgKGxpY2Vuc2VUcmFuc2FjdGlvbkpvaW4pIHtcclxuICAgICAgICBjb25zdCBqb2lucyA9IFtdO1xyXG5cclxuICAgICAgICBsaWNlbnNlVHJhbnNhY3Rpb25Kb2luLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgam9pbiA9IG5ldyBMaWNlbnNlVHJhbnNhY3Rpb25Kb2luKCk7XHJcbiAgICAgICAgICAgIGpvaW4uc2V0TGljZW5zZShuZXcgTGljZW5zZSh7IG51bWJlcjogdltDb25zdGFudHMuTGljZW5zZS5MSUNFTlNFX05VTUJFUl0gfSkpO1xyXG4gICAgICAgICAgICBqb2luLnNldFRyYW5zYWN0aW9uKG5ldyBUcmFuc2FjdGlvbih7IG51bWJlcjogdltDb25zdGFudHMuVHJhbnNhY3Rpb24uVFJBTlNBQ1RJT05fTlVNQkVSXSB9KSk7XHJcblxyXG4gICAgICAgICAgICBqb2lucy5wdXNoKGpvaW4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0cmFuc2FjdGlvbi5zZXRMaWNlbnNlVHJhbnNhY3Rpb25Kb2lucyhqb2lucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciAgICBMYWJzNjQgPG5ldGxpY2Vuc2luZ0BsYWJzNjQuY29tPlxyXG4gKiBAbGljZW5zZSAgIEFwYWNoZS0yLjBcclxuICogQGxpbmsgICAgICBodHRwczovL25ldGxpY2Vuc2luZy5pb1xyXG4gKiBAY29weXJpZ2h0IDIwMTcgTGFiczY0IE5ldExpY2Vuc2luZ1xyXG4gKi9cclxuXHJcbmltcG9ydCBDaGVja1V0aWxzIGZyb20gJy4uL3V0aWwvQ2hlY2tVdGlscyc7XHJcbmltcG9ydCBDYXN0c1V0aWxzIGZyb20gJy4uL3V0aWwvQ2FzdHNVdGlscyc7XHJcblxyXG4vKipcclxuICogVGhlIGVudGl0eSBwcm9wZXJ0aWVzLlxyXG4gKiBAdHlwZSB7e319XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5jb25zdCBwcm9wZXJ0aWVzTWFwID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBMaXN0IG9mIHByb3BlcnRpZXMgdGhhdCB3YXMgZGVmaW5lZFxyXG4gKiBAdHlwZSB7e319XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5cclxuY29uc3QgZGVmaW5lZE1hcCA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4vKipcclxuICogTGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgbmVlZCBiZSBjYXN0c1xyXG4gKiBAdHlwZSB7e319XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5jb25zdCBjYXN0c01hcCA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlRW50aXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgcHJvcGVydGllcywgY2FzdHMgfSkge1xyXG4gICAgICAgIHByb3BlcnRpZXNNYXAuc2V0KHRoaXMsIHt9KTtcclxuICAgICAgICBkZWZpbmVkTWFwLnNldCh0aGlzLCB7fSk7XHJcbiAgICAgICAgY2FzdHNNYXAuc2V0KHRoaXMsIGNhc3RzIHx8IFtdKTtcclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIGdpdmVuIHByb3BlcnR5IG9uIHRoZSBlbnRpdHkuXHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge0Jhc2VFbnRpdHl9XHJcbiAgICAgKi9cclxuICAgIHNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIC8vIGlmIHByb3BlcnR5IG5hbWUgaGFzIGJhZCBuYXRpdmUgdHlwZVxyXG4gICAgICAgIGlmICghQ2hlY2tVdGlscy5pc1ZhbGlkKHByb3BlcnR5KSB8fCB0eXBlb2YgcHJvcGVydHkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEJhZCBwcm9wZXJ0eSBuYW1lOiR7cHJvcGVydHl9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYXN0ZWRWYWx1ZSA9IHRoaXMuY2FzdChwcm9wZXJ0eSwgdmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBkZWZpbmUgdG8gcHJvcGVydHlcclxuICAgICAgICB0aGlzLmRlZmluZShwcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgIC8vIHNhdmUgcHJvcGVydHkgdG8gcHJvcGVydGllc01hcFxyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzTWFwLmdldCh0aGlzKTtcclxuICAgICAgICBwcm9wZXJ0aWVzW3Byb3BlcnR5XSA9IGNhc3RlZFZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsaWFzIGZvciBzZXRQcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHtCYXNlRW50aXR5fVxyXG4gICAgICovXHJcbiAgICBhZGRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBlbnRpdHkgcHJvcGVydGllcy5cclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyB7QmFzZUVudGl0eX1cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQcm9wZXJ0aWVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwocHJvcGVydGllcywga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksIHByb3BlcnRpZXNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB3ZSBoYXMgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBoYXNQcm9wZXJ0eShwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvcGVydGllc01hcC5nZXQodGhpcyksIHByb3BlcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBwcm9wZXJ0eSBmcm9tIHRoZSBlbnRpdHkuXHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBkZWZcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBnZXRQcm9wZXJ0eShwcm9wZXJ0eSwgZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wZXJ0aWVzTWFwLmdldCh0aGlzKSwgcHJvcGVydHkpXHJcbiAgICAgICAgICAgID8gcHJvcGVydGllc01hcC5nZXQodGhpcylbcHJvcGVydHldXHJcbiAgICAgICAgICAgIDogZGVmO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCBvZiB0aGUgY3VycmVudCBwcm9wZXJ0aWVzIG9uIHRoZSBlbnRpdHkuXHJcbiAgICAgKi9cclxuICAgIGdldFByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJvcGVydGllc01hcC5nZXQodGhpcykgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHByb3BlcnR5XHJcbiAgICAgKiBAcmV0dXJucyB7QmFzZUVudGl0eX1cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlUHJvcGVydHkocHJvcGVydHkpIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydGllc01hcC5nZXQodGhpcyk7XHJcbiAgICAgICAgZGVsZXRlIHByb3BlcnRpZXNbcHJvcGVydHldO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRGVmaW5lKHByb3BlcnR5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydGllc1xyXG4gICAgICovXHJcbiAgICByZW1vdmVQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzRm9yUmVtb3ZlID0gcHJvcGVydGllcyB8fCBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzTWFwLmdldCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXNGb3JSZW1vdmUuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzdChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoIWNhc3RzTWFwLmdldCh0aGlzKVtwcm9wZXJ0eV0pIHJldHVybiB2YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIENhc3RzVXRpbHMoY2FzdHNNYXAuZ2V0KHRoaXMpW3Byb3BlcnR5XSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgcHJvcGVydHkgaGFzIGRlZmluZWRcclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBoYXNEZWZpbmUocHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihkZWZpbmVkTWFwLmdldCh0aGlzKVtwcm9wZXJ0eV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHByb3BlcnR5IGdldHRlciBhbmQgc2V0dGVyXHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydHlcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgZGVmaW5lKHByb3BlcnR5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVmaW5lKHByb3BlcnR5KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIUNoZWNrVXRpbHMuaXNWYWxpZChwcm9wZXJ0eSkgfHwgdHlwZW9mIHByb3BlcnR5ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBCYWQgcHJvcGVydHkgbmFtZToke3Byb3BlcnR5fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGRlbGV0ZSBwcm9wZXJ0eVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzW3Byb3BlcnR5XTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvcnMgPSB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ2V0UHJvcGVydHkocHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmaW5lZCA9IGRlZmluZWRNYXAuZ2V0KHRoaXMpO1xyXG4gICAgICAgIGRlZmluZWRbcHJvcGVydHldID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5LCBkZXNjcmlwdG9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgcHJvcGVydHkgZ2V0dGVyIGFuZCBzZXR0ZXJcclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICByZW1vdmVEZWZpbmUocHJvcGVydHkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzRGVmaW5lKHByb3BlcnR5KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkZWZpbmVkID0gZGVmaW5lZE1hcC5nZXQodGhpcyk7XHJcbiAgICAgICAgZGVsZXRlIGRlZmluZWRbcHJvcGVydHldO1xyXG5cclxuICAgICAgICBkZWxldGUgdGhpc1twcm9wZXJ0eV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgcHJvcGVydGllcyBtYXBcclxuICAgICAqL1xyXG4gICAgYXNQcm9wZXJ0aWVzTWFwKCkge1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXMoKTtcclxuICAgICAgICBjb25zdCBjdXN0b21Qcm9wZXJ0aWVzID0ge307XHJcblxyXG4gICAgICAgIGNvbnN0IGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWhhcy5jYWxsKHRoaXMsIGtleSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXNba2V5XSA9IHRoaXNba2V5XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgLi4uY3VzdG9tUHJvcGVydGllcywgLi4ucHJvcGVydGllcyB9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5cclxuaW1wb3J0IEJhc2VFbnRpdHkgZnJvbSAnLi9CYXNlRW50aXR5JztcclxuXHJcbi8qKlxyXG4gKiBDb3VudHJ5IGVudGl0eSB1c2VkIGludGVybmFsbHkgYnkgTmV0TGljZW5zaW5nLlxyXG4gKlxyXG4gKiBQcm9wZXJ0aWVzIHZpc2libGUgdmlhIE5ldExpY2Vuc2luZyAgQVBJOlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY29kZSAtIFVuaXF1ZSBjb2RlIG9mIGNvdW50cnkuXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBuYW1lIC0gVW5pcXVlIG5hbWUgb2YgY291bnRyeVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdmF0UGVyY2VudCAtIENvdW50cnkgdmF0LlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaXNFdSAtIGlzIGNvdW50cnkgaW4gRVUuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudHJ5IGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAvLyBUaGUgYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSBjYXN0IHRvIG5hdGl2ZSB0eXBlcy5cclxuICAgICAgICAgICAgY2FzdHM6IHtcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICB2YXRQZXJjZW50OiAnaW50JyxcclxuICAgICAgICAgICAgICAgIGlzRXU6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2RlKGNvZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnY29kZScsIGNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvZGUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2NvZGUnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnbmFtZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmF0UGVyY2VudCh2YXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgndmF0UGVyY2VudCcsIHZhdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmF0UGVyY2VudChkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgndmF0UGVyY2VudCcsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXNFdShpc0V1KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ2lzRXUnLCBpc0V1KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJc0V1KGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdpc0V1JywgZGVmKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciAgICBMYWJzNjQgPG5ldGxpY2Vuc2luZ0BsYWJzNjQuY29tPlxyXG4gKiBAbGljZW5zZSAgIEFwYWNoZS0yLjBcclxuICogQGxpbmsgICAgICBodHRwczovL25ldGxpY2Vuc2luZy5pb1xyXG4gKiBAY29weXJpZ2h0IDIwMTcgTGFiczY0IE5ldExpY2Vuc2luZ1xyXG4gKi9cclxuXHJcbmltcG9ydCBCYXNlRW50aXR5IGZyb20gJy4vQmFzZUVudGl0eSc7XHJcblxyXG4vKipcclxuICogTGljZW5zZSBlbnRpdHkgdXNlZCBpbnRlcm5hbGx5IGJ5IE5ldExpY2Vuc2luZy5cclxuICpcclxuICogUHJvcGVydGllcyB2aXNpYmxlIHZpYSBOZXRMaWNlbnNpbmcgQVBJOlxyXG4gKlxyXG4gKiBVbmlxdWUgbnVtYmVyIChhY3Jvc3MgYWxsIHByb2R1Y3RzL2xpY2Vuc2VlcyBvZiBhIHZlbmRvcikgdGhhdCBpZGVudGlmaWVzIHRoZSBsaWNlbnNlLiBWZW5kb3IgY2FuXHJcbiAqIGFzc2lnbiB0aGlzIG51bWJlciB3aGVuIGNyZWF0aW5nIGEgbGljZW5zZSBvciBsZXQgTmV0TGljZW5zaW5nIGdlbmVyYXRlIG9uZS4gUmVhZC1vbmx5IGFmdGVyIGNvcnJlc3BvbmRpbmcgY3JlYXRpb25cclxuICogdHJhbnNhY3Rpb24gc3RhdHVzIGlzIHNldCB0byBjbG9zZWQuXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbnVtYmVyXHJcbiAqXHJcbiAqIE5hbWUgZm9yIHRoZSBsaWNlbnNlZCBpdGVtLiBTZXQgZnJvbSBsaWNlbnNlIHRlbXBsYXRlIG9uIGNyZWF0aW9uLCBpZiBub3Qgc3BlY2lmaWVkIGV4cGxpY2l0bHkuXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbmFtZVxyXG4gKlxyXG4gKiBJZiBzZXQgdG8gZmFsc2UsIHRoZSBsaWNlbnNlIGlzIGRpc2FibGVkLiBMaWNlbnNlIGNhbiBiZSByZS1lbmFibGVkLCBidXQgYXMgbG9uZyBhcyBpdCBpcyBkaXNhYmxlZCxcclxuICogdGhlIGxpY2Vuc2UgaXMgZXhjbHVkZWQgZnJvbSB0aGUgdmFsaWRhdGlvbiBwcm9jZXNzLlxyXG4gKiBAcHJvcGVydHkgYm9vbGVhbiBhY3RpdmVcclxuICpcclxuICogcHJpY2UgZm9yIHRoZSBsaWNlbnNlLiBJZiA+MCwgaXQgbXVzdCBhbHdheXMgYmUgYWNjb21wYW5pZWQgYnkgdGhlIGN1cnJlbmN5IHNwZWNpZmljYXRpb24uIFJlYWQtb25seSxcclxuICogc2V0IGZyb20gbGljZW5zZSB0ZW1wbGF0ZSBvbiBjcmVhdGlvbi5cclxuICogQHByb3BlcnR5IGZsb2F0IHByaWNlXHJcbiAqXHJcbiAqIHNwZWNpZmllcyBjdXJyZW5jeSBmb3IgdGhlIGxpY2Vuc2UgcHJpY2UuIENoZWNrIGRhdGEgdHlwZXMgdG8gZGlzY292ZXIgd2hpY2ggY3VycmVuY2llcyBhcmVcclxuICogc3VwcG9ydGVkLiBSZWFkLW9ubHksIHNldCBmcm9tIGxpY2Vuc2UgdGVtcGxhdGUgb24gY3JlYXRpb24uXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgY3VycmVuY3lcclxuICpcclxuICogSWYgc2V0IHRvIHRydWUsIHRoaXMgbGljZW5zZSBpcyBub3Qgc2hvd24gaW4gTmV0TGljZW5zaW5nIFNob3AgYXMgcHVyY2hhc2VkIGxpY2Vuc2UuIFNldCBmcm9tIGxpY2Vuc2VcclxuICogdGVtcGxhdGUgb24gY3JlYXRpb24sIGlmIG5vdCBzcGVjaWZpZWQgZXhwbGljaXRseS5cclxuICogQHByb3BlcnR5IGJvb2xlYW4gJGhpZGRlblxyXG4gKlxyXG4gKiBAcHJvcGVydHkgc3RyaW5nIHN0YXJ0RGF0ZVxyXG4gKlxyXG4gKiBBcmJpdHJhcnkgYWRkaXRpb25hbCB1c2VyIHByb3BlcnRpZXMgb2Ygc3RyaW5nIHR5cGUgbWF5IGJlIGFzc29jaWF0ZWQgd2l0aCBlYWNoIGxpY2Vuc2UuIFRoZSBuYW1lIG9mIHVzZXIgcHJvcGVydHlcclxuICogbXVzdCBub3QgYmUgZXF1YWwgdG8gYW55IG9mIHRoZSBmaXhlZCBwcm9wZXJ0eSBuYW1lcyBsaXN0ZWQgYWJvdmUgYW5kIG11c3QgYmUgbm9uZSBvZiBpZCwgZGVsZXRlZCwgbGljZW5zZWVOdW1iZXIsXHJcbiAqIGxpY2Vuc2VUZW1wbGF0ZU51bWJlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpY2Vuc2UgZXh0ZW5kcyBCYXNlRW50aXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIC8vIFRoZSBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIGNhc3QgdG8gbmF0aXZlIHR5cGVzLlxyXG4gICAgICAgICAgICBjYXN0czoge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogJ2Zsb2F0JyxcclxuICAgICAgICAgICAgICAgIGhpZGRlbjogJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50ZmVhdHVyZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICB0aW1lVm9sdW1lOiAnaW50JyxcclxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgaW5Vc2U6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ251bWJlcicsIG51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdudW1iZXInLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZShhY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnYWN0aXZlJywgYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2FjdGl2ZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCduYW1lJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRIaWRkZW4oaGlkZGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ2hpZGRlbicsIGhpZGRlbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGlkZGVuKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdoaWRkZW4nLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhcmVudGZlYXR1cmUocGFyZW50ZmVhdHVyZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdwYXJlbnRmZWF0dXJlJywgcGFyZW50ZmVhdHVyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50ZmVhdHVyZShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgncGFyZW50ZmVhdHVyZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZVZvbHVtZSh0aW1lVm9sdW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ3RpbWVWb2x1bWUnLCB0aW1lVm9sdW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lVm9sdW1lKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCd0aW1lVm9sdW1lJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGFydERhdGUoc3RhcnREYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ3N0YXJ0RGF0ZScsIHN0YXJ0RGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhcnREYXRlKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdzdGFydERhdGUnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluVXNlKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdpblVzZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJpY2UoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3ByaWNlJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW5jeShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnY3VycmVuY3knLCBkZWYpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5cclxuaW1wb3J0IEJhc2VFbnRpdHkgZnJvbSAnLi9CYXNlRW50aXR5JztcclxuXHJcbi8qKlxyXG4gKiBMaWNlbnNlIHRlbXBsYXRlIGVudGl0eSB1c2VkIGludGVybmFsbHkgYnkgTmV0TGljZW5zaW5nLlxyXG4gKlxyXG4gKiBQcm9wZXJ0aWVzIHZpc2libGUgdmlhIE5ldExpY2Vuc2luZyAgQVBJOlxyXG4gKlxyXG4gKiBVbmlxdWUgbnVtYmVyIChhY3Jvc3MgYWxsIHByb2R1Y3RzIG9mIGEgdmVuZG9yKSB0aGF0IGlkZW50aWZpZXMgdGhlIGxpY2Vuc2UgdGVtcGxhdGUuIFZlbmRvciBjYW5cclxuICogYXNzaWduIHRoaXMgbnVtYmVyIHdoZW4gY3JlYXRpbmcgYSBsaWNlbnNlIHRlbXBsYXRlIG9yIGxldCBOZXRMaWNlbnNpbmcgIGdlbmVyYXRlIG9uZS5cclxuICogUmVhZC1vbmx5IGFmdGVyIGNyZWF0aW9uIG9mIHRoZSBmaXJzdCBsaWNlbnNlIGZyb20gdGhpcyBsaWNlbnNlIHRlbXBsYXRlLlxyXG4gKiBAcHJvcGVydHkgc3RyaW5nIG51bWJlclxyXG4gKlxyXG4gKiBJZiBzZXQgdG8gZmFsc2UsIHRoZSBsaWNlbnNlIHRlbXBsYXRlIGlzIGRpc2FibGVkLiBMaWNlbnNlZSBjYW4gbm90IG9idGFpbiBhbnkgbmV3IGxpY2Vuc2VzIG9mZiB0aGlzXHJcbiAqIGxpY2Vuc2UgdGVtcGxhdGUuXHJcbiAqIEBwcm9wZXJ0eSBib29sZWFuIGFjdGl2ZVxyXG4gKlxyXG4gKiBOYW1lIGZvciB0aGUgbGljZW5zZWQgaXRlbS5cclxuICogQHByb3BlcnR5IHN0cmluZyBuYW1lXHJcbiAqXHJcbiAqIFR5cGUgb2YgbGljZW5zZXMgY3JlYXRlZCBmcm9tIHRoaXMgbGljZW5zZSB0ZW1wbGF0ZS4gU3VwcG9ydGVkIHR5cGVzOiBcIkZFQVRVUkVcIiwgXCJUSU1FVk9MVU1FXCIsXHJcbiAqIFwiRkxPQVRJTkdcIiwgXCJRVUFOVElUWVwiXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbGljZW5zZVR5cGVcclxuICpcclxuICogUHJpY2UgZm9yIHRoZSBsaWNlbnNlLiBJZiA+MCwgaXQgbXVzdCBhbHdheXMgYmUgYWNjb21wYW5pZWQgYnkgdGhlIGN1cnJlbmN5IHNwZWNpZmljYXRpb24uXHJcbiAqIEBwcm9wZXJ0eSBkb3VibGUgcHJpY2VcclxuICpcclxuICogU3BlY2lmaWVzIGN1cnJlbmN5IGZvciB0aGUgbGljZW5zZSBwcmljZS4gQ2hlY2sgZGF0YSB0eXBlcyB0byBkaXNjb3ZlciB3aGljaCBjdXJyZW5jaWVzIGFyZVxyXG4gKiBzdXBwb3J0ZWQuXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgY3VycmVuY3lcclxuICpcclxuICogSWYgc2V0IHRvIHRydWUsIGV2ZXJ5IG5ldyBsaWNlbnNlZSBhdXRvbWF0aWNhbGx5IGdldHMgb25lIGxpY2Vuc2Ugb3V0IG9mIHRoaXMgbGljZW5zZSB0ZW1wbGF0ZSBvblxyXG4gKiBjcmVhdGlvbi4gQXV0b21hdGljIGxpY2Vuc2VzIG11c3QgaGF2ZSB0aGVpciBwcmljZSBzZXQgdG8gMC5cclxuICogQHByb3BlcnR5IGJvb2xlYW4gYXV0b21hdGljXHJcbiAqXHJcbiAqIElmIHNldCB0byB0cnVlLCB0aGlzIGxpY2Vuc2UgdGVtcGxhdGUgaXMgbm90IHNob3duIGluIE5ldExpY2Vuc2luZyAgU2hvcCBhcyBvZmZlcmVkIGZvciBwdXJjaGFzZS5cclxuICogQHByb3BlcnR5IGJvb2xlYW4gaGlkZGVuXHJcbiAqXHJcbiAqIElmIHNldCB0byB0cnVlLCBsaWNlbnNlcyBmcm9tIHRoaXMgbGljZW5zZSB0ZW1wbGF0ZSBhcmUgbm90IHZpc2libGUgdG8gdGhlIGVuZCBjdXN0b21lciwgYnV0XHJcbiAqIHBhcnRpY2lwYXRlIGluIHZhbGlkYXRpb24uXHJcbiAqIEBwcm9wZXJ0eSBib29sZWFuIGhpZGVMaWNlbnNlc1xyXG4gKlxyXG4gKiBJZiBzZXQgdG8gdHJ1ZSwgdGhpcyBsaWNlbnNlIHRlbXBsYXRlIGRlZmluZXMgZ3JhY2UgcGVyaW9kIG9mIHZhbGlkaXR5IGdyYW50ZWQgYWZ0ZXIgc3Vic2NyaXB0aW9uIGV4cGlyYXRpb24uXHJcbiAqIEBwcm9wZXJ0eSBib29sZWFuIGdyYWNlUGVyaW9kXHJcbiAqXHJcbiAqIE1hbmRhdG9yeSBmb3IgJ1RJTUVWT0xVTUUnIGxpY2Vuc2UgdHlwZS5cclxuICogQHByb3BlcnR5IGludGVnZXIgdGltZVZvbHVtZVxyXG4gKlxyXG4gKiBUaW1lIHZvbHVtZSBwZXJpb2QgZm9yICdUSU1FVk9MVU1FJyBsaWNlbnNlIHR5cGUuIFN1cHBvcnRlZCB0eXBlczogXCJEQVlcIiwgXCJXRUVLXCIsIFwiTU9OVEhcIiwgXCJZRUFSXCJcclxuICogQHByb3BlcnR5IGludGVnZXIgdGltZVZvbHVtZVBlcmlvZFxyXG4gKlxyXG4gKiBNYW5kYXRvcnkgZm9yICdGTE9BVElORycgbGljZW5zZSB0eXBlLlxyXG4gKiBAcHJvcGVydHkgaW50ZWdlciBtYXhTZXNzaW9uc1xyXG4gKlxyXG4gKiBNYW5kYXRvcnkgZm9yICdRVUFOVElUWScgbGljZW5zZSB0eXBlLlxyXG4gKiBAcHJvcGVydHkgaW50ZWdlciBxdWFudGl0eVxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpY2Vuc2VUZW1wbGF0ZSBleHRlbmRzIEJhc2VFbnRpdHkge1xyXG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgcHJvcGVydGllcyxcclxuICAgICAgICAgICAgLy8gVGhlIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgY2FzdCB0byBuYXRpdmUgdHlwZXMuXHJcbiAgICAgICAgICAgIGNhc3RzOiB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXI6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGxpY2Vuc2VUeXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAnZG91YmxlJyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGF1dG9tYXRpYzogJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgICAgICBoaWRlTGljZW5zZXM6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgICAgIGdyYWNlUGVyaW9kOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgICAgICB0aW1lVm9sdW1lOiAnaW50JyxcclxuICAgICAgICAgICAgICAgIHRpbWVWb2x1bWVQZXJpb2Q6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgbWF4U2Vzc2lvbnM6ICdpbnQnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6ICdpbnQnLFxyXG4gICAgICAgICAgICAgICAgaW5Vc2U6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ251bWJlcicsIG51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdudW1iZXInLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZShhY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnYWN0aXZlJywgYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2FjdGl2ZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCduYW1lJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaWNlbnNlVHlwZShsaWNlbnNlVHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdsaWNlbnNlVHlwZScsIGxpY2Vuc2VUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWNlbnNlVHlwZShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnbGljZW5zZVR5cGUnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByaWNlKHByaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ3ByaWNlJywgcHJpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByaWNlKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdwcmljZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVuY3koY3VycmVuY3kpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnY3VycmVuY3knLCBjdXJyZW5jeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVuY3koZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2N1cnJlbmN5JywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdXRvbWF0aWMoYXV0b21hdGljKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ2F1dG9tYXRpYycsIGF1dG9tYXRpYyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXV0b21hdGljKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdhdXRvbWF0aWMnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhpZGRlbihoaWRkZW4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnaGlkZGVuJywgaGlkZGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIaWRkZW4oZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2hpZGRlbicsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SGlkZUxpY2Vuc2VzKGhpZGVMaWNlbnNlcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdoaWRlTGljZW5zZXMnLCBoaWRlTGljZW5zZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhpZGVMaWNlbnNlcyhkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnaGlkZUxpY2Vuc2VzJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lVm9sdW1lKHRpbWVWb2x1bWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgndGltZVZvbHVtZScsIHRpbWVWb2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVWb2x1bWUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3RpbWVWb2x1bWUnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVWb2x1bWVQZXJpb2QodGltZVZvbHVtZVBlcmlvZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCd0aW1lVm9sdW1lUGVyaW9kJywgdGltZVZvbHVtZVBlcmlvZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZVZvbHVtZVBlcmlvZChkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgndGltZVZvbHVtZVBlcmlvZCcsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWF4U2Vzc2lvbnMobWF4U2Vzc2lvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnbWF4U2Vzc2lvbnMnLCBtYXhTZXNzaW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWF4U2Vzc2lvbnMoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ21heFNlc3Npb25zJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRRdWFudGl0eShxdWFudGl0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdxdWFudGl0eScsIHF1YW50aXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRRdWFudGl0eShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgncXVhbnRpdHknLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluVXNlKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdpblVzZScsIGRlZik7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgICAgTGFiczY0IDxuZXRsaWNlbnNpbmdAbGFiczY0LmNvbT5cclxuICogQGxpY2Vuc2UgICBBcGFjaGUtMi4wXHJcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW9cclxuICogQGNvcHlyaWdodCAyMDE3IExhYnM2NCBOZXRMaWNlbnNpbmdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpY2Vuc2VUcmFuc2FjdGlvbkpvaW4ge1xyXG4gICAgY29uc3RydWN0b3IodHJhbnNhY3Rpb24sIGxpY2Vuc2UpIHtcclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb247XHJcbiAgICAgICAgdGhpcy5saWNlbnNlID0gbGljZW5zZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFuc2FjdGlvbihkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2FjdGlvbiB8fCBkZWY7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGljZW5zZShsaWNlbnNlKSB7XHJcbiAgICAgICAgdGhpcy5saWNlbnNlID0gbGljZW5zZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWNlbnNlKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpY2Vuc2UgfHwgZGVmO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5cclxuaW1wb3J0IEJhc2VFbnRpdHkgZnJvbSAnLi9CYXNlRW50aXR5JztcclxuXHJcbi8qKlxyXG4gKiBMaWNlbnNlZSBlbnRpdHkgdXNlZCBpbnRlcm5hbGx5IGJ5IE5ldExpY2Vuc2luZy5cclxuICpcclxuICogUHJvcGVydGllcyB2aXNpYmxlIHZpYSBOZXRMaWNlbnNpbmcgIEFQSTpcclxuICpcclxuICogVW5pcXVlIG51bWJlciAoYWNyb3NzIGFsbCBwcm9kdWN0cyBvZiBhIHZlbmRvcikgdGhhdCBpZGVudGlmaWVzIHRoZSBsaWNlbnNlZS4gVmVuZG9yIGNhbiBhc3NpZ24gdGhpc1xyXG4gKiBudW1iZXIgd2hlbiBjcmVhdGluZyBhIGxpY2Vuc2VlIG9yIGxldCBOZXRMaWNlbnNpbmcgIGdlbmVyYXRlIG9uZS4gUmVhZC1vbmx5IGFmdGVyIGNyZWF0aW9uIG9mIHRoZSBmaXJzdCBsaWNlbnNlIGZvclxyXG4gKiB0aGUgbGljZW5zZWUuXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbnVtYmVyXHJcbiAqXHJcbiAqIExpY2Vuc2VlIG5hbWUuXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbmFtZVxyXG4gKlxyXG4gKiBJZiBzZXQgdG8gZmFsc2UsIHRoZSBsaWNlbnNlZSBpcyBkaXNhYmxlZC4gTGljZW5zZWUgY2FuIG5vdCBvYnRhaW4gbmV3IGxpY2Vuc2VzLCBhbmQgdmFsaWRhdGlvbiBpc1xyXG4gKiBkaXNhYmxlZCAodGJkKS5cclxuICogQHByb3BlcnR5IGJvb2xlYW4gYWN0aXZlXHJcbiAqXHJcbiAqIExpY2Vuc2VlIFNlY3JldCBmb3IgbGljZW5zZWVcclxuICogQHByb3BlcnR5IHN0cmluZyBsaWNlbnNlZVNlY3JldFxyXG4gKlxyXG4gKiBNYXJrIGxpY2Vuc2VlIGZvciB0cmFuc2Zlci5cclxuICogQHByb3BlcnR5IGJvb2xlYW4gbWFya2VkRm9yVHJhbnNmZXJcclxuICpcclxuICogQXJiaXRyYXJ5IGFkZGl0aW9uYWwgdXNlciBwcm9wZXJ0aWVzIG9mIHN0cmluZyB0eXBlIG1heSBiZSBhc3NvY2lhdGVkIHdpdGggZWFjaCBsaWNlbnNlZS4gVGhlIG5hbWUgb2YgdXNlciBwcm9wZXJ0eVxyXG4gKiBtdXN0IG5vdCBiZSBlcXVhbCB0byBhbnkgb2YgdGhlIGZpeGVkIHByb3BlcnR5IG5hbWVzIGxpc3RlZCBhYm92ZSBhbmQgbXVzdCBiZSBub25lIG9mIGlkLCBkZWxldGVkLCBwcm9kdWN0TnVtYmVyXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGljZW5zZWUgZXh0ZW5kcyBCYXNlRW50aXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIC8vIFRoZSBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIGNhc3QgdG8gbmF0aXZlIHR5cGVzLlxyXG4gICAgICAgICAgICBjYXN0czoge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBsaWNlbnNlZVNlY3JldDogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBtYXJrZWRGb3JUcmFuc2ZlcjogJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICAgICAgaW5Vc2U6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ251bWJlcicsIG51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdudW1iZXInLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZShhY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnYWN0aXZlJywgYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2FjdGl2ZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCduYW1lJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9kdWN0TnVtYmVyKHByb2R1Y3ROdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgncHJvZHVjdE51bWJlcicsIHByb2R1Y3ROdW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2R1Y3ROdW1iZXIoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3Byb2R1Y3ROdW1iZXInLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgc2V0TGljZW5zZWVTZWNyZXQobGljZW5zZWVTZWNyZXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnbGljZW5zZWVTZWNyZXQnLCBsaWNlbnNlZVNlY3JldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBnZXRMaWNlbnNlZVNlY3JldChkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnbGljZW5zZWVTZWNyZXQnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1hcmtlZEZvclRyYW5zZmVyKG1hcmtlZEZvclRyYW5zZmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ21hcmtlZEZvclRyYW5zZmVyJywgbWFya2VkRm9yVHJhbnNmZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hcmtlZEZvclRyYW5zZmVyKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdtYXJrZWRGb3JUcmFuc2ZlcicsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5Vc2UoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2luVXNlJywgZGVmKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciAgICBMYWJzNjQgPG5ldGxpY2Vuc2luZ0BsYWJzNjQuY29tPlxyXG4gKiBAbGljZW5zZSAgIEFwYWNoZS0yLjBcclxuICogQGxpbmsgICAgICBodHRwczovL25ldGxpY2Vuc2luZy5pb1xyXG4gKiBAY29weXJpZ2h0IDIwMTcgTGFiczY0IE5ldExpY2Vuc2luZ1xyXG4gKi9cclxuXHJcbmltcG9ydCBCYXNlRW50aXR5IGZyb20gJy4vQmFzZUVudGl0eSc7XHJcblxyXG4vKipcclxuICogUGF5bWVudE1ldGhvZCBlbnRpdHkgdXNlZCBpbnRlcm5hbGx5IGJ5IE5ldExpY2Vuc2luZy5cclxuICpcclxuICogQHByb3BlcnR5IHN0cmluZyBudW1iZXJcclxuICogQHByb3BlcnR5IGJvb2xlYW4gYWN0aXZlXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5bWVudE1ldGhvZCBleHRlbmRzIEJhc2VFbnRpdHkge1xyXG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgcHJvcGVydGllcyxcclxuICAgICAgICAgICAgLy8gVGhlIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgY2FzdCB0byBuYXRpdmUgdHlwZXMuXHJcbiAgICAgICAgICAgIGNhc3RzOiB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXI6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgICAgICAncGF5cGFsLnN1YmplY3QnOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ251bWJlcicsIG51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdudW1iZXInLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZShhY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnYWN0aXZlJywgYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2FjdGl2ZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGF5cGFsU3ViamVjdChwYXlwYWxTdWJqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ3BheXBhbC5zdWJqZWN0JywgcGF5cGFsU3ViamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGF5cGFsU3ViamVjdChkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgncGF5cGFsLnN1YmplY3QnLCBkZWYpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5cclxuaW1wb3J0IEJhc2VFbnRpdHkgZnJvbSAnLi9CYXNlRW50aXR5JztcclxuaW1wb3J0IFByb2R1Y3REaXNjb3VudCBmcm9tICcuL1Byb2R1Y3REaXNjb3VudCc7XHJcblxyXG4vKipcclxuICogVGhlIGRpc2NvdW50cyBtYXBcclxuICogQHR5cGUge3t9fVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuY29uc3QgZGlzY291bnRzTWFwID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBBbiBpZGVudGlmaWVyIHRoYXQgc2hvdyBpZiBkaXNjb3VudHMgd2FzIHRvdWNoZWRcclxuICogQHR5cGUge3t9fVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuY29uc3QgZGlzY291bnRzVG91Y2hlZCA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4vKipcclxuICogTmV0TGljZW5zaW5nICBQcm9kdWN0IGVudGl0eS5cclxuICpcclxuICogUHJvcGVydGllcyB2aXNpYmxlIHZpYSBOZXRMaWNlbnNpbmcgIEFQSTpcclxuICpcclxuICogVW5pcXVlIG51bWJlciB0aGF0IGlkZW50aWZpZXMgdGhlIHByb2R1Y3QuIFZlbmRvciBjYW4gYXNzaWduIHRoaXMgbnVtYmVyIHdoZW4gY3JlYXRpbmcgYSBwcm9kdWN0IG9yXHJcbiAqIGxldCBOZXRMaWNlbnNpbmcgIGdlbmVyYXRlIG9uZS4gUmVhZC1vbmx5IGFmdGVyIGNyZWF0aW9uIG9mIHRoZSBmaXJzdCBsaWNlbnNlZSBmb3IgdGhlIHByb2R1Y3QuXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbnVtYmVyXHJcbiAqXHJcbiAqIElmIHNldCB0byBmYWxzZSwgdGhlIHByb2R1Y3QgaXMgZGlzYWJsZWQuIE5vIG5ldyBsaWNlbnNlZXMgY2FuIGJlIHJlZ2lzdGVyZWQgZm9yIHRoZSBwcm9kdWN0LFxyXG4gKiBleGlzdGluZyBsaWNlbnNlZXMgY2FuIG5vdCBvYnRhaW4gbmV3IGxpY2Vuc2VzLlxyXG4gKiBAcHJvcGVydHkgYm9vbGVhbiBhY3RpdmVcclxuICpcclxuICogUHJvZHVjdCBuYW1lLiBUb2dldGhlciB3aXRoIHRoZSB2ZXJzaW9uIGlkZW50aWZpZXMgdGhlIHByb2R1Y3QgZm9yIHRoZSBlbmQgY3VzdG9tZXIuXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbmFtZVxyXG4gKlxyXG4gKiBQcm9kdWN0IHZlcnNpb24uIENvbnZlbmllbmNlIHBhcmFtZXRlciwgYWRkaXRpb25hbCB0byB0aGUgcHJvZHVjdCBuYW1lLlxyXG4gKiBAcHJvcGVydHkgZmxvYXQgdmVyc2lvblxyXG4gKlxyXG4gKiBJZiBzZXQgdG8gJ3RydWUnLCBub24tZXhpc3RpbmcgbGljZW5zZWVzIHdpbGwgYmUgY3JlYXRlZCBhdCBmaXJzdCB2YWxpZGF0aW9uIGF0dGVtcHQuXHJcbiAqIEBwcm9wZXJ0eSBib29sZWFuIGxpY2Vuc2VlQXV0b0NyZWF0ZVxyXG4gKlxyXG4gKiBMaWNlbnNlZSBzZWNyZXQgbW9kZSBmb3IgcHJvZHVjdC5TdXBwb3J0ZWQgdHlwZXM6IFwiRElTQUJMRURcIiwgXCJQUkVERUZJTkVEXCIsIFwiQ0xJRU5UXCJcclxuICogQHByb3BlcnR5IGJvb2xlYW4gbGljZW5zZWVTZWNyZXRNb2RlXHJcbiAqXHJcbiAqIFByb2R1Y3QgZGVzY3JpcHRpb24uIE9wdGlvbmFsLlxyXG4gKiBAcHJvcGVydHkgc3RyaW5nIGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIExpY2Vuc2luZyBpbmZvcm1hdGlvbi4gT3B0aW9uYWwuXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbGljZW5zaW5nSW5mb1xyXG4gKlxyXG4gKiBAcHJvcGVydHkgYm9vbGVhbiBpblVzZVxyXG4gKlxyXG4gKiBBcmJpdHJhcnkgYWRkaXRpb25hbCB1c2VyIHByb3BlcnRpZXMgb2Ygc3RyaW5nIHR5cGUgbWF5IGJlIGFzc29jaWF0ZWQgd2l0aCBlYWNoIHByb2R1Y3QuIFRoZSBuYW1lIG9mIHVzZXIgcHJvcGVydHlcclxuICogbXVzdCBub3QgYmUgZXF1YWwgdG8gYW55IG9mIHRoZSBmaXhlZCBwcm9wZXJ0eSBuYW1lcyBsaXN0ZWQgYWJvdmUgYW5kIG11c3QgYmUgbm9uZSBvZiBpZCwgZGVsZXRlZC5cclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAvLyBUaGUgYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSBjYXN0IHRvIG5hdGl2ZSB0eXBlcy5cclxuICAgICAgICAgICAgY2FzdHM6IHtcclxuICAgICAgICAgICAgICAgIG51bWJlcjogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBsaWNlbnNpbmdJbmZvOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGxpY2Vuc2VlQXV0b0NyZWF0ZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICAgICAgbGljZW5zZWVTZWNyZXRNb2RlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGluVXNlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc2NvdW50c01hcC5zZXQodGhpcywgW10pO1xyXG4gICAgICAgIGRpc2NvdW50c1RvdWNoZWQuc2V0KHRoaXMsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ251bWJlcicsIG51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdudW1iZXInLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZShhY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnYWN0aXZlJywgYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2FjdGl2ZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ25hbWUnLCBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCduYW1lJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWZXJzaW9uKHZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgndmVyc2lvbicsIHZlcnNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZlcnNpb24oZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3ZlcnNpb24nLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExpY2Vuc2VlQXV0b0NyZWF0ZShsaWNlbnNlZUF1dG9DcmVhdGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnbGljZW5zZWVBdXRvQ3JlYXRlJywgbGljZW5zZWVBdXRvQ3JlYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWNlbnNlZUF1dG9DcmVhdGUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2xpY2Vuc2VlQXV0b0NyZWF0ZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgUHJvZHVjdE1vZHVsZS5zZXRMaWNlbnNlZVNlY3JldE1vZGUgaW5zdGVhZFxyXG4gICAgICovXHJcbiAgICBzZXRMaWNlbnNlZVNlY3JldE1vZGUobGljZW5zZWVTZWNyZXRNb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ2xpY2Vuc2VlU2VjcmV0TW9kZScsIGxpY2Vuc2VlU2VjcmV0TW9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgUHJvZHVjdE1vZHVsZS5nZXRMaWNlbnNlZVNlY3JldE1vZGUgaW5zdGVhZFxyXG4gICAgICovXHJcbiAgICBnZXRMaWNlbnNlZVNlY3JldE1vZGUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2xpY2Vuc2VlU2VjcmV0TW9kZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzY3JpcHRpb24oZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2Rlc2NyaXB0aW9uJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaWNlbnNpbmdJbmZvKGxpY2Vuc2luZ0luZm8pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnbGljZW5zaW5nSW5mbycsIGxpY2Vuc2luZ0luZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpY2Vuc2luZ0luZm8oZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2xpY2Vuc2luZ0luZm8nLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluVXNlKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdpblVzZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgZGlzY291bnQgdG8gcHJvZHVjdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBkaXNjb3VudCBOZXRMaWNlbnNpbmcuUHJvZHVjdERpc2NvdW50XHJcbiAgICAgKiBAcmV0dXJucyB7TmV0TGljZW5zaW5nLlByb2R1Y3R9XHJcbiAgICAgKi9cclxuICAgIGFkZERpc2NvdW50KGRpc2NvdW50KSB7XHJcbiAgICAgICAgY29uc3QgZGlzY291bnRzID0gZGlzY291bnRzTWFwLmdldCh0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHByb2R1Y3REaXNjb3VudCA9IGRpc2NvdW50O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHByb2R1Y3REaXNjb3VudCAhPT0gJ3N0cmluZycgJiYgIShwcm9kdWN0RGlzY291bnQgaW5zdGFuY2VvZiBQcm9kdWN0RGlzY291bnQpKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3REaXNjb3VudCA9IG5ldyBQcm9kdWN0RGlzY291bnQocHJvZHVjdERpc2NvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc2NvdW50cy5wdXNoKHByb2R1Y3REaXNjb3VudCk7XHJcbiAgICAgICAgZGlzY291bnRzTWFwLnNldCh0aGlzLCBkaXNjb3VudHMpO1xyXG4gICAgICAgIGRpc2NvdW50c1RvdWNoZWQuc2V0KHRoaXMsIHRydWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBkaXNjb3VudHMgdG8gcHJvZHVjdFxyXG4gICAgICogQHBhcmFtIGRpc2NvdW50c1xyXG4gICAgICovXHJcbiAgICBzZXRQcm9kdWN0RGlzY291bnRzKGRpc2NvdW50cykge1xyXG4gICAgICAgIGRpc2NvdW50c01hcC5zZXQodGhpcywgW10pO1xyXG4gICAgICAgIGRpc2NvdW50c1RvdWNoZWQuc2V0KHRoaXMsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoIWRpc2NvdW50cykgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRpc2NvdW50cykpIHtcclxuICAgICAgICAgICAgZGlzY291bnRzLmZvckVhY2goKGRpc2NvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZERpc2NvdW50KGRpc2NvdW50KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkRGlzY291bnQoZGlzY291bnRzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYXJyYXkgb2Ygb2JqZWN0cyBkaXNjb3VudHNcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZHVjdERpc2NvdW50cygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgZGlzY291bnRzTWFwLmdldCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXNQcm9wZXJ0aWVzTWFwKCkge1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXNNYXAgPSBzdXBlci5hc1Byb3BlcnRpZXNNYXAoKTtcclxuXHJcbiAgICAgICAgaWYgKGRpc2NvdW50c01hcC5nZXQodGhpcykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXNNYXAuZGlzY291bnQgPSBkaXNjb3VudHNNYXAuZ2V0KHRoaXMpLm1hcCgoZGlzY291bnQpID0+IGRpc2NvdW50LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0aWVzTWFwLmRpc2NvdW50ICYmIGRpc2NvdW50c1RvdWNoZWQuZ2V0KHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXNNYXAuZGlzY291bnQgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzTWFwO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5pbXBvcnQgQmFzZUVudGl0eSBmcm9tICcuL0Jhc2VFbnRpdHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERpc2NvdW50IGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAvLyBUaGUgYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSBjYXN0IHRvIG5hdGl2ZSB0eXBlcy5cclxuICAgICAgICAgICAgY2FzdHM6IHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2U6ICdmbG9hdCcsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnRGaXg6ICdmbG9hdCcsXHJcbiAgICAgICAgICAgICAgICBhbW91bnRQZXJjZW50OiAnaW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb3RhbFByaWNlKHRvdGFsUHJpY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgndG90YWxQcmljZScsIHRvdGFsUHJpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvdGFsUHJpY2UoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3RvdGFsUHJpY2UnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbmN5KGN1cnJlbmN5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ2N1cnJlbmN5JywgY3VycmVuY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbmN5KGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdjdXJyZW5jeScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW1vdW50Rml4KGFtb3VudEZpeCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdhbW91bnRGaXgnLCBhbW91bnRGaXgpLnJlbW92ZVByb3BlcnR5KCdhbW91bnRQZXJjZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW1vdW50Rml4KGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdhbW91bnRGaXgnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFtb3VudFBlcmNlbnQoYW1vdW50UGVyY2VudCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdhbW91bnRQZXJjZW50JywgYW1vdW50UGVyY2VudCkucmVtb3ZlUHJvcGVydHkoJ2Ftb3VudEZpeCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFtb3VudFBlcmNlbnQoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2Ftb3VudFBlcmNlbnQnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB0aGlzLmdldFRvdGFsUHJpY2UoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW5jeSA9IHRoaXMuZ2V0Q3VycmVuY3koKTtcclxuICAgICAgICBsZXQgYW1vdW50ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0QW1vdW50Rml4KG51bGwpKSBhbW91bnQgPSB0aGlzLmdldEFtb3VudEZpeCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldEFtb3VudFBlcmNlbnQobnVsbCkpIGFtb3VudCA9IGAke3RoaXMuZ2V0QW1vdW50UGVyY2VudCgpfSVgO1xyXG5cclxuICAgICAgICByZXR1cm4gYCR7dG90YWxQcmljZX07JHtjdXJyZW5jeX07JHthbW91bnR9YDtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciAgICBMYWJzNjQgPG5ldGxpY2Vuc2luZ0BsYWJzNjQuY29tPlxyXG4gKiBAbGljZW5zZSAgIEFwYWNoZS0yLjBcclxuICogQGxpbmsgICAgICBodHRwczovL25ldGxpY2Vuc2luZy5pb1xyXG4gKiBAY29weXJpZ2h0IDIwMTcgTGFiczY0IE5ldExpY2Vuc2luZ1xyXG4gKi9cclxuXHJcbmltcG9ydCBCYXNlRW50aXR5IGZyb20gJy4vQmFzZUVudGl0eSc7XHJcblxyXG4vKipcclxuICogUHJvZHVjdCBtb2R1bGUgZW50aXR5IHVzZWQgaW50ZXJuYWxseSBieSBOZXRMaWNlbnNpbmcuXHJcbiAqXHJcbiAqIFByb3BlcnRpZXMgdmlzaWJsZSB2aWEgTmV0TGljZW5zaW5nIEFQSTpcclxuICpcclxuICogVW5pcXVlIG51bWJlciAoYWNyb3NzIGFsbCBwcm9kdWN0cyBvZiBhIHZlbmRvcikgdGhhdCBpZGVudGlmaWVzIHRoZSBwcm9kdWN0IG1vZHVsZS4gVmVuZG9yIGNhbiBhc3NpZ25cclxuICogdGhpcyBudW1iZXIgd2hlbiBjcmVhdGluZyBhIHByb2R1Y3QgbW9kdWxlIG9yIGxldCBOZXRMaWNlbnNpbmcgZ2VuZXJhdGUgb25lLiBSZWFkLW9ubHkgYWZ0ZXIgY3JlYXRpb24gb2YgdGhlIGZpcnN0XHJcbiAqIGxpY2Vuc2VlIGZvciB0aGUgcHJvZHVjdC5cclxuICogQHByb3BlcnR5IHN0cmluZyBudW1iZXJcclxuICpcclxuICogSWYgc2V0IHRvIGZhbHNlLCB0aGUgcHJvZHVjdCBtb2R1bGUgaXMgZGlzYWJsZWQuIExpY2Vuc2VlcyBjYW4gbm90IG9idGFpbiBhbnkgbmV3IGxpY2Vuc2VzIGZvciB0aGlzXHJcbiAqIHByb2R1Y3QgbW9kdWxlLlxyXG4gKiBAcHJvcGVydHkgYm9vbGVhbiBhY3RpdmVcclxuICpcclxuICogUHJvZHVjdCBtb2R1bGUgbmFtZSB0aGF0IGlzIHZpc2libGUgdG8gdGhlIGVuZCBjdXN0b21lcnMgaW4gTmV0TGljZW5zaW5nIFNob3AuXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbmFtZVxyXG4gKlxyXG4gKiBMaWNlbnNpbmcgbW9kZWwgYXBwbGllZCB0byB0aGlzIHByb2R1Y3QgbW9kdWxlLiBEZWZpbmVzIHdoYXQgbGljZW5zZSB0ZW1wbGF0ZXMgY2FuIGJlXHJcbiAqIGNvbmZpZ3VyZWQgZm9yIHRoZSBwcm9kdWN0IG1vZHVsZSBhbmQgaG93IGxpY2Vuc2VzIGZvciB0aGlzIHByb2R1Y3QgbW9kdWxlIGFyZSBwcm9jZXNzZWQgZHVyaW5nIHZhbGlkYXRpb24uXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbGljZW5zaW5nTW9kZWxcclxuICpcclxuICogTWF4aW11bSBjaGVja291dCB2YWxpZGl0eSAoZGF5cykuIE1hbmRhdG9yeSBmb3IgJ0Zsb2F0aW5nJyBsaWNlbnNpbmcgbW9kZWwuXHJcbiAqIEBwcm9wZXJ0eSBpbnRlZ2VyIG1heENoZWNrb3V0VmFsaWRpdHlcclxuICpcclxuICogUmVtYWluaW5nIHRpbWUgdm9sdW1lIGZvciB5ZWxsb3cgbGV2ZWwuIE1hbmRhdG9yeSBmb3IgJ1JlbnRhbCcgbGljZW5zaW5nIG1vZGVsLlxyXG4gKiBAcHJvcGVydHkgaW50ZWdlciB5ZWxsb3dUaHJlc2hvbGRcclxuICpcclxuICogUmVtYWluaW5nIHRpbWUgdm9sdW1lIGZvciByZWQgbGV2ZWwuIE1hbmRhdG9yeSBmb3IgJ1JlbnRhbCcgbGljZW5zaW5nIG1vZGVsLlxyXG4gKiBAcHJvcGVydHkgaW50ZWdlciByZWRUaHJlc2hvbGRcclxuICpcclxuICogTGljZW5zZSB0ZW1wbGF0ZS4gTWFuZGF0b3J5IGZvciAnVHJ5ICYgQnV5JyBsaWNlbnNpbmcgbW9kZWwuIFN1cHBvcnRlZCB0eXBlczogXCJUSU1FVk9MVU1FXCIsIFwiRkVBVFVSRVwiLlxyXG4gKiBAcHJvcGVydHkgc3RyaW5nIGxpY2Vuc2VUZW1wbGF0ZVxyXG4gKlxyXG4gKiBMaWNlbnNlZSBzZWNyZXQgbW9kZSBmb3IgcHJvZHVjdC5TdXBwb3J0ZWQgdHlwZXM6IFwiUFJFREVGSU5FRFwiLCBcIkNMSUVOVFwiXHJcbiAqIEBwcm9wZXJ0eSBib29sZWFuIGxpY2Vuc2VlU2VjcmV0TW9kZVxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RNb2R1bGUgZXh0ZW5kcyBCYXNlRW50aXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIC8vIFRoZSBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIGNhc3QgdG8gbmF0aXZlIHR5cGVzLlxyXG4gICAgICAgICAgICBjYXN0czoge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBsaWNlbnNpbmdNb2RlbDogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBtYXhDaGVja291dFZhbGlkaXR5OiAnaW50JyxcclxuICAgICAgICAgICAgICAgIHllbGxvd1RocmVzaG9sZDogJ2ludCcsXHJcbiAgICAgICAgICAgICAgICByZWRUaHJlc2hvbGQ6ICdpbnQnLFxyXG4gICAgICAgICAgICAgICAgbGljZW5zZVRlbXBsYXRlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGluVXNlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgICAgICBsaWNlbnNlZVNlY3JldE1vZGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE51bWJlcihudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnbnVtYmVyJywgbnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1iZXIoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ251bWJlcicsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKGFjdGl2ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdhY3RpdmUnLCBhY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2ZShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnYWN0aXZlJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnbmFtZScsIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ25hbWUnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExpY2Vuc2luZ01vZGVsKGxpY2Vuc2luZ01vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ2xpY2Vuc2luZ01vZGVsJywgbGljZW5zaW5nTW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpY2Vuc2luZ01vZGVsKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdsaWNlbnNpbmdNb2RlbCcsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWF4Q2hlY2tvdXRWYWxpZGl0eShtYXhDaGVja291dFZhbGlkaXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ21heENoZWNrb3V0VmFsaWRpdHknLCBtYXhDaGVja291dFZhbGlkaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXhDaGVja291dFZhbGlkaXR5KGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdtYXhDaGVja291dFZhbGlkaXR5JywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRZZWxsb3dUaHJlc2hvbGQoeWVsbG93VGhyZXNob2xkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ3llbGxvd1RocmVzaG9sZCcsIHllbGxvd1RocmVzaG9sZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0WWVsbG93VGhyZXNob2xkKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCd5ZWxsb3dUaHJlc2hvbGQnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZFRocmVzaG9sZChyZWRUaHJlc2hvbGQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgncmVkVGhyZXNob2xkJywgcmVkVGhyZXNob2xkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWRUaHJlc2hvbGQoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3JlZFRocmVzaG9sZCcsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGljZW5zZVRlbXBsYXRlKGxpY2Vuc2VUZW1wbGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdsaWNlbnNlVGVtcGxhdGUnLCBsaWNlbnNlVGVtcGxhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpY2Vuc2VUZW1wbGF0ZShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnbGljZW5zZVRlbXBsYXRlJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJblVzZShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnaW5Vc2UnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExpY2Vuc2VlU2VjcmV0TW9kZShsaWNlbnNlZVNlY3JldE1vZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnbGljZW5zZWVTZWNyZXRNb2RlJywgbGljZW5zZWVTZWNyZXRNb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWNlbnNlZVNlY3JldE1vZGUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2xpY2Vuc2VlU2VjcmV0TW9kZScsIGRlZik7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgICAgTGFiczY0IDxuZXRsaWNlbnNpbmdAbGFiczY0LmNvbT5cclxuICogQGxpY2Vuc2UgICBBcGFjaGUtMi4wXHJcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW9cclxuICogQGNvcHlyaWdodCAyMDE3IExhYnM2NCBOZXRMaWNlbnNpbmdcclxuICovXHJcblxyXG5pbXBvcnQgQmFzZUVudGl0eSBmcm9tICcuL0Jhc2VFbnRpdHknO1xyXG5cclxuLyoqXHJcbiAqIFByb2R1Y3QgbW9kdWxlIGVudGl0eSB1c2VkIGludGVybmFsbHkgYnkgTmV0TGljZW5zaW5nLlxyXG4gKlxyXG4gKiBQcm9wZXJ0aWVzIHZpc2libGUgdmlhIE5ldExpY2Vuc2luZyBBUEk6XHJcbiAqXHJcbiAqIFVuaXF1ZSBudW1iZXJcclxuICogQHByb3BlcnR5IHN0cmluZyBudW1iZXJcclxuICpcclxuICogSWYgc2V0IHRvIGZhbHNlLCB0aGUgdG9rZW4gaXMgZGlzYWJsZWQuXHJcbiAqIEBwcm9wZXJ0eSBib29sZWFuIGFjdGl2ZVxyXG4gKlxyXG4gKiBFeHBpcmF0aW9uIFRpbWVcclxuICogQHByb3BlcnR5IHN0cmluZyBleHBpcmF0aW9uVGltZVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgc3RyaW5nIHZlbmRvck51bWJlclxyXG4gKlxyXG4gKiBUb2tlbiB0eXBlIHRvIGJlIGdlbmVyYXRlZC5cclxuICogREVGQVVMVCAtIGRlZmF1bHQgb25lLXRpbWUgdG9rZW4gKHdpbGwgYmUgZXhwaXJlZCBhZnRlciBmaXJzdCByZXF1ZXN0KVxyXG4gKiBTSE9QIC0gc2hvcCB0b2tlbiBpcyB1c2VkIHRvIHJlZGlyZWN0IGN1c3RvbWVyIHRvIHRoZSBuZXRsaWNlbnNpbmdTaG9wKGxpY2Vuc2VlTnVtYmVyIGlzIG1hbmRhdG9yeSlcclxuICogQVBJS0VZIC0gQVBJS2V5LXRva2VuXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgdG9rZW5UeXBlXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBzdHJpbmcgbGljZW5zZWVOdW1iZXJcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbiBleHRlbmRzIEJhc2VFbnRpdHkge1xyXG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgcHJvcGVydGllcyxcclxuICAgICAgICAgICAgLy8gVGhlIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgY2FzdCB0byBuYXRpdmUgdHlwZXMuXHJcbiAgICAgICAgICAgIGNhc3RzOiB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXI6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uVGltZTogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgdmVuZG9yTnVtYmVyOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIHRva2VuVHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBsaWNlbnNlZU51bWJlcjogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzVVJMOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NVUkxUaXRsZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxVUkw6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsVVJMVGl0bGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgc2hvcFVSTDogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdudW1iZXInLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZShhY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnYWN0aXZlJywgYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2FjdGl2ZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXhwaXJhdGlvblRpbWUoZXhwaXJhdGlvblRpbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnZXhwaXJhdGlvblRpbWUnLCBleHBpcmF0aW9uVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXhwaXJhdGlvblRpbWUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2V4cGlyYXRpb25UaW1lJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWZW5kb3JOdW1iZXIodmVuZG9yTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ3ZlbmRvck51bWJlcicsIHZlbmRvck51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmVuZG9yTnVtYmVyKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCd2ZW5kb3JOdW1iZXInLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRva2VuVHlwZSh0b2tlblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgndG9rZW5UeXBlJywgdG9rZW5UeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlblR5cGUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3Rva2VuVHlwZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGljZW5zZWVOdW1iZXIobGljZW5zZWVOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnbGljZW5zZWVOdW1iZXInLCBsaWNlbnNlZU51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGljZW5zZWVOdW1iZXIoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2xpY2Vuc2VlTnVtYmVyJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdWNjZXNzVVJMKHN1Y2Nlc3NVUkwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnc3VjY2Vzc1VSTCcsIHN1Y2Nlc3NVUkwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN1Y2Nlc3NVUkwoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3N1Y2Nlc3NVUkwnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN1Y2Nlc3NVUkxUaXRsZShzdWNjZXNzVVJMVGl0bGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnc3VjY2Vzc1VSTFRpdGxlJywgc3VjY2Vzc1VSTFRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWNjZXNzVVJMVGl0bGUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3N1Y2Nlc3NVUkxUaXRsZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FuY2VsVVJMKGNhbmNlbFVSTCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdjYW5jZWxVUkwnLCBjYW5jZWxVUkwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhbmNlbFVSTChkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnY2FuY2VsVVJMJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW5jZWxVUkxUaXRsZShjYW5jZWxVUkxUaXRsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdjYW5jZWxVUkxUaXRsZScsIGNhbmNlbFVSTFRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYW5jZWxVUkxUaXRsZShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnY2FuY2VsVVJMVGl0bGUnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNob3BVUkwoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3Nob3BVUkwnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqIEBhbGlhcyBzZXRBcGlLZXlSb2xlXHJcbiAgICAgKiBAcGFyYW0gcm9sZVxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHNldFJvbGUocm9sZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldEFwaUtleVJvbGUocm9sZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICogQGFsaWFzIGdldEFwaUtleVJvbGVcclxuICAgICAqIEBwYXJhbSBkZWZcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBnZXRSb2xlKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFwaUtleVJvbGUoZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBcGlLZXlSb2xlKGFwaUtleVJvbGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnYXBpS2V5Um9sZScsIGFwaUtleVJvbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFwaUtleVJvbGUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2FwaUtleVJvbGUnLCBkZWYpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5cclxuaW1wb3J0IEJhc2VFbnRpdHkgZnJvbSAnLi9CYXNlRW50aXR5JztcclxuaW1wb3J0IExpY2Vuc2VUcmFuc2FjdGlvbkpvaW4gZnJvbSAnLi9MaWNlbnNlVHJhbnNhY3Rpb25Kb2luJztcclxuaW1wb3J0IExpY2Vuc2UgZnJvbSAnLi9MaWNlbnNlJztcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2FjdGlvbiBlbnRpdHkgdXNlZCBpbnRlcm5hbGx5IGJ5IE5ldExpY2Vuc2luZy5cclxuICpcclxuICogUHJvcGVydGllcyB2aXNpYmxlIHZpYSBOZXRMaWNlbnNpbmcgQVBJOlxyXG4gKlxyXG4gKiBVbmlxdWUgbnVtYmVyIChhY3Jvc3MgYWxsIHByb2R1Y3RzIG9mIGEgdmVuZG9yKSB0aGF0IGlkZW50aWZpZXMgdGhlIHRyYW5zYWN0aW9uLiBUaGlzIG51bWJlciBpc1xyXG4gKiBhbHdheXMgZ2VuZXJhdGVkIGJ5IE5ldExpY2Vuc2luZy5cclxuICogQHByb3BlcnR5IHN0cmluZyBudW1iZXJcclxuICpcclxuICogYWx3YXlzIHRydWUgZm9yIHRyYW5zYWN0aW9uc1xyXG4gKiBAcHJvcGVydHkgYm9vbGVhbiBhY3RpdmVcclxuICpcclxuICogU3RhdHVzIG9mIHRyYW5zYWN0aW9uLiBcIkNBTkNFTExFRFwiLCBcIkNMT1NFRFwiLCBcIlBFTkRJTkdcIi5cclxuICogQHByb3BlcnR5IHN0cmluZyBzdGF0dXNcclxuICpcclxuICogXCJTSE9QXCIuIEFVVE8gdHJhbnNhY3Rpb24gZm9yIGludGVybmFsIHVzZSBvbmx5LlxyXG4gKiBAcHJvcGVydHkgc3RyaW5nIHNvdXJjZVxyXG4gKlxyXG4gKiBncmFuZCB0b3RhbCBmb3IgU0hPUCB0cmFuc2FjdGlvbiAoc2VlIHNvdXJjZSkuXHJcbiAqIEBwcm9wZXJ0eSBmbG9hdCBncmFuZFRvdGFsXHJcbiAqXHJcbiAqIGRpc2NvdW50IGZvciBTSE9QIHRyYW5zYWN0aW9uIChzZWUgc291cmNlKS5cclxuICogQHByb3BlcnR5IGZsb2F0IGRpc2NvdW50XHJcbiAqXHJcbiAqIHNwZWNpZmllcyBjdXJyZW5jeSBmb3IgbW9uZXkgZmllbGRzIChncmFuZFRvdGFsIGFuZCBkaXNjb3VudCkuIENoZWNrIGRhdGEgdHlwZXMgdG8gZGlzY292ZXIgd2hpY2hcclxuICogQHByb3BlcnR5IHN0cmluZyBjdXJyZW5jeVxyXG4gKlxyXG4gKiBEYXRlIGNyZWF0ZWQuIE9wdGlvbmFsLlxyXG4gKiBAcHJvcGVydHkgc3RyaW5nIGRhdGVDcmVhdGVkXHJcbiAqXHJcbiAqIERhdGUgY2xvc2VkLiBPcHRpb25hbC5cclxuICogQHByb3BlcnR5IHN0cmluZyBkYXRlQ2xvc2VkXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNhY3Rpb24gZXh0ZW5kcyBCYXNlRW50aXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIC8vIFRoZSBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIGNhc3QgdG8gbmF0aXZlIHR5cGVzLlxyXG4gICAgICAgICAgICBjYXN0czoge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBncmFuZFRvdGFsOiAnZmxvYXQnLFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnQ6ICdmbG9hdCcsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBkYXRlQ3JlYXRlZDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUNsb3NlZDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ251bWJlcicsIG51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdudW1iZXInLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCduYW1lJywgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnbmFtZScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzKHN0YXR1cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdzdGF0dXMnLCBzdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXR1cyhkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnc3RhdHVzJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTb3VyY2Uoc291cmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ3NvdXJjZScsIHNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U291cmNlKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdzb3VyY2UnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdyYW5kVG90YWwoZ3JhbmRUb3RhbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdncmFuZFRvdGFsJywgZ3JhbmRUb3RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R3JhbmRUb3RhbChkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnZ3JhbmRUb3RhbCcsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzY291bnQoZGlzY291bnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnZGlzY291bnQnLCBkaXNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlzY291bnQoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2Rpc2NvdW50JywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW5jeShjdXJyZW5jeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdjdXJyZW5jeScsIGN1cnJlbmN5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW5jeShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgnY3VycmVuY3knLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGVDcmVhdGVkKGRhdGVDcmVhdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ2RhdGVDcmVhdGVkJywgZGF0ZUNyZWF0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVDcmVhdGVkKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdkYXRlQ3JlYXRlZCcsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0ZUNsb3NlZChkYXRlQ2xvc2VkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ2RhdGVDbG9zZWQnLCBkYXRlQ2xvc2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlQ2xvc2VkKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KCdkYXRlQ2xvc2VkJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgncGF5bWVudE1ldGhvZCcsIHBheW1lbnRNZXRob2QpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBheW1lbnRNZXRob2QoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3BheW1lbnRNZXRob2QnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnYWN0aXZlJywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGljZW5zZVRyYW5zYWN0aW9uSm9pbnMoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ2xpY2Vuc2VUcmFuc2FjdGlvbkpvaW5zJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaWNlbnNlVHJhbnNhY3Rpb25Kb2lucyhsaWNlbnNlVHJhbnNhY3Rpb25Kb2lucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdsaWNlbnNlVHJhbnNhY3Rpb25Kb2lucycsIGxpY2Vuc2VUcmFuc2FjdGlvbkpvaW5zKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0TGljZW5zZVRyYW5zYWN0aW9uSm9pbihwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0aWVzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGxpY2Vuc2VUcmFuc2FjdGlvbkpvaW5zID0gdGhpcy5nZXRQcm9wZXJ0eSgnbGljZW5zZVRyYW5zYWN0aW9uSm9pbnMnLCBbXSk7XHJcbiAgICAgICAgY29uc3QgbGljZW5zZVRyYW5zYWN0aW9uSm9pbiA9IG5ldyBMaWNlbnNlVHJhbnNhY3Rpb25Kb2luKCk7XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5Lm5hbWUgPT09ICdsaWNlbnNlTnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgbGljZW5zZVRyYW5zYWN0aW9uSm9pbi5zZXRMaWNlbnNlKG5ldyBMaWNlbnNlKHsgbnVtYmVyOiBwcm9wZXJ0eS52YWx1ZSB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eS5uYW1lID09PSAndHJhbnNhY3Rpb25OdW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBsaWNlbnNlVHJhbnNhY3Rpb25Kb2luLnNldFRyYW5zYWN0aW9uKG5ldyBUcmFuc2FjdGlvbih7IG51bWJlcjogcHJvcGVydHkudmFsdWUgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxpY2Vuc2VUcmFuc2FjdGlvbkpvaW5zLnB1c2gobGljZW5zZVRyYW5zYWN0aW9uSm9pbik7XHJcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eSgnbGljZW5zZVRyYW5zYWN0aW9uSm9pbnMnLCBsaWNlbnNlVHJhbnNhY3Rpb25Kb2lucyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmxpY0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHt9O1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSB7fTtcclxuICAgICAgICB0aGlzLnJlcXVlc3QgPSB7fTtcclxuICAgICAgICB0aGlzLmNvZGUgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy5pc05saWNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0F4aW9zRXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBTdGFuZGFyZFxyXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgLy8gTWljcm9zb2Z0XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxyXG4gICAgICAgICAgICAvLyBNb3ppbGxhXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxyXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXHJcbiAgICAgICAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxyXG4gICAgICAgICAgICAvLyBBeGlvc1xyXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxyXG4gICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciAgICBMYWJzNjQgPG5ldGxpY2Vuc2luZ0BsYWJzNjQuY29tPlxyXG4gKiBAbGljZW5zZSAgIEFwYWNoZS0yLjBcclxuICogQGxpbmsgICAgICBodHRwczovL25ldGxpY2Vuc2luZy5pb1xyXG4gKiBAY29weXJpZ2h0IDIwMTcgTGFiczY0IE5ldExpY2Vuc2luZ1xyXG4gKi9cclxuXHJcbmltcG9ydCBDaGVja1V0aWxzIGZyb20gJy4uL3V0aWwvQ2hlY2tVdGlscyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9TZXJ2aWNlJztcclxuaW1wb3J0IEZpbHRlclV0aWxzIGZyb20gJy4uL3V0aWwvRmlsdGVyVXRpbHMnO1xyXG5pbXBvcnQgaXRlbVRvTGljZW5zZSBmcm9tICcuLi9jb252ZXJ0ZXJzL2l0ZW1Ub0xpY2Vuc2UnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi92by9QYWdlJztcclxuXHJcbi8qKlxyXG4gKiBKUyByZXByZXNlbnRhdGlvbiBvZiB0aGUgTGljZW5zZSBTZXJ2aWNlLiBTZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gKiBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL2xpY2Vuc2Utc2VydmljZXNcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIG5ldyBsaWNlbnNlIG9iamVjdCB3aXRoIGdpdmVuIHByb3BlcnRpZXMuU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS9saWNlbnNlLXNlcnZpY2VzI2NyZWF0ZS1saWNlbnNlXHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogcGFyZW50IGxpY2Vuc2VlIHRvIHdoaWNoIHRoZSBuZXcgbGljZW5zZSBpcyB0byBiZSBhZGRlZFxyXG4gICAgICogQHBhcmFtIGxpY2Vuc2VlTnVtYmVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqICBsaWNlbnNlIHRlbXBsYXRlIHRoYXQgdGhlIGxpY2Vuc2UgaXMgY3JlYXRlZCBmcm9tXHJcbiAgICAgKiBAcGFyYW0gbGljZW5zZVRlbXBsYXRlTnVtYmVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIEZvciBwcml2aWxlZ2VkIGxvZ2lucyBzcGVjaWZpZXMgdHJhbnNhY3Rpb24gZm9yIHRoZSBsaWNlbnNlIGNyZWF0aW9uLiBGb3IgcmVndWxhciBsb2dpbnMgbmV3XHJcbiAgICAgKiB0cmFuc2FjdGlvbiBhbHdheXMgY3JlYXRlZCBpbXBsaWNpdGx5LCBhbmQgdGhlIG9wZXJhdGlvbiB3aWxsIGJlIGluIGEgc2VwYXJhdGUgdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBUcmFuc2FjdGlvbiBpcyBnZW5lcmF0ZWQgd2l0aCB0aGUgcHJvdmlkZWQgdHJhbnNhY3Rpb25OdW1iZXIsIG9yLCBpZiB0cmFuc2FjdGlvbk51bWJlciBpcyBudWxsLCB3aXRoXHJcbiAgICAgKiBhdXRvLWdlbmVyYXRlZCBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb25OdW1iZXIgbnVsbHxzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBub24tbnVsbCBwcm9wZXJ0aWVzIHdpbGwgYmUgdGFrZW4gZm9yIHRoZSBuZXcgb2JqZWN0LCBudWxsIHByb3BlcnRpZXMgd2lsbCBlaXRoZXIgc3RheSBudWxsLCBvciB3aWxsXHJcbiAgICAgKiBiZSBzZXQgdG8gYSBkZWZhdWx0IHZhbHVlLCBkZXBlbmRpbmcgb24gcHJvcGVydHkuXHJcbiAgICAgKiBAcGFyYW0gbGljZW5zZSBOZXRMaWNlbnNpbmcuTGljZW5zZVxyXG4gICAgICpcclxuICAgICAqIHJldHVybiB0aGUgbmV3bHkgY3JlYXRlZCBsaWNlbnNlIG9iamVjdCBpbiBwcm9taXNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgY3JlYXRlKGNvbnRleHQsIGxpY2Vuc2VlTnVtYmVyLCBsaWNlbnNlVGVtcGxhdGVOdW1iZXIsIHRyYW5zYWN0aW9uTnVtYmVyLCBsaWNlbnNlKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KGxpY2Vuc2VlTnVtYmVyLCBDb25zdGFudHMuTGljZW5zZWUuTElDRU5TRUVfTlVNQkVSKTtcclxuICAgICAgICBDaGVja1V0aWxzLnBhcmFtTm90RW1wdHkobGljZW5zZVRlbXBsYXRlTnVtYmVyLCBDb25zdGFudHMuTGljZW5zZVRlbXBsYXRlLkxJQ0VOU0VfVEVNUExBVEVfTlVNQkVSKTtcclxuXHJcbiAgICAgICAgbGljZW5zZS5zZXRQcm9wZXJ0eShDb25zdGFudHMuTGljZW5zZWUuTElDRU5TRUVfTlVNQkVSLCBsaWNlbnNlZU51bWJlcik7XHJcbiAgICAgICAgbGljZW5zZS5zZXRQcm9wZXJ0eShDb25zdGFudHMuTGljZW5zZVRlbXBsYXRlLkxJQ0VOU0VfVEVNUExBVEVfTlVNQkVSLCBsaWNlbnNlVGVtcGxhdGVOdW1iZXIpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNhY3Rpb25OdW1iZXIpIGxpY2Vuc2Uuc2V0UHJvcGVydHkoQ29uc3RhbnRzLlRyYW5zYWN0aW9uLlRSQU5TQUNUSU9OX05VTUJFUiwgdHJhbnNhY3Rpb25OdW1iZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgaXRlbXM6IHsgaXRlbTogaXRlbXMgfSB9IH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5wb3N0KGNvbnRleHQsIENvbnN0YW50cy5MaWNlbnNlLkVORFBPSU5UX1BBVEgsIGxpY2Vuc2UuYXNQcm9wZXJ0aWVzTWFwKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBbaXRlbV0gPSBpdGVtcy5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnTGljZW5zZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvTGljZW5zZShpdGVtKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGxpY2Vuc2UgYnkgaXRzIG51bWJlci5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL2xpY2Vuc2Utc2VydmljZXMjZ2V0LWxpY2Vuc2VcclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiB0aGUgbGljZW5zZSBudW1iZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIHRoZSBsaWNlbnNlIGluIHByb21pc2VcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXQoY29udGV4dCwgbnVtYmVyKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KG51bWJlciwgQ29uc3RhbnRzLk5VTUJFUik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBpdGVtczogeyBpdGVtOiBpdGVtcyB9IH0gfSA9IGF3YWl0IFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldChjb250ZXh0LCBgJHtDb25zdGFudHMuTGljZW5zZS5FTkRQT0lOVF9QQVRIfS8ke251bWJlcn1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgW2l0ZW1dID0gaXRlbXMuZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ0xpY2Vuc2UnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1Ub0xpY2Vuc2UoaXRlbSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBsaWNlbnNlcyBvZiBhIHZlbmRvci5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL2xpY2Vuc2Utc2VydmljZXMjbGljZW5zZXMtbGlzdFxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIHJlc2VydmVkIGZvciB0aGUgZnV0dXJlIHVzZSwgbXVzdCBiZSBvbWl0dGVkIC8gc2V0IHRvIE5VTExcclxuICAgICAqIEBwYXJhbSBmaWx0ZXIgc3RyaW5nfG51bGxcclxuICAgICAqXHJcbiAgICAgKiByZXR1cm4gYXJyYXkgb2YgbGljZW5zZXMgKG9mIGFsbCBwcm9kdWN0cykgb3IgZW1wdHkgYXJyYXkgaWYgbm90aGluZyBmb3VuZCBpbiBwcm9taXNlLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGxpc3QoY29udGV4dCwgZmlsdGVyKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcikge1xyXG4gICAgICAgICAgICBpZiAoIUNoZWNrVXRpbHMuaXNWYWxpZChmaWx0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBmaWx0ZXIgaGFzIGJhZCB2YWx1ZSAke2ZpbHRlcn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtc1tDb25zdGFudHMuRklMVEVSXSA9IHR5cGVvZiBmaWx0ZXIgPT09ICdzdHJpbmcnID8gZmlsdGVyIDogRmlsdGVyVXRpbHMuZW5jb2RlKGZpbHRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldChjb250ZXh0LCBDb25zdGFudHMuTGljZW5zZS5FTkRQT0lOVF9QQVRILCBxdWVyeVBhcmFtcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBQYWdlKFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW0uZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ0xpY2Vuc2UnKS5tYXAoKHYpID0+IGl0ZW1Ub0xpY2Vuc2UodikpLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnBhZ2VudW1iZXIsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMuaXRlbXNudW1iZXIsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMudG90YWxwYWdlcyxcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy50b3RhbGl0ZW1zLFxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBsaWNlbnNlIHByb3BlcnRpZXMuU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS9saWNlbnNlLXNlcnZpY2VzI3VwZGF0ZS1saWNlbnNlXHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogbGljZW5zZSBudW1iZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogdHJhbnNhY3Rpb24gZm9yIHRoZSBsaWNlbnNlIHVwZGF0ZS4gQ3JlYXRlZCBpbXBsaWNpdGx5IGlmIHRyYW5zYWN0aW9uTnVtYmVyIGlzIG51bGwuIEluIHRoaXMgY2FzZSB0aGVcclxuICAgICAqIG9wZXJhdGlvbiB3aWxsIGJlIGluIGEgc2VwYXJhdGUgdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb25OdW1iZXIgc3RyaW5nfG51bGxcclxuICAgICAqXHJcbiAgICAgKiBub24tbnVsbCBwcm9wZXJ0aWVzIHdpbGwgYmUgdXBkYXRlZCB0byB0aGUgcHJvdmlkZWQgdmFsdWVzLCBudWxsIHByb3BlcnRpZXMgd2lsbCBzdGF5IHVuY2hhbmdlZC5cclxuICAgICAqIEBwYXJhbSBsaWNlbnNlIE5ldExpY2Vuc2luZy5MaWNlbnNlXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIHVwZGF0ZWQgbGljZW5zZSBpbiBwcm9taXNlLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHVwZGF0ZShjb250ZXh0LCBudW1iZXIsIHRyYW5zYWN0aW9uTnVtYmVyLCBsaWNlbnNlKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KG51bWJlciwgQ29uc3RhbnRzLk5VTUJFUik7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2FjdGlvbk51bWJlcikgbGljZW5zZS5zZXRQcm9wZXJ0eShDb25zdGFudHMuVHJhbnNhY3Rpb24uVFJBTlNBQ1RJT05fTlVNQkVSLCB0cmFuc2FjdGlvbk51bWJlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBpdGVtczogeyBpdGVtOiBpdGVtcyB9IH0gfSA9IGF3YWl0IFNlcnZpY2VcclxuICAgICAgICAgICAgLnBvc3QoY29udGV4dCwgYCR7Q29uc3RhbnRzLkxpY2Vuc2UuRU5EUE9JTlRfUEFUSH0vJHtudW1iZXJ9YCwgbGljZW5zZS5hc1Byb3BlcnRpZXNNYXAoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtpdGVtXSA9IGl0ZW1zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdMaWNlbnNlJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtVG9MaWNlbnNlKGl0ZW0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgbGljZW5zZS5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL2xpY2Vuc2Utc2VydmljZXMjZGVsZXRlLWxpY2Vuc2VcclxuICAgICAqXHJcbiAgICAgKiBXaGVuIGFueSBsaWNlbnNlIGlzIGRlbGV0ZWQsIGNvcnJlc3BvbmRpbmcgdHJhbnNhY3Rpb24gaXMgY3JlYXRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgICpcclxuICAgICAqICBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiBsaWNlbnNlIG51bWJlclxyXG4gICAgICogQHBhcmFtIG51bWJlciBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBpZiB0cnVlLCBhbnkgZW50aXRpZXMgdGhhdCBkZXBlbmQgb24gdGhlIG9uZSBiZWluZyBkZWxldGVkIHdpbGwgYmUgZGVsZXRlZCB0b29cclxuICAgICAqIEBwYXJhbSBmb3JjZUNhc2NhZGUgYm9vbGVhblxyXG4gICAgICpcclxuICAgICAqIHJldHVybiBib29sZWFuIHN0YXRlIG9mIGRlbGV0ZSBpbiBwcm9taXNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgZGVsZXRlKGNvbnRleHQsIG51bWJlciwgZm9yY2VDYXNjYWRlKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KG51bWJlciwgQ29uc3RhbnRzLk5VTUJFUik7XHJcblxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0geyBmb3JjZUNhc2NhZGU6IEJvb2xlYW4oZm9yY2VDYXNjYWRlKSB9O1xyXG5cclxuICAgICAgICByZXR1cm4gU2VydmljZVxyXG4gICAgICAgICAgICAuZGVsZXRlKGNvbnRleHQsIGAke0NvbnN0YW50cy5MaWNlbnNlLkVORFBPSU5UX1BBVEh9LyR7bnVtYmVyfWAsIHF1ZXJ5UGFyYW1zKTtcclxuICAgIH0sXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5cclxuaW1wb3J0IENoZWNrVXRpbHMgZnJvbSAnLi4vdXRpbC9DaGVja1V0aWxzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL1NlcnZpY2UnO1xyXG5pbXBvcnQgRmlsdGVyVXRpbHMgZnJvbSAnLi4vdXRpbC9GaWx0ZXJVdGlscyc7XHJcbmltcG9ydCBpdGVtVG9MaWNlbnNlVGVtcGxhdGUgZnJvbSAnLi4vY29udmVydGVycy9pdGVtVG9MaWNlbnNlVGVtcGxhdGUnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi92by9QYWdlJztcclxuXHJcbi8qKlxyXG4gKiBKUyByZXByZXNlbnRhdGlvbiBvZiB0aGUgUHJvZHVjdE1vZHVsZSBTZXJ2aWNlLiBTZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gKiBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL2xpY2Vuc2UtdGVtcGxhdGUtc2VydmljZXNcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIG5ldyBsaWNlbnNlIHRlbXBsYXRlIG9iamVjdCB3aXRoIGdpdmVuIHByb3BlcnRpZXMuU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS9saWNlbnNlLXRlbXBsYXRlLXNlcnZpY2VzI2NyZWF0ZS1saWNlbnNlLXRlbXBsYXRlXHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogcGFyZW50IHByb2R1Y3QgbW9kdWxlIHRvIHdoaWNoIHRoZSBuZXcgbGljZW5zZSB0ZW1wbGF0ZSBpcyB0byBiZSBhZGRlZFxyXG4gICAgICogQHBhcmFtIHByb2R1Y3RNb2R1bGVOdW1iZXJcclxuICAgICAqXHJcbiAgICAgKiBub24tbnVsbCBwcm9wZXJ0aWVzIHdpbGwgYmUgdGFrZW4gZm9yIHRoZSBuZXcgb2JqZWN0LCBudWxsIHByb3BlcnRpZXMgd2lsbCBlaXRoZXIgc3RheSBudWxsLCBvciB3aWxsXHJcbiAgICAgKiBiZSBzZXQgdG8gYSBkZWZhdWx0IHZhbHVlLCBkZXBlbmRpbmcgb24gcHJvcGVydHkuXHJcbiAgICAgKiBAcGFyYW0gbGljZW5zZVRlbXBsYXRlIE5ldExpY2Vuc2luZy5MaWNlbnNlVGVtcGxhdGVcclxuICAgICAqXHJcbiAgICAgKiB0aGUgbmV3bHkgY3JlYXRlZCBsaWNlbnNlIHRlbXBsYXRlIG9iamVjdCBpbiBwcm9taXNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgY3JlYXRlKGNvbnRleHQsIHByb2R1Y3RNb2R1bGVOdW1iZXIsIGxpY2Vuc2VUZW1wbGF0ZSkge1xyXG4gICAgICAgIENoZWNrVXRpbHMucGFyYW1Ob3RFbXB0eShwcm9kdWN0TW9kdWxlTnVtYmVyLCBDb25zdGFudHMuUHJvZHVjdE1vZHVsZS5QUk9EVUNUX01PRFVMRV9OVU1CRVIpO1xyXG5cclxuICAgICAgICBsaWNlbnNlVGVtcGxhdGUuc2V0UHJvcGVydHkoQ29uc3RhbnRzLlByb2R1Y3RNb2R1bGUuUFJPRFVDVF9NT0RVTEVfTlVNQkVSLCBwcm9kdWN0TW9kdWxlTnVtYmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IGl0ZW1zOiB7IGl0ZW06IGl0ZW1zIH0gfSB9ID0gYXdhaXQgU2VydmljZVxyXG4gICAgICAgICAgICAucG9zdChjb250ZXh0LCBDb25zdGFudHMuTGljZW5zZVRlbXBsYXRlLkVORFBPSU5UX1BBVEgsIGxpY2Vuc2VUZW1wbGF0ZS5hc1Byb3BlcnRpZXNNYXAoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtpdGVtXSA9IGl0ZW1zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdMaWNlbnNlVGVtcGxhdGUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1Ub0xpY2Vuc2VUZW1wbGF0ZShpdGVtKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGxpY2Vuc2UgdGVtcGxhdGUgYnkgaXRzIG51bWJlci5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL2xpY2Vuc2UtdGVtcGxhdGUtc2VydmljZXMjZ2V0LWxpY2Vuc2UtdGVtcGxhdGVcclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiB0aGUgbGljZW5zZSB0ZW1wbGF0ZSBudW1iZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIHRoZSBsaWNlbnNlIHRlbXBsYXRlIG9iamVjdCBpbiBwcm9taXNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0KGNvbnRleHQsIG51bWJlcikge1xyXG4gICAgICAgIENoZWNrVXRpbHMucGFyYW1Ob3RFbXB0eShudW1iZXIsIENvbnN0YW50cy5OVU1CRVIpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgaXRlbXM6IHsgaXRlbTogaXRlbXMgfSB9IH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoY29udGV4dCwgYCR7Q29uc3RhbnRzLkxpY2Vuc2VUZW1wbGF0ZS5FTkRQT0lOVF9QQVRIfS8ke251bWJlcn1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgW2l0ZW1dID0gaXRlbXMuZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ0xpY2Vuc2VUZW1wbGF0ZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvTGljZW5zZVRlbXBsYXRlKGl0ZW0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYWxsIGxpY2Vuc2UgdGVtcGxhdGVzIG9mIGEgdmVuZG9yLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvbGljZW5zZS10ZW1wbGF0ZS1zZXJ2aWNlcyNsaWNlbnNlLXRlbXBsYXRlcy1saXN0XHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogcmVzZXJ2ZWQgZm9yIHRoZSBmdXR1cmUgdXNlLCBtdXN0IGJlIG9taXR0ZWQgLyBzZXQgdG8gTlVMTFxyXG4gICAgICogQHBhcmFtIGZpbHRlciBzdHJpbmd8bnVsbFxyXG4gICAgICpcclxuICAgICAqIGFycmF5IG9mIGxpY2Vuc2UgdGVtcGxhdGVzIChvZiBhbGwgcHJvZHVjdHMvbW9kdWxlcykgb3IgbnVsbC9lbXB0eSBsaXN0IGlmIG5vdGhpbmcgZm91bmQgaW4gcHJvbWlzZS5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBsaXN0KGNvbnRleHQsIGZpbHRlcikge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge307XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFDaGVja1V0aWxzLmlzVmFsaWQoZmlsdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgZmlsdGVyIGhhcyBiYWQgdmFsdWUgJHtmaWx0ZXJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVlcnlQYXJhbXNbQ29uc3RhbnRzLkZJTFRFUl0gPSB0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyA/IGZpbHRlciA6IEZpbHRlclV0aWxzLmVuY29kZShmaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoY29udGV4dCwgQ29uc3RhbnRzLkxpY2Vuc2VUZW1wbGF0ZS5FTkRQT0lOVF9QQVRILCBxdWVyeVBhcmFtcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBQYWdlKFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW0uZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ0xpY2Vuc2VUZW1wbGF0ZScpLm1hcCgodikgPT4gaXRlbVRvTGljZW5zZVRlbXBsYXRlKHYpKSxcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy5wYWdlbnVtYmVyLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW1zbnVtYmVyLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnRvdGFscGFnZXMsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMudG90YWxpdGVtcyxcclxuICAgICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgbGljZW5zZSB0ZW1wbGF0ZSBwcm9wZXJ0aWVzLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvbGljZW5zZS10ZW1wbGF0ZS1zZXJ2aWNlcyN1cGRhdGUtbGljZW5zZS10ZW1wbGF0ZVxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIGxpY2Vuc2UgdGVtcGxhdGUgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIG5vbi1udWxsIHByb3BlcnRpZXMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZSBwcm92aWRlZCB2YWx1ZXMsIG51bGwgcHJvcGVydGllcyB3aWxsIHN0YXkgdW5jaGFuZ2VkLlxyXG4gICAgICogQHBhcmFtIGxpY2Vuc2VUZW1wbGF0ZSBOZXRMaWNlbnNpbmcuTGljZW5zZVRlbXBsYXRlXHJcbiAgICAgKlxyXG4gICAgICogdXBkYXRlZCBsaWNlbnNlIHRlbXBsYXRlIGluIHByb21pc2UuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgdXBkYXRlKGNvbnRleHQsIG51bWJlciwgbGljZW5zZVRlbXBsYXRlKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KG51bWJlciwgQ29uc3RhbnRzLk5VTUJFUik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtDb25zdGFudHMuTGljZW5zZVRlbXBsYXRlLkVORFBPSU5UX1BBVEh9LyR7bnVtYmVyfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBpdGVtczogeyBpdGVtOiBpdGVtcyB9IH0gfSA9IGF3YWl0IFNlcnZpY2VcclxuICAgICAgICAgICAgLnBvc3QoY29udGV4dCwgcGF0aCwgbGljZW5zZVRlbXBsYXRlLmFzUHJvcGVydGllc01hcCgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgW2l0ZW1dID0gaXRlbXMuZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ0xpY2Vuc2VUZW1wbGF0ZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvTGljZW5zZVRlbXBsYXRlKGl0ZW0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgbGljZW5zZSB0ZW1wbGF0ZS5TZWUgTmV0TGljZW5zaW5nQVBJIEphdmFEb2MgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvbGljZW5zZS10ZW1wbGF0ZS1zZXJ2aWNlcyNkZWxldGUtbGljZW5zZS10ZW1wbGF0ZVxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIGxpY2Vuc2UgdGVtcGxhdGUgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIGlmIHRydWUsIGFueSBlbnRpdGllcyB0aGF0IGRlcGVuZCBvbiB0aGUgb25lIGJlaW5nIGRlbGV0ZWQgd2lsbCBiZSBkZWxldGVkIHRvb1xyXG4gICAgICogQHBhcmFtIGZvcmNlQ2FzY2FkZSBib29sZWFuXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIGJvb2xlYW4gc3RhdGUgb2YgZGVsZXRlIGluIHByb21pc2VcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBkZWxldGUoY29udGV4dCwgbnVtYmVyLCBmb3JjZUNhc2NhZGUpIHtcclxuICAgICAgICBDaGVja1V0aWxzLnBhcmFtTm90RW1wdHkobnVtYmVyLCBDb25zdGFudHMuTlVNQkVSKTtcclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7IGZvcmNlQ2FzY2FkZTogQm9vbGVhbihmb3JjZUNhc2NhZGUpIH07XHJcblxyXG4gICAgICAgIHJldHVybiBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5kZWxldGUoY29udGV4dCwgYCR7Q29uc3RhbnRzLkxpY2Vuc2VUZW1wbGF0ZS5FTkRQT0lOVF9QQVRIfS8ke251bWJlcn1gLCBxdWVyeVBhcmFtcyk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciAgICBMYWJzNjQgPG5ldGxpY2Vuc2luZ0BsYWJzNjQuY29tPlxyXG4gKiBAbGljZW5zZSAgIEFwYWNoZS0yLjBcclxuICogQGxpbmsgICAgICBodHRwczovL25ldGxpY2Vuc2luZy5pb1xyXG4gKiBAY29weXJpZ2h0IDIwMTcgTGFiczY0IE5ldExpY2Vuc2luZ1xyXG4gKi9cclxuXHJcbmltcG9ydCBDaGVja1V0aWxzIGZyb20gJy4uL3V0aWwvQ2hlY2tVdGlscyc7XHJcbmltcG9ydCBGaWx0ZXJVdGlscyBmcm9tICcuLi91dGlsL0ZpbHRlclV0aWxzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL1NlcnZpY2UnO1xyXG5pbXBvcnQgVmFsaWRhdGlvblJlc3VsdHMgZnJvbSAnLi4vdm8vVmFsaWRhdGlvblJlc3VsdHMnO1xyXG5pbXBvcnQgaXRlbVRvTGljZW5zZWUgZnJvbSAnLi4vY29udmVydGVycy9pdGVtVG9MaWNlbnNlZSc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL3ZvL1BhZ2UnO1xyXG5pbXBvcnQgaXRlbVRvT2JqZWN0IGZyb20gJy4uL2NvbnZlcnRlcnMvaXRlbVRvT2JqZWN0JztcclxuXHJcbi8qKlxyXG4gKiBKUyByZXByZXNlbnRhdGlvbiBvZiB0aGUgTGljZW5zZWUgU2VydmljZS4gU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICogaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS9saWNlbnNlZS1zZXJ2aWNlc1xyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgbmV3IGxpY2Vuc2VlIG9iamVjdCB3aXRoIGdpdmVuIHByb3BlcnRpZXMuU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS9saWNlbnNlZS1zZXJ2aWNlcyNjcmVhdGUtbGljZW5zZWVcclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiBwYXJlbnQgcHJvZHVjdCB0byB3aGljaCB0aGUgbmV3IGxpY2Vuc2VlIGlzIHRvIGJlIGFkZGVkXHJcbiAgICAgKiBAcGFyYW0gcHJvZHVjdE51bWJlciBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBub24tbnVsbCBwcm9wZXJ0aWVzIHdpbGwgYmUgdGFrZW4gZm9yIHRoZSBuZXcgb2JqZWN0LCBudWxsIHByb3BlcnRpZXMgd2lsbCBlaXRoZXIgc3RheSBudWxsLCBvciB3aWxsXHJcbiAgICAgKiBiZSBzZXQgdG8gYSBkZWZhdWx0IHZhbHVlLCBkZXBlbmRpbmcgb24gcHJvcGVydHkuXHJcbiAgICAgKiBAcGFyYW0gbGljZW5zZWUgTmV0TGljZW5zaW5nLkxpY2Vuc2VlXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIHRoZSBuZXdseSBjcmVhdGVkIGxpY2Vuc2VlIG9iamVjdCBpbiBwcm9taXNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgY3JlYXRlKGNvbnRleHQsIHByb2R1Y3ROdW1iZXIsIGxpY2Vuc2VlKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KHByb2R1Y3ROdW1iZXIsIENvbnN0YW50cy5Qcm9kdWN0LlBST0RVQ1RfTlVNQkVSKTtcclxuXHJcbiAgICAgICAgbGljZW5zZWUuc2V0UHJvcGVydHkoQ29uc3RhbnRzLlByb2R1Y3QuUFJPRFVDVF9OVU1CRVIsIHByb2R1Y3ROdW1iZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgaXRlbXM6IHsgaXRlbTogaXRlbXMgfSB9IH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5wb3N0KGNvbnRleHQsIENvbnN0YW50cy5MaWNlbnNlZS5FTkRQT0lOVF9QQVRILCBsaWNlbnNlZS5hc1Byb3BlcnRpZXNNYXAoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtpdGVtXSA9IGl0ZW1zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdMaWNlbnNlZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvTGljZW5zZWUoaXRlbSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBsaWNlbnNlZSBieSBpdHMgbnVtYmVyLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvbGljZW5zZWUtc2VydmljZXMjZ2V0LWxpY2Vuc2VlXHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogdGhlIGxpY2Vuc2VlIG51bWJlclxyXG4gICAgICogQHBhcmFtIG51bWJlciBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiByZXR1cm4gdGhlIGxpY2Vuc2VlIGluIHByb21pc2VcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXQoY29udGV4dCwgbnVtYmVyKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KG51bWJlciwgQ29uc3RhbnRzLk5VTUJFUik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBpdGVtczogeyBpdGVtOiBpdGVtcyB9IH0gfSA9IGF3YWl0IFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldChjb250ZXh0LCBgJHtDb25zdGFudHMuTGljZW5zZWUuRU5EUE9JTlRfUEFUSH0vJHtudW1iZXJ9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtpdGVtXSA9IGl0ZW1zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdMaWNlbnNlZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvTGljZW5zZWUoaXRlbSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbGwgbGljZW5zZWVzIG9mIGEgdmVuZG9yLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvbGljZW5zZWUtc2VydmljZXMjbGljZW5zZWVzLWxpc3RcclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiByZXNlcnZlZCBmb3IgdGhlIGZ1dHVyZSB1c2UsIG11c3QgYmUgb21pdHRlZCAvIHNldCB0byBOVUxMXHJcbiAgICAgKiBAcGFyYW0gZmlsdGVyIHN0cmluZ3xudWxsXHJcbiAgICAgKlxyXG4gICAgICogYXJyYXkgb2YgbGljZW5zZWVzIChvZiBhbGwgcHJvZHVjdHMpIG9yIGVtcHR5IGFycmF5IGlmIG5vdGhpbmcgZm91bmQgaW4gcHJvbWlzZS5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBsaXN0KGNvbnRleHQsIGZpbHRlcikge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge307XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFDaGVja1V0aWxzLmlzVmFsaWQoZmlsdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgZmlsdGVyIGhhcyBiYWQgdmFsdWUgJHtmaWx0ZXJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVlcnlQYXJhbXNbQ29uc3RhbnRzLkZJTFRFUl0gPSB0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyA/IGZpbHRlciA6IEZpbHRlclV0aWxzLmVuY29kZShmaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoY29udGV4dCwgQ29uc3RhbnRzLkxpY2Vuc2VlLkVORFBPSU5UX1BBVEgsIHF1ZXJ5UGFyYW1zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFBhZ2UoXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMuaXRlbS5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnTGljZW5zZWUnKS5tYXAoKHYpID0+IGl0ZW1Ub0xpY2Vuc2VlKHYpKSxcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy5wYWdlbnVtYmVyLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW1zbnVtYmVyLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnRvdGFscGFnZXMsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMudG90YWxpdGVtcyxcclxuICAgICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgbGljZW5zZWUgcHJvcGVydGllcy5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL2xpY2Vuc2VlLXNlcnZpY2VzI3VwZGF0ZS1saWNlbnNlZVxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIGxpY2Vuc2VlIG51bWJlclxyXG4gICAgICogQHBhcmFtIG51bWJlciBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBub24tbnVsbCBwcm9wZXJ0aWVzIHdpbGwgYmUgdXBkYXRlZCB0byB0aGUgcHJvdmlkZWQgdmFsdWVzLCBudWxsIHByb3BlcnRpZXMgd2lsbCBzdGF5IHVuY2hhbmdlZC5cclxuICAgICAqIEBwYXJhbSBsaWNlbnNlZSBOZXRMaWNlbnNpbmcuTGljZW5zZWVcclxuICAgICAqXHJcbiAgICAgKiByZXR1cm4gdXBkYXRlZCBsaWNlbnNlZSBpbiBwcm9taXNlLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHVwZGF0ZShjb250ZXh0LCBudW1iZXIsIGxpY2Vuc2VlKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KG51bWJlciwgQ29uc3RhbnRzLk5VTUJFUik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBpdGVtczogeyBpdGVtOiBpdGVtcyB9IH0gfSA9IGF3YWl0IFNlcnZpY2VcclxuICAgICAgICAgICAgLnBvc3QoY29udGV4dCwgYCR7Q29uc3RhbnRzLkxpY2Vuc2VlLkVORFBPSU5UX1BBVEh9LyR7bnVtYmVyfWAsIGxpY2Vuc2VlLmFzUHJvcGVydGllc01hcCgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgW2l0ZW1dID0gaXRlbXMuZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ0xpY2Vuc2VlJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtVG9MaWNlbnNlZShpdGVtKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIGxpY2Vuc2VlLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvbGljZW5zZWUtc2VydmljZXMjZGVsZXRlLWxpY2Vuc2VlXHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogbGljZW5zZWUgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIGlmIHRydWUsIGFueSBlbnRpdGllcyB0aGF0IGRlcGVuZCBvbiB0aGUgb25lIGJlaW5nIGRlbGV0ZWQgd2lsbCBiZSBkZWxldGVkIHRvb1xyXG4gICAgICogQHBhcmFtIGZvcmNlQ2FzY2FkZSBib29sZWFuXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIGJvb2xlYW4gc3RhdGUgb2YgZGVsZXRlIGluIHByb21pc2VcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBkZWxldGUoY29udGV4dCwgbnVtYmVyLCBmb3JjZUNhc2NhZGUpIHtcclxuICAgICAgICBDaGVja1V0aWxzLnBhcmFtTm90RW1wdHkobnVtYmVyLCBDb25zdGFudHMuTlVNQkVSKTtcclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7IGZvcmNlQ2FzY2FkZTogQm9vbGVhbihmb3JjZUNhc2NhZGUpIH07XHJcblxyXG4gICAgICAgIHJldHVybiBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5kZWxldGUoY29udGV4dCwgYCR7Q29uc3RhbnRzLkxpY2Vuc2VlLkVORFBPSU5UX1BBVEh9LyR7bnVtYmVyfWAsIHF1ZXJ5UGFyYW1zKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZXMgYWN0aXZlIGxpY2Vuc2VzIG9mIHRoZSBsaWNlbnNlZS5cclxuICAgICAqIEluIHRoZSBjYXNlIG9mIG11bHRpcGxlIHByb2R1Y3QgbW9kdWxlcyB2YWxpZGF0aW9uLFxyXG4gICAgICogcmVxdWlyZWQgcGFyYW1ldGVycyBpbmRleGVzIHdpbGwgYmUgYWRkZWQgYXV0b21hdGljYWxseS5cclxuICAgICAqIFNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvbGljZW5zZWUtc2VydmljZXMjdmFsaWRhdGUtbGljZW5zZWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIGxpY2Vuc2VlIG51bWJlclxyXG4gICAgICogQHBhcmFtIG51bWJlciBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBvcHRpb25hbCB2YWxpZGF0aW9uIHBhcmFtZXRlcnMuIFNlZSBWYWxpZGF0aW9uUGFyYW1ldGVycyBhbmQgbGljZW5zaW5nIG1vZGVsIGRvY3VtZW50YXRpb24gZm9yXHJcbiAgICAgKiBkZXRhaWxzLlxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRpb25QYXJhbWV0ZXJzIE5ldExpY2Vuc2luZy5WYWxpZGF0aW9uUGFyYW1ldGVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7VmFsaWRhdGlvblJlc3VsdHN9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHZhbGlkYXRlKGNvbnRleHQsIG51bWJlciwgdmFsaWRhdGlvblBhcmFtZXRlcnMpIHtcclxuICAgICAgICBDaGVja1V0aWxzLnBhcmFtTm90RW1wdHkobnVtYmVyLCBDb25zdGFudHMuTlVNQkVSKTtcclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRpb25QYXJhbWV0ZXJzLmdldFByb2R1Y3ROdW1iZXIoKSkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtcy5wcm9kdWN0TnVtYmVyID0gdmFsaWRhdGlvblBhcmFtZXRlcnMuZ2V0UHJvZHVjdE51bWJlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRpb25QYXJhbWV0ZXJzLmdldExpY2Vuc2VlTmFtZSgpKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpY2Vuc2VlTmFtZSA9IHZhbGlkYXRpb25QYXJhbWV0ZXJzLmdldExpY2Vuc2VlTmFtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRpb25QYXJhbWV0ZXJzLmdldExpY2Vuc2VlU2VjcmV0KCkpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXMubGljZW5zZWVTZWNyZXQgPSB2YWxpZGF0aW9uUGFyYW1ldGVycy5nZXRMaWNlbnNlZVNlY3JldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRpb25QYXJhbWV0ZXJzLmlzRm9yT2ZmbGluZVVzZSgpKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmZvck9mZmxpbmVVc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRpb25QYXJhbWV0ZXJzLmdldERyeVJ1bigpKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmRyeVJ1biA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcG1JbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHZhbGlkYXRpb25QYXJhbWV0ZXJzLmdldFBhcmFtZXRlcnMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaCgocHJvZHVjdE1vZHVsZU5hbWUpID0+IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXNbYCR7Q29uc3RhbnRzLlByb2R1Y3RNb2R1bGUuUFJPRFVDVF9NT0RVTEVfTlVNQkVSfSR7cG1JbmRleH1gXSA9IHByb2R1Y3RNb2R1bGVOYW1lO1xyXG4gICAgICAgICAgICBpZiAoIWhhcy5jYWxsKHBhcmFtZXRlcnMsIHByb2R1Y3RNb2R1bGVOYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyc1twcm9kdWN0TW9kdWxlTmFtZV07XHJcblxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXIpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhcy5jYWxsKHBhcmFtZXRlciwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleSArIHBtSW5kZXhdID0gcGFyYW1ldGVyW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwbUluZGV4ICs9IDE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBpdGVtczogeyBpdGVtOiBpdGVtcyB9LCB0dGwgfSB9ID0gYXdhaXQgU2VydmljZS5wb3N0KFxyXG4gICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICBgJHtDb25zdGFudHMuTGljZW5zZWUuRU5EUE9JTlRfUEFUSH0vJHtudW1iZXJ9LyR7Q29uc3RhbnRzLkxpY2Vuc2VlLkVORFBPSU5UX1BBVEhfVkFMSURBVEV9YCxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXMsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdHMgPSBuZXcgVmFsaWRhdGlvblJlc3VsdHMoKTtcclxuICAgICAgICB2YWxpZGF0aW9uUmVzdWx0cy5zZXRUdGwodHRsKTtcclxuXHJcbiAgICAgICAgaXRlbXMuZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ1Byb2R1Y3RNb2R1bGVWYWxpZGF0aW9uJykuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbVRvT2JqZWN0KHYpO1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0cy5zZXRQcm9kdWN0TW9kdWxlVmFsaWRhdGlvbihpdGVtW0NvbnN0YW50cy5Qcm9kdWN0TW9kdWxlLlBST0RVQ1RfTU9EVUxFX05VTUJFUl0sIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvblJlc3VsdHM7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmZXIgbGljZW5zZXMgYmV0d2VlbiBsaWNlbnNlZXMuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvbGljZW5zZWUtc2VydmljZXMjdHJhbnNmZXItbGljZW5zZXNcclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiB0aGUgbnVtYmVyIG9mIHRoZSBsaWNlbnNlZSByZWNlaXZpbmcgbGljZW5zZXNcclxuICAgICAqIEBwYXJhbSBudW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogdGhlIG51bWJlciBvZiB0aGUgbGljZW5zZWUgZGVsaXZlcmluZyBsaWNlbnNlc1xyXG4gICAgICogQHBhcmFtIHNvdXJjZUxpY2Vuc2VlTnVtYmVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zlcihjb250ZXh0LCBudW1iZXIsIHNvdXJjZUxpY2Vuc2VlTnVtYmVyKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KG51bWJlciwgQ29uc3RhbnRzLk5VTUJFUik7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KHNvdXJjZUxpY2Vuc2VlTnVtYmVyLCBDb25zdGFudHMuTGljZW5zZWUuU09VUkNFX0xJQ0VOU0VFX05VTUJFUik7XHJcblxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0geyBzb3VyY2VMaWNlbnNlZU51bWJlciB9O1xyXG5cclxuICAgICAgICByZXR1cm4gU2VydmljZVxyXG4gICAgICAgICAgICAucG9zdChcclxuICAgICAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICBgJHtDb25zdGFudHMuTGljZW5zZWUuRU5EUE9JTlRfUEFUSH0vJHtudW1iZXJ9LyR7Q29uc3RhbnRzLkxpY2Vuc2VlLkVORFBPSU5UX1BBVEhfVFJBTlNGRVJ9YCxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgfSxcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgICAgTGFiczY0IDxuZXRsaWNlbnNpbmdAbGFiczY0LmNvbT5cclxuICogQGxpY2Vuc2UgICBBcGFjaGUtMi4wXHJcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW9cclxuICogQGNvcHlyaWdodCAyMDE3IExhYnM2NCBOZXRMaWNlbnNpbmdcclxuICovXHJcblxyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCBDaGVja1V0aWxzIGZyb20gJy4uL3V0aWwvQ2hlY2tVdGlscyc7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vU2VydmljZSc7XHJcbmltcG9ydCBGaWx0ZXJVdGlscyBmcm9tICcuLi91dGlsL0ZpbHRlclV0aWxzJztcclxuaW1wb3J0IGl0ZW1Ub1BheW1lbnRNZXRob2QgZnJvbSAnLi4vY29udmVydGVycy9pdGVtVG9QYXltZW50TWV0aG9kJztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vdm8vUGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgcGF5bWVudCBtZXRob2QgYnkgaXRzIG51bWJlci5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL3BheW1lbnQtbWV0aG9kLXNlcnZpY2VzI2dldC1wYXltZW50LW1ldGhvZFxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIHRoZSBwYXltZW50IG1ldGhvZCBudW1iZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIHRoZSBwYXltZW50IG1ldGhvZCBpbiBwcm9taXNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0KGNvbnRleHQsIG51bWJlcikge1xyXG4gICAgICAgIENoZWNrVXRpbHMucGFyYW1Ob3RFbXB0eShudW1iZXIsIENvbnN0YW50cy5OVU1CRVIpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgaXRlbXM6IHsgaXRlbTogaXRlbXMgfSB9IH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoY29udGV4dCwgYCR7Q29uc3RhbnRzLlBheW1lbnRNZXRob2QuRU5EUE9JTlRfUEFUSH0vJHtudW1iZXJ9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtpdGVtXSA9IGl0ZW1zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdQYXltZW50TWV0aG9kJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtVG9QYXltZW50TWV0aG9kKGl0ZW0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgcGF5bWVudCBtZXRob2RzIG9mIGEgdmVuZG9yLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvcGF5bWVudC1tZXRob2Qtc2VydmljZXMjcGF5bWVudC1tZXRob2RzLWxpc3RcclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiByZXNlcnZlZCBmb3IgdGhlIGZ1dHVyZSB1c2UsIG11c3QgYmUgb21pdHRlZCAvIHNldCB0byBOVUxMXHJcbiAgICAgKiBAcGFyYW0gZmlsdGVyIHN0cmluZ3xudWxsXHJcbiAgICAgKlxyXG4gICAgICogYXJyYXkgb2YgcGF5bWVudCBtZXRob2QgZW50aXRpZXMgb3IgZW1wdHkgYXJyYXkgaWYgbm90aGluZyBmb3VuZCBpbiBwcm9taXNlLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGxpc3QoY29udGV4dCwgZmlsdGVyKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcikge1xyXG4gICAgICAgICAgICBpZiAoIUNoZWNrVXRpbHMuaXNWYWxpZChmaWx0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBmaWx0ZXIgaGFzIGJhZCB2YWx1ZSAke2ZpbHRlcn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtc1tDb25zdGFudHMuRklMVEVSXSA9IHR5cGVvZiBmaWx0ZXIgPT09ICdzdHJpbmcnID8gZmlsdGVyIDogRmlsdGVyVXRpbHMuZW5jb2RlKGZpbHRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldChjb250ZXh0LCBDb25zdGFudHMuUGF5bWVudE1ldGhvZC5FTkRQT0lOVF9QQVRILCBxdWVyeVBhcmFtcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBQYWdlKFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW0uZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ1BheW1lbnRNZXRob2QnKS5tYXAoKHYpID0+IGl0ZW1Ub1BheW1lbnRNZXRob2QodikpLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnBhZ2VudW1iZXIsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMuaXRlbXNudW1iZXIsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMudG90YWxwYWdlcyxcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy50b3RhbGl0ZW1zLFxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBwYXltZW50IG1ldGhvZCBwcm9wZXJ0aWVzLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvcGF5bWVudC1tZXRob2Qtc2VydmljZXMjdXBkYXRlLXBheW1lbnQtbWV0aG9kXHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogdGhlIHBheW1lbnQgbWV0aG9kIG51bWJlclxyXG4gICAgICogQHBhcmFtIG51bWJlciBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBub24tbnVsbCBwcm9wZXJ0aWVzIHdpbGwgYmUgdXBkYXRlZCB0byB0aGUgcHJvdmlkZWQgdmFsdWVzLCBudWxsIHByb3BlcnRpZXMgd2lsbCBzdGF5IHVuY2hhbmdlZC5cclxuICAgICAqIEBwYXJhbSBwYXltZW50TWV0aG9kIE5ldExpY2Vuc2luZy5QYXltZW50TWV0aG9kXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIHVwZGF0ZWQgcGF5bWVudCBtZXRob2QgaW4gcHJvbWlzZS5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBhc3luYyB1cGRhdGUoY29udGV4dCwgbnVtYmVyLCBwYXltZW50TWV0aG9kKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KG51bWJlciwgQ29uc3RhbnRzLk5VTUJFUik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtDb25zdGFudHMuUGF5bWVudE1ldGhvZC5FTkRQT0lOVF9QQVRIfS8ke251bWJlcn1gO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgaXRlbXM6IHsgaXRlbTogaXRlbXMgfSB9IH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5wb3N0KGNvbnRleHQsIHBhdGgsIHBheW1lbnRNZXRob2QuYXNQcm9wZXJ0aWVzTWFwKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBbaXRlbV0gPSBpdGVtcy5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnUGF5bWVudE1ldGhvZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvUGF5bWVudE1ldGhvZChpdGVtKTtcclxuICAgIH0sXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5cclxuaW1wb3J0IENoZWNrVXRpbHMgZnJvbSAnLi4vdXRpbC9DaGVja1V0aWxzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL1NlcnZpY2UnO1xyXG5pbXBvcnQgRmlsdGVyVXRpbHMgZnJvbSAnLi4vdXRpbC9GaWx0ZXJVdGlscyc7XHJcbmltcG9ydCBpdGVtVG9Qcm9kdWN0TW9kdWxlIGZyb20gJy4uL2NvbnZlcnRlcnMvaXRlbVRvUHJvZHVjdE1vZHVsZSc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL3ZvL1BhZ2UnO1xyXG5cclxuLyoqXHJcbiAqIEpTIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBQcm9kdWN0TW9kdWxlIFNlcnZpY2UuIFNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAqIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvcHJvZHVjdC1tb2R1bGUtc2VydmljZXNcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIG5ldyBwcm9kdWN0IG1vZHVsZSBvYmplY3Qgd2l0aCBnaXZlbiBwcm9wZXJ0aWVzLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvcHJvZHVjdC1tb2R1bGUtc2VydmljZXMjY3JlYXRlLXByb2R1Y3QtbW9kdWxlXHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogcGFyZW50IHByb2R1Y3QgdG8gd2hpY2ggdGhlIG5ldyBwcm9kdWN0IG1vZHVsZSBpcyB0byBiZSBhZGRlZFxyXG4gICAgICogQHBhcmFtIHByb2R1Y3ROdW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogbm9uLW51bGwgcHJvcGVydGllcyB3aWxsIGJlIHRha2VuIGZvciB0aGUgbmV3IG9iamVjdCwgbnVsbCBwcm9wZXJ0aWVzIHdpbGwgZWl0aGVyIHN0YXkgbnVsbCwgb3Igd2lsbFxyXG4gICAgICogYmUgc2V0IHRvIGEgZGVmYXVsdCB2YWx1ZSwgZGVwZW5kaW5nIG9uIHByb3BlcnR5LlxyXG4gICAgICogQHBhcmFtIHByb2R1Y3RNb2R1bGUgTmV0TGljZW5zaW5nLlByb2R1Y3RNb2R1bGVcclxuICAgICAqXHJcbiAgICAgKiB0aGUgbmV3bHkgY3JlYXRlZCBwcm9kdWN0IG1vZHVsZSBvYmplY3QgaW4gcHJvbWlzZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNyZWF0ZShjb250ZXh0LCBwcm9kdWN0TnVtYmVyLCBwcm9kdWN0TW9kdWxlKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KHByb2R1Y3ROdW1iZXIsIENvbnN0YW50cy5Qcm9kdWN0LlBST0RVQ1RfTlVNQkVSKTtcclxuXHJcbiAgICAgICAgcHJvZHVjdE1vZHVsZS5zZXRQcm9wZXJ0eShDb25zdGFudHMuUHJvZHVjdC5QUk9EVUNUX05VTUJFUiwgcHJvZHVjdE51bWJlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBpdGVtczogeyBpdGVtOiBpdGVtcyB9IH0gfSA9IGF3YWl0IFNlcnZpY2VcclxuICAgICAgICAgICAgLnBvc3QoY29udGV4dCwgQ29uc3RhbnRzLlByb2R1Y3RNb2R1bGUuRU5EUE9JTlRfUEFUSCwgcHJvZHVjdE1vZHVsZS5hc1Byb3BlcnRpZXNNYXAoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtpdGVtXSA9IGl0ZW1zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdQcm9kdWN0TW9kdWxlJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtVG9Qcm9kdWN0TW9kdWxlKGl0ZW0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgcHJvZHVjdCBtb2R1bGUgYnkgaXRzIG51bWJlci5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL3Byb2R1Y3QtbW9kdWxlLXNlcnZpY2VzI2dldC1wcm9kdWN0LW1vZHVsZVxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIHRoZSBwcm9kdWN0IG1vZHVsZSBudW1iZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIHRoZSBwcm9kdWN0IG1vZHVsZSBvYmplY3QgaW4gcHJvbWlzZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldChjb250ZXh0LCBudW1iZXIpIHtcclxuICAgICAgICBDaGVja1V0aWxzLnBhcmFtTm90RW1wdHkobnVtYmVyLCBDb25zdGFudHMuTlVNQkVSKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IGl0ZW1zOiB7IGl0ZW06IGl0ZW1zIH0gfSB9ID0gYXdhaXQgU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KGNvbnRleHQsIGAke0NvbnN0YW50cy5Qcm9kdWN0TW9kdWxlLkVORFBPSU5UX1BBVEh9LyR7bnVtYmVyfWApO1xyXG5cclxuICAgICAgICBjb25zdCBbaXRlbV0gPSBpdGVtcy5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnUHJvZHVjdE1vZHVsZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvUHJvZHVjdE1vZHVsZShpdGVtKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHByb2R1Y3RzIG9mIGEgdmVuZG9yLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvcHJvZHVjdC1tb2R1bGUtc2VydmljZXMjcHJvZHVjdC1tb2R1bGVzLWxpc3RcclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiByZXNlcnZlZCBmb3IgdGhlIGZ1dHVyZSB1c2UsIG11c3QgYmUgb21pdHRlZCAvIHNldCB0byBOVUxMXHJcbiAgICAgKiBAcGFyYW0gZmlsdGVyIHN0cmluZ3xudWxsXHJcbiAgICAgKlxyXG4gICAgICogYXJyYXkgb2YgcHJvZHVjdCBtb2R1bGVzIGVudGl0aWVzIG9yIGVtcHR5IGFycmF5IGlmIG5vdGhpbmcgZm91bmQgaW4gcHJvbWlzZS5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBsaXN0KGNvbnRleHQsIGZpbHRlcikge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge307XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFDaGVja1V0aWxzLmlzVmFsaWQoZmlsdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgZmlsdGVyIGhhcyBiYWQgdmFsdWUgJHtmaWx0ZXJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVlcnlQYXJhbXNbQ29uc3RhbnRzLkZJTFRFUl0gPSB0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyA/IGZpbHRlciA6IEZpbHRlclV0aWxzLmVuY29kZShmaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBTZXJ2aWNlLmdldChjb250ZXh0LCBDb25zdGFudHMuUHJvZHVjdE1vZHVsZS5FTkRQT0lOVF9QQVRILCBxdWVyeVBhcmFtcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBQYWdlKFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW0uZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ1Byb2R1Y3RNb2R1bGUnKS5tYXAoKHYpID0+IGl0ZW1Ub1Byb2R1Y3RNb2R1bGUodikpLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnBhZ2VudW1iZXIsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMuaXRlbXNudW1iZXIsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMudG90YWxwYWdlcyxcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy50b3RhbGl0ZW1zLFxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBwcm9kdWN0IG1vZHVsZSBwcm9wZXJ0aWVzLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvcHJvZHVjdC1tb2R1bGUtc2VydmljZXMjdXBkYXRlLXByb2R1Y3QtbW9kdWxlXHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogcHJvZHVjdCBtb2R1bGUgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIG5vbi1udWxsIHByb3BlcnRpZXMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZSBwcm92aWRlZCB2YWx1ZXMsIG51bGwgcHJvcGVydGllcyB3aWxsIHN0YXkgdW5jaGFuZ2VkLlxyXG4gICAgICogQHBhcmFtIHByb2R1Y3RNb2R1bGUgTmV0TGljZW5zaW5nLlByb2R1Y3RNb2R1bGVcclxuICAgICAqXHJcbiAgICAgKiB1cGRhdGVkIHByb2R1Y3QgbW9kdWxlIGluIHByb21pc2UuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgdXBkYXRlKGNvbnRleHQsIG51bWJlciwgcHJvZHVjdE1vZHVsZSkge1xyXG4gICAgICAgIENoZWNrVXRpbHMucGFyYW1Ob3RFbXB0eShudW1iZXIsIENvbnN0YW50cy5OVU1CRVIpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgaXRlbXM6IHsgaXRlbTogaXRlbXMgfSB9IH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5wb3N0KGNvbnRleHQsIGAke0NvbnN0YW50cy5Qcm9kdWN0TW9kdWxlLkVORFBPSU5UX1BBVEh9LyR7bnVtYmVyfWAsIHByb2R1Y3RNb2R1bGUuYXNQcm9wZXJ0aWVzTWFwKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBbaXRlbV0gPSBpdGVtcy5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnUHJvZHVjdE1vZHVsZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvUHJvZHVjdE1vZHVsZShpdGVtKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIHByb2R1Y3QgbW9kdWxlLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvcHJvZHVjdC1tb2R1bGUtc2VydmljZXMjZGVsZXRlLXByb2R1Y3QtbW9kdWxlXHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogcHJvZHVjdCBtb2R1bGUgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIGlmIHRydWUsIGFueSBlbnRpdGllcyB0aGF0IGRlcGVuZCBvbiB0aGUgb25lIGJlaW5nIGRlbGV0ZWQgd2lsbCBiZSBkZWxldGVkIHRvb1xyXG4gICAgICogQHBhcmFtIGZvcmNlQ2FzY2FkZSBib29sZWFuXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIGJvb2xlYW4gc3RhdGUgb2YgZGVsZXRlIGluIHByb21pc2VcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBkZWxldGUoY29udGV4dCwgbnVtYmVyLCBmb3JjZUNhc2NhZGUpIHtcclxuICAgICAgICBDaGVja1V0aWxzLnBhcmFtTm90RW1wdHkobnVtYmVyLCBDb25zdGFudHMuTlVNQkVSKTtcclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7IGZvcmNlQ2FzY2FkZTogQm9vbGVhbihmb3JjZUNhc2NhZGUpIH07XHJcblxyXG4gICAgICAgIHJldHVybiBTZXJ2aWNlLmRlbGV0ZShjb250ZXh0LCBgJHtDb25zdGFudHMuUHJvZHVjdE1vZHVsZS5FTkRQT0lOVF9QQVRIfS8ke251bWJlcn1gLCBxdWVyeVBhcmFtcyk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciAgICBMYWJzNjQgPG5ldGxpY2Vuc2luZ0BsYWJzNjQuY29tPlxyXG4gKiBAbGljZW5zZSAgIEFwYWNoZS0yLjBcclxuICogQGxpbmsgICAgICBodHRwczovL25ldGxpY2Vuc2luZy5pb1xyXG4gKiBAY29weXJpZ2h0IDIwMTcgTGFiczY0IE5ldExpY2Vuc2luZ1xyXG4gKi9cclxuXHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vU2VydmljZSc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IENoZWNrVXRpbHMgZnJvbSAnLi4vdXRpbC9DaGVja1V0aWxzJztcclxuaW1wb3J0IEZpbHRlclV0aWxzIGZyb20gJy4uL3V0aWwvRmlsdGVyVXRpbHMnO1xyXG5pbXBvcnQgaXRlbVRvUHJvZHVjdCBmcm9tICcuLi9jb252ZXJ0ZXJzL2l0ZW1Ub1Byb2R1Y3QnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi92by9QYWdlJztcclxuXHJcbi8qKlxyXG4gKiBKUyByZXByZXNlbnRhdGlvbiBvZiB0aGUgUHJvZHVjdCBTZXJ2aWNlLiBTZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gKiBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL3Byb2R1Y3Qtc2VydmljZXNcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIG5ldyBwcm9kdWN0IHdpdGggZ2l2ZW4gcHJvcGVydGllcy5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL3Byb2R1Y3Qtc2VydmljZXMjY3JlYXRlLXByb2R1Y3RcclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiBub24tbnVsbCBwcm9wZXJ0aWVzIHdpbGwgYmUgdGFrZW4gZm9yIHRoZSBuZXcgb2JqZWN0LCBudWxsIHByb3BlcnRpZXMgd2lsbCBlaXRoZXIgc3RheSBudWxsLCBvciB3aWxsXHJcbiAgICAgKiBiZSBzZXQgdG8gYSBkZWZhdWx0IHZhbHVlLCBkZXBlbmRpbmcgb24gcHJvcGVydHkuXHJcbiAgICAgKiBAcGFyYW0gcHJvZHVjdCBOZXRMaWNlbnNpbmcuUHJvZHVjdFxyXG4gICAgICpcclxuICAgICAqIHJldHVybiB0aGUgbmV3bHkgY3JlYXRlZCBwcm9kdWN0IG9iamVjdCBpbiBwcm9taXNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG5cclxuICAgIGFzeW5jIGNyZWF0ZShjb250ZXh0LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IGl0ZW1zOiB7IGl0ZW06IGl0ZW1zIH0gfSB9ID0gYXdhaXQgU2VydmljZVxyXG4gICAgICAgICAgICAucG9zdChjb250ZXh0LCBDb25zdGFudHMuUHJvZHVjdC5FTkRQT0lOVF9QQVRILCBwcm9kdWN0LmFzUHJvcGVydGllc01hcCgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgW2l0ZW1dID0gaXRlbXMuZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ1Byb2R1Y3QnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1Ub1Byb2R1Y3QoaXRlbSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBwcm9kdWN0IGJ5IGl0cyBudW1iZXIuU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS9wcm9kdWN0LXNlcnZpY2VzI2dldC1wcm9kdWN0XHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogdGhlIHByb2R1Y3QgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIHJldHVybiB0aGUgcHJvZHVjdCBvYmplY3QgaW4gcHJvbWlzZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldChjb250ZXh0LCBudW1iZXIpIHtcclxuICAgICAgICBDaGVja1V0aWxzLnBhcmFtTm90RW1wdHkobnVtYmVyLCBDb25zdGFudHMuTlVNQkVSKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IGl0ZW1zOiB7IGl0ZW06IGl0ZW1zIH0gfSB9ID0gYXdhaXQgU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KGNvbnRleHQsIGAke0NvbnN0YW50cy5Qcm9kdWN0LkVORFBPSU5UX1BBVEh9LyR7bnVtYmVyfWApO1xyXG5cclxuICAgICAgICBjb25zdCBbaXRlbV0gPSBpdGVtcy5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnUHJvZHVjdCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvUHJvZHVjdChpdGVtKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHByb2R1Y3RzIG9mIGEgdmVuZG9yLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvcHJvZHVjdC1zZXJ2aWNlcyNwcm9kdWN0cy1saXN0XHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogcmVzZXJ2ZWQgZm9yIHRoZSBmdXR1cmUgdXNlLCBtdXN0IGJlIG9taXR0ZWQgLyBzZXQgdG8gTlVMTFxyXG4gICAgICogQHBhcmFtIGZpbHRlciBzdHJpbmd8bnVsbFxyXG4gICAgICpcclxuICAgICAqIGFycmF5IG9mIHByb2R1Y3QgZW50aXRpZXMgb3IgZW1wdHkgYXJyYXkgaWYgbm90aGluZyBmb3VuZCBpbiBwcm9taXNlLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGxpc3QoY29udGV4dCwgZmlsdGVyKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcikge1xyXG4gICAgICAgICAgICBpZiAoIUNoZWNrVXRpbHMuaXNWYWxpZChmaWx0ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBmaWx0ZXIgaGFzIGJhZCB2YWx1ZSAke2ZpbHRlcn1gKTtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXNbQ29uc3RhbnRzLkZJTFRFUl0gPSB0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyA/IGZpbHRlciA6IEZpbHRlclV0aWxzLmVuY29kZShmaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBTZXJ2aWNlLmdldChjb250ZXh0LCBDb25zdGFudHMuUHJvZHVjdC5FTkRQT0lOVF9QQVRILCBxdWVyeVBhcmFtcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBQYWdlKFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW0uZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ1Byb2R1Y3QnKS5tYXAoKHYpID0+IGl0ZW1Ub1Byb2R1Y3QodikpLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnBhZ2VudW1iZXIsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMuaXRlbXNudW1iZXIsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMudG90YWxwYWdlcyxcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy50b3RhbGl0ZW1zLFxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBwcm9kdWN0IHByb3BlcnRpZXMuU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS9wcm9kdWN0LXNlcnZpY2VzI3VwZGF0ZS1wcm9kdWN0XHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogcHJvZHVjdCBudW1iZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogbm9uLW51bGwgcHJvcGVydGllcyB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlIHByb3ZpZGVkIHZhbHVlcywgbnVsbCBwcm9wZXJ0aWVzIHdpbGwgc3RheSB1bmNoYW5nZWQuXHJcbiAgICAgKiBAcGFyYW0gcHJvZHVjdCBOZXRMaWNlbnNpbmcuUHJvZHVjdFxyXG4gICAgICpcclxuICAgICAqIHVwZGF0ZWQgcHJvZHVjdCBpbiBwcm9taXNlLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHVwZGF0ZShjb250ZXh0LCBudW1iZXIsIHByb2R1Y3QpIHtcclxuICAgICAgICBDaGVja1V0aWxzLnBhcmFtTm90RW1wdHkobnVtYmVyLCBDb25zdGFudHMuTlVNQkVSKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IGl0ZW1zOiB7IGl0ZW06IGl0ZW1zIH0gfSB9ID0gYXdhaXQgU2VydmljZVxyXG4gICAgICAgICAgICAucG9zdChjb250ZXh0LCBgJHtDb25zdGFudHMuUHJvZHVjdC5FTkRQT0lOVF9QQVRIfS8ke251bWJlcn1gLCBwcm9kdWN0LmFzUHJvcGVydGllc01hcCgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgW2l0ZW1dID0gaXRlbXMuZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ1Byb2R1Y3QnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1Ub1Byb2R1Y3QoaXRlbSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlcyBwcm9kdWN0LlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvcHJvZHVjdC1zZXJ2aWNlcyNkZWxldGUtcHJvZHVjdFxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIHByb2R1Y3QgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIGlmIHRydWUsIGFueSBlbnRpdGllcyB0aGF0IGRlcGVuZCBvbiB0aGUgb25lIGJlaW5nIGRlbGV0ZWQgd2lsbCBiZSBkZWxldGVkIHRvb1xyXG4gICAgICogQHBhcmFtIGZvcmNlQ2FzY2FkZSBib29sZWFuXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIGJvb2xlYW4gc3RhdGUgb2YgZGVsZXRlIGluIHByb21pc2VcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBkZWxldGUoY29udGV4dCwgbnVtYmVyLCBmb3JjZUNhc2NhZGUpIHtcclxuICAgICAgICBDaGVja1V0aWxzLnBhcmFtTm90RW1wdHkobnVtYmVyLCBDb25zdGFudHMuTlVNQkVSKTtcclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7IGZvcmNlQ2FzY2FkZTogQm9vbGVhbihmb3JjZUNhc2NhZGUpIH07XHJcblxyXG4gICAgICAgIHJldHVybiBTZXJ2aWNlLmRlbGV0ZShjb250ZXh0LCBgJHtDb25zdGFudHMuUHJvZHVjdC5FTkRQT0lOVF9QQVRIfS8ke251bWJlcn1gLCBxdWVyeVBhcmFtcyk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciAgICBMYWJzNjQgPG5ldGxpY2Vuc2luZ0BsYWJzNjQuY29tPlxyXG4gKiBAbGljZW5zZSAgIEFwYWNoZS0yLjBcclxuICogQGxpbmsgICAgICBodHRwczovL25ldGxpY2Vuc2luZy5pb1xyXG4gKiBAY29weXJpZ2h0IDIwMTcgTGFiczY0IE5ldExpY2Vuc2luZ1xyXG4gKi9cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGJ0b2EgZnJvbSAnYnRvYSc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IE5saWNFcnJvciBmcm9tICcuLi9lcnJvcnMvTmxpY0Vycm9yJztcclxuaW1wb3J0IHBrZyBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nO1xyXG5cclxubGV0IGh0dHBYSFIgPSB7fTtcclxubGV0IGF4aW9zSW5zdGFuY2UgPSBudWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmljZSB7XHJcbiAgICBzdGF0aWMgZ2V0QXhpb3NJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZSB8fCBheGlvcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0QXhpb3NJbnN0YW5jZShpbnN0YW5zZSkge1xyXG4gICAgICAgIGF4aW9zSW5zdGFuY2UgPSBpbnN0YW5zZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TGFzdEh0dHBSZXF1ZXN0SW5mbygpIHtcclxuICAgICAgICByZXR1cm4gaHR0cFhIUjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciBtZXRob2QgZm9yIHBlcmZvcm1pbmcgR0VUIHJlcXVlc3QgdG8gTlxyXG4gICAgIGV0TGljZW5zaW5nIEFQSSBzZXJ2aWNlcy4gRmluZHMgYW5kIHJldHVybnMgZmlyc3Qgc3VpdGFibGUgaXRlbSB3aXRoXHJcbiAgICAgKiB0eXBlIHJlc3VsdFR5cGUgZnJvbSB0aGUgcmVzcG9uc2UuXHJcbiAgICAgKlxyXG4gICAgICogQ29udGV4dCBmb3IgdGhlIE5ldExpY2Vuc2luZyBBUEkgY2FsbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiB0aGUgUkVTVCBVUkwgdGVtcGxhdGVcclxuICAgICAqIEBwYXJhbSB1cmxUZW1wbGF0ZVxyXG4gICAgICpcclxuICAgICAqIFRoZSBSRVNUIHF1ZXJ5IHBhcmFtZXRlcnMgdmFsdWVzLiBNYXkgYmUgbnVsbCBpZiB0aGVyZSBhcmUgbm8gcGFyYW1ldGVycy5cclxuICAgICAqIEBwYXJhbSBxdWVyeVBhcmFtc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0KGNvbnRleHQsIHVybFRlbXBsYXRlLCBxdWVyeVBhcmFtcykge1xyXG4gICAgICAgIHJldHVybiBTZXJ2aWNlLnJlcXVlc3QoY29udGV4dCwgJ2dldCcsIHVybFRlbXBsYXRlLCBxdWVyeVBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBwZXJmb3JtaW5nIFBPU1QgcmVxdWVzdCB0byBOZXRMaWNlbnNpbmcgQVBJIHNlcnZpY2VzLiBGaW5kcyBhbmQgcmV0dXJucyBmaXJzdCBzdWl0YWJsZSBpdGVtXHJcbiAgICAgKiB3aXRoIHR5cGUgcmVzdWx0VHlwZSBmcm9tIHRoZSByZXNwb25zZS5cclxuICAgICAqXHJcbiAgICAgKiBjb250ZXh0IGZvciB0aGUgTmV0TGljZW5zaW5nIEFQSSBjYWxsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dFxyXG4gICAgICpcclxuICAgICAqIHRoZSBSRVNUIFVSTCB0ZW1wbGF0ZVxyXG4gICAgICogQHBhcmFtIHVybFRlbXBsYXRlXHJcbiAgICAgKlxyXG4gICAgICogVGhlIFJFU1QgcXVlcnkgcGFyYW1ldGVycyB2YWx1ZXMuIE1heSBiZSBudWxsIGlmIHRoZXJlIGFyZSBubyBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwb3N0KGNvbnRleHQsIHVybFRlbXBsYXRlLCBxdWVyeVBhcmFtcykge1xyXG4gICAgICAgIHJldHVybiBTZXJ2aWNlLnJlcXVlc3QoY29udGV4dCwgJ3Bvc3QnLCB1cmxUZW1wbGF0ZSwgcXVlcnlQYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb250ZXh0XHJcbiAgICAgKiBAcGFyYW0gdXJsVGVtcGxhdGVcclxuICAgICAqIEBwYXJhbSBxdWVyeVBhcmFtc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWxldGUoY29udGV4dCwgdXJsVGVtcGxhdGUsIHF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIFNlcnZpY2UucmVxdWVzdChjb250ZXh0LCAnZGVsZXRlJywgdXJsVGVtcGxhdGUsIHF1ZXJ5UGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgcmVxdWVzdCB0byBOZXRMaWNlbnNpbmcgIFJlc3RBcGlcclxuICAgICAqIEBwYXJhbSBjb250ZXh0XHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kXHJcbiAgICAgKiBAcGFyYW0gdXJsVGVtcGxhdGVcclxuICAgICAqIEBwYXJhbSBxdWVyeVBhcmFtc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZXF1ZXN0KGNvbnRleHQsIG1ldGhvZCwgdXJsVGVtcGxhdGUsIHF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBTdHJpbmcodXJsVGVtcGxhdGUpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5UGFyYW1zIHx8IHt9O1xyXG5cclxuICAgICAgICBpZiAoIXRlbXBsYXRlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVcmwgdGVtcGxhdGUgbXVzdCBiZSBzcGVjaWZpZWQnKTtcclxuXHJcbiAgICAgICAgLy8gdmFsaWRhdGUgaHR0cCBtZXRob2RcclxuICAgICAgICBpZiAoWydnZXQnLCAncG9zdCcsICdkZWxldGUnXS5pbmRleE9mKG1ldGhvZC50b0xvd2VyQ2FzZSgpKSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHJlcXVlc3QgdHlwZToke21ldGhvZH0sIGFsbG93ZWQgcmVxdWVzdHMgdHlwZXM6IEdFVCwgUE9TVCwgREVMRVRFLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmFsaWRhdGUgY29udGV4dFxyXG4gICAgICAgIGlmICghY29udGV4dC5nZXRCYXNlVXJsKG51bGwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmFzZSB1cmwgbXVzdCBiZSBzcGVjaWZpZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIHVybDogZW5jb2RlVVJJKGAke2NvbnRleHQuZ2V0QmFzZVVybCgpfS8ke3RlbXBsYXRlfWApLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZC50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVJlcXVlc3Q6IFsoZGF0YSwgaGVhZGVycykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXJ2aWNlLnRvUXVlcnlTdHJpbmcoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFoZWFkZXJzWydOZXRMaWNlbnNpbmctT3JpZ2luJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydOZXRMaWNlbnNpbmctT3JpZ2luJ10gPSBgTmV0TGljZW5zaW5nL0phdmFzY3JpcHQgJHtwa2cudmVyc2lvbn1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIG9ubHkgbm9kZS5qcyBoYXMgYSBwcm9jZXNzIHZhcmlhYmxlIHRoYXQgaXMgb2YgW1tDbGFzc11dIHByb2Nlc3NcclxuICAgICAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVyc1snVXNlci1hZ2VudCddID0gYE5ldExpY2Vuc2luZy9KYXZhc2NyaXB0ICR7cGtnLnZlcnNpb259L25vZGUmJHtwcm9jZXNzLnZlcnNpb259YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChbJ3B1dCcsICdwb3N0JywgJ3BhdGNoJ10uaW5kZXhPZihyZXF1ZXN0Lm1ldGhvZCkgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5tZXRob2QgPT09ICdwb3N0Jykge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcXVlc3QuZGF0YSA9IHBhcmFtcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXF1ZXN0LnBhcmFtcyA9IHBhcmFtcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29udGV4dC5nZXRTZWN1cml0eU1vZGUoKSkge1xyXG4gICAgICAgICAgICAvLyBCYXNpYyBBdXRoXHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnRzLkJBU0lDX0FVVEhFTlRJQ0FUSU9OOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0LmdldFVzZXJuYW1lKCkpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwYXJhbWV0ZXIgXCJ1c2VybmFtZVwiJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQuZ2V0UGFzc3dvcmQoKSkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHBhcmFtZXRlciBcInBhc3N3b3JkXCInKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmF1dGggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGNvbnRleHQuZ2V0VXNlcm5hbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogY29udGV4dC5nZXRQYXNzd29yZCgpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBBcGlLZXkgQXV0aFxyXG4gICAgICAgICAgICBjYXNlIENvbnN0YW50cy5BUElLRVlfSURFTlRJRklDQVRJT046XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQuZ2V0QXBpS2V5KCkpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwYXJhbWV0ZXIgXCJhcGlLZXlcIicpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJhc2ljICR7YnRvYShgYXBpS2V5OiR7Y29udGV4dC5nZXRBcGlLZXkoKX1gKX1gO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIHdpdGhvdXQgYXV0aG9yaXphdGlvblxyXG4gICAgICAgICAgICBjYXNlIENvbnN0YW50cy5BTk9OWU1PVVNfSURFTlRJRklDQVRJT046XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBzZWN1cml0eSBtb2RlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gU2VydmljZS5nZXRBeGlvc0luc3RhbmNlKCkocmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5pbmZvcyA9IFNlcnZpY2UuZ2V0SW5mbyhyZXNwb25zZSwgW10pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHJlc3BvbnNlLmluZm9zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdFUlJPUicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoZXJyb3JzWzBdLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5jb25maWcgPSByZXNwb25zZS5jb25maWc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVxdWVzdCA9IHJlc3BvbnNlLnJlcXVlc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBodHRwWEhSID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBodHRwWEhSID0gZS5yZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgTmxpY0Vycm9yKGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5jb25maWcgPSBlLmNvbmZpZztcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5jb2RlID0gZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnJlcXVlc3QgPSBlLnJlcXVlc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgPSBlLnJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gZS5yZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IuaW5mb3MgPSBTZXJ2aWNlLmdldEluZm8oZS5yZXNwb25zZSwgW10pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW2luZm8gPSB7fV0gPSBlcnJvci5pbmZvcy5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnRVJST1InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9IGluZm8udmFsdWUgfHwgJ1Vua25vd24nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEluZm8ocmVzcG9uc2UsIGRlZikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmluZm9zLmluZm8gfHwgZGVmO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzVmFsaWRVcmwodXJsKSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8pPycgLy8gcHJvdG9jb2xcclxuICAgICAgICAgICAgKyAnKCgoW2EtelxcXFxkXShbYS16XFxcXGQtXSpbYS16XFxcXGRdKSopXFxcXC4/KStbYS16XXsyLH18JyAvLyBkb21haW4gbmFtZVxyXG4gICAgICAgICAgICArICcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknIC8vIE9SIGlwICh2NCkgYWRkcmVzc1xyXG4gICAgICAgICAgICArICcoXFxcXDpcXFxcZCspPyhcXFxcL1stYS16XFxcXGQlXy5+K10qKSonIC8vIHBvcnQgYW5kIHBhdGhcclxuICAgICAgICAgICAgKyAnKFxcXFw/WzsmYS16XFxcXGQlXy5+Kz0tXSopPycgLy8gcXVlcnkgc3RyaW5nXHJcbiAgICAgICAgICAgICsgJyhcXFxcI1stYS16XFxcXGRfXSopPyQnLCAnaScpOyAvLyBmcmFnbWVudCBsb2NhdG9yXHJcblxyXG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG9RdWVyeVN0cmluZyhkYXRhLCBwcmVmaXgpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzLmNhbGwoZGF0YSwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBwcmVmaXggPyBgJHtwcmVmaXh9WyR7a2V5fV1gIDoga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSAodiBpbnN0YW5jZW9mIERhdGUpID8gdi50b0lTT1N0cmluZygpIDogdjtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeS5wdXNoKCh2ICE9PSBudWxsICYmIHR5cGVvZiB2ID09PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBTZXJ2aWNlLnRvUXVlcnlTdHJpbmcodiwgaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHYpfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5LmpvaW4oJyYnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvJTVCWzAtOV0rJTVEPS9nLCAnPScpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5cclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL1NlcnZpY2UnO1xyXG5pbXBvcnQgQ2hlY2tVdGlscyBmcm9tICcuLi91dGlsL0NoZWNrVXRpbHMnO1xyXG5pbXBvcnQgRmlsdGVyVXRpbHMgZnJvbSAnLi4vdXRpbC9GaWx0ZXJVdGlscyc7XHJcbmltcG9ydCBpdGVtVG9Ub2tlbiBmcm9tICcuLi9jb252ZXJ0ZXJzL2l0ZW1Ub1Rva2VuJztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vdm8vUGFnZSc7XHJcblxyXG4vKipcclxuICogSlMgcmVwcmVzZW50YXRpb24gb2YgdGhlIFRva2VuIFNlcnZpY2UuIFNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAqIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvdG9rZW4tc2VydmljZXNcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIG5ldyB0b2tlbi5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL3Rva2VuLXNlcnZpY2VzI2NyZWF0ZS10b2tlblxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIG5vbi1udWxsIHByb3BlcnRpZXMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZSBwcm92aWRlZCB2YWx1ZXMsIG51bGwgcHJvcGVydGllcyB3aWxsIHN0YXkgdW5jaGFuZ2VkLlxyXG4gICAgICogQHBhcmFtIHRva2VuIE5ldExpY2Vuc2luZy5Ub2tlblxyXG4gICAgICpcclxuICAgICAqIHJldHVybiBjcmVhdGVkIHRva2VuIGluIHByb21pc2VcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBjcmVhdGUoY29udGV4dCwgdG9rZW4pIHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgaXRlbXM6IHsgaXRlbTogaXRlbXMgfSB9IH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5wb3N0KGNvbnRleHQsIENvbnN0YW50cy5Ub2tlbi5FTkRQT0lOVF9QQVRILCB0b2tlbi5hc1Byb3BlcnRpZXNNYXAoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtpdGVtXSA9IGl0ZW1zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdUb2tlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvVG9rZW4oaXRlbSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0b2tlbiBieSBpdHMgbnVtYmVyLi5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL3Rva2VuLXNlcnZpY2VzI2dldC10b2tlblxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIHRoZSB0b2tlbiBudW1iZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXJcclxuICAgICAqXHJcbiAgICAgKiByZXR1cm4gdGhlIHRva2VuIGluIHByb21pc2VcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXQoY29udGV4dCwgbnVtYmVyKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KG51bWJlciwgQ29uc3RhbnRzLk5VTUJFUik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBpdGVtczogeyBpdGVtOiBpdGVtcyB9IH0gfSA9IGF3YWl0IFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldChjb250ZXh0LCBgJHtDb25zdGFudHMuVG9rZW4uRU5EUE9JTlRfUEFUSH0vJHtudW1iZXJ9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtpdGVtXSA9IGl0ZW1zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdUb2tlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvVG9rZW4oaXRlbSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0b2tlbnMgb2YgYSB2ZW5kb3IuU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS90b2tlbi1zZXJ2aWNlcyN0b2tlbnMtbGlzdFxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIHJlc2VydmVkIGZvciB0aGUgZnV0dXJlIHVzZSwgbXVzdCBiZSBvbWl0dGVkIC8gc2V0IHRvIE5VTExcclxuICAgICAqIEBwYXJhbSBmaWx0ZXIgc3RyaW5nfG51bGxcclxuICAgICAqXHJcbiAgICAgKiBhcnJheSBvZiB0b2tlbiBlbnRpdGllcyBvciBlbXB0eSBhcnJheSBpZiBub3RoaW5nIGZvdW5kLlxyXG4gICAgICogQHJldHVybiBhcnJheVxyXG4gICAgICovXHJcbiAgICBhc3luYyBsaXN0KGNvbnRleHQsIGZpbHRlcikge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge307XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFDaGVja1V0aWxzLmlzVmFsaWQoZmlsdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgZmlsdGVyIGhhcyBiYWQgdmFsdWUgJHtmaWx0ZXJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVlcnlQYXJhbXNbQ29uc3RhbnRzLkZJTFRFUl0gPSB0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyA/IGZpbHRlciA6IEZpbHRlclV0aWxzLmVuY29kZShmaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoY29udGV4dCwgQ29uc3RhbnRzLlRva2VuLkVORFBPSU5UX1BBVEgsIHF1ZXJ5UGFyYW1zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFBhZ2UoXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMuaXRlbS5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnVG9rZW4nKS5tYXAoKHYpID0+IGl0ZW1Ub1Rva2VuKHYpKSxcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy5wYWdlbnVtYmVyLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW1zbnVtYmVyLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnRvdGFscGFnZXMsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMudG90YWxpdGVtcyxcclxuICAgICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSB0b2tlbiBieSBpdHMgbnVtYmVyLlNlZSBOZXRMaWNlbnNpbmdBUEkgZm9yIGRldGFpbHM6XHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvL3dpa2kvdG9rZW4tc2VydmljZXMjZGVsZXRlLXRva2VuXHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogIHRoZSB0b2tlbiBudW1iZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIGJvb2xlYW4gc3RhdGUgb2YgZGVsZXRlIGluIHByb21pc2VcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBkZWxldGUoY29udGV4dCwgbnVtYmVyKSB7XHJcbiAgICAgICAgQ2hlY2tVdGlscy5wYXJhbU5vdEVtcHR5KG51bWJlciwgQ29uc3RhbnRzLk5VTUJFUik7XHJcblxyXG4gICAgICAgIHJldHVybiBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5kZWxldGUoY29udGV4dCwgYCR7Q29uc3RhbnRzLlRva2VuLkVORFBPSU5UX1BBVEh9LyR7bnVtYmVyfWApO1xyXG4gICAgfSxcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgICAgTGFiczY0IDxuZXRsaWNlbnNpbmdAbGFiczY0LmNvbT5cclxuICogQGxpY2Vuc2UgICBBcGFjaGUtMi4wXHJcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW9cclxuICogQGNvcHlyaWdodCAyMDE3IExhYnM2NCBOZXRMaWNlbnNpbmdcclxuICovXHJcblxyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vU2VydmljZSc7XHJcbmltcG9ydCBDaGVja1V0aWxzIGZyb20gJy4uL3V0aWwvQ2hlY2tVdGlscyc7XHJcbmltcG9ydCBGaWx0ZXJVdGlscyBmcm9tICcuLi91dGlsL0ZpbHRlclV0aWxzJztcclxuaW1wb3J0IGl0ZW1Ub1RyYW5zYWN0aW9uIGZyb20gJy4uL2NvbnZlcnRlcnMvaXRlbVRvVHJhbnNhY3Rpb24nO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi92by9QYWdlJztcclxuXHJcbi8qKlxyXG4gKiBKUyByZXByZXNlbnRhdGlvbiBvZiB0aGUgVHJhbnNhY3Rpb24gU2VydmljZS4gU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICogaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS90cmFuc2FjdGlvbi1zZXJ2aWNlc1xyXG4gKlxyXG4gKiBUcmFuc2FjdGlvbiBpcyBjcmVhdGVkIGVhY2ggdGltZSBjaGFuZ2UgdG8gIExpY2Vuc2VTZXJ2aWNlIGxpY2Vuc2VzIGhhcHBlbnMuIEZvciBpbnN0YW5jZSBsaWNlbnNlcyBhcmVcclxuICogb2J0YWluZWQgYnkgYSBsaWNlbnNlZSwgbGljZW5zZXMgZGlzYWJsZWQgYnkgdmVuZG9yLCBsaWNlbnNlcyBkZWxldGVkLCBldGMuIFRyYW5zYWN0aW9uIGlzIGNyZWF0ZWQgbm8gbWF0dGVyIHdoYXRcclxuICogc291cmNlIGhhcyBpbml0aWF0ZWQgdGhlIGNoYW5nZSB0byBsaWNlbnNlczogaXQgY2FuIGJlIGVpdGhlciBhIGRpcmVjdCBwdXJjaGFzZSBvZiBsaWNlbnNlcyBieSBhIGxpY2Vuc2VlIHZpYVxyXG4gKiBOZXRMaWNlbnNpbmcgU2hvcCwgb3IgbGljZW5zZXMgY2FuIGJlIGdpdmVuIHRvIGEgbGljZW5zZWUgYnkgYSB2ZW5kb3IuIExpY2Vuc2VzIGNhbiBhbHNvIGJlIGFzc2lnbmVkIGltcGxpY2l0bHkgYnlcclxuICogTmV0TGljZW5zaW5nIGlmIGl0IGlzIGRlZmluZWQgc28gYnkgYSBsaWNlbnNlIG1vZGVsIChlLmcuIGV2YWx1YXRpb24gbGljZW5zZSBtYXkgYmUgZ2l2ZW4gYXV0b21hdGljYWxseSkuIEFsbCB0aGVzZVxyXG4gKiBldmVudHMgYXJlIHJlZmxlY3RlZCBpbiB0cmFuc2FjdGlvbnMuIE9mIGFsbCB0aGUgdHJhbnNhY3Rpb24gaGFuZGxpbmcgcm91dGluZXMgb25seSByZWFkLW9ubHkgcm91dGluZXMgYXJlIGV4cG9zZWQgdG9cclxuICogdGhlIHB1YmxpYyBBUEksIGFzIHRyYW5zYWN0aW9ucyBhcmUgb25seSBhbGxvd2VkIHRvIGJlIGNyZWF0ZWQgYW5kIG1vZGlmaWVkIGJ5IE5ldExpY2Vuc2luZyBpbnRlcm5hbGx5LlxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgbmV3IHRyYW5zYWN0aW9uIG9iamVjdCB3aXRoIGdpdmVuIHByb3BlcnRpZXMuU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS90cmFuc2FjdGlvbi1zZXJ2aWNlcyNjcmVhdGUtdHJhbnNhY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiBub24tbnVsbCBwcm9wZXJ0aWVzIHdpbGwgYmUgdGFrZW4gZm9yIHRoZSBuZXcgb2JqZWN0LCBudWxsIHByb3BlcnRpZXMgd2lsbCBlaXRoZXIgc3RheSBudWxsLCBvciB3aWxsXHJcbiAgICAgKiBiZSBzZXQgdG8gYSBkZWZhdWx0IHZhbHVlLCBkZXBlbmRpbmcgb24gcHJvcGVydHkuXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gTmV0TGljZW5zaW5nLlRyYW5zYWN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIHRoZSBuZXdseSBjcmVhdGVkIHRyYW5zYWN0aW9uIG9iamVjdCBpbiBwcm9taXNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgY3JlYXRlKGNvbnRleHQsIHRyYW5zYWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IGl0ZW1zOiB7IGl0ZW06IGl0ZW1zIH0gfSB9ID0gYXdhaXQgU2VydmljZVxyXG4gICAgICAgICAgICAucG9zdChjb250ZXh0LCBDb25zdGFudHMuVHJhbnNhY3Rpb24uRU5EUE9JTlRfUEFUSCwgdHJhbnNhY3Rpb24uYXNQcm9wZXJ0aWVzTWFwKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBbaXRlbV0gPSBpdGVtcy5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnVHJhbnNhY3Rpb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1Ub1RyYW5zYWN0aW9uKGl0ZW0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdHJhbnNhY3Rpb24gYnkgaXRzIG51bWJlci5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL3RyYW5zYWN0aW9uLXNlcnZpY2VzI2dldC10cmFuc2FjdGlvblxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIHRoZSB0cmFuc2FjdGlvbiBudW1iZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIHRoZSB0cmFuc2FjdGlvbiBpbiBwcm9taXNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0KGNvbnRleHQsIG51bWJlcikge1xyXG4gICAgICAgIENoZWNrVXRpbHMucGFyYW1Ob3RFbXB0eShudW1iZXIsIENvbnN0YW50cy5OVU1CRVIpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgaXRlbXM6IHsgaXRlbTogaXRlbXMgfSB9IH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoY29udGV4dCwgYCR7Q29uc3RhbnRzLlRyYW5zYWN0aW9uLkVORFBPSU5UX1BBVEh9LyR7bnVtYmVyfWApO1xyXG5cclxuICAgICAgICBjb25zdCBbaXRlbV0gPSBpdGVtcy5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnVHJhbnNhY3Rpb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1Ub1RyYW5zYWN0aW9uKGl0ZW0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYWxsIHRyYW5zYWN0aW9ucyBvZiBhIHZlbmRvci5TZWUgTmV0TGljZW5zaW5nQVBJIGZvciBkZXRhaWxzOlxyXG4gICAgICogQHNlZSBodHRwczovL25ldGxpY2Vuc2luZy5pby93aWtpL3RyYW5zYWN0aW9uLXNlcnZpY2VzI3RyYW5zYWN0aW9ucy1saXN0XHJcbiAgICAgKlxyXG4gICAgICogZGV0ZXJtaW5lcyB0aGUgdmVuZG9yIG9uIHdob3NlIGJlaGFsZiB0aGUgY2FsbCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IE5ldExpY2Vuc2luZy5Db250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogcmVzZXJ2ZWQgZm9yIHRoZSBmdXR1cmUgdXNlLCBtdXN0IGJlIG9taXR0ZWQgLyBzZXQgdG8gTlVMTFxyXG4gICAgICogQHBhcmFtIGZpbHRlciBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBhcnJheSBvZiB0cmFuc2FjdGlvbiBlbnRpdGllcyBvciBlbXB0eSBhcnJheSBpZiBub3RoaW5nIGZvdW5kIGluIHByb21pc2UuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgbGlzdChjb250ZXh0LCBmaWx0ZXIpIHtcclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGlmICghQ2hlY2tVdGlscy5pc1ZhbGlkKGZpbHRlcikpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGZpbHRlciBoYXMgYmFkIHZhbHVlICR7ZmlsdGVyfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW0NvbnN0YW50cy5GSUxURVJdID0gdHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycgPyBmaWx0ZXIgOiBGaWx0ZXJVdGlscy5lbmNvZGUoZmlsdGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KGNvbnRleHQsIENvbnN0YW50cy5UcmFuc2FjdGlvbi5FTkRQT0lOVF9QQVRILCBxdWVyeVBhcmFtcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBQYWdlKFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW0uZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ1RyYW5zYWN0aW9uJykubWFwKCh2KSA9PiBpdGVtVG9UcmFuc2FjdGlvbih2KSksXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMucGFnZW51bWJlcixcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy5pdGVtc251bWJlcixcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy50b3RhbHBhZ2VzLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnRvdGFsaXRlbXMsXHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRyYW5zYWN0aW9uIHByb3BlcnRpZXMuU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS90cmFuc2FjdGlvbi1zZXJ2aWNlcyN1cGRhdGUtdHJhbnNhY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgTmV0TGljZW5zaW5nLkNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiB0cmFuc2FjdGlvbiBudW1iZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXIgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogbm9uLW51bGwgcHJvcGVydGllcyB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlIHByb3ZpZGVkIHZhbHVlcywgbnVsbCBwcm9wZXJ0aWVzIHdpbGwgc3RheSB1bmNoYW5nZWQuXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gTmV0TGljZW5zaW5nLlRyYW5zYWN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJuIHVwZGF0ZWQgdHJhbnNhY3Rpb24gaW4gcHJvbWlzZS5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBhc3luYyB1cGRhdGUoY29udGV4dCwgbnVtYmVyLCB0cmFuc2FjdGlvbikge1xyXG4gICAgICAgIENoZWNrVXRpbHMucGFyYW1Ob3RFbXB0eShudW1iZXIsIENvbnN0YW50cy5OVU1CRVIpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgaXRlbXM6IHsgaXRlbTogaXRlbXMgfSB9IH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5wb3N0KGNvbnRleHQsIGAke0NvbnN0YW50cy5UcmFuc2FjdGlvbi5FTkRQT0lOVF9QQVRIfS8ke251bWJlcn1gLCB0cmFuc2FjdGlvbi5hc1Byb3BlcnRpZXNNYXAoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtpdGVtXSA9IGl0ZW1zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdUcmFuc2FjdGlvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVRvVHJhbnNhY3Rpb24oaXRlbSk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciAgICBMYWJzNjQgPG5ldGxpY2Vuc2luZ0BsYWJzNjQuY29tPlxyXG4gKiBAbGljZW5zZSAgIEFwYWNoZS0yLjBcclxuICogQGxpbmsgICAgICBodHRwczovL25ldGxpY2Vuc2luZy5pb1xyXG4gKiBAY29weXJpZ2h0IDIwMTcgTGFiczY0IE5ldExpY2Vuc2luZ1xyXG4gKi9cclxuXHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9TZXJ2aWNlJztcclxuaW1wb3J0IENoZWNrVXRpbHMgZnJvbSAnLi4vdXRpbC9DaGVja1V0aWxzJztcclxuaW1wb3J0IEZpbHRlclV0aWxzIGZyb20gJy4uL3V0aWwvRmlsdGVyVXRpbHMnO1xyXG5pbXBvcnQgaXRlbVRvT2JqZWN0IGZyb20gJy4uL2NvbnZlcnRlcnMvaXRlbVRvT2JqZWN0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vdm8vUGFnZSc7XHJcbmltcG9ydCBpdGVtVG9Db3VudHJ5IGZyb20gJy4uL2NvbnZlcnRlcnMvaXRlbVRvQ291bnRyeSc7XHJcblxyXG4vKipcclxuICogSlMgcmVwcmVzZW50YXRpb24gb2YgdGhlIFV0aWxpdHkgU2VydmljZS4gU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICogaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS91dGlsaXR5LXNlcnZpY2VzXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbGwgbGljZW5zZSB0eXBlcy4gU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS91dGlsaXR5LXNlcnZpY2VzI2xpY2Vuc2UtdHlwZXMtbGlzdFxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIGFycmF5IG9mIGF2YWlsYWJsZSBsaWNlbnNlIHR5cGVzIG9yIGVtcHR5IGFycmF5IGlmIG5vdGhpbmcgZm91bmQgaW4gcHJvbWlzZS5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBsaXN0TGljZW5zZVR5cGVzKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldChjb250ZXh0LCBgJHtDb25zdGFudHMuVXRpbGl0eS5FTkRQT0lOVF9QQVRIfS8ke0NvbnN0YW50cy5VdGlsaXR5LkVORFBPSU5UX1BBVEhfTElDRU5TRV9UWVBFU31gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFBhZ2UoXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMuaXRlbS5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnTGljZW5zZVR5cGUnKS5tYXAoKHYpID0+IGl0ZW1Ub09iamVjdCh2KSksXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMucGFnZW51bWJlcixcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy5pdGVtc251bWJlcixcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy50b3RhbHBhZ2VzLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnRvdGFsaXRlbXMsXHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFsbCBsaWNlbnNlIG1vZGVscy4gU2VlIE5ldExpY2Vuc2luZ0FQSSBmb3IgZGV0YWlsczpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW8vd2lraS91dGlsaXR5LXNlcnZpY2VzI2xpY2Vuc2luZy1tb2RlbHMtbGlzdFxyXG4gICAgICpcclxuICAgICAqIGRldGVybWluZXMgdGhlIHZlbmRvciBvbiB3aG9zZSBiZWhhbGYgdGhlIGNhbGwgaXMgcGVyZm9ybWVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBOZXRMaWNlbnNpbmcuQ29udGV4dFxyXG4gICAgICpcclxuICAgICAqIGFycmF5IG9mIGF2YWlsYWJsZSBsaWNlbnNlIG1vZGVscyBvciBlbXB0eSBhcnJheSBpZiBub3RoaW5nIGZvdW5kIGluIHByb21pc2UuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgbGlzdExpY2Vuc2luZ01vZGVscyhjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoY29udGV4dCwgYCR7Q29uc3RhbnRzLlV0aWxpdHkuRU5EUE9JTlRfUEFUSH0vJHtDb25zdGFudHMuVXRpbGl0eS5FTkRQT0lOVF9QQVRIX0xJQ0VOU0lOR19NT0RFTFN9YCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQYWdlKFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW0uZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ0xpY2Vuc2luZ01vZGVsUHJvcGVydGllcycpLm1hcCgodikgPT4gaXRlbVRvT2JqZWN0KHYpKSxcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy5wYWdlbnVtYmVyLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW1zbnVtYmVyLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnRvdGFscGFnZXMsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMudG90YWxpdGVtcyxcclxuICAgICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYWxsIGNvdW50cmllcy5cclxuICAgICAqXHJcbiAgICAgKiBkZXRlcm1pbmVzIHRoZSB2ZW5kb3Igb24gd2hvc2UgYmVoYWxmIHRoZSBjYWxsIGlzIHBlcmZvcm1lZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiByZXNlcnZlZCBmb3IgdGhlIGZ1dHVyZSB1c2UsIG11c3QgYmUgb21pdHRlZCAvIHNldCB0byBOVUxMXHJcbiAgICAgKiBAcGFyYW0gZmlsdGVyXHJcbiAgICAgKlxyXG4gICAgICogY29sbGVjdGlvbiBvZiBhdmFpbGFibGUgY291bnRyaWVzIG9yIG51bGwvZW1wdHkgbGlzdCBpZiBub3RoaW5nIGZvdW5kIGluIHByb21pc2UuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgbGlzdENvdW50cmllcyhjb250ZXh0LCBmaWx0ZXIpIHtcclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGlmICghQ2hlY2tVdGlscy5pc1ZhbGlkKGZpbHRlcikpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGZpbHRlciBoYXMgYmFkIHZhbHVlICR7ZmlsdGVyfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW0NvbnN0YW50cy5GSUxURVJdID0gdHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycgPyBmaWx0ZXIgOiBGaWx0ZXJVdGlscy5lbmNvZGUoZmlsdGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICAgIGAke0NvbnN0YW50cy5VdGlsaXR5LkVORFBPSU5UX1BBVEh9LyR7Q29uc3RhbnRzLlV0aWxpdHkuRU5EUE9JTlRfUEFUSF9DT1VOVFJJRVN9YCxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gUGFnZShcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy5pdGVtLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdDb3VudHJ5JykubWFwKCh2KSA9PiBpdGVtVG9Db3VudHJ5KHYpKSxcclxuICAgICAgICAgICAgZGF0YS5pdGVtcy5wYWdlbnVtYmVyLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLml0ZW1zbnVtYmVyLFxyXG4gICAgICAgICAgICBkYXRhLml0ZW1zLnRvdGFscGFnZXMsXHJcbiAgICAgICAgICAgIGRhdGEuaXRlbXMudG90YWxpdGVtcyxcclxuICAgICAgICApO1xyXG4gICAgfSxcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgICAgTGFiczY0IDxuZXRsaWNlbnNpbmdAbGFiczY0LmNvbT5cclxuICogQGxpY2Vuc2UgICBBcGFjaGUtMi4wXHJcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW9cclxuICogQGNvcHlyaWdodCAyMDE3IExhYnM2NCBOZXRMaWNlbnNpbmdcclxuICovXHJcblxyXG4vLyBDYXN0IGFuIGF0dHJpYnV0ZSB0byBhIG5hdGl2ZSBKUyB0eXBlLlxyXG5leHBvcnQgZGVmYXVsdCAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgc3dpdGNoIChrZXkudHJpbSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlICdzdHInOlxyXG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgIGNhc2UgJ2ludCc6XHJcbiAgICAgICAgY2FzZSAnaW50ZWdlcic6IHtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNOYU4obikgPyB2YWx1ZSA6IG47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2Zsb2F0JzpcclxuICAgICAgICBjYXNlICdkb3VibGUnOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5pc05hTihuKSA/IHZhbHVlIDogbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnYm9vbCc6XHJcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RydWUnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnVFJVRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmYWxzZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdGQUxTRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSA9PT0gJ25vdycpID8gJ25vdycgOiBuZXcgRGF0ZShTdHJpbmcodmFsdWUpKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaXNWYWxpZCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCB2YWxpZCA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbGlkID0gTnVtYmVyLmlzRmluaXRlKHZhbHVlKSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIHBhcmFtTm90TnVsbChwYXJhbWV0ZXIsIHBhcmFtZXRlck5hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZChwYXJhbWV0ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBQYXJhbWV0ZXIgJHtwYXJhbWV0ZXJOYW1lfSBoYXMgYmFkIHZhbHVlICR7cGFyYW1ldGVyfWApO1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXIgPT09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoYFBhcmFtZXRlciAke3BhcmFtZXRlck5hbWV9IGNhbm5vdCBiZSBudWxsYCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBhcmFtTm90RW1wdHkocGFyYW1ldGVyLCBwYXJhbWV0ZXJOYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQocGFyYW1ldGVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihgUGFyYW1ldGVyICR7cGFyYW1ldGVyTmFtZX0gaGFzIGJhZCB2YWx1ZSAke3BhcmFtZXRlcn1gKTtcclxuICAgICAgICBpZiAoIXBhcmFtZXRlcikgdGhyb3cgbmV3IFR5cGVFcnJvcihgUGFyYW1ldGVyICR7cGFyYW1ldGVyTmFtZX0gY2Fubm90IGJlIG51bGwgb3IgZW1wdHkgc3RyaW5nYCk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBGSUxURVJfREVMSU1JVEVSOiAnOycsXHJcbiAgICBGSUxURVJfUEFJUl9ERUxJTUlURVI6ICc9JyxcclxuICAgIGVuY29kZShmaWx0ZXIgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gW107XHJcbiAgICAgICAgY29uc3QgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXIpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwoZmlsdGVyLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeS5wdXNoKGAke2tleX0ke3RoaXMuRklMVEVSX1BBSVJfREVMSU1JVEVSfSR7ZmlsdGVyW2tleV19YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcXVlcnkuam9pbih0aGlzLkZJTFRFUl9ERUxJTUlURVIpO1xyXG4gICAgfSxcclxuICAgIGRlY29kZShxdWVyeSA9ICcnKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0ge307XHJcbiAgICAgICAgcXVlcnkuc3BsaXQodGhpcy5GSUxURVJfREVMSU1JVEVSKS5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSB2LnNwbGl0KHRoaXMuRklMVEVSX1BBSVJfREVMSU1JVEVSKTtcclxuICAgICAgICAgICAgZmlsdGVyW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgIH0sXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yICAgIExhYnM2NCA8bmV0bGljZW5zaW5nQGxhYnM2NC5jb20+XHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlLTIuMFxyXG4gKiBAbGluayAgICAgIGh0dHBzOi8vbmV0bGljZW5zaW5nLmlvXHJcbiAqIEBjb3B5cmlnaHQgMjAxNyBMYWJzNjQgTmV0TGljZW5zaW5nXHJcbiAqL1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCBDaGVja1V0aWxzIGZyb20gJy4uL3V0aWwvQ2hlY2tVdGlscyc7XHJcblxyXG4vKipcclxuICogVGhlIGNvbnRleHQgdmFsdWVzLlxyXG4gKiBAdHlwZSB7e319XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5jb25zdCB2YWx1ZXNNYXAgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuLyoqXHJcbiAqIExpc3Qgb2YgdmFsdWVzIHRoYXQgd2FzIGRlZmluZWRcclxuICogQHR5cGUge3t9fVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuY29uc3QgZGVmaW5lZE1hcCA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4vKipcclxuICogQ29udGV4dCBkZWZhdWx0c1xyXG4gKiBAdHlwZSB7e2Jhc2VVcmw6IHN0cmluZywgc2VjdXJpdHlNb2RlfX1cclxuICogQHByaXZhdGVcclxuICovXHJcbmNvbnN0IGRlZmF1bHRzTWFwID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWVzKSB7XHJcbiAgICAgICAgZGVmYXVsdHNNYXAuc2V0KHRoaXMsIHtcclxuICAgICAgICAgICAgYmFzZVVybDogJ2h0dHBzOi8vZ28ubmV0bGljZW5zaW5nLmlvL2NvcmUvdjIvcmVzdCcsXHJcbiAgICAgICAgICAgIHNlY3VyaXR5TW9kZTogQ29uc3RhbnRzLkJBU0lDX0FVVEhFTlRJQ0FUSU9OLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YWx1ZXNNYXAuc2V0KHRoaXMsIHt9KTtcclxuXHJcbiAgICAgICAgZGVmaW5lZE1hcC5zZXQodGhpcywge30pO1xyXG5cclxuICAgICAgICB0aGlzLnNldFZhbHVlcyh7IC4uLmRlZmF1bHRzTWFwLmdldCh0aGlzKSwgLi4udmFsdWVzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJhc2VVcmwoYmFzZVVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlKCdiYXNlVXJsJywgYmFzZVVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmFzZVVybChkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgnYmFzZVVybCcsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlcm5hbWUodXNlcm5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcm5hbWUoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ3VzZXJuYW1lJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXNzd29yZChwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXNzd29yZChkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgncGFzc3dvcmQnLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFwaUtleShhcGlLZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSgnYXBpS2V5JywgYXBpS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcGlLZXkoZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ2FwaUtleScsIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VjdXJpdHlNb2RlKHNlY3VyaXR5TW9kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlKCdzZWN1cml0eU1vZGUnLCBzZWN1cml0eU1vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlY3VyaXR5TW9kZShkZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgnc2VjdXJpdHlNb2RlJywgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWZW5kb3JOdW1iZXIodmVuZG9yTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0VmFsdWUoJ3ZlbmRvck51bWJlcicsIHZlbmRvck51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmVuZG9yTnVtYmVyKGRlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCd2ZW5kb3JOdW1iZXInLCBkZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGEgZ2l2ZW4gdmFsdWVzIG9uIHRoZSBjb250ZXh0LlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7Q29udGV4dH1cclxuICAgICAqL1xyXG4gICAgc2V0VmFsdWUoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIC8vIGNoZWNrIHZhbHVlc1xyXG4gICAgICAgIGlmICghQ2hlY2tVdGlscy5pc1ZhbGlkKGtleSkgfHwgdHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHRocm93IG5ldyBFcnJvcihgQmFkIHZhbHVlIGtleToke2tleX1gKTtcclxuICAgICAgICBpZiAoIUNoZWNrVXRpbHMuaXNWYWxpZCh2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgVmFsdWUgJHtrZXl9IGhhcyB3cm9uZyB2YWx1ZSR7dmFsdWV9YCk7XHJcblxyXG4gICAgICAgIC8vIGRlZmluZSBrZXlzXHJcbiAgICAgICAgdGhpcy5kZWZpbmUoa2V5KTtcclxuXHJcbiAgICAgICAgbGV0IGNvcGVkVmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29wZWRWYWx1ZSA9IChBcnJheS5pc0FycmF5KHZhbHVlKSkgPyBPYmplY3QuYXNzaWduKFtdLCB2YWx1ZSkgOiAoeyAuLi52YWx1ZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlc01hcC5nZXQodGhpcyk7XHJcbiAgICAgICAgdmFsdWVzW2tleV0gPSBjb3BlZFZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgYXJyYXkgb2YgY29udGV4dCB2YWx1ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVzXHJcbiAgICAgKiBAcmV0dXJucyB7Q29udGV4dH1cclxuICAgICAqL1xyXG4gICAgc2V0VmFsdWVzKHZhbHVlcykge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlVmFsdWVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbCh2YWx1ZXMsIGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYW4gdmFsdWUgZnJvbSB0aGUgY29udGV4dC5cclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBkZWZcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBnZXRWYWx1ZShrZXksIGRlZikge1xyXG4gICAgICAgIHJldHVybiAoa2V5IGluIHZhbHVlc01hcC5nZXQodGhpcykpXHJcbiAgICAgICAgICAgID8gdmFsdWVzTWFwLmdldCh0aGlzKVtrZXldXHJcbiAgICAgICAgICAgIDogZGVmO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCBvZiB0aGUgY3VycmVudCB2YWx1ZSBvbiB0aGUgY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgZ2V0VmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlc01hcC5nZXQodGhpcykgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge0NvbnRleHR9XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZVZhbHVlKGtleSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlc01hcC5nZXQodGhpcyk7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlc1trZXldO1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZURlZmluZShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIHZhbHVlc1xyXG4gICAgICogQHBhcmFtIGtleXNcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlVmFsdWVzKGtleXMpIHtcclxuICAgICAgICBjb25zdCBrZXlzQXIgPSBrZXlzIHx8IE9iamVjdC5rZXlzKHZhbHVlc01hcC5nZXQodGhpcykpO1xyXG4gICAgICAgIGtleXNBci5mb3JFYWNoKChrZXkpID0+IHRoaXMucmVtb3ZlVmFsdWUoa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgdmFsdWUgZ2V0dGVyIGFuZCBzZXR0ZXJcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBvbmx5R2V0dGVyXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBkZWZpbmUoa2V5LCBvbmx5R2V0dGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVmaW5lKGtleSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCFDaGVja1V0aWxzLmlzVmFsaWQoa2V5KSB8fCB0eXBlb2YgcHJvcGVydHkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEJhZCB2YWx1ZSBuYW1lOiR7a2V5fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGRlbGV0ZSBwcm9wZXJ0eVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3JzID0ge1xyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmdldFZhbHVlKGtleSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCFvbmx5R2V0dGVyKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnNldCA9ICh2YWx1ZSkgPT4gc2VsZi5zZXRWYWx1ZShrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRlZmluZWQgPSBkZWZpbmVkTWFwLmdldCh0aGlzKTtcclxuICAgICAgICBkZWZpbmVkW2tleV0gPSB0cnVlO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCBkZXNjcmlwdG9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB2YWx1ZSBoYXMgZGVmaW5lZFxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgaGFzRGVmaW5lKGtleSkge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKGRlZmluZWRNYXAuZ2V0KHRoaXMpW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIHZhbHVlIGdldHRlciBhbmQgc2V0dGVyXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICByZW1vdmVEZWZpbmUoa2V5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0RlZmluZShrZXkpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRlZmluZWQgPSBkZWZpbmVkTWFwLmdldCh0aGlzKTtcclxuICAgICAgICBkZWxldGUgZGVmaW5lZFtrZXldO1xyXG5cclxuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IChjb250ZW50ID0gW10sIHBhZ2VOdW1iZXIgPSAwLCBpdGVtc051bWJlciA9IDAsIHRvdGFsUGFnZXMgPSAwLCB0b3RhbEl0ZW1zID0gMCkgPT4ge1xyXG4gICAgY29uc3QgcGFnaW5hdG9yID0ge1xyXG4gICAgICAgIGdldENvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldFBhZ2VOdW1iZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYWdlTnVtYmVyO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldEl0ZW1zTnVtYmVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXNOdW1iZXI7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0VG90YWxQYWdlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0VG90YWxJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsSXRlbXM7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFzTmV4dCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0b3RhbFBhZ2VzID4gcGFnZU51bWJlciArIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBhZ2luYXRvcktleXMgPSBPYmplY3Qua2V5cyhwYWdpbmF0b3IpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJveHkoY29udGVudCwge1xyXG4gICAgICAgIGdldCh0YXJnZXQsIGtleSkge1xyXG4gICAgICAgICAgICBpZiAocGFnaW5hdG9yS2V5cy5pbmRleE9mKGtleSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnaW5hdG9yW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgICAgTGFiczY0IDxuZXRsaWNlbnNpbmdAbGFiczY0LmNvbT5cclxuICogQGxpY2Vuc2UgICBBcGFjaGUtMi4wXHJcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9uZXRsaWNlbnNpbmcuaW9cclxuICogQGNvcHlyaWdodCAyMDE3IExhYnM2NCBOZXRMaWNlbnNpbmdcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uUGFyYW1ldGVycyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHRhcmdldCBwcm9kdWN0XHJcbiAgICAgKlxyXG4gICAgICogb3B0aW9uYWwgcHJvZHVjdE51bWJlciwgbXVzdCBiZSBwcm92aWRlZCBpbiBjYXNlIGxpY2Vuc2VlIGF1dG8tY3JlYXRlIGlzIGVuYWJsZWRcclxuICAgICAqIEBwYXJhbSBwcm9kdWN0TnVtYmVyXHJcbiAgICAgKiBAcmV0dXJucyB7VmFsaWRhdGlvblBhcmFtZXRlcnN9XHJcbiAgICAgKi9cclxuICAgIHNldFByb2R1Y3ROdW1iZXIocHJvZHVjdE51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdE51bWJlciA9IHByb2R1Y3ROdW1iZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRhcmdldCBwcm9kdWN0XHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZHVjdE51bWJlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0TnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbmFtZSBmb3IgdGhlIG5ldyBsaWNlbnNlZVxyXG4gICAgICpcclxuICAgICAqIG9wdGlvbmFsIGh1bWFuLXJlYWRhYmxlIGxpY2Vuc2VlIG5hbWUgaW4gY2FzZSBsaWNlbnNlZSB3aWxsIGJlIGF1dG8tY3JlYXRlZC4gVGhpcyBwYXJhbWV0ZXIgbXVzdCBub3RcclxuICAgICAqIGJlIHRoZSBuYW1lLCBidXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYW55IG90aGVyIHVzZWZ1bCBzdHJpbmcgaW5mb3JtYXRpb24gd2l0aCBuZXcgbGljZW5zZWVzLCB1cCB0b1xyXG4gICAgICogMTAwMCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIGxpY2Vuc2VlTmFtZVxyXG4gICAgICogQHJldHVybnMge1ZhbGlkYXRpb25QYXJhbWV0ZXJzfVxyXG4gICAgICovXHJcbiAgICBzZXRMaWNlbnNlZU5hbWUobGljZW5zZWVOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5saWNlbnNlZU5hbWUgPSBsaWNlbnNlZU5hbWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxpY2Vuc2VlIG5hbWVcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBnZXRMaWNlbnNlZU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGljZW5zZWVOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbGljZW5zZWUgc2VjcmV0XHJcbiAgICAgKlxyXG4gICAgICogbGljZW5zZWUgc2VjcmV0IHN0b3JlZCBvbiB0aGUgY2xpZW50IHNpZGUuIFJlZmVyIHRvIExpY2Vuc2VlIFNlY3JldCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzLlxyXG4gICAgICogQHBhcmFtIGxpY2Vuc2VlU2VjcmV0XHJcbiAgICAgKiBAcmV0dXJucyB7VmFsaWRhdGlvblBhcmFtZXRlcnN9XHJcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgJ05vZGVMb2NrZWQnIGxpY2Vuc2luZ01vZGVsIGluc3RlYWRcclxuICAgICAqL1xyXG4gICAgc2V0TGljZW5zZWVTZWNyZXQobGljZW5zZWVTZWNyZXQpIHtcclxuICAgICAgICB0aGlzLmxpY2Vuc2VlU2VjcmV0ID0gbGljZW5zZWVTZWNyZXQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxpY2Vuc2VlIHNlY3JldFxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgJ05vZGVMb2NrZWQnIGxpY2Vuc2luZ01vZGVsIGluc3RlYWRcclxuICAgICAqL1xyXG4gICAgZ2V0TGljZW5zZWVTZWNyZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGljZW5zZWVTZWNyZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMsIHRoYXQgdGhlIHZhbGlkYXRpb24gcmVzcG9uc2UgaXMgaW50ZW5kZWQgdGhlIG9mZmxpbmUgdXNlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZvck9mZmxpbmVVc2VcclxuICAgICAqICAgICAgICAgICAgaWYgXCJ0cnVlXCIsIHZhbGlkYXRpb24gcmVzcG9uc2Ugd2lsbCBiZSBleHRlbmRlZCB3aXRoIGRhdGEgcmVxdWlyZWQgZm9yIHRoZSBvZmZsaW5lIHVzZVxyXG4gICAgICovXHJcbiAgICBzZXRGb3JPZmZsaW5lVXNlKGZvck9mZmxpbmVVc2UpIHtcclxuICAgICAgICB0aGlzLmZvck9mZmxpbmVVc2UgPSAhIWZvck9mZmxpbmVVc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGb3JPZmZsaW5lVXNlKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZm9yT2ZmbGluZVVzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREcnlSdW4oZHJ5UnVuKSB7XHJcbiAgICAgICAgdGhpcy5kcnlSdW4gPSAhIWRyeVJ1bjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXREcnlSdW4oZGVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJ5UnVuIHx8IGRlZjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB2YWxpZGF0aW9uIHBhcmFtZXRlcnNcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBnZXRQYXJhbWV0ZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMucGFyYW1ldGVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2R1Y3RNb2R1bGVWYWxpZGF0aW9uUGFyYW1ldGVycyhwcm9kdWN0TW9kdWxlTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5wYXJhbWV0ZXJzW3Byb2R1Y3RNb2R1bGVOdW1iZXJdIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZHVjdE1vZHVsZVZhbGlkYXRpb25QYXJhbWV0ZXJzKHByb2R1Y3RNb2R1bGVOdW1iZXIsIHByb2R1Y3RNb2R1bGVQYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1ldGVyc1twcm9kdWN0TW9kdWxlTnVtYmVyXSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIHx8ICFPYmplY3Qua2V5cyh0aGlzLnBhcmFtZXRlcnNbcHJvZHVjdE1vZHVsZU51bWJlcl0pLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnNbcHJvZHVjdE1vZHVsZU51bWJlcl0gPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFyYW1ldGVyc1twcm9kdWN0TW9kdWxlTnVtYmVyXSA9IHsgLi4udGhpcy5wYXJhbWV0ZXJzW3Byb2R1Y3RNb2R1bGVOdW1iZXJdLCAuLi5wcm9kdWN0TW9kdWxlUGFyYW1ldGVycyB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciAgICBMYWJzNjQgPG5ldGxpY2Vuc2luZ0BsYWJzNjQuY29tPlxyXG4gKiBAbGljZW5zZSAgIEFwYWNoZS0yLjBcclxuICogQGxpbmsgICAgICBodHRwczovL25ldGxpY2Vuc2luZy5pb1xyXG4gKiBAY29weXJpZ2h0IDIwMTcgTGFiczY0IE5ldExpY2Vuc2luZ1xyXG4gKi9cclxuXHJcbmltcG9ydCBDaGVja1V0aWxzIGZyb20gJy4uL3V0aWwvQ2hlY2tVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uUmVzdWx0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWxpZGF0b3JzKCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMudmFsaWRhdG9ycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2R1Y3RNb2R1bGVWYWxpZGF0aW9uKHByb2R1Y3RNb2R1bGVOdW1iZXIsIHByb2R1Y3RNb2R1bGVWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFDaGVja1V0aWxzLmlzVmFsaWQocHJvZHVjdE1vZHVsZU51bWJlcikgfHwgdHlwZW9mIHByb2R1Y3RNb2R1bGVOdW1iZXIgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEJhZCBwcm9kdWN0TW9kdWxlTnVtYmVyOiR7cHJvZHVjdE1vZHVsZU51bWJlcn1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yc1twcm9kdWN0TW9kdWxlTnVtYmVyXSA9IHByb2R1Y3RNb2R1bGVWYWxpZGF0aW9uO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0TW9kdWxlVmFsaWRhdGlvbihwcm9kdWN0TW9kdWxlTnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFDaGVja1V0aWxzLmlzVmFsaWQocHJvZHVjdE1vZHVsZU51bWJlcikgfHwgdHlwZW9mIHByb2R1Y3RNb2R1bGVOdW1iZXIgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEJhZCBwcm9kdWN0TW9kdWxlTnVtYmVyOiR7cHJvZHVjdE1vZHVsZU51bWJlcn1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnNbcHJvZHVjdE1vZHVsZU51bWJlcl07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VHRsKHR0bCkge1xyXG4gICAgICAgIGlmICghQ2hlY2tVdGlscy5pc1ZhbGlkKHR0bCkgfHwgdHlwZW9mIHR0bCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgQmFkIHR0bDoke3R0bH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50dGwgPSBuZXcgRGF0ZShTdHJpbmcodHRsKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFR0bCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudHRsKSA/IG5ldyBEYXRlKHRoaXMudHRsKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgZGF0YSA9ICdWYWxpZGF0aW9uUmVzdWx0IFsnO1xyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gdGhpcy5nZXRWYWxpZGF0b3JzKCk7XHJcbiAgICAgICAgY29uc3QgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXModmFsaWRhdG9ycykuZm9yRWFjaCgocHJvZHVjdE1vZHVsZU51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBkYXRhICs9IGBQcm9kdWN0TW9kdWxlPCR7cHJvZHVjdE1vZHVsZU51bWJlcn0+YDtcclxuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKHZhbGlkYXRvcnMsIHByb2R1Y3RNb2R1bGVOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhICs9IEpTT04uc3RyaW5naWZ5KHZhbGlkYXRvcnNbcHJvZHVjdE1vZHVsZU51bWJlcl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRhdGEgKz0gJ10nO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG4iLCIoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiBidG9hKHN0cikge1xuICAgIHZhciBidWZmZXI7XG5cbiAgICBpZiAoc3RyIGluc3RhbmNlb2YgQnVmZmVyKSB7XG4gICAgICBidWZmZXIgPSBzdHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKHN0ci50b1N0cmluZygpLCAnYmluYXJ5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnYmFzZTY0Jyk7XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG59KCkpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIENvbnN0YW50c1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJztcclxuXHJcbi8vIFZPXHJcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vdm8vQ29udGV4dCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vdm8vUGFnZSc7XHJcbmltcG9ydCBWYWxpZGF0aW9uUGFyYW1ldGVycyBmcm9tICcuL3ZvL1ZhbGlkYXRpb25QYXJhbWV0ZXJzJztcclxuaW1wb3J0IFZhbGlkYXRpb25SZXN1bHRzIGZyb20gJy4vdm8vVmFsaWRhdGlvblJlc3VsdHMnO1xyXG5cclxuLy8gU2VydmljZXNcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9TZXJ2aWNlJztcclxuaW1wb3J0IExpY2Vuc2VlU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL0xpY2Vuc2VlU2VydmljZSc7XHJcbmltcG9ydCBMaWNlbnNlU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL0xpY2Vuc2VTZXJ2aWNlJztcclxuaW1wb3J0IExpY2Vuc2VUZW1wbGF0ZVNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9MaWNlbnNlVGVtcGxhdGVTZXJ2aWNlJztcclxuaW1wb3J0IFBheW1lbnRNZXRob2RTZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvUGF5bWVudE1ldGhvZFNlcnZpY2UnO1xyXG5pbXBvcnQgUHJvZHVjdE1vZHVsZVNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9Qcm9kdWN0TW9kdWxlU2VydmljZSc7XHJcbmltcG9ydCBQcm9kdWN0U2VydmljZSBmcm9tICcuL3NlcnZpY2VzL1Byb2R1Y3RTZXJ2aWNlJztcclxuaW1wb3J0IFRva2VuU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL1Rva2VuU2VydmljZSc7XHJcbmltcG9ydCBUcmFuc2FjdGlvblNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9UcmFuc2FjdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgVXRpbGl0eVNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9VdGlsaXR5U2VydmljZSc7XHJcblxyXG4vLyBFbnRpdGllc1xyXG5pbXBvcnQgQmFzZUVudGl0eSBmcm9tICcuL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xyXG5pbXBvcnQgQ291bnRyeSBmcm9tICcuL2VudGl0aWVzL0NvdW50cnknO1xyXG5pbXBvcnQgTGljZW5zZSBmcm9tICcuL2VudGl0aWVzL0xpY2Vuc2UnO1xyXG5pbXBvcnQgTGljZW5zZWUgZnJvbSAnLi9lbnRpdGllcy9MaWNlbnNlZSc7XHJcbmltcG9ydCBMaWNlbnNlVGVtcGxhdGUgZnJvbSAnLi9lbnRpdGllcy9MaWNlbnNlVGVtcGxhdGUnO1xyXG5pbXBvcnQgUGF5bWVudE1ldGhvZCBmcm9tICcuL2VudGl0aWVzL1BheW1lbnRNZXRob2QnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL2VudGl0aWVzL1Byb2R1Y3QnO1xyXG5pbXBvcnQgUHJvZHVjdERpc2NvdW50IGZyb20gJy4vZW50aXRpZXMvUHJvZHVjdERpc2NvdW50JztcclxuaW1wb3J0IFByb2R1Y3RNb2R1bGUgZnJvbSAnLi9lbnRpdGllcy9Qcm9kdWN0TW9kdWxlJztcclxuaW1wb3J0IFRva2VuIGZyb20gJy4vZW50aXRpZXMvVG9rZW4nO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSAnLi9lbnRpdGllcy9UcmFuc2FjdGlvbic7XHJcbmltcG9ydCBMaWNlbnNlVHJhbnNhY3Rpb25Kb2luIGZyb20gJy4vZW50aXRpZXMvTGljZW5zZVRyYW5zYWN0aW9uSm9pbic7XHJcblxyXG4vLyBDb252ZXJ0ZXJzXHJcbmltcG9ydCBpdGVtVG9Db3VudHJ5IGZyb20gJy4vY29udmVydGVycy9pdGVtVG9Db3VudHJ5JztcclxuaW1wb3J0IGl0ZW1Ub0xpY2Vuc2UgZnJvbSAnLi9jb252ZXJ0ZXJzL2l0ZW1Ub0xpY2Vuc2UnO1xyXG5pbXBvcnQgaXRlbVRvTGljZW5zZWUgZnJvbSAnLi9jb252ZXJ0ZXJzL2l0ZW1Ub0xpY2Vuc2VlJztcclxuaW1wb3J0IGl0ZW1Ub0xpY2Vuc2VUZW1wbGF0ZSBmcm9tICcuL2NvbnZlcnRlcnMvaXRlbVRvTGljZW5zZVRlbXBsYXRlJztcclxuaW1wb3J0IGl0ZW1Ub09iamVjdCBmcm9tICcuL2NvbnZlcnRlcnMvaXRlbVRvT2JqZWN0JztcclxuaW1wb3J0IGl0ZW1Ub1BheW1lbnRNZXRob2QgZnJvbSAnLi9jb252ZXJ0ZXJzL2l0ZW1Ub1BheW1lbnRNZXRob2QnO1xyXG5pbXBvcnQgaXRlbVRvUHJvZHVjdCBmcm9tICcuL2NvbnZlcnRlcnMvaXRlbVRvUHJvZHVjdCc7XHJcbmltcG9ydCBpdGVtVG9Qcm9kdWN0TW9kdWxlIGZyb20gJy4vY29udmVydGVycy9pdGVtVG9Qcm9kdWN0TW9kdWxlJztcclxuaW1wb3J0IGl0ZW1Ub1Rva2VuIGZyb20gJy4vY29udmVydGVycy9pdGVtVG9Ub2tlbic7XHJcbmltcG9ydCBpdGVtVG9UcmFuc2FjdGlvbiBmcm9tICcuL2NvbnZlcnRlcnMvaXRlbVRvVHJhbnNhY3Rpb24nO1xyXG5cclxuLy8gVXRpbHNcclxuaW1wb3J0IENhc3RzVXRpbHMgZnJvbSAnLi91dGlsL0Nhc3RzVXRpbHMnO1xyXG5pbXBvcnQgQ2hlY2tVdGlscyBmcm9tICcuL3V0aWwvQ2hlY2tVdGlscyc7XHJcbmltcG9ydCBGaWx0ZXJVdGlscyBmcm9tICcuL3V0aWwvRmlsdGVyVXRpbHMnO1xyXG5cclxuLy8gRXJyb3JzXHJcbmltcG9ydCBObGljRXJyb3IgZnJvbSAnLi9lcnJvcnMvTmxpY0Vycm9yJztcclxuXHJcbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxyXG5jb25zdCBOZXRMaWNlbnNpbmcgPSB7XHJcbiAgICAvLyBDb25zdGFudHNcclxuICAgIENvbnN0YW50cyxcclxuXHJcbiAgICAvLyBFeHBvc2UgVk9cclxuICAgIENvbnRleHQsXHJcbiAgICBQYWdlLFxyXG4gICAgVmFsaWRhdGlvblBhcmFtZXRlcnMsXHJcbiAgICBWYWxpZGF0aW9uUmVzdWx0cyxcclxuXHJcbiAgICAvLyBFeHBvc2UgU2VydmljZXNcclxuICAgIFNlcnZpY2UsXHJcbiAgICBMaWNlbnNlZVNlcnZpY2UsXHJcbiAgICBMaWNlbnNlU2VydmljZSxcclxuICAgIExpY2Vuc2VUZW1wbGF0ZVNlcnZpY2UsXHJcbiAgICBQYXltZW50TWV0aG9kU2VydmljZSxcclxuICAgIFByb2R1Y3RNb2R1bGVTZXJ2aWNlLFxyXG4gICAgUHJvZHVjdFNlcnZpY2UsXHJcbiAgICBUb2tlblNlcnZpY2UsXHJcbiAgICBUcmFuc2FjdGlvblNlcnZpY2UsXHJcbiAgICBVdGlsaXR5U2VydmljZSxcclxuXHJcbiAgICAvLyBFeHBvc2UgRW50aXRpZXNcclxuICAgIEJhc2VFbnRpdHksXHJcbiAgICBDb3VudHJ5LFxyXG4gICAgTGljZW5zZSxcclxuICAgIExpY2Vuc2VlLFxyXG4gICAgTGljZW5zZVRlbXBsYXRlLFxyXG4gICAgUGF5bWVudE1ldGhvZCxcclxuICAgIFByb2R1Y3QsXHJcbiAgICBQcm9kdWN0RGlzY291bnQsXHJcbiAgICBQcm9kdWN0TW9kdWxlLFxyXG4gICAgVG9rZW4sXHJcbiAgICBUcmFuc2FjdGlvbixcclxuICAgIExpY2Vuc2VUcmFuc2FjdGlvbkpvaW4sXHJcblxyXG4gICAgLy8gRXhwb3NlIENvbnZlcnRlcnNcclxuICAgIGl0ZW1Ub0NvdW50cnksXHJcbiAgICBpdGVtVG9MaWNlbnNlLFxyXG4gICAgaXRlbVRvTGljZW5zZWUsXHJcbiAgICBpdGVtVG9MaWNlbnNlVGVtcGxhdGUsXHJcbiAgICBpdGVtVG9PYmplY3QsXHJcbiAgICBpdGVtVG9QYXltZW50TWV0aG9kLFxyXG4gICAgaXRlbVRvUHJvZHVjdCxcclxuICAgIGl0ZW1Ub1Byb2R1Y3RNb2R1bGUsXHJcbiAgICBpdGVtVG9Ub2tlbixcclxuICAgIGl0ZW1Ub1RyYW5zYWN0aW9uLFxyXG5cclxuICAgIC8vIEV4cG9zZSBVdGlsc1xyXG4gICAgQ2FzdHNVdGlscyxcclxuICAgIENoZWNrVXRpbHMsXHJcbiAgICBGaWx0ZXJVdGlscyxcclxuXHJcbiAgICAvLyBFcnJvcnNcclxuICAgIE5saWNFcnJvcixcclxufTtcclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0gTmV0TGljZW5zaW5nO1xyXG5cclxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IE5ldExpY2Vuc2luZztcclxuIl0sIm5hbWVzIjpbIkJBU0lDX0FVVEhFTlRJQ0FUSU9OIiwiQVBJS0VZX0lERU5USUZJQ0FUSU9OIiwiQU5PTllNT1VTX0lERU5USUZJQ0FUSU9OIiwiQUNUSVZFIiwiTlVNQkVSIiwiTkFNRSIsIlZFUlNJT04iLCJERUxFVEVEIiwiQ0FTQ0FERSIsIlBSSUNFIiwiRElTQ09VTlQiLCJDVVJSRU5DWSIsIklOX1VTRSIsIkZJTFRFUiIsIkJBU0VfVVJMIiwiVVNFUk5BTUUiLCJQQVNTV09SRCIsIlNFQ1VSSVRZX01PREUiLCJMaWNlbnNpbmdNb2RlbCIsIlZBTElEIiwiVHJ5QW5kQnV5IiwiUmVudGFsIiwiUkVEX1RIUkVTSE9MRCIsIllFTExPV19USFJFU0hPTEQiLCJTdWJzY3JpcHRpb24iLCJGbG9hdGluZyIsIk11bHRpRmVhdHVyZSIsIlBheVBlclVzZSIsIlByaWNpbmdUYWJsZSIsIlF1b3RhIiwiTm9kZUxvY2tlZCIsIlZlbmRvciIsIlZFTkRPUl9OVU1CRVIiLCJWRU5ET1JfVFlQRSIsIlByb2R1Y3QiLCJFTkRQT0lOVF9QQVRIIiwiUFJPRFVDVF9OVU1CRVIiLCJMSUNFTlNFRV9BVVRPX0NSRUFURSIsIkRFU0NSSVBUSU9OIiwiTElDRU5TSU5HX0lORk8iLCJESVNDT1VOVFMiLCJQUk9QX0xJQ0VOU0VFX1NFQ1JFVF9NT0RFIiwiUFJPUF9WQVRfTU9ERSIsIkRpc2NvdW50IiwiVE9UQUxfUFJJQ0UiLCJBTU9VTlRfRklYIiwiQU1PVU5UX1BFUkNFTlQiLCJMaWNlbnNlZVNlY3JldE1vZGUiLCJESVNBQkxFRCIsIlBSRURFRklORUQiLCJDTElFTlQiLCJQcm9kdWN0TW9kdWxlIiwiUFJPRFVDVF9NT0RVTEVfTlVNQkVSIiwiUFJPRFVDVF9NT0RVTEVfTkFNRSIsIkxJQ0VOU0lOR19NT0RFTCIsIkxpY2Vuc2VUZW1wbGF0ZSIsIkxJQ0VOU0VfVEVNUExBVEVfTlVNQkVSIiwiTElDRU5TRV9UWVBFIiwiQVVUT01BVElDIiwiSElEREVOIiwiSElERV9MSUNFTlNFUyIsIlBST1BfTElDRU5TRUVfU0VDUkVUIiwiTGljZW5zZVR5cGUiLCJGRUFUVVJFIiwiVElNRVZPTFVNRSIsIkZMT0FUSU5HIiwiUVVBTlRJVFkiLCJUb2tlbiIsIkVYUElSQVRJT05fVElNRSIsIlRPS0VOX1RZUEUiLCJBUElfS0VZIiwiVE9LRU5fUFJPUF9FTUFJTCIsIlRPS0VOX1BST1BfVkVORE9STlVNQkVSIiwiVE9LRU5fUFJPUF9TSE9QX1VSTCIsIlR5cGUiLCJERUZBVUxUIiwiU0hPUCIsIkFQSUtFWSIsIlRyYW5zYWN0aW9uIiwiVFJBTlNBQ1RJT05fTlVNQkVSIiwiR1JBTkRfVE9UQUwiLCJTVEFUVVMiLCJTT1VSQ0UiLCJEQVRFX0NSRUFURUQiLCJEQVRFX0NMT1NFRCIsIlZBVCIsIlZBVF9NT0RFIiwiTElDRU5TRV9UUkFOU0FDVElPTl9KT0lOIiwiU09VUkNFX1NIT1BfT05MWSIsIlN0YXR1cyIsIkNBTkNFTExFRCIsIkNMT1NFRCIsIlBFTkRJTkciLCJMaWNlbnNlZSIsIkVORFBPSU5UX1BBVEhfVkFMSURBVEUiLCJFTkRQT0lOVF9QQVRIX1RSQU5TRkVSIiwiTElDRU5TRUVfTlVNQkVSIiwiU09VUkNFX0xJQ0VOU0VFX05VTUJFUiIsIlBST1BfTElDRU5TRUVfTkFNRSIsIlBST1BfTUFSS0VEX0ZPUl9UUkFOU0ZFUiIsIkxpY2Vuc2UiLCJMSUNFTlNFX05VTUJFUiIsIlBheW1lbnRNZXRob2QiLCJVdGlsaXR5IiwiRU5EUE9JTlRfUEFUSF9MSUNFTlNFX1RZUEVTIiwiRU5EUE9JTlRfUEFUSF9MSUNFTlNJTkdfTU9ERUxTIiwiRU5EUE9JTlRfUEFUSF9DT1VOVFJJRVMiLCJMSUNFTlNJTkdfTU9ERUxfUFJPUEVSVElFUyIsIlJPTEVfQVBJS0VZX0xJQ0VOU0VFIiwiUk9MRV9BUElLRVlfQU5BTFlUSUNTIiwiUk9MRV9BUElLRVlfT1BFUkFUSU9OIiwiUk9MRV9BUElLRVlfTUFJTlRFTkFOQ0UiLCJST0xFX0FQSUtFWV9BRE1JTiIsIlZhbGlkYXRpb24iLCJGT1JfT0ZGTElORV9VU0UiLCJXYXJuaW5nTGV2ZWwiLCJHUkVFTiIsIllFTExPVyIsIlJFRCIsIml0ZW0iLCJDb3VudHJ5IiwiaXRlbVRvT2JqZWN0Iiwib2JqZWN0IiwicHJvcGVydHkiLCJsaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInAiLCJuYW1lIiwidmFsdWUiLCJsIiwicHVzaCIsImRpc2NvdW50cyIsImRpc2NvdW50IiwicHJvZHVjdCIsInNldFByb2R1Y3REaXNjb3VudHMiLCJsaWNlbnNlVHJhbnNhY3Rpb25Kb2luIiwidHJhbnNhY3Rpb24iLCJqb2lucyIsInYiLCJqb2luIiwiTGljZW5zZVRyYW5zYWN0aW9uSm9pbiIsInNldExpY2Vuc2UiLCJudW1iZXIiLCJDb25zdGFudHMiLCJzZXRUcmFuc2FjdGlvbiIsInNldExpY2Vuc2VUcmFuc2FjdGlvbkpvaW5zIiwicHJvcGVydGllc01hcCIsIldlYWtNYXAiLCJkZWZpbmVkTWFwIiwiY2FzdHNNYXAiLCJCYXNlRW50aXR5IiwicHJvcGVydGllcyIsImNhc3RzIiwic2V0Iiwic2V0UHJvcGVydGllcyIsIkNoZWNrVXRpbHMiLCJpc1ZhbGlkIiwiVHlwZUVycm9yIiwiY2FzdGVkVmFsdWUiLCJjYXN0IiwiZGVmaW5lIiwiZ2V0Iiwic2V0UHJvcGVydHkiLCJyZW1vdmVQcm9wZXJ0aWVzIiwiaGFzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJrZXlzIiwia2V5IiwiY2FsbCIsImRlZiIsInJlbW92ZURlZmluZSIsInByb3BlcnRpZXNGb3JSZW1vdmUiLCJyZW1vdmVQcm9wZXJ0eSIsIkJvb2xlYW4iLCJoYXNEZWZpbmUiLCJzZWxmIiwiZGVzY3JpcHRvcnMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0UHJvcGVydHkiLCJkZWZpbmVkIiwiZGVmaW5lUHJvcGVydHkiLCJnZXRQcm9wZXJ0aWVzIiwiY3VzdG9tUHJvcGVydGllcyIsImNvZGUiLCJ2YXRQZXJjZW50IiwiaXNFdSIsInZhdCIsImFjdGl2ZSIsInByaWNlIiwiaGlkZGVuIiwicGFyZW50ZmVhdHVyZSIsInRpbWVWb2x1bWUiLCJzdGFydERhdGUiLCJpblVzZSIsImxpY2Vuc2VUeXBlIiwiY3VycmVuY3kiLCJhdXRvbWF0aWMiLCJoaWRlTGljZW5zZXMiLCJncmFjZVBlcmlvZCIsInRpbWVWb2x1bWVQZXJpb2QiLCJtYXhTZXNzaW9ucyIsInF1YW50aXR5IiwibGljZW5zZSIsImxpY2Vuc2VlU2VjcmV0IiwibWFya2VkRm9yVHJhbnNmZXIiLCJwcm9kdWN0TnVtYmVyIiwicGF5cGFsU3ViamVjdCIsImRpc2NvdW50c01hcCIsImRpc2NvdW50c1RvdWNoZWQiLCJ2ZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJsaWNlbnNpbmdJbmZvIiwibGljZW5zZWVBdXRvQ3JlYXRlIiwibGljZW5zZWVTZWNyZXRNb2RlIiwicHJvZHVjdERpc2NvdW50IiwiUHJvZHVjdERpc2NvdW50IiwiYWRkRGlzY291bnQiLCJhc3NpZ24iLCJsZW5ndGgiLCJtYXAiLCJ0b1N0cmluZyIsInRvdGFsUHJpY2UiLCJhbW91bnRGaXgiLCJhbW91bnRQZXJjZW50IiwiZ2V0VG90YWxQcmljZSIsImdldEN1cnJlbmN5IiwiYW1vdW50IiwiZ2V0QW1vdW50Rml4IiwiZ2V0QW1vdW50UGVyY2VudCIsImxpY2Vuc2luZ01vZGVsIiwibWF4Q2hlY2tvdXRWYWxpZGl0eSIsInllbGxvd1RocmVzaG9sZCIsInJlZFRocmVzaG9sZCIsImxpY2Vuc2VUZW1wbGF0ZSIsImV4cGlyYXRpb25UaW1lIiwidmVuZG9yTnVtYmVyIiwidG9rZW5UeXBlIiwibGljZW5zZWVOdW1iZXIiLCJzdWNjZXNzVVJMIiwic3VjY2Vzc1VSTFRpdGxlIiwiY2FuY2VsVVJMIiwiY2FuY2VsVVJMVGl0bGUiLCJzaG9wVVJMIiwicm9sZSIsInNldEFwaUtleVJvbGUiLCJnZXRBcGlLZXlSb2xlIiwiYXBpS2V5Um9sZSIsInN0YXR1cyIsInNvdXJjZSIsImdyYW5kVG90YWwiLCJkYXRlQ3JlYXRlZCIsImRhdGVDbG9zZWQiLCJwYXltZW50TWV0aG9kIiwibGljZW5zZVRyYW5zYWN0aW9uSm9pbnMiLCJObGljRXJyb3IiLCJhcmdzIiwiY29uZmlnIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwiaXNObGljRXJyb3IiLCJpc0F4aW9zRXJyb3IiLCJtZXNzYWdlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwic3RhY2siLCJFcnJvciIsImNyZWF0ZSIsImNvbnRleHQiLCJsaWNlbnNlVGVtcGxhdGVOdW1iZXIiLCJ0cmFuc2FjdGlvbk51bWJlciIsInBhcmFtTm90RW1wdHkiLCJTZXJ2aWNlIiwicG9zdCIsImFzUHJvcGVydGllc01hcCIsIml0ZW1zIiwiZGF0YSIsImZpbHRlciIsInR5cGUiLCJxdWVyeVBhcmFtcyIsIkZpbHRlclV0aWxzIiwiZW5jb2RlIiwicGFnZW51bWJlciIsIml0ZW1zbnVtYmVyIiwidG90YWxwYWdlcyIsInRvdGFsaXRlbXMiLCJ1cGRhdGUiLCJkZWxldGUiLCJmb3JjZUNhc2NhZGUiLCJwcm9kdWN0TW9kdWxlTnVtYmVyIiwicGF0aCIsImxpY2Vuc2VlIiwidmFsaWRhdGUiLCJ2YWxpZGF0aW9uUGFyYW1ldGVycyIsImdldFByb2R1Y3ROdW1iZXIiLCJnZXRMaWNlbnNlZU5hbWUiLCJsaWNlbnNlZU5hbWUiLCJnZXRMaWNlbnNlZVNlY3JldCIsImlzRm9yT2ZmbGluZVVzZSIsImZvck9mZmxpbmVVc2UiLCJnZXREcnlSdW4iLCJkcnlSdW4iLCJwbUluZGV4IiwicGFyYW1ldGVycyIsImdldFBhcmFtZXRlcnMiLCJwcm9kdWN0TW9kdWxlTmFtZSIsInBhcmFtZXRlciIsInR0bCIsInZhbGlkYXRpb25SZXN1bHRzIiwiVmFsaWRhdGlvblJlc3VsdHMiLCJzZXRUdGwiLCJzZXRQcm9kdWN0TW9kdWxlVmFsaWRhdGlvbiIsInRyYW5zZmVyIiwic291cmNlTGljZW5zZWVOdW1iZXIiLCJwcm9kdWN0TW9kdWxlIiwiaHR0cFhIUiIsImF4aW9zSW5zdGFuY2UiLCJheGlvcyIsImluc3RhbnNlIiwidXJsVGVtcGxhdGUiLCJtZXRob2QiLCJ0ZW1wbGF0ZSIsIlN0cmluZyIsInBhcmFtcyIsImluZGV4T2YiLCJ0b0xvd2VyQ2FzZSIsImdldEJhc2VVcmwiLCJ1cmwiLCJlbmNvZGVVUkkiLCJyZXNwb25zZVR5cGUiLCJoZWFkZXJzIiwiQWNjZXB0IiwidHJhbnNmb3JtUmVxdWVzdCIsInRvUXVlcnlTdHJpbmciLCJwa2ciLCJwcm9jZXNzIiwiZ2V0U2VjdXJpdHlNb2RlIiwiZ2V0VXNlcm5hbWUiLCJnZXRQYXNzd29yZCIsImF1dGgiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZ2V0QXBpS2V5IiwiQXV0aG9yaXphdGlvbiIsImdldEF4aW9zSW5zdGFuY2UiLCJ0aGVuIiwiaW5mb3MiLCJnZXRJbmZvIiwiZXJyb3JzIiwiZXJyb3IiLCJjYXRjaCIsImUiLCJpbmZvIiwicGF0dGVybiIsIlJlZ0V4cCIsInRlc3QiLCJwcmVmaXgiLCJxdWVyeSIsImsiLCJEYXRlIiwidG9JU09TdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwidG9rZW4iLCJsaXN0TGljZW5zZVR5cGVzIiwibGlzdExpY2Vuc2luZ01vZGVscyIsImxpc3RDb3VudHJpZXMiLCJ0cmltIiwibiIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwidmFsaWQiLCJ1bmRlZmluZWQiLCJpc0Zpbml0ZSIsInBhcmFtTm90TnVsbCIsInBhcmFtZXRlck5hbWUiLCJGSUxURVJfREVMSU1JVEVSIiwiRklMVEVSX1BBSVJfREVMSU1JVEVSIiwiZGVjb2RlIiwic3BsaXQiLCJ2YWx1ZXNNYXAiLCJkZWZhdWx0c01hcCIsIkNvbnRleHQiLCJ2YWx1ZXMiLCJiYXNlVXJsIiwic2VjdXJpdHlNb2RlIiwic2V0VmFsdWVzIiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsImFwaUtleSIsImNvcGVkVmFsdWUiLCJyZW1vdmVWYWx1ZXMiLCJrZXlzQXIiLCJyZW1vdmVWYWx1ZSIsIm9ubHlHZXR0ZXIiLCJjb250ZW50IiwicGFnZU51bWJlciIsIml0ZW1zTnVtYmVyIiwidG90YWxQYWdlcyIsInRvdGFsSXRlbXMiLCJwYWdpbmF0b3IiLCJnZXRDb250ZW50IiwiZ2V0UGFnZU51bWJlciIsImdldEl0ZW1zTnVtYmVyIiwiZ2V0VG90YWxQYWdlcyIsImdldFRvdGFsSXRlbXMiLCJoYXNOZXh0IiwicGFnaW5hdG9yS2V5cyIsIlByb3h5IiwidGFyZ2V0IiwiVmFsaWRhdGlvblBhcmFtZXRlcnMiLCJwcm9kdWN0TW9kdWxlUGFyYW1ldGVycyIsInZhbGlkYXRvcnMiLCJwcm9kdWN0TW9kdWxlVmFsaWRhdGlvbiIsImdldFZhbGlkYXRvcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiTmV0TGljZW5zaW5nIiwiUGFnZSIsIkxpY2Vuc2VlU2VydmljZSIsIkxpY2Vuc2VTZXJ2aWNlIiwiTGljZW5zZVRlbXBsYXRlU2VydmljZSIsIlBheW1lbnRNZXRob2RTZXJ2aWNlIiwiUHJvZHVjdE1vZHVsZVNlcnZpY2UiLCJQcm9kdWN0U2VydmljZSIsIlRva2VuU2VydmljZSIsIlRyYW5zYWN0aW9uU2VydmljZSIsIlV0aWxpdHlTZXJ2aWNlIiwiaXRlbVRvQ291bnRyeSIsIml0ZW1Ub0xpY2Vuc2UiLCJpdGVtVG9MaWNlbnNlZSIsIml0ZW1Ub0xpY2Vuc2VUZW1wbGF0ZSIsIml0ZW1Ub1BheW1lbnRNZXRob2QiLCJpdGVtVG9Qcm9kdWN0IiwiaXRlbVRvUHJvZHVjdE1vZHVsZSIsIml0ZW1Ub1Rva2VuIiwiaXRlbVRvVHJhbnNhY3Rpb24iLCJDYXN0c1V0aWxzIl0sInNvdXJjZVJvb3QiOiIifQ==