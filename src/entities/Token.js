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
    this.__defines(['number', 'active', 'expirationTime', 'vendorNumber', 'tokenType', 'licenseeNumber', 'successURL', 'successURLTitle', 'cancelURL', 'cancelURLTitle']);
    this.__define('shopURL', true);

    //make methods not changeable
    this.__notChangeable('asPropertiesMap');
};

Nlic.Token.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.Token.prototype.constructor = Nlic.Token;

Nlic.Token.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

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