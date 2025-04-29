/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { Transaction, TransactionProps } from '@/types/entities/Transaction';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';

export interface TransactionService {
  get<T extends object = TransactionProps>(
    context: Context,
    number: string,
    config?: RequestConfig,
  ): Promise<Transaction<T>>;

  list<T extends object = TransactionProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<Transaction<T>[]>>;

  create<T extends object = TransactionProps>(
    context: Context,
    transaction: Transaction<T>,
    config?: RequestConfig,
  ): Promise<Transaction<T>>;

  update<T extends object = TransactionProps>(
    context: Context,
    number: string,
    transaction: Transaction<T>,
    config?: RequestConfig,
  ): Promise<Transaction<T>>;
}
