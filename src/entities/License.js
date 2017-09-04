/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

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
 *
 * @constructor
 */

Nlic.License = function () {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
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

    //define default entity properties
    this.__defines(['number', 'active', 'name', 'hidden', 'parentfeature', 'timeVolume', 'startDate']);
    this.__defines(['inUse', 'currency', 'price'], true);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.License.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.License.prototype.constructor = Nlic.License;

Nlic.License.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.License.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.License.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.License.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.License.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Nlic.License.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Nlic.License.prototype.setHidden = function (hidden) {
    return this.setProperty('hidden', hidden);
};

Nlic.License.prototype.getHidden = function (def) {
    return this.getProperty('hidden', def);
};

Nlic.License.prototype.setParentfeature = function (parentfeature) {
    return this.setProperty('parentfeature', parentfeature);
};

Nlic.License.prototype.getParentfeature = function (def) {
    return this.getProperty('parentfeature', def);
};

Nlic.License.prototype.setTimeVolume = function (timeVolume) {
    return this.setProperty('timeVolume', timeVolume);
};

Nlic.License.prototype.getTimeVolume = function (def) {
    return this.getProperty('timeVolume', def);
};

Nlic.License.prototype.setStartDate = function (startDate) {
    return this.setProperty('startDate', startDate);
};

Nlic.License.prototype.getStartDate = function (def) {
    return this.getProperty('startDate', def);
};

Nlic.License.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

Nlic.License.prototype.getPrice = function (def) {
    return this.getProperty('price', def);
};

Nlic.License.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};