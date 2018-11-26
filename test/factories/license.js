import faker from 'faker';
import factory from './factory';

export default factory(() => ({
    number: Math.random().toString(36).substr(2, 9),
    name: faker.name.findName(),
    active: faker.random.boolean(),
    custom_property: faker.lorem.words(),
}));
