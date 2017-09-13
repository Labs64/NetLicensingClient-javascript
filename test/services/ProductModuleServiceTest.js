describe('ProductModuleServiceTest', function () {
    var context, promise, product, productModule;

    beforeAll(function () {
        context = new Netlicensing.Context().setUsername('Demo').setPassword('demo');

        product = new Netlicensing.Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        promise = Promise.resolve('ProductModuleServiceTest')
            //create product
            .then(function () {
                return Netlicensing.ProductService.create(context, product)
            });

        productModule = new Netlicensing.ProductModule()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('licensingModel', 'Subscription')
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');
    });

    afterAll(function () {
        Netlicensing.ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', function () {
        return promise
            .then(function () {
                return Netlicensing.ProductModuleService.create(context, product.getProperty('number'), productModule);
            })
            .then(function (entity) {
                expect(entity instanceof Netlicensing.ProductModule).toBe(true);

                expect(entity.getProperty('number')).toBe(productModule.getProperty('number'));
                expect(entity.getProperty('name')).toBe(productModule.getProperty('name'));
                expect(entity.getProperty('active')).toBe(productModule.getProperty('active'));
                expect(entity.getProperty('licensingModel')).toBe(productModule.getProperty('licensingModel'));
                expect(entity.getProperty('my_custom_property')).toBe(productModule.getProperty('my_custom_property'));
            });
    });

    it('check "get" method', function () {
        return promise
            .then(function () {
                return Netlicensing.ProductModuleService.get(context, productModule.getProperty('number'));
            })
            .then(function (entity) {
                expect(entity instanceof Netlicensing.ProductModule).toBe(true);

                expect(entity.getProperty('number')).toBe(productModule.getProperty('number'));
                expect(entity.getProperty('name')).toBe(productModule.getProperty('name'));
                expect(entity.getProperty('active')).toBe(productModule.getProperty('active'));
                expect(entity.getProperty('licensingModel')).toBe(productModule.getProperty('licensingModel'));
                expect(entity.getProperty('my_custom_property')).toBe(productModule.getProperty('my_custom_property'));
            });
    });

    it('check "list" method', function () {
        return Netlicensing.ProductModuleService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Netlicensing.ProductModule).toBe(true);
            });
    });

    it('check "update" method', function () {
        return promise
            .then(function () {
                productModule.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                productModule.setProperty('licensingModel', 'TryAndBuy');
                productModule.setProperty('licenseTemplate', 'TIMEVOLUME');
                productModule.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return Netlicensing.ProductModuleService.update(context, productModule.getProperty('number'), productModule);
            }).then(function (entity) {
                expect(entity instanceof Netlicensing.ProductModule).toBe(true);

                expect(entity.getProperty('name')).toBe(productModule.getProperty('name'));
                expect(entity.getProperty('licensingModel')).toBe(productModule.getProperty('licensingModel'));
                expect(entity.getProperty('licenseTemplate')).toBe(productModule.getProperty('licenseTemplate'));
                expect(entity.getProperty('my_custom_property')).toBe(productModule.getProperty('my_custom_property'));
            });
    });

    it('check "delete" method', function () {
        return promise
            .then(function () {
                return Netlicensing.ProductModuleService.delete(context, productModule.getProperty('number'));
            })
            .then(function (state) {
                expect(state).toBe(true);
            });
    });
});
