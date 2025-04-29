/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import type { LicenseType } from '@/types/constants/LicenseType';
import type { TimeVolumePeriod } from '@/types/constants/TimeVolumePeriod';
import { Entity } from '@/types/entities/defineEntity';

export type LicenseTemplateProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  name?: string;
  licenseType?: LicenseType;
  price?: number;
  currency?: string;
  automatic?: boolean;
  hidden?: boolean;
  hideLicenses?: boolean;
  gracePeriod?: boolean;
  timeVolume?: number;
  timeVolumePeriod?: TimeVolumePeriod;
  maxSessions?: number;
  quantity?: number;
  productModuleNumber?: string;
  readonly inUse?: boolean;
} & T;

export interface LicenseTemplateMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;

  setName(name: string): void;

  getName<D = undefined>(def?: D): string | D;

  setLicenseType(type: LicenseType): void;

  getLicenseType<D = undefined>(def?: D): LicenseType | D;

  setPrice(price: number): void;

  getPrice<D = undefined>(def?: D): number | D;

  setCurrency(currency: string): void;

  getCurrency<D = undefined>(def?: D): string | D;

  setAutomatic(automatic: boolean): void;

  getAutomatic<D = undefined>(def?: D): boolean | D;

  setHidden(hidden: boolean): void;

  getHidden<D = undefined>(def?: D): boolean | D;

  setHideLicenses(hideLicenses: boolean): void;

  getHideLicenses<D = undefined>(def?: D): boolean | D;

  setGracePeriod(gradePeriod: boolean): void;

  getGracePeriod<D = undefined>(def?: D): boolean | D;

  setTimeVolume(timeVolume: number): void;

  getTimeVolume<D = undefined>(def?: D): number | D;

  setTimeVolumePeriod(timeVolumePeriod: TimeVolumePeriod): void;

  getTimeVolumePeriod<D = undefined>(def?: D): TimeVolumePeriod | D;

  setMaxSessions(maxSessions: number): void;

  getMaxSessions<D = undefined>(def?: D): number | D;

  setQuantity(quantity: number): void;

  getQuantity<D = undefined>(def?: D): number | D;

  setProductModuleNumber(productModuleNumber: string): void;

  getProductModuleNumber<D = undefined>(def?: D): string | D;

  serialize(): Record<string, string>;
}

export type LicenseTemplate<T extends object = object> = Entity<LicenseTemplateProps<T>, LicenseTemplateMethods>;
