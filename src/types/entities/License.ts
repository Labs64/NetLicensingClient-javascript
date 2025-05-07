/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import type { TimeVolumePeriodValues } from '@/types/constants/TimeVolumePeriod';
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

  // TimeVolume
  timeVolume?: number;
  timeVolumePeriod?: TimeVolumePeriodValues;
  startDate?: Date | 'now';

  // Rental
  parentfeature?: string;

  readonly inUse?: boolean;
} & T;

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

  // TimeVolume

  setTimeVolume(timeVolume: number): void;

  getTimeVolume<D = undefined>(def?: D): number | D;

  setTimeVolumePeriod(timeVolumePeriod: TimeVolumePeriodValues): void;

  getTimeVolumePeriod<D = undefined>(def?: D): TimeVolumePeriodValues | D;

  setStartDate(startDate: Date | 'now'): void;

  getStartDate<D = undefined>(def?: D): Date | 'now' | D;

  // Rental

  setParentfeature(parentfeature?: string): void;

  getParentfeature<D = undefined>(def?: D): string | D;

  serialize(): Record<string, string>;
}

export type LicenseEntity<T extends object = object> = Entity<LicenseProps<T>, LicenseMethods>;
