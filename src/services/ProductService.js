/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Service from './Service';
import Constants from '../Constants';
import CheckUtils from '../util/CheckUtils';
import FilterUtils from '../util/FilterUtils';
import itemToProduct from '../converters/itemToProduct';
import Page from '../vo/Page';

/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/product-services
 *
 * @constructor
 */

export default {
    /**
     * Creates new product with given properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/product-services#create-product
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * non-null properties will be taken for the new object, null properties will either stay null, or will
     * be set to a default value, depending on property.
     * @param product NetLicensing.Product
     *
     * return the newly created product object in promise
     * @returns {Promise}
     */

    async create(context, product) {
        const { data: { items: { item: [item] } } } = await Service
            .post(context, Constants.Product.ENDPOINT_PATH, product.asPropertiesMap());
        return itemToProduct(item);
    },

    /**
     * Gets product by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Getproduct
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the product number
     * @param number string
     *
     * return the product object in promise
     * @returns {Promise}
     */
    async get(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);
        const { data: { items: { item: [item] } } } = await Service
            .get(context, `${Constants.Product.ENDPOINT_PATH}/${number}`);
        return itemToProduct(item);
    },

    /**
     * Returns products of a vendor.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/product-services#products-list
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter string|null
     *
     * array of product entities or empty array if nothing found in promise.
     * @returns {Promise}
     */
    async list(context, filter) {
        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) throw new TypeError(`filter has bad value ${filter}`);
            queryParams[Constants.FILTER] = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        const { data } = await Service.get(context, Constants.Product.ENDPOINT_PATH, queryParams);

        return Page(
            data.items.item.map((v) => itemToProduct(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },

    /**
     * Updates product properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/product-services#update-product
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * product number
     * @param number string
     *
     * non-null properties will be updated to the provided values, null properties will stay unchanged.
     * @param product NetLicensing.Product
     *
     * updated product in promise.
     * @returns {Promise}
     */
    async update(context, number, product) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: [item] } } } = await Service
            .post(context, `${Constants.Product.ENDPOINT_PATH}/${number}`, product.asPropertiesMap());

        return itemToProduct(item);
    },

    /**
     * Deletes product.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/product-services#delete-product
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * product number
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

        return Service.delete(context, `${Constants.Product.ENDPOINT_PATH}/${number}`, queryParams);
    },
};
