/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// entity factory
import defineEntity from '@/entities/defineEntity';

// types
import {
  PaymentMethodMethods,
  PaymentMethodProps,
  PaymentMethod as IPaymentMethod,
} from '@/types/entities/PaymentMethod';

// utils
import { set, get } from '@/utils/helpers';

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 * @property string paypal.subject
 */
const PaymentMethod = function <T extends object>(
  properties: PaymentMethodProps<T> = {} as PaymentMethodProps<T>,
): IPaymentMethod<T> {
  const props: PaymentMethodProps = { ...properties };

  const methods: PaymentMethodMethods = {
    setActive(active: boolean): void {
      set(props, 'active', active);
    },

    getActive<D = undefined>(def?: D): boolean | D {
      return get(props, 'active', def) as boolean | D;
    },

    setNumber(number: string): void {
      set(props, 'number', number);
    },

    getNumber<D = undefined>(def?: D): string | D {
      return get(props, 'number', def) as string | D;
    },

    setPaypalSubject(subject: string): void {
      set(props, 'paypal.subject', subject);
    },

    getPaypalSubject<D = undefined>(def?: D): string | D {
      return get(props, 'paypal.subject', def) as string | D;
    },
  };

  return defineEntity(props as PaymentMethodProps<T>, methods, PaymentMethod);
};

export default PaymentMethod;
