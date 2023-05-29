import faker from 'faker';
import Bundle from '@/entities/Bundle';
import factory from './factory';

export default factory((data = {}) => new Bundle({
    number: Math.random().toString(36).substr(2, 9),
    name: faker.lorem.words(),
    active: faker.datatype.boolean(),
    custom_property: faker.lorem.words(),

    ...data,
}));
