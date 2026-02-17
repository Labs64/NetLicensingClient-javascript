/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import { RequiredProps } from '@/types';
import { LicensingModelValues } from '@/types/constants/LicensingModel';
import { Entity } from '@/types/entities/defineEntity';

export type ProductModuleProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  name?: string;
  licensingModel?: LicensingModelValues;
  productNumber?: string;
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

  setProductNumber(productNumber: string): void;

  getProductNumber<D = undefined>(def?: D): string | D;

  serialize(): Record<string, string>;
}

export type ProductModuleEntity<T extends object = object> = Entity<ProductModuleProps<T>, ProductModuleMethods>;
