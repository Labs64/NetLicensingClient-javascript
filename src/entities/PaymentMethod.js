/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */

NetLicensing.PaymentMethod = function PaymentMethod() {
    NetLicensing.BaseEntity.apply(this, arguments);

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
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

NetLicensing.PaymentMethod.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.PaymentMethod.prototype.constructor = NetLicensing.PaymentMethod;

NetLicensing.PaymentMethod.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing.PaymentMethod.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.PaymentMethod.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

NetLicensing.PaymentMethod.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

NetLicensing.PaymentMethod.prototype.setPaypalSubject = function (paypalSubject) {
    return this.setProperty('paypal.subject', paypalSubject);
};

NetLicensing.PaymentMethod.prototype.getPaypalSubject = function (def) {
    return this.getProperty('paypal.subject', def);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.PaymentMethod.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.PaymentMethod.prototype, [
    'setNumber',
    'getNumber',
    'setActive',
    'getActive',
    'setPaypalSubject',
    'getPaypalSubject',
]);