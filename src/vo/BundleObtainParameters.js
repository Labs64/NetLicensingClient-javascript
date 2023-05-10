/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

export default class BundleObtainParameters {
    constructor() {
        this.licenseeNumber = '';
    }

    setLicenseeNumber(licenseeNumber) {
        this.licenseeNumber = licenseeNumber;
        return this;
    }

    getLicenseeNumber() {
        return this.licenseeNumber;
    }
}
