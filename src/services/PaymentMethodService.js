/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

Netlicensing.PaymentMethodService = function () {
};

//static constants
Object.defineProperty(Netlicensing.PaymentMethodService, 'ENDPOINT_PATH', {value: 'paymentmethod'});

/**
 * Gets payment method by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Payment+Method+Services#PaymentMethodServices-Getpaymentmethod
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the payment method number
 * @param number string
 *
 * return the payment method in promise
 * @returns {Promise}
 */
Netlicensing.PaymentMethodService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.PaymentMethodService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.PaymentMethod);
};


/**
 * Returns payment methods of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Payment+Method+Services#PaymentMethodServices-Paymentmethodslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of payment method entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.PaymentMethodService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.PaymentMethodService.ENDPOINT_PATH, queryParams, Netlicensing.PaymentMethod);
};

/**
 * Updates payment method properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Payment+Method+Services#PaymentMethodServices-Updatepaymentmethod
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the payment method number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param paymentMethod Netlicensing.PaymentMethod
 *
 * return updated payment method in promise.
 * @returns {Promise}
 */
Netlicensing.PaymentMethodService.update = function (context, number, paymentMethod) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(paymentMethod instanceof Netlicensing.PaymentMethod)) throw new TypeError('paymentMethod must be an instance of Netlicensing.PaymentMethod');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.PaymentMethodService.ENDPOINT_PATH + '/' + number, paymentMethod.asPropertiesMap(), Netlicensing.PaymentMethod);
};