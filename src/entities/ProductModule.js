/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

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

NetLicensing.ProductModule = function () {
    NetLicensing.BaseEntity.apply(this, arguments);

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
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.LicensingModel.Subscription.NAME instead.
 */
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_SUBSCRIPTION', {value: 'Subscription'});
/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.LicensingModel.TryAndBuy.NAME instead.
 */
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_TRY_AND_BUY', {value: 'TryAndBuy'});
/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.LicensingModel.Rental.NAME instead.
 */
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_RENTAL', {value: 'Rental'});
/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.LicensingModel.Floating.NAME instead.
 */
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_FLOATING', {value: 'Floating'});
/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.LicensingModel.MultiFeature.NAME instead.
 */
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_MULTI_FEATURE', {value: 'MultiFeature'});
/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.LicensingModel.PayPerUse.NAME instead.
 */
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_PAY_PER_USE', {value: 'PayPerUse'});
/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.LicensingModel.PRICING_TABLE.NAME instead.
 */
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_PRICING_TABLE', {value: 'PricingTable'});
/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.LicensingModel.Quota.NAME instead.
 */
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_QUOTA', {value: 'Quota'});


NetLicensing.ProductModule.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.ProductModule.prototype.constructor = NetLicensing.ProductModule;

NetLicensing.ProductModule.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing.ProductModule.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.ProductModule.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

NetLicensing.ProductModule.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

NetLicensing.ProductModule.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing.ProductModule.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing.ProductModule.prototype.setLicensingModel = function (licensingModel) {
    return this.setProperty('licensingModel', licensingModel);
};

NetLicensing.ProductModule.prototype.getLicensingModel = function (def) {
    return this.getProperty('licensingModel', def);
};

NetLicensing.ProductModule.prototype.setMaxCheckoutValidity = function (maxCheckoutValidity) {
    return this.setProperty('maxCheckoutValidity', maxCheckoutValidity);
};

NetLicensing.ProductModule.prototype.getMaxCheckoutValidity = function (def) {
    return this.getProperty('maxCheckoutValidity', def);
};

NetLicensing.ProductModule.prototype.setYellowThreshold = function (yellowThreshold) {
    return this.setProperty('yellowThreshold', yellowThreshold);
};

NetLicensing.ProductModule.prototype.getYellowThreshold = function (def) {
    return this.getProperty('yellowThreshold', def);
};

NetLicensing.ProductModule.prototype.setRedThreshold = function (redThreshold) {
    return this.setProperty('redThreshold', redThreshold);
};

NetLicensing.ProductModule.prototype.getRedThreshold = function (def) {
    return this.getProperty('redThreshold', def);
};

NetLicensing.ProductModule.prototype.setLicenseTemplate = function (licenseTemplate) {
    return this.setProperty('licenseTemplate', licenseTemplate);
};

NetLicensing.ProductModule.prototype.getLicenseTemplate = function (def) {
    return this.getProperty('licenseTemplate', def);
};

NetLicensing.ProductModule.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.ProductModule.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.ProductModule.prototype, [
    'setNumber',
    'getNumber',
    'setActive',
    'getActive',
    'setName',
    'getName',
    'setLicensingModel',
    'getLicensingModel',
    'setMaxCheckoutValidity',
    'getMaxCheckoutValidity',
    'setYellowThreshold',
    'getYellowThreshold',
    'setRedThreshold',
    'getRedThreshold',
    'setLicenseTemplate',
    'getLicenseTemplate',
    'getInUse',
]);