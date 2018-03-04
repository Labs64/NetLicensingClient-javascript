import Faker from '../../test/Faker';
import Context from '../../src/vo/Context';
import Product from '../../src/entities/Product';
import ProductModule from '../../src/entities/ProductModule';
import LicenseTemplate from '../../src/entities/LicenseTemplate';
import ProductService from '../../src/services/ProductService';
import ProductModuleService from '../../src/services/ProductModuleService';
import LicenseTemplateService from '../../src/services/LicenseTemplateService';


describe('services.LicenseTemplateServiceTest', () => {
    let context;
    let product;
    let productModule;
    let eachLicenseTemplate;

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

        // create product
        ProductService.create(context, product)
        // create product module
            .then(entity => ProductModuleService.create(context, entity.getProperty('number'), productModule));
    });

    beforeEach(() => {
        eachLicenseTemplate = new LicenseTemplate()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licenseType', 'TIMEVOLUME')
            .setProperty('timeVolume', 30)
            .setProperty('price', Faker.float(0, 50))
            .setProperty('currency', 'EUR')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');
    });

    afterAll(() => {
        ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', () => {
        const licenseTemplate = eachLicenseTemplate;

        LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate)
            .then((entity) => {
                expect(entity.getProperty('number')).toBe(licenseTemplate.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licenseTemplate.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licenseTemplate.getProperty('active'));
                expect(entity.getProperty('licenseType')).toBe(licenseTemplate.getProperty('licenseType'));
                expect(entity.getProperty('timeVolume')).toBe(licenseTemplate.getProperty('timeVolume'));
                expect(entity.getProperty('price')).toBe(licenseTemplate.getProperty('price'));
                expect(entity.getProperty('currency')).toBe(licenseTemplate.getProperty('currency'));
                expect(entity.getProperty('my_custom_property'))
                    .toBe(licenseTemplate.getProperty('my_custom_property'));
            });
    });

    it('check "get" method', () => {
        const licenseTemplate = eachLicenseTemplate;

        LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate)
            .then(() => LicenseTemplateService.get(context, licenseTemplate.getProperty('number')))
            .then((entity) => {
                expect(entity.getProperty('number')).toBe(licenseTemplate.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licenseTemplate.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licenseTemplate.getProperty('active'));
                expect(entity.getProperty('licenseType')).toBe(licenseTemplate.getProperty('licenseType'));
                expect(entity.getProperty('timeVolume')).toBe(licenseTemplate.getProperty('timeVolume'));
                expect(entity.getProperty('price')).toBe(licenseTemplate.getProperty('price'));
                expect(entity.getProperty('currency')).toBe(licenseTemplate.getProperty('currency'));
                expect(entity.getProperty('my_custom_property'))
                    .toBe(licenseTemplate.getProperty('my_custom_property'));
            });
    });

    it('check "list" method', () => {
        const licenseTemplate = eachLicenseTemplate;

        LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate)
            .then(() => LicenseTemplateService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
            });
    });

    it('check "update" method', () => {
        const licenseTemplate = eachLicenseTemplate;

        LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate)
            .then((entity) => {
                entity.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                entity.setProperty('price', Faker.float(100, 200));
                entity.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return LicenseTemplateService.update(context, entity.getProperty('number'), licenseTemplate);
            })
            .then((entity) => {
                expect(entity.getProperty('name')).toBe(licenseTemplate.getProperty('name'));
                expect(entity.getProperty('price')).toBe(licenseTemplate.getProperty('price'));
                expect(entity.getProperty('my_custom_property'))
                    .toBe(licenseTemplate.getProperty('my_custom_property'));
            });
    });

    it('check "delete" method', () => {
        const licenseTemplate = eachLicenseTemplate;

        LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate)
            .then(() => LicenseTemplateService.delete(context, licenseTemplate.getProperty('number')))
            .then((state) => {
                expect(state).toBe(true);
            });
    });
});
