/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Module+Services
 *
 * @constructor
 */

Nlic.ProductModuleService = function () {

};

//static constants
Object.defineProperty(Nlic.ProductModuleService, 'ENDPOINT_PATH', {value: 'productmodule'});

/**
 * Creates new product module object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Module+Services#ProductModuleServices-Createproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * parent product to which the new product module is to be added
 * @param productNumber string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param productModule Nlic.ProductModule
 *
 * the newly created product module object in promise
 * @returns {Promise}
 */
Nlic.ProductModuleService.create = function (context, productNumber, productModule) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(productModule instanceof Nlic.ProductModule)) throw new TypeError('product must be an instance of Nlic.ProductModule');

    Nlic.CheckUtils.paramNotEmpty(productNumber, 'productNumber');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.ProductModuleService.ENDPOINT_PATH, productModule.asPropertiesMap(), Nlic.ProductModule);
};

/**
 * Gets product module by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Module+Services#ProductModuleServices-Getproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the product module number
 * @param number string
 *
 * return the product module object in promise
 * @returns {Promise}
 */
Nlic.ProductModuleService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.ProductModuleService.ENDPOINT_PATH + '/' + number, {}, Nlic.ProductModule);
};

/**
 * Returns products of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Productslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of product modules entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.ProductModuleService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.ProductModuleService.ENDPOINT_PATH, queryParams, Nlic.ProductModule);
};

/**
 * Updates product module properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Module+Services#ProductModuleServices-Updateproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * product module number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param productModule Nlic.ProductModule
 *
 * updated product module in promise.
 * @returns {Promise}
 */
Nlic.ProductModuleService.update = function (context, number, productModule) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(productModule instanceof Nlic.ProductModule)) throw new TypeError('product must be an instance of Nlic.ProductModule');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.ProductModuleService.ENDPOINT_PATH + '/' + number, productModule.asPropertiesMap(), Nlic.ProductModule);
};

/**
 * Deletes product module.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Module+Services#ProductModuleServices-Deleteproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
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
Nlic.ProductModuleService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Nlic.Service
        .getInstance()
        .delete(context, Nlic.ProductModuleService.ENDPOINT_PATH + '/' + number, queryParams);
};