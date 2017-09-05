describe('LicenseTemplateServiceTest', function () {
    var context, promise, product, productModule, licenseTemplate;

    beforeAll(function () {
        context = new Nlic.Context().setUsername('Demo').setPassword('demo');

        product = new Nlic.Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        productModule = new Nlic.ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription');

        licenseTemplate = new Nlic.LicenseTemplate()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licenseType', 'TIMEVOLUME')
            .setProperty('timeVolume', 30)
            .setProperty('price', Faker.float(0, 50))
            .setProperty('currency', 'EUR')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        promise = Promise.resolve('LicenseTemplateServiceTest')
            //create product
            .then(function(){
                return Nlic.ProductService.create(context, product);
            })
            //create product module
            .then(function(entity){
                return Nlic.ProductModuleService.create(context, entity.getProperty('number'), productModule);
            });
    });

    afterAll(function () {
        Nlic.ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', function () {
        return promise
            .then(function () {
                return Nlic.LicenseTemplateService.create(context, productModule.getProperty('number'), licenseTemplate);
            })
            .then(function (entity) {
                expect(entity instanceof Nlic.LicenseTemplate).toBe(true);

                expect(entity.getProperty('number')).toBe(licenseTemplate.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licenseTemplate.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licenseTemplate.getProperty('active'));
                expect(entity.getProperty('licenseType')).toBe(licenseTemplate.getProperty('licenseType'));
                expect(entity.getProperty('timeVolume')).toBe(licenseTemplate.getProperty('timeVolume'));
                expect(entity.getProperty('price')).toBe(licenseTemplate.getProperty('price'));
                expect(entity.getProperty('currency')).toBe(licenseTemplate.getProperty('currency'));
                expect(entity.getProperty('my_custom_property')).toBe(licenseTemplate.getProperty('my_custom_property'));
            });
    });

    it('check "get" method', function () {
        return promise
            .then(function () {
                return Nlic.LicenseTemplateService.get(context, licenseTemplate.getProperty('number'));
            })
            .then(function (entity) {
                expect(entity instanceof Nlic.LicenseTemplate).toBe(true);

                expect(entity.getProperty('number')).toBe(licenseTemplate.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licenseTemplate.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licenseTemplate.getProperty('active'));
                expect(entity.getProperty('licenseType')).toBe(licenseTemplate.getProperty('licenseType'));
                expect(entity.getProperty('timeVolume')).toBe(licenseTemplate.getProperty('timeVolume'));
                expect(entity.getProperty('price')).toBe(licenseTemplate.getProperty('price'));
                expect(entity.getProperty('currency')).toBe(licenseTemplate.getProperty('currency'));
                expect(entity.getProperty('my_custom_property')).toBe(licenseTemplate.getProperty('my_custom_property'));
            });
    });

    it('check "list" method', function () {
        return Nlic.LicenseTemplateService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Nlic.LicenseTemplate).toBe(true);
            });
    });

    it('check "update" method', function () {
        return promise
            .then(function () {
                licenseTemplate.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                licenseTemplate.setProperty('price', Faker.float(100, 200));
                licenseTemplate.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return Nlic.LicenseTemplateService.update(context, licenseTemplate.getProperty('number'), licenseTemplate);
            }).then(function (entity) {
                expect(entity instanceof Nlic.LicenseTemplate).toBe(true);

                expect(entity.getProperty('name')).toBe(licenseTemplate.getProperty('name'));
                expect(entity.getProperty('price')).toBe(licenseTemplate.getProperty('price'));
                expect(entity.getProperty('my_custom_property')).toBe(licenseTemplate.getProperty('my_custom_property'));
            });
    });

    it('check "delete" method', function () {
        return promise
            .then(function () {
                return Nlic.LicenseTemplateService.delete(context, licenseTemplate.getProperty('number'));
            })
            .then(function (state) {
                expect(state).toBe(true);
            });
    });
});