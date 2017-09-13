describe('PaymentMethodServiceTest', function () {
    var context, promise;

    beforeAll(function () {
        context = new Netlicensing.Context().setUsername('Demo').setPassword('demo');

        promise = Promise.resolve('PaymentMethodServiceTest');
    });

    it('check "get" method', function () {
        return promise
            .then(function () {
                return Netlicensing.PaymentMethodService.get(context, 'PAYPAL');
            })
            .then(function (entity) {
                expect(entity instanceof Netlicensing.PaymentMethod).toBe(true);

                expect(entity.getProperty('number')).toBe('PAYPAL');
            });
    });

    it('check "list" method', function () {
        return Netlicensing.PaymentMethodService.list(context)
            .then(function (entities) {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Netlicensing.PaymentMethod).toBe(true);
            });
    });

});