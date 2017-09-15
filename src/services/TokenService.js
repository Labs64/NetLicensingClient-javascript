/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services
 *
 * @constructor
 */
NetLicensing .TokenService = function () {
};

//static constants
Object.defineProperty(NetLicensing .TokenService, 'ENDPOINT_PATH', {value: 'token'});

/**
 * Creates new token.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Createtoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param token NetLicensing .Token
 *
 * return created token in promise
 * @returns {Promise}
 */
NetLicensing .TokenService.create = function (context, token) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');
    if (!(token instanceof NetLicensing .Token)) throw new TypeError('token must be an instance of NetLicensing .Token');

    return NetLicensing .Service
        .getInstance()
        .post(context, NetLicensing .TokenService.ENDPOINT_PATH, token.asPropertiesMap(), NetLicensing .Token);
};

/**
 * Gets token by its number..See NetLicensingAPI for details:
 * https://www.labs64.de/conluence/display/NetLicensing PUB/Token+Services#TokenServices-Gettoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * the token number
 * @param number
 *
 * return the token in promise
 * @returns {Promise}
 */
NetLicensing .TokenService.get = function (context, number) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');

    NetLicensing .CheckUtils.paramNotEmpty(number, 'number');

    return NetLicensing .Service
        .getInstance()
        .get(context, NetLicensing .TokenService.ENDPOINT_PATH + '/' + number, {}, NetLicensing .Token);
};

/**
 * Returns tokens of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Tokenslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of token entities or empty array if nothing found.
 * @return array
 */
NetLicensing .TokenService.list = function (context, filter) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');

    var queryParams = {};

    if (filter) {
        if (!NetLicensing .CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing .Service
        .getInstance()
        .list(context, NetLicensing .TokenService.ENDPOINT_PATH, queryParams, NetLicensing .Token);
};

/**
 * Delete token by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Deletetoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 *  the token number
 * @param number string
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
NetLicensing .TokenService.delete = function (context, number) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');

    NetLicensing .CheckUtils.paramNotEmpty(number, 'number');

    return NetLicensing .Service
        .getInstance()
        .delete(context, NetLicensing .TokenService.ENDPOINT_PATH + '/' + number);
};