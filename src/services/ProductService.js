/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services
 *
 * @constructor
 */

Netlicensing.ProductService = function () {
};

//static constants
Object.defineProperty(Netlicensing.ProductService, 'ENDPOINT_PATH', {value: 'product'});

/**
 * Creates new product with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Createproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param product Netlicensing.Product
 *
 * return the newly created product object in promise
 * @returns {Promise}
 */

Netlicensing.ProductService.create = function (context, product) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(product instanceof Netlicensing.Product)) throw new TypeError('product must be an instance of Netlicensing.Product');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.ProductService.ENDPOINT_PATH, product.asPropertiesMap(), Netlicensing.Product);
};

/**
 * Gets product by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Getproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the product number
 * @param number string
 *
 * return the product object in promise
 * @returns {Promise}
 */
Netlicensing.ProductService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.ProductService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.Product);
};

/**
 * Returns products of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Productslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of product entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.ProductService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.ProductService.ENDPOINT_PATH, queryParams, Netlicensing.Product);
};

/**
 * Updates product properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Updateproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * product number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param product Netlicensing.Product
 *
 * updated product in promise.
 * @returns {Promise}
 */
Netlicensing.ProductService.update = function (context, number, product) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(product instanceof Netlicensing.Product)) throw new TypeError('product must be an instance of Netlicensing.Product');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.ProductService.ENDPOINT_PATH + '/' + number, product.asPropertiesMap(), Netlicensing.Product);
};

/**
 * Deletes product.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Deleteproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
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
Netlicensing.ProductService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Netlicensing.Service
        .getInstance()
        .delete(context, Netlicensing.ProductService.ENDPOINT_PATH + '/' + number, queryParams);
};