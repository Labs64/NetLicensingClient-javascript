describe('LicenseeServiceTest', function () {
    var context, promise, product, licensee;

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

        product = new Nlic.Product()
            .setProperty('number', faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(faker.float(1, 3)))
            .setProperty('description', faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', faker.boolean());

        promise = Promise.resolve('LicenseeServiceTest');

        //create product
        promise = promise.then(function () {
            return Nlic.ProductService.create(context, product)
        });

        licensee = new Nlic.Licensee()
            .setProperty('number', faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('my_custom_property','MY-CUSTOM-PROPERTY');
    });

    afterAll(function () {
        Nlic.ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', function () {
        return promise = promise
            .then(function () {
                return Nlic.LicenseeService.create(context, product.getProperty('number'), licensee);
            })
            .then(function (entity) {
                expect(entity instanceof Nlic.Licensee).toBe(true);

                expect(entity.getProperty('number')).toBe(licensee.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licensee.getProperty('active'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
            });
    });

    it('check "get" method', function () {
        return promise = promise
            .then(function () {
                return Nlic.LicenseeService.get(context, licensee.getProperty('number'));
            })
            .then(function (entity) {
                expect(entity instanceof Nlic.Licensee).toBe(true);

                expect(entity.getProperty('number')).toBe(licensee.getProperty('number'));
                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('active')).toBe(licensee.getProperty('active'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
            });
    });

    it('check "list" method', function () {
        return Nlic.LicenseeService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Nlic.Licensee).toBe(true);
            });
    });

    it('check "update" method', function () {
        return promise = promise
            .then(function () {
                licensee.setProperty('name', faker.string('JS-NAME-').toUpperCase());
                licensee.setProperty('my_custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

                return Nlic.LicenseeService.update(context, licensee.getProperty('number'), licensee);
            }).then(function (entity) {
                expect(entity instanceof Nlic.Licensee).toBe(true);

                expect(entity.getProperty('name')).toBe(licensee.getProperty('name'));
                expect(entity.getProperty('my_custom_property')).toBe(licensee.getProperty('my_custom_property'));
            });
    });

    it('check "delete" method', function () {
        return promise = promise
            .then(function () {
                return Nlic.LicenseeService.delete(context, licensee.getProperty('number'));
            })
            .then(function (state) {
                expect(state).toBe(true);
            });
    });
});