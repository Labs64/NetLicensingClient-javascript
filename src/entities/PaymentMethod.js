/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */

function PaymentMethod() {
    BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            active: 'boolean'
        }
    });

    //define default entity properties
    this.__defines(['number', 'active', 'paypal.subject']);
}

PaymentMethod.prototype = Object.create(BaseEntity.prototype);
PaymentMethod.prototype.constructor = PaymentMethod;

PaymentMethod.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

PaymentMethod.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

PaymentMethod.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

PaymentMethod.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

PaymentMethod.prototype.setPaypalSubject = function (paypalSubject) {
    return this.setProperty('paypal.subject', paypalSubject);
};

PaymentMethod.prototype.getPaypalSubject = function (def) {
    return this.getProperty('paypal.subject', def);
};