import PaymentMethod from '@/constants/PaymentMethodEnum';

export type PaymentMethodKeys = keyof typeof PaymentMethod;
export type PaymentMethodEnum = (typeof PaymentMethod)[PaymentMethodKeys];
