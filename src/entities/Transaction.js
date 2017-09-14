/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

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

Netlicensing.Transaction = function Transaction() {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(Netlicensing.Transaction, 'STATUS_CANCELLED', {value: 'CANCELLED'});
Object.defineProperty(Netlicensing.Transaction, 'STATUS_CLOSED', {value: 'CLOSED'});
Object.defineProperty(Netlicensing.Transaction, 'STATUS_PENDING', {value: 'PENDING'});

Netlicensing.Transaction.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.Transaction.prototype.constructor = Netlicensing.Transaction;

Netlicensing.Transaction.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.Transaction.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.Transaction.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.Transaction.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.Transaction.prototype.setStatus = function (status) {
    return this.setProperty('status', status);
};

Netlicensing.Transaction.prototype.getStatus = function (def) {
    return this.getProperty('status', def);
};

Netlicensing.Transaction.prototype.setSource = function (source) {
    return this.setProperty('source', source);
};

Netlicensing.Transaction.prototype.getSource = function (def) {
    return this.getProperty('source', def);
};

Netlicensing.Transaction.prototype.setGrandTotal = function (grandTotal) {
    return this.setProperty('grandTotal', grandTotal);
};

Netlicensing.Transaction.prototype.getGrandTotal = function (def) {
    return this.getProperty('grandTotal', def);
};

Netlicensing.Transaction.prototype.setDiscount = function (discount) {
    return this.setProperty('discount', discount);
};

Netlicensing.Transaction.prototype.getDiscount = function (def) {
    return this.getProperty('discount', def);
};

Netlicensing.Transaction.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Netlicensing.Transaction.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Netlicensing.Transaction.prototype.setDateCreated = function (dateCreated) {
    return this.setProperty('dateCreated', dateCreated);
};

Netlicensing.Transaction.prototype.getDateCreated = function (def) {
    return this.getProperty('dateCreated', def);
};

Netlicensing.Transaction.prototype.setDateClosed = function (dateClosed) {
    return this.setProperty('dateClosed', dateClosed);
};

Netlicensing.Transaction.prototype.getDateClosed = function (def) {
    return this.getProperty('dateClosed', def);
};

Netlicensing.Transaction.prototype.setPaymentMethod = function (paymentMethod) {
    return this.setProperty('paymentMethod', paymentMethod);
};

Netlicensing.Transaction.prototype.getPaymentMethod = function (def) {
    return this.getProperty('paymentMethod', def);
};

Netlicensing.Transaction.prototype.setActive = function () {
    return this.setProperty('active', true);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.Transaction.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.Transaction.prototype, [
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