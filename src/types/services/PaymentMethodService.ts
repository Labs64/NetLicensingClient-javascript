/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { PaymentMethod, PaymentMethodProps } from '@/types/entities/PaymentMethod';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';

export interface PaymentMethodService {
  get<T extends object = PaymentMethodProps>(
    context: Context,
    number: string,
    config?: RequestConfig,
  ): Promise<PaymentMethod<T>>;

  list<T extends object = PaymentMethodProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<PaymentMethod<T>[]>>;

  update<T extends object = PaymentMethodProps>(
    context: Context,
    number: string,
    paymentMethod: PaymentMethod<T>,
    config?: RequestConfig,
  ): Promise<PaymentMethod<T>>;
}
