/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

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

NetLicensing.Country = function () {
    NetLicensing.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            code: 'string',
            name: 'string',
            vatPercent: 'int',
            isEu: 'boolean',
        }
    });

    //define default entity properties
    this.__defines(['code', 'name', 'vatPercent', 'isEu']);

    //make methods not changeable
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

NetLicensing.Country.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.Country.prototype.constructor = NetLicensing.Country;

NetLicensing.Country.prototype.setCode = function (code) {
    return this.setProperty('code', code);
};

NetLicensing.Country.prototype.getCode = function (def) {
    return this.getProperty('code', def);
};

NetLicensing.Country.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing.Country.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing.Country.prototype.setVatPercent = function (vat) {
    return this.setProperty('vatPercent', vat);
};

NetLicensing.Country.prototype.getVatPercent = function (def) {
    return this.getProperty('vatPercent', def);
};

NetLicensing.Country.prototype.setIsEu = function (isEu) {
    return this.setProperty('isEu', isEu);
};

NetLicensing.Country.prototype.getIsEu = function (def) {
    return this.getProperty('isEu', def);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.Country.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.Country.prototype, [
    'setCode',
    'getCode',
    'setName',
    'getName',
    'setVatPercent',
    'getVatPercent',
    'setIsEu',
    'getIsEu',
]);