/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Utility+Services
 * @constructor
 */
Netlicensing.UtilityService = function () {
};

//static constants
Object.defineProperty(Netlicensing.UtilityService, 'ENDPOINT_PATH', {value: 'utility'});

/**
 * Returns all license types. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Utility+Services#UtilityServices-LicenseTypeslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * array of available license types or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.UtilityService.listLicenseTypes = function (context) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.UtilityService.ENDPOINT_PATH + '/licenseTypes')
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
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Utility+Services#UtilityServices-LicensingModelslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * array of available license models or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.UtilityService.listLicensingModels = function (context) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.UtilityService.ENDPOINT_PATH + '/licensingModels')
        .then(function (items) {
            var length = items.length;
            var licensingModels = [];

            for (var i = 0; i < length; i++) {
                licensingModels.push(items[i].property[0].value);
            }

            return licensingModels;
        });
};