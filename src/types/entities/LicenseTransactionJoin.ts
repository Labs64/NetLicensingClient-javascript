/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import type { LicenseEntity } from '@/types/entities/License';
import type { TransactionEntity } from '@/types/entities/Transaction';

export interface LicenseTransactionJoinProps {
  transaction: TransactionEntity;
  license: LicenseEntity;
}

export interface LicenseTransactionJoinMethods {
  setTransaction(t: TransactionEntity): void;
  getTransaction(): TransactionEntity;
  setLicense(l: LicenseEntity): void;
  getLicense(): LicenseEntity;
}

export type LicenseTransactionJoinEntity = LicenseTransactionJoinProps & LicenseTransactionJoinMethods;
