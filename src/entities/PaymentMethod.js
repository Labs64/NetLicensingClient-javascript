/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */

Nlic.PaymentMethod = function PaymentMethod() {
    Nlic.BaseEntity.apply(this, arguments);

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

Nlic.PaymentMethod.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.PaymentMethod.prototype.constructor = Nlic.PaymentMethod;

Nlic.PaymentMethod.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.PaymentMethod.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.PaymentMethod.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.PaymentMethod.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.PaymentMethod.prototype.setPaypalSubject = function (paypalSubject) {
    return this.setProperty('paypal.subject', paypalSubject);
};

Nlic.PaymentMethod.prototype.getPaypalSubject = function (def) {
    return this.getProperty('paypal.subject', def);
};