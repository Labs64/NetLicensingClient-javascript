/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

function ProductDiscount() {
    BaseEntity.apply(this, arguments);

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
}

ProductDiscount.prototype = Object.create(BaseEntity.prototype);
ProductDiscount.prototype.constructor = ProductDiscount;

ProductDiscount.prototype.setTotalPrice = function (totalPrice) {
    return this.setProperty('totalPrice', totalPrice);
};

ProductDiscount.prototype.getTotalPrice = function (def) {
    return this.getProperty('totalPrice', def);
};

ProductDiscount.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

ProductDiscount.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

ProductDiscount.prototype.setAmountFix = function (amountFix) {
    return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
};

ProductDiscount.prototype.getAmountFix = function (def) {
    return this.getProperty('amountFix', def);
};

ProductDiscount.prototype.setAmountPercent = function (amountPercent) {
    return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
};

ProductDiscount.prototype.getAmountPercent = function (def) {
    return this.getProperty('amountPercent', def);
};

ProductDiscount.prototype.toString = function () {
    var totalPrice = this.getTotalPrice();
    var currency = this.getCurrency();
    var amount = '';

    if (this.getAmountFix(null)) amount = this.getAmountFix();
    if (this.getAmountPercent(null)) amount = this.getAmountPercent();

    return totalPrice + ';' + currency + ';' + amount;
};