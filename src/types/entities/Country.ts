import { Entity } from '@/types/entities/defineEntity';

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
export interface CountryProps {
  readonly code: string;
  readonly name: string;
  readonly vatPercent?: number;
  readonly isEu: boolean;
}

export interface CountryMethods {
  getCode(): string;

  getName(): string;

  getVatPercent(): number;

  getIsEu(): boolean;
}

export type Country = Entity<CountryProps, CountryMethods>;
