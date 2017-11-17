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

/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.Token.Type.DEFAULT instead.
 */
Object.defineProperty(NetLicensing.Token, 'TOKEN_TYPE_DEFAULT', {value: 'DEFAULT'});
/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.Token.Type.SHOP instead.
 */
Object.defineProperty(NetLicensing.Token, 'TOKEN_TYPE_SHOP', {value: 'SHOP'});
/**
 * @deprecated No longer used by internal code and not recommended, will be removed in future versions.
 * Use NetLicensing.Constants.Token.Type.APIKEY instead.
 */
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