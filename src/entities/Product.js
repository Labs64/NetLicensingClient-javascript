/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

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

NetLicensing .Product = function () {
    NetLicensing .BaseEntity.apply(this, arguments);

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
            licenseeSecretMode: 'string',
            inUse: 'boolean'
        }
    });

    var __productDiscounts = [];
    var __productDiscountsTouched = false;

    /**
     * Add discount to product
     * 
     * @param discount NetLicensing .ProductDiscount
     * @returns {NetLicensing .Product}
     */
    this.addDiscount = function (discount) {
        if (!(discount instanceof NetLicensing .ProductDiscount)) {
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

    var parentAsPropertiesMap = this.asPropertiesMap;
    this.asPropertiesMap = function () {

        var map = parentAsPropertiesMap.call(this);

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
    this.__defines(['number', 'active', 'name', 'version', 'description', 'licensingInfo', 'licenseeAutoCreate', 'licenseeSecretMode']);
    this.__define('inUse', true);

    //make methods not changeable
    NetLicensing .DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(NetLicensing .Product, 'LICENSEE_SECRET_MODE_DISABLED', {value: 'DISABLED'});
Object.defineProperty(NetLicensing .Product, 'LICENSEE_SECRET_MODE_PREDEFINED', {value: 'PREDEFINED'});
Object.defineProperty(NetLicensing .Product, 'LICENSEE_SECRET_MODE_CLIENT', {value: 'CLIENT'});

NetLicensing .Product.prototype = Object.create(NetLicensing .BaseEntity.prototype);
NetLicensing .Product.prototype.constructor = NetLicensing .Product;

NetLicensing .Product.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing .Product.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing .Product.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

NetLicensing .Product.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

NetLicensing .Product.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing .Product.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing .Product.prototype.setVersion = function (version) {
    return this.setProperty('version', version);
};

NetLicensing .Product.prototype.getVersion = function (def) {
    return this.getProperty('version', def);
};

NetLicensing .Product.prototype.setLicenseeAutoCreate = function (licenseeAutoCreate) {
    return this.setProperty('licenseeAutoCreate', licenseeAutoCreate);
};

NetLicensing .Product.prototype.getLicenseeAutoCreate = function (def) {
    return this.getProperty('licenseeAutoCreate', def);
};

NetLicensing .Product.prototype.setLicenseeSecretMode = function (licenseeSecretMode) {
    return this.setProperty('licenseeSecretMode', licenseeSecretMode);
};

NetLicensing .Product.prototype.getLicenseeSecretMode = function (def) {
    return this.getProperty('licenseeSecretMode', def);
};

NetLicensing .Product.prototype.setDescription = function (description) {
    return this.setProperty('description', description);
};

NetLicensing .Product.prototype.getDescription = function (def) {
    return this.getProperty('description', def);
};

NetLicensing .Product.prototype.setLicensingInfo = function (licensingInfo) {
    return this.setProperty('licensingInfo', licensingInfo);
};

NetLicensing .Product.prototype.getLicensingInfo = function (def) {
    return this.getProperty('licensingInfo', def);
};

NetLicensing .Product.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

NetLicensing .Product.prototype.__setListDiscount = function (properties) {
    if (!properties) return;
    var length = properties.length;
    var discount = new NetLicensing .ProductDiscount();
    for (var i = 0; i < length; i++) {
        discount.setProperty(properties[i].name, properties[i].value);
    }
    this.addDiscount(discount);
    return this;
};

//make methods not changeable
NetLicensing .DefineUtil.notChangeable(NetLicensing .Product.prototype, ['constructor', '__setListDiscount']);

//make methods not enumerable
NetLicensing .DefineUtil.notEnumerable(NetLicensing .Product.prototype, [
    'setNumber',
    'getNumber',
    'setName',
    'getName',
    'setActive',
    'getActive',
    'setVersion',
    'getVersion',
    'setLicenseeAutoCreate',
    'getLicenseeAutoCreate',
    'setLicenseeSecretMode',
    'getLicenseeSecretMode',
    'setDescription',
    'getDescription',
    'setLicensingInfo',
    'getLicensingInfo',
    'getInUse',
]);