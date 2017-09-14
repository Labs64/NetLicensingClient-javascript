/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};


Netlicensing.CheckUtils = function () {

};

/**
 * Check if value is valid
 * @param value
 * @returns {boolean}
 */
Netlicensing.CheckUtils.isValid = function (value) {
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
Netlicensing.CheckUtils.paramNotNull = function (parameter, parameterName) {
    if (!Netlicensing.CheckUtils.isValid(parameter)) throw new TypeError('Parameter ' + parameterName + ' has bad value ' + parameter);
    if (parameter === null) throw new TypeError('Parameter ' + parameterName + ' cannot be null')
};

Netlicensing.CheckUtils.paramNotEmpty = function (parameter, parameterName) {
    if (!Netlicensing.CheckUtils.isValid(parameter)) throw new TypeError('Parameter ' + parameterName + ' has bad value ' + parameter);
    if (!parameter) throw new TypeError('Parameter ' + parameterName + ' cannot be null or empty string')
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};


Netlicensing.DefineUtil = function () {

};

Netlicensing.DefineUtil.notChangeable = function (object, methods) {
    var noChangeable = {};

    methods = Array.isArray(methods) ? methods : [methods];
    var length = methods.length;

    for (var i = 0; i < length; i++) {
        noChangeable[methods[i]] = {writable: false, enumerable: false, configurable: false};
    }

    Object.defineProperties(object, noChangeable);
};

Netlicensing.DefineUtil.notEnumerable = function (object, methods) {
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
var Netlicensing = Netlicensing || {};

Netlicensing.BaseEntity = function (properties) {

    /**
     * Object Handle
     * @type {Netlicensing.BaseEntity}
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
     * @returns {Netlicensing.BaseEntity}
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
     * @returns {Netlicensing.BaseEntity}
     */
    this.addProperty = function (property, value) {
        return this.setProperty(property, value);
    };

    /**
     * Set the entity properties.
     * @param properties
     * @returns {Netlicensing.BaseEntity}
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
     * @returns {Netlicensing.BaseEntity}
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
        if (!Netlicensing.CheckUtils.isValid(property) || typeof property === 'object')  throw new TypeError('Bad property name:' + property);
        if (!Netlicensing.CheckUtils.isValid(value)) throw new TypeError('Property ' + property + ' has bad value ' + value);
    };

    //make methods not changeable
    Netlicensing.DefineUtil.notChangeable(this, [
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
            if (!Netlicensing.CheckUtils.isValid(this[key])) continue;

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
var Netlicensing = Netlicensing || {};

/**
 * Country entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * @property code - Unique code of country.
 *
 * @property name - Unique name of country
 *
 * @property vatPercent - Country vat.
 *
 * @property isEu - is country in EU.
 */

Netlicensing.Country = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

Netlicensing.Country.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.Country.prototype.constructor = Netlicensing.Country;

Netlicensing.Country.prototype.setCode = function (code) {
    return this.setProperty('code', code);
};

Netlicensing.Country.prototype.getCode = function (def) {
    return this.getProperty('code', def);
};

Netlicensing.Country.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.Country.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.Country.prototype.setVatPercent = function (vat) {
    return this.setProperty('vatPercent', vat);
};

Netlicensing.Country.prototype.getVatPercent = function (def) {
    return this.getProperty('vatPercent', def);
};

Netlicensing.Country.prototype.setIsEu = function (isEu) {
    return this.setProperty('isEu', isEu);
};

Netlicensing.Country.prototype.getIsEu = function (def) {
    return this.getProperty('isEu', def);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.Country.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.Country.prototype, [
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
var Netlicensing = Netlicensing || {};

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

Netlicensing.License = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

Netlicensing.License.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.License.prototype.constructor = Netlicensing.License;

Netlicensing.License.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.License.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.License.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Netlicensing.License.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Netlicensing.License.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.License.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.License.prototype.setHidden = function (hidden) {
    return this.setProperty('hidden', hidden);
};

Netlicensing.License.prototype.getHidden = function (def) {
    return this.getProperty('hidden', def);
};

Netlicensing.License.prototype.setParentfeature = function (parentfeature) {
    return this.setProperty('parentfeature', parentfeature);
};

Netlicensing.License.prototype.getParentfeature = function (def) {
    return this.getProperty('parentfeature', def);
};

Netlicensing.License.prototype.setTimeVolume = function (timeVolume) {
    return this.setProperty('timeVolume', timeVolume);
};

Netlicensing.License.prototype.getTimeVolume = function (def) {
    return this.getProperty('timeVolume', def);
};

Netlicensing.License.prototype.setStartDate = function (startDate) {
    return this.setProperty('startDate', startDate);
};

Netlicensing.License.prototype.getStartDate = function (def) {
    return this.getProperty('startDate', def);
};

Netlicensing.License.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

Netlicensing.License.prototype.getPrice = function (def) {
    return this.getProperty('price', def);
};

Netlicensing.License.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.License.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.License.prototype, [
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
var Netlicensing = Netlicensing || {};

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

Netlicensing.Licensee = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

Netlicensing.Licensee.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.Licensee.prototype.constructor = Netlicensing.Licensee;

Netlicensing.Licensee.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.Licensee.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.Licensee.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Netlicensing.Licensee.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Netlicensing.Licensee.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.Licensee.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.Licensee.prototype.setLicenseeSecret = function (licenseeSecret) {
    return this.setProperty('licenseeSecret', licenseeSecret);
};

Netlicensing.Licensee.prototype.getLicenseeSecret = function (def) {
    return this.getProperty('licenseeSecret', def);
};

Netlicensing.Licensee.prototype.setMarkedForTransfer = function (markedForTransfer) {
    return this.setProperty('markedForTransfer', markedForTransfer);
};

Netlicensing.Licensee.prototype.getMarkedForTransfer = function (def) {
    return this.getProperty('markedForTransfer', def);
};

Netlicensing.Licensee.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.Licensee.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.Licensee.prototype, [
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
var Netlicensing = Netlicensing || {};

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

Netlicensing.LicenseTemplate = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(Netlicensing.LicenseTemplate, 'LICENSE_TYPE_FEATURE', {value: 'FEATURE'});
Object.defineProperty(Netlicensing.LicenseTemplate, 'LICENSE_TYPE_TIMEVOLUME', {value: 'TIMEVOLUME'});
Object.defineProperty(Netlicensing.LicenseTemplate, 'LICENSE_TYPE_FLOATING', {value: 'FLOATING'});
Object.defineProperty(Netlicensing.LicenseTemplate, 'LICENSE_TYPE_QUANTITY', {value: 'QUANTITY'});

Netlicensing.LicenseTemplate.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.LicenseTemplate.prototype.constructor = Netlicensing.LicenseTemplate;

Netlicensing.LicenseTemplate.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.LicenseTemplate.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.LicenseTemplate.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Netlicensing.LicenseTemplate.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Netlicensing.LicenseTemplate.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.LicenseTemplate.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.LicenseTemplate.prototype.setLicenseType = function (licenseType) {
    return this.setProperty('licenseType', licenseType);
};

Netlicensing.LicenseTemplate.prototype.getLicenseType = function (def) {
    return this.getProperty('licenseType', def);
};

Netlicensing.LicenseTemplate.prototype.setPrice = function (price) {
    return this.setProperty('price', price);
};

Netlicensing.LicenseTemplate.prototype.getPrice = function (def) {
    return this.getProperty('price', def);
};

Netlicensing.LicenseTemplate.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Netlicensing.LicenseTemplate.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Netlicensing.LicenseTemplate.prototype.setAutomatic = function (automatic) {
    return this.setProperty('automatic', automatic);
};

Netlicensing.LicenseTemplate.prototype.getAutomatic = function (def) {
    return this.getProperty('automatic', def);
};

Netlicensing.LicenseTemplate.prototype.setHidden = function (hidden) {
    return this.setProperty('hidden', hidden);
};

Netlicensing.LicenseTemplate.prototype.getHidden = function (def) {
    return this.getProperty('hidden', def);
};

Netlicensing.LicenseTemplate.prototype.setHideLicenses = function (hideLicenses) {
    return this.setProperty('hideLicenses', hideLicenses);
};

Netlicensing.LicenseTemplate.prototype.getHideLicenses = function (def) {
    return this.getProperty('hideLicenses', def);
};

Netlicensing.LicenseTemplate.prototype.setTimeVolume = function (timeVolume) {
    return this.setProperty('timeVolume', timeVolume);
};

Netlicensing.LicenseTemplate.prototype.getTimeVolume = function (def) {
    return this.getProperty('timeVolume', def);
};

Netlicensing.LicenseTemplate.prototype.setMaxSessions = function (maxSessions) {
    return this.setProperty('maxSessions', maxSessions);
};

Netlicensing.LicenseTemplate.prototype.getMaxSessions = function (def) {
    return this.getProperty('maxSessions', def);
};

Netlicensing.LicenseTemplate.prototype.setQuantity = function (quantity) {
    return this.setProperty('quantity', quantity);
};

Netlicensing.LicenseTemplate.prototype.getQuantity = function (def) {
    return this.getProperty('quantity', def);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.LicenseTemplate.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.LicenseTemplate.prototype, [
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
var Netlicensing = Netlicensing || {};

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */

Netlicensing.PaymentMethod = function PaymentMethod() {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

Netlicensing.PaymentMethod.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.PaymentMethod.prototype.constructor = Netlicensing.PaymentMethod;

Netlicensing.PaymentMethod.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.PaymentMethod.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.PaymentMethod.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Netlicensing.PaymentMethod.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Netlicensing.PaymentMethod.prototype.setPaypalSubject = function (paypalSubject) {
    return this.setProperty('paypal.subject', paypalSubject);
};

Netlicensing.PaymentMethod.prototype.getPaypalSubject = function (def) {
    return this.getProperty('paypal.subject', def);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.PaymentMethod.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.PaymentMethod.prototype, [
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
            licenseeSecretMode: 'string',
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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(Netlicensing.Product, 'LICENSEE_SECRET_MODE_DISABLED', {value: 'DISABLED'});
Object.defineProperty(Netlicensing.Product, 'LICENSEE_SECRET_MODE_PREDEFINED', {value: 'PREDEFINED '});
Object.defineProperty(Netlicensing.Product, 'LICENSEE_SECRET_MODE_CLIENT', {value: 'CLIENT '});

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

Netlicensing.Product.prototype.setLicenseeSecretMode = function (licenseeSecretMode) {
    return this.setProperty('licenseeSecretMode', licenseeSecretMode);
};

Netlicensing.Product.prototype.getLicenseeSecretMode = function (def) {
    return this.getProperty('licenseeSecretMode', def);
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
Netlicensing.DefineUtil.notChangeable(Netlicensing.Product.prototype, ['constructor', '__setListDiscount']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.Product.prototype, [
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
var Netlicensing = Netlicensing || {};

Netlicensing.ProductDiscount = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

Netlicensing.ProductDiscount.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.ProductDiscount.prototype.constructor = Netlicensing.ProductDiscount;

Netlicensing.ProductDiscount.prototype.setTotalPrice = function (totalPrice) {
    return this.setProperty('totalPrice', totalPrice);
};

Netlicensing.ProductDiscount.prototype.getTotalPrice = function (def) {
    return this.getProperty('totalPrice', def);
};

Netlicensing.ProductDiscount.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Netlicensing.ProductDiscount.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Netlicensing.ProductDiscount.prototype.setAmountFix = function (amountFix) {
    return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
};

Netlicensing.ProductDiscount.prototype.getAmountFix = function (def) {
    return this.getProperty('amountFix', def);
};

Netlicensing.ProductDiscount.prototype.setAmountPercent = function (amountPercent) {
    return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
};

Netlicensing.ProductDiscount.prototype.getAmountPercent = function (def) {
    return this.getProperty('amountPercent', def);
};

Netlicensing.ProductDiscount.prototype.toString = function () {
    var totalPrice = this.getTotalPrice();
    var currency = this.getCurrency();
    var amount = 0;

    if (this.getAmountFix(null)) amount = this.getAmountFix();
    if (this.getAmountPercent(null)) amount = this.getAmountPercent() + '%';

    return totalPrice + ';' + currency + ';' + amount;
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.ProductDiscount.prototype, ['constructor', 'toString']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.ProductDiscount.prototype, [
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
var Netlicensing = Netlicensing || {};

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

Netlicensing.ProductModule = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(Netlicensing.ProductModule, 'LICENSING_MODEL_SUBSCRIPTION', {value: 'Subscription'});
Object.defineProperty(Netlicensing.ProductModule, 'LICENSING_MODEL_TRY_AND_BUY', {value: 'TryAndBuy'});
Object.defineProperty(Netlicensing.ProductModule, 'LICENSING_MODEL_RENTAL', {value: 'Rental'});
Object.defineProperty(Netlicensing.ProductModule, 'LICENSING_MODEL_FLOATING', {value: 'Floating'});
Object.defineProperty(Netlicensing.ProductModule, 'LICENSING_MODEL_MULTI_FEATURE', {value: 'MultiFeature'});
Object.defineProperty(Netlicensing.ProductModule, 'LICENSING_MODEL_PAY_PER_USE', {value: 'PayPerUse'});


Netlicensing.ProductModule.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.ProductModule.prototype.constructor = Netlicensing.ProductModule;

Netlicensing.ProductModule.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.ProductModule.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.ProductModule.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Netlicensing.ProductModule.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Netlicensing.ProductModule.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.ProductModule.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.ProductModule.prototype.setLicensingModel = function (licensingModel) {
    return this.setProperty('licensingModel', licensingModel);
};

Netlicensing.ProductModule.prototype.getLicensingModel = function (def) {
    return this.getProperty('licensingModel', def);
};

Netlicensing.ProductModule.prototype.setMaxCheckoutValidity = function (maxCheckoutValidity) {
    return this.setProperty('maxCheckoutValidity', maxCheckoutValidity);
};

Netlicensing.ProductModule.prototype.getMaxCheckoutValidity = function (def) {
    return this.getProperty('maxCheckoutValidity', def);
};

Netlicensing.ProductModule.prototype.setYellowThreshold = function (yellowThreshold) {
    return this.setProperty('yellowThreshold', yellowThreshold);
};

Netlicensing.ProductModule.prototype.getYellowThreshold = function (def) {
    return this.getProperty('yellowThreshold', def);
};

Netlicensing.ProductModule.prototype.setRedThreshold = function (redThreshold) {
    return this.setProperty('redThreshold', redThreshold);
};

Netlicensing.ProductModule.prototype.getRedThreshold = function (def) {
    return this.getProperty('redThreshold', def);
};

Netlicensing.ProductModule.prototype.setLicenseTemplate = function (licenseTemplate) {
    return this.setProperty('licenseTemplate', licenseTemplate);
};

Netlicensing.ProductModule.prototype.getLicenseTemplate = function (def) {
    return this.getProperty('licenseTemplate', def);
};

Netlicensing.ProductModule.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.ProductModule.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.ProductModule.prototype, [
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
var Netlicensing = Netlicensing || {};

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

Netlicensing.Token = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(Netlicensing.Token, 'TOKEN_TYPE_DEFAULT', {value: 'DEFAULT'});
Object.defineProperty(Netlicensing.Token, 'TOKEN_TYPE_SHOP', {value: 'SHOP'});
Object.defineProperty(Netlicensing.Token, 'TOKEN_TYPE_APIKEY', {value: 'APIKEY'});

Netlicensing.Token.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.Token.prototype.constructor = Netlicensing.Token;

Netlicensing.Token.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.Token.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Netlicensing.Token.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Netlicensing.Token.prototype.setExpirationTime = function (expirationTime) {
    return this.setProperty('expirationTime', expirationTime);
};

Netlicensing.Token.prototype.getExpirationTime = function (def) {
    return this.getProperty('expirationTime', def);
};

Netlicensing.Token.prototype.setVendorNumber = function (vendorNumber) {
    return this.setProperty('vendorNumber', vendorNumber);
};

Netlicensing.Token.prototype.getVendorNumber = function (def) {
    return this.getProperty('vendorNumber', def);
};

Netlicensing.Token.prototype.setTokenType = function (tokenType) {
    return this.setProperty('tokenType', tokenType);
};

Netlicensing.Token.prototype.getTokenType = function (def) {
    return this.getProperty('tokenType', def);
};

Netlicensing.Token.prototype.setLicenseeNumber = function (licenseeNumber) {
    return this.setProperty('licenseeNumber', licenseeNumber);
};

Netlicensing.Token.prototype.getLicenseeNumber = function (def) {
    return this.getProperty('licenseeNumber', def);
};

Netlicensing.Token.prototype.setSuccessURL = function (successURL) {
    return this.setProperty('successURL', successURL);
};

Netlicensing.Token.prototype.getSuccessURL = function (def) {
    return this.getProperty('successURL', def);
};

Netlicensing.Token.prototype.setSuccessURLTitle = function (successURLTitle) {
    return this.setProperty('successURLTitle', successURLTitle);
};

Netlicensing.Token.prototype.getSuccessURLTitle = function (def) {
    return this.getProperty('successURLTitle', def);
};

Netlicensing.Token.prototype.setCancelURL = function (cancelURL) {
    return this.setProperty('cancelURL', cancelURL);
};

Netlicensing.Token.prototype.getCancelURL = function (def) {
    return this.getProperty('cancelURL', def);
};

Netlicensing.Token.prototype.setCancelURLTitle = function (cancelURLTitle) {
    return this.setProperty('cancelURLTitle', cancelURLTitle);
};

Netlicensing.Token.prototype.getCancelURLTitle = function (def) {
    return this.getProperty('cancelURLTitle', def);
};

Netlicensing.Token.prototype.getShopURL = function (def) {
    return this.getProperty('shopURL', def);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.Token.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.Token.prototype, [
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
var Netlicensing = Netlicensing || {};

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

Netlicensing.Transaction = function Transaction() {
    Netlicensing.BaseEntity.apply(this, arguments);

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
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

//static constants
Object.defineProperty(Netlicensing.Transaction, 'STATUS_CANCELLED', {value: 'CANCELLED'});
Object.defineProperty(Netlicensing.Transaction, 'STATUS_CLOSED', {value: 'CLOSED'});
Object.defineProperty(Netlicensing.Transaction, 'STATUS_PENDING', {value: 'PENDING'});

Netlicensing.Transaction.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.Transaction.prototype.constructor = Netlicensing.Transaction;

Netlicensing.Transaction.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.Transaction.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.Transaction.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.Transaction.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.Transaction.prototype.setStatus = function (status) {
    return this.setProperty('status', status);
};

Netlicensing.Transaction.prototype.getStatus = function (def) {
    return this.getProperty('status', def);
};

Netlicensing.Transaction.prototype.setSource = function (source) {
    return this.setProperty('source', source);
};

Netlicensing.Transaction.prototype.getSource = function (def) {
    return this.getProperty('source', def);
};

Netlicensing.Transaction.prototype.setGrandTotal = function (grandTotal) {
    return this.setProperty('grandTotal', grandTotal);
};

Netlicensing.Transaction.prototype.getGrandTotal = function (def) {
    return this.getProperty('grandTotal', def);
};

Netlicensing.Transaction.prototype.setDiscount = function (discount) {
    return this.setProperty('discount', discount);
};

Netlicensing.Transaction.prototype.getDiscount = function (def) {
    return this.getProperty('discount', def);
};

Netlicensing.Transaction.prototype.setCurrency = function (currency) {
    return this.setProperty('currency', currency);
};

Netlicensing.Transaction.prototype.getCurrency = function (def) {
    return this.getProperty('currency', def);
};

Netlicensing.Transaction.prototype.setDateCreated = function (dateCreated) {
    return this.setProperty('dateCreated', dateCreated);
};

Netlicensing.Transaction.prototype.getDateCreated = function (def) {
    return this.getProperty('dateCreated', def);
};

Netlicensing.Transaction.prototype.setDateClosed = function (dateClosed) {
    return this.setProperty('dateClosed', dateClosed);
};

Netlicensing.Transaction.prototype.getDateClosed = function (def) {
    return this.getProperty('dateClosed', def);
};

Netlicensing.Transaction.prototype.setPaymentMethod = function (paymentMethod) {
    return this.setProperty('paymentMethod', paymentMethod);
};

Netlicensing.Transaction.prototype.getPaymentMethod = function (def) {
    return this.getProperty('paymentMethod', def);
};

Netlicensing.Transaction.prototype.setActive = function () {
    return this.setProperty('active', true);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.Transaction.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.Transaction.prototype, [
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
var Netlicensing = Netlicensing || {};

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

Netlicensing.Context = function (values) {

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
        securityMode: Netlicensing.Context.BASIC_AUTHENTICATION
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
        if (!Netlicensing.CheckUtils.isValid(key) || typeof key === 'object')  throw new Error('Bad value key:' + key);
        if (!Netlicensing.CheckUtils.isValid(value)) throw new Error('Value ' + key + ' has wrong value' + value);
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
Object.defineProperty(Netlicensing.Context, 'BASIC_AUTHENTICATION', {value: 'BASIC_AUTH'});
Object.defineProperty(Netlicensing.Context, 'APIKEY_IDENTIFICATION', {value: 'APIKEY'});

Netlicensing.Context.prototype.setBaseUrl = function (baseUrl) {
    return this.setValue('baseUrl', baseUrl);
};

Netlicensing.Context.prototype.getBaseUrl = function (def) {
    return this.getValue('baseUrl', def);
};

Netlicensing.Context.prototype.setUsername = function (username) {
    return this.setValue('username', username);
};

Netlicensing.Context.prototype.getUsername = function (def) {
    return this.getValue('username', def);
};

Netlicensing.Context.prototype.setPassword = function (password) {
    return this.setValue('password', password);
};

Netlicensing.Context.prototype.getPassword = function (def) {
    return this.getValue('password', def);
};

Netlicensing.Context.prototype.setApiKey = function (apiKey) {
    return this.setValue('apiKey', apiKey);
};

Netlicensing.Context.prototype.getApiKey = function (def) {
    return this.getValue('apiKey', def);
};

Netlicensing.Context.prototype.setSecurityMode = function (securityMode) {
    return this.setValue('securityMode', securityMode);
};

Netlicensing.Context.prototype.getSecurityMode = function (def) {
    return this.getValue('securityMode', def);
};

Netlicensing.Context.prototype.setVendorNumber = function (vendorNumber) {
    return this.setValue('vendorNumber', vendorNumber);
};

Netlicensing.Context.prototype.getVendorNumber = function (def) {
    return this.getValue('vendorNumber', def);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

Netlicensing.HttpRequest = function () {

};

Netlicensing.HttpRequest.prototype.__serialize = function (data, prefix) {
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

Netlicensing.HttpRequest.prototype.__parseQuery = function (url) {
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

Netlicensing.HttpRequest.prototype.__parseHeadersStr = function (headers) {
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

Netlicensing.HttpRequest.prototype.send = function (config) {
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

Netlicensing.HttpRequest.prototype.get = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'GET'}));
};

Netlicensing.HttpRequest.prototype.post = function (url, data, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'POST', data: data}));
};

Netlicensing.HttpRequest.prototype.patch = function (url, data, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'PATCH', data: data}));
};

Netlicensing.HttpRequest.prototype.head = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'HEAD'}));
};

Netlicensing.HttpRequest.prototype.jsonp = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'JSONP'}));
};

Netlicensing.HttpRequest.prototype.put = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'PUT'}));
};

Netlicensing.HttpRequest.prototype.delete = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'DELETE'}));
};

Netlicensing.HttpRequest.get = function (url, config) {
    return new Netlicensing.HttpRequest().get(url, config);
};

Netlicensing.HttpRequest.post = function (url, data, config) {
    return new Netlicensing.HttpRequest().post(url, data, config);
};

Netlicensing.HttpRequest.patch = function (url, data, config) {
    return new Netlicensing.HttpRequest().patch(url, data, config);
};

Netlicensing.HttpRequest.head = function (url, data, config) {
    return new Netlicensing.HttpRequest().head(url, data, config);
};

Netlicensing.HttpRequest.jsonp = function (url, data, config) {
    return new Netlicensing.HttpRequest().jsonp(url, data, config);
};

Netlicensing.HttpRequest.put = function (url, data, config) {
    return new Netlicensing.HttpRequest().put(url, data, config);
};

Netlicensing.HttpRequest.delete = function (url, data, config) {
    return new Netlicensing.HttpRequest().delete(url, data, config);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

Netlicensing.ValidationParameters = function () {
    var __productNumber;
    var __licenseeName;
    var __licenseeSecret;
    var __parameters = {};

    /**
     * Sets the target product
     *
     * optional productNumber, must be provided in case licensee auto-create is enabled
     * @param productNumber
     * @returns {Netlicensing.ValidationParameters}
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
     * @returns {Netlicensing.ValidationParameters}
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
     * @returns {Netlicensing.ValidationParameters}
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
var Netlicensing = Netlicensing || {};


Netlicensing.ValidationResults = function () {

    var __validators = {};
    var __ttl;

    this.getValidators = function () {
        return Object.assign({}, __validators);
    };

    this.setProductModuleValidation = function (productModuleNumber, productModuleValidation) {
        if (!Netlicensing.CheckUtils.isValid(productModuleNumber) || typeof productModuleNumber === 'object')  throw new TypeError('Bad productModuleNumber:' + productModuleNumber);

        __validators[productModuleNumber] = productModuleValidation;

        return this;
    };

    this.getProductModuleValidation = function (productModuleNumber) {
        if (!Netlicensing.CheckUtils.isValid(productModuleNumber) || typeof productModuleNumber === 'object')  throw new TypeError('Bad productModuleNumber:' + productModuleNumber);

        return __validators[productModuleNumber];
    };

    this.setTtl = function (ttl) {
        if (!Netlicensing.CheckUtils.isValid(ttl) || typeof ttl === 'object')  throw new TypeError('Bad ttl:' + ttl);
        __ttl = new Date(String(ttl));
        return this;
    };

    this.getTtl = function () {
        return (__ttl) ? new Date(__ttl) : undefined;
    };
};

Netlicensing.ValidationResults.prototype.toString = function () {
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
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services
 *
 * @constructor
 */

Netlicensing.LicenseeService = function () {

};

//static constants
Object.defineProperties(Netlicensing.LicenseeService, {
    'ENDPOINT_PATH': {value: 'licensee'},
    'ENDPOINT_PATH_VALIDATE': {value: 'validate'},
    'ENDPOINT_PATH_TRANSFER': {value: 'transfer'},
});

/**
 * Creates new licensee object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Createlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * parent product to which the new licensee is to be added
 * @param productNumber string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param licensee Netlicensing.Licensee
 *
 * return the newly created licensee object in promise
 * @returns {Promise}
 */
Netlicensing.LicenseeService.create = function (context, productNumber, licensee) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(licensee instanceof Netlicensing.Licensee)) throw new TypeError('licensee must be an instance of Netlicensing.Licensee');

    Netlicensing.CheckUtils.paramNotEmpty(productNumber, 'productNumber');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    licensee.setProperty('productNumber', productNumber);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseeService.ENDPOINT_PATH, licensee.asPropertiesMap(), Netlicensing.Licensee);
};

/**
 * Gets licensee by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Getlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the licensee number
 * @param number string
 *
 * return the licensee in promise
 * @returns {Promise}
 */
Netlicensing.LicenseeService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.LicenseeService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.Licensee);
};

/**
 * Returns all licensees of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Licenseeslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of licensees (of all products) or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.LicenseeService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.LicenseeService.ENDPOINT_PATH, queryParams, Netlicensing.Licensee);
};

/**
 * Updates licensee properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Updatelicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * licensee number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param licensee Netlicensing.Licensee
 *
 * return updated licensee in promise.
 * @returns {Promise}
 */
Netlicensing.LicenseeService.update = function (context, number, licensee) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(licensee instanceof Netlicensing.Licensee)) throw new TypeError('licensee must be an instance of Netlicensing.Licensee');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseeService.ENDPOINT_PATH + '/' + number, licensee.asPropertiesMap(), Netlicensing.Licensee);
};

/**
 * Deletes licensee.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Deletelicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
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
Netlicensing.LicenseeService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Netlicensing.Service
        .getInstance()
        .delete(context, Netlicensing.LicenseeService.ENDPOINT_PATH + '/' + number, queryParams);
};

/**
 * Validates active licenses of the licensee. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Validatelicensee
 *
 * @param context Netlicensing.Context
 *
 * licensee number
 * @param number string
 *
 * optional validation parameters. See ValidationParameters and licensing model documentation for
 * details.
 * @param validationParameters Netlicensing.ValidationParameters.
 *
 * @returns {Promise}
 */
Netlicensing.LicenseeService.validate = function (context, number, validationParameters) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(validationParameters instanceof Netlicensing.ValidationParameters)) throw new TypeError('validationParameters must be an instance of Netlicensing.ValidationParameters');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

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

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseeService.ENDPOINT_PATH + '/' + number + '/' + Netlicensing.LicenseeService.ENDPOINT_PATH_VALIDATE, queryParams)
        .then(function (item) {
            var data = {};
            var validationResults = new Netlicensing.ValidationResults();

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
                .setTtl(Netlicensing.Service.getInstance().getLastHttpRequestInfo().response.ttl);

            return validationResults;
        });
};

/**
 * Transfer licenses between licensees.
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Licensee+Services#LicenseeServices-Transferlicensee
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the number of the licensee receiving licenses
 * @param number string
 *
 * the number of the licensee delivering licenses
 * @param sourceLicenseeNumber string
 *
 * @returns {Promise}
 */
Netlicensing.LicenseeService.transfer = function (context, number, sourceLicenseeNumber) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');
    Netlicensing.CheckUtils.paramNotEmpty(sourceLicenseeNumber, 'sourceLicenseeNumber');

    var queryParams = {sourceLicenseeNumber: sourceLicenseeNumber};

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseeService.ENDPOINT_PATH + '/' + number + '/' + Netlicensing.LicenseeService.ENDPOINT_PATH_TRANSFER, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Services
 *
 * @constructor
 */
Netlicensing.LicenseService = function () {
};

//static constants
Object.defineProperty(Netlicensing.LicenseService, 'ENDPOINT_PATH', {value: 'license'});

/**
 * Creates new license object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Services#LicenseServices-Createlicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
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
 * @param license Netlicensing.License
 *
 * return the newly created license object in promise
 * @returns {Promise}
 */
Netlicensing.LicenseService.create = function (context, licenseeNumber, licenseTemplateNumber, transactionNumber, license) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(license instanceof Netlicensing.License)) throw new TypeError('license must be an instance of Netlicensing.License');

    Netlicensing.CheckUtils.paramNotEmpty(licenseeNumber, 'licenseeNumber');
    Netlicensing.CheckUtils.paramNotEmpty(licenseTemplateNumber, 'licenseTemplateNumber');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    license.setProperty('licenseeNumber', licenseeNumber);
    license.setProperty('licenseTemplateNumber', licenseTemplateNumber);

    if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseService.ENDPOINT_PATH, license.asPropertiesMap(), Netlicensing.License);
};

/**
 * Gets license by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Services#LicenseServices-Getlicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the license number
 * @param number string
 *
 * return the license in promise
 * @returns {Promise}
 */
Netlicensing.LicenseService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.LicenseService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.License)
};

/**
 * Returns licenses of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Services#LicenseServices-Licenseslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * return array of licenses (of all products) or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.LicenseService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.LicenseService.ENDPOINT_PATH, queryParams, Netlicensing.License);
};

/**
 * Updates license properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Services#LicenseServices-Updatelicense
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * license number
 * @param number string
 *
 * transaction for the license update. Created implicitly if transactionNumber is null. In this case the
 * operation will be in a separate transaction.
 * @param transactionNumber string|null
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param license Netlicensing.License
 *
 * return updated license in promise.
 * @returns {Promise}
 */
Netlicensing.LicenseService.update = function (context, number, transactionNumber, license) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(license instanceof Netlicensing.License)) throw new TypeError('license must be an instance of Netlicensing.License');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseService.ENDPOINT_PATH + '/' + number, license.asPropertiesMap(), Netlicensing.License);
};

/**
 * Deletes license.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Services#LicenseServices-Deletelicense
 *
 * When any license is deleted, corresponding transaction is created automatically.
 *
 *  determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
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
Netlicensing.LicenseService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Netlicensing.Service
        .getInstance()
        .delete(context, Netlicensing.LicenseService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services
 *
 * @constructor
 */
Netlicensing.LicenseTemplateService = function () {
};

//static constants
Object.defineProperty(Netlicensing.LicenseTemplateService, 'ENDPOINT_PATH', {value: 'licensetemplate'});

/**
 * Creates new license template object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services#LicenseTemplateServices-Createlicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * parent product module to which the new license template is to be added
 * @param productModuleNumber
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param licenseTemplate Netlicensing.LicenseTemplate
 *
 * the newly created license template object in promise
 * @returns {Promise}
 */
Netlicensing.LicenseTemplateService.create = function (context, productModuleNumber, licenseTemplate) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(licenseTemplate instanceof Netlicensing.LicenseTemplate)) throw new TypeError('licenseTemplate must be an instance of Netlicensing.LicenseTemplate');

    Netlicensing.CheckUtils.paramNotEmpty(productModuleNumber, 'productModuleNumber');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    licenseTemplate.setProperty('productModuleNumber', productModuleNumber);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseTemplateService.ENDPOINT_PATH, licenseTemplate.asPropertiesMap(), Netlicensing.LicenseTemplate);
};

/**
 * Gets license template by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services#LicenseTemplateServices-Getlicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the license template number
 * @param number string
 *
 * return the license template object in promise
 * @returns {Promise}
 */
Netlicensing.LicenseTemplateService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.LicenseTemplate);
};

/**
 * Returns all license templates of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services#LicenseTemplateServices-Licensetemplateslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of license templates (of all products/modules) or null/empty list if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.LicenseTemplateService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.LicenseTemplateService.ENDPOINT_PATH, queryParams, Netlicensing.LicenseTemplate);
};

/**
 * Updates license template properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services#LicenseTemplateServices-Updatelicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * license template number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param licenseTemplate Netlicensing.LicenseTemplate
 *
 * updated license template in promise.
 * @returns {Promise}
 */
Netlicensing.LicenseTemplateService.update = function (context, number, licenseTemplate) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(licenseTemplate instanceof Netlicensing.LicenseTemplate)) throw new TypeError('licenseTemplate must be an instance of Netlicensing.LicenseTemplate');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, licenseTemplate.asPropertiesMap(), Netlicensing.LicenseTemplate);
};

/**
 * Deletes license template.See NetLicensingAPI JavaDoc for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/License+Template+Services#LicenseTemplateServices-Deletelicensetemplate
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
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
Netlicensing.LicenseTemplateService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Netlicensing.Service
        .getInstance()
        .delete(context, Netlicensing.LicenseTemplateService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

Netlicensing.PaymentMethodService = function () {
};

//static constants
Object.defineProperty(Netlicensing.PaymentMethodService, 'ENDPOINT_PATH', {value: 'paymentmethod'});

/**
 * Gets payment method by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Payment+Method+Services#PaymentMethodServices-Getpaymentmethod
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the payment method number
 * @param number string
 *
 * return the payment method in promise
 * @returns {Promise}
 */
Netlicensing.PaymentMethodService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.PaymentMethodService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.PaymentMethod);
};


/**
 * Returns payment methods of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Payment+Method+Services#PaymentMethodServices-Paymentmethodslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of payment method entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.PaymentMethodService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.PaymentMethodService.ENDPOINT_PATH, queryParams, Netlicensing.PaymentMethod);
};

/**
 * Updates payment method properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Payment+Method+Services#PaymentMethodServices-Updatepaymentmethod
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the payment method number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param paymentMethod Netlicensing.PaymentMethod
 *
 * return updated payment method in promise.
 * @returns {Promise}
 */
Netlicensing.PaymentMethodService.update = function (context, number, paymentMethod) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(paymentMethod instanceof Netlicensing.PaymentMethod)) throw new TypeError('paymentMethod must be an instance of Netlicensing.PaymentMethod');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.PaymentMethodService.ENDPOINT_PATH + '/' + number, paymentMethod.asPropertiesMap(), Netlicensing.PaymentMethod);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Module+Services
 *
 * @constructor
 */

Netlicensing.ProductModuleService = function () {

};

//static constants
Object.defineProperty(Netlicensing.ProductModuleService, 'ENDPOINT_PATH', {value: 'productmodule'});

/**
 * Creates new product module object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Module+Services#ProductModuleServices-Createproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * parent product to which the new product module is to be added
 * @param productNumber string
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param productModule Netlicensing.ProductModule
 *
 * the newly created product module object in promise
 * @returns {Promise}
 */
Netlicensing.ProductModuleService.create = function (context, productNumber, productModule) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(productModule instanceof Netlicensing.ProductModule)) throw new TypeError('product must be an instance of Netlicensing.ProductModule');

    Netlicensing.CheckUtils.paramNotEmpty(productNumber, 'productNumber');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    productModule.setProperty('productNumber', productNumber);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.ProductModuleService.ENDPOINT_PATH, productModule.asPropertiesMap(), Netlicensing.ProductModule);
};

/**
 * Gets product module by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Module+Services#ProductModuleServices-Getproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the product module number
 * @param number string
 *
 * return the product module object in promise
 * @returns {Promise}
 */
Netlicensing.ProductModuleService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.ProductModuleService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.ProductModule);
};

/**
 * Returns products of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Productslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of product modules entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.ProductModuleService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.ProductModuleService.ENDPOINT_PATH, queryParams, Netlicensing.ProductModule);
};

/**
 * Updates product module properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Module+Services#ProductModuleServices-Updateproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * product module number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param productModule Netlicensing.ProductModule
 *
 * updated product module in promise.
 * @returns {Promise}
 */
Netlicensing.ProductModuleService.update = function (context, number, productModule) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(productModule instanceof Netlicensing.ProductModule)) throw new TypeError('product must be an instance of Netlicensing.ProductModule');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.ProductModuleService.ENDPOINT_PATH + '/' + number, productModule.asPropertiesMap(), Netlicensing.ProductModule);
};

/**
 * Deletes product module.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Module+Services#ProductModuleServices-Deleteproductmodule
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
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
Netlicensing.ProductModuleService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Netlicensing.Service
        .getInstance()
        .delete(context, Netlicensing.ProductModuleService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services
 *
 * @constructor
 */

Netlicensing.ProductService = function () {
};

//static constants
Object.defineProperty(Netlicensing.ProductService, 'ENDPOINT_PATH', {value: 'product'});

/**
 * Creates new product with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Createproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param product Netlicensing.Product
 *
 * return the newly created product object in promise
 * @returns {Promise}
 */

Netlicensing.ProductService.create = function (context, product) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(product instanceof Netlicensing.Product)) throw new TypeError('product must be an instance of Netlicensing.Product');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.ProductService.ENDPOINT_PATH, product.asPropertiesMap(), Netlicensing.Product);
};

/**
 * Gets product by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Getproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the product number
 * @param number string
 *
 * return the product object in promise
 * @returns {Promise}
 */
Netlicensing.ProductService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.ProductService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.Product);
};

/**
 * Returns products of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Productslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of product entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.ProductService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.ProductService.ENDPOINT_PATH, queryParams, Netlicensing.Product);
};

/**
 * Updates product properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Updateproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * product number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param product Netlicensing.Product
 *
 * updated product in promise.
 * @returns {Promise}
 */
Netlicensing.ProductService.update = function (context, number, product) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(product instanceof Netlicensing.Product)) throw new TypeError('product must be an instance of Netlicensing.Product');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.ProductService.ENDPOINT_PATH + '/' + number, product.asPropertiesMap(), Netlicensing.Product);
};

/**
 * Deletes product.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Product+Services#ProductServices-Deleteproduct
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
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
Netlicensing.ProductService.delete = function (context, number, forceCascade) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    var queryParams = {forceCascade: Boolean(forceCascade)};

    return Netlicensing.Service
        .getInstance()
        .delete(context, Netlicensing.ProductService.ENDPOINT_PATH + '/' + number, queryParams);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

Netlicensing.Service = (function () {
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

            if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

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
                case Netlicensing.Context.BASIC_AUTHENTICATION:
                    if (!context.getUsername()) throw new Error('Missing parameter "username"');
                    if (!context.getPassword()) throw new Error('Missing parameter "password"');

                    headers['Authorization'] = 'Basic ' + btoa(context.getUsername() + ':' + context.getPassword());
                    break;
                case Netlicensing.Context.APIKEY_IDENTIFICATION:
                    if (!context.getApiKey()) throw new Error('Missing parameter "apiKey"');

                    headers['Authorization'] = 'Basic ' + btoa('apiKey:' + context.getApiKey());
                    break;
                default:
                    throw new Error('Unknown security mode');
                    break;
            }

            return new Netlicensing.HttpRequest().send({
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

            if (!(entity instanceof Netlicensing.BaseEntity)) {
                throw new Error('Invalid entity ' + resultType + ', entity must be instanceof Netlicensing.BaseEntity');
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
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Token+Services
 *
 * @constructor
 */
Netlicensing.TokenService = function () {
};

//static constants
Object.defineProperty(Netlicensing.TokenService, 'ENDPOINT_PATH', {value: 'token'});

/**
 * Creates new token.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Token+Services#TokenServices-Createtoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param token Netlicensing.Token
 *
 * return created token in promise
 * @returns {Promise}
 */
Netlicensing.TokenService.create = function (context, token) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(token instanceof Netlicensing.Token)) throw new TypeError('token must be an instance of Netlicensing.Token');

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.TokenService.ENDPOINT_PATH, token.asPropertiesMap(), Netlicensing.Token);
};

/**
 * Gets token by its number..See NetLicensingAPI for details:
 * https://www.labs64.de/conluence/display/NetlicensingPUB/Token+Services#TokenServices-Gettoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the token number
 * @param number
 *
 * return the token in promise
 * @returns {Promise}
 */
Netlicensing.TokenService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.TokenService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.Token);
};

/**
 * Returns tokens of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Token+Services#TokenServices-Tokenslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string|null
 *
 * array of token entities or empty array if nothing found.
 * @return array
 */
Netlicensing.TokenService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.TokenService.ENDPOINT_PATH, queryParams, Netlicensing.Token);
};

/**
 * Delete token by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Token+Services#TokenServices-Deletetoken
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 *  the token number
 * @param number string
 *
 * return boolean state of delete in promise
 * @returns {Promise}
 */
Netlicensing.TokenService.delete = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    return Netlicensing.Service
        .getInstance()
        .delete(context, Netlicensing.TokenService.ENDPOINT_PATH + '/' + number);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Transaction+Services
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

Netlicensing.TransactionService = function () {
};

//static constants
Object.defineProperty(Netlicensing.TransactionService, 'ENDPOINT_PATH', {value: 'transaction'});

/**
 * Creates new transaction object with given properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Transaction+Services#TransactionServices-Createtransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * non-null properties will be taken for the new object, null properties will either stay null, or will
 * be set to a default value, depending on property.
 * @param transaction Netlicensing.Transaction
 *
 * return the newly created transaction object in promise
 * @returns {Promise}
 */
Netlicensing.TransactionService.create = function (context, transaction) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(transaction instanceof Netlicensing.Transaction)) throw new TypeError('transaction must be an instance of Netlicensing.Transaction');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.TransactionService.ENDPOINT_PATH, transaction.asPropertiesMap(), Netlicensing.Transaction);
};

/**
 * Gets transaction by its number.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Transaction+Services#TransactionServices-Gettransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * the transaction number
 * @param number string
 *
 * return the transaction in promise
 * @returns {Promise}
 */
Netlicensing.TransactionService.get = function (context, number) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .get(context, Netlicensing.TransactionService.ENDPOINT_PATH + '/' + number, {}, Netlicensing.Transaction);
};

/**
 * Returns all transactions of a vendor.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Transaction+Services#TransactionServices-Transactionslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * reserved for the future use, must be omitted / set to NULL
 * @param filter string
 *
 * array of transaction entities or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.TransactionService.list = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.TransactionService.ENDPOINT_PATH, queryParams, Netlicensing.Transaction);
};

/**
 * Updates transaction properties.See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Transaction+Services#TransactionServices-Updatetransaction
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * transaction number
 * @param number string
 *
 * non-null properties will be updated to the provided values, null properties will stay unchanged.
 * @param transaction Netlicensing.Transaction
 *
 * return updated transaction in promise.
 * @returns {Promise}
 */
Netlicensing.TransactionService.update = function (context, number, transaction) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');
    if (!(transaction instanceof Netlicensing.Transaction)) throw new TypeError('transaction must be an instance of Netlicensing.Transaction');

    Netlicensing.CheckUtils.paramNotEmpty(number, 'number');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .post(context, Netlicensing.TransactionService.ENDPOINT_PATH + '/' + number, transaction.asPropertiesMap(), Netlicensing.Transaction);
};
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Utility+Services
 * @constructor
 */
Netlicensing.UtilityService = function () {
};

//static constants
Object.defineProperty(Netlicensing.UtilityService, 'ENDPOINT_PATH', {value: 'utility'});

/**
 * Returns all license types. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Utility+Services#UtilityServices-LicenseTypeslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * array of available license types or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.UtilityService.listLicenseTypes = function (context) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.UtilityService.ENDPOINT_PATH + '/licenseTypes')
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
 * https://www.labs64.de/confluence/display/NetlicensingPUB/Utility+Services#UtilityServices-LicensingModelslist
 *
 * determines the vendor on whose behalf the call is performed
 * @param context Netlicensing.Context
 *
 * array of available license models or empty array if nothing found in promise.
 * @returns {Promise}
 */
Netlicensing.UtilityService.listLicensingModels = function (context) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.UtilityService.ENDPOINT_PATH + '/licensingModels')
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
Netlicensing.UtilityService.listCountries = function (context, filter) {
    if (!(context instanceof Netlicensing.Context)) throw new TypeError('context must be an instance of Netlicensing.Context');

    context.setSecurityMode(Netlicensing.Context.BASIC_AUTHENTICATION);

    var queryParams = {};

    if (filter) {
        if (!Netlicensing.CheckUtils.isValid(filter)) throw new TypeError('filter has bad value ' + filter);
        queryParams.filter = filter;
    }

    return Netlicensing.Service
        .getInstance()
        .list(context, Netlicensing.UtilityService.ENDPOINT_PATH + '/countries', queryParams, Netlicensing.Country);
};