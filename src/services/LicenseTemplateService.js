/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import CheckUtils from '../util/CheckUtils';
import Constants from '../Constants';
import Service from './Service';
import FilterUtils from '../util/FilterUtils';
import itemToLicenseTemplate from '../converters/itemToLicenseTemplate';
import Page from '../vo/Page';

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/license-template-services
 *
 * @constructor
 */

export default {
    /**
     * Creates new license template object with given properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/license-template-services#create-license-template
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
    async create(context, productModuleNumber, licenseTemplate) {
        CheckUtils.paramNotEmpty(productModuleNumber, Constants.ProductModule.PRODUCT_MODULE_NUMBER);

        licenseTemplate.setProperty(Constants.ProductModule.PRODUCT_MODULE_NUMBER, productModuleNumber);

        const { data: { items: { item: items } } } = await Service
            .post(context, Constants.LicenseTemplate.ENDPOINT_PATH, licenseTemplate.asPropertiesMap());

        const [item] = items.filter(({ type }) => type === 'LicenseTemplate');

        return itemToLicenseTemplate(item);
    },

    /**
     * Gets license template by its number.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/license-template-services#get-license-template
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
    async get(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: items } } } = await Service
            .get(context, `${Constants.LicenseTemplate.ENDPOINT_PATH}/${number}`);

        const [item] = items.filter(({ type }) => type === 'LicenseTemplate');

        return itemToLicenseTemplate(item);
    },

    /**
     * Returns all license templates of a vendor.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/license-template-services#license-templates-list
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
    async list(context, filter) {
        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams[Constants.FILTER] = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        const { data } = await Service
            .get(context, Constants.LicenseTemplate.ENDPOINT_PATH, queryParams);

        return Page(
            data.items.item.filter(({ type }) => type === 'LicenseTemplate').map((v) => itemToLicenseTemplate(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },

    /**
     * Updates license template properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/license-template-services#update-license-template
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
    async update(context, number, licenseTemplate) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const path = `${Constants.LicenseTemplate.ENDPOINT_PATH}/${number}`;

        const { data: { items: { item: items } } } = await Service
            .post(context, path, licenseTemplate.asPropertiesMap());

        const [item] = items.filter(({ type }) => type === 'LicenseTemplate');

        return itemToLicenseTemplate(item);
    },

    /**
     * Deletes license template.See NetLicensingAPI JavaDoc for details:
     * @see https://netlicensing.io/wiki/license-template-services#delete-license-template
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
    delete(context, number, forceCascade) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const queryParams = { forceCascade: Boolean(forceCascade) };

        return Service
            .delete(context, `${Constants.LicenseTemplate.ENDPOINT_PATH}/${number}`, queryParams);
    },
};
