describe('ProductServiceTest', function () {
    var context, promise, product, discounts;

    beforeAll(function () {
        context = new NetLicensing .Context().setUsername('Demo').setPassword('demo');

        promise = Promise.resolve('ProductServiceTest');

        product = new NetLicensing .Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', Faker.boolean())
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean())
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        product.addDiscount(new NetLicensing .ProductDiscount()
            .setProperty('totalPrice', Faker.int(10, 20))
            .setProperty('currency', 'EUR')
            .setProperty('amountFix', Faker.int(1, 5)));

        product.addDiscount(new NetLicensing .ProductDiscount()
            .setProperty('totalPrice', Faker.int(30, 40))
            .setProperty('currency', 'EUR')
            .setProperty('amountPercent', Faker.int(1, 5)));
    });

    it('check "create" method', function () {
        return promise
            .then(function () {
                return NetLicensing .ProductService.create(context, product);
            })
            .then(function (entity) {
                expect(entity instanceof NetLicensing .Product).toBe(true);

                expect(entity.getProperty('number')).toBe(product.getProperty('number'));
                expect(entity.getProperty('name')).toBe(product.getProperty('name'));
                expect(entity.getProperty('active')).toBe(product.getProperty('active'));
                expect(entity.getProperty('version')).toBe(product.getProperty('version'));
                expect(entity.getProperty('description')).toBe(product.getProperty('description'));
                expect(entity.getProperty('licensingInfo')).toBe(product.getProperty('licensingInfo'));
                expect(entity.getProperty('licenseeAutoCreate')).toBe(product.getProperty('licenseeAutoCreate'));

                expect(entity.getProductDiscounts().length).toBe(2);
            });
    });

    it('check "get" method', function () {
        return promise
            .then(function () {
                return NetLicensing .ProductService.get(context, product.getProperty('number'));
            })
            .then(function (entity) {
                expect(entity instanceof NetLicensing .Product).toBe(true);

                expect(entity.getProperty('number')).toBe(product.getProperty('number'));
                expect(entity.getProperty('name')).toBe(product.getProperty('name'));
                expect(entity.getProperty('active')).toBe(product.getProperty('active'));
                expect(entity.getProperty('version')).toBe(product.getProperty('version'));
                expect(entity.getProperty('description')).toBe(product.getProperty('description'));
                expect(entity.getProperty('licensingInfo')).toBe(product.getProperty('licensingInfo'));
                expect(entity.getProperty('licenseeAutoCreate')).toBe(product.getProperty('licenseeAutoCreate'));
                expect(entity.getProperty('my_custom_property')).toBe(product.getProperty('my_custom_property'));

                expect(entity.getProductDiscounts().length).toBe(2);
            });
    });

    it('check "list" method', function () {
        return NetLicensing .ProductService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof NetLicensing .Product).toBe(true);
            });
    });

    it('check "update" method', function () {
        return promise
            .then(function () {
                product.setProperty('name', Faker.string('JS-NAME-').toUpperCase());
                product.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                product.addDiscount(new NetLicensing .ProductDiscount()
                    .setProperty('totalPrice', Faker.int(50, 60))
                    .setProperty('currency', 'EUR')
                    .setProperty('amountFix', Faker.int(1, 5)));

                return NetLicensing .ProductService.update(context, product.getProperty('number'), product);
            }).then(function (entity) {
                expect(entity instanceof NetLicensing .Product).toBe(true);

                expect(entity.getProperty('name')).toBe(product.getProperty('name'));
                expect(entity.getProperty('my_custom_property')).toBe(product.getProperty('my_custom_property'));

                expect(entity.getProductDiscounts().length).toBe(3);

                return entity;
            })
            .then(function (entity) {
                var discounts = entity.getProductDiscounts();

                discounts.shift();

                product.setProductDiscounts(discounts);

                return NetLicensing .ProductService.update(context, product.getProperty('number'), product);
            })
            .then(function (entity) {
                expect(entity.getProductDiscounts().length).toBe(2);
            });
    });

    it('check "delete" method', function () {
        return promise
            .then(function () {
                return NetLicensing .ProductService.delete(context, product.getProperty('number'));
            })
            .then(function (state) {
                expect(state).toBe(true);
            });
    });
});