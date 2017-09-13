/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services
 *
 * @constructor
 */

Netlicensing.LicenseeService = function () {

};

//static constants
Object.defineProperties(Netlicensing.LicenseeService, {
    'ENDPOINT_PATH': {value: 'licensee'},
    'ENDPOINT_PATH_VALIDATE': {value: 'validate'},
    'ENDPOINT_PATH_TRANSFER': {value: 'transfer'},
});

/**
 * Creates new licensee object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Createlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * parent product to which the new licensee is to be added
 * @param productNumber string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param licensee Netlicensing.Licensee
 *
 * return the newly created licensee object in promise
 * @returns {Promise}
 */
Netlicensing.LicenseeService.create = function (context, productNumber, licensee) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(licensee instanceof Netlicensing.Licensee)) throw new TypeError('licensee must be an instance of Netlicensing.Licensee');

    Netlicensing.CheckUtils.paramNotEmpty(productNumber, 'productNumber');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    licensee.setProperty('productNumber', productNumber);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseeService.ENDPOINT_PATH, licensee.asPropertiesMap(), Netlicensing.Licensee);
};

/**
 * Gets licensee by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Getlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the licensee number
 * @param number string
 *
 * return the licensee in promise
 * @returns {Promise}
 */
Netlicensing.LicenseeService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.LicenseeService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.Licensee);
};

/**
 * Returns all licensees of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Licenseeslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of licensees (of all products) or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.LicenseeService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.LicenseeService.ENDPOINT_PATH, queryParams, Netlicensing.Licensee);
};

/**
 * Updates licensee properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Updatelicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * licensee number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param licensee Netlicensing.Licensee
 *
 * return updated licensee in promise.
 * @returns {Promise}
 */
Netlicensing.LicenseeService.update = function (context, number, licensee) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(licensee instanceof Netlicensing.Licensee)) throw new TypeError('licensee must be an instance of Netlicensing.Licensee');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseeService.ENDPOINT_PATH + '/' + number, licensee.asPropertiesMap(), Netlicensing.Licensee);
};

/**
 * Deletes licensee.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Deletelicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
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
Netlicensing.LicenseeService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Netlicensing.Service
        .getInstance()
        .delete(context, Netlicensing.LicenseeService.ENDPOINT_PATH + '/' + number, queryParams);
};

/**
 * Validates active licenses of the licensee. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Validatelicensee
 *
 * @param context Netlicensing.Context
 *
 * licensee number
 * @param number string
 *
 * optional validation parameters. See ValidationParameters and licensing model documentation for
 * details.
 * @param validationParameters Netlicensing.ValidationParameters.
 *
 * @returns {Promise}
 */
Netlicensing.LicenseeService.validate = function (context, number, validationParameters) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(validationParameters instanceof Netlicensing.ValidationParameters)) throw new TypeError('validationParameters must be an instance of Netlicensing.ValidationParameters');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

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

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseeService.ENDPOINT_PATH + '/' + number + '/' + Netlicensing.LicenseeService.ENDPOINT_PATH_VALIDATE, queryParams)
        .then(function (item) {
            var data = {};
            var validationResults = new Netlicensing.ValidationResults();

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
                .setTtl(Netlicensing.Service.getInstance().getLastHttpRequestInfo().response.ttl);

            return validationResults;
        });
};

/**
 * Transfer licenses between licensees.
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Transferlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the number of the licensee receiving licenses
 * @param number string
 *
 * the number of the licensee delivering licenses
 * @param sourceLicenseeNumber string
 *
 * @returns {Promise}
 */
Netlicensing.LicenseeService.transfer = function (context, number, sourceLicenseeNumber) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');
    Netlicensing.CheckUtils.paramNotEmpty(sourceLicenseeNumber, 'sourceLicenseeNumber');

    var queryParams = {sourceLicenseeNumber: sourceLicenseeNumber};

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseeService.ENDPOINT_PATH + '/' + number + '/' + Netlicensing.LicenseeService.ENDPOINT_PATH_TRANSFER, queryParams);
};