/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Constants from '../Constants';
import Service from './Service';
import CheckUtils from '../util/CheckUtils';
import FilterUtils from '../util/FilterUtils';
import itemToTransaction from '../converters/itemToTransaction';
import Page from '../vo/Page';

/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/transaction-services
 *
 * Transaction is created each time change to  LicenseService licenses happens. For instance licenses are
 * obtained by a licensee, licenses disabled by vendor, licenses deleted, etc. Transaction is created no matter what
 * source has initiated the change to licenses: it can be either a direct purchase of licenses by a licensee via
 * NetLicensing Shop, or licenses can be given to a licensee by a vendor. Licenses can also be assigned implicitly by
 * NetLicensing if it is defined so by a license model (e.g. evaluation license may be given automatically). All these
 * events are reflected in transactions. Of all the transaction handling routines only read-only routines are exposed to
 * the public API, as transactions are only allowed to be created and modified by NetLicensing internally.
 *
 * @constructor
 */

export default {
    /**
     * Creates new transaction object with given properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/transaction-services#create-transaction
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * non-null properties will be taken for the new object, null properties will either stay null, or will
     * be set to a default value, depending on property.
     * @param transaction NetLicensing.Transaction
     *
     * return the newly created transaction object in promise
     * @returns {Promise}
     */
    async create(context, transaction) {
        const { data: { items: { item: items } } } = await Service
            .post(context, Constants.Transaction.ENDPOINT_PATH, transaction.asPropertiesMap());

        const [item] = items.filter(({ type }) => type === 'Transaction');

        return itemToTransaction(item);
    },

    /**
     * Gets transaction by its number.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/transaction-services#get-transaction
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the transaction number
     * @param number string
     *
     * return the transaction in promise
     * @returns {Promise}
     */
    async get(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: items } } } = await Service
            .get(context, `${Constants.Transaction.ENDPOINT_PATH}/${number}`);

        const [item] = items.filter(({ type }) => type === 'Transaction');

        return itemToTransaction(item);
    },

    /**
     * Returns all transactions of a vendor.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/transaction-services#transactions-list
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter string
     *
     * array of transaction entities or empty array if nothing found in promise.
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
            .get(context, Constants.Transaction.ENDPOINT_PATH, queryParams);

        return Page(
            data.items.item.filter(({ type }) => type === 'Transaction').map((v) => itemToTransaction(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
    },

    /**
     * Updates transaction properties.See NetLicensingAPI for details:
     * @see https://netlicensing.io/wiki/transaction-services#update-transaction
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * transaction number
     * @param number string
     *
     * non-null properties will be updated to the provided values, null properties will stay unchanged.
     * @param transaction NetLicensing.Transaction
     *
     * return updated transaction in promise.
     * @returns {Promise}
     */
    async update(context, number, transaction) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: items } } } = await Service
            .post(context, `${Constants.Transaction.ENDPOINT_PATH}/${number}`, transaction.asPropertiesMap());

        const [item] = items.filter(({ type }) => type === 'Transaction');

        return itemToTransaction(item);
    },
};
