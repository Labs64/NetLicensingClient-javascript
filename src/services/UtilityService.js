/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services
 * @constructor
 */
NetLicensing .UtilityService = function () {
};

//static constants
Object.defineProperty(NetLicensing .UtilityService, 'ENDPOINT_PATH', {value: 'utility'});

/**
 * Returns all license types. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services#UtilityServices-LicenseTypeslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * array of available license types or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing .UtilityService.listLicenseTypes = function (context) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');

    context.setSecurityMode(NetLicensing .Context.BASIC_AUTHENTICATION);

    return NetLicensing .Service
        .getInstance()
        .list(context, NetLicensing .UtilityService.ENDPOINT_PATH + '/licenseTypes')
        .then(function (items) {
            var length = items.length;
            var licenseTypes = [];

            for (var i = 0; i < length; i++) {
                licenseTypes.push(items[i].property[0].value);
            }

            return licenseTypes;
        });
};

/**
 * Returns all license models. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services#UtilityServices-LicensingModelslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * array of available license models or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing .UtilityService.listLicensingModels = function (context) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');

    context.setSecurityMode(NetLicensing .Context.BASIC_AUTHENTICATION);

    return NetLicensing .Service
        .getInstance()
        .list(context, NetLicensing .UtilityService.ENDPOINT_PATH + '/licensingModels')
        .then(function (items) {
            var length = items.length;
            var licensingModels = [];

            for (var i = 0; i < length; i++) {
                licensingModels.push(items[i].property[0].value);
            }

            return licensingModels;
        });
};

/**
 * Returns all countries.
 *
 *  determines the vendor on whose behalf the call is performed
 * @param context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter
 *
 * collection of available countries or null/empty list if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing .UtilityService.listCountries = function (context, filter) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');

    context.setSecurityMode(NetLicensing .Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing .CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing .Service
        .getInstance()
        .list(context, NetLicensing .UtilityService.ENDPOINT_PATH + '/countries', queryParams, NetLicensing .Country);
};