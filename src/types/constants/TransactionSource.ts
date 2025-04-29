import TransactionSourceEnum from '@/constants/TransactionSource';

export type TransactionSourceKeys = keyof typeof TransactionSourceEnum;
export type TransactionSource = (typeof TransactionSourceEnum)[TransactionSourceKeys];
