/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};


NetLicensing.CheckUtils = function () {

};

/**
 * Check if value is valid
 * @param value
 * @returns {boolean}
 */
NetLicensing.CheckUtils.isValid = function (value) {
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
NetLicensing.CheckUtils.paramNotNull = function (parameter, parameterName) {
    if (!NetLicensing.CheckUtils.isValid(parameter)) throw new TypeError('Parameter ' + parameterName + ' has bad value ' + parameter);
    if (parameter === null) throw new TypeError('Parameter ' + parameterName + ' cannot be null')
};

NetLicensing.CheckUtils.paramNotEmpty = function (parameter, parameterName) {
    if (!NetLicensing.CheckUtils.isValid(parameter)) throw new TypeError('Parameter ' + parameterName + ' has bad value ' + parameter);
    if (!parameter) throw new TypeError('Parameter ' + parameterName + ' cannot be null or empty string')
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};


NetLicensing.DefineUtil = function () {

};

NetLicensing.DefineUtil.notChangeable = function (object, methods) {
    var noChangeable = {};

    methods = Array.isArray(methods) ? methods : [methods];
    var length = methods.length;

    for (var i = 0; i < length; i++) {
        noChangeable[methods[i]] = {writable: false, enumerable: false, configurable: false};
    }

    Object.defineProperties(object, noChangeable);
};

NetLicensing.DefineUtil.notEnumerable = function (object, methods) {
    var noChangeable = {};

    methods = Array.isArray(methods) ? methods : [methods];
    var length = methods.length;

    for (var i = 0; i < length; i++) {
        noChangeable[methods[i]] = {writable: true, enumerable: false, configurable: false};
    }

    Object.defineProperties(object, noChangeable);
};

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

NetLicensing.BaseEntity = function (properties) {

    /**
     * Object Handle
     * @type {NetLicensing.BaseEntity}
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
     * @returns {NetLicensing.BaseEntity}
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
     * @returns {NetLicensing.BaseEntity}
     */
    this.addProperty = function (property, value) {
        return this.setProperty(property, value);
    };

    /**
     * Set the entity properties.
     * @param properties
     * @returns {NetLicensing.BaseEntity}
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
     * @returns {NetLicensing.BaseEntity}
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
                switch (value) {
                    case 'true':
                    case 'TRUE':
                        return true;
                        break;
                    case 'false':
                    case 'FALSE':
                        return false;
                        break;
                    default:
                        return Boolean(value);
                        break;
                }
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
        if (!NetLicensing.CheckUtils.isValid(property) || typeof property === 'object')  throw new TypeError('Bad property name:' + property);
        if (!NetLicensing.CheckUtils.isValid(value)) throw new TypeError('Property ' + property + ' has bad value ' + value);
    };

    //make methods not changeable
    NetLicensing.DefineUtil.notChangeable(this, [
        'setProperty',
        'addProperty',
        'setProperties',
        'getProperty',
        'getProperties',
        'removeProperty',
        'removeProperties',
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

    /**
     * Get properties map
     */
    this.asPropertiesMap = function () {
        var properties = this.getProperties();
        var customProperties = {};

        for (var key in this) {
            if (!this.hasOwnProperty(key)) continue;
            if (!NetLicensing.CheckUtils.isValid(this[key])) continue;

            customProperties[key] = this[key];
        }

        return Object.assign({}, customProperties, properties);
    };

    this.setProperties(properties);
};

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

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

NetLicensing.Country = function () {
    NetLicensing.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            code: 'string',
            name: 'string',
            vatPercent: 'int',
            isEu: 'boolean',
        }
    });

    //define default entity properties
    this.__defines(['code', 'name', 'vatPercent', 'isEu']);

    //make methods not changeable
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

NetLicensing.Country.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.Country.prototype.constructor = NetLicensing.Country;

NetLicensing.Country.prototype.setCode = function (code) {
    return this.setProperty('code', code);
};

NetLicensing.Country.prototype.getCode = function (def) {
    return this.getProperty('code', def);
};

NetLicensing.Country.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing.Country.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing.Country.prototype.setVatPercent = function (vat) {
    return this.setProperty('vatPercent', vat);
};

NetLicensing.Country.prototype.getVatPercent = function (def) {
    return this.getProperty('vatPercent', def);
};

NetLicensing.Country.prototype.setIsEu = function (isEu) {
    return this.setProperty('isEu', isEu);
};

NetLicensing.Country.prototype.getIsEu = function (def) {
    return this.getProperty('isEu', def);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.Country.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.Country.prototype, [
    'setCode',
    'getCode',
    'setName',
    'getName',
    'setVatPercent',
    'getVatPercent',
    'setIsEu',
    'getIsEu',
]);
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

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

NetLicensing.License = function () {
    NetLicensing.BaseEntity.apply(this, arguments);

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
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

NetLicensing.License.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.License.prototype.constructor = NetLicensing.License;

NetLicensing.License.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing.License.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.License.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

NetLicensing.License.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

NetLicensing.License.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing.License.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing.License.prototype.setHidden = function (hidden) {
    return this.setProperty('hidden', hidden);
};

NetLicensing.License.prototype.getHidden = function (def) {
    return this.getProperty('hidden', def);
};

NetLicensing.License.prototype.setParentfeature = function (parentfeature) {
    return this.setProperty('parentfeature', parentfeature);
};

NetLicensing.License.prototype.getParentfeature = function (def) {
    return this.getProperty('parentfeature', def);
};

NetLicensing.License.prototype.setTimeVolume = function (timeVolume) {
    return this.setProperty('timeVolume', timeVolume);
};

NetLicensing.License.prototype.getTimeVolume = function (def) {
    return this.getProperty('timeVolume', def);
};

NetLicensing.License.prototype.setStartDate = function (startDate) {
    return this.setProperty('startDate', startDate);
};

NetLicensing.License.prototype.getStartDate = function (def) {
    return this.getProperty('startDate', def);
};

NetLicensing.License.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

NetLicensing.License.prototype.getPrice = function (def) {
    return this.getProperty('price', def);
};

NetLicensing.License.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.License.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.License.prototype, [
    'setNumber',
    'getNumber',
    'setActive',
    'getActive',
    'setName',
    'getName',
    'setHidden',
    'getHidden',
    'setParentfeature',
    'getParentfeature',
    'setTimeVolume',
    'getTimeVolume',
    'setStartDate',
    'getStartDate',
    'getInUse',
    'getPrice',
    'getCurrency',
]);
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * Licensee entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this
 * number when creating a licensee or let NetLicensing  generate one. Read-only after creation of the first license for
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

NetLicensing.Licensee = function () {
    NetLicensing.BaseEntity.apply(this, arguments);

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
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

NetLicensing.Licensee.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.Licensee.prototype.constructor = NetLicensing.Licensee;

NetLicensing.Licensee.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing.Licensee.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.Licensee.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

NetLicensing.Licensee.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

NetLicensing.Licensee.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing.Licensee.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing.Licensee.prototype.setLicenseeSecret = function (licenseeSecret) {
    return this.setProperty('licenseeSecret', licenseeSecret);
};

NetLicensing.Licensee.prototype.getLicenseeSecret = function (def) {
    return this.getProperty('licenseeSecret', def);
};

NetLicensing.Licensee.prototype.setMarkedForTransfer = function (markedForTransfer) {
    return this.setProperty('markedForTransfer', markedForTransfer);
};

NetLicensing.Licensee.prototype.getMarkedForTransfer = function (def) {
    return this.getProperty('markedForTransfer', def);
};

NetLicensing.Licensee.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.Licensee.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.Licensee.prototype, [
    'setNumber',
    'getNumber',
    'setActive',
    'getActive',
    'setName',
    'getName',
    'setLicenseeSecret',
    'getLicenseeSecret',
    'setMarkedForTransfer',
    'getMarkedForTransfer',
    'getInUse',
]);
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * License template entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the license template. Vendor can
 * assign this number when creating a license template or let NetLicensing  generate one. Read-only after creation of the
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
 * Mandatory for 'FLOATING' license type.
 * @property integer maxSessions
 *
 * Mandatory for 'QUANTITY' license type.
 * @property integer quantity
 *
 * @constructor
 */

NetLicensing.LicenseTemplate = function () {
    NetLicensing.BaseEntity.apply(this, arguments);

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
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(NetLicensing.LicenseTemplate, 'LICENSE_TYPE_FEATURE', {value: 'FEATURE'});
Object.defineProperty(NetLicensing.LicenseTemplate, 'LICENSE_TYPE_TIMEVOLUME', {value: 'TIMEVOLUME'});
Object.defineProperty(NetLicensing.LicenseTemplate, 'LICENSE_TYPE_FLOATING', {value: 'FLOATING'});
Object.defineProperty(NetLicensing.LicenseTemplate, 'LICENSE_TYPE_QUANTITY', {value: 'QUANTITY'});

NetLicensing.LicenseTemplate.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.LicenseTemplate.prototype.constructor = NetLicensing.LicenseTemplate;

NetLicensing.LicenseTemplate.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing.LicenseTemplate.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.LicenseTemplate.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

NetLicensing.LicenseTemplate.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

NetLicensing.LicenseTemplate.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing.LicenseTemplate.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing.LicenseTemplate.prototype.setLicenseType = function (licenseType) {
    return this.setProperty('licenseType', licenseType);
};

NetLicensing.LicenseTemplate.prototype.getLicenseType = function (def) {
    return this.getProperty('licenseType', def);
};

NetLicensing.LicenseTemplate.prototype.setPrice = function (price) {
    return this.setProperty('price', price);
};

NetLicensing.LicenseTemplate.prototype.getPrice = function (def) {
    return this.getProperty('price', def);
};

NetLicensing.LicenseTemplate.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

NetLicensing.LicenseTemplate.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

NetLicensing.LicenseTemplate.prototype.setAutomatic = function (automatic) {
    return this.setProperty('automatic', automatic);
};

NetLicensing.LicenseTemplate.prototype.getAutomatic = function (def) {
    return this.getProperty('automatic', def);
};

NetLicensing.LicenseTemplate.prototype.setHidden = function (hidden) {
    return this.setProperty('hidden', hidden);
};

NetLicensing.LicenseTemplate.prototype.getHidden = function (def) {
    return this.getProperty('hidden', def);
};

NetLicensing.LicenseTemplate.prototype.setHideLicenses = function (hideLicenses) {
    return this.setProperty('hideLicenses', hideLicenses);
};

NetLicensing.LicenseTemplate.prototype.getHideLicenses = function (def) {
    return this.getProperty('hideLicenses', def);
};

NetLicensing.LicenseTemplate.prototype.setTimeVolume = function (timeVolume) {
    return this.setProperty('timeVolume', timeVolume);
};

NetLicensing.LicenseTemplate.prototype.getTimeVolume = function (def) {
    return this.getProperty('timeVolume', def);
};

NetLicensing.LicenseTemplate.prototype.setMaxSessions = function (maxSessions) {
    return this.setProperty('maxSessions', maxSessions);
};

NetLicensing.LicenseTemplate.prototype.getMaxSessions = function (def) {
    return this.getProperty('maxSessions', def);
};

NetLicensing.LicenseTemplate.prototype.setQuantity = function (quantity) {
    return this.setProperty('quantity', quantity);
};

NetLicensing.LicenseTemplate.prototype.getQuantity = function (def) {
    return this.getProperty('quantity', def);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.LicenseTemplate.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.LicenseTemplate.prototype, [
    'setNumber',
    'getNumber',
    'setActive',
    'getActive',
    'setName',
    'getName',
    'setLicenseType',
    'getLicenseType',
    'setPrice',
    'getPrice',
    'setCurrency',
    'getCurrency',
    'setAutomatic',
    'getAutomatic',
    'setHidden',
    'getHidden',
    'setHideLicenses',
    'getHideLicenses',
    'setTimeVolume',
    'getTimeVolume',
    'setMaxSessions',
    'getMaxSessions',
    'setQuantity',
    'getQuantity',
]);
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */

NetLicensing.PaymentMethod = function PaymentMethod() {
    NetLicensing.BaseEntity.apply(this, arguments);

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
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

NetLicensing.PaymentMethod.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.PaymentMethod.prototype.constructor = NetLicensing.PaymentMethod;

NetLicensing.PaymentMethod.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing.PaymentMethod.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.PaymentMethod.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

NetLicensing.PaymentMethod.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

NetLicensing.PaymentMethod.prototype.setPaypalSubject = function (paypalSubject) {
    return this.setProperty('paypal.subject', paypalSubject);
};

NetLicensing.PaymentMethod.prototype.getPaypalSubject = function (def) {
    return this.getProperty('paypal.subject', def);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.PaymentMethod.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.PaymentMethod.prototype, [
    'setNumber',
    'getNumber',
    'setActive',
    'getActive',
    'setPaypalSubject',
    'getPaypalSubject',
]);
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

NetLicensing.Product = function () {
    NetLicensing.BaseEntity.apply(this, arguments);

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
     * @param discount NetLicensing.ProductDiscount
     * @returns {NetLicensing.Product}
     */
    this.addDiscount = function (discount) {
        if (!(discount instanceof NetLicensing.ProductDiscount)) {
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
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(NetLicensing.Product, 'LICENSEE_SECRET_MODE_DISABLED', {value: 'DISABLED'});
Object.defineProperty(NetLicensing.Product, 'LICENSEE_SECRET_MODE_PREDEFINED', {value: 'PREDEFINED'});
Object.defineProperty(NetLicensing.Product, 'LICENSEE_SECRET_MODE_CLIENT', {value: 'CLIENT'});

NetLicensing.Product.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.Product.prototype.constructor = NetLicensing.Product;

NetLicensing.Product.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing.Product.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.Product.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

NetLicensing.Product.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

NetLicensing.Product.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing.Product.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing.Product.prototype.setVersion = function (version) {
    return this.setProperty('version', version);
};

NetLicensing.Product.prototype.getVersion = function (def) {
    return this.getProperty('version', def);
};

NetLicensing.Product.prototype.setLicenseeAutoCreate = function (licenseeAutoCreate) {
    return this.setProperty('licenseeAutoCreate', licenseeAutoCreate);
};

NetLicensing.Product.prototype.getLicenseeAutoCreate = function (def) {
    return this.getProperty('licenseeAutoCreate', def);
};

NetLicensing.Product.prototype.setLicenseeSecretMode = function (licenseeSecretMode) {
    return this.setProperty('licenseeSecretMode', licenseeSecretMode);
};

NetLicensing.Product.prototype.getLicenseeSecretMode = function (def) {
    return this.getProperty('licenseeSecretMode', def);
};

NetLicensing.Product.prototype.setDescription = function (description) {
    return this.setProperty('description', description);
};

NetLicensing.Product.prototype.getDescription = function (def) {
    return this.getProperty('description', def);
};

NetLicensing.Product.prototype.setLicensingInfo = function (licensingInfo) {
    return this.setProperty('licensingInfo', licensingInfo);
};

NetLicensing.Product.prototype.getLicensingInfo = function (def) {
    return this.getProperty('licensingInfo', def);
};

NetLicensing.Product.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

NetLicensing.Product.prototype.__setListDiscount = function (properties) {
    if (!properties) return;
    var length = properties.length;
    var discount = new NetLicensing.ProductDiscount();
    for (var i = 0; i < length; i++) {
        discount.setProperty(properties[i].name, properties[i].value);
    }
    this.addDiscount(discount);
    return this;
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.Product.prototype, ['constructor', '__setListDiscount']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.Product.prototype, [
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
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

NetLicensing.ProductDiscount = function () {
    NetLicensing.BaseEntity.apply(this, arguments);

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

    //make methods not changeable
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

NetLicensing.ProductDiscount.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.ProductDiscount.prototype.constructor = NetLicensing.ProductDiscount;

NetLicensing.ProductDiscount.prototype.setTotalPrice = function (totalPrice) {
    return this.setProperty('totalPrice', totalPrice);
};

NetLicensing.ProductDiscount.prototype.getTotalPrice = function (def) {
    return this.getProperty('totalPrice', def);
};

NetLicensing.ProductDiscount.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

NetLicensing.ProductDiscount.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

NetLicensing.ProductDiscount.prototype.setAmountFix = function (amountFix) {
    return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
};

NetLicensing.ProductDiscount.prototype.getAmountFix = function (def) {
    return this.getProperty('amountFix', def);
};

NetLicensing.ProductDiscount.prototype.setAmountPercent = function (amountPercent) {
    return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
};

NetLicensing.ProductDiscount.prototype.getAmountPercent = function (def) {
    return this.getProperty('amountPercent', def);
};

NetLicensing.ProductDiscount.prototype.toString = function () {
    var totalPrice = this.getTotalPrice();
    var currency = this.getCurrency();
    var amount = 0;

    if (this.getAmountFix(null)) amount = this.getAmountFix();
    if (this.getAmountPercent(null)) amount = this.getAmountPercent() + '%';

    return totalPrice + ';' + currency + ';' + amount;
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.ProductDiscount.prototype, ['constructor', 'toString']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.ProductDiscount.prototype, [
    'setTotalPrice',
    'getTotalPrice',
    'setCurrency',
    'getCurrency',
    'setAmountFix',
    'getAmountFix',
    'setAmountPercent',
    'getAmountPercent',
]);
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

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

NetLicensing.ProductModule = function () {
    NetLicensing.BaseEntity.apply(this, arguments);

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
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_SUBSCRIPTION', {value: 'Subscription'});
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_TRY_AND_BUY', {value: 'TryAndBuy'});
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_RENTAL', {value: 'Rental'});
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_FLOATING', {value: 'Floating'});
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_MULTI_FEATURE', {value: 'MultiFeature'});
Object.defineProperty(NetLicensing.ProductModule, 'LICENSING_MODEL_PAY_PER_USE', {value: 'PayPerUse'});


NetLicensing.ProductModule.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.ProductModule.prototype.constructor = NetLicensing.ProductModule;

NetLicensing.ProductModule.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing.ProductModule.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.ProductModule.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

NetLicensing.ProductModule.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

NetLicensing.ProductModule.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing.ProductModule.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing.ProductModule.prototype.setLicensingModel = function (licensingModel) {
    return this.setProperty('licensingModel', licensingModel);
};

NetLicensing.ProductModule.prototype.getLicensingModel = function (def) {
    return this.getProperty('licensingModel', def);
};

NetLicensing.ProductModule.prototype.setMaxCheckoutValidity = function (maxCheckoutValidity) {
    return this.setProperty('maxCheckoutValidity', maxCheckoutValidity);
};

NetLicensing.ProductModule.prototype.getMaxCheckoutValidity = function (def) {
    return this.getProperty('maxCheckoutValidity', def);
};

NetLicensing.ProductModule.prototype.setYellowThreshold = function (yellowThreshold) {
    return this.setProperty('yellowThreshold', yellowThreshold);
};

NetLicensing.ProductModule.prototype.getYellowThreshold = function (def) {
    return this.getProperty('yellowThreshold', def);
};

NetLicensing.ProductModule.prototype.setRedThreshold = function (redThreshold) {
    return this.setProperty('redThreshold', redThreshold);
};

NetLicensing.ProductModule.prototype.getRedThreshold = function (def) {
    return this.getProperty('redThreshold', def);
};

NetLicensing.ProductModule.prototype.setLicenseTemplate = function (licenseTemplate) {
    return this.setProperty('licenseTemplate', licenseTemplate);
};

NetLicensing.ProductModule.prototype.getLicenseTemplate = function (def) {
    return this.getProperty('licenseTemplate', def);
};

NetLicensing.ProductModule.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.ProductModule.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.ProductModule.prototype, [
    'setNumber',
    'getNumber',
    'setActive',
    'getActive',
    'setName',
    'getName',
    'setLicensingModel',
    'getLicensingModel',
    'setMaxCheckoutValidity',
    'getMaxCheckoutValidity',
    'setYellowThreshold',
    'getYellowThreshold',
    'setRedThreshold',
    'getRedThreshold',
    'setLicenseTemplate',
    'getLicenseTemplate',
    'getInUse',
]);
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

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

NetLicensing.Token = function () {
    NetLicensing.BaseEntity.apply(this, arguments);

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
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(NetLicensing.Token, 'TOKEN_TYPE_DEFAULT', {value: 'DEFAULT'});
Object.defineProperty(NetLicensing.Token, 'TOKEN_TYPE_SHOP', {value: 'SHOP'});
Object.defineProperty(NetLicensing.Token, 'TOKEN_TYPE_APIKEY', {value: 'APIKEY'});

NetLicensing.Token.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.Token.prototype.constructor = NetLicensing.Token;

NetLicensing.Token.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.Token.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

NetLicensing.Token.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

NetLicensing.Token.prototype.setExpirationTime = function (expirationTime) {
    return this.setProperty('expirationTime', expirationTime);
};

NetLicensing.Token.prototype.getExpirationTime = function (def) {
    return this.getProperty('expirationTime', def);
};

NetLicensing.Token.prototype.setVendorNumber = function (vendorNumber) {
    return this.setProperty('vendorNumber', vendorNumber);
};

NetLicensing.Token.prototype.getVendorNumber = function (def) {
    return this.getProperty('vendorNumber', def);
};

NetLicensing.Token.prototype.setTokenType = function (tokenType) {
    return this.setProperty('tokenType', tokenType);
};

NetLicensing.Token.prototype.getTokenType = function (def) {
    return this.getProperty('tokenType', def);
};

NetLicensing.Token.prototype.setLicenseeNumber = function (licenseeNumber) {
    return this.setProperty('licenseeNumber', licenseeNumber);
};

NetLicensing.Token.prototype.getLicenseeNumber = function (def) {
    return this.getProperty('licenseeNumber', def);
};

NetLicensing.Token.prototype.setSuccessURL = function (successURL) {
    return this.setProperty('successURL', successURL);
};

NetLicensing.Token.prototype.getSuccessURL = function (def) {
    return this.getProperty('successURL', def);
};

NetLicensing.Token.prototype.setSuccessURLTitle = function (successURLTitle) {
    return this.setProperty('successURLTitle', successURLTitle);
};

NetLicensing.Token.prototype.getSuccessURLTitle = function (def) {
    return this.getProperty('successURLTitle', def);
};

NetLicensing.Token.prototype.setCancelURL = function (cancelURL) {
    return this.setProperty('cancelURL', cancelURL);
};

NetLicensing.Token.prototype.getCancelURL = function (def) {
    return this.getProperty('cancelURL', def);
};

NetLicensing.Token.prototype.setCancelURLTitle = function (cancelURLTitle) {
    return this.setProperty('cancelURLTitle', cancelURLTitle);
};

NetLicensing.Token.prototype.getCancelURLTitle = function (def) {
    return this.getProperty('cancelURLTitle', def);
};

NetLicensing.Token.prototype.getShopURL = function (def) {
    return this.getProperty('shopURL', def);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.Token.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.Token.prototype, [
    'getNumber',
    'setActive',
    'getActive',
    'setExpirationTime',
    'getExpirationTime',
    'setVendorNumber',
    'getVendorNumber',
    'setTokenType',
    'getTokenType',
    'setLicenseeNumber',
    'getLicenseeNumber',
    'setSuccessURL',
    'getSuccessURL',
    'setSuccessURLTitle',
    'getSuccessURLTitle',
    'setCancelURL',
    'getCancelURL',
    'setCancelURLTitle',
    'getCancelURLTitle',
    'getShopURL',
]);
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

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

NetLicensing.Transaction = function Transaction() {
    NetLicensing.BaseEntity.apply(this, arguments);

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
    NetLicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(NetLicensing.Transaction, 'STATUS_CANCELLED', {value: 'CANCELLED'});
Object.defineProperty(NetLicensing.Transaction, 'STATUS_CLOSED', {value: 'CLOSED'});
Object.defineProperty(NetLicensing.Transaction, 'STATUS_PENDING', {value: 'PENDING'});

NetLicensing.Transaction.prototype = Object.create(NetLicensing.BaseEntity.prototype);
NetLicensing.Transaction.prototype.constructor = NetLicensing.Transaction;

NetLicensing.Transaction.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

NetLicensing.Transaction.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

NetLicensing.Transaction.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

NetLicensing.Transaction.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

NetLicensing.Transaction.prototype.setStatus = function (status) {
    return this.setProperty('status', status);
};

NetLicensing.Transaction.prototype.getStatus = function (def) {
    return this.getProperty('status', def);
};

NetLicensing.Transaction.prototype.setSource = function (source) {
    return this.setProperty('source', source);
};

NetLicensing.Transaction.prototype.getSource = function (def) {
    return this.getProperty('source', def);
};

NetLicensing.Transaction.prototype.setGrandTotal = function (grandTotal) {
    return this.setProperty('grandTotal', grandTotal);
};

NetLicensing.Transaction.prototype.getGrandTotal = function (def) {
    return this.getProperty('grandTotal', def);
};

NetLicensing.Transaction.prototype.setDiscount = function (discount) {
    return this.setProperty('discount', discount);
};

NetLicensing.Transaction.prototype.getDiscount = function (def) {
    return this.getProperty('discount', def);
};

NetLicensing.Transaction.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

NetLicensing.Transaction.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

NetLicensing.Transaction.prototype.setDateCreated = function (dateCreated) {
    return this.setProperty('dateCreated', dateCreated);
};

NetLicensing.Transaction.prototype.getDateCreated = function (def) {
    return this.getProperty('dateCreated', def);
};

NetLicensing.Transaction.prototype.setDateClosed = function (dateClosed) {
    return this.setProperty('dateClosed', dateClosed);
};

NetLicensing.Transaction.prototype.getDateClosed = function (def) {
    return this.getProperty('dateClosed', def);
};

NetLicensing.Transaction.prototype.setPaymentMethod = function (paymentMethod) {
    return this.setProperty('paymentMethod', paymentMethod);
};

NetLicensing.Transaction.prototype.getPaymentMethod = function (def) {
    return this.getProperty('paymentMethod', def);
};

NetLicensing.Transaction.prototype.setActive = function () {
    return this.setProperty('active', true);
};

//make methods not changeable
NetLicensing.DefineUtil.notChangeable(NetLicensing.Transaction.prototype, ['constructor']);

//make methods not enumerable
NetLicensing.DefineUtil.notEnumerable(NetLicensing.Transaction.prototype, [
    'setNumber',
    'getNumber',
    'setName',
    'getName',
    'setStatus',
    'getStatus',
    'setSource',
    'getSource',
    'setGrandTotal',
    'getGrandTotal',
    'setDiscount',
    'getDiscount',
    'setCurrency',
    'getCurrency',
    'setDateCreated',
    'getDateCreated',
    'setDateClosed',
    'getDateClosed',
    'setPaymentMethod',
    'getPaymentMethod',
    'setActive',
]);
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

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

NetLicensing.Context = function (values) {

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
        securityMode: NetLicensing.Context.BASIC_AUTHENTICATION
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
        if (!NetLicensing.CheckUtils.isValid(key) || typeof key === 'object')  throw new Error('Bad value key:' + key);
        if (!NetLicensing.CheckUtils.isValid(value)) throw new Error('Value ' + key + ' has wrong value' + value);
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
Object.defineProperty(NetLicensing.Context, 'BASIC_AUTHENTICATION', {value: 'BASIC_AUTH'});
Object.defineProperty(NetLicensing.Context, 'APIKEY_IDENTIFICATION', {value: 'APIKEY'});

NetLicensing.Context.prototype.setBaseUrl = function (baseUrl) {
    return this.setValue('baseUrl', baseUrl);
};

NetLicensing.Context.prototype.getBaseUrl = function (def) {
    return this.getValue('baseUrl', def);
};

NetLicensing.Context.prototype.setUsername = function (username) {
    return this.setValue('username', username);
};

NetLicensing.Context.prototype.getUsername = function (def) {
    return this.getValue('username', def);
};

NetLicensing.Context.prototype.setPassword = function (password) {
    return this.setValue('password', password);
};

NetLicensing.Context.prototype.getPassword = function (def) {
    return this.getValue('password', def);
};

NetLicensing.Context.prototype.setApiKey = function (apiKey) {
    return this.setValue('apiKey', apiKey);
};

NetLicensing.Context.prototype.getApiKey = function (def) {
    return this.getValue('apiKey', def);
};

NetLicensing.Context.prototype.setSecurityMode = function (securityMode) {
    return this.setValue('securityMode', securityMode);
};

NetLicensing.Context.prototype.getSecurityMode = function (def) {
    return this.getValue('securityMode', def);
};

NetLicensing.Context.prototype.setVendorNumber = function (vendorNumber) {
    return this.setValue('vendorNumber', vendorNumber);
};

NetLicensing.Context.prototype.getVendorNumber = function (def) {
    return this.getValue('vendorNumber', def);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

NetLicensing.HttpRequest = function () {

};

NetLicensing.HttpRequest.prototype.__serialize = function (data, prefix) {
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

NetLicensing.HttpRequest.prototype.__parseQuery = function (url) {
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

NetLicensing.HttpRequest.prototype.__parseHeadersStr = function (headers) {
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

NetLicensing.HttpRequest.prototype.send = function (config) {
    var self = this;

    if (typeof module !== 'undefined' && module.exports) {
        return this.__httpSend(config);
    }

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

NetLicensing.HttpRequest.prototype.__httpSend = function (config) {
    var url = require('url');
    var urlParts = url.parse(config.url);
    var http = (url.protocol == 'http:') ? require('http') : require('https');
    var self = this;

    return new Promise(function (resolve, reject) {

        var httpSetup = Object.assign({}, {
            method: 'GET',
            url: '/',
            headers: {},
            data: {},
            timeout: 0
        }, config);

        httpSetup.method = httpSetup.method.toUpperCase();
        httpSetup.data = self.__serialize(httpSetup.data);
        httpSetup.headers['Content-Length'] = Buffer.byteLength(httpSetup.data);

        httpSetup.hostname = urlParts.hostname;
        httpSetup.path = httpSetup.url;

        switch (httpSetup.method) {
            case 'POST':
                httpSetup.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                break;
        }

        var req = http.request(httpSetup, function (response) {

            var httpXHR = {
                status: response.statusCode,
                statusText: response.statusMessage,
                responseURL: httpSetup.path,
                requestHeaders: httpSetup.headers,
                responseHeaders: response.headers
            };

            response.on('data', function (chunk) {
                var index = httpXHR.responseHeaders['content-type'].indexOf(';');
                var contentType = index !== -1
                    ? httpXHR.responseHeaders['content-type'].substr(0, index).trim()
                    : httpXHR.responseHeaders['content-type'].trim();

                switch (contentType) {
                    case 'application/json':
                        httpXHR.response = JSON.parse(chunk.toString('utf8'));
                        break;
                    default:
                        httpXHR.response = chunk.toString('utf8');
                        break;
                }

                (httpXHR.status >= 400)
                    ? reject(httpXHR)
                    : resolve(httpXHR);
            });
        });

        req.on('error', function (e) {
            reject(e);
        });

        req.write(httpSetup.data);

        req.end();
    });
};

NetLicensing.HttpRequest.prototype.get = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'GET'}));
};

NetLicensing.HttpRequest.prototype.post = function (url, data, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'POST', data: data}));
};

NetLicensing.HttpRequest.prototype.patch = function (url, data, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'PATCH', data: data}));
};

NetLicensing.HttpRequest.prototype.head = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'HEAD'}));
};

NetLicensing.HttpRequest.prototype.jsonp = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'JSONP'}));
};

NetLicensing.HttpRequest.prototype.put = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'PUT'}));
};

NetLicensing.HttpRequest.prototype.delete = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'DELETE'}));
};

NetLicensing.HttpRequest.get = function (url, config) {
    return new NetLicensing.HttpRequest().get(url, config);
};

NetLicensing.HttpRequest.post = function (url, data, config) {
    return new NetLicensing.HttpRequest().post(url, data, config);
};

NetLicensing.HttpRequest.patch = function (url, data, config) {
    return new NetLicensing.HttpRequest().patch(url, data, config);
};

NetLicensing.HttpRequest.head = function (url, data, config) {
    return new NetLicensing.HttpRequest().head(url, data, config);
};

NetLicensing.HttpRequest.jsonp = function (url, data, config) {
    return new NetLicensing.HttpRequest().jsonp(url, data, config);
};

NetLicensing.HttpRequest.put = function (url, data, config) {
    return new NetLicensing.HttpRequest().put(url, data, config);
};

NetLicensing.HttpRequest.delete = function (url, data, config) {
    return new NetLicensing.HttpRequest().delete(url, data, config);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

NetLicensing.ValidationParameters = function () {
    var __productNumber;
    var __licenseeName;
    var __licenseeSecret;
    var __parameters = {};

    /**
     * Sets the target product
     *
     * optional productNumber, must be provided in case licensee auto-create is enabled
     * @param productNumber
     * @returns {NetLicensing.ValidationParameters}
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
     * @returns {NetLicensing.ValidationParameters}
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
     * @returns {NetLicensing.ValidationParameters}
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
var NetLicensing  = NetLicensing  || {};


NetLicensing.ValidationResults = function () {

    var __validators = {};
    var __ttl;

    this.getValidators = function () {
        return Object.assign({}, __validators);
    };

    this.setProductModuleValidation = function (productModuleNumber, productModuleValidation) {
        if (!NetLicensing.CheckUtils.isValid(productModuleNumber) || typeof productModuleNumber === 'object')  throw new TypeError('Bad productModuleNumber:' + productModuleNumber);

        __validators[productModuleNumber] = productModuleValidation;

        return this;
    };

    this.getProductModuleValidation = function (productModuleNumber) {
        if (!NetLicensing.CheckUtils.isValid(productModuleNumber) || typeof productModuleNumber === 'object')  throw new TypeError('Bad productModuleNumber:' + productModuleNumber);

        return __validators[productModuleNumber];
    };

    this.setTtl = function (ttl) {
        if (!NetLicensing.CheckUtils.isValid(ttl) || typeof ttl === 'object')  throw new TypeError('Bad ttl:' + ttl);
        __ttl = new Date(String(ttl));
        return this;
    };

    this.getTtl = function () {
        return (__ttl) ? new Date(__ttl) : undefined;
    };
};

NetLicensing.ValidationResults.prototype.toString = function () {
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
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services
 *
 * @constructor
 */

NetLicensing.LicenseeService = function () {

};

//static constants
Object.defineProperties(NetLicensing.LicenseeService, {
    'ENDPOINT_PATH': {value: 'licensee'},
    'ENDPOINT_PATH_VALIDATE': {value: 'validate'},
    'ENDPOINT_PATH_TRANSFER': {value: 'transfer'},
});

/**
 * Creates new licensee object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Createlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * parent product to which the new licensee is to be added
 * @param productNumber string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param licensee NetLicensing.Licensee
 *
 * return the newly created licensee object in promise
 * @returns {Promise}
 */
NetLicensing.LicenseeService.create = function (context, productNumber, licensee) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(licensee instanceof NetLicensing.Licensee)) throw new TypeError('licensee must be an instance of NetLicensing.Licensee');

    NetLicensing.CheckUtils.paramNotEmpty(productNumber, 'productNumber');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    licensee.setProperty('productNumber', productNumber);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.LicenseeService.ENDPOINT_PATH, licensee.asPropertiesMap(), NetLicensing.Licensee);
};

/**
 * Gets licensee by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Getlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the licensee number
 * @param number string
 *
 * return the licensee in promise
 * @returns {Promise}
 */
NetLicensing.LicenseeService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.LicenseeService.ENDPOINT_PATH + '/' + number, {}, NetLicensing.Licensee);
};

/**
 * Returns all licensees of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Licenseeslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of licensees (of all products) or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.LicenseeService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.LicenseeService.ENDPOINT_PATH, queryParams, NetLicensing.Licensee);
};

/**
 * Updates licensee properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Updatelicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * licensee number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param licensee NetLicensing.Licensee
 *
 * return updated licensee in promise.
 * @returns {Promise}
 */
NetLicensing.LicenseeService.update = function (context, number, licensee) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(licensee instanceof NetLicensing.Licensee)) throw new TypeError('licensee must be an instance of NetLicensing.Licensee');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.LicenseeService.ENDPOINT_PATH + '/' + number, licensee.asPropertiesMap(), NetLicensing.Licensee);
};

/**
 * Deletes licensee.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Deletelicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
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
NetLicensing.LicenseeService.delete = function (context, number, forceCascade) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return NetLicensing.Service
        .getInstance()
        .delete(context, NetLicensing.LicenseeService.ENDPOINT_PATH + '/' + number, queryParams);
};

/**
 * Validates active licenses of the licensee. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Validatelicensee
 *
 * @param context NetLicensing.Context
 *
 * licensee number
 * @param number string
 *
 * optional validation parameters. See ValidationParameters and licensing model documentation for
 * details.
 * @param validationParameters NetLicensing.ValidationParameters.
 *
 * @returns {Promise}
 */
NetLicensing.LicenseeService.validate = function (context, number, validationParameters) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(validationParameters instanceof NetLicensing.ValidationParameters)) throw new TypeError('validationParameters must be an instance of NetLicensing.ValidationParameters');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

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

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.LicenseeService.ENDPOINT_PATH + '/' + number + '/' + NetLicensing.LicenseeService.ENDPOINT_PATH_VALIDATE, queryParams)
        .then(function (item) {
            var data = {};
            var validationResults = new NetLicensing.ValidationResults();

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
                .setTtl(NetLicensing.Service.getInstance().getLastHttpRequestInfo().response.ttl);

            return validationResults;
        });
};

/**
 * Transfer licenses between licensees.
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Licensee+Services#LicenseeServices-Transferlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the number of the licensee receiving licenses
 * @param number string
 *
 * the number of the licensee delivering licenses
 * @param sourceLicenseeNumber string
 *
 * @returns {Promise}
 */
NetLicensing.LicenseeService.transfer = function (context, number, sourceLicenseeNumber) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');
    NetLicensing.CheckUtils.paramNotEmpty(sourceLicenseeNumber, 'sourceLicenseeNumber');

    var queryParams = {sourceLicenseeNumber: sourceLicenseeNumber};

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.LicenseeService.ENDPOINT_PATH + '/' + number + '/' + NetLicensing.LicenseeService.ENDPOINT_PATH_TRANSFER, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services
 *
 * @constructor
 */
NetLicensing.LicenseService = function () {
};

//static constants
Object.defineProperty(NetLicensing.LicenseService, 'ENDPOINT_PATH', {value: 'license'});

/**
 * Creates new license object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services#LicenseServices-Createlicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
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
 * @param license NetLicensing.License
 *
 * return the newly created license object in promise
 * @returns {Promise}
 */
NetLicensing.LicenseService.create = function (context, licenseeNumber, licenseTemplateNumber, transactionNumber, license) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(license instanceof NetLicensing.License)) throw new TypeError('license must be an instance of NetLicensing.License');

    NetLicensing.CheckUtils.paramNotEmpty(licenseeNumber, 'licenseeNumber');
    NetLicensing.CheckUtils.paramNotEmpty(licenseTemplateNumber, 'licenseTemplateNumber');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    license.setProperty('licenseeNumber', licenseeNumber);
    license.setProperty('licenseTemplateNumber', licenseTemplateNumber);

    if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.LicenseService.ENDPOINT_PATH, license.asPropertiesMap(), NetLicensing.License);
};

/**
 * Gets license by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services#LicenseServices-Getlicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the license number
 * @param number string
 *
 * return the license in promise
 * @returns {Promise}
 */
NetLicensing.LicenseService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.LicenseService.ENDPOINT_PATH + '/' + number, {}, NetLicensing.License)
};

/**
 * Returns licenses of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services#LicenseServices-Licenseslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * return array of licenses (of all products) or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.LicenseService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.LicenseService.ENDPOINT_PATH, queryParams, NetLicensing.License);
};

/**
 * Updates license properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services#LicenseServices-Updatelicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * license number
 * @param number string
 *
 * transaction for the license update. Created implicitly if transactionNumber is null. In this case the
 * operation will be in a separate transaction.
 * @param transactionNumber string|null
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param license NetLicensing.License
 *
 * return updated license in promise.
 * @returns {Promise}
 */
NetLicensing.LicenseService.update = function (context, number, transactionNumber, license) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(license instanceof NetLicensing.License)) throw new TypeError('license must be an instance of NetLicensing.License');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.LicenseService.ENDPOINT_PATH + '/' + number, license.asPropertiesMap(), NetLicensing.License);
};

/**
 * Deletes license.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Services#LicenseServices-Deletelicense
 *
 * When any license is deleted, corresponding transaction is created automatically.
 *
 *  determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
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
NetLicensing.LicenseService.delete = function (context, number, forceCascade) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return NetLicensing.Service
        .getInstance()
        .delete(context, NetLicensing.LicenseService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services
 *
 * @constructor
 */
NetLicensing.LicenseTemplateService = function () {
};

//static constants
Object.defineProperty(NetLicensing.LicenseTemplateService, 'ENDPOINT_PATH', {value: 'licensetemplate'});

/**
 * Creates new license template object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services#LicenseTemplateServices-Createlicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * parent product module to which the new license template is to be added
 * @param productModuleNumber
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param licenseTemplate NetLicensing.LicenseTemplate
 *
 * the newly created license template object in promise
 * @returns {Promise}
 */
NetLicensing.LicenseTemplateService.create = function (context, productModuleNumber, licenseTemplate) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(licenseTemplate instanceof NetLicensing.LicenseTemplate)) throw new TypeError('licenseTemplate must be an instance of NetLicensing.LicenseTemplate');

    NetLicensing.CheckUtils.paramNotEmpty(productModuleNumber, 'productModuleNumber');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    licenseTemplate.setProperty('productModuleNumber', productModuleNumber);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.LicenseTemplateService.ENDPOINT_PATH, licenseTemplate.asPropertiesMap(), NetLicensing.LicenseTemplate);
};

/**
 * Gets license template by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services#LicenseTemplateServices-Getlicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the license template number
 * @param number string
 *
 * return the license template object in promise
 * @returns {Promise}
 */
NetLicensing.LicenseTemplateService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, {}, NetLicensing.LicenseTemplate);
};

/**
 * Returns all license templates of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services#LicenseTemplateServices-Licensetemplateslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of license templates (of all products/modules) or null/empty list if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.LicenseTemplateService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.LicenseTemplateService.ENDPOINT_PATH, queryParams, NetLicensing.LicenseTemplate);
};

/**
 * Updates license template properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services#LicenseTemplateServices-Updatelicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * license template number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param licenseTemplate NetLicensing.LicenseTemplate
 *
 * updated license template in promise.
 * @returns {Promise}
 */
NetLicensing.LicenseTemplateService.update = function (context, number, licenseTemplate) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(licenseTemplate instanceof NetLicensing.LicenseTemplate)) throw new TypeError('licenseTemplate must be an instance of NetLicensing.LicenseTemplate');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, licenseTemplate.asPropertiesMap(), NetLicensing.LicenseTemplate);
};

/**
 * Deletes license template.See NetLicensingAPI JavaDoc for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/License+Template+Services#LicenseTemplateServices-Deletelicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
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
NetLicensing.LicenseTemplateService.delete = function (context, number, forceCascade) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return NetLicensing.Service
        .getInstance()
        .delete(context, NetLicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

NetLicensing.PaymentMethodService = function () {
};

//static constants
Object.defineProperty(NetLicensing.PaymentMethodService, 'ENDPOINT_PATH', {value: 'paymentmethod'});

/**
 * Gets payment method by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Getpaymentmethod
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the payment method number
 * @param number string
 *
 * return the payment method in promise
 * @returns {Promise}
 */
NetLicensing.PaymentMethodService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.PaymentMethodService.ENDPOINT_PATH + '/' + number, {}, NetLicensing.PaymentMethod);
};


/**
 * Returns payment methods of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Paymentmethodslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of payment method entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.PaymentMethodService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.PaymentMethodService.ENDPOINT_PATH, queryParams, NetLicensing.PaymentMethod);
};

/**
 * Updates payment method properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Updatepaymentmethod
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the payment method number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param paymentMethod NetLicensing.PaymentMethod
 *
 * return updated payment method in promise.
 * @returns {Promise}
 */
NetLicensing.PaymentMethodService.update = function (context, number, paymentMethod) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(paymentMethod instanceof NetLicensing.PaymentMethod)) throw new TypeError('paymentMethod must be an instance of NetLicensing.PaymentMethod');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.PaymentMethodService.ENDPOINT_PATH + '/' + number, paymentMethod.asPropertiesMap(), NetLicensing.PaymentMethod);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services
 *
 * @constructor
 */

NetLicensing.ProductModuleService = function () {

};

//static constants
Object.defineProperty(NetLicensing.ProductModuleService, 'ENDPOINT_PATH', {value: 'productmodule'});

/**
 * Creates new product module object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Createproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * parent product to which the new product module is to be added
 * @param productNumber string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param productModule NetLicensing.ProductModule
 *
 * the newly created product module object in promise
 * @returns {Promise}
 */
NetLicensing.ProductModuleService.create = function (context, productNumber, productModule) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(productModule instanceof NetLicensing.ProductModule)) throw new TypeError('product must be an instance of NetLicensing.ProductModule');

    NetLicensing.CheckUtils.paramNotEmpty(productNumber, 'productNumber');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    productModule.setProperty('productNumber', productNumber);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.ProductModuleService.ENDPOINT_PATH, productModule.asPropertiesMap(), NetLicensing.ProductModule);
};

/**
 * Gets product module by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Getproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the product module number
 * @param number string
 *
 * return the product module object in promise
 * @returns {Promise}
 */
NetLicensing.ProductModuleService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.ProductModuleService.ENDPOINT_PATH + '/' + number, {}, NetLicensing.ProductModule);
};

/**
 * Returns products of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Productslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of product modules entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.ProductModuleService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.ProductModuleService.ENDPOINT_PATH, queryParams, NetLicensing.ProductModule);
};

/**
 * Updates product module properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Updateproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * product module number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param productModule NetLicensing.ProductModule
 *
 * updated product module in promise.
 * @returns {Promise}
 */
NetLicensing.ProductModuleService.update = function (context, number, productModule) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(productModule instanceof NetLicensing.ProductModule)) throw new TypeError('product must be an instance of NetLicensing.ProductModule');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.ProductModuleService.ENDPOINT_PATH + '/' + number, productModule.asPropertiesMap(), NetLicensing.ProductModule);
};

/**
 * Deletes product module.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Deleteproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
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
NetLicensing.ProductModuleService.delete = function (context, number, forceCascade) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return NetLicensing.Service
        .getInstance()
        .delete(context, NetLicensing.ProductModuleService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services
 *
 * @constructor
 */

NetLicensing.ProductService = function () {
};

//static constants
Object.defineProperty(NetLicensing.ProductService, 'ENDPOINT_PATH', {value: 'product'});

/**
 * Creates new product with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Createproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param product NetLicensing.Product
 *
 * return the newly created product object in promise
 * @returns {Promise}
 */

NetLicensing.ProductService.create = function (context, product) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(product instanceof NetLicensing.Product)) throw new TypeError('product must be an instance of NetLicensing.Product');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.ProductService.ENDPOINT_PATH, product.asPropertiesMap(), NetLicensing.Product);
};

/**
 * Gets product by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Getproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the product number
 * @param number string
 *
 * return the product object in promise
 * @returns {Promise}
 */
NetLicensing.ProductService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.ProductService.ENDPOINT_PATH + '/' + number, {}, NetLicensing.Product);
};

/**
 * Returns products of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Productslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of product entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.ProductService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.ProductService.ENDPOINT_PATH, queryParams, NetLicensing.Product);
};

/**
 * Updates product properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Updateproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * product number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param product NetLicensing.Product
 *
 * updated product in promise.
 * @returns {Promise}
 */
NetLicensing.ProductService.update = function (context, number, product) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(product instanceof NetLicensing.Product)) throw new TypeError('product must be an instance of NetLicensing.Product');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.ProductService.ENDPOINT_PATH + '/' + number, product.asPropertiesMap(), NetLicensing.Product);
};

/**
 * Deletes product.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Deleteproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
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
NetLicensing.ProductService.delete = function (context, number, forceCascade) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return NetLicensing.Service
        .getInstance()
        .delete(context, NetLicensing.ProductService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing = NetLicensing || {};

NetLicensing.Service = (function () {
    var instance;

    function createInstance() {
        var instance = {};

        var __httpXHR = {};

        var base64Encode = function (e) {
            var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

            var utf8_encode = function (e) {
                e = e.replace(/rn/g, "n");
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r)
                    } else if (r > 127 && r < 2048) {
                        t += String.fromCharCode(r >> 6 | 192);
                        t += String.fromCharCode(r & 63 | 128)
                    } else {
                        t += String.fromCharCode(r >> 12 | 224);
                        t += String.fromCharCode(r >> 6 & 63 | 128);
                        t += String.fromCharCode(r & 63 | 128)
                    }
                }
                return t
            };

            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = utf8_encode(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64
                } else if (isNaN(i)) {
                    a = 64
                }
                t = t + _keyStr.charAt(s) + _keyStr.charAt(o) + _keyStr.charAt(u) + _keyStr.charAt(a)
            }
            return t

        };

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
         * Send request to NetLicensing  RestApi
         * @param context
         * @param method
         * @param urlTemplate
         * @param queryParams
         */
        instance.request = function (context, method, urlTemplate, queryParams) {

            if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

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
                case NetLicensing.Context.BASIC_AUTHENTICATION:
                    if (!context.getUsername()) throw new Error('Missing parameter "username"');
                    if (!context.getPassword()) throw new Error('Missing parameter "password"');

                    headers['Authorization'] = 'Basic ' + base64Encode(context.getUsername() + ':' + context.getPassword());
                    break;
                case NetLicensing.Context.APIKEY_IDENTIFICATION:
                    if (!context.getApiKey()) throw new Error('Missing parameter "apiKey"');

                    headers['Authorization'] = 'Basic ' + base64Encode('apiKey:' + context.getApiKey());
                    break;
                default:
                    throw new Error('Unknown security mode');
                    break;
            }

            return new NetLicensing.HttpRequest().send({
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

            if (!(entity instanceof NetLicensing.BaseEntity)) {
                throw new Error('Invalid entity ' + resultType + ', entity must be instanceof NetLicensing.BaseEntity');
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
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services
 *
 * @constructor
 */
NetLicensing.TokenService = function () {
};

//static constants
Object.defineProperty(NetLicensing.TokenService, 'ENDPOINT_PATH', {value: 'token'});

/**
 * Creates new token.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Createtoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param token NetLicensing.Token
 *
 * return created token in promise
 * @returns {Promise}
 */
NetLicensing.TokenService.create = function (context, token) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(token instanceof NetLicensing.Token)) throw new TypeError('token must be an instance of NetLicensing.Token');

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.TokenService.ENDPOINT_PATH, token.asPropertiesMap(), NetLicensing.Token);
};

/**
 * Gets token by its number..See NetLicensingAPI for details:
 * https://www.labs64.de/conluence/display/NetLicensing PUB/Token+Services#TokenServices-Gettoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the token number
 * @param number
 *
 * return the token in promise
 * @returns {Promise}
 */
NetLicensing.TokenService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.TokenService.ENDPOINT_PATH + '/' + number, {}, NetLicensing.Token);
};

/**
 * Returns tokens of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Tokenslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of token entities or empty array if nothing found.
 * @return array
 */
NetLicensing.TokenService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.TokenService.ENDPOINT_PATH, queryParams, NetLicensing.Token);
};

/**
 * Delete token by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Deletetoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 *  the token number
 * @param number string
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
NetLicensing.TokenService.delete = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    return NetLicensing.Service
        .getInstance()
        .delete(context, NetLicensing.TokenService.ENDPOINT_PATH + '/' + number);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services
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

NetLicensing.TransactionService = function () {
};

//static constants
Object.defineProperty(NetLicensing.TransactionService, 'ENDPOINT_PATH', {value: 'transaction'});

/**
 * Creates new transaction object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Createtransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param transaction NetLicensing.Transaction
 *
 * return the newly created transaction object in promise
 * @returns {Promise}
 */
NetLicensing.TransactionService.create = function (context, transaction) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(transaction instanceof NetLicensing.Transaction)) throw new TypeError('transaction must be an instance of NetLicensing.Transaction');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.TransactionService.ENDPOINT_PATH, transaction.asPropertiesMap(), NetLicensing.Transaction);
};

/**
 * Gets transaction by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Gettransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * the transaction number
 * @param number string
 *
 * return the transaction in promise
 * @returns {Promise}
 */
NetLicensing.TransactionService.get = function (context, number) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .get(context, NetLicensing.TransactionService.ENDPOINT_PATH + '/' + number, {}, NetLicensing.Transaction);
};

/**
 * Returns all transactions of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Transactionslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string
 *
 * array of transaction entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.TransactionService.list = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.TransactionService.ENDPOINT_PATH, queryParams, NetLicensing.Transaction);
};

/**
 * Updates transaction properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Updatetransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * transaction number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param transaction NetLicensing.Transaction
 *
 * return updated transaction in promise.
 * @returns {Promise}
 */
NetLicensing.TransactionService.update = function (context, number, transaction) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');
    if (!(transaction instanceof NetLicensing.Transaction)) throw new TypeError('transaction must be an instance of NetLicensing.Transaction');

    NetLicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .post(context, NetLicensing.TransactionService.ENDPOINT_PATH + '/' + number, transaction.asPropertiesMap(), NetLicensing.Transaction);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services
 * @constructor
 */
NetLicensing.UtilityService = function () {
};

//static constants
Object.defineProperty(NetLicensing.UtilityService, 'ENDPOINT_PATH', {value: 'utility'});

/**
 * Returns all license types. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services#UtilityServices-LicenseTypeslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * array of available license types or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.UtilityService.listLicenseTypes = function (context) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.UtilityService.ENDPOINT_PATH + '/licenseTypes')
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
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services#UtilityServices-LicensingModelslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context NetLicensing.Context
 *
 * array of available license models or empty array if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.UtilityService.listLicensingModels = function (context) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.UtilityService.ENDPOINT_PATH + '/licensingModels')
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
 * Returns all countries.
 *
 *  determines the vendor on whose behalf the call is performed
 * @param context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter
 *
 * collection of available countries or null/empty list if nothing found in promise.
 * @returns {Promise}
 */
NetLicensing.UtilityService.listCountries = function (context, filter) {
    if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

    context.setSecurityMode(NetLicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!NetLicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return NetLicensing.Service
        .getInstance()
        .list(context, NetLicensing.UtilityService.ENDPOINT_PATH + '/countries', queryParams, NetLicensing.Country);
};
if (typeof module !== 'undefined' && module.exports && NetLicensing) {
    module.exports = NetLicensing
}