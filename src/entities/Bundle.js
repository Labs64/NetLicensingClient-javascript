/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import BaseEntity from './BaseEntity';

/**
 * NetLicensing Bundle entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the bundle. Vendor can assign this number when creating a bundle or
 * let NetLicensing generate one.
 * @property string number
 *
 * If set to false, the bundle is disabled.
 * @property boolean active
 *
 * Bundle name.
 * @property string name
 *
 * Arbitrary additional user properties of string type may be associated with each bundle. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 *
 * @constructor
 */
export default class Bundle extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
                number: 'string',
                active: 'boolean',
                name: 'string',
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

    setDescription(description) {
        return this.setProperty('description', description);
    }

    getDescription(def) {
        return this.getProperty('description', def);
    }

    setLicenseTemplateNumbers(licenseTemplateNumbers) {
        const numbers = (Array.isArray(licenseTemplateNumbers))
            ? licenseTemplateNumbers.join(',')
            : licenseTemplateNumbers;

        return this.setProperty('licenseTemplateNumbers', numbers);
    }

    getLicenseTemplateNumbers(def) {
        const numbers = this.getProperty('licenseTemplateNumbers', def);
        return (numbers) ? numbers.split(',') : numbers;
    }

    addLicenseTemplateNumber(licenseTemplateNumber) {
        const numbers = this.getLicenseTemplateNumbers([]);
        numbers.push(licenseTemplateNumber);

        return this.setLicenseTemplateNumbers(numbers);
    }

    removeLicenseTemplateNumber(licenseTemplateNumber) {
        const numbers = this.getLicenseTemplateNumbers([]);
        numbers.splice(numbers.indexOf(licenseTemplateNumber), 1);

        return this.setLicenseTemplateNumbers(numbers);
    }
}
