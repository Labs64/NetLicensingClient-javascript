/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * Validation parameters map
 *
 * @type {WeakMap<Object, any>}
 */
const vpMap = new WeakMap();

export default class ValidationParameters {
    constructor() {
        vpMap.set(this, { parameters: {} });
    }

    /**
     * Sets the target product
     *
     * optional productNumber, must be provided in case licensee auto-create is enabled
     * @param productNumber
     * @returns {ValidationParameters}
     */
    setProductNumber(productNumber) {
        vpMap.get(this).productNumber = productNumber;
        return this;
    }

    /**
     * Get the target product
     * @returns {*}
     */
    getProductNumber() {
        return vpMap.get(this).productNumber;
    }

    /**
     * Sets the name for the new licensee
     *
     * optional human-readable licensee name in case licensee will be auto-created. This parameter must not
     * be the name, but can be used to store any other useful string information with new licensees, up to
     * 1000 characters.
     * @param licenseeName
     * @returns {NetLicensing.ValidationParameters}
     */
    setLicenseeName(licenseeName) {
        vpMap.get(this).licenseeName = licenseeName;
        return this;
    }

    /**
     * Get the licensee name
     * @returns {*}
     */
    getLicenseeName() {
        return vpMap.get(this).licenseeName;
    }

    /**
     * Sets the licensee secret
     *
     * licensee secret stored on the client side. Refer to Licensee Secret documentation for details.
     * @param licenseeSecret
     * @returns {ValidationParameters}
     * @deprecated use 'NodeLocked' licensingModel instead
     */
    setLicenseeSecret(licenseeSecret) {
        vpMap.get(this).licenseeSecret = licenseeSecret;
        return this;
    }

    /**
     * Get the licensee secret
     * @returns {*}
     * @deprecated use 'NodeLocked' licensingModel instead
     */
    getLicenseeSecret() {
        return vpMap.get(this).licenseeSecret;
    }

    /**
     * Get validation parameters
     * @returns {*}
     */
    getParameters() {
        return { ...vpMap.get(this).parameters };
    }

    getProductModuleValidationParameters(productModuleNumber) {
        return { ...vpMap.get(this).parameters[productModuleNumber] };
    }

    setProductModuleValidationParameters(productModuleNumber, productModuleParameters) {
        const { parameters } = vpMap.get(this);

        if (parameters[productModuleNumber] === undefined || !Object.keys(parameters[productModuleNumber]).length) {
            parameters[productModuleNumber] = {};
        }

        parameters[productModuleNumber] = Object.assign(parameters[productModuleNumber], productModuleParameters);

        return this;
    }
}
