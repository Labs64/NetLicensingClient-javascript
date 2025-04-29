import TransactionStatusEnum from '@/constants/TransactionStatus';

export type TransactionStatusKeys = keyof typeof TransactionStatusEnum;
export type TransactionStatus = (typeof TransactionStatusEnum)[TransactionStatusKeys];
