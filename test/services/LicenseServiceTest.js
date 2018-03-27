/* eslint-disable max-len */
import axios from 'axios';
import Promise from 'bluebird';
import Faker from '../../test/Faker';
import Context from '../../src/vo/Context';
import Product from '../../src/entities/Product';
import ProductModule from '../../src/entities/ProductModule';
import LicenseTemplate from '../../src/entities/LicenseTemplate';
import Licensee from '../../src/entities/Licensee';
import License from '../../src/entities/License';
import ProductService from '../../src/services/ProductService';
import ProductModuleService from '../../src/services/ProductModuleService';
import LicenseTemplateService from '../../src/services/LicenseTemplateService';
import LicenseeService from '../../src/services/LicenseeService';
import LicenseService from '../../src/services/LicenseService';
import Constants from '../../src/Constants';
import Service from '../../src/services/Service';

describe('services.LicenseServiceTest', () => {
    let context;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    it('check "create" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', 1.0);
        

        const productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription');

        const licenseTemplate = new LicenseTemplate()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licenseType', 'TIMEVOLUME')
            .setProperty('timeVolume', 30)
            .setProperty('price', Faker.float(0, 50))
            .setProperty('currency', 'EUR');

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        const license = new License()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('startDate', 'now')
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))

            // test
            .then(() => LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license))
            .then((entity) => {
                expect(entity instanceof License).toBe(true);
                expect(entity.getProperty('number')).toBe(license.getProperty('number'));
                expect(entity.getProperty('name')).toBe(license.getProperty('name'));
                expect(entity.getProperty('active')).toBe(license.getProperty('active'));
                expect(entity.getProperty('startDate') instanceof Date).toBe(true);
                expect(entity.getProperty('startDate')).toBeTruthy();
                expect(entity.getProperty('my_custom_property')).toBe(license.getProperty('my_custom_property'));
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
            .setProperty('active', true)
            .setProperty('version', 1.0);

        const productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription');

        const licenseTemplate = new LicenseTemplate()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licenseType', 'TIMEVOLUME')
            .setProperty('timeVolume', 30)
            .setProperty('price', Faker.float(0, 50))
            .setProperty('currency', 'EUR');

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        const license = new License()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('startDate', 'now')
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))
            .then(() => LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license))

            // test
            .then(() => LicenseService.get(context, license.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof License).toBe(true);
                expect(entity.getProperty('number')).toBe(license.getProperty('number'));
                expect(entity.getProperty('name')).toBe(license.getProperty('name'));
                expect(entity.getProperty('active')).toBe(license.getProperty('active'));
                expect(entity.getProperty('startDate') instanceof Date).toBe(true);
                expect(entity.getProperty('startDate')).toBeTruthy();
                expect(entity.getProperty('my_custom_property')).toBe(license.getProperty('my_custom_property'));
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
            .setProperty('active', true)
            .setProperty('version', 1.0);

        const productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription');

        const licenseTemplate = new LicenseTemplate()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licenseType', 'TIMEVOLUME')
            .setProperty('timeVolume', 30)
            .setProperty('price', Faker.float(0, 50))
            .setProperty('currency', 'EUR');

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        const license = new License()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('startDate', 'now')
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))
            .then(() => LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license))

            // test
            .then(() => LicenseService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof License).toBe(true);
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
        LicenseService.list(context, { page: 2, items: 10 })
            .then(() => {
                expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');
            })
            // if filter parameter is string
            .then(() => LicenseService.list(context, 'page=3;items=20'))
            .then(() => {
                expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
            }));

    it('check "update" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', 1.0);

        const productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription');

        const licenseTemplate = new LicenseTemplate()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licenseType', 'TIMEVOLUME')
            .setProperty('timeVolume', 30)
            .setProperty('price', Faker.float(0, 50))
            .setProperty('currency', 'EUR');

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        const license = new License()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('startDate', 'now')
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))
            .then(() => LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license))

            // test
            .then(() => {
                license.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                license.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return LicenseService.update(context, license.getProperty('number'), null, license);
            })
            .then((entity) => {
                expect(entity instanceof License).toBe(true);
                expect(entity.getProperty('name')).toBe(license.getProperty('name'));
                expect(entity.getProperty('my_custom_property')).toBe(license.getProperty('my_custom_property'));
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
            .setProperty('active', true)
            .setProperty('version', 1.0);

        const productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription');

        const licenseTemplate = new LicenseTemplate()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licenseType', 'TIMEVOLUME')
            .setProperty('timeVolume', 30)
            .setProperty('price', Faker.float(0, 50))
            .setProperty('currency', 'EUR');

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        const license = new License()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('startDate', 'now')
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))
            .then(() => LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license))

            // test
            .then(() => LicenseService.delete(context, license.getProperty('number')))
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
