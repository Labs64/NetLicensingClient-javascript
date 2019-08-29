import faker from 'faker';
import factory from './factory';

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

export default factory(() => ({
    number: randomItem(['PAYPAL', 'PAYPAL_SANDBOX', 'STRIPE']),
    active: faker.random.boolean(),
}));
