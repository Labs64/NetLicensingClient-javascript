/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import BaseEntity from './BaseEntity';
import ProductDiscount from './ProductDiscount';

/**
 * The discounts map
 * @type {{}}
 * @private
 */
const discountsMap = new WeakMap();

/**
 * An identifier that show if discounts was touched
 * @type {{}}
 * @private
 */
const discountsTouched = new WeakMap();

/**
 * NetLicensing  Product entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the product. Vendor can assign this number when creating a product or
 * let NetLicensing  generate one. Read-only after creation of the first licensee for the product.
 * @property string number
 *
 * If set to false, the product is disabled. No new licensees can be registered for the product,
 * existing licensees can not obtain new licenses.
 * @property boolean active
 *
 * Product name. Together with the version identifies the product for the end customer.
 * @property string name
 *
 * Product version. Convenience parameter, additional to the product name.
 * @property float version
 *
 * If set to 'true', non-existing licensees will be created at first validation attempt.
 * @property boolean licenseeAutoCreate
 *
 * Licensee secret mode for product.Supported types: "DISABLED", "PREDEFINED", "CLIENT"
 * @property boolean licenseeSecretMode
 *
 * Product description. Optional.
 * @property string description
 *
 * Licensing information. Optional.
 * @property string licensingInfo
 *
 * @property boolean inUse
 *
 * Arbitrary additional user properties of string type may be associated with each product. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 *
 * @constructor
 */
export default class Product extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
                number: 'string',
                active: 'boolean',
                name: 'string',
                version: 'string',
                description: 'string',
                licensingInfo: 'string',
                licenseeAutoCreate: 'boolean',
                licenseeSecretMode: 'string',
                inUse: 'boolean',
            },
        });

        discountsMap.set(this, []);
        discountsTouched.set(this, false);
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

    setVersion(version) {
        return this.setProperty('version', version);
    }

    getVersion(def) {
        return this.getProperty('version', def);
    }

    setLicenseeAutoCreate(licenseeAutoCreate) {
        return this.setProperty('licenseeAutoCreate', licenseeAutoCreate);
    }

    getLicenseeAutoCreate(def) {
        return this.getProperty('licenseeAutoCreate', def);
    }

    /**
     * @deprecated use ProductModule.setLicenseeSecretMode instead
     */
    setLicenseeSecretMode(licenseeSecretMode) {
        return this.setProperty('licenseeSecretMode', licenseeSecretMode);
    }

    /**
     * @deprecated use ProductModule.getLicenseeSecretMode instead
     */
    getLicenseeSecretMode(def) {
        return this.getProperty('licenseeSecretMode', def);
    }

    setDescription(description) {
        return this.setProperty('description', description);
    }

    getDescription(def) {
        return this.getProperty('description', def);
    }

    setLicensingInfo(licensingInfo) {
        return this.setProperty('licensingInfo', licensingInfo);
    }

    getLicensingInfo(def) {
        return this.getProperty('licensingInfo', def);
    }

    getInUse(def) {
        return this.getProperty('inUse', def);
    }

    /**
     * Add discount to product
     *
     * @param discount NetLicensing.ProductDiscount
     * @returns {NetLicensing.Product}
     */
    addDiscount(discount) {
        const discounts = discountsMap.get(this);

        let productDiscount = discount;

        if (typeof productDiscount !== 'string' && !(productDiscount instanceof ProductDiscount)) {
            productDiscount = new ProductDiscount(productDiscount);
        }

        discounts.push(productDiscount);
        discountsMap.set(this, discounts);
        discountsTouched.set(this, true);

        return this;
    }

    /**
     * Set discounts to product
     * @param discounts
     */
    setProductDiscounts(discounts) {
        discountsMap.set(this, []);
        discountsTouched.set(this, true);

        if (!discounts) return this;

        if (Array.isArray(discounts)) {
            discounts.forEach((discount) => {
                this.addDiscount(discount);
            });

            return this;
        }

        this.addDiscount(discounts);

        return this;
    }

    /**
     * Get array of objects discounts
     * @returns {Array}
     */
    getProductDiscounts() {
        return Object.assign([], discountsMap.get(this));
    }

    asPropertiesMap() {
        const propertiesMap = super.asPropertiesMap();

        if (discountsMap.get(this).length) {
            propertiesMap.discount = discountsMap.get(this).map((discount) => discount.toString());
        }

        if (!propertiesMap.discount && discountsTouched.get(this)) {
            propertiesMap.discount = '';
        }

        return propertiesMap;
    }
}
