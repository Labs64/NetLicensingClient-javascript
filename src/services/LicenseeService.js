/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Context from '../vo/Context';
import Licensee from '../entities/Licensee';
import CheckUtils from '../util/CheckUtils';
import Constants from '../Constants';
import Service from './Service';
import ValidationParameters from '../vo/ValidationParameters';
import ValidationResults from '../vo/ValidationResults';

/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services
 *
 * @constructor
 */

export default {
    /**
     * Creates new licensee object with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Createlicensee
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * parent product to which the new licensee is to be added
     * @param productNumber string
     *
     * non-null properties will be taken for the new object, null properties will either stay null, or will
     * be set to a default value, depending on property.
     * @param licensee NetLicensing.Licensee
     *
     * return the newly created licensee object in promise
     * @returns {Promise}
     */
    create(context, productNumber, licensee) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(licensee instanceof Licensee)) {
            throw new TypeError('licensee must be an instance of Licensee');
        }

        CheckUtils.paramNotEmpty(productNumber, 'productNumber');

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        licensee.setProperty('productNumber', productNumber);

        return Service
            .post(context, Constants.Licensee.ENDPOINT_PATH, licensee.asPropertiesMap(), Licensee);
    },

    /**
     * Gets licensee by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Getlicensee
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the licensee number
     * @param number string
     *
     * return the licensee in promise
     * @returns {Promise}
     */
    get(context, number) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        return Service
            .get(context, `${Constants.Licensee.ENDPOINT_PATH}/${number}`, {}, Licensee);
    },

    /**
     * Returns all licensees of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Licenseeslist
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter string|null
     *
     * array of licensees (of all products) or empty array if nothing found in promise.
     * @returns {Promise}
     */
    list(context, filter) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams.filter = filter;
        }

        return Service
            .list(context, Constants.Licensee.ENDPOINT_PATH, queryParams, Licensee);
    },

    /**
     * Updates licensee properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Updatelicensee
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * licensee number
     * @param number string
     *
     * non-null properties will be updated to the provided values, null properties will stay unchanged.
     * @param licensee NetLicensing.Licensee
     *
     * return updated licensee in promise.
     * @returns {Promise}
     */
    update(context, number, licensee) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(licensee instanceof Licensee)) {
            throw new TypeError('licensee must be an instance of Licensee');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        return Service
            .post(context, `${Constants.Licensee.ENDPOINT_PATH}/${number}`, licensee.asPropertiesMap(), Licensee);
    },

    /**
     * Deletes licensee.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Deletelicensee
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
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
    delete(context, number, forceCascade) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        const queryParams = { forceCascade: Boolean(forceCascade) };

        return Service
            .delete(context, `${Constants.Licensee.ENDPOINT_PATH}/${number}`, queryParams);
    },

    /**
     * Validates active licenses of the licensee. See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Validatelicensee
     *
     * @param context NetLicensing.Context
     *
     * licensee number
     * @param number string
     *
     * optional validation parameters. See ValidationParameters and licensing model documentation for
     * details.
     * @param validationParameters NetLicensing.ValidationParameters.
     *
     * @returns {Promise}
     */
    validate(context, number, validationParameters) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(validationParameters instanceof ValidationParameters)) {
            throw new TypeError('validationParameters must be an instance of ValidationParameters');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        const queryParams = {};

        if (validationParameters.getProductNumber()) {
            queryParams.productNumber = validationParameters.getProductNumber();
        }

        if (validationParameters.getLicenseeName()) {
            queryParams.licenseeName = validationParameters.getLicenseeName();
        }

        if (validationParameters.getLicenseeSecret()) {
            queryParams.licenseeSecret = validationParameters.getLicenseeSecret();
        }

        let pmIndex = 0;
        const parameters = validationParameters.getParameters();

        const has = Object.prototype.hasOwnProperty;

        Object.keys(parameters).forEach((productModuleName) => {
            queryParams[`productModuleNumber${pmIndex}`] = productModuleName;
            if (!has.call(parameters, productModuleName)) return;

            const parameter = parameters[productModuleName];

            Object.keys(parameter).forEach((key) => {
                if (has.call(parameter, key)) {
                    queryParams[key + pmIndex] = parameter[key];
                }
            });
            pmIndex += 1;
        });

        const path = `${Constants.Licensee.ENDPOINT_PATH}/${number}/${Constants.Licensee.ENDPOINT_PATH_VALIDATE}`;

        return Service
            .post(context, path, queryParams)
            .then((item) => {
                const data = {};
                const validationResults = new ValidationResults();

                item.property.forEach((property) => {
                    data[property.name] = JSON.parse(property.value);
                });

                validationResults
                    .setProductModuleValidation(data.productModuleNumber, data)
                    .setTtl(Service.getLastHttpRequestInfo().data.ttl);

                return validationResults;
            });
    },


    /**
     * Transfer licenses between licensees.
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Transferlicensee
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the number of the licensee receiving licenses
     * @param number string
     *
     * the number of the licensee delivering licenses
     * @param sourceLicenseeNumber string
     *
     * @returns {Promise}
     */
    transfer(context, number, sourceLicenseeNumber) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');
        CheckUtils.paramNotEmpty(sourceLicenseeNumber, 'sourceLicenseeNumber');

        const queryParams = { sourceLicenseeNumber };

        const path = `${Constants.Licensee.ENDPOINT_PATH}/${number}/${Constants.Licensee.ENDPOINT_PATH_TRANSFER}`;

        return Service
            .post(context, path, queryParams);
    },
};
