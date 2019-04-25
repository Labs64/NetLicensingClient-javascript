/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import BaseEntity from './BaseEntity';

/**
 * License template entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the license template. Vendor can
 * assign this number when creating a license template or let NetLicensing  generate one.
 * Read-only after creation of the first license from this license template.
 * @property string number
 *
 * If set to false, the license template is disabled. Licensee can not obtain any new licenses off this
 * license template.
 * @property boolean active
 *
 * Name for the licensed item.
 * @property string name
 *
 * Type of licenses created from this license template. Supported types: "FEATURE", "TIMEVOLUME",
 * "FLOATING", "QUANTITY"
 * @property string licenseType
 *
 * Price for the license. If >0, it must always be accompanied by the currency specification.
 * @property double price
 *
 * Specifies currency for the license price. Check data types to discover which currencies are
 * supported.
 * @property string currency
 *
 * If set to true, every new licensee automatically gets one license out of this license template on
 * creation. Automatic licenses must have their price set to 0.
 * @property boolean automatic
 *
 * If set to true, this license template is not shown in NetLicensing  Shop as offered for purchase.
 * @property boolean hidden
 *
 * If set to true, licenses from this license template are not visible to the end customer, but
 * participate in validation.
 * @property boolean hideLicenses
 *
 * Mandatory for 'TIMEVOLUME' license type.
 * @property integer timeVolume
 *
 * Time volume period for 'TIMEVOLUME' license type. Supported types: "DAY", "WEEK", "MONTH", "YEAR"
 * @property integer timeVolumePeriod
 *
 * Mandatory for 'FLOATING' license type.
 * @property integer maxSessions
 *
 * Mandatory for 'QUANTITY' license type.
 * @property integer quantity
 *
 * @constructor
 */
export default class LicenseTemplate extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
                number: 'string',
                active: 'boolean',
                name: 'string',
                licenseType: 'string',
                price: 'double',
                currency: 'string',
                automatic: 'boolean',
                hidden: 'boolean',
                hideLicenses: 'boolean',
                timeVolume: 'int',
                timeVolumePeriod: 'string',
                maxSessions: 'int',
                quantity: 'int',
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

    setLicenseType(licenseType) {
        return this.setProperty('licenseType', licenseType);
    }

    getLicenseType(def) {
        return this.getProperty('licenseType', def);
    }

    setPrice(price) {
        return this.setProperty('price', price);
    }

    getPrice(def) {
        return this.getProperty('price', def);
    }

    setCurrency(currency) {
        return this.setProperty('currency', currency);
    }

    getCurrency(def) {
        return this.getProperty('currency', def);
    }

    setAutomatic(automatic) {
        return this.setProperty('automatic', automatic);
    }

    getAutomatic(def) {
        return this.getProperty('automatic', def);
    }

    setHidden(hidden) {
        return this.setProperty('hidden', hidden);
    }

    getHidden(def) {
        return this.getProperty('hidden', def);
    }

    setHideLicenses(hideLicenses) {
        return this.setProperty('hideLicenses', hideLicenses);
    }

    getHideLicenses(def) {
        return this.getProperty('hideLicenses', def);
    }

    setTimeVolume(timeVolume) {
        return this.setProperty('timeVolume', timeVolume);
    }

    getTimeVolume(def) {
        return this.getProperty('timeVolume', def);
    }

    setTimeVolumePeriod(timeVolumePeriod) {
        return this.setProperty('timeVolumePeriod', timeVolumePeriod);
    }

    getTimeVolumePeriod(def) {
        return this.getProperty('timeVolumePeriod', def);
    }

    setMaxSessions(maxSessions) {
        return this.setProperty('maxSessions', maxSessions);
    }

    getMaxSessions(def) {
        return this.getProperty('maxSessions', def);
    }

    setQuantity(quantity) {
        return this.setProperty('quantity', quantity);
    }

    getQuantity(def) {
        return this.getProperty('quantity', def);
    }

    getInUse(def) {
        return this.getProperty('inUse', def);
    }
}
