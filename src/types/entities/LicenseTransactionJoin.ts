/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import type { License } from '@/types/entities/License';
import type { Transaction } from '@/types/entities/Transaction';

export interface LicenseTransactionJoin {
  transaction: Transaction;
  license: License;

  setTransaction(transaction: Transaction): void;

  getTransaction(): Transaction;

  setLicense(license: License): void;

  getLicense(license: License): License;
}
