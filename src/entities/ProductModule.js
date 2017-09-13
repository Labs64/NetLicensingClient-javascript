/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

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
 * @constructor
 */

Netlicensing.ProductModule = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            active: 'boolean',
            name: 'string',
            licensingModel: 'string',
            maxCheckoutValidity: 'int',
            yellowThreshold: 'int',
            redThreshold: 'int',
            licenseTemplate: 'string',
            inUse: 'boolean'
        }
    });

    //define default entity properties
    this.__defines(['number', 'active', 'name', 'licensingModel', 'maxCheckoutValidity', 'yellowThreshold', 'redThreshold', 'licenseTemplate']);
    this.__define('inUse', true);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Netlicensing.ProductModule.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.ProductModule.prototype.constructor = Netlicensing.ProductModule;

Netlicensing.ProductModule.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.ProductModule.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.ProductModule.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Netlicensing.ProductModule.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Netlicensing.ProductModule.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.ProductModule.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.ProductModule.prototype.setLicensingModel = function (licensingModel) {
    return this.setProperty('licensingModel', licensingModel);
};

Netlicensing.ProductModule.prototype.getLicensingModel = function (def) {
    return this.getProperty('licensingModel', def);
};

Netlicensing.ProductModule.prototype.setMaxCheckoutValidity = function (maxCheckoutValidity) {
    return this.setProperty('maxCheckoutValidity', maxCheckoutValidity);
};

Netlicensing.ProductModule.prototype.getMaxCheckoutValidity = function (def) {
    return this.getProperty('maxCheckoutValidity', def);
};

Netlicensing.ProductModule.prototype.setYellowThreshold = function (yellowThreshold) {
    return this.setProperty('yellowThreshold', yellowThreshold);
};

Netlicensing.ProductModule.prototype.getYellowThreshold = function (def) {
    return this.getProperty('yellowThreshold', def);
};

Netlicensing.ProductModule.prototype.setRedThreshold = function (redThreshold) {
    return this.setProperty('redThreshold', redThreshold);
};

Netlicensing.ProductModule.prototype.getRedThreshold = function (def) {
    return this.getProperty('redThreshold', def);
};

Netlicensing.ProductModule.prototype.setLicenseTemplate = function (licenseTemplate) {
    return this.setProperty('licenseTemplate', licenseTemplate);
};

Netlicensing.ProductModule.prototype.getLicenseTemplate = function (def) {
    return this.getProperty('licenseTemplate', def);
};

Netlicensing.ProductModule.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};