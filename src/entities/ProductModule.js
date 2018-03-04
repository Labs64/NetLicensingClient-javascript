/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import BaseEntity from './BaseEntity';

/**
 * Product module entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the product module. Vendor can assign
 * this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first
 * licensee for the product.
 * @property string number
 *
 * If set to false, the product module is disabled. Licensees can not obtain any new licenses for this
 * product module.
 * @property boolean active
 *
 * Product module name that is visible to the end customers in NetLicensing Shop.
 * @property string name
 *
 * Licensing model applied to this product module. Defines what license templates can be
 * configured for the product module and how licenses for this product module are processed during validation.
 * @property string licensingModel
 *
 * Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
 * @property integer maxCheckoutValidity
 *
 * Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.
 * @property integer yellowThreshold
 *
 * Remaining time volume for red level. Mandatory for 'Rental' licensing model.
 * @property integer redThreshold
 *
 * License template. Mandatory for 'Try & Buy' licensing model. Supported types: "TIMEVOLUME", "FEATURE".
 * @property string licenseTemplate
 *
 * @constructor
 */
export default class ProductModule extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
                number: 'string',
                active: 'boolean',
                name: 'string',
                licensingModel: 'string',
                maxCheckoutValidity: 'int',
                yellowThreshold: 'int',
                redThreshold: 'int',
                licenseTemplate: 'string',
                inUse: 'boolean',
            },
            // The attributes that should have read-only access.
            readOnly: ['inUse'],
        });

        // define default entity properties
        this.defines([
            'number',
            'active',
            'name',
            'licensingModel',
            'maxCheckoutValidity',
            'yellowThreshold',
            'redThreshold',
            'licenseTemplate',
            'inUse',
        ]);
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

    setLicensingModel(licensingModel) {
        return this.setProperty('licensingModel', licensingModel);
    }

    getLicensingModel(def) {
        return this.getProperty('licensingModel', def);
    }

    setMaxCheckoutValidity(maxCheckoutValidity) {
        return this.setProperty('maxCheckoutValidity', maxCheckoutValidity);
    }

    getMaxCheckoutValidity(def) {
        return this.getProperty('maxCheckoutValidity', def);
    }

    setYellowThreshold(yellowThreshold) {
        return this.setProperty('yellowThreshold', yellowThreshold);
    }

    getYellowThreshold(def) {
        return this.getProperty('yellowThreshold', def);
    }

    setRedThreshold(redThreshold) {
        return this.setProperty('redThreshold', redThreshold);
    }

    getRedThreshold(def) {
        return this.getProperty('redThreshold', def);
    }

    setLicenseTemplate(licenseTemplate) {
        return this.setProperty('licenseTemplate', licenseTemplate);
    }

    getLicenseTemplate(def) {
        return this.getProperty('licenseTemplate', def);
    }

    getInUse(def) {
        return this.getProperty('inUse', def);
    }
}
