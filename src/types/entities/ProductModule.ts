/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import { RequiredProps } from '@/types';
import { LicensingModelValues } from '@/types/constants/LicensingModel';
import { NodeSecretModeValues } from '@/types/constants/NodeSecretMode';
import { Entity } from '@/types/entities/defineEntity';

export type ProductModuleProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  name?: string;
  licensingModel?: LicensingModelValues;
  maxCheckoutValidity?: number;
  yellowThreshold?: number;
  redThreshold?: number;
  productNumber?: string;
  nodeSecretMode?: NodeSecretModeValues;
  readonly inUse?: boolean;
} & T;

export type SavedProductModuleProps<T extends object = object> = RequiredProps<
  ProductModuleProps,
  'active' | 'number' | 'licensingModel' | 'productNumber' | 'inUse'
> &
  ProductModuleProps<T>;

export interface ProductModuleMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;

  setName(name: string): void;

  getName<D = undefined>(def?: D): string | D;

  setLicensingModel(licensingModel: LicensingModelValues): void;

  getLicensingModel<D = undefined>(def?: D): LicensingModelValues | D;

  setMaxCheckoutValidity(maxCheckoutValidity: number): void;

  getMaxCheckoutValidity<D = undefined>(def?: D): number | D;

  setYellowThreshold(yellowThreshold: number): void;

  getYellowThreshold<D = undefined>(def?: D): number | D;

  setRedThreshold(redThreshold: number): void;

  getRedThreshold<D = undefined>(def?: D): number | D;

  setProductNumber(productNumber: string): void;

  getProductNumber<D = undefined>(def?: D): string | D;

  serialize(): Record<string, string>;
}

export type ProductModuleEntity<T extends object = object> = Entity<ProductModuleProps<T>, ProductModuleMethods>;
