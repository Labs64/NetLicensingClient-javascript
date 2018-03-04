/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import Constants from '../Constants';
import CheckUtils from '../util/CheckUtils';

/**
 * The context values.
 * @type {{}}
 * @private
 */
const valuesMap = new WeakMap();

/**
 * List of values that was defined
 * @type {{}}
 * @private
 */
const definedMap = new WeakMap();

/**
 * Context defaults
 * @type {{baseUrl: string, securityMode}}
 * @private
 */
const defaultsMap = new WeakMap();

export default class Context {
    constructor(values) {
        defaultsMap.set(this, {
            baseUrl: 'https://go.netlicensing.io/core/v2/rest',
            securityMode: Constants.BASIC_AUTHENTICATION,
        });

        valuesMap.set(this, {});

        definedMap.set(this, {});

        this.setValues(Object.assign({}, defaultsMap.get(this), values));
    }

    setBaseUrl(baseUrl) {
        return this.setValue('baseUrl', baseUrl);
    }

    getBaseUrl(def) {
        return this.getValue('baseUrl', def);
    }

    setUsername(username) {
        return this.setValue('username', username);
    }

    getUsername(def) {
        return this.getValue('username', def);
    }

    setPassword(password) {
        return this.setValue('password', password);
    }

    getPassword(def) {
        return this.getValue('password', def);
    }

    setApiKey(apiKey) {
        return this.setValue('apiKey', apiKey);
    }

    getApiKey(def) {
        return this.getValue('apiKey', def);
    }

    setSecurityMode(securityMode) {
        return this.setValue('securityMode', securityMode);
    }

    getSecurityMode(def) {
        return this.getValue('securityMode', def);
    }

    setVendorNumber(vendorNumber) {
        return this.setValue('vendorNumber', vendorNumber);
    }

    getVendorNumber(def) {
        return this.getValue('vendorNumber', def);
    }

    /**
     * Set a given values on the context.
     * @param key
     * @param value
     * @returns {Context}
     */
    setValue(key, value) {
        // check values
        if (!CheckUtils.isValid(key) || typeof key === 'object') throw new Error(`Bad value key:${key}`);
        if (!CheckUtils.isValid(value)) throw new Error(`Value ${key} has wrong value${value}`);

        // define keys
        this.define(key);

        let copedValue = value;

        if (typeof value === 'object') {
            copedValue = (Array.isArray(value)) ? Object.assign([], value) : Object.assign({}, value);
        }

        const values = valuesMap.get(this);
        values[key] = copedValue;

        return this;
    }

    /**
     * Set the array of context values.
     * @param values
     * @returns {Context}
     */
    setValues(values) {
        this.removeValues();

        const has = Object.prototype.hasOwnProperty;

        Object.keys(values).forEach((key) => {
            if (has.call(values, key)) {
                this.setValue(key, values[key]);
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
    getValue(key, def) {
        return valuesMap.get(this)[key] || def;
    }

    /**
     * Get all of the current value on the context.
     */
    getValues() {
        return Object.assign({}, valuesMap.get(this));
    }

    /**
     * Remove value
     * @param key
     * @returns {Context}
     */
    removeValue(key) {
        const values = valuesMap.get(this);
        delete values[key];

        this.removeDefine(key);
        return this;
    }

    /**
     * Remove values
     * @param keys
     */
    removeValues(keys) {
        const keysAr = keys || Object.keys(valuesMap.get(this));
        keysAr.forEach(key => this.removeValue(key));
    }

    /**
     * Define value getter and setter
     * @param key
     * @param onlyGetter
     * @private
     */
    define(key, onlyGetter) {
        if (this.hasDefine(key)) return;

        if (!CheckUtils.isValid(key) || typeof property === 'object') {
            throw new TypeError(`Bad value name:${key}`);
        }

        const self = this;

        // delete property
        delete this[key];

        const descriptors = {
            enumerable: true,
            configurable: true,
            get() {
                return self.getValue(key);
            },
        };

        if (!onlyGetter) {
            descriptors.set = value => self.setValue(key, value);
        }

        const defined = definedMap.get(this);
        defined[key] = true;

        Object.defineProperty(this, key, descriptors);
    }

    /**
     * Check if value has defined
     * @param key
     * @private
     */
    hasDefine(key) {
        return Boolean(definedMap.get(this)[key]);
    }

    /**
     * Remove value getter and setter
     * @param key
     * @private
     */
    removeDefine(key) {
        if (!this.hasDefine(key)) return;

        const defined = definedMap.get(this);
        delete defined[key];

        delete this[key];
    }
}
