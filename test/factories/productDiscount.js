import faker from 'faker';
import factory from './factory';

export const fix = factory(() => ({
    totalPrice: faker.commerce.price(50),
    currency: 'EUR',
    amountFix: faker.random.number({ min: 1, max: 10 }),
}));

export const percent = factory(() => ({
    totalPrice: faker.commerce.price(50),
    currency: 'EUR',
    amountPercent: faker.random.number({ min: 1, max: 10 }),
}));

export default {
    fix,
    percent,
};
