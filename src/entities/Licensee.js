/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import BaseEntity from './BaseEntity';

/**
 * Licensee entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this
 * number when creating a licensee or let NetLicensing  generate one. Read-only after creation of the first license for
 * the licensee.
 * @property string number
 *
 * Licensee name.
 * @property string name
 *
 * If set to false, the licensee is disabled. Licensee can not obtain new licenses, and validation is
 * disabled (tbd).
 * @property boolean active
 *
 * Licensee Secret for licensee
 * @property string licenseeSecret
 *
 * Mark licensee for transfer.
 * @property boolean markedForTransfer
 *
 * Arbitrary additional user properties of string type may be associated with each licensee. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, productNumber
 *
 * @constructor
 */
export default class Licensee extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
                number: 'string',
                active: 'boolean',
                name: 'string',
                licenseeSecret: 'string',
                markedForTransfer: 'boolean',
                inUse: 'boolean',
            },
        });
    }

    setNumber(number) {
        return this.setProperty('number', number);
    }

    getNumber(def) {
        return this.getProperty('number', def);
    }

    setActive(active) {
        return this.setProperty('active', active);
    }

    getActive(def) {
        return this.getProperty('active', def);
    }

    setName(name) {
        return this.setProperty('name', name);
    }

    getName(def) {
        return this.getProperty('name', def);
    }

    setProductNumber(productNumber) {
        return this.setProperty('productNumber', productNumber);
    }

    getProductNumber(def) {
        return this.getProperty('productNumber', def);
    }

    /**
     * @deprecated
     */
    setLicenseeSecret(licenseeSecret) {
        return this.setProperty('licenseeSecret', licenseeSecret);
    }

    /**
     * @deprecated
     */
    getLicenseeSecret(def) {
        return this.getProperty('licenseeSecret', def);
    }

    setMarkedForTransfer(markedForTransfer) {
        return this.setProperty('markedForTransfer', markedForTransfer);
    }

    getMarkedForTransfer(def) {
        return this.getProperty('markedForTransfer', def);
    }

    getInUse(def) {
        return this.getProperty('inUse', def);
    }
}
