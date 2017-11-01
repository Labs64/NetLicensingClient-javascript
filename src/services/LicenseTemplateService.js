/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services
 *
 * @constructor
 */
NetLicensing.LicenseTemplateService = function () {
};

//static constants
Object.defineProperty(NetLicensing.LicenseTemplateService, 'ENDPOINT_PATH', {value: 'licensetemplate'});

/**
 * Creates new license template object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services#LicenseTemplateServices-Createlicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * parent product module to which the new license template is to be added
 * @param productModuleNumber
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param licenseTemplate NetLicensing.LicenseTemplate
 *
 * the newly created license template object in promise
 * @returns {Promise}
 */
NetLicensing.LicenseTemplateService.create = function (context, productModuleNumber, licenseTemplate) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(licenseTemplate instanceof NetLicensing.LicenseTemplate)) throw new TypeError('licenseTemplate must be an instance of NetLicensing.LicenseTemplate');

    NetLicensing.CheckUtils.paramNotEmpty(productModuleNumber, 'productModuleNumber');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    licenseTemplate.setProperty('productModuleNumber', productModuleNumber);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.LicenseTemplateService.ENDPOINT_PATH, licenseTemplate.asPropertiesMap(), NetLicensing.LicenseTemplate);
};

/**
 * Gets license template by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services#LicenseTemplateServices-Getlicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the license template number
 * @param number string
 *
 * return the license template object in promise
 * @returns {Promise}
 */
NetLicensing.LicenseTemplateService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, {}, NetLicensing.LicenseTemplate);
};

/**
 * Returns all license templates of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services#LicenseTemplateServices-Licensetemplateslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of license templates (of all products/modules) or null/empty list if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.LicenseTemplateService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.LicenseTemplateService.ENDPOINT_PATH, queryParams, NetLicensing.LicenseTemplate);
};

/**
 * Updates license template properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services#LicenseTemplateServices-Updatelicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * license template number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param licenseTemplate NetLicensing.LicenseTemplate
 *
 * updated license template in promise.
 * @returns {Promise}
 */
NetLicensing.LicenseTemplateService.update = function (context, number, licenseTemplate) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(licenseTemplate instanceof NetLicensing.LicenseTemplate)) throw new TypeError('licenseTemplate must be an instance of NetLicensing.LicenseTemplate');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, licenseTemplate.asPropertiesMap(), NetLicensing.LicenseTemplate);
};

/**
 * Deletes license template.See NetLicensingAPI JavaDoc for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services#LicenseTemplateServices-Deletelicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * license template number
 * @param number string
 *
 * if true, any entities that depend on the one being deleted will be deleted too
 * @param forceCascade boolean
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
NetLicensing.LicenseTemplateService.delete = function (context, number, forceCascade) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return NetLicensing.Service
        .getInstance()
        .delete(context, NetLicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, queryParams);
};