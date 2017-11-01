/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};


NetLicensing.ValidationResults = function () {

    var __validators = {};
    var __ttl;

    this.getValidators = function () {
        return Object.assign({}, __validators);
    };

    this.setProductModuleValidation = function (productModuleNumber, productModuleValidation) {
        if (!NetLicensing.CheckUtils.isValid(productModuleNumber) || typeof productModuleNumber === 'object')  throw new TypeError('Bad productModuleNumber:' + productModuleNumber);

        __validators[productModuleNumber] = productModuleValidation;

        return this;
    };

    this.getProductModuleValidation = function (productModuleNumber) {
        if (!NetLicensing.CheckUtils.isValid(productModuleNumber) || typeof productModuleNumber === 'object')  throw new TypeError('Bad productModuleNumber:' + productModuleNumber);

        return __validators[productModuleNumber];
    };

    this.setTtl = function (ttl) {
        if (!NetLicensing.CheckUtils.isValid(ttl) || typeof ttl === 'object')  throw new TypeError('Bad ttl:' + ttl);
        __ttl = new Date(String(ttl));
        return this;
    };

    this.getTtl = function () {
        return (__ttl) ? new Date(__ttl) : undefined;
    };
};

NetLicensing.ValidationResults.prototype.toString = function () {
    var data = 'ValidationResult [';
    var validators = this.getValidators();

    for (var productModuleNumber in validators) {
        data += 'ProductModule<' + productModuleNumber + '>';
        if (!validators.hasOwnProperty(productModuleNumber))continue;
        data += JSON.stringify(validators[productModuleNumber]);
    }

    data += ']';
    return data;
};