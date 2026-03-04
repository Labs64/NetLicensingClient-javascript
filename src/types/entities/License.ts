/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import { RequiredProps } from '@/types';
import type { Entity } from '@/types/entities/defineEntity';

export type LicenseProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  name?: string;
  price?: number;
  currency?: string;
  hidden?: boolean;
  licenseeNumber?: string;
  licenseTemplateNumber?: string;
  productModuleNumber?: string;
  readonly inUse?: boolean;
} & T;

export type SavedLicenseProps<T extends object = object> = RequiredProps<LicenseProps, 'active' | 'number'> &
  LicenseProps<T>;

export interface LicenseMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;

  setName(name: string): void;

  getName<D = undefined>(def?: D): string | D;

  setPrice(price: number): void;

  getPrice<D = undefined>(def?: D): number | D;

  setCurrency(currency: string): void;

  getCurrency<D = undefined>(def?: D): string | D;

  setHidden(hidden: boolean): void;

  getHidden<D = undefined>(def?: D): boolean | D;

  setLicenseeNumber(number: string): void;

  getLicenseeNumber<D = undefined>(def?: D): string | D;

  setLicenseTemplateNumber(number: string): void;

  getLicenseTemplateNumber<D = undefined>(def?: D): string | D;

  setProductModuleNumber(number: string): void;

  getProductModuleNumber<D = undefined>(def?: D): string | D;

  serialize(): Record<string, string>;
}

export type LicenseEntity<T extends object = object> = Entity<LicenseProps<T>, LicenseMethods>;
