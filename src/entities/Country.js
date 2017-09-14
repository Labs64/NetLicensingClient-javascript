/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * Country entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * @property code - Unique code of country.
 *
 * @property name - Unique name of country
 *
 * @property vatPercent - Country vat.
 *
 * @property isEu - is country in EU.
 */

Netlicensing.Country = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

Netlicensing.Country.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.Country.prototype.constructor = Netlicensing.Country;

Netlicensing.Country.prototype.setCode = function (code) {
    return this.setProperty('code', code);
};

Netlicensing.Country.prototype.getCode = function (def) {
    return this.getProperty('code', def);
};

Netlicensing.Country.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.Country.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.Country.prototype.setVatPercent = function (vat) {
    return this.setProperty('vatPercent', vat);
};

Netlicensing.Country.prototype.getVatPercent = function (def) {
    return this.getProperty('vatPercent', def);
};

Netlicensing.Country.prototype.setIsEu = function (isEu) {
    return this.setProperty('isEu', isEu);
};

Netlicensing.Country.prototype.getIsEu = function (def) {
    return this.getProperty('isEu', def);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.Country.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.Country.prototype, [
    'setCode',
    'getCode',
    'setName',
    'getName',
    'setVatPercent',
    'getVatPercent',
    'setIsEu',
    'getIsEu',
]);