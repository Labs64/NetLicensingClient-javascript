import axios from 'axios';
import Promise from 'bluebird';
import Faker from '../../test/Faker';
import Context from '../../src/vo/Context';
import Product from '../../src/entities/Product';
import ProductModule from '../../src/entities/ProductModule';
import ProductService from '../../src/services/ProductService';
import ProductModuleService from '../../src/services/ProductModuleService';
import Constants from '../../src/Constants';
import Service from '../../src/services/Service';

describe('services.ProductModuleServiceTest', () => {
    let context;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    it('check "create" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', Faker.boolean())
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        const productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))

            // test
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then((entity) => {
                expect(entity instanceof ProductModule).toBe(true);
                expect(entity.getProperty('number')).toBe(productModule.getProperty('number'));
                expect(entity.getProperty('name')).toBe(productModule.getProperty('name'));
                expect(entity.getProperty('active')).toBe(productModule.getProperty('active'));
                expect(entity.getProperty('licensingModel')).toBe(productModule.getProperty('licensingModel'));
                expect(entity.getProperty('my_custom_property')).toBe(productModule.getProperty('my_custom_property'));
            })

            // cleanup
            .finally(() => axios({
                url: `${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.getProperty('number')}`,
                method: 'delete',
                validateStatus() {
                    return true;
                },
                auth: {
                    username: context.getUsername(),
                    password: context.getPassword(),
                },
                params: {
                    forceCascade: true,
                },
            }));
    });

    it('check "get" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', Faker.boolean())
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        const productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))

            // test
            .then(() => ProductModuleService.get(context, productModule.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof ProductModule).toBe(true);
                expect(entity.getProperty('number')).toBe(productModule.getProperty('number'));
                expect(entity.getProperty('name')).toBe(productModule.getProperty('name'));
                expect(entity.getProperty('active')).toBe(productModule.getProperty('active'));
                expect(entity.getProperty('licensingModel')).toBe(productModule.getProperty('licensingModel'));
                expect(entity.getProperty('my_custom_property')).toBe(productModule.getProperty('my_custom_property'));
            })

            // cleanup
            .finally(() => axios({
                url: `${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.getProperty('number')}`,
                method: 'delete',
                validateStatus() {
                    return true;
                },
                auth: {
                    username: context.getUsername(),
                    password: context.getPassword(),
                },
                params: {
                    forceCascade: true,
                },
            }));
    });

    it('check "list" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', Faker.boolean())
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        const productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))

            // test
            .then(() => ProductModuleService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof ProductModule).toBe(true);
            })

            // cleanup
            .finally(() => axios({
                url: `${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.getProperty('number')}`,
                method: 'delete',
                validateStatus() {
                    return true;
                },
                auth: {
                    username: context.getUsername(),
                    password: context.getPassword(),
                },
                params: {
                    forceCascade: true,
                },
            }));
    });

    it('check "filter" in list method', () =>
        // test
        // if filter parameter is object
        ProductModuleService.list(context, { page: 2, items: 10 })
            .then(() => {
                expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');
            })
            // if filter parameter is string
            .then(() => ProductModuleService.list(context, 'page=3;items=20'))
            .then(() => {
                expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
            }));

    it('check "update" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', Faker.boolean())
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        const productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))

            // test
            .then(() => {
                productModule.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                productModule.setProperty('licensingModel', 'TryAndBuy');
                productModule.setProperty('licenseTemplate', 'TIMEVOLUME');
                productModule.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return ProductModuleService.update(context, productModule.getProperty('number'), productModule);
            })
            .then((entity) => {
                expect(entity instanceof ProductModule).toBe(true);
                expect(entity.getProperty('name')).toBe(productModule.getProperty('name'));
                expect(entity.getProperty('licensingModel')).toBe(productModule.getProperty('licensingModel'));
                expect(entity.getProperty('licenseTemplate')).toBe(productModule.getProperty('licenseTemplate'));
                expect(entity.getProperty('my_custom_property')).toBe(productModule.getProperty('my_custom_property'));
            })

            // cleanup
            .finally(() => axios({
                url: `${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.getProperty('number')}`,
                method: 'delete',
                validateStatus() {
                    return true;
                },
                auth: {
                    username: context.getUsername(),
                    password: context.getPassword(),
                },
                params: {
                    forceCascade: true,
                },
            }));
    });

    it('check "delete" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', Faker.boolean())
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        const productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))

            // test
            .then(() => ProductModuleService.delete(context, productModule.getProperty('number')))
            .then((state) => {
                expect(state).toBe(true);
            })

            // cleanup
            .finally(() => axios({
                url: `${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.getProperty('number')}`,
                method: 'delete',
                validateStatus() {
                    return true;
                },
                auth: {
                    username: context.getUsername(),
                    password: context.getPassword(),
                },
                params: {
                    forceCascade: true,
                },
            }));
    });
});
