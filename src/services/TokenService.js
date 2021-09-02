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
import itemToToken from '../converters/itemToToken';
import Page from '../vo/Page';

/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/token-services
 *
 * @constructor
 */

export default {
    /**
     * Creates new token.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/token-services#create-token
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * non-null properties will be updated to the provided values, null properties will stay unchanged.
     * @param token NetLicensing.Token
     *
     * return created token in promise
     * @returns {Promise}
     */
    async create(context, token) {
        const { data: { items: { item: items } } } = await Service
            .post(context, Constants.Token.ENDPOINT_PATH, token.asPropertiesMap());

        const [item] = items.filter(({ type }) => type === 'Token');

        return itemToToken(item);
    },

    /**
     * Gets token by its number..See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/token-services#get-token
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the token number
     * @param number
     *
     * return the token in promise
     * @returns {Promise}
     */
    async get(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: items } } } = await Service
            .get(context, `${Constants.Token.ENDPOINT_PATH}/${number}`);

        const [item] = items.filter(({ type }) => type === 'Token');

        return itemToToken(item);
    },

    /**
     * Returns tokens of a vendor.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/token-services#tokens-list
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter string|null
     *
     * array of token entities or empty array if nothing found.
     * @return array
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
            .get(context, Constants.Token.ENDPOINT_PATH, queryParams);

        return Page(
            data.items.item.filter(({ type }) => type === 'Token').map((v) => itemToToken(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },

    /**
     * Delete token by its number.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/token-services#delete-token
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     *  the token number
     * @param number string
     *
     * return boolean state of delete in promise
     * @returns {Promise}
     */
    delete(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        return Service
            .delete(context, `${Constants.Token.ENDPOINT_PATH}/${number}`);
    },
};
