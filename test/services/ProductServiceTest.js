import axios from 'axios';
import Promise from 'bluebird';
import Faker from '../../test/Faker';
import Context from '../../src/vo/Context';
import Product from '../../src/entities/Product';
import ProductDiscount from '../../src/entities/ProductDiscount';
import ProductService from '../../src/services/ProductService';
import Constants from '../../src/Constants';


describe('services.ProductServiceTest', () => {
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
            .setProperty('licenseeAutoCreate', Faker.boolean())
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY')

            .addDiscount(new ProductDiscount()
                .setProperty('totalPrice', Faker.int(10, 20))
                .setProperty('currency', 'EUR')
                .setProperty('amountFix', Faker.int(1, 5)))

            .addDiscount(new ProductDiscount()
                .setProperty('totalPrice', Faker.int(30, 40))
                .setProperty('currency', 'EUR')
                .setProperty('amountPercent', Faker.int(1, 5)));

        // test
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then((entity) => {
                expect(entity instanceof Product).toBe(true);
                expect(entity.getProperty('number')).toBe(product.getProperty('number'));
                expect(entity.getProperty('name')).toBe(product.getProperty('name'));
                expect(entity.getProperty('active')).toBe(product.getProperty('active'));
                expect(entity.getProperty('version')).toBe(product.getProperty('version'));
                expect(entity.getProperty('description')).toBe(product.getProperty('description'));
                expect(entity.getProperty('licensingInfo')).toBe(product.getProperty('licensingInfo'));
                expect(entity.getProperty('licenseeAutoCreate')).toBe(product.getProperty('licenseeAutoCreate'));
                expect(entity.getProductDiscounts().length).toBe(2);
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
            .setProperty('licenseeAutoCreate', Faker.boolean())
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY')

            .addDiscount(new ProductDiscount()
                .setProperty('totalPrice', Faker.int(10, 20))
                .setProperty('currency', 'EUR')
                .setProperty('amountFix', Faker.int(1, 5)))

            .addDiscount(new ProductDiscount()
                .setProperty('totalPrice', Faker.int(30, 40))
                .setProperty('currency', 'EUR')
                .setProperty('amountPercent', Faker.int(1, 5)));

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))

            // test
            .then(() => ProductService.get(context, product.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof Product).toBe(true);
                expect(entity.getProperty('number')).toBe(product.getProperty('number'));
                expect(entity.getProperty('name')).toBe(product.getProperty('name'));
                expect(entity.getProperty('active')).toBe(product.getProperty('active'));
                expect(entity.getProperty('version')).toBe(product.getProperty('version'));
                expect(entity.getProperty('description')).toBe(product.getProperty('description'));
                expect(entity.getProperty('licensingInfo')).toBe(product.getProperty('licensingInfo'));
                expect(entity.getProperty('licenseeAutoCreate')).toBe(product.getProperty('licenseeAutoCreate'));
                expect(entity.getProperty('my_custom_property')).toBe(product.getProperty('my_custom_property'));
                expect(entity.getProductDiscounts().length).toBe(2);
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
            .setProperty('licenseeAutoCreate', Faker.boolean())
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))

            // test
            .then(() => ProductService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Product).toBe(true);
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

    it('check "update" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', Faker.boolean())
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean())
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY')

            .addDiscount(new ProductDiscount()
                .setProperty('totalPrice', Faker.int(10, 20))
                .setProperty('currency', 'EUR')
                .setProperty('amountFix', Faker.int(1, 5)))

            .addDiscount(new ProductDiscount()
                .setProperty('totalPrice', Faker.int(30, 40))
                .setProperty('currency', 'EUR')
                .setProperty('amountPercent', Faker.int(1, 5)));

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))

            // test
            .then((entity) => {
                product.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                product.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                product.addDiscount(new ProductDiscount()
                    .setProperty('totalPrice', Faker.int(50, 60))
                    .setProperty('currency', 'EUR')
                    .setProperty('amountFix', Faker.int(1, 5)));

                return ProductService.update(context, entity.getProperty('number'), product);
            })
            .then((entity) => {
                expect(entity instanceof Product).toBe(true);
                expect(entity.getProperty('name')).toBe(product.getProperty('name'));
                expect(entity.getProperty('my_custom_property')).toBe(product.getProperty('my_custom_property'));
                expect(entity.getProductDiscounts().length).toBe(3);
                return entity;
            })
            .then((entity) => {
                const discounts = entity.getProductDiscounts();
                discounts.shift();
                product.setProductDiscounts(discounts);
                return ProductService.update(context, product.getProperty('number'), product);
            })
            .then((entity) => {
                expect(entity.getProductDiscounts().length).toBe(2);
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
            .setProperty('licenseeAutoCreate', Faker.boolean())
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))

            // test
            .then(entity => ProductService.delete(context, entity.getProperty('number')))
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
