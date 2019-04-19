/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import BaseEntity from './BaseEntity';

/**
 * Country entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * @property code - Unique code of country.
 *
 * @property name - Unique name of country
 *
 * @property vatPercent - Country vat.
 *
 * @property isEu - is country in EU.
 */
export default class Country extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
                code: 'string',
                name: 'string',
                vatPercent: 'int',
                isEu: 'boolean',
            },
        });
    }

    setCode(code) {
        return this.setProperty('code', code);
    }

    getCode(def) {
        return this.getProperty('code', def);
    }

    setName(name) {
        return this.setProperty('name', name);
    }

    getName(def) {
        return this.getProperty('name', def);
    }

    setVatPercent(vat) {
        return this.setProperty('vatPercent', vat);
    }

    getVatPercent(def) {
        return this.getProperty('vatPercent', def);
    }

    setIsEu(isEu) {
        return this.setProperty('isEu', isEu);
    }

    getIsEu(def) {
        return this.getProperty('isEu', def);
    }
}
