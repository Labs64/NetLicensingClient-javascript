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