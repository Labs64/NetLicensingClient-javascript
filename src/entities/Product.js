/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * NetLicensing Product entity.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number that identifies the product. Vendor can assign this number when creating a product or
 * let NetLicensing generate one. Read-only after creation of the first licensee for the product.
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

Netlicensing.Product = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            active: 'boolean',
            name: 'string',
            version: 'string',
            description: 'string',
            licensingInfo: 'string',
            licenseeAutoCreate: 'boolean',
            inUse: 'boolean'
        }
    });

    var __productDiscounts = [];
    var __productDiscountsTouched = false;

    /**
     * Add discount to product
     * @param discount Netlicensing.ProductDiscount
     * @returns {Netlicensing.Product}
     */
    this.addDiscount = function (discount) {
        if (!(discount instanceof Netlicensing.ProductDiscount)) {
            throw new TypeError('discount must be an instance of ProductDiscount');
        }
        __productDiscounts.push(discount);
        __productDiscountsTouched = true;

        return this;
    };

    /**
     * Set discounts to product
     * @param discounts
     */
    this.setProductDiscounts = function (discounts) {
        __productDiscounts = [];
        __productDiscountsTouched = true;

        if (!discounts) return this;

        if (Array.isArray(discounts)) {
            var length = discounts.length;
            for (var i = 0; i < length; i++) {
                this.addDiscount(discounts[i]);
            }
            return this;
        }

        this.addDiscount(discounts);

        return this;
    };

    /**
     * Get array of objects discounts
     * @returns {Array}
     */
    this.getProductDiscounts = function () {
        return __productDiscounts;
    };

    this.asPropertiesMap = function () {
        var map = this.getProperties();

        var length = __productDiscounts.length;

        if (length) {
            map.discount = [];
            for (var i = 0; i < length; i++) {
                map.discount.push(__productDiscounts[i].toString());
            }
        }

        if (!map.discount && __productDiscountsTouched) {
            map.discount = '';
        }

        return map;
    };

    //define default entity properties
    this.__defines(['number', 'active', 'name', 'version', 'description', 'licensingInfo', 'licenseeAutoCreate']);
    this.__define('inUse', true);

    //make methods not changeable
    this.__notChangeable(['addDiscount', 'getProductDiscounts', 'asPropertiesMap']);
};

Netlicensing.Product.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.Product.prototype.constructor = Netlicensing.Product;

Netlicensing.Product.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.Product.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.Product.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Netlicensing.Product.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Netlicensing.Product.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.Product.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.Product.prototype.setVersion = function (version) {
    return this.setProperty('version', version);
};

Netlicensing.Product.prototype.getVersion = function (def) {
    return this.getProperty('version', def);
};

Netlicensing.Product.prototype.setLicenseeAutoCreate = function (licenseeAutoCreate) {
    return this.setProperty('licenseeAutoCreate', licenseeAutoCreate);
};

Netlicensing.Product.prototype.getLicenseeAutoCreate = function (def) {
    return this.getProperty('licenseeAutoCreate', def);
};

Netlicensing.Product.prototype.setDescription = function (description) {
    return this.setProperty('description', description);
};

Netlicensing.Product.prototype.getDescription = function (def) {
    return this.getProperty('description', def);
};

Netlicensing.Product.prototype.setLicensingInfo = function (licensingInfo) {
    return this.setProperty('licensingInfo', licensingInfo);
};

Netlicensing.Product.prototype.getLicensingInfo = function (def) {
    return this.getProperty('licensingInfo', def);
};

Netlicensing.Product.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

Netlicensing.Product.prototype.__setListDiscount = function (properties) {
    if (!properties) return;
    var length = properties.length;
    var discount = new Netlicensing.ProductDiscount();
    for (var i = 0; i < length; i++) {
        discount.setProperty(properties[i].name, properties[i].value);
    }
    this.addDiscount(discount);
    return this;
};

//make methods not changeable
Object.defineProperty(Netlicensing.Product.prototype, '__setListDiscount', {
    writable: false,
    enumerable: false,
    configurable: false
});