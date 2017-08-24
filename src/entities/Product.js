/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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

function Product() {
    BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            active: 'boolean',
            version: 'float'
        }
    });

    //define default entity properties
    this.__defines(['number', 'active', 'name', 'version', 'description', 'licensingInfo']);
    this.__define('inUse', true);

    var __productDiscounts = [];

    this.addDiscount = function (discount) {
        if (!discount instanceof ProductDiscount) {
            throw new Error('Discount must be an instance of ProductDiscount');
        }
        __productDiscounts.push(discount);
        return this;
    };

    this.getProductDiscounts = function () {
        return __productDiscounts;
    };

    //make methods not changeable
    Object.defineProperties(this, {
        addDiscount: {writable: false, enumerable: false, configurable: false},
        getProductDiscounts: {writable: false, enumerable: false, configurable: false}
    });
}

Product.prototype = Object.create(BaseEntity.prototype);
Product.prototype.constructor = Product;

Product.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Product.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Product.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Product.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Product.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Product.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Product.prototype.setVersion = function (version) {
    return this.setProperty('version', version);
};

Product.prototype.getVersion = function (def) {
    return this.getProperty('version', def);
};

Product.prototype.setDescription = function (description) {
    return this.setProperty('description', description);
};

Product.prototype.getDescription = function (def) {
    return this.getProperty('description', def);
};

Product.prototype.setLicensingInfo = function (licensingInfo) {
    return this.setProperty('licensingInfo', licensingInfo);
};

Product.prototype.getLicensingInfo = function (def) {
    return this.getProperty('licensingInfo', def);
};

Product.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};