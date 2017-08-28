/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * License template entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the license template. Vendor can
 * assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the
 * first license from this license template.
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
 * If set to true, this license template is not shown in NetLicensing Shop as offered for purchase.
 * @property boolean hidden
 *
 * If set to true, licenses from this license template are not visible to the end customer, but
 * participate in validation.
 * @property boolean hideLicenses
 *
 * Mandatory for 'TIMEVOLUME' license type.
 * @property integer timeVolume
 *
 * Mandatory for 'FLOATING' license type.
 * @property integer maxSessions
 *
 * Mandatory for 'QUANTITY' license type.
 * @property integer quantity
 *
 * @constructor
 */

Nlic.LicenseTemplate = function () {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            price: 'double',
            active: 'boolean',
            inUse: 'boolean',
            automatic: 'boolean',
            hidden: 'boolean',
            hideLicenses: 'boolean',
            timeVolume: 'int',
            maxSessions: 'int',
            quantity: 'int'
        }
    });
    //define default entity properties
    this.__defines(['number', 'active', 'name', 'licenseType', 'price', 'currency', 'automatic', 'hidden', 'hideLicenses', 'timeVolume', 'maxSessions', 'quantity']);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.LicenseTemplate.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.LicenseTemplate.prototype.constructor = Nlic.LicenseTemplate;

Nlic.LicenseTemplate.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.LicenseTemplate.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.LicenseTemplate.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.LicenseTemplate.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.LicenseTemplate.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Nlic.LicenseTemplate.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Nlic.LicenseTemplate.prototype.setLicenseType = function (licenseType) {
    return this.setProperty('licenseType', licenseType);
};

Nlic.LicenseTemplate.prototype.getLicenseType = function (def) {
    return this.getProperty('licenseType', def);
};

Nlic.LicenseTemplate.prototype.setPrice = function (price) {
    return this.setProperty('price', price);
};

Nlic.LicenseTemplate.prototype.getPrice = function (def) {
    return this.getProperty('price', def);
};

Nlic.LicenseTemplate.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Nlic.LicenseTemplate.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Nlic.LicenseTemplate.prototype.setAutomatic = function (automatic) {
    return this.setProperty('automatic', automatic);
};

Nlic.LicenseTemplate.prototype.getAutomatic = function (def) {
    return this.getProperty('automatic', def);
};

Nlic.LicenseTemplate.prototype.setHidden = function (hidden) {
    return this.setProperty('hidden', hidden);
};

Nlic.LicenseTemplate.prototype.getHidden = function (def) {
    return this.getProperty('hidden', def);
};

Nlic.LicenseTemplate.prototype.setHideLicenses = function (hideLicenses) {
    return this.setProperty('hideLicenses', hideLicenses);
};

Nlic.LicenseTemplate.prototype.getHideLicenses = function (def) {
    return this.getProperty('hideLicenses', def);
};

Nlic.LicenseTemplate.prototype.setTimeVolume = function (timeVolume) {
    return this.setProperty('timeVolume', timeVolume);
};

Nlic.LicenseTemplate.prototype.getTimeVolume = function (def) {
    return this.getProperty('timeVolume', def);
};

Nlic.LicenseTemplate.prototype.setMaxSessions = function (maxSessions) {
    return this.setProperty('maxSessions', maxSessions);
};

Nlic.LicenseTemplate.prototype.getMaxSessions = function (def) {
    return this.getProperty('maxSessions', def);
};

Nlic.LicenseTemplate.prototype.setQuantity = function (quantity) {
    return this.setProperty('quantity', quantity);
};

Nlic.LicenseTemplate.prototype.getQuantity = function (def) {
    return this.getProperty('quantity', def);
};