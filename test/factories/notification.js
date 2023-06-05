import faker from 'faker';
import Notification from '@/entities/Notification';
import factory from './factory';

export default factory((data = {}) => new Notification({
    number: Math.random().toString(36).substr(2, 9),
    name: faker.lorem.words(),
    active: faker.datatype.boolean(),
    protocol: Math.round(Math.random()) ? 'WEBHOOK' : 'EMAIL',
    events: faker.hacker.verb(),
    payload: faker.lorem.sentence(),
    endpoint: faker.internet.url(),
    custom_property: faker.lorem.words(),

    ...data,
}));
