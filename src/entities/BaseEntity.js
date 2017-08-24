/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

function BaseEntity(properties) {

    /**
     * Object Handle
     * @type {BaseEntity}
     */
    var self = this;

    /**
     * The entity properties.
     * @type {{}}
     * @private
     */
    var __properties = {};

    /**
     * List of properties that was defined
     * @type {{}}
     * @private
     */
    var __defined = {};

    /**
     * Set a given property on the entity.
     * @param property
     * @param value
     * @returns {BaseEntity}
     */
    this.setProperty = function (property, value) {
        value = self.__cast(property, value);

        this.__checkProperty(property, value);
        this.__define(property);

        if (typeof value === 'object')value = (Array.isArray(value)) ? Object.assign([], value) : Object.assign({}, value);

        __properties[property] = value;

        return this;
    };

    /**
     * Alias for setProperty
     * @param property
     * @param value
     * @returns {BaseEntity}
     */
    this.addProperty = function (property, value) {
        return this.setProperty(property, value);
    };

    /**
     * Set the entity properties.
     * @param properties
     * @returns {BaseEntity}
     */
    this.setProperties = function (properties) {

        this.removeProperties();

        for (var key in properties) {
            if (!properties.hasOwnProperty(key)) continue;
            this.setProperty(key, properties[key]);
        }

        return this;
    };

    /**
     * Get an property from the entity.
     * @param property
     * @param def
     * @returns {*}
     */
    this.getProperty = function (property, def) {
        return __properties[property] || def;
    };

    /**
     * Get all of the current properties on the entity.
     */
    this.getProperties = function () {
        return Object.assign({}, __properties);
    };

    /**
     * Remove property
     * @param property
     * @returns {BaseEntity}
     */
    this.removeProperty = function (property) {
        delete __properties[property];
        this.__removeDefine(property);
        return this;
    };

    /**
     * Remove properties
     * @param properties
     */
    this.removeProperties = function (properties) {
        properties = properties || Object.keys(__properties);

        var length = properties.length;

        for (var i = 0; i < length; i++) {
            this.removeProperty(properties[i]);
        }
    };

    /**
     * Check if property has defined
     * @param property
     * @protected
     */
    this.__hasDefine = function (property) {
        return Boolean(__defined[property]);
    };

    /**
     * Define property getter and setter
     * @param property
     * @param onlyGetter
     * @protected
     */
    this.__define = function (property, onlyGetter) {
        if (this.__hasDefine(property)) return;

        //delete property
        delete this[property];

        var descriptors = {
            enumerable: true,
            configurable: true,
            get: function () {
                return self.getProperty(property)
            }
        };

        if (!onlyGetter) {
            descriptors.set = function (value) {
                return self.setProperty(property, value);
            };
        }

        Object.defineProperty(this, property, descriptors);
    };

    /**
     * Define properties getter and setter
     * @param properties
     * @param onlyGetter
     * @protected
     */
    this.__defines = function (properties, onlyGetter) {
        var length = properties.length;
        for (var i = 0; i < length; i++) {
            this.__define(properties[i], onlyGetter);
        }
    };

    /**
     * Remove property getter and setter
     * @param property
     * @protected
     */
    this.__removeDefine = function (property) {
        if (!this.__hasDefine(property)) return;
        delete this[property];
        delete __defined[property];
    };

    /**
     * Determine whether an property should be cast to a native type.
     * @param property
     * @returns {boolean}
     * @protected
     */
    this.__hasCast = function (property) {
        return (this.casts && this.casts[property]);
    };

    /**
     * Get the type of cast for a entity property.
     * @param property
     * @returns {string}
     * @protected
     */
    this.__getCastType = function (property) {
        return this.casts[property].trim().toLowerCase();
    };

    /**
     * Cast an property to a native JS type.
     * @param property
     * @param value
     * @returns {*}
     * @protected
     */
    this.__cast = function (property, value) {
        if (!this.__hasCast(property)) return value;

        switch (this.__getCastType(property)) {
            case 'int':
            case 'integer':
                return parseInt(value);
            case 'float':
            case 'double':
                return parseFloat(value);
            case 'bool':
            case 'boolean':
                return Boolean(value);
        }
        return value;
    };

    /**
     * Check if property is valid
     * @param property
     * @param value
     * @private
     */
    this.__checkProperty = function (property, value) {
        if (!CheckUtils.isValid(property) || typeof property === 'object')  throw new Error('Bad property name:' + property);
        if (!CheckUtils.isValid(value)) throw new Error('Property ' + property + ' has wrong value' + value);
    };

    //make methods not changeable
    Object.defineProperties(this, {
        setProperty: {writable: false, enumerable: false, configurable: false},
        addProperty: {writable: false, enumerable: false, configurable: false},
        setProperties: {writable: false, enumerable: false, configurable: false},
        getProperty: {writable: false, enumerable: false, configurable: false},
        getProperties: {writable: false, enumerable: false, configurable: false},
        removeProperty: {writable: false, enumerable: false, configurable: false},
        __hasDefine: {writable: false, enumerable: false, configurable: false},
        __define: {writable: false, enumerable: false, configurable: false},
        __defines: {writable: false, enumerable: false, configurable: false},
        __removeDefine: {writable: false, enumerable: false, configurable: false},
        __hasCast: {writable: false, enumerable: false, configurable: false},
        __getCastType: {writable: false, enumerable: false, configurable: false},
        __cast: {writable: false, enumerable: false, configurable: false},
        __checkProperty: {writable: false, enumerable: false, configurable: false}
    });

    this.setProperties(properties);
}

BaseEntity.prototype.asPropertiesMap = function () {
    return this.getProperties();
};


