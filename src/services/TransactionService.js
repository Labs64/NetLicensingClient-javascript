/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Transaction+Services
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

Netlicensing.TransactionService = function () {
};

//static constants
Object.defineProperty(Netlicensing.TransactionService, 'ENDPOINT_PATH', {value: 'transaction'});

/**
 * Creates new transaction object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Transaction+Services#TransactionServices-Createtransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param transaction Netlicensing.Transaction
 *
 * return the newly created transaction object in promise
 * @returns {Promise}
 */
Netlicensing.TransactionService.create = function (context, transaction) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(transaction instanceof Netlicensing.Transaction)) throw new TypeError('transaction must be an instance of Netlicensing.Transaction');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.TransactionService.ENDPOINT_PATH, transaction.asPropertiesMap(), Netlicensing.Transaction);
};

/**
 * Gets transaction by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Transaction+Services#TransactionServices-Gettransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the transaction number
 * @param number string
 *
 * return the transaction in promise
 * @returns {Promise}
 */
Netlicensing.TransactionService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.TransactionService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.Transaction);
};

/**
 * Returns all transactions of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Transaction+Services#TransactionServices-Transactionslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string
 *
 * array of transaction entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.TransactionService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.TransactionService.ENDPOINT_PATH, queryParams, Netlicensing.Transaction);
};

/**
 * Updates transaction properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Transaction+Services#TransactionServices-Updatetransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * transaction number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param transaction Netlicensing.Transaction
 *
 * return updated transaction in promise.
 * @returns {Promise}
 */
Netlicensing.TransactionService.update = function (context, number, transaction) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(transaction instanceof Netlicensing.Transaction)) throw new TypeError('transaction must be an instance of Netlicensing.Transaction');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.TransactionService.ENDPOINT_PATH + '/' + number, transaction.asPropertiesMap(), Netlicensing.Transaction);
};