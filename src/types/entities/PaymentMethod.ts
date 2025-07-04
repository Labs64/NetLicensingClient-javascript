/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { RequiredProps } from '@/types';
import { Entity } from '@/types/entities/defineEntity';

export type PaymentMethodProps<T = object> = T & {
  active?: boolean;
  number?: string;
};

export type SavedPaymentMethodProps<T extends object = object> = RequiredProps<
  PaymentMethodProps,
  'active' | 'number'
> &
  PaymentMethodProps<T>;

export interface PaymentMethodMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;
}

export type PaymentMethodEntity<T = object> = Entity<PaymentMethodProps<T>, PaymentMethodMethods>;
