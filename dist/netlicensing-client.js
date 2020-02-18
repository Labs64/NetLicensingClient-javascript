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
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
  }
};
exports.default = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
exports.default = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(24);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
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
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
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
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
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
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
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
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
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
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
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

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
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
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
exports.default = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(17);

var assertThisInitialized = __webpack_require__(33);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(20);

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(18));

var _typeof2 = _interopRequireDefault(__webpack_require__(17));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _CastsUtils = _interopRequireDefault(__webpack_require__(36));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var BaseEntity =
/*#__PURE__*/
function () {
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
      return _objectSpread({}, customProperties, {}, properties);
    }
  }]);
  return BaseEntity;
}();

exports.default = BaseEntity;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

exports.default = _default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(17));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _axios = _interopRequireDefault(__webpack_require__(56));

var _btoa = _interopRequireDefault(__webpack_require__(73));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _NlicError = _interopRequireDefault(__webpack_require__(32));

var _package = _interopRequireDefault(__webpack_require__(82));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var httpXHR = {};
var axiosInstance = null;

var Service =
/*#__PURE__*/
function () {
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
          Accept: 'application/json'
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

      if (!(typeof process === "undefined" ? "undefined" : (0, _typeof2.default)(process)) !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
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
        httpXHR = response;
        return response;
      }).catch(function (e) {
        httpXHR = e;

        if (e.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          var error = new _NlicError.default(e);
          error.config = e.config;
          error.code = e.code;
          error.request = e.request;
          error.response = e.response; // The request was made and the server responded with a status code
          // that falls out of the range of 2xx

          var data = e.response.data;

          if (data) {
            var info = Service.getInfo(e.response, [])[0] || {};
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

exports.default = Service;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15));

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
exports.default = _default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(85);

var iterableToArrayLimit = __webpack_require__(86);

var nonIterableRest = __webpack_require__(87);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

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

module.exports = _asyncToGenerator;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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
var License =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2.default)(License, _BaseEntity);

  function License(properties) {
    (0, _classCallCheck2.default)(this, License);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(License).call(this, {
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
    }));
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

exports.default = License;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var LicenseTransactionJoin =
/*#__PURE__*/
function () {
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

exports.default = LicenseTransactionJoin;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(17));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(18));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Validation result map
 * @type {WeakMap<Object, any>}
 */
var vr = new WeakMap();

var ValidationResults =
/*#__PURE__*/
function () {
  function ValidationResults() {
    (0, _classCallCheck2.default)(this, ValidationResults);
    vr.set(this, {
      validators: {}
    });
  }

  (0, _createClass2.default)(ValidationResults, [{
    key: "getValidators",
    value: function getValidators() {
      return _objectSpread({}, vr.get(this).validators);
    }
  }, {
    key: "setProductModuleValidation",
    value: function setProductModuleValidation(productModuleNumber, productModuleValidation) {
      if (!_CheckUtils.default.isValid(productModuleNumber) || (0, _typeof2.default)(productModuleNumber) === 'object') {
        throw new TypeError("Bad productModuleNumber:".concat(productModuleNumber));
      }

      vr.get(this).validators[productModuleNumber] = productModuleValidation;
      return this;
    }
  }, {
    key: "getProductModuleValidation",
    value: function getProductModuleValidation(productModuleNumber) {
      if (!_CheckUtils.default.isValid(productModuleNumber) || (0, _typeof2.default)(productModuleNumber) === 'object') {
        throw new TypeError("Bad productModuleNumber:".concat(productModuleNumber));
      }

      return vr.get(this).validators[productModuleNumber];
    }
  }, {
    key: "setTtl",
    value: function setTtl(ttl) {
      if (!_CheckUtils.default.isValid(ttl) || (0, _typeof2.default)(ttl) === 'object') {
        throw new TypeError("Bad ttl:".concat(ttl));
      }

      vr.get(this).ttl = new Date(String(ttl));
      return this;
    }
  }, {
    key: "getTtl",
    value: function getTtl() {
      return vr.get(this).ttl ? new Date(vr.get(this).ttl) : undefined;
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

exports.default = ValidationResults;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(5);
var normalizeHeaderName = __webpack_require__(62);

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
    adapter = __webpack_require__(28);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(28);
  }
  return adapter;
}

var defaults = {
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
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
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

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var settle = __webpack_require__(63);
var buildURL = __webpack_require__(25);
var buildFullPath = __webpack_require__(65);
var parseHeaders = __webpack_require__(68);
var isURLSameOrigin = __webpack_require__(69);
var createError = __webpack_require__(29);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
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

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

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
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(70);

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
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(64);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

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

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(79));

var NlicError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2.default)(NlicError, _Error);

  function NlicError() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, NlicError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NlicError)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.config = {};
    _this.response = {};
    _this.request = {};
    _this.code = '';
    _this.isNlicError = true;
    _this.isAxiosError = true;
    return _this;
  }

  return NlicError;
}((0, _wrapNativeSuper2.default)(Error));

exports.default = NlicError;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Licensee = _interopRequireDefault(__webpack_require__(35));

var _default = function _default(item) {
  return new _Licensee.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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
var Licensee =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2.default)(Licensee, _BaseEntity);

  function Licensee(properties) {
    (0, _classCallCheck2.default)(this, Licensee);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Licensee).call(this, {
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
    }));
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

exports.default = Licensee;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
      return parseInt(value, 10);

    case 'float':
    case 'double':
      return parseFloat(value);

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

exports.default = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _License = _interopRequireDefault(__webpack_require__(19));

var _default = function _default(item) {
  return new _License.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _LicenseTemplate = _interopRequireDefault(__webpack_require__(39));

var _default = function _default(item) {
  return new _LicenseTemplate.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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
var LicenseTemplate =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2.default)(LicenseTemplate, _BaseEntity);

  function LicenseTemplate(properties) {
    (0, _classCallCheck2.default)(this, LicenseTemplate);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LicenseTemplate).call(this, {
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
    }));
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

exports.default = LicenseTemplate;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _PaymentMethod = _interopRequireDefault(__webpack_require__(41));

var _default = function _default(item) {
  return new _PaymentMethod.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */
var PaymentMethod =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2.default)(PaymentMethod, _BaseEntity);

  function PaymentMethod(properties) {
    (0, _classCallCheck2.default)(this, PaymentMethod);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PaymentMethod).call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        'paypal.subject': 'string'
      }
    }));
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

exports.default = PaymentMethod;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _ProductModule = _interopRequireDefault(__webpack_require__(43));

var _default = function _default(item) {
  return new _ProductModule.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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
var ProductModule =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2.default)(ProductModule, _BaseEntity);

  function ProductModule(properties) {
    (0, _classCallCheck2.default)(this, ProductModule);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProductModule).call(this, {
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
    }));
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

exports.default = ProductModule;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Product = _interopRequireDefault(__webpack_require__(45));

var _default = function _default(item) {
  var object = (0, _itemToObject.default)(item);
  var discounts = object.discount;
  delete object.discount;
  var product = new _Product.default(object);
  product.setProductDiscounts(discounts);
  return product;
};

exports.default = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(33));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _get2 = _interopRequireDefault(__webpack_require__(93));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

var _ProductDiscount = _interopRequireDefault(__webpack_require__(46));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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

var Product =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2.default)(Product, _BaseEntity);

  function Product(properties) {
    var _this;

    (0, _classCallCheck2.default)(this, Product);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Product).call(this, {
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
    }));
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

exports.default = Product;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var ProductDiscount =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2.default)(ProductDiscount, _BaseEntity);

  function ProductDiscount(properties) {
    (0, _classCallCheck2.default)(this, ProductDiscount);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProductDiscount).call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        totalPrice: 'float',
        currency: 'string',
        amountFix: 'float',
        amountPercent: 'int'
      }
    }));
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

exports.default = ProductDiscount;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Token = _interopRequireDefault(__webpack_require__(48));

var _default = function _default(item) {
  return new _Token.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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
var Token =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2.default)(Token, _BaseEntity);

  function Token(properties) {
    (0, _classCallCheck2.default)(this, Token);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Token).call(this, {
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
    }));
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

exports.default = Token;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Transaction = _interopRequireDefault(__webpack_require__(50));

var _License = _interopRequireDefault(__webpack_require__(19));

var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(21));

var _Constants = _interopRequireDefault(__webpack_require__(3));

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

exports.default = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(21));

var _License = _interopRequireDefault(__webpack_require__(19));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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
var Transaction =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2.default)(Transaction, _BaseEntity);

  function Transaction(properties) {
    (0, _classCallCheck2.default)(this, Transaction);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Transaction).call(this, {
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
    }));
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

exports.default = Transaction;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Country = _interopRequireDefault(__webpack_require__(52));

var _default = function _default(item) {
  return new _Country.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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
var Country =
/*#__PURE__*/
function (_BaseEntity) {
  (0, _inherits2.default)(Country, _BaseEntity);

  function Country(properties) {
    (0, _classCallCheck2.default)(this, Country);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Country).call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        code: 'string',
        name: 'string',
        vatPercent: 'int',
        isEu: 'boolean'
      }
    }));
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

exports.default = Country;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Context = _interopRequireDefault(__webpack_require__(54));

var _Page = _interopRequireDefault(__webpack_require__(11));

var _ValidationParameters = _interopRequireDefault(__webpack_require__(55));

var _ValidationResults = _interopRequireDefault(__webpack_require__(22));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _LicenseeService = _interopRequireDefault(__webpack_require__(83));

var _LicenseService = _interopRequireDefault(__webpack_require__(88));

var _LicenseTemplateService = _interopRequireDefault(__webpack_require__(89));

var _PaymentMethodService = _interopRequireDefault(__webpack_require__(90));

var _ProductModuleService = _interopRequireDefault(__webpack_require__(91));

var _ProductService = _interopRequireDefault(__webpack_require__(92));

var _TokenService = _interopRequireDefault(__webpack_require__(95));

var _TransactionService = _interopRequireDefault(__webpack_require__(96));

var _UtilityService = _interopRequireDefault(__webpack_require__(97));

var _BaseEntity = _interopRequireDefault(__webpack_require__(10));

var _Country = _interopRequireDefault(__webpack_require__(52));

var _License = _interopRequireDefault(__webpack_require__(19));

var _Licensee = _interopRequireDefault(__webpack_require__(35));

var _LicenseTemplate = _interopRequireDefault(__webpack_require__(39));

var _PaymentMethod = _interopRequireDefault(__webpack_require__(41));

var _Product = _interopRequireDefault(__webpack_require__(45));

var _ProductDiscount = _interopRequireDefault(__webpack_require__(46));

var _ProductModule = _interopRequireDefault(__webpack_require__(43));

var _Token = _interopRequireDefault(__webpack_require__(48));

var _Transaction = _interopRequireDefault(__webpack_require__(50));

var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(21));

var _itemToCountry = _interopRequireDefault(__webpack_require__(51));

var _itemToLicense = _interopRequireDefault(__webpack_require__(37));

var _itemToLicensee = _interopRequireDefault(__webpack_require__(34));

var _itemToLicenseTemplate = _interopRequireDefault(__webpack_require__(38));

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _itemToPaymentMethod = _interopRequireDefault(__webpack_require__(40));

var _itemToProduct = _interopRequireDefault(__webpack_require__(44));

var _itemToProductModule = _interopRequireDefault(__webpack_require__(42));

var _itemToToken = _interopRequireDefault(__webpack_require__(47));

var _itemToTransaction = _interopRequireDefault(__webpack_require__(49));

var _CastsUtils = _interopRequireDefault(__webpack_require__(36));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _NlicError = _interopRequireDefault(__webpack_require__(32));

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
};
module.exports = NetLicensing; // Allow use of default import syntax in TypeScript

module.exports.default = NetLicensing;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(17));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(18));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var Context =
/*#__PURE__*/
function () {
  function Context(values) {
    (0, _classCallCheck2.default)(this, Context);
    defaultsMap.set(this, {
      baseUrl: 'https://go.netlicensing.io/core/v2/rest',
      securityMode: _Constants.default.BASIC_AUTHENTICATION
    });
    valuesMap.set(this, {});
    definedMap.set(this, {});
    this.setValues(_objectSpread({}, defaultsMap.get(this), {}, values));
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

exports.default = Context;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(18));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * Validation parameters map
 *
 * @type {WeakMap<Object, any>}
 */
var vpMap = new WeakMap();

var ValidationParameters =
/*#__PURE__*/
function () {
  function ValidationParameters() {
    (0, _classCallCheck2.default)(this, ValidationParameters);
    vpMap.set(this, {
      parameters: {}
    });
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
      vpMap.get(this).productNumber = productNumber;
      return this;
    }
    /**
     * Get the target product
     * @returns {*}
     */

  }, {
    key: "getProductNumber",
    value: function getProductNumber() {
      return vpMap.get(this).productNumber;
    }
    /**
     * Sets the name for the new licensee
     *
     * optional human-readable licensee name in case licensee will be auto-created. This parameter must not
     * be the name, but can be used to store any other useful string information with new licensees, up to
     * 1000 characters.
     * @param licenseeName
     * @returns {NetLicensing.ValidationParameters}
     */

  }, {
    key: "setLicenseeName",
    value: function setLicenseeName(licenseeName) {
      vpMap.get(this).licenseeName = licenseeName;
      return this;
    }
    /**
     * Get the licensee name
     * @returns {*}
     */

  }, {
    key: "getLicenseeName",
    value: function getLicenseeName() {
      return vpMap.get(this).licenseeName;
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
      vpMap.get(this).licenseeSecret = licenseeSecret;
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
      return vpMap.get(this).licenseeSecret;
    }
    /**
     * Get validation parameters
     * @returns {*}
     */

  }, {
    key: "getParameters",
    value: function getParameters() {
      return _objectSpread({}, vpMap.get(this).parameters);
    }
  }, {
    key: "getProductModuleValidationParameters",
    value: function getProductModuleValidationParameters(productModuleNumber) {
      return _objectSpread({}, vpMap.get(this).parameters[productModuleNumber]);
    }
  }, {
    key: "setProductModuleValidationParameters",
    value: function setProductModuleValidationParameters(productModuleNumber, productModuleParameters) {
      var _vpMap$get = vpMap.get(this),
          parameters = _vpMap$get.parameters;

      if (parameters[productModuleNumber] === undefined || !Object.keys(parameters[productModuleNumber]).length) {
        parameters[productModuleNumber] = {};
      }

      parameters[productModuleNumber] = Object.assign(parameters[productModuleNumber], productModuleParameters);
      return this;
    }
  }]);
  return ValidationParameters;
}();

exports.default = ValidationParameters;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var bind = __webpack_require__(24);
var Axios = __webpack_require__(58);
var mergeConfig = __webpack_require__(30);
var defaults = __webpack_require__(27);

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

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(31);
axios.CancelToken = __webpack_require__(71);
axios.isCancel = __webpack_require__(26);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(72);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var buildURL = __webpack_require__(25);
var InterceptorManager = __webpack_require__(59);
var dispatchRequest = __webpack_require__(60);
var mergeConfig = __webpack_require__(30);

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
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
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

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
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
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

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
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var transformData = __webpack_require__(61);
var isCancel = __webpack_require__(26);
var defaults = __webpack_require__(27);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
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
  config.data = transformData(
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
    response.data = transformData(
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
        reason.response.data = transformData(
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(29);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

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

  error.toJSON = function() {
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
  };
  return error;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(66);
var combineURLs = __webpack_require__(67);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

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
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(31);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {(function () {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(74).Buffer))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(76)
var ieee754 = __webpack_require__(77)
var isArray = __webpack_require__(78)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(75)))

/***/ }),
/* 75 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 77 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 78 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(6);

var setPrototypeOf = __webpack_require__(20);

var isNativeFunction = __webpack_require__(80);

var construct = __webpack_require__(81);

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
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(20);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 82 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"netlicensing-client\",\"version\":\"1.2.19\",\"description\":\"JavaScript Wrapper for Labs64 NetLicensing RESTful API\",\"keywords\":[\"labs64\",\"netlicensing\",\"licensing\",\"licensing-as-a-service\",\"license\",\"license-management\",\"software-license\",\"client\",\"restful\",\"restful-api\",\"javascript\",\"wrapper\",\"api\",\"client\"],\"author\":\"Labs64 GmbH\",\"homepage\":\"https://netlicensing.io/\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/Labs64/NetLicensingClient-javascript\"},\"bugs\":{\"url\":\"https://github.com/Labs64/NetLicensingClient-javascript/issues\"},\"license\":\"Apache-2.0\",\"main\":\"dist/netlicensing-client.js\",\"contributors\":[{\"name\":\"Ready Brown\",\"email\":\"ready.brown@hotmail.de\",\"url\":\"https://github.com/r-brown\"},{\"name\":\"Viacheslav Rudkovskiy\",\"email\":\"viachaslau.rudkovski@labs64.de\",\"url\":\"https://github.com/v-rudkovskiy\"},{\"name\":\"Andrei Yushkevich\",\"email\":\"yushkevich@me.com\",\"url\":\"https://github.com/yushkevich\"}],\"scripts\":{\"build\":\"node build/build.js\",\"release\":\"npm run build && npm run test\",\"dev\":\"webpack --progress --colors --watch --config build/webpack.dev.conf.js\",\"test\":\"karma start test/karma.conf.js --single-run\",\"test-for-travis\":\"karma start test/karma.conf.js --single-run --browsers Firefox\",\"lint\":\"eslint --ext .js,.vue src test\"},\"dependencies\":{\"axios\":\"^0.19.2\",\"btoa\":\"^1.2.1\",\"es6-promise\":\"^4.2.8\"},\"devDependencies\":{\"@babel/core\":\"^7.8.4\",\"@babel/plugin-proposal-class-properties\":\"^7.8.3\",\"@babel/plugin-proposal-decorators\":\"^7.8.3\",\"@babel/plugin-proposal-export-namespace-from\":\"^7.8.3\",\"@babel/plugin-proposal-function-sent\":\"^7.8.3\",\"@babel/plugin-proposal-json-strings\":\"^7.8.3\",\"@babel/plugin-proposal-numeric-separator\":\"^7.8.3\",\"@babel/plugin-proposal-throw-expressions\":\"^7.8.3\",\"@babel/plugin-syntax-dynamic-import\":\"^7.8.3\",\"@babel/plugin-syntax-import-meta\":\"^7.8.3\",\"@babel/plugin-transform-modules-commonjs\":\"^7.8.3\",\"@babel/plugin-transform-runtime\":\"^7.8.3\",\"@babel/preset-env\":\"^7.8.4\",\"@babel/runtime\":\"^7.8.4\",\"axios-mock-adapter\":\"^1.17.0\",\"babel-eslint\":\"^10.0.3\",\"babel-loader\":\"^8.0.6\",\"chalk\":\"^2.4.2\",\"eslint\":\"^5.16.0\",\"eslint-config-airbnb-base\":\"^14.0.0\",\"eslint-friendly-formatter\":\"^4.0.1\",\"eslint-import-resolver-webpack\":\"^0.11.1\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-import\":\"^2.20.1\",\"eslint-plugin-jasmine\":\"^2.10.1\",\"faker\":\"^4.1.0\",\"is-docker\":\"^2.0.0\",\"jasmine\":\"^3.5.0\",\"jasmine-core\":\"^3.5.0\",\"karma\":\"^3.1.4\",\"karma-babel-preprocessor\":\"^8.0.1\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^1.3.0\",\"karma-jasmine\":\"^2.0.1\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-spec-reporter\":\"0.0.32\",\"karma-webpack\":\"^4.0.2\",\"lodash\":\"^4.17.15\",\"ora\":\"^3.4.0\",\"query-string\":\"^6.11.0\",\"rimraf\":\"^3.0.2\",\"uglifyjs-webpack-plugin\":\"^1.3.0\",\"webpack\":\"^4.41.6\",\"webpack-cli\":\"^3.3.11\",\"webpack-merge\":\"^4.2.2\"},\"engines\":{\"node\":\">= 8.0.0\",\"npm\":\">= 6.0.0\"},\"browserslist\":[\"> 1%\",\"last 2 versions\",\"not ie <= 10\"]}");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _ValidationResults = _interopRequireDefault(__webpack_require__(22));

var _itemToLicensee = _interopRequireDefault(__webpack_require__(34));

var _Page = _interopRequireDefault(__webpack_require__(11));

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref, _ref$data$items$item, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(productNumber, _Constants.default.Product.PRODUCT_NUMBER);

              licensee.setProperty(_Constants.default.Product.PRODUCT_NUMBER, productNumber);
              _context.next = 4;
              return _Service.default.post(context, _Constants.default.Licensee.ENDPOINT_PATH, licensee.asPropertiesMap());

            case 4:
              _ref = _context.sent;
              _ref$data$items$item = (0, _slicedToArray2.default)(_ref.data.items.item, 1);
              item = _ref$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var _ref2, _ref2$data$items$item, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _ref2 = _context2.sent;
              _ref2$data$items$item = (0, _slicedToArray2.default)(_ref2.data.items.item, 1);
              item = _ref2$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var queryParams, _ref3, data;

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
              _ref3 = _context3.sent;
              data = _ref3.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var _ref4, _ref4$data$items$item, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number), licensee.asPropertiesMap());

            case 3:
              _ref4 = _context4.sent;
              _ref4$data$items$item = (0, _slicedToArray2.default)(_ref4.data.items.item, 1);
              item = _ref4$data$items$item[0];
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
   * Validates active licenses of the licensee. See NetLicensingAPI for details:
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5() {
      var queryParams, pmIndex, parameters, has, _ref5, _ref5$data, items, ttl, validationResults;

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
              _context5.next = 11;
              return _Service.default.post(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number, "/").concat(_Constants.default.Licensee.ENDPOINT_PATH_VALIDATE), queryParams);

            case 11:
              _ref5 = _context5.sent;
              _ref5$data = _ref5.data;
              items = _ref5$data.items.item;
              ttl = _ref5$data.ttl;
              validationResults = new _ValidationResults.default();
              validationResults.setTtl(ttl);
              items.forEach(function (v) {
                var item = (0, _itemToObject.default)(v);
                validationResults.setProductModuleValidation(item[_Constants.default.ProductModule.PRODUCT_MODULE_NUMBER], item);
              });
              return _context5.abrupt("return", validationResults);

            case 19:
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
exports.default = _default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

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
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

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
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
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
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
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

  function AsyncIterator(generator) {
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
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
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
        return new Promise(function(resolve, reject) {
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
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
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

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

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
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 85 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToLicense = _interopRequireDefault(__webpack_require__(37));

var _Page = _interopRequireDefault(__webpack_require__(11));

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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref, _ref$data$items$item, item;

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
              _ref = _context.sent;
              _ref$data$items$item = (0, _slicedToArray2.default)(_ref.data.items.item, 1);
              item = _ref$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var _ref2, _ref2$data$items$item, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.License.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _ref2 = _context2.sent;
              _ref2$data$items$item = (0, _slicedToArray2.default)(_ref2.data.items.item, 1);
              item = _ref2$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var queryParams, _ref3, data;

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
              _ref3 = _context3.sent;
              data = _ref3.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var _ref4, _ref4$data$items$item, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              if (transactionNumber) license.setProperty(_Constants.default.Transaction.TRANSACTION_NUMBER, transactionNumber);
              _context4.next = 4;
              return _Service.default.post(context, "".concat(_Constants.default.License.ENDPOINT_PATH, "/").concat(number), license.asPropertiesMap());

            case 4:
              _ref4 = _context4.sent;
              _ref4$data$items$item = (0, _slicedToArray2.default)(_ref4.data.items.item, 1);
              item = _ref4$data$items$item[0];
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
exports.default = _default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToLicenseTemplate = _interopRequireDefault(__webpack_require__(38));

var _Page = _interopRequireDefault(__webpack_require__(11));

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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref, _ref$data$items$item, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(productModuleNumber, _Constants.default.ProductModule.PRODUCT_MODULE_NUMBER);

              licenseTemplate.setProperty(_Constants.default.ProductModule.PRODUCT_MODULE_NUMBER, productModuleNumber);
              _context.next = 4;
              return _Service.default.post(context, _Constants.default.LicenseTemplate.ENDPOINT_PATH, licenseTemplate.asPropertiesMap());

            case 4:
              _ref = _context.sent;
              _ref$data$items$item = (0, _slicedToArray2.default)(_ref.data.items.item, 1);
              item = _ref$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var _ref2, _ref2$data$items$item, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.LicenseTemplate.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _ref2 = _context2.sent;
              _ref2$data$items$item = (0, _slicedToArray2.default)(_ref2.data.items.item, 1);
              item = _ref2$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var queryParams, _ref3, data;

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
              _ref3 = _context3.sent;
              data = _ref3.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var path, _ref4, _ref4$data$items$item, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              path = "".concat(_Constants.default.LicenseTemplate.ENDPOINT_PATH, "/").concat(number);
              _context4.next = 4;
              return _Service.default.post(context, path, licenseTemplate.asPropertiesMap());

            case 4:
              _ref4 = _context4.sent;
              _ref4$data$items$item = (0, _slicedToArray2.default)(_ref4.data.items.item, 1);
              item = _ref4$data$items$item[0];
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
exports.default = _default;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToPaymentMethod = _interopRequireDefault(__webpack_require__(40));

var _Page = _interopRequireDefault(__webpack_require__(11));

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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref, _ref$data$items$item, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.PaymentMethod.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _ref = _context.sent;
              _ref$data$items$item = (0, _slicedToArray2.default)(_ref.data.items.item, 1);
              item = _ref$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var queryParams, _ref2, data;

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
              _ref2 = _context2.sent;
              data = _ref2.data;
              return _context2.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var path, _ref3, _ref3$data$items$item, item;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              path = "".concat(_Constants.default.PaymentMethod.ENDPOINT_PATH, "/").concat(number);
              _context3.next = 4;
              return _Service.default.post(context, path, paymentMethod.asPropertiesMap());

            case 4:
              _ref3 = _context3.sent;
              _ref3$data$items$item = (0, _slicedToArray2.default)(_ref3.data.items.item, 1);
              item = _ref3$data$items$item[0];
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
exports.default = _default;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToProductModule = _interopRequireDefault(__webpack_require__(42));

var _Page = _interopRequireDefault(__webpack_require__(11));

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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref, _ref$data$items$item, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(productNumber, _Constants.default.Product.PRODUCT_NUMBER);

              productModule.setProperty(_Constants.default.Product.PRODUCT_NUMBER, productNumber);
              _context.next = 4;
              return _Service.default.post(context, _Constants.default.ProductModule.ENDPOINT_PATH, productModule.asPropertiesMap());

            case 4:
              _ref = _context.sent;
              _ref$data$items$item = (0, _slicedToArray2.default)(_ref.data.items.item, 1);
              item = _ref$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var _ref2, _ref2$data$items$item, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.ProductModule.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _ref2 = _context2.sent;
              _ref2$data$items$item = (0, _slicedToArray2.default)(_ref2.data.items.item, 1);
              item = _ref2$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var queryParams, _ref3, data;

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
              _ref3 = _context3.sent;
              data = _ref3.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var _ref4, _ref4$data$items$item, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.ProductModule.ENDPOINT_PATH, "/").concat(number), productModule.asPropertiesMap());

            case 3:
              _ref4 = _context4.sent;
              _ref4$data$items$item = (0, _slicedToArray2.default)(_ref4.data.items.item, 1);
              item = _ref4$data$items$item[0];
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
exports.default = _default;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToProduct = _interopRequireDefault(__webpack_require__(44));

var _Page = _interopRequireDefault(__webpack_require__(11));

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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref, _ref$data$items$item, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.post(context, _Constants.default.Product.ENDPOINT_PATH, product.asPropertiesMap());

            case 2:
              _ref = _context.sent;
              _ref$data$items$item = (0, _slicedToArray2.default)(_ref.data.items.item, 1);
              item = _ref$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var _ref2, _ref2$data$items$item, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Product.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _ref2 = _context2.sent;
              _ref2$data$items$item = (0, _slicedToArray2.default)(_ref2.data.items.item, 1);
              item = _ref2$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var queryParams, _ref3, data;

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
              _ref3 = _context3.sent;
              data = _ref3.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var _ref4, _ref4$data$items$item, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.Product.ENDPOINT_PATH, "/").concat(number), product.asPropertiesMap());

            case 3:
              _ref4 = _context4.sent;
              _ref4$data$items$item = (0, _slicedToArray2.default)(_ref4.data.items.item, 1);
              item = _ref4$data$items$item[0];
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
exports.default = _default;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(94);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(6);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToToken = _interopRequireDefault(__webpack_require__(47));

var _Page = _interopRequireDefault(__webpack_require__(11));

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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref, _ref$data$items$item, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.post(context, _Constants.default.Token.ENDPOINT_PATH, token.asPropertiesMap());

            case 2:
              _ref = _context.sent;
              _ref$data$items$item = (0, _slicedToArray2.default)(_ref.data.items.item, 1);
              item = _ref$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var _ref2, _ref2$data$items$item, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Token.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _ref2 = _context2.sent;
              _ref2$data$items$item = (0, _slicedToArray2.default)(_ref2.data.items.item, 1);
              item = _ref2$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var queryParams, _ref3, data;

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
              _ref3 = _context3.sent;
              data = _ref3.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
exports.default = _default;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToTransaction = _interopRequireDefault(__webpack_require__(49));

var _Page = _interopRequireDefault(__webpack_require__(11));

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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref, _ref$data$items$item, item;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.post(context, _Constants.default.Transaction.ENDPOINT_PATH, transaction.asPropertiesMap());

            case 2:
              _ref = _context.sent;
              _ref$data$items$item = (0, _slicedToArray2.default)(_ref.data.items.item, 1);
              item = _ref$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var _ref2, _ref2$data$items$item, item;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Transaction.ENDPOINT_PATH, "/").concat(number));

            case 3:
              _ref2 = _context2.sent;
              _ref2$data$items$item = (0, _slicedToArray2.default)(_ref2.data.items.item, 1);
              item = _ref2$data$items$item[0];
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var queryParams, _ref3, data;

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
              _ref3 = _context3.sent;
              data = _ref3.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var _ref4, _ref4$data$items$item, item;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);

              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.Transaction.ENDPOINT_PATH, "/").concat(number), transaction.asPropertiesMap());

            case 3:
              _ref4 = _context4.sent;
              _ref4$data$items$item = (0, _slicedToArray2.default)(_ref4.data.items.item, 1);
              item = _ref4$data$items$item[0];
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
exports.default = _default;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Page = _interopRequireDefault(__webpack_require__(11));

var _itemToCountry = _interopRequireDefault(__webpack_require__(51));

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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref, data;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.get(context, "".concat(_Constants.default.Utility.ENDPOINT_PATH, "/").concat(_Constants.default.Utility.ENDPOINT_PATH_LICENSE_TYPES));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              return _context.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var _ref2, data;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _Service.default.get(context, "".concat(_Constants.default.Utility.ENDPOINT_PATH, "/").concat(_Constants.default.Utility.ENDPOINT_PATH_LICENSING_MODELS));

            case 2:
              _ref2 = _context2.sent;
              data = _ref2.data;
              return _context2.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
    return (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var queryParams, _ref3, data;

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
              _ref3 = _context3.sent;
              data = _ref3.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.map(function (v) {
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
exports.default = _default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=netlicensing-client.js.map