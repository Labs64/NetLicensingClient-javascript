describe('LicenseeServiceTest', function () {
    var context, promise, product, licensee;

    beforeAll(function () {
        context = new NetLicensing.Context().setUsername('Demo').setPassword('demo');

        product = new NetLicensing.Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        licensee = new NetLicensing.Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        promise = Promise.resolve('LicenseeServiceTest')
        //create product
            .then(function () {
                return NetLicensing.ProductService.create(context, product)
            });
    });

    afterAll(function () {
        NetLicensing.ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', function () {
        return promise
            .then(function () {
                return NetLicensing.LicenseeService.create(context, product.getProperty('number'), licensee);
            })
            .then(function (entity) {
                expect(entity instanceof NetLicensing.Licensee).toBe(true);

                expect(entity.getProperty('number')).toBe(licensee.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licensee.getProperty('active'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
            });
    });

    it('check "get" method', function () {
        return promise
            .then(function () {
                return NetLicensing.LicenseeService.get(context, licensee.getProperty('number'));
            })
            .then(function (entity) {
                expect(entity instanceof NetLicensing.Licensee).toBe(true);

                expect(entity.getProperty('number')).toBe(licensee.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licensee.getProperty('active'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
            });
    });

    it('check "list" method', function () {
        return NetLicensing.LicenseeService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof NetLicensing.Licensee).toBe(true);
            });
    });

    it('check "update" method', function () {
        return promise
            .then(function () {
                licensee.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                licensee.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return NetLicensing.LicenseeService.update(context, licensee.getProperty('number'), licensee);
            }).then(function (entity) {
                expect(entity instanceof NetLicensing.Licensee).toBe(true);

                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
            });
    });

    it('check "validate" method', function () {
        var productModule, licenseTemplate, license, validationParameters;
        return promise
        //create product module
            .then(function () {
                productModule = new NetLicensing.ProductModule()
                    .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
                    .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
                    .setProperty('active', true)
                    .setProperty('licensingModel', 'Subscription');

                return NetLicensing.ProductModuleService.create(context, product.getProperty('number'), productModule);
            })
            //create license template
            .then(function (entity) {
                licenseTemplate = new NetLicensing.LicenseTemplate()
                    .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
                    .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
                    .setProperty('active', true)
                    .setProperty('licenseType', 'TIMEVOLUME')
                    .setProperty('timeVolume', 30)
                    .setProperty('price', Faker.float(0, 50))
                    .setProperty('currency', 'EUR');

                return NetLicensing.LicenseTemplateService.create(context, entity.getProperty('number'), licenseTemplate);
            })
            //create license
            .then(function (entity) {
                license = new NetLicensing.License()
                    .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
                    .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
                    .setProperty('startDate', 'now')
                    .setProperty('active', true);

                return NetLicensing.LicenseService.create(context, licensee.getProperty('number'), entity.getProperty('number'), null, license);
            })
            //validate
            .then(function (entity) {
                validationParameters = new NetLicensing.ValidationParameters()
                    .setLicenseeName(licensee.getProperty('name'))
                    .setProductNumber(product.getProperty('number'));

                return NetLicensing.LicenseeService.validate(context, licensee.getProperty('number'), validationParameters);
            }).then(function (validationResults) {
                expect(validationResults.getTtl() instanceof Date).toBe(true);
                expect(validationResults.getProductModuleValidation(productModule.getProperty('number')).valid).toBe(true);
            });
    });

    it('check "transfer" method', function () {
        var transferToLicensee;
        return promise
        //create licensee
            .then(function () {
                transferToLicensee = new NetLicensing.Licensee()
                    .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
                    .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
                    .setProperty('active', true);

                return NetLicensing.LicenseeService.create(context, product.getProperty('number'), transferToLicensee);
            })
            .then(function () {
                licensee.setProperty('markedForTransfer', true);
                return NetLicensing.LicenseeService.update(context, licensee.getProperty('number'), licensee)
            })
            .then(function () {
                return NetLicensing.LicenseeService.transfer(context, transferToLicensee.getProperty('number'), licensee.getProperty('number'))
            }).then(function () {
                licensee = transferToLicensee;
            });
    });

    it('check "delete" method', function () {
        return promise
            .then(function () {
                return NetLicensing.LicenseeService.delete(context, licensee.getProperty('number'), true);
            })
            .then(function (state) {
                expect(state).toBe(true);
            });
    });
});