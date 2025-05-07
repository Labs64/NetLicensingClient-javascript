/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import { PaymentMethodValues } from '@/types/constants/PaymentMethodEnum';
import { TransactionSourceValues } from '@/types/constants/TransactionSource';
import { TransactionStatusValues } from '@/types/constants/TransactionStatus';
import type { Entity } from '@/types/entities/defineEntity';
import type { LicenseTransactionJoinEntity } from '@/types/entities/LicenseTransactionJoin';

export interface TransactionBaseProps {
  active?: boolean;
  number?: string;
  status?: TransactionStatusValues;
  source?: TransactionSourceValues;
  grandTotal?: number;
  discount?: number;
  currency?: string;
  dateCreated?: Date;
  dateClosed?: Date;
  paymentMethod?: PaymentMethodValues;
  licenseTransactionJoins?: LicenseTransactionJoinEntity[];
}

export type TransactionProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  status?: TransactionStatusValues;
  source?: TransactionSourceValues;
  grandTotal?: number;
  discount?: number;
  currency?: string;
  dateCreated?: Date;
  dateClosed?: Date;
  paymentMethod?: PaymentMethodValues;
  licenseTransactionJoins?: LicenseTransactionJoinEntity[];
  readonly inUse?: boolean;
} & T;

export interface TransactionMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;

  setStatus(status: TransactionStatusValues): void;

  getStatus<D = undefined>(def?: D): TransactionStatusValues | D;

  setSource(source: TransactionSourceValues): void;

  getSource<D = undefined>(def?: D): TransactionSourceValues | D;

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

  setPaymentMethod(paymentMethod: PaymentMethodValues): void;

  getPaymentMethod<D = undefined>(def?: D): PaymentMethodValues | D;

  setLicenseTransactionJoins(joins: LicenseTransactionJoinEntity[]): void;

  getLicenseTransactionJoins<D = undefined>(def?: D): LicenseTransactionJoinEntity[] | D;

  serialize(): Record<string, string>;
}

export type TransactionEntity<T extends object = object> = Entity<TransactionProps<T>, TransactionMethods>;
