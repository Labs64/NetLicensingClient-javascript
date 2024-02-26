/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Service from './Service';
import Constants from '../Constants';
import CheckUtils from '../util/CheckUtils';
import FilterUtils from '../util/FilterUtils';
import itemToBundle from '../converters/itemToBundle';
import itemToLicense from '../converters/itemToLicense';
import Page from '../vo/Page';

/**
 * JS representation of the Bundle Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/bundle-services
 *
 * @constructor
 */

export default {
    /**
     * Creates new bundle with given properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/bundle-services#create-bundle
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * non-null properties will be taken for the new object, null properties will either stay null, or will
     * be set to a default value, depending on property.
     * @param bundle NetLicensing.Bundle
     *
     * return the newly created bundle object in promise
     * @returns {Promise}
     */

    async create(context, bundle) {
        const { data: { items: { item: items } } } = await Service
            .post(context, Constants.Bundle.ENDPOINT_PATH, bundle.asPropertiesMap());

        const [item] = items.filter(({ type }) => type === 'Bundle');

        return itemToBundle(item);
    },

    /**
     * Gets bundle by its number.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/bundle-services#get-bundle
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the bundle number
     * @param number string
     *
     * return the bundle object in promise
     * @returns {Promise}
     */
    async get(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: items } } } = await Service
            .get(context, `${Constants.Bundle.ENDPOINT_PATH}/${number}`);

        const [item] = items.filter(({ type }) => type === 'Bundle');

        return itemToBundle(item);
    },

    /**
     * Returns bundle of a vendor.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/bundle-services#bundles-list
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter string|null
     *
     * array of bundle entities or empty array if nothing found in promise.
     * @returns {Promise}
     */
    async list(context, filter) {
        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) throw new TypeError(`filter has bad value ${filter}`);
            queryParams[Constants.FILTER] = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        const { data } = await Service.get(context, Constants.Bundle.ENDPOINT_PATH, queryParams);

        return Page(
            data.items.item.filter(({ type }) => type === 'Bundle').map((v) => itemToBundle(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },

    /**
     * Updates bundle properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/bundle-services#update-bundle
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * bundle number
     * @param number string
     *
     * non-null properties will be updated to the provided values, null properties will stay unchanged.
     * @param bundle NetLicensing.Bundle
     *
     * updated bundle in promise.
     * @returns {Promise}
     */
    async update(context, number, bundle) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: items } } } = await Service
            .post(context, `${Constants.Bundle.ENDPOINT_PATH}/${number}`, bundle.asPropertiesMap());

        const [item] = items.filter(({ type }) => type === 'Bundle');

        return itemToBundle(item);
    },

    /**
     * Deletes bundle.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/bundle-services#delete-bundle
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * bundle number
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

        return Service.delete(context, `${Constants.Bundle.ENDPOINT_PATH}/${number}`, queryParams);
    },

    /**
     * Obtain bundle.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/bundle-services#obtain-bundle
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * bundle number
     * @param number string
     *
     * licensee number
     * @param licenseeNumber String
     *
     * return array of licenses
     * @returns {Promise}
     */
    async obtain(context, number, licenseeNumber) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);
        CheckUtils.paramNotEmpty(licenseeNumber, Constants.Licensee.LICENSEE_NUMBER);

        const { ENDPOINT_PATH, ENDPOINT_OBTAIN_PATH } = Constants.Bundle;

        const queryParams = { [Constants.Licensee.LICENSEE_NUMBER]: licenseeNumber };

        const { data: { items: { item: items } } } = await Service
            .post(context, `${ENDPOINT_PATH}/${number}/${ENDPOINT_OBTAIN_PATH}`, queryParams);

        return items.filter(({ type }) => type === 'License').map((i) => itemToLicense(i));
    },
};
