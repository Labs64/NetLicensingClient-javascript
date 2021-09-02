import faker from 'faker';
import PaymentMethod from '@/entities/PaymentMethod';
import factory from './factory';

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

export default factory((data = {}) => new PaymentMethod({
    number: randomItem(['PAYPAL', 'PAYPAL_SANDBOX', 'STRIPE']),
    active: faker.random.boolean(),

    ...data,
}));
