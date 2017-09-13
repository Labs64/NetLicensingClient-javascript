/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */

Netlicensing.PaymentMethod = function PaymentMethod() {
    Netlicensing.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            active: 'boolean',
            'paypal.subject': 'string',
        }
    });

    //define default entity properties
    this.__defines(['number', 'active', 'paypal.subject']);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Netlicensing.PaymentMethod.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.PaymentMethod.prototype.constructor = Netlicensing.PaymentMethod;

Netlicensing.PaymentMethod.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.PaymentMethod.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.PaymentMethod.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Netlicensing.PaymentMethod.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Netlicensing.PaymentMethod.prototype.setPaypalSubject = function (paypalSubject) {
    return this.setProperty('paypal.subject', paypalSubject);
};

Netlicensing.PaymentMethod.prototype.getPaypalSubject = function (def) {
    return this.getProperty('paypal.subject', def);
};