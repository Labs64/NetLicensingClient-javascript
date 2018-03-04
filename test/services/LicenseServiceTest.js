/* eslint-disable max-len */
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


describe('LicenseServiceTest', () => {
    let context;
    let product;
    let productModule;
    let licenseTemplate;
    let licensee;
    let license;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');

        product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        productModule = new ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription');

        licenseTemplate = new LicenseTemplate()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licenseType', 'TIMEVOLUME')
            .setProperty('timeVolume', 30)
            .setProperty('price', Faker.float(0, 50))
            .setProperty('currency', 'EUR');

        licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        ProductService.create(context, product)
            .then(entity => ProductModuleService.create(context, entity.getProperty('number'), productModule))
            .then(entity => LicenseTemplateService.create(context, entity.getProperty('number'), licenseTemplate))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee));
    });

    beforeEach(() => {
        license = new License()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('startDate', 'now')
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');
    });

    afterAll(() => {
        ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', () => {
        LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license)
            .then((entity) => {
                expect(entity instanceof License).toBe(true);
                expect(entity.getProperty('number')).toBe(license.getProperty('number'));
                expect(entity.getProperty('name')).toBe(license.getProperty('name'));
                expect(entity.getProperty('active')).toBe(license.getProperty('active'));
                expect(entity.getProperty('startDate') instanceof Date).toBe(true);
                expect(entity.getProperty('startDate')).toBeTruthy();
                expect(entity.getProperty('my_custom_property')).toBe(license.getProperty('my_custom_property'));
            });
    });

    it('check "get" method', () => {
        LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license)
            .then(entity => LicenseService.get(context, entity.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof License).toBe(true);
                expect(entity.getProperty('number')).toBe(license.getProperty('number'));
                expect(entity.getProperty('name')).toBe(license.getProperty('name'));
                expect(entity.getProperty('active')).toBe(license.getProperty('active'));
                expect(entity.getProperty('startDate') instanceof Date).toBe(true);
                expect(entity.getProperty('startDate')).toBeTruthy();
                expect(entity.getProperty('my_custom_property')).toBe(license.getProperty('my_custom_property'));
            });
    });

    it('check "list" method', () => {
        LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license)
            .then(() => LicenseService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof License).toBe(true);
            });
    });

    it('check "update" method', () => {
        LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license)
            .then(() => {
                license.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                license.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return LicenseService.update(context, license.getProperty('number'), null, license);
            })
            .then((entity) => {
                expect(entity instanceof License).toBe(true);
                expect(entity.getProperty('name')).toBe(license.getProperty('name'));
                expect(entity.getProperty('my_custom_property')).toBe(license.getProperty('my_custom_property'));
            });
    });

    it('check "delete" method', () => {
        LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license)
            .then(entity => LicenseService.delete(context, entity.getProperty('number')))
            .then((state) => {
                expect(state).toBe(true);
            });
    });
});
