/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

export default class ValidationParameters {
    constructor() {
        this.parameters = {};
        this.licenseeProperties = {};
    }

    /**
     * Sets the target product
     *
     * optional productNumber, must be provided in case licensee auto-create is enabled
     * @param productNumber
     * @returns {ValidationParameters}
     */
    setProductNumber(productNumber) {
        this.productNumber = productNumber;
        return this;
    }

    /**
     * Get the target product
     * @returns {*}
     */
    getProductNumber() {
        return this.productNumber;
    }

    /**
     * Sets the name for the new licensee
     *
     * optional human-readable licensee name in case licensee will be auto-created. This parameter must not
     * be the name, but can be used to store any other useful string information with new licensees, up to
     * 1000 characters.
     * @param licenseeName
     * @returns {ValidationParameters}
     */
    setLicenseeName(licenseeName) {
        this.licenseeProperties.licenseeName = licenseeName;
        return this;
    }

    /**
     * Get the licensee name
     * @returns {*}
     */
    getLicenseeName() {
        return this.licenseeProperties.licenseeName;
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
        this.licenseeProperties.licenseeSecret = licenseeSecret;
        return this;
    }

    /**
     * Get the licensee secret
     * @returns {*}
     * @deprecated use 'NodeLocked' licensingModel instead
     */
    getLicenseeSecret() {
        return this.licenseeProperties.licenseeSecret;
    }

    /**
     * Get all licensee properties
     */
    getLicenseeProperties() {
        return this.licenseeProperties;
    }

    /**
     * Set licensee property
     * @param key
     * @param value
     */
    setLicenseeProperty(key, value) {
        this.licenseeProperties[key] = value;
        return this;
    }

    /**
     * Get licensee property
     * @param key
     */
    getLicenseeProperty(key, def) {
        return this.licenseeProperties[key] || def;
    }

    /**
     * Indicates, that the validation response is intended the offline use
     *
     * @param forOfflineUse
     *            if "true", validation response will be extended with data required for the offline use
     */
    setForOfflineUse(forOfflineUse) {
        this.forOfflineUse = !!forOfflineUse;
        return this;
    }

    isForOfflineUse() {
        return !!this.forOfflineUse;
    }

    setDryRun(dryRun) {
        this.dryRun = !!dryRun;
        return this;
    }

    getDryRun(def) {
        return this.dryRun || def;
    }

    /**
     * Get validation parameters
     * @returns {*}
     */
    getParameters() {
        return { ...this.parameters };
    }

    getProductModuleValidationParameters(productModuleNumber) {
        return { ...this.parameters[productModuleNumber] };
    }

    setProductModuleValidationParameters(productModuleNumber, productModuleParameters) {
        if (this.parameters[productModuleNumber] === undefined
            || !Object.keys(this.parameters[productModuleNumber]).length) {
            this.parameters[productModuleNumber] = {};
        }

        this.parameters[productModuleNumber] = { ...this.parameters[productModuleNumber], ...productModuleParameters };

        return this;
    }
}
