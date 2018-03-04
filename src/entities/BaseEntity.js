/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import CheckUtils from '../util/CheckUtils';
import CastsUtils from '../util/CastsUtils';

/**
 * The entity properties.
 * @type {{}}
 * @private
 */
const propertiesMap = new WeakMap();

/**
 * List of properties that was defined
 * @type {{}}
 * @private
 */

const definedMap = new WeakMap();

/**
 * List of properties that need be casts
 * @type {{}}
 * @private
 */
const castsMap = new WeakMap();

/**
 * List of properties that has read-only access
 * @type {{}}
 * @private
 */
const readOnlyMap = new WeakMap();

export default class BaseEntity {
    constructor({ properties, casts, readOnly }) {
        propertiesMap.set(this, {});
        definedMap.set(this, {});
        castsMap.set(this, casts || []);
        readOnlyMap.set(this, readOnly || []);

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
    setProperty(property, value) {
        // if property has read-only access and was initialized at least once
        if (this.hasProperty(property) && this.isPropertyReadOnly(property)) {
            throw new TypeError(`Property ${property} has read-only access`);
        }

        // if property name has bad native type
        if (!CheckUtils.isValid(property) || typeof property === 'object') {
            throw new TypeError(`Bad property name:${property}`);
        }

        // if property value has bad native type
        if (!CheckUtils.isValid(value)) {
            throw new TypeError(`Property ${property} has bad value ${value}`);
        }

        const castedValue = this.cast(property, value);

        // check if property value after cast has bad native type
        if (!CheckUtils.isValid(value)) {
            throw new TypeError(`Property ${property} has bad cast value ${castedValue}`);
        }

        // define to property
        this.define(property);

        // save property to propertiesMap
        const properties = propertiesMap.get(this);
        properties[property] = castedValue;

        return this;
    }

    /**
     * Alias for setProperty
     * @param property
     * @param value
     * @returns {BaseEntity}
     */
    addProperty(property, value) {
        return this.setProperty(property, value);
    }

    /**
     * Set the entity properties.
     * @param properties
     * @returns {BaseEntity}
     */
    setProperties(properties) {
        this.removeProperties();

        const has = Object.prototype.hasOwnProperty;

        Object.keys(properties).forEach((key) => {
            if (has.call(properties, key)) {
                this.setProperty(key, properties[key]);
            }
        });

        return this;
    }

    /**
     * Check if we has property
     * @param property
     * @protected
     */
    hasProperty(property) {
        return Object.prototype.hasOwnProperty.call(propertiesMap.get(this), property);
    }

    /**
     * Get an property from the entity.
     * @param property
     * @param def
     * @returns {*}
     */
    getProperty(property, def) {
        return Object.prototype.hasOwnProperty.call(propertiesMap.get(this), property)
            ? propertiesMap.get(this)[property]
            : def;
    }

    /**
     * Get all of the current properties on the entity.
     */
    getProperties() {
        return Object.assign({}, propertiesMap.get(this));
    }

    /**
     * Remove property
     * @param property
     * @returns {BaseEntity}
     */
    removeProperty(property) {
        const properties = propertiesMap.get(this);
        delete properties[property];
        this.removeDefine(property);
        return this;
    }

    /**
     * Remove properties
     * @param properties
     */
    removeProperties(properties) {
        const propertiesForRemove = properties || Object.keys(propertiesMap.get(this));

        propertiesForRemove.forEach((property) => {
            this.removeProperty(property);
        });
    }

    isPropertyReadOnly(property) {
        return readOnlyMap.get(this).indexOf(property) >= 0;
    }

    cast(property, value) {
        if (!castsMap.get(this)[property]) return value;

        return CastsUtils(castsMap.get(this)[property], value);
    }

    /**
     * Check if property has defined
     * @param property
     * @protected
     */
    hasDefine(property) {
        return Boolean(definedMap.get(this)[property]);
    }

    /**
     * Define property getter and setter
     * @param property
     * @protected
     */
    define(property) {
        if (this.hasDefine(property)) return;

        if (!CheckUtils.isValid(property) || typeof property === 'object') {
            throw new TypeError(`Bad property name:${property}`);
        }

        const self = this;

        // delete property
        delete this[property];

        const descriptors = {
            enumerable: true,
            configurable: true,
            get() {
                return self.getProperty(property);
            },
        };

        if (!this.isPropertyReadOnly(property)) {
            descriptors.set = value => self.setProperty(property, value);
        }

        const defined = definedMap.get(this);
        defined[property] = true;

        Object.defineProperty(this, property, descriptors);
    }

    /**
     * Remove property getter and setter
     * @param property
     * @protected
     */
    removeDefine(property) {
        if (!this.hasDefine(property)) return;

        const defined = definedMap.get(this);
        delete defined[property];

        delete this[property];
    }

    /**
     * Define properties getter and setter
     * @param properties
     * @param onlyGetter
     * @protected
     */
    defines(properties, onlyGetter) {
        properties.forEach((property) => {
            this.define(property, onlyGetter);
        });
    }

    /**
     * Get properties map
     */
    asPropertiesMap() {
        const properties = this.getProperties();
        const customProperties = {};

        const has = Object.prototype.hasOwnProperty;

        Object.keys(this).forEach((key) => {
            if (!has.call(this, key)) return;
            if (!CheckUtils.isValid(this[key])) return;

            customProperties[key] = this[key];
        });

        return Object.assign({}, customProperties, properties);
    }
}
