/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

NetLicensing .ProductDiscount = function () {
    NetLicensing .BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            totalPrice: 'float',
            currency: 'string',
            amountFix: 'float',
            amountPercent: 'int'
        }
    });

    //define default entity properties
    this.__defines(['totalPrice', 'currency', 'amountFix', 'amountPercent']);

    //make methods not changeable
    NetLicensing .DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

NetLicensing .ProductDiscount.prototype = Object.create(NetLicensing .BaseEntity.prototype);
NetLicensing .ProductDiscount.prototype.constructor = NetLicensing .ProductDiscount;

NetLicensing .ProductDiscount.prototype.setTotalPrice = function (totalPrice) {
    return this.setProperty('totalPrice', totalPrice);
};

NetLicensing .ProductDiscount.prototype.getTotalPrice = function (def) {
    return this.getProperty('totalPrice', def);
};

NetLicensing .ProductDiscount.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

NetLicensing .ProductDiscount.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

NetLicensing .ProductDiscount.prototype.setAmountFix = function (amountFix) {
    return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
};

NetLicensing .ProductDiscount.prototype.getAmountFix = function (def) {
    return this.getProperty('amountFix', def);
};

NetLicensing .ProductDiscount.prototype.setAmountPercent = function (amountPercent) {
    return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
};

NetLicensing .ProductDiscount.prototype.getAmountPercent = function (def) {
    return this.getProperty('amountPercent', def);
};

NetLicensing .ProductDiscount.prototype.toString = function () {
    var totalPrice = this.getTotalPrice();
    var currency = this.getCurrency();
    var amount = 0;

    if (this.getAmountFix(null)) amount = this.getAmountFix();
    if (this.getAmountPercent(null)) amount = this.getAmountPercent() + '%';

    return totalPrice + ';' + currency + ';' + amount;
};

//make methods not changeable
NetLicensing .DefineUtil.notChangeable(NetLicensing .ProductDiscount.prototype, ['constructor', 'toString']);

//make methods not enumerable
NetLicensing .DefineUtil.notEnumerable(NetLicensing .ProductDiscount.prototype, [
    'setTotalPrice',
    'getTotalPrice',
    'setCurrency',
    'getCurrency',
    'setAmountFix',
    'getAmountFix',
    'setAmountPercent',
    'getAmountPercent',
]);