/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * Class Context
 *
 * Provides calling context for the NetLicensing API calls.
 * The Context object may differ depending on the level at which NetLicensing API is called.
 * For the internal Java NetLicensing API the Context provides information about the targeted Vendor.
 *
 * @property string $baseUrl
 * Server URL base of the NetLicensing RESTful API. Normally should be "https://go.netlicensing.io".
 *
 * @property  string username
 * Login name of the user sending the requests when securityMode = BASIC_AUTHENTICATION.
 *
 * @property string password
 * Password of the user sending the requests when securityMode = BASIC_AUTHENTICATION.
 *
 * @property string apiKey
 * API Key used to identify the request sender when securityMode = APIKEY_IDENTIFICATION.
 *
 * @property string securityMode
 * Determines the security mode used for accessing the NetLicensing API.
 * See https://www.labs64.de/confluence/x/pwCo#NetLicensingAPI%28RESTful%29-Security for details.
 *
 * @property string vendorNumber
 * External number of the vendor.
 *
 * @constructor
 */

Netlicensing.Context = function (values) {

    if (values === undefined) values = {};

    if (typeof values != 'object') {
        throw new Error('Argument 1 passed to Context() must be of the type object, ' + typeof values + ' given');
    }

    /**
     * Context defaults
     * @type {{baseUrl: string, securityMode}}
     * @private
     */
    var __defaults = {
        baseUrl: 'https://go.netlicensing.io/core/v2/rest',
        securityMode: Netlicensing.Context.BASIC_AUTHENTICATION
    };

    /**
     * The context values.
     * @type {{}}
     * @private
     */
    var __values = {};


    /**
     * List of values that was defined
     * @type {{}}
     * @private
     */
    var __defined = {};

    /**
     * Set a given values on the context.
     * @param key
     * @param value
     * @returns {Context}
     */
    this.setValue = function (key, value) {
        this.__checkValue(key, value);
        this.__define(key);

        if (typeof value === 'object')value = (Array.isArray(value)) ? Object.assign([], value) : Object.assign({}, value);

        __values[key] = value;

        return this;
    };

    /**
     * Set the array of context values.
     * @param values
     * @returns {Context}
     */
    this.setValues = function (values) {

        this.removeValues();

        for (var key in values) {
            if (!values.hasOwnProperty(key)) continue;
            this.setValue(key, values[key]);
        }

        return this;
    };

    /**
     * Get an value from the context.
     * @param key
     * @param def
     * @returns {*}
     */
    this.getValue = function (key, def) {
        return __values[key] || def;
    };

    /**
     * Get all of the current value on the context.
     */
    this.getValues = function () {
        return Object.assign({}, __values);
    };

    /**
     * Remove value
     * @param key
     * @returns {BaseEntity}
     */
    this.removeValue = function (key) {
        delete __values[key];
        this.__removeDefine(key);
        return this;
    };

    /**
     * Remove values
     * @param keys
     */
    this.removeValues = function (keys) {
        keys = keys || Object.keys(__values);

        var length = keys.length;

        for (var i = 0; i < length; i++) {
            this.removeValue(keys[i]);
        }
    };

    /**
     * Check if value has defined
     * @param key
     * @protected
     */
    this.__hasDefine = function (key) {
        return Boolean(__defined[key]);
    };

    /**
     * Define value getter and setter
     * @param key
     * @param onlyGetter
     * @protected
     */
    this.__define = function (key, onlyGetter) {
        if (this.__hasDefine(key)) return;

        //delete property
        delete this[key];

        var descriptors = {
            enumerable: true,
            configurable: true,
            get: function () {
                return self.getValue(key)
            }
        };

        if (!onlyGetter) {
            descriptors.set = function (value) {
                return self.setValue(key, value);
            };
        }

        Object.defineProperty(this, key, descriptors);
    };

    /**
     * Define values getter and setter
     * @param keys
     * @param onlyGetter
     * @protected
     */
    this.__defines = function (keys, onlyGetter) {
        var length = keys.length;
        for (var i = 0; i < length; i++) {
            this.__define(keys[i], onlyGetter);
        }
    };

    /**
     * Remove value getter and setter
     * @param key
     * @protected
     */
    this.__removeDefine = function (key) {
        if (!this.__hasDefine(key)) return;
        delete this[key];
        delete __defined[key];
    };

    /**
     * Check if value is valid
     * @param key
     * @param value
     * @private
     */
    this.__checkValue = function (key, value) {
        if (!Netlicensing.CheckUtils.isValid(key) || typeof key === 'object')  throw new Error('Bad value key:' + key);
        if (!Netlicensing.CheckUtils.isValid(value)) throw new Error('Value ' + key + ' has wrong value' + value);
    };

    //make methods not changeable
    Object.defineProperties(this, {
        setValue: {writable: false, enumerable: false, configurable: false},
        setValues: {writable: false, enumerable: false, configurable: false},
        getValue: {writable: false, enumerable: false, configurable: false},
        getValues: {writable: false, enumerable: false, configurable: false},
        removeValue: {writable: false, enumerable: false, configurable: false},
        removeValues: {writable: false, enumerable: false, configurable: false},
        __hasDefine: {writable: false, enumerable: false, configurable: false},
        __define: {writable: false, enumerable: false, configurable: false},
        __defines: {writable: false, enumerable: false, configurable: false},
        __removeDefine: {writable: false, enumerable: false, configurable: false},
        __checkValue: {writable: false, enumerable: false, configurable: false}
    });

    this.setValues(Object.assign({}, __defaults, values));
};

//Security mode static constants
Object.defineProperty(Netlicensing.Context, 'BASIC_AUTHENTICATION', {value: 'BASIC_AUTH'});
Object.defineProperty(Netlicensing.Context, 'APIKEY_IDENTIFICATION', {value: 'APIKEY'});

Netlicensing.Context.prototype.setBaseUrl = function (baseUrl) {
    return this.setValue('baseUrl', baseUrl);
};

Netlicensing.Context.prototype.getBaseUrl = function (def) {
    return this.getValue('baseUrl', def);
};

Netlicensing.Context.prototype.setUsername = function (username) {
    return this.setValue('username', username);
};

Netlicensing.Context.prototype.getUsername = function (def) {
    return this.getValue('username', def);
};

Netlicensing.Context.prototype.setPassword = function (password) {
    return this.setValue('password', password);
};

Netlicensing.Context.prototype.getPassword = function (def) {
    return this.getValue('password', def);
};

Netlicensing.Context.prototype.setApiKey = function (apiKey) {
    return this.setValue('apiKey', apiKey);
};

Netlicensing.Context.prototype.getApiKey = function (def) {
    return this.getValue('apiKey', def);
};

Netlicensing.Context.prototype.setSecurityMode = function (securityMode) {
    return this.setValue('securityMode', securityMode);
};

Netlicensing.Context.prototype.getSecurityMode = function (def) {
    return this.getValue('securityMode', def);
};

Netlicensing.Context.prototype.setVendorNumber = function (vendorNumber) {
    return this.setValue('vendorNumber', vendorNumber);
};

Netlicensing.Context.prototype.getVendorNumber = function (def) {
    return this.getValue('vendorNumber', def);
};