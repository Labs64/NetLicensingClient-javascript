/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing = NetLicensing || {};

/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services
 *
 * @constructor
 */
NetLicensing.LicenseService = function () {
};

/**
 * Creates new license object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services#LicenseServices-Createlicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * parent licensee to which the new license is to be added
 * @param licenseeNumber string
 *
 *  license template that the license is created from
 * @param licenseTemplateNumber string
 *
 * For privileged logins specifies transaction for the license creation. For regular logins new
 * transaction always created implicitly, and the operation will be in a separate transaction.
 * Transaction is generated with the provided transactionNumber, or, if transactionNumber is null, with
 * auto-generated number.
 * @param transactionNumber null|string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param license NetLicensing.License
 *
 * return the newly created license object in promise
 * @returns {Promise}
 */
NetLicensing.LicenseService.create = function (context, licenseeNumber, licenseTemplateNumber, transactionNumber, license) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(license instanceof NetLicensing.License)) throw new TypeError('license must be an instance of NetLicensing.License');

    NetLicensing.CheckUtils.paramNotEmpty(licenseeNumber, 'licenseeNumber');
    NetLicensing.CheckUtils.paramNotEmpty(licenseTemplateNumber, 'licenseTemplateNumber');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    license.setProperty('licenseeNumber', licenseeNumber);
    license.setProperty('licenseTemplateNumber', licenseTemplateNumber);

    if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.Constants.License.ENDPOINT_PATH, license.asPropertiesMap(), NetLicensing.License);
};

/**
 * Gets license by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services#LicenseServices-Getlicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the license number
 * @param number string
 *
 * return the license in promise
 * @returns {Promise}
 */
NetLicensing.LicenseService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.Constants.License.ENDPOINT_PATH + '/' + number, {}, NetLicensing.License)
};

/**
 * Returns licenses of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services#LicenseServices-Licenseslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * return array of licenses (of all products) or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.LicenseService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.Constants.License.ENDPOINT_PATH, queryParams, NetLicensing.License);
};

/**
 * Updates license properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services#LicenseServices-Updatelicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * license number
 * @param number string
 *
 * transaction for the license update. Created implicitly if transactionNumber is null. In this case the
 * operation will be in a separate transaction.
 * @param transactionNumber string|null
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param license NetLicensing.License
 *
 * return updated license in promise.
 * @returns {Promise}
 */
NetLicensing.LicenseService.update = function (context, number, transactionNumber, license) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(license instanceof NetLicensing.License)) throw new TypeError('license must be an instance of NetLicensing.License');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.Constants.License.ENDPOINT_PATH + '/' + number, license.asPropertiesMap(), NetLicensing.License);
};

/**
 * Deletes license.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services#LicenseServices-Deletelicense
 *
 * When any license is deleted, corresponding transaction is created automatically.
 *
 *  determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * license number
 * @param number string
 *
 * if true, any entities that depend on the one being deleted will be deleted too
 * @param forceCascade boolean
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
NetLicensing.LicenseService.delete = function (context, number, forceCascade) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return NetLicensing.Service
        .getInstance()
        .delete(context, NetLicensing.Constants.License.ENDPOINT_PATH + '/' + number, queryParams);
};