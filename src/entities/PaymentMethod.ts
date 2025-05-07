/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// entity factory
import defineEntity from '@/entities/defineEntity';

// types
import { PaymentMethodMethods, PaymentMethodProps, PaymentMethodEntity } from '@/types/entities/PaymentMethod';

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
): PaymentMethodEntity<T> {
  const props: PaymentMethodProps = { ...properties };

  const methods: PaymentMethodMethods = {
    setActive(this: void, active: boolean): void {
      set(props, 'active', active);
    },

    getActive<D = undefined>(this: void, def?: D): boolean | D {
      return get(props, 'active', def) as boolean | D;
    },

    setNumber(this: void, number: string): void {
      set(props, 'number', number);
    },

    getNumber<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'number', def) as string | D;
    },

    setPaypalSubject(this: void, subject: string): void {
      set(props, 'paypal.subject', subject);
    },

    getPaypalSubject<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'paypal.subject', def) as string | D;
    },
  };

  return defineEntity(props as PaymentMethodProps<T>, methods, PaymentMethod);
};

export default PaymentMethod;
