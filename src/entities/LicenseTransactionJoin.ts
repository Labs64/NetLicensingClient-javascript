// types
import type { LicenseEntity } from '@/types/entities/License';
import type { LicenseTransactionJoinEntity as ILicenseTransactionJoin } from '@/types/entities/LicenseTransactionJoin';
import type { TransactionEntity } from '@/types/entities/Transaction';

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

class LicenseTransactionJoin implements ILicenseTransactionJoin {
  transaction: TransactionEntity;
  license: LicenseEntity;

  constructor(transaction: TransactionEntity, license: LicenseEntity) {
    this.transaction = transaction;
    this.license = license;
  }

  setTransaction(transaction: TransactionEntity): void {
    this.transaction = transaction;
  }

  getTransaction(): TransactionEntity {
    return this.transaction;
  }

  setLicense(license: LicenseEntity): void {
    this.license = license;
  }

  getLicense(): LicenseEntity {
    return this.license;
  }
}

export default (transaction: TransactionEntity, license: LicenseEntity) =>
  new LicenseTransactionJoin(transaction, license);
