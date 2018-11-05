/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Context from '../vo/Context';
import PaymentMethod from '../entities/PaymentMethod';
import Constants from '../Constants';
import CheckUtils from '../util/CheckUtils';
import Service from './Service';
import FilterUtils from '../util/FilterUtils';

export default {
    /**
     * Gets payment method by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Getpaymentmethod
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
    get(context, number) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        return Service
            .get(context, `${Constants.PaymentMethod.ENDPOINT_PATH}/${number}`, {}, PaymentMethod);
    },

    /**
     * Returns payment methods of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Paymentmethodslist
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
    list(context, filter) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams.filter = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        return Service
            .list(context, Constants.PaymentMethod.ENDPOINT_PATH, queryParams, PaymentMethod);
    },

    /**
     * Updates payment method properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Updatepaymentmethod
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
    update(context, number, paymentMethod) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(paymentMethod instanceof PaymentMethod)) {
            throw new TypeError('paymentMethod must be an instance of PaymentMethod');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        const path = `${Constants.PaymentMethod.ENDPOINT_PATH}/${number}`;

        return Service
            .post(context, path, paymentMethod.asPropertiesMap(), PaymentMethod);
    },
};
