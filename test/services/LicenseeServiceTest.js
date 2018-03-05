/* eslint-disable max-len */
import axios from 'axios';
import Promise from 'bluebird';
import Faker from '../../test/Faker';
import Context from '../../src/vo/Context';
import ValidationParameters from '../../src/vo/ValidationParameters';
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
import ValidationResults from '../../src/vo/ValidationResults';
import Constants from '../../src/Constants';
import Service from '../../src/services/Service';


describe('services.LicenseeServiceTest', () => {
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

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))

            // test
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))
            .then((entity) => {
                expect(entity instanceof Licensee).toBe(true);
                expect(entity.getProperty('number')).toBe(licensee.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licensee.getProperty('active'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
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

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');


        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))

            // test
            .then(() => LicenseeService.get(context, licensee.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof Licensee).toBe(true);
                expect(entity.getProperty('number')).toBe(licensee.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licensee.getProperty('active'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
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

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))

            // test
            .then(() => LicenseeService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Licensee).toBe(true);
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
            .setProperty('active', true)
            .setProperty('version', 1.0);

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');


        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))

            // test
            .then(() => {
                licensee.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                licensee.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return LicenseeService.update(context, licensee.getProperty('number'), licensee);
            })
            .then((entity) => {
                expect(entity instanceof Licensee).toBe(true);
                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
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

    it('check "validate" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', 1.0);

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

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

        const license = new License()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('startDate', 'now')
            .setProperty('active', true);

        const validationParameters = new ValidationParameters()
            .setLicenseeName(licensee.getProperty('name'))
            .setProductNumber(product.getProperty('number'));

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))
            .then(() => LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license))

            // test
            .then(() => LicenseeService.validate(context, licensee.getProperty('number'), validationParameters))
            .then((validationResults) => {
                expect(validationResults instanceof ValidationResults).toBe(true);
                expect(validationResults.getTtl() instanceof Date).toBe(true);
                expect(validationResults.getProductModuleValidation(productModule.getProperty('number')).valid).toBe(true);
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

    it('check "transfer" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', 1.0);

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        const transferToLicensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))

            // test
            .then(() => LicenseeService.create(context, product.getProperty('number'), transferToLicensee))
            .then(() => {
                licensee.setProperty('markedForTransfer', true);
                return LicenseeService.update(context, licensee.getProperty('number'), licensee);
            })
            .then(() => LicenseeService.transfer(context, transferToLicensee.getProperty('number'), licensee.getProperty('number')))
            .then(() => {
                expect(Service.getLastHttpRequestInfo().status).toBe(204);
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

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))

            // test
            .then(() => LicenseeService.delete(context, licensee.getProperty('number'), true))
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
