import faker from 'faker';
import ProductModule from '@/entities/ProductModule';
import factory from './factory';

export default factory((data = {}) => new ProductModule({
    number: Math.random().toString(36).substr(2, 9),
    name: faker.lorem.words(),
    active: faker.datatype.boolean(),
    licensingModel: 'Subscription',
    custom_property: faker.lorem.words(),

    ...data,
}));
