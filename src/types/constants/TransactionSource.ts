import TransactionSource from '@/constants/TransactionSource';

export type TransactionSourceKeys = keyof typeof TransactionSource;
export type TransactionSourceValues = (typeof TransactionSource)[TransactionSourceKeys];
