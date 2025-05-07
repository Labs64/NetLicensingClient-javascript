/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { PaymentMethodEntity, PaymentMethodProps } from '@/types/entities/PaymentMethod';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

export interface IPaymentMethodService {
  get<T extends object = PaymentMethodProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<PaymentMethodEntity<T>>;

  list<T extends object = PaymentMethodProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<PaymentMethodEntity<T>[]>>;

  update<T extends object = PaymentMethodProps>(
    context: ContextInstance,
    number: string,
    paymentMethod: PaymentMethodEntity<T>,
    config?: RequestConfig,
  ): Promise<PaymentMethodEntity<T>>;
}
