/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

NetLicensing.PaymentMethodService = function () {
};

/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.PaymentMethod.ENDPOINT_PATH instead.
 */
Object.defineProperty(NetLicensing.PaymentMethodService, 'ENDPOINT_PATH', {value: 'paymentmethod'});

/**
 * Gets payment method by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Getpaymentmethod
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the payment method number
 * @param number string
 *
 * return the payment method in promise
 * @returns {Promise}
 */
NetLicensing.PaymentMethodService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.Constants.PaymentMethod.ENDPOINT_PATH + '/' + number, {}, NetLicensing.PaymentMethod);
};


/**
 * Returns payment methods of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Paymentmethodslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of payment method entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.PaymentMethodService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.Constants.PaymentMethod.ENDPOINT_PATH, queryParams, NetLicensing.PaymentMethod);
};

/**
 * Updates payment method properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Updatepaymentmethod
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the payment method number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param paymentMethod NetLicensing.PaymentMethod
 *
 * return updated payment method in promise.
 * @returns {Promise}
 */
NetLicensing.PaymentMethodService.update = function (context, number, paymentMethod) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(paymentMethod instanceof NetLicensing.PaymentMethod)) throw new TypeError('paymentMethod must be an instance of NetLicensing.PaymentMethod');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.Constants.PaymentMethod.ENDPOINT_PATH + '/' + number, paymentMethod.asPropertiesMap(), NetLicensing.PaymentMethod);
};