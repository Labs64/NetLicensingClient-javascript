/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

Nlic.ProductDiscount = function () {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            totalPrice: 'int',
            amountFix: 'float',
            amountPercent: 'float'
        }
    });

    //define default entity properties
    this.__defines(['totalPrice', 'amountFix', 'amountPercent']);
};

Nlic.ProductDiscount.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.ProductDiscount.prototype.constructor = Nlic.ProductDiscount;

Nlic.ProductDiscount.prototype.setTotalPrice = function (totalPrice) {
    return this.setProperty('totalPrice', totalPrice);
};

Nlic.ProductDiscount.prototype.getTotalPrice = function (def) {
    return this.getProperty('totalPrice', def);
};

Nlic.ProductDiscount.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Nlic.ProductDiscount.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Nlic.ProductDiscount.prototype.setAmountFix = function (amountFix) {
    return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
};

Nlic.ProductDiscount.prototype.getAmountFix = function (def) {
    return this.getProperty('amountFix', def);
};

Nlic.ProductDiscount.prototype.setAmountPercent = function (amountPercent) {
    return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
};

Nlic.ProductDiscount.prototype.getAmountPercent = function (def) {
    return this.getProperty('amountPercent', def);
};

Nlic.ProductDiscount.prototype.toString = function () {
    var totalPrice = this.getTotalPrice();
    var currency = this.getCurrency();
    var amount = '';

    if (this.getAmountFix(null)) amount = this.getAmountFix();
    if (this.getAmountPercent(null)) amount = this.getAmountPercent() + '%';

    return totalPrice + ';' + currency + ';' + amount;
};

//make methods not changeable
Object.defineProperty(Nlic.ProductDiscount.prototype, 'toString', {writable: false, enumerable: false, configurable: false});