/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import { PaymentMethodEnum } from '@/types/constants/PaymentMethodEnum';
import { TransactionSource } from '@/types/constants/TransactionSource';
import { TransactionStatus } from '@/types/constants/TransactionStatus';
import type { Entity } from '@/types/entities/defineEntity';
import type { LicenseTransactionJoin } from '@/types/entities/LicenseTransactionJoin';

export interface TransactionBaseProps {
  active?: boolean;
  number?: string;
  status?: TransactionStatus;
  source?: TransactionSource;
  grandTotal?: number;
  discount?: number;
  currency?: string;
  dateCreated?: Date;
  dateClosed?: Date;
  paymentMethod?: PaymentMethodEnum;
  licenseTransactionJoins?: LicenseTransactionJoin[];
}

export type TransactionProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  status?: TransactionStatus;
  source?: TransactionSource;
  grandTotal?: number;
  discount?: number;
  currency?: string;
  dateCreated?: Date;
  dateClosed?: Date;
  paymentMethod?: PaymentMethodEnum;
  licenseTransactionJoins?: LicenseTransactionJoin[];
  readonly inUse?: boolean;
} & T;

export interface TransactionMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;

  setStatus(status: TransactionStatus): void;

  getStatus<D = undefined>(def?: D): TransactionStatus | D;

  setSource(source: TransactionSource): void;

  getSource<D = undefined>(def?: D): TransactionSource | D;

  setGrandTotal(grandTotal: number): void;

  getGrandTotal<D = undefined>(def?: D): number | D;

  setDiscount(discount: number): void;

  getDiscount<D = undefined>(def?: D): number | D;

  setCurrency(currency: string): void;

  getCurrency<D = undefined>(def?: D): string | D;

  setDateCreated(dateCreated: Date): void;

  getDateCreated<D = undefined>(def?: D): Date | D;

  setDateClosed(dateCreated: Date): void;

  getDateClosed<D = undefined>(def?: D): Date | D;

  setPaymentMethod(paymentMethod: PaymentMethodEnum): void;

  getPaymentMethod<D = undefined>(def?: D): PaymentMethodEnum | D;

  setLicenseTransactionJoins(joins: LicenseTransactionJoin[]): void;

  getLicenseTransactionJoins<D = undefined>(def?: D): LicenseTransactionJoin[] | D;

  serialize(): Record<string, string>;
}

export type Transaction<T extends object = object> = Entity<TransactionProps<T>, TransactionMethods>;
