/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// entity factory
import defineEntity from '@/entities/defineEntity';

// errors
import NlicError from '@/errors/NlicError';

// types
import {
  ProductDiscountMethods,
  ProductDiscountProps,
  ProductDiscount as IProductDiscount,
} from '@/types/entities/ProductDiscount';

// utils
import { set, get } from '@/utils/helpers';

const ProductDiscount = function (properties: ProductDiscountProps = {} as ProductDiscountProps): IProductDiscount {
  const props: ProductDiscountProps = { ...properties };

  if (props.amountFix && props.amountPercent) {
    throw new NlicError('Properties "amountFix" and "amountPercent" cannot be used at the same time');
  }

  const methods: ProductDiscountMethods = {
    setTotalPrice(totalPrice: number): void {
      set(props, 'totalPrice', totalPrice);
    },

    getTotalPrice<D>(def?: D): number | D {
      return get(props, 'totalPrice', def) as number | D;
    },

    setCurrency(currency: string): void {
      set(props, 'currency', currency);
    },

    getCurrency<D = undefined>(def?: D): string | D {
      return get(props, 'currency', def) as string | D;
    },

    setAmountFix(amountFix: number): void {
      set(props, 'amountFix', amountFix);
    },

    getAmountFix<D = undefined>(def?: D): number | D {
      return get(props, 'amountFix', def) as number | D;
    },

    setAmountPercent(amountPercent: number): void {
      set(props, 'amountPercent', amountPercent);
    },

    getAmountPercent<D = undefined>(def?: D): number | D {
      return get(props, 'amountPercent', def) as number | D;
    },

    toString() {
      const total = this.getTotalPrice();
      const currency = this.getCurrency();
      const amount = this.getAmountPercent() ? `${this.getAmountPercent()}%` : this.getAmountFix();

      return total && currency && amount ? `${total};${currency};${amount}` : '';
    },
  };

  return defineEntity(props, methods, ProductDiscount, {
    set: (obj, prop) => {
      if (prop === 'amountFix') {
        delete obj.amountPercent;
      }

      if (prop === 'amountPercent') {
        delete obj.amountFix;
      }
    },
  });
};

export default ProductDiscount;
