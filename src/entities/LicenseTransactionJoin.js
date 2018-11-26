/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
export default class LicenseTransactionJoin {
    constructor(transaction, license) {
        this.transaction = transaction;
        this.license = license;
    }

    setTransaction(transaction) {
        this.transaction = transaction;
        return this;
    }

    getTransaction(def) {
        return this.transaction || def;
    }

    setLicense(license) {
        this.license = license;
        return this;
    }

    getLicense(def) {
        return this.license || def;
    }
}
