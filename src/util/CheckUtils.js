/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};


NetLicensing .CheckUtils = function () {

};

/**
 * Check if value is valid
 * @param value
 * @returns {boolean}
 */
NetLicensing .CheckUtils.isValid = function (value) {
    var valid = (value !== undefined && typeof value !== 'function');
    if (typeof value === 'number') valid = (isFinite(value) && !isNaN(value));
    return valid;
};

/**
 * Ensures that an object reference passed as a parameter to the calling method is not null.
 *
 * param to check
 * @param parameter
 *
 * name of the parameter
 * @param parameterName
 */
NetLicensing .CheckUtils.paramNotNull = function (parameter, parameterName) {
    if (!NetLicensing .CheckUtils.isValid(parameter)) throw new TypeError('Parameter ' + parameterName + ' has bad value ' + parameter);
    if (parameter === null) throw new TypeError('Parameter ' + parameterName + ' cannot be null')
};

NetLicensing .CheckUtils.paramNotEmpty = function (parameter, parameterName) {
    if (!NetLicensing .CheckUtils.isValid(parameter)) throw new TypeError('Parameter ' + parameterName + ' has bad value ' + parameter);
    if (!parameter) throw new TypeError('Parameter ' + parameterName + ' cannot be null or empty string')
};