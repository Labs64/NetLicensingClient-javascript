import faker from 'faker';
import factory from './factory';

export default factory(() => ({
    productModuleNumber: Math.random().toString(36).substr(2, 9),
    valid: faker.random.boolean(),
    expires: faker.date.future(),
    licensingModel: 'Subscription',
}));
