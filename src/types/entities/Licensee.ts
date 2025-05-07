/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import type { Entity } from '@/types/entities/defineEntity';

export type LicenseeProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  name?: string;
  markedForTransfer?: boolean;
  productNumber?: string;
  readonly inUse?: boolean;
} & T;

export interface LicenseeMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;

  setName(name: string): void;

  getName<D = undefined>(def?: D): string | D;

  setProductNumber(number: string): void;

  getProductNumber<D = undefined>(def?: D): string | D;

  setMarkedForTransfer(mark: boolean): void;

  getMarkedForTransfer<D = undefined>(def?: D): boolean | D;

  serialize(): Record<string, string>;
}

export type LicenseeEntity<T extends object = object> = Entity<LicenseeProps<T>, LicenseeMethods>;
