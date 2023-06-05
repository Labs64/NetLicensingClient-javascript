(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("NetLicensing", [], factory);
	else if(typeof exports === 'object')
		exports["NetLicensing"] = factory();
	else
		root["NetLicensing"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1480:
/***/ ((__unused_webpack_module, exports) => {

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
  },
  Bundle: {
    ENDPOINT_PATH: 'bundle',
    ENDPOINT_OBTAIN_PATH: 'obtain'
  },
  Notification: {
    ENDPOINT_PATH: 'notification',
    Protocol: {
      WEBHOOK: 'WEBHOOK'
    },
    Event: {
      CREATE_LICENSEE: 'CREATE_LICENSEE',
      CREATE_LICENSE: 'CREATE_LICENSE'
    }
  }
};
exports["default"] = _default;

/***/ }),

/***/ 9892:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Bundle = _interopRequireDefault(__webpack_require__(2044));
var _default = function _default(item) {
  return new _Bundle.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 3213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Country = _interopRequireDefault(__webpack_require__(187));
var _default = function _default(item) {
  return new _Country.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 3887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _License = _interopRequireDefault(__webpack_require__(9763));
var _default = function _default(item) {
  return new _License.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 3255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _LicenseTemplate = _interopRequireDefault(__webpack_require__(767));
var _default = function _default(item) {
  return new _LicenseTemplate.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 6463:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Licensee = _interopRequireDefault(__webpack_require__(2948));
var _default = function _default(item) {
  return new _Licensee.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 7106:
/***/ ((__unused_webpack_module, exports) => {

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

/***/ 797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _PaymentMethod = _interopRequireDefault(__webpack_require__(5088));
var _default = function _default(item) {
  return new _PaymentMethod.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 1255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Product = _interopRequireDefault(__webpack_require__(7143));
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

/***/ 2514:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _ProductModule = _interopRequireDefault(__webpack_require__(3886));
var _default = function _default(item) {
  return new _ProductModule.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 4073:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Token = _interopRequireDefault(__webpack_require__(8132));
var _default = function _default(item) {
  return new _Token.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 1198:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Transaction = _interopRequireDefault(__webpack_require__(39));
var _License = _interopRequireDefault(__webpack_require__(9763));
var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(3089));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
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

/***/ 389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));
var _typeof2 = _interopRequireDefault(__webpack_require__(8698));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _CastsUtils = _interopRequireDefault(__webpack_require__(553));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @link      https://netlicensing.io
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
      var castedValue = this.cast(property, value);

      // define to property
      this.define(property);

      // save property to propertiesMap
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
      var self = this;

      // delete property
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

/***/ 2044:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
                                                                                                                                                                                                                                                                                                                                           * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                           * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                           * @link      https://netlicensing.io
                                                                                                                                                                                                                                                                                                                                           * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                           */
/**
 * NetLicensing Bundle entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the bundle. Vendor can assign this number when creating a bundle or
 * let NetLicensing generate one.
 * @property string number
 *
 * If set to false, the bundle is disabled.
 * @property boolean active
 *
 * Bundle name.
 * @property string name
 *
 * Arbitrary additional user properties of string type may be associated with each bundle. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 *
 * @constructor
 */
var Bundle = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Bundle, _BaseEntity);
  var _super = _createSuper(Bundle);
  function Bundle(properties) {
    (0, _classCallCheck2.default)(this, Bundle);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string'
      }
    });
  }
  (0, _createClass2.default)(Bundle, [{
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
    key: "setLicenseTemplateNumbers",
    value: function setLicenseTemplateNumbers(licenseTemplateNumbers) {
      var numbers = Array.isArray(licenseTemplateNumbers) ? licenseTemplateNumbers.join(',') : licenseTemplateNumbers;
      return this.setProperty('licenseTemplateNumbers', numbers);
    }
  }, {
    key: "getLicenseTemplateNumbers",
    value: function getLicenseTemplateNumbers(def) {
      var numbers = this.getProperty('licenseTemplateNumbers', def);
      return numbers ? numbers.split(',') : numbers;
    }
  }, {
    key: "addLicenseTemplateNumber",
    value: function addLicenseTemplateNumber(licenseTemplateNumber) {
      var numbers = this.getLicenseTemplateNumbers([]);
      numbers.push(licenseTemplateNumber);
      return this.setLicenseTemplateNumbers(numbers);
    }
  }, {
    key: "removeLicenseTemplateNumber",
    value: function removeLicenseTemplateNumber(licenseTemplateNumber) {
      var numbers = this.getLicenseTemplateNumbers([]);
      numbers.splice(numbers.indexOf(licenseTemplateNumber), 1);
      return this.setLicenseTemplateNumbers(numbers);
    }
  }]);
  return Bundle;
}(_BaseEntity2.default);
exports["default"] = Bundle;

/***/ }),

/***/ 187:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
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

/***/ 9763:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
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
 * @property boolean hidden
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

/***/ 767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
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

/***/ 3089:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
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

/***/ 2948:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
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

/***/ 5088:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
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

/***/ 7143:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(6115));
var _get2 = _interopRequireDefault(__webpack_require__(1588));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
var _ProductDiscount = _interopRequireDefault(__webpack_require__(3144));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
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

/***/ 3144:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
                                                                                                                                                                                                                                                                                                                                           * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                           * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                           * @link      https://netlicensing.io
                                                                                                                                                                                                                                                                                                                                           * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                           */
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

/***/ 3886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
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

/***/ 8132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
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

/***/ 39:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(3089));
var _License = _interopRequireDefault(__webpack_require__(9763));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
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

/***/ 2986:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(3496));
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

/***/ 1462:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToBundle = _interopRequireDefault(__webpack_require__(9892));
var _itemToLicense = _interopRequireDefault(__webpack_require__(3887));
var _Page = _interopRequireDefault(__webpack_require__(9407));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
/**
 * JS representation of the Bundle Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/bundle-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new bundle with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#create-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param bundle NetLicensing.Bundle
   *
   * return the newly created bundle object in promise
   * @returns {Promise}
   */
  create: function create(context, bundle) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Service.default.post(context, _Constants.default.Bundle.ENDPOINT_PATH, bundle.asPropertiesMap());
          case 2:
            _yield$Service$post = _context.sent;
            items = _yield$Service$post.data.items.item;
            _items$filter = items.filter(function (_ref) {
              var type = _ref.type;
              return type === 'Bundle';
            }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
            return _context.abrupt("return", (0, _itemToBundle.default)(item));
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * Gets bundle by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#get-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the bundle number
   * @param number string
   *
   * return the bundle object in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
            _context2.next = 3;
            return _Service.default.get(context, "".concat(_Constants.default.Bundle.ENDPOINT_PATH, "/").concat(number));
          case 3:
            _yield$Service$get = _context2.sent;
            items = _yield$Service$get.data.items.item;
            _items$filter3 = items.filter(function (_ref2) {
              var type = _ref2.type;
              return type === 'Bundle';
            }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
            return _context2.abrupt("return", (0, _itemToBundle.default)(item));
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  /**
   * Returns bundle of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#bundles-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of bundle entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
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
            return _Service.default.get(context, _Constants.default.Bundle.ENDPOINT_PATH, queryParams);
          case 7:
            _yield$Service$get2 = _context3.sent;
            data = _yield$Service$get2.data;
            return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
              var type = _ref3.type;
              return type === 'Bundle';
            }).map(function (v) {
              return (0, _itemToBundle.default)(v);
            }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  /**
   * Updates bundle properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#update-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * bundle number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param bundle NetLicensing.Bundle
   *
   * updated bundle in promise.
   * @returns {Promise}
   */
  update: function update(context, number, bundle) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
            _context4.next = 3;
            return _Service.default.post(context, "".concat(_Constants.default.Bundle.ENDPOINT_PATH, "/").concat(number), bundle.asPropertiesMap());
          case 3:
            _yield$Service$post2 = _context4.sent;
            items = _yield$Service$post2.data.items.item;
            _items$filter5 = items.filter(function (_ref4) {
              var type = _ref4.type;
              return type === 'Bundle';
            }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
            return _context4.abrupt("return", (0, _itemToBundle.default)(item));
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  /**
   * Deletes bundle.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#delete-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * bundle number
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
    return _Service.default.delete(context, "".concat(_Constants.default.Bundle.ENDPOINT_PATH, "/").concat(number), queryParams);
  },
  /**
   * Obtain bundle.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#obtain-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * bundle number
   * @param number string
   *
   * licensee number
   * @param bundleObtainParameters NetLicensing.BundleObtainParameters
   *
   * return array of licenses
   * @returns {Promise}
   */
  obtain: function obtain(context, number, bundleObtainParameters) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var _Constants$Bundle, ENDPOINT_PATH, ENDPOINT_OBTAIN_PATH, queryParams, _yield$Service$post3, items;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
            _CheckUtils.default.paramNotEmpty(bundleObtainParameters.getLicenseeNumber(), _Constants.default.Licensee.LICENSEE_NUMBER);
            _Constants$Bundle = _Constants.default.Bundle, ENDPOINT_PATH = _Constants$Bundle.ENDPOINT_PATH, ENDPOINT_OBTAIN_PATH = _Constants$Bundle.ENDPOINT_OBTAIN_PATH;
            queryParams = (0, _defineProperty2.default)({}, _Constants.default.Licensee.LICENSEE_NUMBER, bundleObtainParameters.getLicenseeNumber());
            _context5.next = 6;
            return _Service.default.post(context, "".concat(ENDPOINT_PATH, "/").concat(number, "/").concat(ENDPOINT_OBTAIN_PATH), queryParams);
          case 6:
            _yield$Service$post3 = _context5.sent;
            items = _yield$Service$post3.data.items.item;
            return _context5.abrupt("return", items.filter(function (_ref5) {
              var type = _ref5.type;
              return type === 'License';
            }).map(function (i) {
              return (0, _itemToLicense.default)(i);
            }));
          case 9:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ 6486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToLicense = _interopRequireDefault(__webpack_require__(3887));
var _Page = _interopRequireDefault(__webpack_require__(9407));
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
        while (1) switch (_context.prev = _context.next) {
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
        while (1) switch (_context2.prev = _context2.next) {
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
        while (1) switch (_context3.prev = _context3.next) {
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
        while (1) switch (_context4.prev = _context4.next) {
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

/***/ 1580:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToLicenseTemplate = _interopRequireDefault(__webpack_require__(3255));
var _Page = _interopRequireDefault(__webpack_require__(9407));
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
        while (1) switch (_context.prev = _context.next) {
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
        while (1) switch (_context2.prev = _context2.next) {
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
        while (1) switch (_context3.prev = _context3.next) {
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
        while (1) switch (_context4.prev = _context4.next) {
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

/***/ 5498:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _ValidationResults = _interopRequireDefault(__webpack_require__(3735));
var _itemToLicensee = _interopRequireDefault(__webpack_require__(6463));
var _Page = _interopRequireDefault(__webpack_require__(9407));
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
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
        while (1) switch (_context.prev = _context.next) {
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
        while (1) switch (_context2.prev = _context2.next) {
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
        while (1) switch (_context3.prev = _context3.next) {
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
        while (1) switch (_context4.prev = _context4.next) {
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
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
            queryParams = {};
            if (validationParameters.getProductNumber()) {
              queryParams.productNumber = validationParameters.getProductNumber();
            }
            Object.keys(validationParameters.getLicenseeProperties()).forEach(function (key) {
              queryParams[key] = validationParameters.getLicenseeProperty(key);
            });
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
            _context5.next = 12;
            return _Service.default.post(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number, "/").concat(_Constants.default.Licensee.ENDPOINT_PATH_VALIDATE), queryParams);
          case 12:
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
          case 20:
          case "end":
            return _context5.stop();
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

/***/ 5225:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToPaymentMethod = _interopRequireDefault(__webpack_require__(797));
var _Page = _interopRequireDefault(__webpack_require__(9407));
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
        while (1) switch (_context.prev = _context.next) {
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
        while (1) switch (_context2.prev = _context2.next) {
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
        while (1) switch (_context3.prev = _context3.next) {
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
      }, _callee3);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ 7443:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToProductModule = _interopRequireDefault(__webpack_require__(2514));
var _Page = _interopRequireDefault(__webpack_require__(9407));
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
        while (1) switch (_context.prev = _context.next) {
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
        while (1) switch (_context2.prev = _context2.next) {
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
        while (1) switch (_context3.prev = _context3.next) {
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
        while (1) switch (_context4.prev = _context4.next) {
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

/***/ 5042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToProduct = _interopRequireDefault(__webpack_require__(1255));
var _Page = _interopRequireDefault(__webpack_require__(9407));
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
        while (1) switch (_context.prev = _context.next) {
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
        while (1) switch (_context2.prev = _context2.next) {
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
        while (1) switch (_context3.prev = _context3.next) {
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
        while (1) switch (_context4.prev = _context4.next) {
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

/***/ 393:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(8698));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _axios = _interopRequireDefault(__webpack_require__(7218));
var _btoa = _interopRequireDefault(__webpack_require__(706));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _NlicError = _interopRequireDefault(__webpack_require__(2986));
var _package = _interopRequireDefault(__webpack_require__(4147));
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
      if (!template) throw new TypeError('Url template must be specified');

      // validate http method
      if (['get', 'post', 'delete'].indexOf(method.toLowerCase()) < 0) {
        throw new Error("Invalid request type:".concat(method, ", allowed requests types: GET, POST, DELETE."));
      }

      // validate context
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
      };

      // only node.js has a process variable that is of [[Class]] process
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
          httpXHR = e.response;

          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx

          var error = new _NlicError.default(e);
          error.config = e.config;
          error.code = e.code;
          error.request = e.request;
          error.response = e.response;

          // The request was made and the server responded with a status code
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

/***/ 731:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToToken = _interopRequireDefault(__webpack_require__(4073));
var _Page = _interopRequireDefault(__webpack_require__(9407));
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
        while (1) switch (_context.prev = _context.next) {
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
        while (1) switch (_context2.prev = _context2.next) {
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
        while (1) switch (_context3.prev = _context3.next) {
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

/***/ 5919:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToTransaction = _interopRequireDefault(__webpack_require__(1198));
var _Page = _interopRequireDefault(__webpack_require__(9407));
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
        while (1) switch (_context.prev = _context.next) {
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
        while (1) switch (_context2.prev = _context2.next) {
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
        while (1) switch (_context3.prev = _context3.next) {
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
        while (1) switch (_context4.prev = _context4.next) {
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
      }, _callee4);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ 7635:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Page = _interopRequireDefault(__webpack_require__(9407));
var _itemToCountry = _interopRequireDefault(__webpack_require__(3213));
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
        while (1) switch (_context.prev = _context.next) {
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
        while (1) switch (_context2.prev = _context2.next) {
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
        while (1) switch (_context3.prev = _context3.next) {
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
      }, _callee3);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, exports) => {

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

/***/ 5661:
/***/ ((__unused_webpack_module, exports) => {

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

/***/ 3093:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
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

/***/ 4658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var BundleObtainParameters = /*#__PURE__*/function () {
  function BundleObtainParameters() {
    (0, _classCallCheck2.default)(this, BundleObtainParameters);
    this.licenseeNumber = '';
  }
  (0, _createClass2.default)(BundleObtainParameters, [{
    key: "setLicenseeNumber",
    value: function setLicenseeNumber(licenseeNumber) {
      this.licenseeNumber = licenseeNumber;
      return this;
    }
  }, {
    key: "getLicenseeNumber",
    value: function getLicenseeNumber() {
      return this.licenseeNumber;
    }
  }]);
  return BundleObtainParameters;
}();
exports["default"] = BundleObtainParameters;

/***/ }),

/***/ 4693:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(8698));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @link      https://netlicensing.io
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
      if (!_CheckUtils.default.isValid(value)) throw new Error("Value ".concat(key, " has wrong value").concat(value));

      // define keys
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
      var self = this;

      // delete property
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

/***/ 9407:
/***/ ((__unused_webpack_module, exports) => {

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

/***/ 4856:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
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
    this.licenseeProperties = {};
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
      this.licenseeProperties.licenseeName = licenseeName;
      return this;
    }

    /**
     * Get the licensee name
     * @returns {*}
     */
  }, {
    key: "getLicenseeName",
    value: function getLicenseeName() {
      return this.licenseeProperties.licenseeName;
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
      this.licenseeProperties.licenseeSecret = licenseeSecret;
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
      return this.licenseeProperties.licenseeSecret;
    }

    /**
     * Get all licensee properties
     */
  }, {
    key: "getLicenseeProperties",
    value: function getLicenseeProperties() {
      return this.licenseeProperties;
    }

    /**
     * Set licensee property
     * @param key
     * @param value
     */
  }, {
    key: "setLicenseeProperty",
    value: function setLicenseeProperty(key, value) {
      this.licenseeProperties[key] = value;
      return this;
    }

    /**
     * Get licensee property
     * @param key
     */
  }, {
    key: "getLicenseeProperty",
    value: function getLicenseeProperty(key, def) {
      return this.licenseeProperties[key] || def;
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

/***/ 3735:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(8698));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @link      https://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */
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

/***/ 706:
/***/ ((module) => {

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

/***/ 3897:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5372:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6115:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7156:
/***/ ((module) => {

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

/***/ 6690:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(6015);
var isNativeReflectConstruct = __webpack_require__(9617);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
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

/***/ 9728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(4062);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
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

/***/ 8416:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(4062);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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

/***/ 1588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var superPropBase = __webpack_require__(1753);
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
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

/***/ 3808:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(6015);
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

/***/ 4836:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6035:
/***/ ((module) => {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9617:
/***/ ((module) => {

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

/***/ 8872:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2218:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
var assertThisInitialized = __webpack_require__(6115);
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

/***/ 7061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6015:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7424:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(5372);
var iterableToArrayLimit = __webpack_require__(8872);
var unsupportedIterableToArray = __webpack_require__(6116);
var nonIterableRest = __webpack_require__(2218);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(3808);
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
var toPrimitive = __webpack_require__(5036);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8698:
/***/ ((module) => {

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

/***/ 6116:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(3897);
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

/***/ 3496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(3808);
var setPrototypeOf = __webpack_require__(6015);
var isNativeFunction = __webpack_require__(6035);
var construct = __webpack_require__(3515);
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

/***/ 4687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(7061)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 7218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Axios v1.4.0 Copyright (c) 2023 Matt Zabriskie and contributors


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
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
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

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
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : __webpack_require__.g)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

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
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

var utils = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
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
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
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
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
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
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

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
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


var platform = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
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

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
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
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
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

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

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

var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

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
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);

var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

var cookies = platform.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
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
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
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
  })();

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var isURLSameOrigin = platform.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

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
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else {
        requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
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

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (platform.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
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
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};

utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const VERSION = "1.4.0";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
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
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

var CancelToken$1 = CancelToken;

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
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

module.exports = axios;
//# sourceMappingURL=axios.cjs.map


/***/ }),

/***/ 4147:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"netlicensing-client","version":"1.2.31","description":"JavaScript Wrapper for Labs64 NetLicensing RESTful API","keywords":["labs64","netlicensing","licensing","licensing-as-a-service","license","license-management","software-license","client","restful","restful-api","javascript","wrapper","api","client"],"license":"Apache-2.0","author":"Labs64 GmbH","homepage":"https://netlicensing.io","repository":{"type":"git","url":"https://github.com/Labs64/NetLicensingClient-javascript"},"bugs":{"url":"https://github.com/Labs64/NetLicensingClient-javascript/issues"},"contributors":[{"name":"Ready Brown","email":"ready.brown@hotmail.de","url":"https://github.com/r-brown"},{"name":"Viacheslav Rudkovskiy","email":"viachaslau.rudkovski@labs64.de","url":"https://github.com/v-rudkovskiy"},{"name":"Andrei Yushkevich","email":"yushkevich@me.com","url":"https://github.com/yushkevich"}],"main":"dist/netlicensing-client.js","files":["dist"],"scripts":{"build":"node build/build.cjs","release":"npm run build && npm run test","dev":"webpack --progress --watch --config build/webpack.dev.conf.cjs","test":"karma start test/karma.conf.js --single-run","test-mocha":"webpack --config build/webpack.test.conf.cjs","test-for-travis":"karma start test/karma.conf.js --single-run --browsers Firefox","lint":"eslint --ext .js,.vue src test"},"dependencies":{"axios":"^1.4.0","btoa":"^1.2.1","es6-promise":"^4.2.8"},"devDependencies":{"@babel/core":"^7.17.8","@babel/plugin-proposal-class-properties":"^7.16.7","@babel/plugin-proposal-decorators":"^7.17.8","@babel/plugin-proposal-export-namespace-from":"^7.16.7","@babel/plugin-proposal-function-sent":"^7.16.7","@babel/plugin-proposal-json-strings":"^7.16.7","@babel/plugin-proposal-numeric-separator":"^7.16.7","@babel/plugin-proposal-throw-expressions":"^7.16.7","@babel/plugin-syntax-dynamic-import":"^7.8.3","@babel/plugin-syntax-import-meta":"^7.10.4","@babel/plugin-transform-modules-commonjs":"^7.17.7","@babel/plugin-transform-runtime":"^7.17.0","@babel/preset-env":"^7.16.11","@babel/runtime":"^7.17.8","axios-mock-adapter":"^1.20.0","babel-eslint":"^10.1.0","babel-loader":"^9.1.2","chalk":"^4.1.2","eslint":"^7.32.0","eslint-config-airbnb-base":"^15.0.0","eslint-friendly-formatter":"^4.0.1","eslint-import-resolver-webpack":"^0.13.1","eslint-plugin-import":"^2.25.4","eslint-plugin-jasmine":"^4.1.3","eslint-webpack-plugin":"^3.1.1","faker":"^5.5.3","is-docker":"^2.2.1","jasmine":"^4.0.2","jasmine-core":"^4.0.1","karma":"^6.3.17","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.2","karma-jasmine":"^4.0.2","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.33","karma-webpack":"^5.0.0","lodash":"^4.17.21","ora":"^5.4.1","rimraf":"^3.0.2","terser-webpack-plugin":"^5.3.1","webpack":"^5.76.0","webpack-cli":"^5.1.1","webpack-merge":"^5.8.0"},"engines":{"node":">= 14.0.0","npm":">= 8.0.0"},"browserslist":["> 1%","last 2 versions","not ie <= 10"]}');

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "BaseEntity", ({
  enumerable: true,
  get: function get() {
    return _BaseEntity.default;
  }
}));
Object.defineProperty(exports, "Bundle", ({
  enumerable: true,
  get: function get() {
    return _Bundle.default;
  }
}));
Object.defineProperty(exports, "BundleObtainParameters", ({
  enumerable: true,
  get: function get() {
    return _BundleObtainParameters.default;
  }
}));
Object.defineProperty(exports, "BundleService", ({
  enumerable: true,
  get: function get() {
    return _BundleService.default;
  }
}));
Object.defineProperty(exports, "CastsUtils", ({
  enumerable: true,
  get: function get() {
    return _CastsUtils.default;
  }
}));
Object.defineProperty(exports, "CheckUtils", ({
  enumerable: true,
  get: function get() {
    return _CheckUtils.default;
  }
}));
Object.defineProperty(exports, "Constants", ({
  enumerable: true,
  get: function get() {
    return _Constants.default;
  }
}));
Object.defineProperty(exports, "Context", ({
  enumerable: true,
  get: function get() {
    return _Context.default;
  }
}));
Object.defineProperty(exports, "Country", ({
  enumerable: true,
  get: function get() {
    return _Country.default;
  }
}));
Object.defineProperty(exports, "FilterUtils", ({
  enumerable: true,
  get: function get() {
    return _FilterUtils.default;
  }
}));
Object.defineProperty(exports, "License", ({
  enumerable: true,
  get: function get() {
    return _License.default;
  }
}));
Object.defineProperty(exports, "LicenseService", ({
  enumerable: true,
  get: function get() {
    return _LicenseService.default;
  }
}));
Object.defineProperty(exports, "LicenseTemplate", ({
  enumerable: true,
  get: function get() {
    return _LicenseTemplate.default;
  }
}));
Object.defineProperty(exports, "LicenseTemplateService", ({
  enumerable: true,
  get: function get() {
    return _LicenseTemplateService.default;
  }
}));
Object.defineProperty(exports, "LicenseTransactionJoin", ({
  enumerable: true,
  get: function get() {
    return _LicenseTransactionJoin.default;
  }
}));
Object.defineProperty(exports, "Licensee", ({
  enumerable: true,
  get: function get() {
    return _Licensee.default;
  }
}));
Object.defineProperty(exports, "LicenseeService", ({
  enumerable: true,
  get: function get() {
    return _LicenseeService.default;
  }
}));
Object.defineProperty(exports, "NlicError", ({
  enumerable: true,
  get: function get() {
    return _NlicError.default;
  }
}));
Object.defineProperty(exports, "Page", ({
  enumerable: true,
  get: function get() {
    return _Page.default;
  }
}));
Object.defineProperty(exports, "PaymentMethod", ({
  enumerable: true,
  get: function get() {
    return _PaymentMethod.default;
  }
}));
Object.defineProperty(exports, "PaymentMethodService", ({
  enumerable: true,
  get: function get() {
    return _PaymentMethodService.default;
  }
}));
Object.defineProperty(exports, "Product", ({
  enumerable: true,
  get: function get() {
    return _Product.default;
  }
}));
Object.defineProperty(exports, "ProductDiscount", ({
  enumerable: true,
  get: function get() {
    return _ProductDiscount.default;
  }
}));
Object.defineProperty(exports, "ProductModule", ({
  enumerable: true,
  get: function get() {
    return _ProductModule.default;
  }
}));
Object.defineProperty(exports, "ProductModuleService", ({
  enumerable: true,
  get: function get() {
    return _ProductModuleService.default;
  }
}));
Object.defineProperty(exports, "ProductService", ({
  enumerable: true,
  get: function get() {
    return _ProductService.default;
  }
}));
Object.defineProperty(exports, "Service", ({
  enumerable: true,
  get: function get() {
    return _Service.default;
  }
}));
Object.defineProperty(exports, "Token", ({
  enumerable: true,
  get: function get() {
    return _Token.default;
  }
}));
Object.defineProperty(exports, "TokenService", ({
  enumerable: true,
  get: function get() {
    return _TokenService.default;
  }
}));
Object.defineProperty(exports, "Transaction", ({
  enumerable: true,
  get: function get() {
    return _Transaction.default;
  }
}));
Object.defineProperty(exports, "TransactionService", ({
  enumerable: true,
  get: function get() {
    return _TransactionService.default;
  }
}));
Object.defineProperty(exports, "UtilityService", ({
  enumerable: true,
  get: function get() {
    return _UtilityService.default;
  }
}));
Object.defineProperty(exports, "ValidationParameters", ({
  enumerable: true,
  get: function get() {
    return _ValidationParameters.default;
  }
}));
Object.defineProperty(exports, "ValidationResults", ({
  enumerable: true,
  get: function get() {
    return _ValidationResults.default;
  }
}));
Object.defineProperty(exports, "itemToBundle", ({
  enumerable: true,
  get: function get() {
    return _itemToBundle.default;
  }
}));
Object.defineProperty(exports, "itemToCountry", ({
  enumerable: true,
  get: function get() {
    return _itemToCountry.default;
  }
}));
Object.defineProperty(exports, "itemToLicense", ({
  enumerable: true,
  get: function get() {
    return _itemToLicense.default;
  }
}));
Object.defineProperty(exports, "itemToLicenseTemplate", ({
  enumerable: true,
  get: function get() {
    return _itemToLicenseTemplate.default;
  }
}));
Object.defineProperty(exports, "itemToLicensee", ({
  enumerable: true,
  get: function get() {
    return _itemToLicensee.default;
  }
}));
Object.defineProperty(exports, "itemToObject", ({
  enumerable: true,
  get: function get() {
    return _itemToObject.default;
  }
}));
Object.defineProperty(exports, "itemToPaymentMethod", ({
  enumerable: true,
  get: function get() {
    return _itemToPaymentMethod.default;
  }
}));
Object.defineProperty(exports, "itemToProduct", ({
  enumerable: true,
  get: function get() {
    return _itemToProduct.default;
  }
}));
Object.defineProperty(exports, "itemToProductModule", ({
  enumerable: true,
  get: function get() {
    return _itemToProductModule.default;
  }
}));
Object.defineProperty(exports, "itemToToken", ({
  enumerable: true,
  get: function get() {
    return _itemToToken.default;
  }
}));
Object.defineProperty(exports, "itemToTransaction", ({
  enumerable: true,
  get: function get() {
    return _itemToTransaction.default;
  }
}));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Context = _interopRequireDefault(__webpack_require__(4693));
var _Page = _interopRequireDefault(__webpack_require__(9407));
var _ValidationParameters = _interopRequireDefault(__webpack_require__(4856));
var _ValidationResults = _interopRequireDefault(__webpack_require__(3735));
var _BundleObtainParameters = _interopRequireDefault(__webpack_require__(4658));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _LicenseeService = _interopRequireDefault(__webpack_require__(5498));
var _LicenseService = _interopRequireDefault(__webpack_require__(6486));
var _LicenseTemplateService = _interopRequireDefault(__webpack_require__(1580));
var _PaymentMethodService = _interopRequireDefault(__webpack_require__(5225));
var _ProductModuleService = _interopRequireDefault(__webpack_require__(7443));
var _ProductService = _interopRequireDefault(__webpack_require__(5042));
var _TokenService = _interopRequireDefault(__webpack_require__(731));
var _TransactionService = _interopRequireDefault(__webpack_require__(5919));
var _UtilityService = _interopRequireDefault(__webpack_require__(7635));
var _BundleService = _interopRequireDefault(__webpack_require__(1462));
var _BaseEntity = _interopRequireDefault(__webpack_require__(389));
var _Country = _interopRequireDefault(__webpack_require__(187));
var _License = _interopRequireDefault(__webpack_require__(9763));
var _Licensee = _interopRequireDefault(__webpack_require__(2948));
var _LicenseTemplate = _interopRequireDefault(__webpack_require__(767));
var _PaymentMethod = _interopRequireDefault(__webpack_require__(5088));
var _Product = _interopRequireDefault(__webpack_require__(7143));
var _ProductDiscount = _interopRequireDefault(__webpack_require__(3144));
var _ProductModule = _interopRequireDefault(__webpack_require__(3886));
var _Token = _interopRequireDefault(__webpack_require__(8132));
var _Transaction = _interopRequireDefault(__webpack_require__(39));
var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(3089));
var _Bundle = _interopRequireDefault(__webpack_require__(2044));
var _itemToCountry = _interopRequireDefault(__webpack_require__(3213));
var _itemToLicense = _interopRequireDefault(__webpack_require__(3887));
var _itemToLicensee = _interopRequireDefault(__webpack_require__(6463));
var _itemToLicenseTemplate = _interopRequireDefault(__webpack_require__(3255));
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _itemToPaymentMethod = _interopRequireDefault(__webpack_require__(797));
var _itemToProduct = _interopRequireDefault(__webpack_require__(1255));
var _itemToProductModule = _interopRequireDefault(__webpack_require__(2514));
var _itemToToken = _interopRequireDefault(__webpack_require__(4073));
var _itemToTransaction = _interopRequireDefault(__webpack_require__(1198));
var _itemToBundle = _interopRequireDefault(__webpack_require__(9892));
var _CastsUtils = _interopRequireDefault(__webpack_require__(553));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _NlicError = _interopRequireDefault(__webpack_require__(2986));
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});