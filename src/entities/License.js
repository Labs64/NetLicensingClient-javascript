/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import BaseEntity from './BaseEntity';

/**
 * License entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can
 * assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation
 * transaction status is set to closed.
 * @property string number
 *
 * Name for the licensed item. Set from license template on creation, if not specified explicitly.
 * @property string name
 *
 * If set to false, the license is disabled. License can be re-enabled, but as long as it is disabled,
 * the license is excluded from the validation process.
 * @property boolean active
 *
 * price for the license. If >0, it must always be accompanied by the currency specification. Read-only,
 * set from license template on creation.
 * @property float price
 *
 * specifies currency for the license price. Check data types to discover which currencies are
 * supported. Read-only, set from license template on creation.
 * @property string currency
 *
 * If set to true, this license is not shown in NetLicensing Shop as purchased license. Set from license
 * template on creation, if not specified explicitly.
 * @property boolean hidden
 *
 * @property string startDate
 *
 * Arbitrary additional user properties of string type may be associated with each license. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, licenseeNumber,
 * licenseTemplateNumber.
 */
export default class License extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
                number: 'string',
                active: 'boolean',
                name: 'string',
                price: 'float',
                hidden: 'boolean',
                parentfeature: 'string',
                timeVolume: 'int',
                startDate: 'date',
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

    setHidden(hidden) {
        return this.setProperty('hidden', hidden);
    }

    getHidden(def) {
        return this.getProperty('hidden', def);
    }

    setParentfeature(parentfeature) {
        return this.setProperty('parentfeature', parentfeature);
    }

    getParentfeature(def) {
        return this.getProperty('parentfeature', def);
    }

    setTimeVolume(timeVolume) {
        return this.setProperty('timeVolume', timeVolume);
    }

    getTimeVolume(def) {
        return this.getProperty('timeVolume', def);
    }

    setStartDate(startDate) {
        return this.setProperty('startDate', startDate);
    }

    getStartDate(def) {
        return this.getProperty('startDate', def);
    }

    getInUse(def) {
        return this.getProperty('inUse', def);
    }

    getPrice(def) {
        return this.getProperty('price', def);
    }

    getCurrency(def) {
        return this.getProperty('currency', def);
    }
}
