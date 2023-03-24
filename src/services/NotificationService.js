/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Service from './Service';
import Constants from '../Constants';
import CheckUtils from '../util/CheckUtils';
import FilterUtils from '../util/FilterUtils';
import itemToNotification from '../converters/itemToNotification';
import Page from '../vo/Page';

/**
 * JS representation of the Notification Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/notification-services
 *
 * @constructor
 */

export default {
    /**
     * Creates new notification with given properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/notification-services#create-notification
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * non-null properties will be taken for the new object, null properties will either stay null, or will
     * be set to a default value, depending on property.
     * @param notification NetLicensing.Notification
     *
     * return the newly created notification object in promise
     * @returns {Promise}
     */

    async create(context, notification) {
        const { data: { items: { item: items } } } = await Service
            .post(context, Constants.Notification.ENDPOINT_PATH, notification.asPropertiesMap());

        const [item] = items.filter(({ type }) => type === 'Notification');

        return itemToNotification(item);
    },

    /**
     * Gets notification by its number.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/notification-services#get-notification
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the notification number
     * @param number string
     *
     * return the notification object in promise
     * @returns {Promise}
     */
    async get(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: items } } } = await Service
            .get(context, `${Constants.Notification.ENDPOINT_PATH}/${number}`);

        const [item] = items.filter(({ type }) => type === 'Notification');

        return itemToNotification(item);
    },

    /**
     * Returns notifications of a vendor.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/notification-services#notifications-list
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter string|null
     *
     * array of notification entities or empty array if nothing found in promise.
     * @returns {Promise}
     */
    async list(context, filter) {
        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) throw new TypeError(`filter has bad value ${filter}`);
            queryParams[Constants.FILTER] = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        const { data } = await Service.get(context, Constants.Notification.ENDPOINT_PATH, queryParams);

        return Page(
            data.items.item.filter(({ type }) => type === 'Notification').map((v) => itemToNotification(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },

    /**
     * Updates notification properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/notification-services#update-notification
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * notification number
     * @param number string
     *
     * non-null properties will be updated to the provided values, null properties will stay unchanged.
     * @param notification NetLicensing.Notification
     *
     * updated notification in promise.
     * @returns {Promise}
     */
    async update(context, number, notification) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: items } } } = await Service
            .post(context, `${Constants.Notification.ENDPOINT_PATH}/${number}`, notification.asPropertiesMap());

        const [item] = items.filter(({ type }) => type === 'Notification');

        return itemToNotification(item);
    },

    /**
     * Deletes notification.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/notification-services#delete-notification
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * notification number
     * @param number string
     *
     * return boolean state of delete in promise
     * @returns {Promise}
     */
    delete(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        return Service.delete(context, `${Constants.Notification.ENDPOINT_PATH}/${number}`);
    },
};
