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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
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
 * @link      http://netlicensing.io
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
 * @link      http://netlicensing.io
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


var bind = __webpack_require__(23);
var isBuffer = __webpack_require__(57);

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
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
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

var assertThisInitialized = __webpack_require__(32);

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

var setPrototypeOf = __webpack_require__(19);

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

var _typeof2 = _interopRequireDefault(__webpack_require__(17));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _CastsUtils = _interopRequireDefault(__webpack_require__(35));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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
      return Object.assign({}, propertiesMap.get(this));
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
      return Object.assign({}, customProperties, properties);
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

var _axios = _interopRequireDefault(__webpack_require__(55));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _NlicError = _interopRequireDefault(__webpack_require__(31));

var _package = _interopRequireDefault(__webpack_require__(75));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
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
        headers: {},
        transformRequest: [function (data, headers) {
          if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            return Service.toQueryString(data);
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
          request.headers.Authorization = "Basic ".concat(btoa("apiKey:".concat(context.getApiKey())));
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
            var info = Service.getInfo(e.response, [])[0];
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

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
        query.push("".concat(encodeURIComponent(key)).concat(_this.FILTER_PAIR_DELIMITER).concat(encodeURIComponent(filter[key])));
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

module.exports = __webpack_require__(77);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(78);

var iterableToArrayLimit = __webpack_require__(79);

var nonIterableRest = __webpack_require__(80);

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

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 18 */
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
 * @link      http://netlicensing.io
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
/* 19 */
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
/* 20 */
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
 * @link      http://netlicensing.io
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(17));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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
      return Object.assign({}, vr.get(this).validators);
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 26 */
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
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(27);
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(27);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var settle = __webpack_require__(63);
var buildURL = __webpack_require__(24);
var parseHeaders = __webpack_require__(65);
var isURLSameOrigin = __webpack_require__(66);
var createError = __webpack_require__(28);

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

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

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
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(67);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
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
    if (config.withCredentials) {
      request.withCredentials = true;
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
/* 28 */
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
/* 29 */
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

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
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

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 30 */
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
/* 31 */
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

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(72));

/**
 * @deprecated
 */
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
/* 32 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Licensee = _interopRequireDefault(__webpack_require__(34));

var _default = function _default(item) {
  return new _Licensee.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 34 */
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
 * @link      http://netlicensing.io
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _License = _interopRequireDefault(__webpack_require__(18));

var _default = function _default(item) {
  return new _License.default((0, _itemToObject.default)(item));
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

var _LicenseTemplate = _interopRequireDefault(__webpack_require__(38));

var _default = function _default(item) {
  return new _LicenseTemplate.default((0, _itemToObject.default)(item));
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

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _PaymentMethod = _interopRequireDefault(__webpack_require__(40));

var _default = function _default(item) {
  return new _PaymentMethod.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 40 */
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
 * @link      http://netlicensing.io
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _ProductModule = _interopRequireDefault(__webpack_require__(42));

var _default = function _default(item) {
  return new _ProductModule.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 42 */
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
 * @link      http://netlicensing.io
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Product = _interopRequireDefault(__webpack_require__(44));

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
/* 44 */
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(32));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _get2 = _interopRequireDefault(__webpack_require__(86));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

var _ProductDiscount = _interopRequireDefault(__webpack_require__(45));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
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

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _BaseEntity2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Token = _interopRequireDefault(__webpack_require__(47));

var _default = function _default(item) {
  return new _Token.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 47 */
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
 * @link      http://netlicensing.io
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Transaction = _interopRequireDefault(__webpack_require__(49));

var _License = _interopRequireDefault(__webpack_require__(18));

var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(20));

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
/* 49 */
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

var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(20));

var _License = _interopRequireDefault(__webpack_require__(18));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Country = _interopRequireDefault(__webpack_require__(51));

var _default = function _default(item) {
  return new _Country.default((0, _itemToObject.default)(item));
};

exports.default = _default;

/***/ }),
/* 51 */
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
 * @link      http://netlicensing.io
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Context = _interopRequireDefault(__webpack_require__(53));

var _Page = _interopRequireDefault(__webpack_require__(11));

var _ValidationParameters = _interopRequireDefault(__webpack_require__(54));

var _ValidationResults = _interopRequireDefault(__webpack_require__(21));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _LicenseeService = _interopRequireDefault(__webpack_require__(76));

var _LicenseService = _interopRequireDefault(__webpack_require__(81));

var _LicenseTemplateService = _interopRequireDefault(__webpack_require__(82));

var _PaymentMethodService = _interopRequireDefault(__webpack_require__(83));

var _ProductModuleService = _interopRequireDefault(__webpack_require__(84));

var _ProductService = _interopRequireDefault(__webpack_require__(85));

var _TokenService = _interopRequireDefault(__webpack_require__(88));

var _TransactionService = _interopRequireDefault(__webpack_require__(89));

var _UtilityService = _interopRequireDefault(__webpack_require__(90));

var _BaseEntity = _interopRequireDefault(__webpack_require__(10));

var _Country = _interopRequireDefault(__webpack_require__(51));

var _License = _interopRequireDefault(__webpack_require__(18));

var _Licensee = _interopRequireDefault(__webpack_require__(34));

var _LicenseTemplate = _interopRequireDefault(__webpack_require__(38));

var _PaymentMethod = _interopRequireDefault(__webpack_require__(40));

var _Product = _interopRequireDefault(__webpack_require__(44));

var _ProductDiscount = _interopRequireDefault(__webpack_require__(45));

var _ProductModule = _interopRequireDefault(__webpack_require__(42));

var _Token = _interopRequireDefault(__webpack_require__(47));

var _Transaction = _interopRequireDefault(__webpack_require__(49));

var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(20));

var _itemToCountry = _interopRequireDefault(__webpack_require__(50));

var _itemToLicense = _interopRequireDefault(__webpack_require__(36));

var _itemToLicensee = _interopRequireDefault(__webpack_require__(33));

var _itemToLicenseTemplate = _interopRequireDefault(__webpack_require__(37));

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _itemToPaymentMethod = _interopRequireDefault(__webpack_require__(39));

var _itemToProduct = _interopRequireDefault(__webpack_require__(43));

var _itemToProductModule = _interopRequireDefault(__webpack_require__(41));

var _itemToToken = _interopRequireDefault(__webpack_require__(46));

var _itemToTransaction = _interopRequireDefault(__webpack_require__(48));

var _CastsUtils = _interopRequireDefault(__webpack_require__(35));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _NlicError = _interopRequireDefault(__webpack_require__(31));

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(17));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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
    this.setValues(Object.assign({}, defaultsMap.get(this), values));
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
        copedValue = Array.isArray(value) ? Object.assign([], value) : Object.assign({}, value);
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
      return Object.assign({}, valuesMap.get(this));
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
/* 54 */
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
 * @link      http://netlicensing.io
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
      return Object.assign({}, vpMap.get(this).parameters);
    }
  }, {
    key: "getProductModuleValidationParameters",
    value: function getProductModuleValidationParameters(productModuleNumber) {
      return Object.assign({}, vpMap.get(this).parameters[productModuleNumber]);
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(56);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var bind = __webpack_require__(23);
var Axios = __webpack_require__(58);
var mergeConfig = __webpack_require__(29);
var defaults = __webpack_require__(26);

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
axios.Cancel = __webpack_require__(30);
axios.CancelToken = __webpack_require__(70);
axios.isCancel = __webpack_require__(25);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(71);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var buildURL = __webpack_require__(24);
var InterceptorManager = __webpack_require__(59);
var dispatchRequest = __webpack_require__(60);
var mergeConfig = __webpack_require__(29);

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
  config.method = config.method ? config.method.toLowerCase() : 'get';

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
var isCancel = __webpack_require__(25);
var defaults = __webpack_require__(26);
var isAbsoluteURL = __webpack_require__(68);
var combineURLs = __webpack_require__(69);

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

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

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
    config.headers || {}
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


var createError = __webpack_require__(28);

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
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(30);

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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(6);

var setPrototypeOf = __webpack_require__(19);

var isNativeFunction = __webpack_require__(73);

var construct = __webpack_require__(74);

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
/* 73 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(19);

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
/* 75 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"netlicensing-client\",\"version\":\"1.2.12\",\"description\":\"JavaScript Wrapper for Labs64 NetLicensing RESTful API\",\"keywords\":[\"labs64\",\"netlicensing\",\"licensing\",\"licensing-as-a-service\",\"license\",\"license-management\",\"software-license\",\"client\",\"restful\",\"restful-api\",\"javascript\",\"wrapper\",\"api\",\"client\"],\"author\":\"Labs64 GmbH\",\"homepage\":\"https://netlicensing.io/\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/Labs64/NetLicensingClient-javascript\"},\"bugs\":{\"url\":\"https://github.com/Labs64/NetLicensingClient-javascript/issues\"},\"license\":\"Apache-2.0\",\"main\":\"dist/netlicensing-client.js\",\"contributors\":[{\"name\":\"Ready Brown\",\"email\":\"ready.brown@hotmail.de\",\"url\":\"https://github.com/r-brown\"},{\"name\":\"Viacheslav Rudkovskiy\",\"email\":\"viachaslau.rudkovski@labs64.de\",\"url\":\"https://github.com/v-rudkovskiy\"},{\"name\":\"Andrei Yushkevich\",\"email\":\"yushkevich@me.com\",\"url\":\"https://github.com/yushkevich\"}],\"scripts\":{\"build\":\"node build/build.js\",\"release\":\"npm run build && npm run test\",\"dev\":\"webpack --progress --colors --watch --config build/webpack.dev.conf.js\",\"test\":\"karma start test/karma.conf.js --single-run\",\"test-for-travis\":\"karma start test/karma.conf.js --single-run --browsers Firefox\",\"lint\":\"eslint --ext .js,.vue src test/specs\"},\"dependencies\":{\"axios\":\"^0.19\",\"es6-promise\":\"^4.2.8\",\"karma-firefox-launcher\":\"^1.1.0\",\"save-dev\":\"^2.0.0\"},\"devDependencies\":{\"@babel/core\":\"^7.4.5\",\"@babel/plugin-proposal-class-properties\":\"^7.4.4\",\"@babel/plugin-proposal-decorators\":\"^7.4.4\",\"@babel/plugin-proposal-export-namespace-from\":\"^7.2.0\",\"@babel/plugin-proposal-function-sent\":\"^7.2.0\",\"@babel/plugin-proposal-json-strings\":\"^7.2.0\",\"@babel/plugin-proposal-numeric-separator\":\"^7.2.0\",\"@babel/plugin-proposal-throw-expressions\":\"^7.2.0\",\"@babel/plugin-syntax-dynamic-import\":\"^7.2.0\",\"@babel/plugin-syntax-import-meta\":\"^7.2.0\",\"@babel/plugin-transform-modules-commonjs\":\"^7.4.4\",\"@babel/plugin-transform-runtime\":\"^7.4.4\",\"@babel/preset-env\":\"^7.4.5\",\"@babel/runtime\":\"^7.4.5\",\"axios-mock-adapter\":\"^1.16.0\",\"babel-eslint\":\"^10.0.1\",\"babel-loader\":\"^8.0.6\",\"chalk\":\"^2.4.2\",\"eslint\":\"^5.16.0\",\"eslint-config-airbnb-base\":\"^13.1.0\",\"eslint-friendly-formatter\":\"^4.0.1\",\"eslint-import-resolver-webpack\":\"^0.11.1\",\"eslint-loader\":\"^2.1.2\",\"eslint-plugin-import\":\"^2.17.3\",\"eslint-plugin-jasmine\":\"^2.10.1\",\"faker\":\"^4.1.0\",\"is-docker\":\"^1.1.0\",\"jasmine\":\"^3.4.0\",\"jasmine-core\":\"^3.4.0\",\"karma\":\"^3.1.4\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-jasmine\":\"^2.0.1\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-spec-reporter\":\"0.0.32\",\"karma-webpack\":\"^4.0.0-rc.6\",\"lodash\":\"^4.17.11\",\"ora\":\"^3.4.0\",\"query-string\":\"^6.6.0\",\"rimraf\":\"^2.6.3\",\"uglifyjs-webpack-plugin\":\"^1.3.0\",\"webpack\":\"^4.33.0\",\"webpack-cli\":\"^3.3.3\",\"webpack-merge\":\"^4.2.1\"},\"engines\":{\"node\":\">= 6.0.0\",\"npm\":\">= 3.0.0\"},\"browserslist\":[\"> 1%\",\"last 2 versions\",\"not ie <= 10\"]}");

/***/ }),
/* 76 */
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

var _ValidationResults = _interopRequireDefault(__webpack_require__(21));

var _itemToLicensee = _interopRequireDefault(__webpack_require__(33));

var _Page = _interopRequireDefault(__webpack_require__(11));

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new licensee object with given properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Createlicensee
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
  create: function () {
    var _create = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(context, productNumber, licensee) {
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
    }));

    function create(_x, _x2, _x3) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),

  /**
   * Gets licensee by its number.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Getlicensee
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
  get: function () {
    var _get = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(context, number) {
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
    }));

    function get(_x4, _x5) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),

  /**
   * Returns all licensees of a vendor.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Licenseeslist
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
  list: function () {
    var _list = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(context, filter) {
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
    }));

    function list(_x6, _x7) {
      return _list.apply(this, arguments);
    }

    return list;
  }(),

  /**
   * Updates licensee properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Updatelicensee
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
  update: function () {
    var _update = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(context, number, licensee) {
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
    }));

    function update(_x8, _x9, _x10) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),

  /**
   * Deletes licensee.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Deletelicensee
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
   * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Validatelicensee
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
  validate: function () {
    var _validate = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(context, number, validationParameters) {
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
    }));

    function validate(_x11, _x12, _x13) {
      return _validate.apply(this, arguments);
    }

    return validate;
  }(),

  /**
   * Transfer licenses between licensees.
   * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Transferlicensee
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
/* 77 */
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
/* 78 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
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
/* 80 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 81 */
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

var _itemToLicense = _interopRequireDefault(__webpack_require__(36));

var _Page = _interopRequireDefault(__webpack_require__(11));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new license object with given properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Createlicense
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
  create: function () {
    var _create = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(context, licenseeNumber, licenseTemplateNumber, transactionNumber, license) {
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
    }));

    function create(_x, _x2, _x3, _x4, _x5) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),

  /**
   * Gets license by its number.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Getlicense
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
  get: function () {
    var _get = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(context, number) {
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
    }));

    function get(_x6, _x7) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),

  /**
   * Returns licenses of a vendor.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Licenseslist
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
  list: function () {
    var _list = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(context, filter) {
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
    }));

    function list(_x8, _x9) {
      return _list.apply(this, arguments);
    }

    return list;
  }(),

  /**
   * Updates license properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Updatelicense
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
  update: function () {
    var _update = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(context, number, transactionNumber, license) {
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
    }));

    function update(_x10, _x11, _x12, _x13) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),

  /**
   * Deletes license.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Deletelicense
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
/* 82 */
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

var _itemToLicenseTemplate = _interopRequireDefault(__webpack_require__(37));

var _Page = _interopRequireDefault(__webpack_require__(11));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new license template object with given properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Createlicensetemplate
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
  create: function () {
    var _create = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(context, productModuleNumber, licenseTemplate) {
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
    }));

    function create(_x, _x2, _x3) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),

  /**
   * Gets license template by its number.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Getlicensetemplate
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
  get: function () {
    var _get = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(context, number) {
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
    }));

    function get(_x4, _x5) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),

  /**
   * Returns all license templates of a vendor.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Licensetemplateslist
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
  list: function () {
    var _list = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(context, filter) {
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
    }));

    function list(_x6, _x7) {
      return _list.apply(this, arguments);
    }

    return list;
  }(),

  /**
   * Updates license template properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Updatelicensetemplate
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
  update: function () {
    var _update = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(context, number, licenseTemplate) {
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
    }));

    function update(_x8, _x9, _x10) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),

  /**
   * Deletes license template.See NetLicensingAPI JavaDoc for details:
   * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Deletelicensetemplate
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

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToPaymentMethod = _interopRequireDefault(__webpack_require__(39));

var _Page = _interopRequireDefault(__webpack_require__(11));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var _default = {
  /**
   * Gets payment method by its number.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Getpaymentmethod
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
  get: function () {
    var _get = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(context, number) {
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
    }));

    function get(_x, _x2) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),

  /**
   * Returns payment methods of a vendor.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Paymentmethodslist
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
  list: function () {
    var _list = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(context, filter) {
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
    }));

    function list(_x3, _x4) {
      return _list.apply(this, arguments);
    }

    return list;
  }(),

  /**
   * Updates payment method properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Updatepaymentmethod
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
  update: function () {
    var _update = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(context, number, paymentMethod) {
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
    }));

    function update(_x5, _x6, _x7) {
      return _update.apply(this, arguments);
    }

    return update;
  }()
};
exports.default = _default;

/***/ }),
/* 84 */
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

var _itemToProductModule = _interopRequireDefault(__webpack_require__(41));

var _Page = _interopRequireDefault(__webpack_require__(11));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new product module object with given properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Createproductmodule
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
  create: function () {
    var _create = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(context, productNumber, productModule) {
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
    }));

    function create(_x, _x2, _x3) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),

  /**
   * Gets product module by its number.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Getproductmodule
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
  get: function () {
    var _get = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(context, number) {
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
    }));

    function get(_x4, _x5) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),

  /**
   * Returns products of a vendor.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Productslist
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
  list: function () {
    var _list = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(context, filter) {
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
    }));

    function list(_x6, _x7) {
      return _list.apply(this, arguments);
    }

    return list;
  }(),

  /**
   * Updates product module properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Updateproductmodule
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
  update: function () {
    var _update = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(context, number, productModule) {
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
    }));

    function update(_x8, _x9, _x10) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),

  /**
   * Deletes product module.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Deleteproductmodule
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
/* 85 */
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

var _itemToProduct = _interopRequireDefault(__webpack_require__(43));

var _Page = _interopRequireDefault(__webpack_require__(11));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new product with given properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Createproduct
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
  create: function () {
    var _create = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(context, product) {
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
    }));

    function create(_x, _x2) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),

  /**
   * Gets product by its number.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Getproduct
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
  get: function () {
    var _get = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(context, number) {
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
    }));

    function get(_x3, _x4) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),

  /**
   * Returns products of a vendor.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Productslist
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
  list: function () {
    var _list = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(context, filter) {
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
    }));

    function list(_x5, _x6) {
      return _list.apply(this, arguments);
    }

    return list;
  }(),

  /**
   * Updates product properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Updateproduct
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
  update: function () {
    var _update = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(context, number, product) {
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
    }));

    function update(_x7, _x8, _x9) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),

  /**
   * Deletes product.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Deleteproduct
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(87);

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
/* 87 */
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

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToToken = _interopRequireDefault(__webpack_require__(46));

var _Page = _interopRequireDefault(__webpack_require__(11));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new token.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Createtoken
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
  create: function () {
    var _create = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(context, token) {
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
    }));

    function create(_x, _x2) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),

  /**
   * Gets token by its number..See NetLicensingAPI for details:
   * @see https://www.labs64.de/conluence/display/NetLicensing PUB/Token+Services#TokenServices-Gettoken
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
  get: function () {
    var _get = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(context, number) {
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
    }));

    function get(_x3, _x4) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),

  /**
   * Returns tokens of a vendor.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Tokenslist
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
  list: function () {
    var _list = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(context, filter) {
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
    }));

    function list(_x5, _x6) {
      return _list.apply(this, arguments);
    }

    return list;
  }(),

  /**
   * Delete token by its number.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Deletetoken
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

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToTransaction = _interopRequireDefault(__webpack_require__(48));

var _Page = _interopRequireDefault(__webpack_require__(11));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services
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
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Createtransaction
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
  create: function () {
    var _create = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(context, transaction) {
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
    }));

    function create(_x, _x2) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),

  /**
   * Gets transaction by its number.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Gettransaction
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
  get: function () {
    var _get = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(context, number) {
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
    }));

    function get(_x3, _x4) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),

  /**
   * Returns all transactions of a vendor.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Transactionslist
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
  list: function () {
    var _list = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(context, filter) {
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
    }));

    function list(_x5, _x6) {
      return _list.apply(this, arguments);
    }

    return list;
  }(),

  /**
   * Updates transaction properties.See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Updatetransaction
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
  update: function () {
    var _update = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(context, number, transaction) {
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
    }));

    function update(_x7, _x8, _x9) {
      return _update.apply(this, arguments);
    }

    return update;
  }()
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

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _Constants = _interopRequireDefault(__webpack_require__(3));

var _Service = _interopRequireDefault(__webpack_require__(12));

var _CheckUtils = _interopRequireDefault(__webpack_require__(4));

var _FilterUtils = _interopRequireDefault(__webpack_require__(13));

var _itemToObject = _interopRequireDefault(__webpack_require__(7));

var _Page = _interopRequireDefault(__webpack_require__(11));

var _itemToCountry = _interopRequireDefault(__webpack_require__(50));

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services
 * @constructor
 */
var _default = {
  /**
   * Returns all license types. See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services#UtilityServices-LicenseTypeslist
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * array of available license types or empty array if nothing found in promise.
   * @returns {Promise}
   */
  listLicenseTypes: function () {
    var _listLicenseTypes = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(context) {
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
    }));

    function listLicenseTypes(_x) {
      return _listLicenseTypes.apply(this, arguments);
    }

    return listLicenseTypes;
  }(),

  /**
   * Returns all license models. See NetLicensingAPI for details:
   * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services#UtilityServices-LicensingModelslist
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * array of available license models or empty array if nothing found in promise.
   * @returns {Promise}
   */
  listLicensingModels: function () {
    var _listLicensingModels = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(context) {
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
    }));

    function listLicensingModels(_x2) {
      return _listLicensingModels.apply(this, arguments);
    }

    return listLicensingModels;
  }(),

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
  listCountries: function () {
    var _listCountries = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(context, filter) {
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
    }));

    function listCountries(_x3, _x4) {
      return _listCountries.apply(this, arguments);
    }

    return listCountries;
  }()
};
exports.default = _default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=netlicensing-client.js.map