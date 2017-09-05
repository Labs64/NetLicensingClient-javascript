describe('LicenseServiceTest', function () {
    var context, promise, product, productModule, licenseTemplate, licensee, license;
    
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
            .setProperty('currency', 'EUR');

        licensee = new Nlic.Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        license = new Nlic.License()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('startDate', 'now')
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        promise = Promise.resolve('LicenseServiceTest')
        //create product
            .then(function () {
                return Nlic.ProductService.create(context, product)
            })
            .then(function (entity) {
                return Nlic.ProductModuleService.create(context, entity.getProperty('number'), productModule)
            })
            .then(function (entity) {
                return Nlic.LicenseTemplateService.create(context, entity.getProperty('number'), licenseTemplate);
            })
            .then(function (entity) {
                return Nlic.LicenseeService.create(context, product.getProperty('number'), licensee);
            });
    });

    afterAll(function () {
        Nlic.ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', function () {
        return promise
            .then(function () {
                return Nlic.LicenseService.create(context, licensee.getProperty('number'), licenseTemplate.getProperty('number'), null, license);
            })
            .then(function (entity) {
                expect(entity instanceof Nlic.License).toBe(true);

                expect(entity.getProperty('number')).toBe(license.getProperty('number'));
                expect(entity.getProperty('name')).toBe(license.getProperty('name'));
                expect(entity.getProperty('active')).toBe(license.getProperty('active'));
                expect(entity.getProperty('startDate') instanceof Date).toBe(true);
                expect(entity.getProperty('startDate')).toBeTruthy();
                expect(entity.getProperty('my_custom_property')).toBe(license.getProperty('my_custom_property'));
            });
    });

    it('check "get" method', function () {
        return promise
            .then(function () {
                return Nlic.LicenseService.get(context, license.getProperty('number'));
            })
            .then(function (entity) {
                expect(entity instanceof Nlic.License).toBe(true);

                expect(entity.getProperty('number')).toBe(license.getProperty('number'));
                expect(entity.getProperty('name')).toBe(license.getProperty('name'));
                expect(entity.getProperty('active')).toBe(license.getProperty('active'));
                expect(entity.getProperty('startDate') instanceof Date).toBe(true);
                expect(entity.getProperty('startDate')).toBeTruthy();
                expect(entity.getProperty('my_custom_property')).toBe(license.getProperty('my_custom_property'));
            });
    });

    it('check "list" method', function () {
        return Nlic.LicenseService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Nlic.License).toBe(true);
            });
    });

    it('check "update" method', function () {
        return promise
            .then(function () {
                license.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                license.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return Nlic.LicenseService.update(context, license.getProperty('number'), null, license);
            }).then(function (entity) {
                expect(entity instanceof Nlic.License).toBe(true);

                expect(entity.getProperty('name')).toBe(license.getProperty('name'));
                expect(entity.getProperty('my_custom_property')).toBe(license.getProperty('my_custom_property'));
            });
    });

    it('check "delete" method', function () {
        return promise
            .then(function () {
                return Nlic.LicenseService.delete(context, license.getProperty('number'));
            })
            .then(function (state) {
                expect(state).toBe(true);
            });
    });
});