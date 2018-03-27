/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Context from '../vo/Context';
import ProductModule from '../entities/ProductModule';
import CheckUtils from '../util/CheckUtils';
import Constants from '../Constants';
import Service from './Service';
import FilterUtils from '../util/FilterUtils';

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
    create(context, productNumber, productModule) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(productModule instanceof ProductModule)) {
            throw new TypeError('product must be an instance of ProductModule');
        }

        CheckUtils.paramNotEmpty(productNumber, 'productNumber');

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        productModule.setProperty('productNumber', productNumber);

        return Service
            .post(context, Constants.ProductModule.ENDPOINT_PATH, productModule.asPropertiesMap(), ProductModule);
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
    get(context, number) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        return Service
            .get(context, `${Constants.ProductModule.ENDPOINT_PATH}/${number}`, {}, ProductModule);
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
    list(context, filter) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams.filter = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        return Service
            .list(context, Constants.ProductModule.ENDPOINT_PATH, queryParams, ProductModule);
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
    update(context, number, productModule) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(productModule instanceof ProductModule)) {
            throw new TypeError('product must be an instance of ProductModule');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        const path = `${Constants.ProductModule.ENDPOINT_PATH}/${number}`;

        return Service
            .post(context, path, productModule.asPropertiesMap(), ProductModule);
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
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        const queryParams = { forceCascade: Boolean(forceCascade) };

        return Service
            .delete(context, `${Constants.ProductModule.ENDPOINT_PATH}/${number}`, queryParams);
    },
};
