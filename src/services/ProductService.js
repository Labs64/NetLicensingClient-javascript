/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Service from './Service';
import Context from '../vo/Context';
import Product from '../entities/Product';
import Constants from '../Constants';
import CheckUtils from '../util/CheckUtils';

/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services
 *
 * @constructor
 */

export default {
    /**
     * Creates new product with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Createproduct
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

    create(context, product) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(product instanceof Product)) {
            throw new TypeError('product must be an instance of Product');
        }

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        return Service
            .post(context, Constants.Product.ENDPOINT_PATH, product.asPropertiesMap(), Product);
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
    get(context, number) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        return Service
            .get(context, `${Constants.Product.ENDPOINT_PATH}/${number}`, {}, Product);
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
     * array of product entities or empty array if nothing found in promise.
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
            queryParams.filter = filter;
        }

        return Service
            .list(context, Constants.Product.ENDPOINT_PATH, queryParams, Product);
    },

    /**
     * Updates product properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Updateproduct
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
    update(context, number, product) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(product instanceof Product)) {
            throw new TypeError('product must be an instance of Product');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        return Service
            .post(context, `${Constants.Product.ENDPOINT_PATH}/${number}`, product.asPropertiesMap(), Product);
    },

    /**
     * Deletes product.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Deleteproduct
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
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        const queryParams = { forceCascade: Boolean(forceCascade) };

        return Service
            .delete(context, `${Constants.Product.ENDPOINT_PATH}/${number}`, queryParams);
    },
};
