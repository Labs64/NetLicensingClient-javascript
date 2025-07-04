/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
export type Parameter = Record<string, string>;

export type Parameters = Record<string, Parameter>;

export interface LicenseeProperties {
  licenseeName?: string;
  licenseeSecret?: string;

  [key: string]: string | undefined;
}

export interface ValidationParametersInstance {
  productNumber?: string;
  dryRun?: boolean;
  forOfflineUse?: boolean;
  licenseeProperties: LicenseeProperties;
  parameters: Parameters;

  setProductNumber(productNumber: string): this;

  getProductNumber(): string | undefined;

  setLicenseeName(name: string): this;

  getLicenseeName(): string | undefined;

  setLicenseeSecret(secret: string): this;

  getLicenseeSecret(): string | undefined;

  getLicenseeProperties(): LicenseeProperties;

  setLicenseeProperty(key: string, value: string): this;

  getLicenseeProperty<D = undefined>(key: string, def?: D): string | D;

  setForOfflineUse(forOfflineUse: boolean): this;

  isForOfflineUse(): boolean;

  setDryRun(dryRun: boolean): this;

  isDryRun(): boolean;

  setParameter(productModuleNumber: string, parameter: Parameter): this;

  getParameters(): Parameters;

  getParameter(productModuleNumber: string): Parameter | undefined;

  setProductModuleValidationParameters(productModuleNumber: string, productModuleParameters: Parameter): this;

  getProductModuleValidationParameters(productModuleNumber: string): Parameter | undefined;
}
