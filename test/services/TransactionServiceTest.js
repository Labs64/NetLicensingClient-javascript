describe('TransactionServiceTest', function () {
    var context, promise, transaction;

    beforeAll(function () {
        context = new Netlicensing.Context().setUsername('Demo').setPassword('demo');

        promise = Promise.resolve('TransactionServiceTest');

        transaction = new Netlicensing.Transaction()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('status', 'PENDING')
            .setProperty('source', 'SHOP');
    });

    it('check "create" method', function () {
        return promise
            .then(function () {
                return Netlicensing.TransactionService.create(context, transaction);
            })
            .then(function (entity) {
                expect(entity instanceof Netlicensing.Transaction).toBe(true);

                expect(entity.getProperty('number')).toBe(transaction.getProperty('number'));
                expect(entity.getProperty('status')).toBe(transaction.getProperty('status'));
                expect(entity.getProperty('source')).toBe(transaction.getProperty('source'));
            });
    });

    it('check "get" method', function () {
        return promise
            .then(function () {
                return Netlicensing.TransactionService.get(context, transaction.getProperty('number'));
            })
            .then(function (entity) {
                expect(entity instanceof Netlicensing.Transaction).toBe(true);

                expect(entity.getProperty('number')).toBe(transaction.getProperty('number'));
                expect(entity.getProperty('status')).toBe(transaction.getProperty('status'));
                expect(entity.getProperty('source')).toBe(transaction.getProperty('source'));
            });
    });

    it('check "list" method', function () {
        return Netlicensing.TransactionService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Netlicensing.Transaction).toBe(true);
            });
    });

    it('check "update" method', function () {
        return promise
            .then(function () {
                transaction.setProperty('status', 'CLOSED');

                return Netlicensing.TransactionService.update(context, transaction.getProperty('number'), transaction);
            }).then(function (entity) {
                expect(entity instanceof Netlicensing.Transaction).toBe(true);

                expect(entity.getProperty('status')).toBe(transaction.getProperty('status'));
            });
    });
});