/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import {
  ValidationParametersInstance,
  Parameter,
  Parameters,
  LicenseeProperties,
} from '@/types/vo/ValidationParameters';

class ValidationParameters implements ValidationParametersInstance {
  productNumber?: string;
  dryRun?: boolean;
  forOfflineUse?: boolean;
  licenseeProperties: LicenseeProperties;
  parameters: Parameters;

  constructor() {
    this.parameters = {};
    this.licenseeProperties = {};
  }

  setProductNumber(productNumber: string): this {
    this.productNumber = productNumber;
    return this;
  }

  getProductNumber(): string | undefined {
    return this.productNumber;
  }

  setLicenseeName(licenseeName: string): this {
    this.licenseeProperties.licenseeName = licenseeName;
    return this;
  }

  getLicenseeName(): string | undefined {
    return this.licenseeProperties.licenseeName;
  }

  setLicenseeSecret(licenseeSecret: string): this {
    this.licenseeProperties.licenseeSecret = licenseeSecret;
    return this;
  }

  getLicenseeSecret(): string | undefined {
    return this.licenseeProperties.licenseeSecret;
  }

  getLicenseeProperties(): LicenseeProperties {
    return this.licenseeProperties;
  }

  setLicenseeProperty(key: string, value: string): this {
    this.licenseeProperties[key] = value;
    return this;
  }

  getLicenseeProperty<D = undefined>(key: string, def?: D): string | D {
    return (this.licenseeProperties[key] || def) as string | D;
  }

  setForOfflineUse(forOfflineUse: boolean): this {
    this.forOfflineUse = forOfflineUse;
    return this;
  }

  isForOfflineUse() {
    return !!this.forOfflineUse;
  }

  setDryRun(dryRun: boolean): this {
    this.dryRun = dryRun;
    return this;
  }

  isDryRun(): boolean {
    return !!this.dryRun;
  }

  getParameters(): Parameters {
    return this.parameters;
  }

  setParameter(productModuleNumber: string, parameter: Parameter): this {
    this.parameters[productModuleNumber] = parameter;
    return this;
  }

  getParameter(productModuleNumber: string): Parameter | undefined {
    return this.parameters[productModuleNumber];
  }

  getProductModuleValidationParameters(productModuleNumber: string): Parameter | undefined {
    return this.getParameter(productModuleNumber);
  }

  setProductModuleValidationParameters(productModuleNumber: string, productModuleParameters: Parameter): this {
    return this.setParameter(productModuleNumber, productModuleParameters);
  }
}

export default (): ValidationParametersInstance => new ValidationParameters();
