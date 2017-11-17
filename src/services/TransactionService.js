/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing = NetLicensing || {};

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

NetLicensing.TransactionService = function () {
};

/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.Transaction.ENDPOINT_PATH instead.
 */
Object.defineProperty(NetLicensing .TransactionService, 'ENDPOINT_PATH', {value: 'transaction'});

/**
 * Creates new transaction object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Createtransaction
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
NetLicensing.TransactionService.create = function (context, transaction) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(transaction instanceof NetLicensing.Transaction)) throw new TypeError('transaction must be an instance of NetLicensing.Transaction');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.Constants.Transaction.ENDPOINT_PATH, transaction.asPropertiesMap(), NetLicensing.Transaction);
};

/**
 * Gets transaction by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Gettransaction
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
NetLicensing.TransactionService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.Constants.Transaction.ENDPOINT_PATH + '/' + number, {}, NetLicensing.Transaction);
};

/**
 * Returns all transactions of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Transactionslist
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
NetLicensing.TransactionService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.Constants.Transaction.ENDPOINT_PATH, queryParams, NetLicensing.Transaction);
};

/**
 * Updates transaction properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Updatetransaction
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
NetLicensing.TransactionService.update = function (context, number, transaction) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(transaction instanceof NetLicensing.Transaction)) throw new TypeError('transaction must be an instance of NetLicensing.Transaction');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Constants.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.Constants.Transaction.ENDPOINT_PATH + '/' + number, transaction.asPropertiesMap(), NetLicensing.Transaction);
};