/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import BaseEntity from './BaseEntity';

export default class ProductDiscount extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
                totalPrice: 'float',
                currency: 'string',
                amountFix: 'float',
                amountPercent: 'int',
            },
        });

        // define default entity properties
        this.defines(['totalPrice', 'currency', 'amountFix', 'amountPercent']);
    }

    setTotalPrice(totalPrice) {
        return this.setProperty('totalPrice', totalPrice);
    }

    getTotalPrice(def) {
        return this.getProperty('totalPrice', def);
    }

    setCurrency(currency) {
        return this.setProperty('currency', currency);
    }

    getCurrency(def) {
        return this.getProperty('currency', def);
    }

    setAmountFix(amountFix) {
        return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
    }

    getAmountFix(def) {
        return this.getProperty('amountFix', def);
    }

    setAmountPercent(amountPercent) {
        return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
    }

    getAmountPercent(def) {
        return this.getProperty('amountPercent', def);
    }

    toString() {
        const totalPrice = this.getTotalPrice();
        const currency = this.getCurrency();
        let amount = 0;

        if (this.getAmountFix(null)) amount = this.getAmountFix();
        if (this.getAmountPercent(null)) amount = `${this.getAmountPercent()}%`;

        return `${totalPrice};${currency};${amount}`;
    }
}
