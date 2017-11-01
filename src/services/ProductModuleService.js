/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services
 *
 * @constructor
 */

NetLicensing.ProductModuleService = function () {

};

//static constants
Object.defineProperty(NetLicensing.ProductModuleService, 'ENDPOINT_PATH', {value: 'productmodule'});

/**
 * Creates new product module object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Createproductmodule
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
NetLicensing.ProductModuleService.create = function (context, productNumber, productModule) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(productModule instanceof NetLicensing.ProductModule)) throw new TypeError('product must be an instance of NetLicensing.ProductModule');

    NetLicensing.CheckUtils.paramNotEmpty(productNumber, 'productNumber');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    productModule.setProperty('productNumber', productNumber);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.ProductModuleService.ENDPOINT_PATH, productModule.asPropertiesMap(), NetLicensing.ProductModule);
};

/**
 * Gets product module by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Getproductmodule
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
NetLicensing.ProductModuleService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.ProductModuleService.ENDPOINT_PATH + '/' + number, {}, NetLicensing.ProductModule);
};

/**
 * Returns products of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Productslist
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
NetLicensing.ProductModuleService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.ProductModuleService.ENDPOINT_PATH, queryParams, NetLicensing.ProductModule);
};

/**
 * Updates product module properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Updateproductmodule
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
NetLicensing.ProductModuleService.update = function (context, number, productModule) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(productModule instanceof NetLicensing.ProductModule)) throw new TypeError('product must be an instance of NetLicensing.ProductModule');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.ProductModuleService.ENDPOINT_PATH + '/' + number, productModule.asPropertiesMap(), NetLicensing.ProductModule);
};

/**
 * Deletes product module.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Deleteproductmodule
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
NetLicensing.ProductModuleService.delete = function (context, number, forceCascade) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return NetLicensing.Service
        .getInstance()
        .delete(context, NetLicensing.ProductModuleService.ENDPOINT_PATH + '/' + number, queryParams);
};