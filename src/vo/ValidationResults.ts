/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import { ProductModuleValidation, ValidationResultsInstance } from '@/types/vo/ValidationResults';

// utils
import { isValid } from '@/utils/validation';

class ValidationResults implements ValidationResultsInstance {
  readonly validations: Record<string, ProductModuleValidation>;
  ttl?: Date;

  constructor() {
    this.validations = {};
  }

  getValidators(): Record<string, ProductModuleValidation> {
    return this.validations;
  }

  setValidation(validation: ProductModuleValidation): this {
    this.validations[validation.productModuleNumber] = validation;
    return this;
  }

  getValidation<D = undefined>(productModuleNumber: string, def?: D): ProductModuleValidation | D {
    return this.validations[productModuleNumber] || def;
  }

  setProductModuleValidation(validation: ProductModuleValidation): this {
    return this.setValidation(validation);
  }

  getProductModuleValidation<D = undefined>(productModuleNumber: string, def?: D): ProductModuleValidation | D {
    return this.getValidation(productModuleNumber, def);
  }

  setTtl(ttl: Date | string): this {
    if (!isValid(ttl)) {
      throw new TypeError(`Bad ttl:${ttl.toString()}`);
    }

    this.ttl = new Date(ttl);
    return this;
  }

  getTtl(): Date | undefined {
    return this.ttl;
  }

  toString(): string {
    let data = 'ValidationResult [';

    Object.keys(this.validations).forEach((pmNumber) => {
      data += `ProductModule<${pmNumber}>`;

      if (pmNumber in this.validations) {
        data += JSON.stringify(this.validations[pmNumber]);
      }
    });

    data += ']';

    return data;
  }
}

export default (): ValidationResultsInstance => new ValidationResults();
