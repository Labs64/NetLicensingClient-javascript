/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * Transaction entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the transaction. This number is
 * always generated by NetLicensing.
 * @property string number
 *
 * always true for transactions
 * @property boolean active
 *
 * Status of transaction. "CANCELLED", "CLOSED", "PENDING".
 * @property string status
 *
 * "SHOP". AUTO transaction for internal use only.
 * @property string source
 *
 * grand total for SHOP transaction (see source).
 * @property float grandTotal
 *
 * discount for SHOP transaction (see source).
 * @property float discount
 *
 * specifies currency for money fields (grandTotal and discount). Check data types to discover which
 * @property string currency
 *
 * Date created. Optional.
 * @property string dateCreated
 *
 * Date closed. Optional.
 * @property string dateClosed
 *
 * @constructor
 */

NetLicensing.Transaction = function Transaction() {
    NetLicensing.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            name: 'string',
            status: 'string',
            source: 'string',
            grandTotal: 'float',
            discount: 'float',
            currency: 'string',
            dateCreated: 'date',
            dateClosed: 'date',
            active: 'boolean',
            paymentMethod: 'string'
        }
    });

    //define default entity properties
    this.__defines(['number', 'name', 'status', 'source', 'grandTotal', 'discount', 'currency', 'dateCreated', 'dateClosed', 'paymentMethod']);
    this.__define('active', true);

    //make methods not changeable
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

/**
 * static constants
 * @deprecated No longer used by internal code and not recommended.Use NetLicensing.Constants instead.
 */
Object.defineProperty(NetLicensing.Transaction, 'STATUS_CANCELLED', {value: 'CANCELLED'});
Object.defineProperty(NetLicensing.Transaction, 'STATUS_CLOSED', {value: 'CLOSED'});
Object.defineProperty(NetLicensing.Transaction, 'STATUS_PENDING', {value: 'PENDING'});

NetLicensing.Transaction.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.Transaction.prototype.constructor = NetLicensing.Transaction;

NetLicensing.Transaction.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing.Transaction.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.Transaction.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing.Transaction.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing.Transaction.prototype.setStatus = function (status) {
    return this.setProperty('status', status);
};

NetLicensing.Transaction.prototype.getStatus = function (def) {
    return this.getProperty('status', def);
};

NetLicensing.Transaction.prototype.setSource = function (source) {
    return this.setProperty('source', source);
};

NetLicensing.Transaction.prototype.getSource = function (def) {
    return this.getProperty('source', def);
};

NetLicensing.Transaction.prototype.setGrandTotal = function (grandTotal) {
    return this.setProperty('grandTotal', grandTotal);
};

NetLicensing.Transaction.prototype.getGrandTotal = function (def) {
    return this.getProperty('grandTotal', def);
};

NetLicensing.Transaction.prototype.setDiscount = function (discount) {
    return this.setProperty('discount', discount);
};

NetLicensing.Transaction.prototype.getDiscount = function (def) {
    return this.getProperty('discount', def);
};

NetLicensing.Transaction.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

NetLicensing.Transaction.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

NetLicensing.Transaction.prototype.setDateCreated = function (dateCreated) {
    return this.setProperty('dateCreated', dateCreated);
};

NetLicensing.Transaction.prototype.getDateCreated = function (def) {
    return this.getProperty('dateCreated', def);
};

NetLicensing.Transaction.prototype.setDateClosed = function (dateClosed) {
    return this.setProperty('dateClosed', dateClosed);
};

NetLicensing.Transaction.prototype.getDateClosed = function (def) {
    return this.getProperty('dateClosed', def);
};

NetLicensing.Transaction.prototype.setPaymentMethod = function (paymentMethod) {
    return this.setProperty('paymentMethod', paymentMethod);
};

NetLicensing.Transaction.prototype.getPaymentMethod = function (def) {
    return this.getProperty('paymentMethod', def);
};

NetLicensing.Transaction.prototype.setActive = function () {
    return this.setProperty('active', true);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.Transaction.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.Transaction.prototype, [
    'setNumber',
    'getNumber',
    'setName',
    'getName',
    'setStatus',
    'getStatus',
    'setSource',
    'getSource',
    'setGrandTotal',
    'getGrandTotal',
    'setDiscount',
    'getDiscount',
    'setCurrency',
    'getCurrency',
    'setDateCreated',
    'getDateCreated',
    'setDateClosed',
    'getDateClosed',
    'setPaymentMethod',
    'getPaymentMethod',
    'setActive',
]);