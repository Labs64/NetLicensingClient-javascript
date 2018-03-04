/* eslint-disable max-len */
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


describe('services.LicenseeServiceTest', () => {
    let context;
    let product;
    let licensee;

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

        ProductService.create(context, product);
    });

    beforeEach(() => {
        licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');
    });

    afterAll(() => {
        ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', () => {
        LicenseeService.create(context, product.getProperty('number'), licensee)
            .then((entity) => {
                expect(entity.getProperty('number')).toBe(licensee.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licensee.getProperty('active'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
            });
    });

    it('check "get" method', () => {
        LicenseeService.create(context, product.getProperty('number'), licensee)
            .then(entity => LicenseeService.get(context, entity.getProperty('number')))
            .then((entity) => {
                expect(entity.getProperty('number')).toBe(licensee.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licensee.getProperty('active'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
            });
    });

    it('check "list" method', () => {
        LicenseeService.create(context, product.getProperty('number'), licensee)
            .then(() => LicenseeService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
            });
    });

    it('check "update" method', () => {
        LicenseeService.create(context, product.getProperty('number'), licensee)
            .then(() => {
                licensee.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                licensee.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return LicenseeService.update(context, licensee.getProperty('number'), licensee);
            })
            .then((entity) => {
                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
            });
    });

    it('check "validate" method', () => {
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

        ProductModuleService.create(context, product.getProperty('number'), productModule)
            .then(entity => LicenseTemplateService.create(context, entity.getProperty('number'), licenseTemplate))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))
            .then(entity => LicenseService.create(context, licensee.getProperty('number'), entity.getProperty('number'), null, license))
            .then(() => LicenseeService.validate(context, licensee.getProperty('number'), validationParameters))
            .then((validationResults) => {
                expect(validationResults.getTtl() instanceof Date).toBe(true);
                expect(validationResults.getProductModuleValidation(productModule.getProperty('number')).valid).toBe(true);
            });
    });


    it('check "transfer" method', () => {
        const transferToLicensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        LicenseeService.create(context, product.getProperty('number'), licensee)
            .then(() => LicenseeService.create(context, product.getProperty('number'), transferToLicensee))
            .then(() => {
                licensee.setProperty('markedForTransfer', true);
                return LicenseeService.update(context, licensee.getProperty('number'), licensee);
            })
            .then(() => LicenseeService.transfer(context, transferToLicensee.getProperty('number'), licensee.getProperty('number')));
    });

    it('check "delete" method', () => {
        LicenseeService.create(context, product.getProperty('number'), licensee)
            .then(() => LicenseeService.delete(context, licensee.getProperty('number'), true))
            .then((state) => {
                expect(state).toBe(true);
            });
    });
});
