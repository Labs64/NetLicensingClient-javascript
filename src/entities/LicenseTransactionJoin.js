/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import Transaction from './Transaction';
import License from './License';

// const

export default class LicenseTransactionJoin {
    constructor(transaction, license) {
        this.transaction = transaction;
        this.license = license;
    }

    setTransaction(transaction) {
        if (!(transaction instanceof Transaction)) {
            throw new TypeError('context must be an instance of Transaction');
        }

        this.transaction = transaction;
        return this;
    }

    getTransaction(def) {
        return this.transaction || def;
    }

    setLicense(license) {
        if (!(license instanceof License)) {
            throw new TypeError('context must be an instance of License');
        }
        this.license = license;
        return this;
    }

    getLicense(def) {
        return this.license || def;
    }
}
