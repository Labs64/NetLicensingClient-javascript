/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { TransactionEntity, TransactionProps } from '@/types/entities/Transaction';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';
import { Persisted } from '@/types/entities';

export interface ITransactionService {
  get<T extends object = TransactionProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<TransactionEntity<Persisted<T>>>;

  list<T extends object = TransactionProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<TransactionEntity<Persisted<T>>[]>>;

  create<T extends object = TransactionProps>(
    context: ContextInstance,
    transaction: TransactionEntity<T>,
    config?: RequestConfig,
  ): Promise<TransactionEntity<Persisted<T>>>;

  update<T extends object = TransactionProps>(
    context: ContextInstance,
    number: string,
    transaction: TransactionEntity<T>,
    config?: RequestConfig,
  ): Promise<TransactionEntity<Persisted<T>>>;
}
