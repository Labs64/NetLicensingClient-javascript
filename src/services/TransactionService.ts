/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/transaction-services
 *
 * Transaction is created each time change to  LicenseService licenses happens. For instance licenses are
 * obtained by a licensee, licenses disabled by vendor, licenses deleted, etc. Transaction is created no matter what
 * source has initiated the change to licenses: it can be either a direct purchase of licenses by a licensee via
 * NetLicensing Shop, or licenses can be given to a licensee by a vendor. Licenses can also be assigned implicitly by
 * NetLicensing if it is defined so by a license model (e.g. evaluation license may be given automatically). All these
 * events are reflected in transactions. Of all the transaction handling routines only read-only routines are exposed to
 * the public API, as transactions are only allowed to be created and modified by NetLicensing internally.
 *
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import Constants from '@/constants';

// converters
import itemToTransaction from '@/converters/itemToTransaction';

// services
import Service from '@/services/Service';

// types
import type { ItemPagination } from '@/types/api/response';
import type { TransactionProps, TransactionEntity } from '@/types/entities/Transaction';
import type { RequestConfig } from '@/types/services/Service';
import type { ITransactionService } from '@/types/services/TransactionService';
import type { ContextInstance } from '@/types/vo/Context';
import type { PageInstance } from '@/types/vo/Page';

// utils
import { encode } from '@/utils/filter';
import { ensureNotEmpty, ensureNotNull } from '@/utils/validation';

// vo
import Page from '@/vo/Page';

const endpoint = Constants.Transaction.ENDPOINT_PATH;
const type = Constants.Transaction.TYPE;

const transactionService: ITransactionService = {
  /**
   * Gets transaction by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#get-transaction
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the transaction number
   * @param number string
   *
   * (optional) service request config
   * @param config
   *
   * return the transaction in promise
   * @returns {Promise}
   */
  async get<T extends object = TransactionProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<TransactionEntity<T>> {
    ensureNotEmpty(number, 'number');

    const response = await Service.get(context, `${endpoint}/${number}`, {}, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToTransaction<T>(item);
  },

  /**
   * Returns all transactions of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#transactions-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string
   *
   * (optional) service request config
   * @param config
   *
   * array of transaction entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  async list<T extends object = TransactionProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<TransactionEntity<T>[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const list: TransactionEntity<T>[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToTransaction<T>(v));

    return Page(list || [], items as ItemPagination);
  },

  /**
   * Creates new transaction object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#create-transaction
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param transaction NetLicensing.Transaction
   *
   * (optional) service request config
   * @param config
   *
   * return the newly created transaction object in promise
   * @returns {Promise}
   */
  async create<T extends object = TransactionProps>(
    context: ContextInstance,
    transaction: TransactionEntity<T>,
    config?: RequestConfig,
  ): Promise<TransactionEntity<T>> {
    ensureNotNull(transaction, 'transaction');

    const response = await Service.post(context, endpoint, transaction.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToTransaction<T>(item);
  },

  /**
   * Updates transaction properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#update-transaction
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * transaction number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param transaction NetLicensing.Transaction
   *
   * (optional) service request config
   * @param config
   *
   * return updated transaction in promise.
   * @returns {Promise}
   */
  async update<T extends object = TransactionProps>(
    context: ContextInstance,
    number: string,
    transaction: TransactionEntity<T>,
    config?: RequestConfig,
  ): Promise<TransactionEntity<T>> {
    ensureNotEmpty(number, 'number');
    ensureNotNull(transaction, 'transaction');

    const response = await Service.post(context, `${endpoint}/${number}`, transaction.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToTransaction<T>(item);
  },
};

export default transactionService;
