/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import BaseEntity from './BaseEntity';

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
export default class Transaction extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
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
                paymentMethod: 'string',
            },
            // The attributes that should have read-only access.
            readOnly: ['active'],
        });

        // define default entity properties
        this.defines([
            'number',
            'name',
            'status',
            'source',
            'grandTotal',
            'discount',
            'currency',
            'dateCreated',
            'dateClosed',
            'paymentMethod',
        ]);
    }

    setNumber(number) {
        return this.setProperty('number', number);
    }

    getNumber(def) {
        return this.getProperty('number', def);
    }

    setName(name) {
        return this.setProperty('name', name);
    }

    getName(def) {
        return this.getProperty('name', def);
    }

    setStatus(status) {
        return this.setProperty('status', status);
    }

    getStatus(def) {
        return this.getProperty('status', def);
    }

    setSource(source) {
        return this.setProperty('source', source);
    }

    getSource(def) {
        return this.getProperty('source', def);
    }

    setGrandTotal(grandTotal) {
        return this.setProperty('grandTotal', grandTotal);
    }

    getGrandTotal(def) {
        return this.getProperty('grandTotal', def);
    }

    setDiscount(discount) {
        return this.setProperty('discount', discount);
    }

    getDiscount(def) {
        return this.getProperty('discount', def);
    }

    setCurrency(currency) {
        return this.setProperty('currency', currency);
    }

    getCurrency(def) {
        return this.getProperty('currency', def);
    }

    setDateCreated(dateCreated) {
        return this.setProperty('dateCreated', dateCreated);
    }

    getDateCreated(def) {
        return this.getProperty('dateCreated', def);
    }

    setDateClosed(dateClosed) {
        return this.setProperty('dateClosed', dateClosed);
    }

    getDateClosed(def) {
        return this.getProperty('dateClosed', def);
    }

    setPaymentMethod(paymentMethod) {
        return this.setProperty('paymentMethod', paymentMethod);
    }

    getPaymentMethod(def) {
        return this.getProperty('paymentMethod', def);
    }

    setActive() {
        return this.setProperty('active', true);
    }
}
