/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

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

Nlic.Transaction = function Transaction() {
    BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            active: 'boolean',
            grandTotal: 'float',
            discount: 'float'
        }
    });

    //define default entity properties
    this.__defines(['number', 'name', 'status', 'source', 'grandTotal', 'discount', 'currency', 'dateCreated', 'dateClosed']);
    this.__define('active', true);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.Transaction.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.Transaction.prototype.constructor = Nlic.Transaction;

Nlic.Transaction.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.Transaction.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.Transaction.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Nlic.Transaction.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Nlic.Transaction.prototype.setStatus = function (status) {
    return this.setProperty('status', status);
};

Nlic.Transaction.prototype.getStatus = function (def) {
    return this.getProperty('status', def);
};

Nlic.Transaction.prototype.setSource = function (source) {
    return this.setProperty('source', source);
};

Nlic.Transaction.prototype.getSource = function (def) {
    return this.getProperty('source', def);
};

Nlic.Transaction.prototype.setGrandTotal = function (grandTotal) {
    return this.setProperty('grandTotal', grandTotal);
};

Nlic.Transaction.prototype.getGrandTotal = function (def) {
    return this.getProperty('grandTotal', def);
};

Nlic.Transaction.prototype.setDiscount = function (discount) {
    return this.setProperty('discount', discount);
};

Nlic.Transaction.prototype.getDiscount = function (def) {
    return this.getProperty('discount', def);
};

Nlic.Transaction.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Nlic.Transaction.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Nlic.Transaction.prototype.setDateCreated = function (dateCreated) {
    return this.setProperty('dateCreated', dateCreated);
};

Nlic.Transaction.prototype.getDateCreated = function (def) {
    return this.getProperty('dateCreated', def);
};

Nlic.Transaction.prototype.setDateClosed = function (dateClosed) {
    return this.setProperty('dateClosed', dateClosed);
};

Nlic.Transaction.prototype.getDateClosed = function (def) {
    return this.getProperty('dateClosed', def);
};

Nlic.Transaction.prototype.setActive = function () {
    return this.setProperty('active', true);
};