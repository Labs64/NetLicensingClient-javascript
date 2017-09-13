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
    this.__notChangeable('asPropertiesMap');
};

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