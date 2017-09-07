/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

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

Nlic.Product = function () {
    Nlic.BaseEntity.apply(this, arguments);

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

    /**
     * Add discount to product
     * @param discount Nlic.ProductDiscount
     * @returns {Nlic.Product}
     */
    this.addDiscount = function (discount) {
        if (!(discount instanceof Nlic.ProductDiscount)) {
            throw new TypeError('discount must be an instance of ProductDiscount');
        }
        __productDiscounts.push(discount);
        return this;
    };

    /**
     * Remove discount from product
     * @param totalPrice float|Nlic.ProductDiscount
     * @returns {Nlic.Product}
     */
    this.removeDiscount = function (totalPrice) {
        totalPrice = (totalPrice instanceof Nlic.ProductDiscount) ? totalPrice.getProperty('totalPrice') : totalPrice;
        var length = __productDiscounts.length;

        for (var i = 0; i < length; i++) {
            if (__productDiscounts[i].getProperty('totalPrice') == totalPrice) {
                __productDiscounts.splice(i, 1);
                break;
            }
        }
        return this;
    };

    /**
     * Remove discounts from product
     * @param discounts array
     * @returns {Nlic.Product}
     */
    this.removeDiscounts = function (discounts) {
        if (!discounts) {
            __productDiscounts = [];
            return this;
        }

        var length = discounts.length;

        for (var i = 0; i < length; i++) {
            this.removeDiscount(discounts[i]);
        }

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

        map.discount = (length) ? [] : '';

        if (length) {
            for (var i = 0; i < length; i++) {
                map.discount.push(__productDiscounts[i].toString());
            }
        }

        return map;
    };

    //define default entity properties
    this.__defines(['number', 'active', 'name', 'version', 'description', 'licensingInfo', 'licenseeAutoCreate']);
    this.__define('inUse', true);

    //make methods not changeable
    this.__notChangeable(['addDiscount', 'getProductDiscounts', 'asPropertiesMap']);
};

Nlic.Product.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.Product.prototype.constructor = Nlic.Product;

Nlic.Product.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.Product.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.Product.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.Product.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.Product.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Nlic.Product.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Nlic.Product.prototype.setVersion = function (version) {
    return this.setProperty('version', version);
};

Nlic.Product.prototype.getVersion = function (def) {
    return this.getProperty('version', def);
};

Nlic.Product.prototype.setLicenseeAutoCreate = function (licenseeAutoCreate) {
    return this.setProperty('licenseeAutoCreate', licenseeAutoCreate);
};

Nlic.Product.prototype.getLicenseeAutoCreate = function (def) {
    return this.getProperty('licenseeAutoCreate', def);
};

Nlic.Product.prototype.setDescription = function (description) {
    return this.setProperty('description', description);
};

Nlic.Product.prototype.getDescription = function (def) {
    return this.getProperty('description', def);
};

Nlic.Product.prototype.setLicensingInfo = function (licensingInfo) {
    return this.setProperty('licensingInfo', licensingInfo);
};

Nlic.Product.prototype.getLicensingInfo = function (def) {
    return this.getProperty('licensingInfo', def);
};

Nlic.Product.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

Nlic.Product.prototype.__setListDiscount = function (properties) {
    if (!properties) return;
    var length = properties.length;
    var discount = new Nlic.ProductDiscount();
    for (var i = 0; i < length; i++) {
        discount.setProperty(properties[i].name, properties[i].value);
    }
    this.addDiscount(discount);
    return this;
};

//make methods not changeable
Object.defineProperty(Nlic.Product.prototype, '__setListDiscount', {
    writable: false,
    enumerable: false,
    configurable: false
});