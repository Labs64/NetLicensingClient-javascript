/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};


NetLicensing.DefineUtil = function () {

};

NetLicensing.DefineUtil.notChangeable = function (object, methods) {
    var noChangeable = {};

    methods = Array.isArray(methods) ? methods : [methods];
    var length = methods.length;

    for (var i = 0; i < length; i++) {
        noChangeable[methods[i]] = {writable: false, enumerable: false, configurable: false};
    }

    Object.defineProperties(object, noChangeable);
};

NetLicensing.DefineUtil.notEnumerable = function (object, methods) {
    var noChangeable = {};

    methods = Array.isArray(methods) ? methods : [methods];
    var length = methods.length;

    for (var i = 0; i < length; i++) {
        noChangeable[methods[i]] = {writable: true, enumerable: false, configurable: false};
    }

    Object.defineProperties(object, noChangeable);
};
