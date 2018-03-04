import Faker from '../../test/Faker';
import Context from '../../src/vo/Context';
import Product from '../../src/entities/Product';
import ProductModule from '../../src/entities/ProductModule';
import ProductService from '../../src/services/ProductService';
import ProductModuleService from '../../src/services/ProductModuleService';

describe('services.ProductModuleServiceTest', () => {
    let context;
    let product;
    let eachProductModule;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');

        product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', Faker.boolean())
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());
    });

    beforeEach(() => {
        eachProductModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');
    });

    afterAll(() => {
        ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', () => {
        const productModule = eachProductModule;

        ProductModuleService.create(context, product.getProperty('number'), productModule)
            .then((entity) => {
                expect(entity instanceof ProductModule.class).toBe(true);
                expect(entity.getProperty('number')).toBe(productModule.getProperty('number'));
                expect(entity.getProperty('name')).toBe(productModule.getProperty('name'));
                expect(entity.getProperty('active')).toBe(productModule.getProperty('active'));
                expect(entity.getProperty('licensingModel')).toBe(productModule.getProperty('licensingModel'));
                expect(entity.getProperty('my_custom_property')).toBe(productModule.getProperty('my_custom_property'));
            });
    });

    it('check "get" method', () => {
        const productModule = eachProductModule;

        ProductModuleService.create(context, product.getNumber(), productModule)
            .then(() => ProductModuleService.get(context, productModule.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof ProductModule.class).toBe(true);
                expect(entity.getProperty('number')).toBe(productModule.getProperty('number'));
                expect(entity.getProperty('name')).toBe(productModule.getProperty('name'));
                expect(entity.getProperty('active')).toBe(productModule.getProperty('active'));
                expect(entity.getProperty('licensingModel')).toBe(productModule.getProperty('licensingModel'));
                expect(entity.getProperty('my_custom_property')).toBe(productModule.getProperty('my_custom_property'));
            });
    });

    it('check "list" method', () => {
        const productModule = eachProductModule;

        ProductModuleService.create(context, product.getNumber(), productModule)
            .then(() => ProductModuleService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof ProductModule.class).toBe(true);
            });
    });

    it('check "update" method', () => {
        const productModule = eachProductModule;

        ProductModuleService.create(context, product.getNumber(), productModule)
            .then(() => {
                productModule.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                productModule.setProperty('licensingModel', 'TryAndBuy');
                productModule.setProperty('licenseTemplate', 'TIMEVOLUME');
                productModule.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return ProductModuleService.update(context, productModule.getProperty('number'), productModule);
            })
            .then((entity) => {
                expect(entity instanceof ProductModule.class).toBe(true);
                expect(entity.getProperty('name')).toBe(productModule.getProperty('name'));
                expect(entity.getProperty('licensingModel')).toBe(productModule.getProperty('licensingModel'));
                expect(entity.getProperty('licenseTemplate')).toBe(productModule.getProperty('licenseTemplate'));
                expect(entity.getProperty('my_custom_property')).toBe(productModule.getProperty('my_custom_property'));
            });
    });

    it('check "delete" method', () => {
        const productModule = eachProductModule;

        ProductModuleService.create(context, product.getNumber(), productModule)
            .then(() => ProductModuleService.delete(context, productModule.getProperty('number')))
            .then((state) => {
                expect(state).toBe(true);
            });
    });
});
