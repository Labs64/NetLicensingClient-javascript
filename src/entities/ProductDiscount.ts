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
import { ProductDiscountMethods, ProductDiscountProps, ProductDiscountEntity } from '@/types/entities/ProductDiscount';

// utils
import { set, get } from '@/utils/helpers';

const ProductDiscount = function (
  properties: ProductDiscountProps = {} as ProductDiscountProps,
): ProductDiscountEntity {
  const props: ProductDiscountProps = { ...properties };

  if (props.amountFix && props.amountPercent) {
    throw new NlicError('Properties "amountFix" and "amountPercent" cannot be used at the same time');
  }

  const methods: ProductDiscountMethods = {
    setTotalPrice(this: void, totalPrice: number): void {
      set(props, 'totalPrice', totalPrice);
    },

    getTotalPrice<D>(this: void, def?: D): number | D {
      return get(props, 'totalPrice', def) as number | D;
    },

    setCurrency(currency: string): void {
      set(props, 'currency', currency);
    },

    getCurrency<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'currency', def) as string | D;
    },

    setAmountFix(this: void, amountFix: number): void {
      set(props, 'amountFix', amountFix);
    },

    getAmountFix<D = undefined>(this: void, def?: D): number | D {
      return get(props, 'amountFix', def) as number | D;
    },

    setAmountPercent(this: void, amountPercent: number): void {
      set(props, 'amountPercent', amountPercent);
    },

    getAmountPercent<D = undefined>(this: void, def?: D): number | D {
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
