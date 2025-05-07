import PaymentMethod from '@/constants/PaymentMethodEnum';

export type PaymentMethodKeys = keyof typeof PaymentMethod;
export type PaymentMethodValues = (typeof PaymentMethod)[PaymentMethodKeys];
