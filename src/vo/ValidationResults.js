/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import CheckUtils from '../util/CheckUtils';

export default class ValidationResults {
    constructor() {
        this.validators = {};
    }

    getValidators() {
        return { ...this.validators };
    }

    setProductModuleValidation(productModuleNumber, productModuleValidation) {
        if (!CheckUtils.isValid(productModuleNumber) || typeof productModuleNumber === 'object') {
            throw new TypeError(`Bad productModuleNumber:${productModuleNumber}`);
        }

        this.validators[productModuleNumber] = productModuleValidation;

        return this;
    }

    getProductModuleValidation(productModuleNumber) {
        if (!CheckUtils.isValid(productModuleNumber) || typeof productModuleNumber === 'object') {
            throw new TypeError(`Bad productModuleNumber:${productModuleNumber}`);
        }

        return this.validators[productModuleNumber];
    }

    setTtl(ttl) {
        if (!CheckUtils.isValid(ttl) || typeof ttl === 'object') {
            throw new TypeError(`Bad ttl:${ttl}`);
        }
        this.ttl = new Date(String(ttl));

        return this;
    }

    getTtl() {
        return (this.ttl) ? new Date(this.ttl) : undefined;
    }

    toString() {
        let data = 'ValidationResult [';

        const validators = this.getValidators();
        const has = Object.prototype.hasOwnProperty;

        Object.keys(validators).forEach((productModuleNumber) => {
            data += `ProductModule<${productModuleNumber}>`;
            if (has.call(validators, productModuleNumber)) {
                data += JSON.stringify(validators[productModuleNumber]);
            }
        });

        data += ']';

        return data;
    }
}
