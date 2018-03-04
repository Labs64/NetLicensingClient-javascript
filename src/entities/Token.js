/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import BaseEntity from './BaseEntity';

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
export default class Token extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
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
                shopURL: 'string',
            },
            // The attributes that should have read-only access.
            readOnly: ['number', 'shopURL'],
        });

        // define default entity properties
        this.defines([
            'number',
            'active',
            'expirationTime',
            'vendorNumber',
            'tokenType',
            'licenseeNumber',
            'successURL',
            'successURLTitle',
            'cancelURL',
            'cancelURLTitle',
            'shopURL',
        ]);
    }

    getNumber(def) {
        return this.getProperty('number', def);
    }

    setActive(active) {
        return this.setProperty('active', active);
    }

    getActive(def) {
        return this.getProperty('active', def);
    }

    setExpirationTime(expirationTime) {
        return this.setProperty('expirationTime', expirationTime);
    }

    getExpirationTime(def) {
        return this.getProperty('expirationTime', def);
    }

    setVendorNumber(vendorNumber) {
        return this.setProperty('vendorNumber', vendorNumber);
    }

    getVendorNumber(def) {
        return this.getProperty('vendorNumber', def);
    }

    setTokenType(tokenType) {
        return this.setProperty('tokenType', tokenType);
    }

    getTokenType(def) {
        return this.getProperty('tokenType', def);
    }

    setLicenseeNumber(licenseeNumber) {
        return this.setProperty('licenseeNumber', licenseeNumber);
    }

    getLicenseeNumber(def) {
        return this.getProperty('licenseeNumber', def);
    }

    setSuccessURL(successURL) {
        return this.setProperty('successURL', successURL);
    }

    getSuccessURL(def) {
        return this.getProperty('successURL', def);
    }

    setSuccessURLTitle(successURLTitle) {
        return this.setProperty('successURLTitle', successURLTitle);
    }

    getSuccessURLTitle(def) {
        return this.getProperty('successURLTitle', def);
    }

    setCancelURL(cancelURL) {
        return this.setProperty('cancelURL', cancelURL);
    }

    getCancelURL(def) {
        return this.getProperty('cancelURL', def);
    }

    setCancelURLTitle(cancelURLTitle) {
        return this.setProperty('cancelURLTitle', cancelURLTitle);
    }

    getCancelURLTitle(def) {
        return this.getProperty('cancelURLTitle', def);
    }

    getShopURL(def) {
        return this.getProperty('shopURL', def);
    }
}
