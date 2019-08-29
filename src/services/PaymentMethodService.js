/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Constants from '../Constants';
import CheckUtils from '../util/CheckUtils';
import Service from './Service';
import FilterUtils from '../util/FilterUtils';
import itemToPaymentMethod from '../converters/itemToPaymentMethod';
import Page from '../vo/Page';

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
    async get(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: [item] } } } = await Service
            .get(context, `${Constants.PaymentMethod.ENDPOINT_PATH}/${number}`);

        return itemToPaymentMethod(item);
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
    async list(context, filter) {
        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams[Constants.FILTER] = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        const { data } = await Service
            .get(context, Constants.PaymentMethod.ENDPOINT_PATH, queryParams);

        return Page(
            data.items.item.map((v) => itemToPaymentMethod(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
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
    async update(context, number, paymentMethod) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const path = `${Constants.PaymentMethod.ENDPOINT_PATH}/${number}`;

        const { data: { items: { item: [item] } } } = await Service
            .post(context, path, paymentMethod.asPropertiesMap());

        return itemToPaymentMethod(item);
    },
};
