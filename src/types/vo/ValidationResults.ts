/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
export interface ProductModuleValidation {
  productModuleNumber: string;

  [key: string]: string;
}

export interface ValidationResultsInstance {
  readonly validations: Record<string, ProductModuleValidation>;
  ttl?: Date;

  getValidators(): Record<string, ProductModuleValidation>;

  setValidation(validation: ProductModuleValidation): this;

  getValidation<D = undefined>(productModuleNumber: string, def?: D): ProductModuleValidation | D;

  setProductModuleValidation(validation: ProductModuleValidation): this;

  getProductModuleValidation<D = undefined>(productModuleNumber: string, def?: D): ProductModuleValidation | D;

  setTtl(ttl: Date | string): this;

  getTtl(): Date | undefined;

  toString(): string;
}
