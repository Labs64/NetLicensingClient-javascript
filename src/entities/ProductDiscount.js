/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

Netlicensing.ProductDiscount = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

Netlicensing.ProductDiscount.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.ProductDiscount.prototype.constructor = Netlicensing.ProductDiscount;

Netlicensing.ProductDiscount.prototype.setTotalPrice = function (totalPrice) {
    return this.setProperty('totalPrice', totalPrice);
};

Netlicensing.ProductDiscount.prototype.getTotalPrice = function (def) {
    return this.getProperty('totalPrice', def);
};

Netlicensing.ProductDiscount.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Netlicensing.ProductDiscount.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Netlicensing.ProductDiscount.prototype.setAmountFix = function (amountFix) {
    return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
};

Netlicensing.ProductDiscount.prototype.getAmountFix = function (def) {
    return this.getProperty('amountFix', def);
};

Netlicensing.ProductDiscount.prototype.setAmountPercent = function (amountPercent) {
    return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
};

Netlicensing.ProductDiscount.prototype.getAmountPercent = function (def) {
    return this.getProperty('amountPercent', def);
};

Netlicensing.ProductDiscount.prototype.toString = function () {
    var totalPrice = this.getTotalPrice();
    var currency = this.getCurrency();
    var amount = 0;

    if (this.getAmountFix(null)) amount = this.getAmountFix();
    if (this.getAmountPercent(null)) amount = this.getAmountPercent() + '%';

    return totalPrice + ';' + currency + ';' + amount;
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.ProductDiscount.prototype, ['constructor', 'toString']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.ProductDiscount.prototype, [
    'setTotalPrice',
    'getTotalPrice',
    'setCurrency',
    'getCurrency',
    'setAmountFix',
    'getAmountFix',
    'setAmountPercent',
    'getAmountPercent',
]);