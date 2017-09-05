describe('PaymentMethodServiceTest', function () {
    var context, promise;

    beforeAll(function () {
        context = new Nlic.Context().setUsername('Demo').setPassword('demo');

        promise = Promise.resolve('PaymentMethodServiceTest');
    });

    it('check "get" method', function () {
        return promise
            .then(function () {
                return Nlic.PaymentMethodService.get(context, 'PAYPAL');
            })
            .then(function (entity) {
                expect(entity instanceof Nlic.PaymentMethod).toBe(true);

                expect(entity.getProperty('number')).toBe('PAYPAL');
            });
    });

    it('check "list" method', function () {
        return Nlic.PaymentMethodService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Nlic.PaymentMethod).toBe(true);
            });
    });

});