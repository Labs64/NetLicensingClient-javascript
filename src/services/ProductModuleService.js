/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import CheckUtils from '../util/CheckUtils';
import Constants from '../Constants';
import Service from './Service';
import FilterUtils from '../util/FilterUtils';
import itemToProductModule from '../converters/itemToProductModule';
import Page from '../vo/Page';

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services
 *
 * @constructor
 */

export default {
    /**
     * Creates new product module object with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Createproductmodule
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * parent product to which the new product module is to be added
     * @param productNumber string
     *
     * non-null properties will be taken for the new object, null properties will either stay null, or will
     * be set to a default value, depending on property.
     * @param productModule NetLicensing.ProductModule
     *
     * the newly created product module object in promise
     * @returns {Promise}
     */
    async create(context, productNumber, productModule) {
        CheckUtils.paramNotEmpty(productNumber, Constants.Product.PRODUCT_NUMBER);

        productModule.setProperty(Constants.Product.PRODUCT_NUMBER, productNumber);

        const { data: { items: { item: [item] } } } = await Service
            .post(context, Constants.ProductModule.ENDPOINT_PATH, productModule.asPropertiesMap());

        return itemToProductModule(item);
    },

    /**
     * Gets product module by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Getproductmodule
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the product module number
     * @param number string
     *
     * return the product module object in promise
     * @returns {Promise}
     */
    async get(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: [item] } } } = await Service
            .get(context, `${Constants.ProductModule.ENDPOINT_PATH}/${number}`);

        return itemToProductModule(item);
    },

    /**
     * Returns products of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Productslist
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter string|null
     *
     * array of product modules entities or empty array if nothing found in promise.
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

        const { data } = await Service.get(context, Constants.ProductModule.ENDPOINT_PATH, queryParams);

        return Page(
            data.items.item.map((v) => itemToProductModule(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },

    /**
     * Updates product module properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Updateproductmodule
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * product module number
     * @param number string
     *
     * non-null properties will be updated to the provided values, null properties will stay unchanged.
     * @param productModule NetLicensing.ProductModule
     *
     * updated product module in promise.
     * @returns {Promise}
     */
    async update(context, number, productModule) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: [item] } } } = await Service
            .post(context, `${Constants.ProductModule.ENDPOINT_PATH}/${number}`, productModule.asPropertiesMap());

        return itemToProductModule(item);
    },

    /**
     * Deletes product module.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Deleteproductmodule
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * product module number
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

        return Service.delete(context, `${Constants.ProductModule.ENDPOINT_PATH}/${number}`, queryParams);
    },
};
