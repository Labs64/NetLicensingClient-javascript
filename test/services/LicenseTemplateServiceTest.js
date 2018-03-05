import axios from 'axios';
import Faker from '../../test/Faker';
import Context from '../../src/vo/Context';
import Product from '../../src/entities/Product';
import ProductModule from '../../src/entities/ProductModule';
import LicenseTemplate from '../../src/entities/LicenseTemplate';
import ProductService from '../../src/services/ProductService';
import ProductModuleService from '../../src/services/ProductModuleService';
import LicenseTemplateService from '../../src/services/LicenseTemplateService';
import Constants from '../../src/Constants';


describe('services.LicenseTemplateServiceTest', () => {
    let context;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    it('check "create" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

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
            .setProperty('currency', 'EUR')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return ProductService.create(context, product)
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))

            // test
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))
            .then((entity) => {
                expect(entity instanceof LicenseTemplate).toBe(true);
                expect(entity.getProperty('number')).toBe(licenseTemplate.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licenseTemplate.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licenseTemplate.getProperty('active'));
                expect(entity.getProperty('licenseType')).toBe(licenseTemplate.getProperty('licenseType'));
                expect(entity.getProperty('timeVolume')).toBe(licenseTemplate.getProperty('timeVolume'));
                expect(entity.getProperty('price')).toBe(licenseTemplate.getProperty('price'));
                expect(entity.getProperty('currency')).toBe(licenseTemplate.getProperty('currency'));
                expect(entity.getProperty('my_custom_property'))
                    .toBe(licenseTemplate.getProperty('my_custom_property'));
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
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

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
            .setProperty('currency', 'EUR')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return ProductService.create(context, product)
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))

            // test
            .then(() => LicenseTemplateService.get(context, licenseTemplate.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof LicenseTemplate).toBe(true);
                expect(entity.getProperty('number')).toBe(licenseTemplate.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licenseTemplate.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licenseTemplate.getProperty('active'));
                expect(entity.getProperty('licenseType')).toBe(licenseTemplate.getProperty('licenseType'));
                expect(entity.getProperty('timeVolume')).toBe(licenseTemplate.getProperty('timeVolume'));
                expect(entity.getProperty('price')).toBe(licenseTemplate.getProperty('price'));
                expect(entity.getProperty('currency')).toBe(licenseTemplate.getProperty('currency'));
                expect(entity.getProperty('my_custom_property'))
                    .toBe(licenseTemplate.getProperty('my_custom_property'));
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
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

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
            .setProperty('currency', 'EUR')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return ProductService.create(context, product)
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))

            // test
            .then(() => LicenseTemplateService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof LicenseTemplate).toBe(true);
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
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

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
            .setProperty('currency', 'EUR')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return ProductService.create(context, product)
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))

            // test
            .then((entity) => {
                entity.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                entity.setProperty('price', Faker.float(100, 200));
                entity.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return LicenseTemplateService.update(context, entity.getProperty('number'), licenseTemplate);
            })
            .then((entity) => {
                expect(entity instanceof LicenseTemplate).toBe(true);
                expect(entity.getProperty('name')).toBe(licenseTemplate.getProperty('name'));
                expect(entity.getProperty('price')).toBe(licenseTemplate.getProperty('price'));
                expect(entity.getProperty('my_custom_property'))
                    .toBe(licenseTemplate.getProperty('my_custom_property'));
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
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

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
            .setProperty('currency', 'EUR')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        // setup
        return ProductService.create(context, product)
            .then(() => ProductModuleService.create(context, product.getProperty('number'), productModule))
            .then(() => LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate))

            // test
            .then(() => LicenseTemplateService.delete(context, licenseTemplate.getProperty('number')))
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
