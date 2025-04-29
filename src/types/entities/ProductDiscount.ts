/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { Entity } from '@/types/entities/defineEntity';

export interface ProductDiscountProps {
  totalPrice?: number;
  currency?: string;
  amountFix?: number;
  amountPercent?: number;
}

export interface ProductDiscountMethods {
  setTotalPrice(totalPrice: number): void;

  getTotalPrice<D = undefined>(def?: D): number | D;

  setCurrency(currency: string): void;

  getCurrency<D = undefined>(def?: D): string | D;

  setAmountFix(amountFix: number): void;

  getAmountFix<D = undefined>(def?: D): number | D;

  setAmountPercent(amountPercent: number): void;

  getAmountPercent<D = undefined>(def?: D): number | D;

  toString(): string;
}

export type ProductDiscount = Entity<ProductDiscountProps, ProductDiscountMethods>;
