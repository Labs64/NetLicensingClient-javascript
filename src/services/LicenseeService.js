/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import CheckUtils from '../util/CheckUtils';
import FilterUtils from '../util/FilterUtils';
import Constants from '../Constants';
import Service from './Service';
import ValidationResults from '../vo/ValidationResults';
import itemToLicensee from '../converters/itemToLicensee';
import Page from '../vo/Page';
import itemToObject from '../converters/itemToObject';

/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/licensee-services
 *
 * @constructor
 */

export default {
    /**
     * Creates new licensee object with given properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/licensee-services#create-licensee
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
    async create(context, productNumber, licensee) {
        CheckUtils.paramNotEmpty(productNumber, Constants.Product.PRODUCT_NUMBER);

        licensee.setProperty(Constants.Product.PRODUCT_NUMBER, productNumber);

        const { data: { items: { item: [item] } } } = await Service
            .post(context, Constants.Licensee.ENDPOINT_PATH, licensee.asPropertiesMap());

        return itemToLicensee(item);
    },

    /**
     * Gets licensee by its number.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/licensee-services#get-licensee
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
    async get(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: [item] } } } = await Service
            .get(context, `${Constants.Licensee.ENDPOINT_PATH}/${number}`);

        return itemToLicensee(item);
    },

    /**
     * Returns all licensees of a vendor.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/licensee-services#licensees-list
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
    async list(context, filter) {
        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams[Constants.FILTER] = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        const { data } = await Service
            .get(context, Constants.Licensee.ENDPOINT_PATH, queryParams);

        return Page(
            data.items.item.map((v) => itemToLicensee(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },

    /**
     * Updates licensee properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/licensee-services#update-licensee
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
    async update(context, number, licensee) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: [item] } } } = await Service
            .post(context, `${Constants.Licensee.ENDPOINT_PATH}/${number}`, licensee.asPropertiesMap());

        return itemToLicensee(item);
    },

    /**
     * Deletes licensee.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/licensee-services#delete-licensee
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
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const queryParams = { forceCascade: Boolean(forceCascade) };

        return Service
            .delete(context, `${Constants.Licensee.ENDPOINT_PATH}/${number}`, queryParams);
    },

    /**
     * Validates active licenses of the licensee. See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/licensee-services#validate-licensee
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
     * @returns {ValidationResults}
     */
    async validate(context, number, validationParameters) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

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
            queryParams[`${Constants.ProductModule.PRODUCT_MODULE_NUMBER}${pmIndex}`] = productModuleName;
            if (!has.call(parameters, productModuleName)) return;

            const parameter = parameters[productModuleName];

            Object.keys(parameter).forEach((key) => {
                if (has.call(parameter, key)) {
                    queryParams[key + pmIndex] = parameter[key];
                }
            });
            pmIndex += 1;
        });

        const { data: { items: { item: items }, ttl } } = await Service.post(
            context,
            `${Constants.Licensee.ENDPOINT_PATH}/${number}/${Constants.Licensee.ENDPOINT_PATH_VALIDATE}`,
            queryParams,
        );

        const validationResults = new ValidationResults();
        validationResults.setTtl(ttl);

        items.forEach((v) => {
            const item = itemToObject(v);
            validationResults.setProductModuleValidation(item[Constants.ProductModule.PRODUCT_MODULE_NUMBER], item);
        });

        return validationResults;
    },


    /**
     * Transfer licenses between licensees.
     * @see https://netlicensing.io/wiki/licensee-services#transfer-licenses
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
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);
        CheckUtils.paramNotEmpty(sourceLicenseeNumber, Constants.Licensee.SOURCE_LICENSEE_NUMBER);

        const queryParams = { sourceLicenseeNumber };

        return Service
            .post(
                context,
                `${Constants.Licensee.ENDPOINT_PATH}/${number}/${Constants.Licensee.ENDPOINT_PATH_TRANSFER}`,
                queryParams,
            );
    },
};
