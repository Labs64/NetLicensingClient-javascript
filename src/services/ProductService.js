/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services
 *
 * @constructor
 */

Nlic.ProductService = function () {
};

//static constants
Object.defineProperty(Nlic.ProductService, 'ENDPOINT_PATH', {value: 'product'});

/**
 * Creates new product with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Createproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param product
 *
 * @returns {Promise}
 */

Nlic.ProductService.create = function (context, product) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Context');
    if (!(product instanceof Nlic.Product)) throw new TypeError('product must be an instance of Product');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.ProductService.ENDPOINT_PATH, product.asPropertiesMap(), Nlic.Product);
};

/**
 * Gets product by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Getproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context
 *
 * the product number
 * @param number
 *
 * @returns {Promise}
 */
Nlic.ProductService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.ProductService.ENDPOINT_PATH + '/' + number, {}, Nlic.Product);
};

/**
 * Returns products of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Productslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter
 *
 * array of product entities or empty array if nothing found.
 * @returns {Promise}
 */
Nlic.ProductService.getList = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .getList(context, Nlic.ProductService.ENDPOINT_PATH, queryParams, Nlic.Product);
};

/**
 * Updates product properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Updateproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context
 *
 * product number
 * @param number
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param product
 *
 * updated product.
 * @returns {Promise}
 */
Nlic.ProductService.update = function (context, number, product) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Context');
    if (!(product instanceof Nlic.Product)) throw new TypeError('product must be an instance of Product');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.ProductService.ENDPOINT_PATH + '/' + number, product.asPropertiesMap(), Nlic.Product);
};

/**
 * Deletes product.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Deleteproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context
 *
 * product number
 * @param number
 *
 * if true, any entities that depend on the one being deleted will be deleted too
 * @param forceCascade
 *
 * @returns {Promise}
 */
Nlic.ProductService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Nlic.Service
        .getInstance()
        .delete(context, Nlic.ProductService.ENDPOINT_PATH + '/' + number, queryParams)
};