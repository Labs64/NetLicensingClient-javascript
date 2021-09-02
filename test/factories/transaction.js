import faker from 'faker';
import Transaction from '@/entities/Transaction';
import factory from './factory';

export default factory((data = {}) => new Transaction({
    number: faker.random.uuid(),
    source: 'SHOP',
    status: 'PENDING',

    ...data,
}));
