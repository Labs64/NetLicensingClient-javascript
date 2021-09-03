import faker from 'faker';
import ProductDiscount from '@/entities/ProductDiscount';
import factory from './factory';

export const fix = factory((data = {}) => new ProductDiscount({
    totalPrice: faker.commerce.price(50),
    currency: 'EUR',
    amountFix: faker.datatype.number({ min: 1, max: 10 }),

    ...data,
}));

export const percent = factory((data = {}) => new ProductDiscount({
    totalPrice: faker.commerce.price(50),
    currency: 'EUR',
    amountPercent: faker.datatype.number({ min: 1, max: 10 }),

    ...data,
}));

export default {
    fix,
    percent,
};
