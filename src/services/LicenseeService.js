/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services
 *
 * @constructor
 */

NetLicensing .LicenseeService = function () {

};

//static constants
Object.defineProperties(NetLicensing .LicenseeService, {
    'ENDPOINT_PATH': {value: 'licensee'},
    'ENDPOINT_PATH_VALIDATE': {value: 'validate'},
    'ENDPOINT_PATH_TRANSFER': {value: 'transfer'},
});

/**
 * Creates new licensee object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Createlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * parent product to which the new licensee is to be added
 * @param productNumber string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param licensee NetLicensing .Licensee
 *
 * return the newly created licensee object in promise
 * @returns {Promise}
 */
NetLicensing .LicenseeService.create = function (context, productNumber, licensee) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');
    if (!(licensee instanceof NetLicensing .Licensee)) throw new TypeError('licensee must be an instance of NetLicensing .Licensee');

    NetLicensing .CheckUtils.paramNotEmpty(productNumber, 'productNumber');

    context.setSecurityMode(NetLicensing .Context.BASIC_AUTHENTICATION);

    licensee.setProperty('productNumber', productNumber);

    return NetLicensing .Service
        .getInstance()
        .post(context, NetLicensing .LicenseeService.ENDPOINT_PATH, licensee.asPropertiesMap(), NetLicensing .Licensee);
};

/**
 * Gets licensee by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Getlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * the licensee number
 * @param number string
 *
 * return the licensee in promise
 * @returns {Promise}
 */
NetLicensing .LicenseeService.get = function (context, number) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');

    NetLicensing .CheckUtils.paramNotEmpty(number, 'number');

    return NetLicensing .Service
        .getInstance()
        .get(context, NetLicensing .LicenseeService.ENDPOINT_PATH + '/' + number, {}, NetLicensing .Licensee);
};

/**
 * Returns all licensees of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Licenseeslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of licensees (of all products) or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing .LicenseeService.list = function (context, filter) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');

    var queryParams = {};

    if (filter) {
        if (!NetLicensing .CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing .Service
        .getInstance()
        .list(context, NetLicensing .LicenseeService.ENDPOINT_PATH, queryParams, NetLicensing .Licensee);
};

/**
 * Updates licensee properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Updatelicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * licensee number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param licensee NetLicensing .Licensee
 *
 * return updated licensee in promise.
 * @returns {Promise}
 */
NetLicensing .LicenseeService.update = function (context, number, licensee) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');
    if (!(licensee instanceof NetLicensing .Licensee)) throw new TypeError('licensee must be an instance of NetLicensing .Licensee');

    NetLicensing .CheckUtils.paramNotEmpty(number, 'number');

    return NetLicensing .Service
        .getInstance()
        .post(context, NetLicensing .LicenseeService.ENDPOINT_PATH + '/' + number, licensee.asPropertiesMap(), NetLicensing .Licensee);
};

/**
 * Deletes licensee.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Deletelicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * licensee number
 * @param number string
 *
 * if true, any entities that depend on the one being deleted will be deleted too
 * @param forceCascade boolean
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
NetLicensing .LicenseeService.delete = function (context, number, forceCascade) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');

    NetLicensing .CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return NetLicensing .Service
        .getInstance()
        .delete(context, NetLicensing .LicenseeService.ENDPOINT_PATH + '/' + number, queryParams);
};

/**
 * Validates active licenses of the licensee. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Validatelicensee
 *
 * @param context NetLicensing .Context
 *
 * licensee number
 * @param number string
 *
 * optional validation parameters. See ValidationParameters and licensing model documentation for
 * details.
 * @param validationParameters NetLicensing .ValidationParameters.
 *
 * @returns {Promise}
 */
NetLicensing .LicenseeService.validate = function (context, number, validationParameters) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');
    if (!(validationParameters instanceof NetLicensing .ValidationParameters)) throw new TypeError('validationParameters must be an instance of NetLicensing .ValidationParameters');

    NetLicensing .CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {};

    if (validationParameters.getProductNumber()) {
        queryParams.productNumber = validationParameters.getProductNumber();
    }

    if (validationParameters.getLicenseeName()) {
        queryParams.licenseeName = validationParameters.getLicenseeName();
    }

    if (validationParameters.getLicenseeSecret()) {
        queryParams.licenseeSecret = validationParameters.getLicenseeSecret();
    }

    var pmIndex = 0;
    var parameters = validationParameters.getParameters();

    for (var productModuleName in parameters) {
        queryParams['productModuleNumber' + pmIndex] = productModuleName;
        if (!parameters.hasOwnProperty(productModuleName)) continue;

        var param = parameters[productModuleName];
        for (var key in param) {
            if (!param.hasOwnProperty(key)) continue;
            queryParams[key + pmIndex] = param[key];
        }
        pmIndex++;
    }

    return NetLicensing .Service
        .getInstance()
        .post(context, NetLicensing .LicenseeService.ENDPOINT_PATH + '/' + number + '/' + NetLicensing .LicenseeService.ENDPOINT_PATH_VALIDATE, queryParams)
        .then(function (item) {
            var data = {};
            var validationResults = new NetLicensing .ValidationResults();

            var length = item.property.length;

            for (var i = 0; i < length; i++) {
                var name = item.property[i].name;
                var value;
                try {
                    value = JSON.parse(item.property[i].value);
                } catch (e) {
                    value = item.property[i].value;
                }
                data[name] = value;
            }

            validationResults
                .setProductModuleValidation(data.productModuleNumber, data)
                .setTtl(NetLicensing .Service.getInstance().getLastHttpRequestInfo().response.ttl);

            return validationResults;
        });
};

/**
 * Transfer licenses between licensees.
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Transferlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing .Context
 *
 * the number of the licensee receiving licenses
 * @param number string
 *
 * the number of the licensee delivering licenses
 * @param sourceLicenseeNumber string
 *
 * @returns {Promise}
 */
NetLicensing .LicenseeService.transfer = function (context, number, sourceLicenseeNumber) {
    if (!(context instanceof NetLicensing .Context)) throw new TypeError('context must be an instance of NetLicensing .Context');

    NetLicensing .CheckUtils.paramNotEmpty(number, 'number');
    NetLicensing .CheckUtils.paramNotEmpty(sourceLicenseeNumber, 'sourceLicenseeNumber');

    var queryParams = {sourceLicenseeNumber: sourceLicenseeNumber};

    return NetLicensing .Service
        .getInstance()
        .post(context, NetLicensing .LicenseeService.ENDPOINT_PATH + '/' + number + '/' + NetLicensing .LicenseeService.ENDPOINT_PATH_TRANSFER, queryParams);
};