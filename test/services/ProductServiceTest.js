describe('ProductServiceTest', function () {
    var context, promise, product, discounts;

    var faker = {
        string: function (prefix) {
            prefix = prefix || '';
            return Math.random().toString(36).substr(2, 9);
        },
        boolean: function () {
            return Boolean(Math.round(Math.random()));
        },
        float: function (min, max) {
            min = min || 0;
            max = max || 100;
            return Number((Math.random() * (max - min) + min).toFixed(2));
        },
        int: function (min, max) {
            min = min || 0;
            max = max || 100;
            return Math.round(Math.random() * (max - min) + min);
        }
    };

    beforeAll(function () {
        context = new Nlic.Context().setUsername('Demo').setPassword('demo');

        promise = Promise.resolve('ProductServiceTest');

        product = new Nlic.Product()
            .setProperty('number', faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', faker.boolean())
            .setProperty('version', String(faker.float(1, 3)))
            .setProperty('description', faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', faker.boolean())
            .setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY');

        product.addDiscount(new Nlic.ProductDiscount()
            .setProperty('totalPrice', faker.int(10, 20))
            .setProperty('currency', 'EUR')
            .setProperty('amountFix', faker.int(1, 5)));

        product.addDiscount(new Nlic.ProductDiscount()
            .setProperty('totalPrice', faker.int(30, 40))
            .setProperty('currency', 'EUR')
            .setProperty('amountPercent', faker.int(1, 5)));
    });

    it('check "create" method', function () {
        return promise = promise
            .then(function () {
                return Nlic.ProductService.create(context, product);
            })
            .then(function (entity) {
                expect(entity instanceof Nlic.Product).toBe(true);

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
        return promise = promise
            .then(function () {
                return Nlic.ProductService.get(context, product.getProperty('number'));
            })
            .then(function (entity) {
                expect(entity instanceof Nlic.Product).toBe(true);

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
        return Nlic.ProductService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Nlic.Product).toBe(true);
            });
    });

    it('check "update" method', function () {
        return promise = promise
            .then(function () {
                product.setProperty('name', faker.string('JS-NAME-').toUpperCase());
                product.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                product.addDiscount(new Nlic.ProductDiscount()
                    .setProperty('totalPrice', faker.int(50, 60))
                    .setProperty('currency', 'EUR')
                    .setProperty('amountFix', faker.int(1, 5)));

                return Nlic.ProductService.update(context, product.getProperty('number'), product);
            }).then(function (entity) {
                expect(entity instanceof Nlic.Product).toBe(true);

                expect(entity.getProperty('name')).toBe(product.getProperty('name'));
                expect(entity.getProperty('my_custom_property')).toBe(product.getProperty('my_custom_property'));

                expect(entity.getProductDiscounts().length).toBe(3);
            });
    });


    it('check "delete" method', function () {
        return promise = promise
            .then(function () {
                return Nlic.ProductService.delete(context, product.getProperty('number'));
            })
            .then(function (state) {
                expect(state).toBe(true);
            });
    });
});