describe('TokenServiceTest', function () {
    var context, promise, product, licensee, token;

    beforeAll(function () {
        context = new NetLicensing .Context().setUsername('Demo').setPassword('demo');

        product = new NetLicensing .Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        licensee = new NetLicensing .Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        token = new NetLicensing .Token()
            .setProperty('tokenType', 'SHOP')
            .setProperty('licenseeNumber', licensee.getProperty('number'));

        promise = Promise.resolve('TokenServiceTest')
        //create product
            .then(function () {
                return NetLicensing .ProductService.create(context, product)
            })
            .then(function () {
                return NetLicensing .LicenseeService.create(context, product.getProperty('number'), licensee);
            });

    });

    afterAll(function () {
        NetLicensing .ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', function () {
        return promise
            .then(function () {
                return NetLicensing .TokenService.create(context, token);
            })
            .then(function (entity) {
                expect(entity instanceof NetLicensing .Token).toBe(true);

                expect(entity.getProperty('number')).toBeTruthy();
                expect(entity.getProperty('tokenType')).toBe(token.getProperty('tokenType'));
                expect(entity.getProperty('licenseeNumber')).toBe(token.getProperty('licenseeNumber'));
                expect(entity.getProperty('expirationTime') instanceof Date).toBe(true);

                token.setProperty('number', entity.getProperty('number'));
            });
    });

    it('check "get" method', function () {
        return promise
            .then(function (entity) {
                return NetLicensing .TokenService.get(context, token.getProperty('number'));
            })
            .then(function (entity) {
                expect(entity instanceof NetLicensing .Token).toBe(true);

                expect(entity.getProperty('number')).toBeTruthy();
                expect(entity.getProperty('tokenType')).toBe(token.getProperty('tokenType'));
                expect(entity.getProperty('licenseeNumber')).toBe(token.getProperty('licenseeNumber'));
                expect(entity.getProperty('expirationTime') instanceof Date).toBe(true);
            });
    });

    it('check "list" method', function () {
        return NetLicensing .TokenService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof NetLicensing .Token).toBe(true);
            });
    });

    it('check "delete" method', function () {
        return promise
            .then(function () {
                return NetLicensing .TokenService.delete(context, token.getProperty('number'));
            })
            .then(function (state) {
                expect(state).toBe(true);
            });
    });

});