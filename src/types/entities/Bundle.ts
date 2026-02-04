/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { RequiredProps } from '@/types';
import type { Entity } from '@/types/entities/defineEntity';

export type BundleProps<T extends object = object> = T & {
  active?: boolean;
  number?: string;
  name?: string;
  price?: number;
  currency?: string;
  productNumber?: string;
  licenseTemplateNumbers?: string[];
  readonly staleLicenseTemplateNumbers?: string[];
};

export type SavedBundleProps<T extends object = object> = RequiredProps<BundleProps, 'active' | 'number' | 'name'> &
  BundleProps<T>;

export interface BundleMethods {
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

  setProductNumber(number: string): void;

  getProductNumber<D = undefined>(def?: D): string | D;

  setLicenseTemplateNumbers(numbers: string[]): void;

  getLicenseTemplateNumbers<D = undefined>(def?: D): string[] | D;

  addLicenseTemplateNumber(number: string): void;

  removeLicenseTemplateNumber(number: string): void;

  getStaleLicenseTemplateNumbers<D = undefined>(def?: D): string[] | D;

  serialize(): Record<string, string>;
}

export type BundleEntity<T extends object = object> = Entity<BundleProps<T>, BundleMethods>;
