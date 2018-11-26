import faker from 'faker';
import factory from './factory';

export default factory(() => ({
    number: faker.random.uuid(),
    source: 'SHOP',
    status: 'PENDING',
}));
