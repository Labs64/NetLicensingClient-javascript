/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

Nlic.BaseEntity = function (properties) {

    /**
     * Object Handle
     * @type {Nlic.BaseEntity}
     */
    var self = this;

    /**
     * The entity properties.
     * @type {{}}
     * @private
     */
    var __properties = {};

    /**
     * List of properties that was defined
     * @type {{}}
     * @private
     */
    var __defined = {};

    /**
     * Set a given property on the entity.
     * @param property
     * @param value
     * @returns {Nlic.BaseEntity}
     */
    this.setProperty = function (property, value) {
        this.__checkProperty(property, value);

        value = self.__cast(property, value);

        //check property after cast
        this.__checkProperty(property, value);

        this.__define(property);

        if (typeof value === 'object') {
            value = (Array.isArray(value)) ? Object.assign([], value) : (value instanceof Date) ? new Date(value) : Object.assign({}, value);
        }

        __properties[property] = value;

        return this;
    };

    /**
     * Alias for setProperty
     * @param property
     * @param value
     * @returns {Nlic.BaseEntity}
     */
    this.addProperty = function (property, value) {
        return this.setProperty(property, value);
    };

    /**
     * Set the entity properties.
     * @param properties
     * @returns {Nlic.BaseEntity}
     */
    this.setProperties = function (properties) {

        this.removeProperties();

        for (var key in properties) {
            if (!properties.hasOwnProperty(key)) continue;
            this.setProperty(key, properties[key]);
        }

        return this;
    };

    /**
     * Get an property from the entity.
     * @param property
     * @param def
     * @returns {*}
     */
    this.getProperty = function (property, def) {
        return (__properties.hasOwnProperty(property)) ? __properties[property] : def;
    };

    /**
     * Get all of the current properties on the entity.
     */
    this.getProperties = function () {
        return Object.assign({}, __properties);
    };

    /**
     * Remove property
     * @param property
     * @returns {Nlic.BaseEntity}
     */
    this.removeProperty = function (property) {
        delete __properties[property];
        this.__removeDefine(property);
        return this;
    };

    /**
     * Remove properties
     * @param properties
     */
    this.removeProperties = function (properties) {
        properties = properties || Object.keys(__properties);

        var length = properties.length;

        for (var i = 0; i < length; i++) {
            this.removeProperty(properties[i]);
        }
    };

    /**
     * Get properties map
     */
    this.asPropertiesMap = function () {
        return this.getProperties();
    };

    /**
     * Check if property has defined
     * @param property
     * @protected
     */
    this.__hasDefine = function (property) {
        return Boolean(__defined[property]);
    };

    /**
     * Define property getter and setter
     * @param property
     * @param onlyGetter
     * @protected
     */
    this.__define = function (property, onlyGetter) {
        if (this.__hasDefine(property)) return;

        //delete property
        delete this[property];

        var descriptors = {
            enumerable: true,
            configurable: true,
            get: function () {
                return self.getProperty(property)
            }
        };

        if (!onlyGetter) {
            descriptors.set = function (value) {
                return self.setProperty(property, value);
            };
        }

        Object.defineProperty(this, property, descriptors);
    };

    /**
     * Define properties getter and setter
     * @param properties
     * @param onlyGetter
     * @protected
     */
    this.__defines = function (properties, onlyGetter) {
        var length = properties.length;
        for (var i = 0; i < length; i++) {
            this.__define(properties[i], onlyGetter);
        }
    };

    /**
     * Remove property getter and setter
     * @param property
     * @protected
     */
    this.__removeDefine = function (property) {
        if (!this.__hasDefine(property)) return;
        delete this[property];
        delete __defined[property];
    };

    /**
     * Determine whether an property should be cast to a native type.
     * @param property
     * @returns {boolean}
     * @protected
     */
    this.__hasCast = function (property) {
        return (this.casts && this.casts[property]);
    };

    /**
     * Get the type of cast for a entity property.
     * @param property
     * @returns {string}
     * @protected
     */
    this.__getCastType = function (property) {
        return this.casts[property].trim().toLowerCase();
    };

    /**
     * Cast an property to a native JS type.
     * @param property
     * @param value
     * @returns {*}
     * @protected
     */
    this.__cast = function (property, value) {
        if (!this.__hasCast(property)) return value;

        switch (this.__getCastType(property)) {
            case 'str':
            case 'string':
                return String(value);
            case 'int':
            case 'integer':
                return parseInt(value, 10);
            case 'float':
            case 'double':
                return parseFloat(value);
            case 'bool':
            case 'boolean':
                return (value && value != 'false') ? true : false;
            case 'date':
                return (value === 'now') ? 'now' : new Date(String(value));
        }
        return value;
    };

    /**
     * Check if property is valid
     * @param property
     * @param value
     * @private
     */
    this.__checkProperty = function (property, value) {
        if (!Nlic.CheckUtils.isValid(property) || typeof property === 'object')  throw new TypeError('Bad property name:' + property);
        if (!Nlic.CheckUtils.isValid(value)) throw new TypeError('Property ' + property + ' has bad value ' + value);
    };

    /**
     * Make methods not changeable
     * @param methods
     * @protected
     */
    this.__notChangeable = function (methods) {
        var noChangeable = {};

        methods = Array.isArray(methods) ? methods : [methods];
        var length = methods.length;

        for (var i = 0; i < length; i++) {
            noChangeable[methods[i]] = {writable: false, enumerable: false, configurable: false};
        }

        Object.defineProperties(this, noChangeable);
    };

    //make methods not changeable
    this.__notChangeable([
        'setProperty',
        'addProperty',
        'setProperties',
        'getProperty',
        'getProperties',
        'removeProperty',
        '__hasDefine',
        '__define',
        '__defines',
        '__removeDefine',
        '__hasCast',
        '__getCastType',
        '__cast',
        '__checkProperty',
        '__noChangeable'
    ]);

    this.setProperties(properties);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

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
 * @property boolean $hidden
 *
 * @property string startDate
 *
 * Arbitrary additional user properties of string type may be associated with each license. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, licenseeNumber,
 * licenseTemplateNumber.
 *
 * @constructor
 */

Nlic.License = function () {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            active: 'boolean',
            name: 'string',
            price: 'float',
            hidden: 'boolean',
            parentfeature: 'string',
            timeVolume: 'int',
            startDate: 'date',
            inUse: 'boolean'
        }
    });

    //define default entity properties
    this.__defines(['number', 'active', 'name', 'hidden', 'parentfeature', 'timeVolume', 'startDate']);
    this.__defines(['inUse', 'currency', 'price'], true);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.License.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.License.prototype.constructor = Nlic.License;

Nlic.License.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.License.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.License.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.License.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.License.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Nlic.License.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Nlic.License.prototype.setHidden = function (hidden) {
    return this.setProperty('hidden', hidden);
};

Nlic.License.prototype.getHidden = function (def) {
    return this.getProperty('hidden', def);
};

Nlic.License.prototype.setParentfeature = function (parentfeature) {
    return this.setProperty('parentfeature', parentfeature);
};

Nlic.License.prototype.getParentfeature = function (def) {
    return this.getProperty('parentfeature', def);
};

Nlic.License.prototype.setTimeVolume = function (timeVolume) {
    return this.setProperty('timeVolume', timeVolume);
};

Nlic.License.prototype.getTimeVolume = function (def) {
    return this.getProperty('timeVolume', def);
};

Nlic.License.prototype.setStartDate = function (startDate) {
    return this.setProperty('startDate', startDate);
};

Nlic.License.prototype.getStartDate = function (def) {
    return this.getProperty('startDate', def);
};

Nlic.License.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

Nlic.License.prototype.getPrice = function (def) {
    return this.getProperty('price', def);
};

Nlic.License.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * Licensee entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this
 * number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for
 * the licensee.
 * @property string number
 *
 * Licensee name.
 * @property string name
 *
 * If set to false, the licensee is disabled. Licensee can not obtain new licenses, and validation is
 * disabled (tbd).
 * @property boolean active
 *
 * Licensee Secret for licensee
 * @property string licenseeSecret
 *
 * Mark licensee for transfer.
 * @property boolean markedForTransfer
 *
 * Arbitrary additional user properties of string type may be associated with each licensee. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, productNumber
 *
 * @constructor
 */

Nlic.Licensee = function () {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            active: 'boolean',
            name: 'string',
            licenseeSecret: 'string',
            markedForTransfer: 'boolean',
            inUse: 'boolean'
        }
    });

    //define default entity properties
    this.__defines(['number', 'active', 'name', 'licenseeSecret', 'markedForTransfer']);
    this.__define('inUse', true);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.Licensee.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.Licensee.prototype.constructor = Nlic.Licensee;

Nlic.Licensee.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.Licensee.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.Licensee.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.Licensee.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.Licensee.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Nlic.Licensee.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Nlic.Licensee.prototype.setLicenseeSecret = function (licenseeSecret) {
    return this.setProperty('licenseeSecret', licenseeSecret);
};

Nlic.Licensee.prototype.getLicenseeSecret = function (def) {
    return this.getProperty('licenseeSecret', def);
};

Nlic.Licensee.prototype.setMarkedForTransfer = function (markedForTransfer) {
    return this.setProperty('markedForTransfer', markedForTransfer);
};

Nlic.Licensee.prototype.getMarkedForTransfer = function (def) {
    return this.getProperty('markedForTransfer', def);
};

Nlic.Licensee.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * License template entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the license template. Vendor can
 * assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the
 * first license from this license template.
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
 * If set to true, this license template is not shown in NetLicensing Shop as offered for purchase.
 * @property boolean hidden
 *
 * If set to true, licenses from this license template are not visible to the end customer, but
 * participate in validation.
 * @property boolean hideLicenses
 *
 * Mandatory for 'TIMEVOLUME' license type.
 * @property integer timeVolume
 *
 * Mandatory for 'FLOATING' license type.
 * @property integer maxSessions
 *
 * Mandatory for 'QUANTITY' license type.
 * @property integer quantity
 *
 * @constructor
 */

Nlic.LicenseTemplate = function () {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
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
            maxSessions: 'int',
            quantity: 'int',
            inUse: 'boolean',
        }
    });
    //define default entity properties
    this.__defines(['number', 'active', 'name', 'licenseType', 'price', 'currency', 'automatic', 'hidden', 'hideLicenses', 'timeVolume', 'maxSessions', 'quantity']);
    this.__define('inUse', true);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.LicenseTemplate.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.LicenseTemplate.prototype.constructor = Nlic.LicenseTemplate;

Nlic.LicenseTemplate.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.LicenseTemplate.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.LicenseTemplate.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.LicenseTemplate.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.LicenseTemplate.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Nlic.LicenseTemplate.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Nlic.LicenseTemplate.prototype.setLicenseType = function (licenseType) {
    return this.setProperty('licenseType', licenseType);
};

Nlic.LicenseTemplate.prototype.getLicenseType = function (def) {
    return this.getProperty('licenseType', def);
};

Nlic.LicenseTemplate.prototype.setPrice = function (price) {
    return this.setProperty('price', price);
};

Nlic.LicenseTemplate.prototype.getPrice = function (def) {
    return this.getProperty('price', def);
};

Nlic.LicenseTemplate.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Nlic.LicenseTemplate.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Nlic.LicenseTemplate.prototype.setAutomatic = function (automatic) {
    return this.setProperty('automatic', automatic);
};

Nlic.LicenseTemplate.prototype.getAutomatic = function (def) {
    return this.getProperty('automatic', def);
};

Nlic.LicenseTemplate.prototype.setHidden = function (hidden) {
    return this.setProperty('hidden', hidden);
};

Nlic.LicenseTemplate.prototype.getHidden = function (def) {
    return this.getProperty('hidden', def);
};

Nlic.LicenseTemplate.prototype.setHideLicenses = function (hideLicenses) {
    return this.setProperty('hideLicenses', hideLicenses);
};

Nlic.LicenseTemplate.prototype.getHideLicenses = function (def) {
    return this.getProperty('hideLicenses', def);
};

Nlic.LicenseTemplate.prototype.setTimeVolume = function (timeVolume) {
    return this.setProperty('timeVolume', timeVolume);
};

Nlic.LicenseTemplate.prototype.getTimeVolume = function (def) {
    return this.getProperty('timeVolume', def);
};

Nlic.LicenseTemplate.prototype.setMaxSessions = function (maxSessions) {
    return this.setProperty('maxSessions', maxSessions);
};

Nlic.LicenseTemplate.prototype.getMaxSessions = function (def) {
    return this.getProperty('maxSessions', def);
};

Nlic.LicenseTemplate.prototype.setQuantity = function (quantity) {
    return this.setProperty('quantity', quantity);
};

Nlic.LicenseTemplate.prototype.getQuantity = function (def) {
    return this.getProperty('quantity', def);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */

Nlic.PaymentMethod = function PaymentMethod() {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            active: 'boolean',
            'paypal.subject': 'string',
        }
    });

    //define default entity properties
    this.__defines(['number', 'active', 'paypal.subject']);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.PaymentMethod.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.PaymentMethod.prototype.constructor = Nlic.PaymentMethod;

Nlic.PaymentMethod.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.PaymentMethod.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.PaymentMethod.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.PaymentMethod.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.PaymentMethod.prototype.setPaypalSubject = function (paypalSubject) {
    return this.setProperty('paypal.subject', paypalSubject);
};

Nlic.PaymentMethod.prototype.getPaypalSubject = function (def) {
    return this.getProperty('paypal.subject', def);
};
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
     * Get array of objects discounts
     * @returns {Array}
     */
    this.getProductDiscounts = function () {
        return __productDiscounts;
    };

    this.asPropertiesMap = function () {
        var map = this.getProperties();
        map.discount = [];

        var length = __productDiscounts.length;
        for (var i = 0; i < length; i++) {
            map.discount.push(__productDiscounts[i].toString());
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
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

Nlic.ProductDiscount = function () {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            totalPrice: 'float',
            currency: 'string',
            amountFix: 'float',
            amountPercent: 'int'
        }
    });

    //define default entity properties
    this.__defines(['totalPrice', 'currency', 'amountFix', 'amountPercent']);
};

Nlic.ProductDiscount.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.ProductDiscount.prototype.constructor = Nlic.ProductDiscount;

Nlic.ProductDiscount.prototype.setTotalPrice = function (totalPrice) {
    return this.setProperty('totalPrice', totalPrice);
};

Nlic.ProductDiscount.prototype.getTotalPrice = function (def) {
    return this.getProperty('totalPrice', def);
};

Nlic.ProductDiscount.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Nlic.ProductDiscount.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Nlic.ProductDiscount.prototype.setAmountFix = function (amountFix) {
    return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
};

Nlic.ProductDiscount.prototype.getAmountFix = function (def) {
    return this.getProperty('amountFix', def);
};

Nlic.ProductDiscount.prototype.setAmountPercent = function (amountPercent) {
    return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
};

Nlic.ProductDiscount.prototype.getAmountPercent = function (def) {
    return this.getProperty('amountPercent', def);
};

Nlic.ProductDiscount.prototype.toString = function () {
    var totalPrice = this.getTotalPrice();
    var currency = this.getCurrency();
    var amount = '';

    if (this.getAmountFix(null)) amount = this.getAmountFix();
    if (this.getAmountPercent(null)) amount = this.getAmountPercent() + '%';

    return totalPrice + ';' + currency + ';' + amount;
};

//make methods not changeable
Object.defineProperty(Nlic.ProductDiscount.prototype, 'toString', {
    writable: false,
    enumerable: false,
    configurable: false
});
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

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

Nlic.ProductModule = function () {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            active: 'boolean',
            name: 'string',
            licensingModel: 'string',
            maxCheckoutValidity: 'int',
            yellowThreshold: 'int',
            redThreshold: 'int',
            licenseTemplate: 'string',
            inUse: 'boolean'
        }
    });

    //define default entity properties
    this.__defines(['number', 'active', 'name', 'licensingModel', 'maxCheckoutValidity', 'yellowThreshold', 'redThreshold', 'licenseTemplate']);
    this.__define('inUse', true);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.ProductModule.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.ProductModule.prototype.constructor = Nlic.ProductModule;

Nlic.ProductModule.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.ProductModule.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.ProductModule.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.ProductModule.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.ProductModule.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Nlic.ProductModule.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Nlic.ProductModule.prototype.setLicensingModel = function (licensingModel) {
    return this.setProperty('licensingModel', licensingModel);
};

Nlic.ProductModule.prototype.getLicensingModel = function (def) {
    return this.getProperty('licensingModel', def);
};

Nlic.ProductModule.prototype.setMaxCheckoutValidity = function (maxCheckoutValidity) {
    return this.setProperty('maxCheckoutValidity', maxCheckoutValidity);
};

Nlic.ProductModule.prototype.getMaxCheckoutValidity = function (def) {
    return this.getProperty('maxCheckoutValidity', def);
};

Nlic.ProductModule.prototype.setYellowThreshold = function (yellowThreshold) {
    return this.setProperty('yellowThreshold', yellowThreshold);
};

Nlic.ProductModule.prototype.getYellowThreshold = function (def) {
    return this.getProperty('yellowThreshold', def);
};

Nlic.ProductModule.prototype.setRedThreshold = function (redThreshold) {
    return this.setProperty('redThreshold', redThreshold);
};

Nlic.ProductModule.prototype.getRedThreshold = function (def) {
    return this.getProperty('redThreshold', def);
};

Nlic.ProductModule.prototype.setLicenseTemplate = function (licenseTemplate) {
    return this.setProperty('licenseTemplate', licenseTemplate);
};

Nlic.ProductModule.prototype.getLicenseTemplate = function (def) {
    return this.getProperty('licenseTemplate', def);
};

Nlic.ProductModule.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * Product module entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number
 * @property string number
 *
 * If set to false, the token is disabled.
 * @property boolean active
 *
 * Expiration Time
 * @property string expirationTime
 *
 * @property string vendorNumber
 *
 * Token type to be generated.
 * DEFAULT - default one-time token (will be expired after first request)
 * SHOP - shop token is used to redirect customer to the netlicensingShop(licenseeNumber is mandatory)
 * APIKEY - APIKey-token
 * @property string tokenType
 *
 * @property string licenseeNumber
 *
 * @constructor
 */

Nlic.Token = function () {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            active: 'boolean',
            expirationTime: 'date',
            vendorNumber: 'string',
            tokenType: 'string',
            licenseeNumber: 'string',
            successURL: 'string',
            successURLTitle: 'string',
            cancelURL: 'string',
            cancelURLTitle: 'string',
            shopURL: 'string'
        }
    });

    //define default entity properties
    this.__defines(['active', 'expirationTime', 'vendorNumber', 'tokenType', 'licenseeNumber', 'successURL', 'successURLTitle', 'cancelURL', 'cancelURLTitle']);
    this.__defines(['number', 'shopURL'], true);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.Token.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.Token.prototype.constructor = Nlic.Token;

Nlic.Token.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.Token.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.Token.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.Token.prototype.setExpirationTime = function (expirationTime) {
    return this.setProperty('expirationTime', expirationTime);
};

Nlic.Token.prototype.getExpirationTime = function (def) {
    return this.getProperty('expirationTime', def);
};

Nlic.Token.prototype.setVendorNumber = function (vendorNumber) {
    return this.setProperty('vendorNumber', vendorNumber);
};

Nlic.Token.prototype.getVendorNumber = function (def) {
    return this.getProperty('vendorNumber', def);
};

Nlic.Token.prototype.setTokenType = function (tokenType) {
    return this.setProperty('tokenType', tokenType);
};

Nlic.Token.prototype.getTokenType = function (def) {
    return this.getProperty('tokenType', def);
};

Nlic.Token.prototype.setLicenseeNumber = function (licenseeNumber) {
    return this.setProperty('licenseeNumber', licenseeNumber);
};

Nlic.Token.prototype.getLicenseeNumber = function (def) {
    return this.getProperty('licenseeNumber', def);
};

Nlic.Token.prototype.setSuccessURL = function (successURL) {
    return this.setProperty('successURL', successURL);
};

Nlic.Token.prototype.getSuccessURL = function (def) {
    return this.getProperty('successURL', def);
};

Nlic.Token.prototype.setSuccessURLTitle = function (successURLTitle) {
    return this.setProperty('successURLTitle', successURLTitle);
};

Nlic.Token.prototype.getSuccessURLTitle = function (def) {
    return this.getProperty('successURLTitle', def);
};

Nlic.Token.prototype.setCancelURL = function (cancelURL) {
    return this.setProperty('cancelURL', cancelURL);
};

Nlic.Token.prototype.getCancelURL = function (def) {
    return this.getProperty('cancelURL', def);
};

Nlic.Token.prototype.setCancelURLTitle = function (cancelURLTitle) {
    return this.setProperty('cancelURLTitle', cancelURLTitle);
};

Nlic.Token.prototype.getCancelURLTitle = function (def) {
    return this.getProperty('cancelURLTitle', def);
};

Nlic.Token.prototype.getShopURL = function (def) {
    return this.getProperty('shopURL', def);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * Transaction entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the transaction. This number is
 * always generated by NetLicensing.
 * @property string number
 *
 * always true for transactions
 * @property boolean active
 *
 * Status of transaction. "CANCELLED", "CLOSED", "PENDING".
 * @property string status
 *
 * "SHOP". AUTO transaction for internal use only.
 * @property string source
 *
 * grand total for SHOP transaction (see source).
 * @property float grandTotal
 *
 * discount for SHOP transaction (see source).
 * @property float discount
 *
 * specifies currency for money fields (grandTotal and discount). Check data types to discover which
 * @property string currency
 *
 * Date created. Optional.
 * @property string dateCreated
 *
 * Date closed. Optional.
 * @property string dateClosed
 *
 * @constructor
 */

Nlic.Transaction = function Transaction() {
    Nlic.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            name: 'string',
            status: 'string',
            source: 'string',
            grandTotal: 'float',
            discount: 'float',
            currency: 'string',
            dateCreated: 'date',
            dateClosed: 'date',
            active: 'boolean',
            paymentMethod: 'string'
        }
    });

    //define default entity properties
    this.__defines(['number', 'name', 'status', 'source', 'grandTotal', 'discount', 'currency', 'dateCreated', 'dateClosed', 'paymentMethod']);
    this.__define('active', true);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.Transaction.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.Transaction.prototype.constructor = Nlic.Transaction;

Nlic.Transaction.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.Transaction.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.Transaction.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Nlic.Transaction.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Nlic.Transaction.prototype.setStatus = function (status) {
    return this.setProperty('status', status);
};

Nlic.Transaction.prototype.getStatus = function (def) {
    return this.getProperty('status', def);
};

Nlic.Transaction.prototype.setSource = function (source) {
    return this.setProperty('source', source);
};

Nlic.Transaction.prototype.getSource = function (def) {
    return this.getProperty('source', def);
};

Nlic.Transaction.prototype.setGrandTotal = function (grandTotal) {
    return this.setProperty('grandTotal', grandTotal);
};

Nlic.Transaction.prototype.getGrandTotal = function (def) {
    return this.getProperty('grandTotal', def);
};

Nlic.Transaction.prototype.setDiscount = function (discount) {
    return this.setProperty('discount', discount);
};

Nlic.Transaction.prototype.getDiscount = function (def) {
    return this.getProperty('discount', def);
};

Nlic.Transaction.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Nlic.Transaction.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Nlic.Transaction.prototype.setDateCreated = function (dateCreated) {
    return this.setProperty('dateCreated', dateCreated);
};

Nlic.Transaction.prototype.getDateCreated = function (def) {
    return this.getProperty('dateCreated', def);
};

Nlic.Transaction.prototype.setDateClosed = function (dateClosed) {
    return this.setProperty('dateClosed', dateClosed);
};

Nlic.Transaction.prototype.getDateClosed = function (def) {
    return this.getProperty('dateClosed', def);
};

Nlic.Transaction.prototype.setPaymentMethod = function (paymentMethod) {
    return this.setProperty('paymentMethod', paymentMethod);
};

Nlic.Transaction.prototype.getPaymentMethod = function (def) {
    return this.getProperty('paymentMethod', def);
};

Nlic.Transaction.prototype.setActive = function () {
    return this.setProperty('active', true);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services
 *
 * @constructor
 */

Nlic.LicenseeService = function () {

};

//static constants
Object.defineProperties(Nlic.LicenseeService, {
    'ENDPOINT_PATH': {value: 'licensee'},
    'ENDPOINT_PATH_VALIDATE': {value: 'validate'},
    'ENDPOINT_PATH_TRANSFER': {value: 'transfer'},
});

/**
 * Creates new licensee object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Createlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * parent product to which the new licensee is to be added
 * @param productNumber string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param licensee Nlic.Licensee
 *
 * return the newly created licensee object in promise
 * @returns {Promise}
 */
Nlic.LicenseeService.create = function (context, productNumber, licensee) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(licensee instanceof Nlic.Licensee)) throw new TypeError('licensee must be an instance of Nlic.Licensee');

    Nlic.CheckUtils.paramNotEmpty(productNumber, 'productNumber');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    licensee.setProperty('productNumber', productNumber);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.LicenseeService.ENDPOINT_PATH, licensee.asPropertiesMap(), Nlic.Licensee);
};

/**
 * Gets licensee by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Getlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the licensee number
 * @param number string
 *
 * return the licensee in promise
 * @returns {Promise}
 */
Nlic.LicenseeService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.LicenseeService.ENDPOINT_PATH + '/' + number, {}, Nlic.Licensee);
};

/**
 * Returns all licensees of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Licenseeslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of licensees (of all products) or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.LicenseeService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.LicenseeService.ENDPOINT_PATH, queryParams, Nlic.Licensee);
};

/**
 * Updates licensee properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Updatelicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * licensee number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param licensee Nlic.Licensee
 *
 * return updated licensee in promise.
 * @returns {Promise}
 */
Nlic.LicenseeService.update = function (context, number, licensee) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(licensee instanceof Nlic.Licensee)) throw new TypeError('licensee must be an instance of Nlic.Licensee');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.LicenseeService.ENDPOINT_PATH + '/' + number, licensee.asPropertiesMap(), Nlic.Licensee);
};

/**
 * Deletes licensee.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Deletelicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * licensee number
 * @param number string
 *
 * if true, any entities that depend on the one being deleted will be deleted too
 * @param forceCascade boolean
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
Nlic.LicenseeService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Nlic.Service
        .getInstance()
        .delete(context, Nlic.LicenseeService.ENDPOINT_PATH + '/' + number, queryParams);
};

/**
 * Validates active licenses of the licensee. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Validatelicensee
 *
 * @param context Nlic.Context
 *
 * licensee number
 * @param number string
 *
 * optional validation parameters. See ValidationParameters and licensing model documentation for
 * details.
 * @param validationParameters Nlic.ValidationParameters.
 *
 * @returns {Promise}
 */
Nlic.LicenseeService.validate = function (context, number, validationParameters) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(validationParameters instanceof Nlic.ValidationParameters)) throw new TypeError('validationParameters must be an instance of Nlic.ValidationParameters');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {};

    if (validationParameters.getProductNumber()) {
        queryParams.productNumber = validationParameters.getProductNumber();
    }

    if (validationParameters.getLicenseeName()) {
        queryParams.licenseeName = validationParameters.getLicenseeName();
    }

    if (validationParameters.getLicenseeSecret()) {
        queryParams.licenseeSecret = validationParameters.getLicenseeSecret();
    }

    var pmIndex = 0;
    var parameters = validationParameters.getParameters();

    for (var productModuleName in parameters) {
        queryParams['productModuleNumber' + pmIndex] = productModuleName;
        if (!parameters.hasOwnProperty(productModuleName)) continue;

        var param = parameters[productModuleName];
        for (var key in param) {
            if (!param.hasOwnProperty(key)) continue;
            queryParams[key + pmIndex] = param[key];
        }
        pmIndex++;
    }

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.LicenseeService.ENDPOINT_PATH + '/' + number + '/' + Nlic.LicenseeService.ENDPOINT_PATH_VALIDATE, queryParams)
        .then(function (item) {
            var data = {};
            var validationResults = new Nlic.ValidationResults();

            var length = item.property.length;

            for (var i = 0; i < length; i++) {
                var name = item.property[i].name;
                var value;
                try {
                    value = JSON.parse(item.property[i].value);
                } catch (e) {
                    value = item.property[i].value;
                }
                data[name] = value;
            }

            validationResults
                .setProductModuleValidation(data.productModuleNumber, data)
                .setTtl(Nlic.Service.getInstance().getLastHttpRequestInfo().response.ttl);

            return validationResults;
        });
};

/**
 * Transfer licenses between licensees.
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Transferlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the number of the licensee receiving licenses
 * @param number string
 *
 * the number of the licensee delivering licenses
 * @param sourceLicenseeNumber string
 *
 * @returns {Promise}
 */
Nlic.LicenseeService.transfer = function (context, number, sourceLicenseeNumber) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');
    Nlic.CheckUtils.paramNotEmpty(sourceLicenseeNumber, 'sourceLicenseeNumber');

    var queryParams = {sourceLicenseeNumber: sourceLicenseeNumber};

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.LicenseeService.ENDPOINT_PATH + '/' + number + '/' + Nlic.LicenseeService.ENDPOINT_PATH_TRANSFER, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services
 *
 * @constructor
 */
Nlic.LicenseService = function () {
};

//static constants
Object.defineProperty(Nlic.LicenseService, 'ENDPOINT_PATH', {value: 'license'});

/**
 * Creates new license object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Createlicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * parent licensee to which the new license is to be added
 * @param licenseeNumber string
 *
 *  license template that the license is created from
 * @param licenseTemplateNumber string
 *
 * For privileged logins specifies transaction for the license creation. For regular logins new
 * transaction always created implicitly, and the operation will be in a separate transaction.
 * Transaction is generated with the provided transactionNumber, or, if transactionNumber is null, with
 * auto-generated number.
 * @param transactionNumber null|string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param license Nlic.License
 *
 * return the newly created license object in promise
 * @returns {Promise}
 */
Nlic.LicenseService.create = function (context, licenseeNumber, licenseTemplateNumber, transactionNumber, license) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(license instanceof Nlic.License)) throw new TypeError('license must be an instance of Nlic.License');

    Nlic.CheckUtils.paramNotEmpty(licenseeNumber, 'licenseeNumber');
    Nlic.CheckUtils.paramNotEmpty(licenseTemplateNumber, 'licenseTemplateNumber');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    license.setProperty('licenseeNumber', licenseeNumber);
    license.setProperty('licenseTemplateNumber', licenseTemplateNumber);

    if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.LicenseService.ENDPOINT_PATH, license.asPropertiesMap(), Nlic.License);
};

/**
 * Gets license by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Getlicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the license number
 * @param number string
 *
 * return the license in promise
 * @returns {Promise}
 */
Nlic.LicenseService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.LicenseService.ENDPOINT_PATH + '/' + number, {}, Nlic.License)
};

/**
 * Returns licenses of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Licenseslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * return array of licenses (of all products) or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.LicenseService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.LicenseService.ENDPOINT_PATH, queryParams, Nlic.License);
};

/**
 * Updates license properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Updatelicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * license number
 * @param number string
 *
 * transaction for the license update. Created implicitly if transactionNumber is null. In this case the
 * operation will be in a separate transaction.
 * @param transactionNumber string|null
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param license Nlic.License
 *
 * return updated license in promise.
 * @returns {Promise}
 */
Nlic.LicenseService.update = function (context, number, transactionNumber, license) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(license instanceof Nlic.License)) throw new TypeError('license must be an instance of Nlic.License');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.LicenseService.ENDPOINT_PATH + '/' + number, license.asPropertiesMap(), Nlic.License);
};

/**
 * Deletes license.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Deletelicense
 *
 * When any license is deleted, corresponding transaction is created automatically.
 *
 *  determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * license number
 * @param number string
 *
 * if true, any entities that depend on the one being deleted will be deleted too
 * @param forceCascade boolean
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
Nlic.LicenseService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Nlic.Service
        .getInstance()
        .delete(context, Nlic.LicenseService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services
 *
 * @constructor
 */
Nlic.LicenseTemplateService = function () {
};

//static constants
Object.defineProperty(Nlic.LicenseTemplateService, 'ENDPOINT_PATH', {value: 'licensetemplate'});

/**
 * Creates new license template object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Createlicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * parent product module to which the new license template is to be added
 * @param productModuleNumber
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param licenseTemplate Nlic.LicenseTemplate
 *
 * the newly created license template object in promise
 * @returns {Promise}
 */
Nlic.LicenseTemplateService.create = function (context, productModuleNumber, licenseTemplate) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(licenseTemplate instanceof Nlic.LicenseTemplate)) throw new TypeError('licenseTemplate must be an instance of Nlic.LicenseTemplate');

    Nlic.CheckUtils.paramNotEmpty(productModuleNumber, 'productModuleNumber');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    licenseTemplate.setProperty('productModuleNumber', productModuleNumber);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.LicenseTemplateService.ENDPOINT_PATH, licenseTemplate.asPropertiesMap(), Nlic.LicenseTemplate);
};

/**
 * Gets license template by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Getlicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the license template number
 * @param number string
 *
 * return the license template object in promise
 * @returns {Promise}
 */
Nlic.LicenseTemplateService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.LicenseTemplateService.ENDPOINT_PATH + '/' + number, {}, Nlic.LicenseTemplate);
};

/**
 * Returns all license templates of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Licensetemplateslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of license templates (of all products/modules) or null/empty list if nothing found in promise.
 * @returns {Promise}
 */
Nlic.LicenseTemplateService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.LicenseTemplateService.ENDPOINT_PATH, queryParams, Nlic.LicenseTemplate);
};

/**
 * Updates license template properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Updatelicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * license template number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param licenseTemplate Nlic.LicenseTemplate
 *
 * updated license template in promise.
 * @returns {Promise}
 */
Nlic.LicenseTemplateService.update = function (context, number, licenseTemplate) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(licenseTemplate instanceof Nlic.LicenseTemplate)) throw new TypeError('licenseTemplate must be an instance of Nlic.LicenseTemplate');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.LicenseTemplateService.ENDPOINT_PATH + '/' + number, licenseTemplate.asPropertiesMap(), Nlic.LicenseTemplate);
};

/**
 * Deletes license template.See NetLicensingAPI JavaDoc for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Deletelicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * license template number
 * @param number string
 *
 * if true, any entities that depend on the one being deleted will be deleted too
 * @param forceCascade boolean
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
Nlic.LicenseTemplateService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Nlic.Service
        .getInstance()
        .delete(context, Nlic.LicenseTemplateService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

Nlic.PaymentMethodService = function () {
};

//static constants
Object.defineProperty(Nlic.PaymentMethodService, 'ENDPOINT_PATH', {value: 'paymentmethod'});

/**
 * Gets payment method by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Payment+Method+Services#PaymentMethodServices-Getpaymentmethod
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the payment method number
 * @param number string
 *
 * return the payment method in promise
 * @returns {Promise}
 */
Nlic.PaymentMethodService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.PaymentMethodService.ENDPOINT_PATH + '/' + number, {}, Nlic.PaymentMethod);
};


/**
 * Returns payment methods of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Payment+Method+Services#PaymentMethodServices-Paymentmethodslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of payment method entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.PaymentMethodService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.PaymentMethodService.ENDPOINT_PATH, queryParams, Nlic.PaymentMethod);
};

/**
 * Updates payment method properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Payment+Method+Services#PaymentMethodServices-Updatepaymentmethod
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the payment method number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param paymentMethod Nlic.PaymentMethod
 *
 * return updated payment method in promise.
 * @returns {Promise}
 */
Nlic.PaymentMethodService.update = function (context, number, paymentMethod) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(paymentMethod instanceof Nlic.PaymentMethod)) throw new TypeError('paymentMethod must be an instance of Nlic.PaymentMethod');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.PaymentMethodService.ENDPOINT_PATH + '/' + number, paymentMethod.asPropertiesMap(), Nlic.PaymentMethod);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Module+Services
 *
 * @constructor
 */

Nlic.ProductModuleService = function () {

};

//static constants
Object.defineProperty(Nlic.ProductModuleService, 'ENDPOINT_PATH', {value: 'productmodule'});

/**
 * Creates new product module object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Module+Services#ProductModuleServices-Createproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * parent product to which the new product module is to be added
 * @param productNumber string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param productModule Nlic.ProductModule
 *
 * the newly created product module object in promise
 * @returns {Promise}
 */
Nlic.ProductModuleService.create = function (context, productNumber, productModule) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(productModule instanceof Nlic.ProductModule)) throw new TypeError('product must be an instance of Nlic.ProductModule');

    Nlic.CheckUtils.paramNotEmpty(productNumber, 'productNumber');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    productModule.setProperty('productNumber', productNumber);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.ProductModuleService.ENDPOINT_PATH, productModule.asPropertiesMap(), Nlic.ProductModule);
};

/**
 * Gets product module by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Module+Services#ProductModuleServices-Getproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the product module number
 * @param number string
 *
 * return the product module object in promise
 * @returns {Promise}
 */
Nlic.ProductModuleService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.ProductModuleService.ENDPOINT_PATH + '/' + number, {}, Nlic.ProductModule);
};

/**
 * Returns products of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Productslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of product modules entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.ProductModuleService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.ProductModuleService.ENDPOINT_PATH, queryParams, Nlic.ProductModule);
};

/**
 * Updates product module properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Module+Services#ProductModuleServices-Updateproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * product module number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param productModule Nlic.ProductModule
 *
 * updated product module in promise.
 * @returns {Promise}
 */
Nlic.ProductModuleService.update = function (context, number, productModule) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(productModule instanceof Nlic.ProductModule)) throw new TypeError('product must be an instance of Nlic.ProductModule');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.ProductModuleService.ENDPOINT_PATH + '/' + number, productModule.asPropertiesMap(), Nlic.ProductModule);
};

/**
 * Deletes product module.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Module+Services#ProductModuleServices-Deleteproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * product module number
 * @param number string
 *
 * if true, any entities that depend on the one being deleted will be deleted too
 * @param forceCascade boolean
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
Nlic.ProductModuleService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Nlic.Service
        .getInstance()
        .delete(context, Nlic.ProductModuleService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services
 *
 * @constructor
 */

Nlic.ProductService = function () {
};

//static constants
Object.defineProperty(Nlic.ProductService, 'ENDPOINT_PATH', {value: 'product'});

/**
 * Creates new product with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Createproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param product Nlic.Product
 *
 * return the newly created product object in promise
 * @returns {Promise}
 */

Nlic.ProductService.create = function (context, product) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(product instanceof Nlic.Product)) throw new TypeError('product must be an instance of Nlic.Product');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.ProductService.ENDPOINT_PATH, product.asPropertiesMap(), Nlic.Product);
};

/**
 * Gets product by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Getproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the product number
 * @param number string
 *
 * return the product object in promise
 * @returns {Promise}
 */
Nlic.ProductService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.ProductService.ENDPOINT_PATH + '/' + number, {}, Nlic.Product);
};

/**
 * Returns products of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Productslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of product entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.ProductService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.ProductService.ENDPOINT_PATH, queryParams, Nlic.Product);
};

/**
 * Updates product properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Updateproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * product number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param product Nlic.Product
 *
 * updated product in promise.
 * @returns {Promise}
 */
Nlic.ProductService.update = function (context, number, product) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(product instanceof Nlic.Product)) throw new TypeError('product must be an instance of Nlic.Product');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.ProductService.ENDPOINT_PATH + '/' + number, product.asPropertiesMap(), Nlic.Product);
};

/**
 * Deletes product.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Product+Services#ProductServices-Deleteproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * product number
 * @param number string
 *
 * if true, any entities that depend on the one being deleted will be deleted too
 * @param forceCascade boolean
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
Nlic.ProductService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Nlic.Service
        .getInstance()
        .delete(context, Nlic.ProductService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

Nlic.Service = (function () {
    var instance;

    function createInstance() {
        var instance = {};

        var __httpXHR = {};

        instance.getLastHttpRequestInfo = function () {
            return Object.assign({}, __httpXHR)
        };

        /**
         * Helper method for performing GET request to NetLicensing API services. Finds and returns first suitable item with
         * type resultType from the response.
         *
         * Context for the NetLicensing API call
         * @param context
         *
         * the REST URL template
         * @param urlTemplate
         *
         * The REST query parameters values. May be null if there are no parameters.
         * @param queryParams
         *
         * the type of the result
         * @param resultType
         *
         * @returns {Promise}
         */
        instance.get = function (context, urlTemplate, queryParams, resultType) {
            return this.request(context, 'get', urlTemplate, queryParams)
                .then(function (httpXHR) {
                    return (!instance.__has(httpXHR.response, 'items.item.0'))
                        ? null
                        : instance.__getEntity(resultType, instance.__get(httpXHR.response, 'items.item.0'));
                });
        };

        /**
         * Helper method for performing GET request to NetLicensing API service that returns page of items with type
         * resultType.
         *
         * context for the NetLicensing API call
         * @param context
         *
         * the REST URL template
         * @param urlTemplate
         *
         * The REST query parameters values. May be null if there are no parameters.
         * @param queryParams
         *
         * the type of the result
         * @param resultType
         *
         *
         * @returns {Promise}
         */
        instance.list = function (context, urlTemplate, queryParams, resultType) {
            return this.request(context, 'get', urlTemplate, queryParams)
                .then(function (httpXHR) {
                    var entities = [],
                        items = instance.__has(httpXHR.response, 'items.item')
                            ? instance.__get(httpXHR.response, 'items.item')
                            : [],
                        length = items.length;

                    for (var i = 0; i < length; i++) {
                        entities.push(instance.__getEntity(resultType, items[i]));
                    }

                    return entities;
                });
        };

        /**
         * Helper method for performing POST request to NetLicensing API services. Finds and returns first suitable item
         * with type resultType from the response.
         *
         * context for the NetLicensing API call
         * @param context
         *
         * the REST URL template
         * @param urlTemplate
         *
         * The REST query parameters values. May be null if there are no parameters.
         * @param queryParams
         *
         * he type of the result
         * @param resultType
         *
         * @returns {Promise}
         */
        instance.post = function (context, urlTemplate, queryParams, resultType) {
            return this.request(context, 'post', urlTemplate, queryParams)
                .then(function (httpXHR) {
                    return (!instance.__has(httpXHR.response, 'items.item.0'))
                        ? null
                        : instance.__getEntity(resultType, instance.__get(httpXHR.response, 'items.item.0'));
                });
        };

        /**
         *
         * @param context
         * @param urlTemplate
         * @param queryParams
         * @returns {Promise}
         */
        instance.delete = function (context, urlTemplate, queryParams) {
            return this.request(context, 'delete', urlTemplate, queryParams)
                .then(function (httpXHR) {
                    return (httpXHR.status == 204);
                });
        };

        /**
         * Send request to Netlicensing RestApi
         * @param context
         * @param method
         * @param urlTemplate
         * @param queryParams
         */
        instance.request = function (context, method, urlTemplate, queryParams) {

            if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

            urlTemplate = String(urlTemplate);
            queryParams = queryParams || {};

            if (!urlTemplate) throw new TypeError('Url template must be specified');

            //validate http method
            this.__validateMethod(method);

            //validate context
            this.__validateBaseUrl(context);

            var restUrl = context.getBaseUrl() + '/' + urlTemplate;

            restUrl = restUrl.replace(/([^:]\/)\/+/g, "$1");

            //validate baseUrl +  urlTemplate
            this.__validateRestUrl(restUrl);

            //configure
            var headers = {Accept: 'application/json'};

            switch (context.getSecurityMode()) {
                case Nlic.Context.BASIC_AUTHENTICATION:
                    if (!context.getUsername()) throw new Error('Missing parameter "username"');
                    if (!context.getPassword()) throw new Error('Missing parameter "password"');

                    headers['Authorization'] = 'Basic ' + btoa(context.getUsername() + ':' + context.getPassword());
                    break;
                case Nlic.Context.APIKEY_IDENTIFICATION:
                    if (!context.getApiKey()) throw new Error('Missing parameter "apiKey"');

                    headers['Authorization'] = 'Basic ' + btoa('apiKey:' + context.getApiKey());
                    break;
                default:
                    throw new Error('Unknown security mode');
                    break;
            }

            return new Nlic.HttpRequest().send({
                url: restUrl,
                method: method,
                headers: headers,
                data: queryParams,
            }).then(function (httpXHR) {
                return __httpXHR = httpXHR;
            }).catch(function (httpXHR) {
                __httpXHR = httpXHR;
                var reasonPhrase = httpXHR.response.infos.info[0].value || 'Unknown';
                throw new Error('Unsupported response status code ' + httpXHR.status + ': ' + reasonPhrase);
            });
        };

        /**
         * Validate http method
         * @param method
         * @private
         */
        instance.__validateMethod = function (method) {
            if (['get', 'post', 'delete'].indexOf(method.toLowerCase()) < 0) {
                throw new Error('Invalid request type:' + method + ', allowed requests types: GET, POST, DELETE.');
            }
        };

        instance.__isValidUrl = function (url) {
            var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

            return pattern.test(url);
        };

        instance.__validateBaseUrl = function (context) {
            if (!context.getBaseUrl(null)) {
                throw new Error('Base url must be specified');
            }

            if (!this.__isValidUrl(String(context.getBaseUrl()))) {
                throw new Error('Base url "' + context.getBaseUrl() + '" is not a valid URL');
            }
        };

        instance.__validateRestUrl = function (restUrl) {
            if (!this.__isValidUrl(String(restUrl))) {
                throw new Error('Rest url "' + restUrl + '" is not a valid URL');
            }
        };

        instance.__has = function (obj, key) {
            return key.split(".").every(function (x) {
                if (typeof obj != "object" || obj === null || !x in obj) return false;
                obj = obj[x];
                return true;
            });
        };

        instance.__get = function (obj, key) {
            return key.split(".").reduce(function (o, x) {
                return (typeof o == "undefined" || o === null) ? o : o[x];
            }, obj);
        };

        instance.__getEntity = function (resultType, item) {
            var properties = item.property || null;
            var lists = item.list || null;

            if (!resultType) return item;

            var entity = new resultType();

            if (!(entity instanceof Nlic.BaseEntity)) {
                throw new Error('Invalid entity ' + resultType + ', entity must be instanceof Nlic.BaseEntity');
            }

            var propertiesLength = properties.length;

            for (var p = 0; p < propertiesLength; p++) {
                entity.setProperty(properties[p].name, properties[p].value)
            }

            if (lists) {
                var listsLength = lists.length;
                for (var l = 0; l < listsLength; l++) {
                    var name = lists[l].name;
                    var setListMethod = '__setList' + name.charAt(0).toUpperCase() + name.substr(1, name.length - 1);
                    var setListsMethod = '__setLists';

                    if (typeof entity[setListMethod] !== 'function' && typeof entity[setListsMethod] !== 'function') {
                        console.warn('Methods: ' + setListMethod + ',' + setListsMethod + ' not found in ' + item.type + ' for list property ' + name);
                        continue;
                    }

                    var listProperty = lists[l].property || null;

                    if (typeof entity[setListMethod] === 'function') {
                        entity[setListMethod](listProperty);
                        continue;
                    }

                    if (typeof entity[setListsMethod] === 'function') {
                        entity[setListsMethod](name, listProperty);
                    }
                }
            }

            return entity;
        };

        Object.freeze(instance);

        return instance;
    }

    return {
        getInstance: function () {
            if (!instance) instance = createInstance();
            return instance;
        }
    };
})();
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Token+Services
 *
 * @constructor
 */
Nlic.TokenService = function () {
};

//static constants
Object.defineProperty(Nlic.TokenService, 'ENDPOINT_PATH', {value: 'token'});

/**
 * Creates new token.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Token+Services#TokenServices-Createtoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param token Nlic.Token
 *
 * return created token in promise
 * @returns {Promise}
 */
Nlic.TokenService.create = function (context, token) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(token instanceof Nlic.Token)) throw new TypeError('token must be an instance of Nlic.Token');

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.TokenService.ENDPOINT_PATH, token.asPropertiesMap(), Nlic.Token);
};

/**
 * Gets token by its number..See NetLicensingAPI for details:
 * https://www.labs64.de/conluence/display/NLICPUB/Token+Services#TokenServices-Gettoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the token number
 * @param number
 *
 * return the token in promise
 * @returns {Promise}
 */
Nlic.TokenService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.TokenService.ENDPOINT_PATH + '/' + number, {}, Nlic.Token);
};

/**
 * Returns tokens of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Token+Services#TokenServices-Tokenslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of token entities or empty array if nothing found.
 * @return array
 */
Nlic.TokenService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.TokenService.ENDPOINT_PATH, queryParams, Nlic.Token);
};

/**
 * Delete token by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Token+Services#TokenServices-Deletetoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 *  the token number
 * @param number string
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
Nlic.TokenService.delete = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    return Nlic.Service
        .getInstance()
        .delete(context, Nlic.TokenService.ENDPOINT_PATH + '/' + number);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Transaction+Services
 *
 * Transaction is created each time change to  LicenseService licenses happens. For instance licenses are
 * obtained by a licensee, licenses disabled by vendor, licenses deleted, etc. Transaction is created no matter what
 * source has initiated the change to licenses: it can be either a direct purchase of licenses by a licensee via
 * NetLicensing Shop, or licenses can be given to a licensee by a vendor. Licenses can also be assigned implicitly by
 * NetLicensing if it is defined so by a license model (e.g. evaluation license may be given automatically). All these
 * events are reflected in transactions. Of all the transaction handling routines only read-only routines are exposed to
 * the public API, as transactions are only allowed to be created and modified by NetLicensing internally.
 *
 * @constructor
 */

Nlic.TransactionService = function () {
};

//static constants
Object.defineProperty(Nlic.TransactionService, 'ENDPOINT_PATH', {value: 'transaction'});

/**
 * Creates new transaction object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Transaction+Services#TransactionServices-Createtransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param transaction Nlic.Transaction
 *
 * return the newly created transaction object in promise
 * @returns {Promise}
 */
Nlic.TransactionService.create = function (context, transaction) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(transaction instanceof Nlic.Transaction)) throw new TypeError('transaction must be an instance of Nlic.Transaction');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.TransactionService.ENDPOINT_PATH, transaction.asPropertiesMap(), Nlic.Transaction);
};

/**
 * Gets transaction by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Transaction+Services#TransactionServices-Gettransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * the transaction number
 * @param number string
 *
 * return the transaction in promise
 * @returns {Promise}
 */
Nlic.TransactionService.get = function (context, number) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .get(context, Nlic.TransactionService.ENDPOINT_PATH + '/' + number, {}, Nlic.Transaction);
};

/**
 * Returns all transactions of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Transaction+Services#TransactionServices-Transactionslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string
 *
 * array of transaction entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.TransactionService.list = function (context, filter) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Nlic.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.TransactionService.ENDPOINT_PATH, queryParams, Nlic.Transaction);
};

/**
 * Updates transaction properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Transaction+Services#TransactionServices-Updatetransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * transaction number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param transaction Nlic.Transaction
 *
 * return updated transaction in promise.
 * @returns {Promise}
 */
Nlic.TransactionService.update = function (context, number, transaction) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');
    if (!(transaction instanceof Nlic.Transaction)) throw new TypeError('transaction must be an instance of Nlic.Transaction');

    Nlic.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .post(context, Nlic.TransactionService.ENDPOINT_PATH + '/' + number, transaction.asPropertiesMap(), Nlic.Transaction);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Utility+Services
 * @constructor
 */
Nlic.UtilityService = function () {
};

//static constants
Object.defineProperty(Nlic.UtilityService, 'ENDPOINT_PATH', {value: 'utility'});

/**
 * Returns all license types. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Utility+Services#UtilityServices-LicenseTypeslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * array of available license types or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.UtilityService.listLicenseTypes = function (context) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.UtilityService.ENDPOINT_PATH + '/licenseTypes')
        .then(function (items) {
            var length = items.length;
            var licenseTypes = [];

            for (var i = 0; i < length; i++) {
                licenseTypes.push(items[i].property[0].value);
            }

            return licenseTypes;
        });
};

/**
 * Returns all license models. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Utility+Services#UtilityServices-LicensingModelslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Nlic.Context
 *
 * array of available license models or empty array if nothing found in promise.
 * @returns {Promise}
 */
Nlic.UtilityService.listLicensingModels = function (context) {
    if (!(context instanceof Nlic.Context)) throw new TypeError('context must be an instance of Nlic.Context');

    context.setSecurityMode(Nlic.Context.BASIC_AUTHENTICATION);

    return Nlic.Service
        .getInstance()
        .list(context, Nlic.UtilityService.ENDPOINT_PATH + '/licensingModels')
        .then(function (items) {
            var length = items.length;
            var licensingModels = [];

            for (var i = 0; i < length; i++) {
                licensingModels.push(items[i].property[0].value);
            }

            return licensingModels;
        });
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};


Nlic.CheckUtils = function () {

};

/**
 * Check if value is valid
 * @param value
 * @returns {boolean}
 */
Nlic.CheckUtils.isValid = function (value) {
    var valid = (value !== undefined && typeof value !== 'function');
    if (typeof value === 'number') valid = (isFinite(value) && !isNaN(value));
    return valid;
};

/**
 * Ensures that an object reference passed as a parameter to the calling method is not null.
 *
 * param to check
 * @param parameter
 *
 * name of the parameter
 * @param parameterName
 */
Nlic.CheckUtils.paramNotNull = function (parameter, parameterName) {
    if (!Nlic.CheckUtils.isValid(parameter)) throw new TypeError('Parameter ' + parameterName + ' has bad value ' + parameter);
    if (parameter === null) throw new TypeError('Parameter ' + parameterName + ' cannot be null')
};

Nlic.CheckUtils.paramNotEmpty = function (parameter, parameterName) {
    if (!Nlic.CheckUtils.isValid(parameter)) throw new TypeError('Parameter ' + parameterName + ' has bad value ' + parameter);
    if (!parameter) throw new TypeError('Parameter ' + parameterName + ' cannot be null or empty string')
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

/**
 * Class Context
 *
 * Provides calling context for the NetLicensing API calls.
 * The Context object may differ depending on the level at which NetLicensing API is called.
 * For the internal Java NetLicensing API the Context provides information about the targeted Vendor.
 *
 * @property string $baseUrl
 * Server URL base of the NetLicensing RESTful API. Normally should be "https://go.netlicensing.io".
 *
 * @property  string username
 * Login name of the user sending the requests when securityMode = BASIC_AUTHENTICATION.
 *
 * @property string password
 * Password of the user sending the requests when securityMode = BASIC_AUTHENTICATION.
 *
 * @property string apiKey
 * API Key used to identify the request sender when securityMode = APIKEY_IDENTIFICATION.
 *
 * @property string securityMode
 * Determines the security mode used for accessing the NetLicensing API.
 * See https://www.labs64.de/confluence/x/pwCo#NetLicensingAPI%28RESTful%29-Security for details.
 *
 * @property string vendorNumber
 * External number of the vendor.
 *
 * @constructor
 */

Nlic.Context = function (values) {

    if (values === undefined) values = {};

    if (typeof values != 'object') {
        throw new Error('Argument 1 passed to Context() must be of the type object, ' + typeof values + ' given');
    }

    /**
     * Context defaults
     * @type {{baseUrl: string, securityMode}}
     * @private
     */
    var __defaults = {
        baseUrl: 'https://go.netlicensing.io/core/v2/rest',
        securityMode: Nlic.Context.BASIC_AUTHENTICATION
    };

    /**
     * The context values.
     * @type {{}}
     * @private
     */
    var __values = {};


    /**
     * List of values that was defined
     * @type {{}}
     * @private
     */
    var __defined = {};

    /**
     * Set a given values on the context.
     * @param key
     * @param value
     * @returns {Context}
     */
    this.setValue = function (key, value) {
        this.__checkValue(key, value);
        this.__define(key);

        if (typeof value === 'object')value = (Array.isArray(value)) ? Object.assign([], value) : Object.assign({}, value);

        __values[key] = value;

        return this;
    };

    /**
     * Set the array of context values.
     * @param values
     * @returns {Context}
     */
    this.setValues = function (values) {

        this.removeValues();

        for (var key in values) {
            if (!values.hasOwnProperty(key)) continue;
            this.setValue(key, values[key]);
        }

        return this;
    };

    /**
     * Get an value from the context.
     * @param key
     * @param def
     * @returns {*}
     */
    this.getValue = function (key, def) {
        return __values[key] || def;
    };

    /**
     * Get all of the current value on the context.
     */
    this.getValues = function () {
        return Object.assign({}, __values);
    };

    /**
     * Remove value
     * @param key
     * @returns {BaseEntity}
     */
    this.removeValue = function (key) {
        delete __values[key];
        this.__removeDefine(key);
        return this;
    };

    /**
     * Remove values
     * @param keys
     */
    this.removeValues = function (keys) {
        keys = keys || Object.keys(__values);

        var length = keys.length;

        for (var i = 0; i < length; i++) {
            this.removeValue(keys[i]);
        }
    };

    /**
     * Check if value has defined
     * @param key
     * @protected
     */
    this.__hasDefine = function (key) {
        return Boolean(__defined[key]);
    };

    /**
     * Define value getter and setter
     * @param key
     * @param onlyGetter
     * @protected
     */
    this.__define = function (key, onlyGetter) {
        if (this.__hasDefine(key)) return;

        //delete property
        delete this[key];

        var descriptors = {
            enumerable: true,
            configurable: true,
            get: function () {
                return self.getValue(key)
            }
        };

        if (!onlyGetter) {
            descriptors.set = function (value) {
                return self.setValue(key, value);
            };
        }

        Object.defineProperty(this, key, descriptors);
    };

    /**
     * Define values getter and setter
     * @param keys
     * @param onlyGetter
     * @protected
     */
    this.__defines = function (keys, onlyGetter) {
        var length = keys.length;
        for (var i = 0; i < length; i++) {
            this.__define(keys[i], onlyGetter);
        }
    };

    /**
     * Remove value getter and setter
     * @param key
     * @protected
     */
    this.__removeDefine = function (key) {
        if (!this.__hasDefine(key)) return;
        delete this[key];
        delete __defined[key];
    };

    /**
     * Check if value is valid
     * @param key
     * @param value
     * @private
     */
    this.__checkValue = function (key, value) {
        if (!Nlic.CheckUtils.isValid(key) || typeof key === 'object')  throw new Error('Bad value key:' + key);
        if (!Nlic.CheckUtils.isValid(value)) throw new Error('Value ' + key + ' has wrong value' + value);
    };

    //make methods not changeable
    Object.defineProperties(this, {
        setValue: {writable: false, enumerable: false, configurable: false},
        setValues: {writable: false, enumerable: false, configurable: false},
        getValue: {writable: false, enumerable: false, configurable: false},
        getValues: {writable: false, enumerable: false, configurable: false},
        removeValue: {writable: false, enumerable: false, configurable: false},
        removeValues: {writable: false, enumerable: false, configurable: false},
        __hasDefine: {writable: false, enumerable: false, configurable: false},
        __define: {writable: false, enumerable: false, configurable: false},
        __defines: {writable: false, enumerable: false, configurable: false},
        __removeDefine: {writable: false, enumerable: false, configurable: false},
        __checkValue: {writable: false, enumerable: false, configurable: false}
    });

    this.setValues(Object.assign({}, __defaults, values));
};

//Security mode static constants
Object.defineProperty(Nlic.Context, 'BASIC_AUTHENTICATION', {value: 'BASIC_AUTH'});
Object.defineProperty(Nlic.Context, 'APIKEY_IDENTIFICATION', {value: 'APIKEY'});

Nlic.Context.prototype.setBaseUrl = function (baseUrl) {
    return this.setValue('baseUrl', baseUrl);
};

Nlic.Context.prototype.getBaseUrl = function (def) {
    return this.getValue('baseUrl', def);
};

Nlic.Context.prototype.setUsername = function (username) {
    return this.setValue('username', username);
};

Nlic.Context.prototype.getUsername = function (def) {
    return this.getValue('username', def);
};

Nlic.Context.prototype.setPassword = function (password) {
    return this.setValue('password', password);
};

Nlic.Context.prototype.getPassword = function (def) {
    return this.getValue('password', def);
};

Nlic.Context.prototype.setApiKey = function (apiKey) {
    return this.setValue('apiKey', apiKey);
};

Nlic.Context.prototype.getApiKey = function (def) {
    return this.getValue('apiKey', def);
};

Nlic.Context.prototype.setSecurityMode = function (securityMode) {
    return this.setValue('securityMode', securityMode);
};

Nlic.Context.prototype.getSecurityMode = function (def) {
    return this.getValue('securityMode', def);
};

Nlic.Context.prototype.setVendorNumber = function (vendorNumber) {
    return this.setValue('vendorNumber', vendorNumber);
};

Nlic.Context.prototype.getVendorNumber = function (def) {
    return this.getValue('vendorNumber', def);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

Nlic.HttpRequest = function () {

};

Nlic.HttpRequest.prototype.__serialize = function (data, prefix) {
    var query = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var k = prefix ? prefix + '[' + key + ']' : key;
            var v = data[key];
            v = (v instanceof Date) ? v.toISOString() : v;
            query.push((v !== null && typeof v === 'object') ?
                this.__serialize(v, k) :
            encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return query.join("&").replace(/%5B[0-9]+%5D=/g, '=');
};

Nlic.HttpRequest.prototype.__parseQuery = function (url) {
    var query = {};
    var queryPos = url.indexOf('?');
    var parts = url.substr(queryPos + 1).split('&');
    if (queryPos !== -1 || url.indexOf("=") !== -1) {
        var length = parts.length;
        for (var i = 0; i < length; i++) {
            var part = parts[i].split('=');
            query[decodeURIComponent(part[0])] = part.hasOwnProperty(1) ? decodeURIComponent(part[1]) : null;
        }
    }
    return query;
};

Nlic.HttpRequest.prototype.__parseHeadersStr = function (headers) {
    if (typeof headers !== 'string') return headers;
    var responseHeaders = {};
    headers = headers.split("\n");
    var length = headers.length;
    for (var i = 0; i < length; i++) {
        var part = headers[i].split(':');
        if (part[0]) responseHeaders[part[0].toLowerCase()] = part[1].trim();
    }
    return responseHeaders;
};

Nlic.HttpRequest.prototype.send = function (config) {
    var self = this;

    return new Promise(function (resolve, reject) {
        var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        var xhr = new XHR();

        var httpSetup = Object.assign({}, {
            method: 'GET',
            url: '/',
            headers: {},
            data: {},
            timeout: 0
        }, config);

        httpSetup.method = httpSetup.method.toUpperCase();
        httpSetup.data = self.__serialize(httpSetup.data);
        httpSetup.headers = Object.assign({}, {Accept: 'application/json, text/plain, */*'}, httpSetup.headers);

        switch (httpSetup.method) {
            case 'DELETE':
            case 'GET':
                if (httpSetup.data.length) httpSetup.url += (Object.keys(self.__parseQuery(httpSetup.url)).length) ? '&' + httpSetup.data : '?' + httpSetup.data;
                break;
            case 'POST':
                httpSetup.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                break;
        }

        xhr.open(httpSetup.method, httpSetup.url, true);

        //set headers
        for (var key in httpSetup.headers) {
            if (!httpSetup.headers.hasOwnProperty(key)) continue;
            xhr.setRequestHeader(key, httpSetup.headers[key]);
        }

        xhr.timeout = httpSetup.timeout;

        var httpXHR = function (xhr, requestHeaders) {

            var httpXHR = {
                status: xhr.status,
                statusText: xhr.statusText,
                responseText: xhr.responseText,
                responseType: xhr.responseType,
                responseURL: xhr.responseURL,
                responseXML: xhr.responseXML,
                requestHeaders: requestHeaders,
                responseHeaders: self.__parseHeadersStr(xhr.getAllResponseHeaders())
            };

            var index = httpXHR.responseHeaders['content-type'].indexOf(';');
            var contentType = index !== -1
                ? httpXHR.responseHeaders['content-type'].substr(0, index).trim()
                : httpXHR.responseHeaders['content-type'].trim();

            switch (contentType) {
                case 'application/xml':
                    httpXHR.response = xhr.responseXML;
                    break;
                case 'application/json':
                    httpXHR.response = JSON.parse(xhr.responseText);
                    break;
                default:
                    httpXHR.response = xhr.responseText;
                    break;
            }

            return httpXHR;
        };

        xhr.onload = function () {
            (xhr.status >= 400)
                ? reject(httpXHR(xhr, httpSetup.headers))
                : resolve(httpXHR(xhr, httpSetup.headers));
        };

        xhr.onerror = function () {
            reject(httpXHR(xhr, httpSetup.headers));
        };

        xhr.onabort = function () {
            reject(httpXHR(xhr, httpSetup.headers));
        };

        xhr.timeout = function () {
            reject(httpXHR(xhr, httpSetup.headers));
        };

        xhr.send(httpSetup.data);
    });
};

Nlic.HttpRequest.prototype.get = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'GET'}));
};

Nlic.HttpRequest.prototype.post = function (url, data, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'POST', data: data}));
};

Nlic.HttpRequest.prototype.patch = function (url, data, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'PATCH', data: data}));
};

Nlic.HttpRequest.prototype.head = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'HEAD'}));
};

Nlic.HttpRequest.prototype.jsonp = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'JSONP'}));
};

Nlic.HttpRequest.prototype.put = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'PUT'}));
};

Nlic.HttpRequest.prototype.delete = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'DELETE'}));
};

Nlic.HttpRequest.get = function (url, config) {
    return new Nlic.HttpRequest().get(url, config);
};

Nlic.HttpRequest.post = function (url, data, config) {
    return new Nlic.HttpRequest().post(url, data, config);
};

Nlic.HttpRequest.patch = function (url, data, config) {
    return new Nlic.HttpRequest().patch(url, data, config);
};

Nlic.HttpRequest.head = function (url, data, config) {
    return new Nlic.HttpRequest().head(url, data, config);
};

Nlic.HttpRequest.jsonp = function (url, data, config) {
    return new Nlic.HttpRequest().jsonp(url, data, config);
};

Nlic.HttpRequest.put = function (url, data, config) {
    return new Nlic.HttpRequest().put(url, data, config);
};

Nlic.HttpRequest.delete = function (url, data, config) {
    return new Nlic.HttpRequest().delete(url, data, config);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

Nlic.ValidationParameters = function () {
    var __productNumber;
    var __licenseeName;
    var __licenseeSecret;
    var __parameters = {};

    /**
     * Sets the target product
     *
     * optional productNumber, must be provided in case licensee auto-create is enabled
     * @param productNumber
     * @returns {Nlic.ValidationParameters}
     */
    this.setProductNumber = function (productNumber) {
        __productNumber = productNumber;
        return this;
    };

    this.getProductNumber = function () {
        return __productNumber;
    };

    /**
     * Sets the name for the new licensee
     *
     * optional human-readable licensee name in case licensee will be auto-created. This parameter must not
     * be the name, but can be used to store any other useful string information with new licensees, up to
     * 1000 characters.
     * @param licenseeName
     * @returns {Nlic.ValidationParameters}
     */
    this.setLicenseeName = function (licenseeName) {
        __licenseeName = licenseeName;
        return this;
    };

    this.getLicenseeName = function () {
        return __licenseeName;
    };

    /**
     * Sets the licensee secret
     *
     * licensee secret stored on the client side. Refer to Licensee Secret documentation for details.
     * @param licenseeSecret
     * @returns {Nlic.ValidationParameters}
     */
    this.setLicenseeSecret = function (licenseeSecret) {
        __licenseeSecret = licenseeSecret;
        return this;
    };

    this.getLicenseeSecret = function () {
        return __licenseeSecret;
    };

    this.getParameters = function () {
        return Object.assign({}, __parameters);
    };

    this.getProductModuleValidationParameters = function (productModuleNumber) {

        if (__parameters[productModuleNumber] === undefined || !Object.keys(__parameters[productModuleNumber]).length) {
            __parameters[productModuleNumber] = {};
        }

        return Object.assign({}, __parameters[productModuleNumber]);
    };

    this.setProductModuleValidationParameters = function (productModuleNumber, productModuleParameters) {
        if (__parameters[productModuleNumber] === undefined || !Object.keys(__parameters[productModuleNumber]).length) {
            __parameters[productModuleNumber] = {};
        }
        __parameters[productModuleNumber] = Object.assign(__parameters[productModuleNumber], productModuleParameters);
        return this;
    };
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};


Nlic.ValidationResults = function () {

    var __validators = {};
    var __ttl;

    this.getValidators = function () {
        return Object.assign({}, __validators);
    };

    this.setProductModuleValidation = function (productModuleNumber, productModuleValidation) {
        if (!Nlic.CheckUtils.isValid(productModuleNumber) || typeof productModuleNumber === 'object')  throw new TypeError('Bad productModuleNumber:' + productModuleNumber);

        __validators[productModuleNumber] = productModuleValidation;

        return this;
    };

    this.getProductModuleValidation = function (productModuleNumber) {
        if (!Nlic.CheckUtils.isValid(productModuleNumber) || typeof productModuleNumber === 'object')  throw new TypeError('Bad productModuleNumber:' + productModuleNumber);

        return __validators[productModuleNumber];
    };

    this.setTtl = function (ttl) {
        if (!Nlic.CheckUtils.isValid(ttl) || typeof ttl === 'object')  throw new TypeError('Bad ttl:' + ttl);
        __ttl = new Date(String(ttl));
        return this;
    };

    this.getTtl = function () {
        return (__ttl) ? new Date(__ttl) : undefined;
    };
};

Nlic.ValidationResults.prototype.toString = function () {
    var data = 'ValidationResult [';
    var validators = this.getValidators();

    for (var productModuleNumber in validators) {
        data += 'ProductModule<' + productModuleNumber + '>';
        if (!validators.hasOwnProperty(productModuleNumber))continue;
        data += JSON.stringify(validators[productModuleNumber]);
    }

    data += ']';
    return data;
};