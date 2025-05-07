import TransactionStatus from '@/constants/TransactionStatus';

export type TransactionStatusKeys = keyof typeof TransactionStatus;
export type TransactionStatusValues = (typeof TransactionStatus)[TransactionStatusKeys];
