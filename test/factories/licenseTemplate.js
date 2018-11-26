import faker from 'faker';
import factory from './factory';

export default factory(() => ({
    number: Math.random().toString(36).substr(2, 9),
    name: faker.lorem.words(),
    active: faker.random.boolean(),
    licenseType: 'TIMEVOLUME',
    timeVolume: faker.random.number({ min: 1, max: 10 }),
    price: parseFloat(faker.commerce.price()),
    currency: 'EUR',
    custom_property: faker.lorem.words(),
}));
