/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

function BaseEntity(properties) {
    /**
     * The entity properties.
     * @type {{}}
     * @private
     */
    var __properties = {};

    /**
     * Set a given property on the entity.
     * @param property
     * @param value
     * @returns {BaseEntity}
     */
    this.setProperty = function (property, value) {
        if (!CheckUtils.isValid(property)) throw 'Bad property name:' + property;
        if (!CheckUtils.isValid(value)) throw 'Property ' + property + ' has wrong value' + value;
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
        return this;
    };

    this.setProperties(properties);
}

BaseEntity.prototype.asPropertiesMap = function () {
    return this.getProperties();
};