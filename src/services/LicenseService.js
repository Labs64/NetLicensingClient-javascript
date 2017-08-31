/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services
 *
 * @constructor
 */
Nlic.LicenseService = function () {
};

//static constants
Object.defineProperty(Nlic.LicenseService, 'ENDPOINT_PATH', {value: 'license'});

/**
 * Creates new license object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Createlicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
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
 * @param license Nlic.License
 *
 * return the newly created license object in promise
 * @returns {Promise}
 */
Nlic.LicenseService.create = function (context, licenseeNumber, licenseTemplateNumber, transactionNumber, license) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(license instanceof Nlic.License)) throw new TypeError('license must be an instance of Nlic.License');

    Nlic.CheckUtils.paramNotEmpty(licenseeNumber, 'licenseeNumber');
    Nlic.CheckUtils.paramNotEmpty(licenseTemplateNumber, 'licenseTemplateNumber');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    license.setProperty('licenseeNumber', licenseeNumber);
    license.setProperty('licenseTemplateNumber', licenseTemplateNumber);

    if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.LicenseService.ENDPOINT_PATH, license.asPropertiesMap(), Nlic.License);
};

/**
 * Gets license by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Getlicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the license number
 * @param number string
 *
 * return the license in promise
 * @returns {Promise}
 */
Nlic.LicenseService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.LicenseService.ENDPOINT_PATH + '/' + number, {}, Nlic.License)
};

/**
 * Returns licenses of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Licenseslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * return array of licenses (of all products) or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.LicenseService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.LicenseService.ENDPOINT_PATH, queryParams, Nlic.License);
};

/**
 * Updates license properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Updatelicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * license number
 * @param number string
 *
 * transaction for the license update. Created implicitly if transactionNumber is null. In this case the
 * operation will be in a separate transaction.
 * @param transactionNumber string|null
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param license Nlic.License
 *
 * return updated license in promise.
 * @returns {Promise}
 */
Nlic.LicenseService.update = function (context, number, transactionNumber, license) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(license instanceof Nlic.License)) throw new TypeError('license must be an instance of Nlic.License');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.LicenseService.ENDPOINT_PATH + '/' + number, license.asPropertiesMap(), Nlic.License);
};

/**
 * Deletes license.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Deletelicense
 *
 * When any license is deleted, corresponding transaction is created automatically.
 *
 *  determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
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
Nlic.LicenseService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Nlic.Service
        .getInstance()
        .delete(context, Nlic.LicenseService.ENDPOINT_PATH + '/' + number, queryParams);
};