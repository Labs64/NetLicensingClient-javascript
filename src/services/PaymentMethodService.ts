/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// constants
import Constants from '@/constants';

// converters
import itemToPaymentMethod from '@/converters/itemToPaymentMethod';

// services
import Service from '@/services/Service';

// types
import { ItemPagination } from '@/types/api/response';
import { PaymentMethodProps, PaymentMethodEntity, SavedPaymentMethodProps } from '@/types/entities/PaymentMethod';
import { IPaymentMethodService } from '@/types/services/PaymentMethodService';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

// utils
import { encode } from '@/utils/filter';
import { ensureNotEmpty, ensureNotNull } from '@/utils/validation';

// vo
import Page from '@/vo/Page';

const endpoint = Constants.PaymentMethod.ENDPOINT_PATH;
const type = Constants.PaymentMethod.TYPE;

const paymentMethodService: IPaymentMethodService = {
  /**
   * Gets payment method by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/payment-method-services#get-payment-method
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the payment method number
   * @param number string
   *
   * (optional) service request config
   * @param config
   *
   * return the payment method in promise
   * @returns {Promise}
   */
  async get<T extends object = PaymentMethodProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<PaymentMethodEntity<SavedPaymentMethodProps<T>>> {
    ensureNotEmpty(number, 'number');

    const response = await Service.get(context, `${endpoint}/${number}`, {}, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToPaymentMethod<SavedPaymentMethodProps<T>>(item);
  },

  /**
   * Returns payment methods of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/payment-method-services#payment-methods-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * (optional) service request config
   * @param config
   *
   * array of payment method entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  async list<T extends object = PaymentMethodProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<PaymentMethodEntity<SavedPaymentMethodProps<T>>[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const list: PaymentMethodEntity<SavedPaymentMethodProps<T>>[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToPaymentMethod<SavedPaymentMethodProps<T>>(v));

    return Page(list || [], items as ItemPagination);
  },

  /**
   * Updates payment method properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/payment-method-services#update-payment-method
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the payment method number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param paymentMethod NetLicensing.PaymentMethod
   *
   * (optional) service request config
   * @param config
   *
   * return updated payment method in promise.
   * @returns {Promise}
   */
  async update<T extends object = PaymentMethodProps>(
    context: ContextInstance,
    number: string,
    paymentMethod: PaymentMethodEntity<T>,
    config?: RequestConfig,
  ): Promise<PaymentMethodEntity<SavedPaymentMethodProps<T>>> {
    ensureNotEmpty(number, 'number');
    ensureNotNull(paymentMethod, 'paymentMethod');

    const response = await Service.post(context, `${endpoint}/${number}`, paymentMethod.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToPaymentMethod<SavedPaymentMethodProps<T>>(item);
  },
};

export default paymentMethodService;
