/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services
 *
 * @constructor
 */
Netlicensing.LicenseTemplateService = function () {
};

//static constants
Object.defineProperty(Netlicensing.LicenseTemplateService, 'ENDPOINT_PATH', {value: 'licensetemplate'});

/**
 * Creates new license template object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services#LicenseTemplateServices-Createlicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * parent product module to which the new license template is to be added
 * @param productModuleNumber
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param licenseTemplate Netlicensing.LicenseTemplate
 *
 * the newly created license template object in promise
 * @returns {Promise}
 */
Netlicensing.LicenseTemplateService.create = function (context, productModuleNumber, licenseTemplate) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(licenseTemplate instanceof Netlicensing.LicenseTemplate)) throw new TypeError('licenseTemplate must be an instance of Netlicensing.LicenseTemplate');

    Netlicensing.CheckUtils.paramNotEmpty(productModuleNumber, 'productModuleNumber');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    licenseTemplate.setProperty('productModuleNumber', productModuleNumber);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseTemplateService.ENDPOINT_PATH, licenseTemplate.asPropertiesMap(), Netlicensing.LicenseTemplate);
};

/**
 * Gets license template by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services#LicenseTemplateServices-Getlicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the license template number
 * @param number string
 *
 * return the license template object in promise
 * @returns {Promise}
 */
Netlicensing.LicenseTemplateService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.LicenseTemplate);
};

/**
 * Returns all license templates of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services#LicenseTemplateServices-Licensetemplateslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of license templates (of all products/modules) or null/empty list if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.LicenseTemplateService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.LicenseTemplateService.ENDPOINT_PATH, queryParams, Netlicensing.LicenseTemplate);
};

/**
 * Updates license template properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services#LicenseTemplateServices-Updatelicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * license template number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param licenseTemplate Netlicensing.LicenseTemplate
 *
 * updated license template in promise.
 * @returns {Promise}
 */
Netlicensing.LicenseTemplateService.update = function (context, number, licenseTemplate) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(licenseTemplate instanceof Netlicensing.LicenseTemplate)) throw new TypeError('licenseTemplate must be an instance of Netlicensing.LicenseTemplate');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, licenseTemplate.asPropertiesMap(), Netlicensing.LicenseTemplate);
};

/**
 * Deletes license template.See NetLicensingAPI JavaDoc for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services#LicenseTemplateServices-Deletelicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
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
Netlicensing.LicenseTemplateService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Netlicensing.Service
        .getInstance()
        .delete(context, Netlicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, queryParams);
};