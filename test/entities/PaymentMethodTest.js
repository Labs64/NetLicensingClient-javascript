describe('entities.PaymentMethodTest', function () {
    var paymentMethod;

    beforeEach(function () {
        paymentMethod = new Nlic.PaymentMethod();
    });

    it('check "number" property setters/getters', function () {
        paymentMethod.setProperty('number', 'number_0');
        expect(paymentMethod.getProperty('number')).toBe('number_0');
        expect(paymentMethod.getNumber()).toBe('number_0');
        expect(paymentMethod.number).toBe('number_0');

        paymentMethod.setNumber('number_1');
        expect(paymentMethod.getProperty('number')).toBe('number_1');
        expect(paymentMethod.getNumber()).toBe('number_1');
        expect(paymentMethod.number).toBe('number_1');

        paymentMethod.number = 'number_2';
        expect(paymentMethod.getProperty('number')).toBe('number_2');
        expect(paymentMethod.getNumber()).toBe('number_2');
        expect(paymentMethod.number).toBe('number_2');
    });

    it('check "active" property setters/getters', function () {
        paymentMethod.setProperty('active', true);
        expect(paymentMethod.getProperty('active')).toBe(true);
        expect(paymentMethod.getActive()).toBe(true);
        expect(paymentMethod.active).toBe(true);

        paymentMethod.setActive(false);
        expect(paymentMethod.getProperty('active')).toBe(false);
        expect(paymentMethod.getActive()).toBe(false);
        expect(paymentMethod.active).toBe(false);

        paymentMethod.active = true;
        expect(paymentMethod.getProperty('active')).toBe(true);
        expect(paymentMethod.getActive()).toBe(true);
        expect(paymentMethod.active).toBe(true);
    });

    it('check "paypal.subject" property setters/getters', function () {
        paymentMethod.setProperty('paypal.subject', 'subject_0');
        expect(paymentMethod.getProperty('paypal.subject')).toBe('subject_0');
        expect(paymentMethod.getPaypalSubject()).toBe('subject_0');
        expect(paymentMethod['paypal.subject']).toBe('subject_0');

        paymentMethod.setPaypalSubject('subject_1');
        expect(paymentMethod.getProperty('paypal.subject')).toBe('subject_1');
        expect(paymentMethod.getPaypalSubject()).toBe('subject_1');
        expect(paymentMethod['paypal.subject']).toBe('subject_1');

        paymentMethod['paypal.subject'] = 'subject_2';
        expect(paymentMethod.getProperty('paypal.subject')).toBe('subject_2');
        expect(paymentMethod.getPaypalSubject()).toBe('subject_2');
        expect(paymentMethod['paypal.subject']).toBe('subject_2');
    });

    it('check cast an properties to a native js type', function () {
        paymentMethod.setProperty('number', 1);
        expect(paymentMethod.getProperty('number')).toBe('1');
        paymentMethod.setProperty('number', true);
        expect(paymentMethod.getProperty('number')).toBe('true');

        paymentMethod.setProperty('active', 1);
        expect(paymentMethod.getProperty('active')).toBe(true);
        paymentMethod.setProperty('active', 0);
        expect(paymentMethod.getProperty('active')).toBe(false);
        paymentMethod.setProperty('active', "");
        expect(paymentMethod.getProperty('active')).toBe(false);
        paymentMethod.setProperty('active', "123");
        expect(paymentMethod.getProperty('active')).toBe(true);
        paymentMethod.setProperty('active', null);
        expect(paymentMethod.getProperty('active')).toBe(false);

        paymentMethod.setProperty('paypal.subject', 1);
        expect(paymentMethod.getProperty('paypal.subject')).toBe('1');
        paymentMethod.setProperty('paypal.subject', true);
        expect(paymentMethod.getProperty('paypal.subject')).toBe('true');
    });

    it('check throwable error if property value is typeof "function"', function () {
        var func = function () {
        };

        expect(function(){paymentMethod.setProperty('number',func)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setNumber(func)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setActive(func)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setPaypalSubject(func)}).toThrowError(TypeError);

        expect(function(){paymentMethod.number = func}).toThrowError(TypeError);
        expect(function(){paymentMethod.active = func}).toThrowError(TypeError);
        expect(function(){paymentMethod['paypal.subject'] = func}).toThrowError(TypeError);
    });

    it('check throwable error if property value is "undefined"', function () {
        expect(function(){paymentMethod.setProperty('number',undefined)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setNumber(undefined)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setActive(undefined)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setPaypalSubject(undefined)}).toThrowError(TypeError);

        expect(function(){paymentMethod.number = undefined}).toThrowError(TypeError);
        expect(function(){paymentMethod.active = undefined}).toThrowError(TypeError);
        expect(function(){paymentMethod['paypal.subject'] = undefined}).toThrowError(TypeError);
    });

    it('check throwable error if property value is "NaN"', function () {
        expect(function(){paymentMethod.setProperty('number',NaN)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setNumber(NaN)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setActive(NaN)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setPaypalSubject(NaN)}).toThrowError(TypeError);

        expect(function(){paymentMethod.number = NaN}).toThrowError(TypeError);
        expect(function(){paymentMethod.active = NaN}).toThrowError(TypeError);
        expect(function(){paymentMethod['paypal.subject'] = NaN}).toThrowError(TypeError);
    });

    it('check throwable error if property value is "Infinity"', function () {
        expect(function(){paymentMethod.setProperty('number',Infinity)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setNumber(Infinity)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setActive(Infinity)}).toThrowError(TypeError);
        expect(function(){paymentMethod.setPaypalSubject(Infinity)}).toThrowError(TypeError);

        expect(function(){paymentMethod.number = Infinity}).toThrowError(TypeError);
        expect(function(){paymentMethod.active = Infinity}).toThrowError(TypeError);
        expect(function(){paymentMethod['paypal.subject'] = Infinity}).toThrowError(TypeError);
    });
});