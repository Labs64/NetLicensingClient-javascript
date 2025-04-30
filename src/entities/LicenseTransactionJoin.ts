// types
import type { License } from '@/types/entities/License';
import type { LicenseTransactionJoin as ILicenseTransactionJoin } from '@/types/entities/LicenseTransactionJoin';
import type { Transaction } from '@/types/entities/Transaction';

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

class LicenseTransactionJoin implements ILicenseTransactionJoin {
  transaction: Transaction;
  license: License;

  constructor(transaction: Transaction, license: License) {
    this.transaction = transaction;
    this.license = license;
  }

  setTransaction(transaction: Transaction): void {
    this.transaction = transaction;
  }

  getTransaction(): Transaction {
    return this.transaction;
  }

  setLicense(license: License): void {
    this.license = license;
  }

  getLicense(): License {
    return this.license;
  }
}

export default (transaction: Transaction, license: License) => new LicenseTransactionJoin(transaction, license);
