/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Constants from '../Constants';
import Service from './Service';
import CheckUtils from '../util/CheckUtils';
import FilterUtils from '../util/FilterUtils';
import itemToObject from '../converters/itemToObject';
import Page from '../vo/Page';
import itemToCountry from '../converters/itemToCountry';

/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/utility-services
 * @constructor
 */

export default {
    /**
     * Returns all license types. See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/utility-services#license-types-list
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * array of available license types or empty array if nothing found in promise.
     * @returns {Promise}
     */
    async listLicenseTypes(context) {
        const { data } = await Service
            .get(context, `${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSE_TYPES}`);

        return Page(
            data.items.item.filter(({ type }) => type === 'LicenseType').map((v) => itemToObject(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },

    /**
     * Returns all license models. See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/utility-services#licensing-models-list
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * array of available license models or empty array if nothing found in promise.
     * @returns {Promise}
     */
    async listLicensingModels(context) {
        const { data } = await Service
            .get(context, `${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSING_MODELS}`);

        return Page(
            data.items.item.filter(({ type }) => type === 'LicensingModelProperties').map((v) => itemToObject(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },

    /**
     * Returns all countries.
     *
     * determines the vendor on whose behalf the call is performed
     * @param context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter
     *
     * collection of available countries or null/empty list if nothing found in promise.
     * @returns {Promise}
     */
    async listCountries(context, filter) {
        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams[Constants.FILTER] = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        const { data } = await Service
            .get(
                context,
                `${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_COUNTRIES}`,
                queryParams,
            );

        return Page(
            data.items.item.filter(({ type }) => type === 'Country').map((v) => itemToCountry(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },
};
