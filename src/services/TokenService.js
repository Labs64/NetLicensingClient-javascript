/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Token+Services
 *
 * @constructor
 */
Netlicensing.TokenService = function () {
};

//static constants
Object.defineProperty(Netlicensing.TokenService, 'ENDPOINT_PATH', {value: 'token'});

/**
 * Creates new token.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Token+Services#TokenServices-Createtoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param token Netlicensing.Token
 *
 * return created token in promise
 * @returns {Promise}
 */
Netlicensing.TokenService.create = function (context, token) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(token instanceof Netlicensing.Token)) throw new TypeError('token must be an instance of Netlicensing.Token');

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.TokenService.ENDPOINT_PATH, token.asPropertiesMap(), Netlicensing.Token);
};

/**
 * Gets token by its number..See NetLicensingAPI for details:
 * https://www.labs64.de/conluence/display/NetlicensingPUB/Token+Services#TokenServices-Gettoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the token number
 * @param number
 *
 * return the token in promise
 * @returns {Promise}
 */
Netlicensing.TokenService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.TokenService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.Token);
};

/**
 * Returns tokens of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Token+Services#TokenServices-Tokenslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of token entities or empty array if nothing found.
 * @return array
 */
Netlicensing.TokenService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.TokenService.ENDPOINT_PATH, queryParams, Netlicensing.Token);
};

/**
 * Delete token by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Token+Services#TokenServices-Deletetoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 *  the token number
 * @param number string
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
Netlicensing.TokenService.delete = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    return Netlicensing.Service
        .getInstance()
        .delete(context, Netlicensing.TokenService.ENDPOINT_PATH + '/' + number);
};