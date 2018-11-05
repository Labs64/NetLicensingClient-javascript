/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Context from '../vo/Context';
import Transaction from '../entities/Transaction';
import Constants from '../Constants';
import Service from './Service';
import CheckUtils from '../util/CheckUtils';
import FilterUtils from '../util/FilterUtils';

/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services
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
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Createtransaction
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
    create(context, transaction) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(transaction instanceof Transaction)) {
            throw new TypeError('transaction must be an instance of Transaction');
        }

        return Service
            .post(context, Constants.Transaction.ENDPOINT_PATH, transaction.asPropertiesMap(), Transaction);
    },

    /**
     * Gets transaction by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Gettransaction
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
    get(context, number) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        return Service
            .get(context, `${Constants.Transaction.ENDPOINT_PATH}/${number}`, {}, Transaction);
    },

    /**
     * Returns all transactions of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Transactionslist
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
            .list(context, Constants.Transaction.ENDPOINT_PATH, queryParams, Transaction);
    },

    /**
     * Updates transaction properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Updatetransaction
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
    update(context, number, transaction) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of NetLicensing.Context');
        }

        if (!(transaction instanceof Transaction)) {
            throw new TypeError('transaction must be an instance of NetLicensing.Transaction');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        const path = `${Constants.Transaction.ENDPOINT_PATH}/${number}`;

        return Service
            .post(context, path, transaction.asPropertiesMap(), Transaction);
    },
};
