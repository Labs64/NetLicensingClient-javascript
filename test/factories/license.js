import faker from 'faker';
import License from '@/entities/License';
import factory from './factory';

export default factory((data = {}) => new License({
    number: Math.random().toString(36).substr(2, 9),
    name: faker.name.findName(),
    active: faker.random.boolean(),
    custom_property: faker.lorem.words(),

    ...data,
}));
