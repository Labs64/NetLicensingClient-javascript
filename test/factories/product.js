import faker from 'faker';
import factory from './factory';

export default factory(() => ({
    number: Math.random().toString(36).substr(2, 9),
    name: faker.lorem.words(),
    active: faker.random.boolean(),
    version: faker.system.semver(),
    description: faker.lorem.sentence(),
    licensingInfo: faker.lorem.sentence(),
    licenseeAutoCreate: faker.random.boolean(),
    custom_property: faker.lorem.words(),
}));
