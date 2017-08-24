/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

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

function Token() {
    BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            active: 'boolean'
        }
    });

    //define default entity properties
    this.__defines(['number', 'active', 'expirationTime', 'vendorNumber', 'tokenType', 'licenseeNumber', 'successURL', 'successURLTitle', 'cancelURL', 'cancelURLTitle']);
    this.__define('shopURL', true);
}

Token.prototype = Object.create(BaseEntity.prototype);
Token.prototype.constructor = Token;

Token.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Token.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Token.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Token.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Token.prototype.setExpirationTime = function (expirationTime) {
    return this.setProperty('expirationTime', expirationTime);
};

Token.prototype.getExpirationTime = function (def) {
    return this.getProperty('expirationTime', def);
};

Token.prototype.setVendorNumber = function (vendorNumber) {
    return this.setProperty('vendorNumber', vendorNumber);
};

Token.prototype.getVendorNumber = function (def) {
    return this.getProperty('vendorNumber', def);
};

Token.prototype.setTokenType = function (tokenType) {
    return this.setProperty('tokenType', tokenType);
};

Token.prototype.getTokenType = function (def) {
    return this.getProperty('tokenType', def);
};

Token.prototype.setLicenseeNumber = function (licenseeNumber) {
    return this.setProperty('licenseeNumber', licenseeNumber);
};

Token.prototype.getLicenseeNumber = function (def) {
    return this.getProperty('licenseeNumber', def);
};

Token.prototype.setSuccessURL = function (successURL) {
    return this.setProperty('successURL', successURL);
};

Token.prototype.getSuccessURL = function (def) {
    return this.getProperty('successURL', def);
};

Token.prototype.setSuccessURLTitle = function (successURLTitle) {
    return this.setProperty('successURLTitle', successURLTitle);
};

Token.prototype.getSuccessURLTitle = function (def) {
    return this.getProperty('successURLTitle', def);
};

Token.prototype.setCancelURL = function (cancelURL) {
    return this.setProperty('cancelURL', cancelURL);
};

Token.prototype.getCancelURL = function (def) {
    return this.getProperty('cancelURL', def);
};

Token.prototype.setCancelURLTitle = function (cancelURLTitle) {
    return this.setProperty('cancelURLTitle', cancelURLTitle);
};

Token.prototype.getCancelURLTitle = function (def) {
    return this.getProperty('cancelURLTitle', def);
};

Token.prototype.getShopURL = function (def) {
    return this.getProperty('shopURL', def);
};