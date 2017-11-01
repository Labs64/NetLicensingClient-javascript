describe('entities.TransactionTest', function () {
    var transaction;

    beforeEach(function () {
        transaction = new NetLicensing.Transaction();
    });

    it('check "number" property setters/getters', function () {
        transaction.setProperty('number', 'number_0');
        expect(transaction.getProperty('number')).toBe('number_0');
        expect(transaction.getNumber()).toBe('number_0');
        expect(transaction.number).toBe('number_0');

        transaction.setNumber('number_1');
        expect(transaction.getProperty('number')).toBe('number_1');
        expect(transaction.getNumber()).toBe('number_1');
        expect(transaction.number).toBe('number_1');

        transaction.number = 'number_2';
        expect(transaction.getProperty('number')).toBe('number_2');
        expect(transaction.getNumber()).toBe('number_2');
        expect(transaction.number).toBe('number_2');
    });

    it('check "name" property setters/getters', function () {
        transaction.setProperty('name', 'name_0');
        expect(transaction.getProperty('name')).toBe('name_0');
        expect(transaction.getName()).toBe('name_0');
        expect(transaction.name).toBe('name_0');

        transaction.setName('name_1');
        expect(transaction.getProperty('name')).toBe('name_1');
        expect(transaction.getName()).toBe('name_1');
        expect(transaction.name).toBe('name_1');

        transaction.name = 'name_2';
        expect(transaction.getProperty('name')).toBe('name_2');
        expect(transaction.getName()).toBe('name_2');
        expect(transaction.name).toBe('name_2');
    });

    it('check "status" property setters/getters', function () {
        transaction.setProperty('status', 'status_0');
        expect(transaction.getProperty('status')).toBe('status_0');
        expect(transaction.getStatus()).toBe('status_0');
        expect(transaction.status).toBe('status_0');

        transaction.setStatus('status_1');
        expect(transaction.getProperty('status')).toBe('status_1');
        expect(transaction.getStatus()).toBe('status_1');
        expect(transaction.status).toBe('status_1');

        transaction.status = 'status_2';
        expect(transaction.getProperty('status')).toBe('status_2');
        expect(transaction.getStatus()).toBe('status_2');
        expect(transaction.status).toBe('status_2');
    });

    it('check "source" property setters/getters', function () {
        transaction.setProperty('source', 'source_0');
        expect(transaction.getProperty('source')).toBe('source_0');
        expect(transaction.getSource()).toBe('source_0');
        expect(transaction.source).toBe('source_0');

        transaction.setSource('source_1');
        expect(transaction.getProperty('source')).toBe('source_1');
        expect(transaction.getSource()).toBe('source_1');
        expect(transaction.source).toBe('source_1');

        transaction.source = 'source_2';
        expect(transaction.getProperty('source')).toBe('source_2');
        expect(transaction.getSource()).toBe('source_2');
        expect(transaction.source).toBe('source_2');
    });

    it('check "grandTotal" property setters/getters', function () {
        transaction.setProperty('grandTotal', 1);
        expect(transaction.getProperty('grandTotal')).toBe(1);
        expect(transaction.getGrandTotal()).toBe(1);
        expect(transaction.grandTotal).toBe(1);

        transaction.setGrandTotal(2);
        expect(transaction.getProperty('grandTotal')).toBe(2);
        expect(transaction.getGrandTotal()).toBe(2);
        expect(transaction.grandTotal).toBe(2);

        transaction.grandTotal = 3;
        expect(transaction.getProperty('grandTotal')).toBe(3);
        expect(transaction.getGrandTotal()).toBe(3);
        expect(transaction.grandTotal).toBe(3);
    });

    it('check "discount" property setters/getters', function () {
        transaction.setProperty('discount', 1);
        expect(transaction.getProperty('discount')).toBe(1);
        expect(transaction.getDiscount()).toBe(1);
        expect(transaction.discount).toBe(1);

        transaction.setDiscount(2);
        expect(transaction.getProperty('discount')).toBe(2);
        expect(transaction.getDiscount()).toBe(2);
        expect(transaction.discount).toBe(2);

        transaction.discount = 3;
        expect(transaction.getProperty('discount')).toBe(3);
        expect(transaction.getDiscount()).toBe(3);
        expect(transaction.discount).toBe(3);
    });

    it('check "currency" property setters/getters', function () {
        transaction.setProperty('currency', 'EUR');
        expect(transaction.getProperty('currency')).toBe('EUR');
        expect(transaction.getCurrency()).toBe('EUR');
        expect(transaction.currency).toBe('EUR');

        transaction.setCurrency('USD');
        expect(transaction.getProperty('currency')).toBe('USD');
        expect(transaction.getCurrency()).toBe('USD');
        expect(transaction.currency).toBe('USD');

        transaction.currency = 'BYN';
        expect(transaction.getProperty('currency')).toBe('BYN');
        expect(transaction.getCurrency()).toBe('BYN');
        expect(transaction.currency).toBe('BYN');
    });

    it('check "dateCreated" property setters/getters', function () {
        transaction.setProperty('dateCreated', new Date('2055-01-01'));
        expect(transaction.getProperty('dateCreated').toISOString()).toBe(new Date('2055-01-01').toISOString());
        expect(transaction.getDateCreated().toISOString()).toBe(new Date('2055-01-01').toISOString());
        expect(transaction.dateCreated.toISOString()).toBe(new Date('2055-01-01').toISOString());

        transaction.setDateCreated(new Date('2055-01-02'));
        expect(transaction.getProperty('dateCreated').toISOString()).toBe(new Date('2055-01-02').toISOString());
        expect(transaction.getDateCreated().toISOString()).toBe(new Date('2055-01-02').toISOString());
        expect(transaction.dateCreated.toISOString()).toBe(new Date('2055-01-02').toISOString());

        transaction.dateCreated = new Date('2055-01-03');
        expect(transaction.getProperty('dateCreated').toISOString()).toBe(new Date('2055-01-03').toISOString());
        expect(transaction.getDateCreated().toISOString()).toBe(new Date('2055-01-03').toISOString());
        expect(transaction.dateCreated.toISOString()).toBe(new Date('2055-01-03').toISOString());
    });

    it('check "dateClosed" property setters/getters', function () {
        transaction.setProperty('dateClosed', new Date('2055-01-01'));
        expect(transaction.getProperty('dateClosed').toISOString()).toBe(new Date('2055-01-01').toISOString());
        expect(transaction.getDateClosed().toISOString()).toBe(new Date('2055-01-01').toISOString());
        expect(transaction.dateClosed.toISOString()).toBe(new Date('2055-01-01').toISOString());

        transaction.setDateClosed(new Date('2055-01-02'));
        expect(transaction.getProperty('dateClosed').toISOString()).toBe(new Date('2055-01-02').toISOString());
        expect(transaction.getDateClosed().toISOString()).toBe(new Date('2055-01-02').toISOString());
        expect(transaction.dateClosed.toISOString()).toBe(new Date('2055-01-02').toISOString());

        transaction.dateClosed = new Date('2055-01-03');
        expect(transaction.getProperty('dateClosed').toISOString()).toBe(new Date('2055-01-03').toISOString());
        expect(transaction.getDateClosed().toISOString()).toBe(new Date('2055-01-03').toISOString());
        expect(transaction.dateClosed.toISOString()).toBe(new Date('2055-01-03').toISOString());
    });

    it('check "active" property setters/getters', function () {
        transaction.setActive();
        expect(transaction.getProperty('active')).toBe(true);
        expect(transaction.active).toBe(true);
    });

    it('check "paymentMethod" property setters/getters', function () {
        transaction.setProperty('paymentMethod', 'paymentMethod_0');
        expect(transaction.getProperty('paymentMethod')).toBe('paymentMethod_0');
        expect(transaction.getPaymentMethod()).toBe('paymentMethod_0');
        expect(transaction.paymentMethod).toBe('paymentMethod_0');

        transaction.setPaymentMethod('paymentMethod_1');
        expect(transaction.getProperty('paymentMethod')).toBe('paymentMethod_1');
        expect(transaction.getPaymentMethod()).toBe('paymentMethod_1');
        expect(transaction.paymentMethod).toBe('paymentMethod_1');

        transaction.paymentMethod = 'paymentMethod_2';
        expect(transaction.getProperty('paymentMethod')).toBe('paymentMethod_2');
        expect(transaction.getPaymentMethod()).toBe('paymentMethod_2');
        expect(transaction.paymentMethod).toBe('paymentMethod_2');
    });

    it('check cast an properties to a native js type', function () {
        transaction.setProperty('number', 1);
        expect(transaction.getProperty('number')).toBe('1');
        transaction.setProperty('number', true);
        expect(transaction.getProperty('number')).toBe('true');

        transaction.setProperty('active', 1);
        expect(transaction.getProperty('active')).toBe(true);
        transaction.setProperty('active', 0);
        expect(transaction.getProperty('active')).toBe(false);
        transaction.setProperty('active', "");
        expect(transaction.getProperty('active')).toBe(false);
        transaction.setProperty('active', "123");
        expect(transaction.getProperty('active')).toBe(true);
        transaction.setProperty('active', null);
        expect(transaction.getProperty('active')).toBe(false);

        transaction.setProperty('name', 1);
        expect(transaction.getProperty('name')).toBe('1');
        transaction.setProperty('name', true);
        expect(transaction.getProperty('name')).toBe('true');

        transaction.setProperty('status', 1);
        expect(transaction.getProperty('status')).toBe('1');
        transaction.setProperty('status', true);
        expect(transaction.getProperty('status')).toBe('true');

        transaction.setProperty('source', 1);
        expect(transaction.getProperty('source')).toBe('1');
        transaction.setProperty('source', true);
        expect(transaction.getProperty('source')).toBe('true');

        transaction.setProperty('source', 1);
        expect(transaction.getProperty('source')).toBe('1');
        transaction.setProperty('source', true);
        expect(transaction.getProperty('source')).toBe('true');

        transaction.setProperty('grandTotal', "3.14");
        expect(transaction.getProperty('grandTotal')).toBe(3.14);
        transaction.setProperty('grandTotal', "314e-2");
        expect(transaction.getProperty('grandTotal')).toBe(3.14);
        transaction.setProperty('grandTotal', "0.0314E+2");
        expect(transaction.getProperty('grandTotal')).toBe(3.14);
        transaction.setProperty('grandTotal', "3.14any non-numeric characters");
        expect(transaction.getProperty('grandTotal')).toBe(3.14);

        transaction.setProperty('discount', "3.14");
        expect(transaction.getProperty('discount')).toBe(3.14);
        transaction.setProperty('discount', "314e-2");
        expect(transaction.getProperty('discount')).toBe(3.14);
        transaction.setProperty('discount', "0.0314E+2");
        expect(transaction.getProperty('discount')).toBe(3.14);
        transaction.setProperty('discount', "3.14any non-numeric characters");
        expect(transaction.getProperty('discount')).toBe(3.14);

        transaction.setProperty('currency', 1);
        expect(transaction.getProperty('currency')).toBe('1');
        transaction.setProperty('currency', true);
        expect(transaction.getProperty('currency')).toBe('true');

        transaction.setProperty('dateCreated', '2055-01-01');
        expect(transaction.getProperty('dateCreated') instanceof Date).toBe(true);
        transaction.setProperty('dateCreated', new Date());
        expect(transaction.getProperty('dateCreated') instanceof Date).toBe(true);

        transaction.setProperty('dateClosed', '2055-01-01');
        expect(transaction.getProperty('dateClosed') instanceof Date).toBe(true);
        transaction.setProperty('dateClosed', new Date());
        expect(transaction.getProperty('dateClosed') instanceof Date).toBe(true);

        transaction.setProperty('paymentMethod', 1);
        expect(transaction.getProperty('paymentMethod')).toBe('1');
        transaction.setProperty('paymentMethod', true);
        expect(transaction.getProperty('paymentMethod')).toBe('true');
    });

    it('check throwable error if property value is typeof "function"', function () {
        var func = function () {
        };

        expect(function(){transaction.setProperty('number', func)}).toThrowError(TypeError);
        expect(function(){transaction.setNumber(func)}).toThrowError(TypeError);
        expect(function(){transaction.setName(func)}).toThrowError(TypeError);
        expect(function(){transaction.setStatus(func)}).toThrowError(TypeError);
        expect(function(){transaction.setSource(func)}).toThrowError(TypeError);
        expect(function(){transaction.setGrandTotal(func)}).toThrowError(TypeError);
        expect(function(){transaction.setDiscount(func)}).toThrowError(TypeError);
        expect(function(){transaction.setCurrency(func)}).toThrowError(TypeError);
        expect(function(){transaction.setDateCreated(func)}).toThrowError(TypeError);
        expect(function(){transaction.setDateClosed(func)}).toThrowError(TypeError);
        expect(function(){transaction.setPaymentMethod(func)}).toThrowError(TypeError);

        expect(function(){transaction.number = func}).toThrowError(TypeError);
        expect(function(){transaction.name = func}).toThrowError(TypeError);
        expect(function(){transaction.status = func}).toThrowError(TypeError);
        expect(function(){transaction.source = func}).toThrowError(TypeError);
        expect(function(){transaction.grandTotal = func}).toThrowError(TypeError);
        expect(function(){transaction.discount = func}).toThrowError(TypeError);
        expect(function(){transaction.currency = func}).toThrowError(TypeError);
        expect(function(){transaction.dateCreated = func}).toThrowError(TypeError);
        expect(function(){transaction.dateClosed = func}).toThrowError(TypeError);
        expect(function(){transaction.paymentMethod = func}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "undefined"', function () {
        expect(function(){transaction.setProperty('number', undefined)}).toThrowError(TypeError);
        expect(function(){transaction.setNumber(undefined)}).toThrowError(TypeError);
        expect(function(){transaction.setName(undefined)}).toThrowError(TypeError);
        expect(function(){transaction.setStatus(undefined)}).toThrowError(TypeError);
        expect(function(){transaction.setSource(undefined)}).toThrowError(TypeError);
        expect(function(){transaction.setGrandTotal(undefined)}).toThrowError(TypeError);
        expect(function(){transaction.setDiscount(undefined)}).toThrowError(TypeError);
        expect(function(){transaction.setCurrency(undefined)}).toThrowError(TypeError);
        expect(function(){transaction.setDateCreated(undefined)}).toThrowError(TypeError);
        expect(function(){transaction.setDateClosed(undefined)}).toThrowError(TypeError);
        expect(function(){transaction.setPaymentMethod(undefined)}).toThrowError(TypeError);

        expect(function(){transaction.number = undefined}).toThrowError(TypeError);
        expect(function(){transaction.name = undefined}).toThrowError(TypeError);
        expect(function(){transaction.status = undefined}).toThrowError(TypeError);
        expect(function(){transaction.source = undefined}).toThrowError(TypeError);
        expect(function(){transaction.grandTotal = undefined}).toThrowError(TypeError);
        expect(function(){transaction.discount = undefined}).toThrowError(TypeError);
        expect(function(){transaction.currency = undefined}).toThrowError(TypeError);
        expect(function(){transaction.dateCreated = undefined}).toThrowError(TypeError);
        expect(function(){transaction.dateClosed = undefined}).toThrowError(TypeError);
        expect(function(){transaction.paymentMethod = undefined}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "NaN"', function () {
        expect(function(){transaction.setProperty('number', NaN)}).toThrowError(TypeError);
        expect(function(){transaction.setNumber(NaN)}).toThrowError(TypeError);
        expect(function(){transaction.setName(NaN)}).toThrowError(TypeError);
        expect(function(){transaction.setStatus(NaN)}).toThrowError(TypeError);
        expect(function(){transaction.setSource(NaN)}).toThrowError(TypeError);
        expect(function(){transaction.setGrandTotal(NaN)}).toThrowError(TypeError);
        expect(function(){transaction.setDiscount(NaN)}).toThrowError(TypeError);
        expect(function(){transaction.setCurrency(NaN)}).toThrowError(TypeError);
        expect(function(){transaction.setDateCreated(NaN)}).toThrowError(TypeError);
        expect(function(){transaction.setDateClosed(NaN)}).toThrowError(TypeError);
        expect(function(){transaction.setPaymentMethod(NaN)}).toThrowError(TypeError);

        expect(function(){transaction.number = NaN}).toThrowError(TypeError);
        expect(function(){transaction.name = NaN}).toThrowError(TypeError);
        expect(function(){transaction.status = NaN}).toThrowError(TypeError);
        expect(function(){transaction.source = NaN}).toThrowError(TypeError);
        expect(function(){transaction.grandTotal = NaN}).toThrowError(TypeError);
        expect(function(){transaction.discount = NaN}).toThrowError(TypeError);
        expect(function(){transaction.currency = NaN}).toThrowError(TypeError);
        expect(function(){transaction.dateCreated = NaN}).toThrowError(TypeError);
        expect(function(){transaction.dateClosed = NaN}).toThrowError(TypeError);
        expect(function(){transaction.paymentMethod = NaN}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "Infinity"', function () {
        expect(function(){transaction.setProperty('number', Infinity)}).toThrowError(TypeError);
        expect(function(){transaction.setNumber(Infinity)}).toThrowError(TypeError);
        expect(function(){transaction.setName(Infinity)}).toThrowError(TypeError);
        expect(function(){transaction.setStatus(Infinity)}).toThrowError(TypeError);
        expect(function(){transaction.setSource(Infinity)}).toThrowError(TypeError);
        expect(function(){transaction.setGrandTotal(Infinity)}).toThrowError(TypeError);
        expect(function(){transaction.setDiscount(Infinity)}).toThrowError(TypeError);
        expect(function(){transaction.setCurrency(Infinity)}).toThrowError(TypeError);
        expect(function(){transaction.setDateCreated(Infinity)}).toThrowError(TypeError);
        expect(function(){transaction.setDateClosed(Infinity)}).toThrowError(TypeError);
        expect(function(){transaction.setPaymentMethod(Infinity)}).toThrowError(TypeError);

        expect(function(){transaction.number = Infinity}).toThrowError(TypeError);
        expect(function(){transaction.name = Infinity}).toThrowError(TypeError);
        expect(function(){transaction.status = Infinity}).toThrowError(TypeError);
        expect(function(){transaction.source = Infinity}).toThrowError(TypeError);
        expect(function(){transaction.grandTotal = Infinity}).toThrowError(TypeError);
        expect(function(){transaction.discount = Infinity}).toThrowError(TypeError);
        expect(function(){transaction.currency = Infinity}).toThrowError(TypeError);
        expect(function(){transaction.dateCreated = Infinity}).toThrowError(TypeError);
        expect(function(){transaction.dateClosed = Infinity}).toThrowError(TypeError);
        expect(function(){transaction.paymentMethod = Infinity}).toThrowError(TypeError);
    });
});