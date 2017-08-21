/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

function ProductDiscount() {
    BaseEntity.apply(this, arguments);

    var self = this;

    Object.defineProperties(this, {
        totalPrice: {
            get: function () {
                return self.getProperty('totalPrice');
            },
            set: function (totalPrice) {
                totalPrice = parseInt(totalPrice);
                self.setProperty('totalPrice', totalPrice);
            }
        },
        currency: {
            get: function () {
                return self.getProperty('currency');
            },
            set: function (currency) {
                self.setProperty('currency', currency);
            }
        },
        amountFix: {
            get: function () {
                return self.getProperty('amountFix');
            },
            set: function (amountFix) {
                amountFix = parseFloat(amountFix);
                self.setProperty('amountFix', amountFix);
            }
        },
        amountPercent: {
            get: function () {
                return self.getProperty('amountPercent');
            },
            set: function (amountPercent) {
                amountPercent = parseInt(amountPercent);
                self.setProperty('amountPercent', amountPercent);
            }
        }
    });
}

ProductDiscount.prototype = Object.create(BaseEntity.prototype);

ProductDiscount.prototype.setTotalPrice = function (totalPrice) {
    totalPrice = parseInt(totalPrice);
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
    amountFix = parseFloat(amountFix);
    return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
};

ProductDiscount.prototype.getAmountFix = function (def) {
    return this.getProperty('amountFix', def);
};

ProductDiscount.prototype.setAmountPercent = function (amountPercent) {
    amountPercent = parseInt(amountPercent);
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