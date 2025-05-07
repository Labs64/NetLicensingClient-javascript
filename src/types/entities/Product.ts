/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import { Entity } from '@/types/entities/defineEntity';
import { ProductDiscountEntity } from '@/types/entities/ProductDiscount';

export type ProductProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  name?: string;
  version?: string | number;
  description?: string;
  licensingInfo?: string;
  licenseeAutoCreate?: boolean;
  discounts?: ProductDiscountEntity[];
  readonly inUse?: boolean;
} & T;

export interface ProductMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;

  setName(name: string): void;

  getName<D = undefined>(def?: D): string | D;

  setVersion(version: string): void;

  getVersion<D = undefined>(def?: D): string | number | D;

  setDescription(description: string): void;

  getDescription<D = undefined>(def?: D): string | D;

  setLicensingInfo(licensingInfo: string): void;

  getLicensingInfo<D = undefined>(def?: D): string | D;

  setLicenseeAutoCreate(licenseeAutoCreate: boolean): void;

  getLicenseeAutoCreate<D = undefined>(def?: D): boolean | D;

  setDiscounts(discounts: ProductDiscountEntity[]): void;

  getDiscounts<D = undefined>(def?: D): ProductDiscountEntity[] | D;

  addDiscount(discount: ProductDiscountEntity): void;

  removeDiscount(discount: ProductDiscountEntity): void;

  setProductDiscounts(productDiscounts: ProductDiscountEntity[]): void;

  getProductDiscounts<D = undefined>(def?: D): ProductDiscountEntity[] | D;

  serialize(): Record<string, string | string[]>;
}

export type ProductEntity<T extends object = object> = Entity<ProductProps<T>, ProductMethods>;
