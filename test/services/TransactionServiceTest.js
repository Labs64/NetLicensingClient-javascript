/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Transaction+Services
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

Nlic.TransactionService = function () {
};

//static constants
Object.defineProperty(Nlic.TransactionService, 'ENDPOINT_PATH', {value: 'transaction'});

/**
 * Creates new transaction object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Transaction+Services#TransactionServices-Createtransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param transaction Nlic.Transaction
 *
 * return the newly created transaction object in promise
 * @returns {Promise}
 */
Nlic.TransactionService.create = function (context, transaction) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(transaction instanceof Nlic.Transaction)) throw new TypeError('transaction must be an instance of Nlic.Transaction');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.TransactionService.ENDPOINT_PATH, transaction.asPropertiesMap(), Nlic.Transaction);
};

/**
 * Gets transaction by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Transaction+Services#TransactionServices-Gettransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the transaction number
 * @param number string
 *
 * return the transaction in promise
 * @returns {Promise}
 */
Nlic.TransactionService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.TransactionService.ENDPOINT_PATH + '/' + number, {}, Nlic.Transaction);
};

/**
 * Returns all transactions of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Transaction+Services#TransactionServices-Transactionslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string
 *
 * array of transaction entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.TransactionService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.TransactionService.ENDPOINT_PATH, queryParams, Nlic.Transaction);
};

/**
 * Updates transaction properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Transaction+Services#TransactionServices-Updatetransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * transaction number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param transaction Nlic.Transaction
 *
 * return updated transaction in promise.
 * @returns {Promise}
 */
Nlic.TransactionService.update = function (context, number, transaction) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(transaction instanceof Nlic.Transaction)) throw new TypeError('transaction must be an instance of Nlic.Transaction');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.TransactionService.ENDPOINT_PATH + '/' + number, transaction.asPropertiesMap(), Nlic.Transaction);
};