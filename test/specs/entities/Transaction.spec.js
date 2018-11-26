import Transaction from '@/entities/Transaction';

describe('entities/Transaction', () => {
    let transaction;

    beforeEach(() => {
        transaction = new Transaction();
    });

    it('check "number" property setters/getters', () => {
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

    it('check "name" property setters/getters', () => {
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

    it('check "status" property setters/getters', () => {
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

    it('check "source" property setters/getters', () => {
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

    it('check "grandTotal" property setters/getters', () => {
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

    it('check "discount" property setters/getters', () => {
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

    it('check "currency" property setters/getters', () => {
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

    it('check "dateCreated" property setters/getters', () => {
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

    it('check "dateClosed" property setters/getters', () => {
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

    it('check "active" property setters/getters', () => {
        transaction.setActive();
        expect(transaction.getProperty('active')).toBe(true);
        expect(transaction.active).toBe(true);
    });

    it('check "paymentMethod" property setters/getters', () => {
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

    it('check cast an properties to a native js type', () => {
        transaction.setProperty('number', 1);
        expect(transaction.getProperty('number')).toBe('1');
        transaction.setProperty('number', true);
        expect(transaction.getProperty('number')).toBe('true');

        transaction.setProperty('active', 1);
        expect(transaction.getProperty('active')).toBe(true);

        transaction = new Transaction();
        transaction.setProperty('active', 0);
        expect(transaction.getProperty('active')).toBe(false);

        transaction = new Transaction();
        transaction.setProperty('active', '');
        expect(transaction.getProperty('active')).toBe(false);

        transaction = new Transaction();
        transaction.setProperty('active', '123');
        expect(transaction.getProperty('active')).toBe(true);

        transaction = new Transaction();
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

        transaction.setProperty('grandTotal', '3.14');
        expect(transaction.getProperty('grandTotal')).toBe(3.14);
        transaction.setProperty('grandTotal', '314e-2');
        expect(transaction.getProperty('grandTotal')).toBe(3.14);
        transaction.setProperty('grandTotal', '0.0314E+2');
        expect(transaction.getProperty('grandTotal')).toBe(3.14);
        transaction.setProperty('grandTotal', '3.14any non-numeric characters');
        expect(transaction.getProperty('grandTotal')).toBe(3.14);

        transaction.setProperty('discount', '3.14');
        expect(transaction.getProperty('discount')).toBe(3.14);
        transaction.setProperty('discount', '314e-2');
        expect(transaction.getProperty('discount')).toBe(3.14);
        transaction.setProperty('discount', '0.0314E+2');
        expect(transaction.getProperty('discount')).toBe(3.14);
        transaction.setProperty('discount', '3.14any non-numeric characters');
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

    it('check throwable error if property value is typeof "function"', () => {
        const func = () => {};

        expect(() => { transaction.setProperty('number', func); }).toThrowError(TypeError);
        expect(() => { transaction.setNumber(func); }).toThrowError(TypeError);
        expect(() => { transaction.setName(func); }).toThrowError(TypeError);
        expect(() => { transaction.setStatus(func); }).toThrowError(TypeError);
        expect(() => { transaction.setSource(func); }).toThrowError(TypeError);
        expect(() => { transaction.setGrandTotal(func); }).toThrowError(TypeError);
        expect(() => { transaction.setDiscount(func); }).toThrowError(TypeError);
        expect(() => { transaction.setCurrency(func); }).toThrowError(TypeError);
        expect(() => { transaction.setDateCreated(func); }).toThrowError(TypeError);
        expect(() => { transaction.setDateClosed(func); }).toThrowError(TypeError);
        expect(() => { transaction.setPaymentMethod(func); }).toThrowError(TypeError);

        expect(() => { transaction.number = func; }).toThrowError(TypeError);
        expect(() => { transaction.name = func; }).toThrowError(TypeError);
        expect(() => { transaction.status = func; }).toThrowError(TypeError);
        expect(() => { transaction.source = func; }).toThrowError(TypeError);
        expect(() => { transaction.grandTotal = func; }).toThrowError(TypeError);
        expect(() => { transaction.discount = func; }).toThrowError(TypeError);
        expect(() => { transaction.currency = func; }).toThrowError(TypeError);
        expect(() => { transaction.dateCreated = func; }).toThrowError(TypeError);
        expect(() => { transaction.dateClosed = func; }).toThrowError(TypeError);
        expect(() => { transaction.paymentMethod = func; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "undefined"', () => {
        expect(() => { transaction.setProperty('number', undefined); }).toThrowError(TypeError);
        expect(() => { transaction.setNumber(undefined); }).toThrowError(TypeError);
        expect(() => { transaction.setName(undefined); }).toThrowError(TypeError);
        expect(() => { transaction.setStatus(undefined); }).toThrowError(TypeError);
        expect(() => { transaction.setSource(undefined); }).toThrowError(TypeError);
        expect(() => { transaction.setGrandTotal(undefined); }).toThrowError(TypeError);
        expect(() => { transaction.setDiscount(undefined); }).toThrowError(TypeError);
        expect(() => { transaction.setCurrency(undefined); }).toThrowError(TypeError);
        expect(() => { transaction.setDateCreated(undefined); }).toThrowError(TypeError);
        expect(() => { transaction.setDateClosed(undefined); }).toThrowError(TypeError);
        expect(() => { transaction.setPaymentMethod(undefined); }).toThrowError(TypeError);

        expect(() => { transaction.number = undefined; }).toThrowError(TypeError);
        expect(() => { transaction.name = undefined; }).toThrowError(TypeError);
        expect(() => { transaction.status = undefined; }).toThrowError(TypeError);
        expect(() => { transaction.source = undefined; }).toThrowError(TypeError);
        expect(() => { transaction.grandTotal = undefined; }).toThrowError(TypeError);
        expect(() => { transaction.discount = undefined; }).toThrowError(TypeError);
        expect(() => { transaction.currency = undefined; }).toThrowError(TypeError);
        expect(() => { transaction.dateCreated = undefined; }).toThrowError(TypeError);
        expect(() => { transaction.dateClosed = undefined; }).toThrowError(TypeError);
        expect(() => { transaction.paymentMethod = undefined; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "NaN"', () => {
        expect(() => { transaction.setProperty('number', NaN); }).toThrowError(TypeError);
        expect(() => { transaction.setNumber(NaN); }).toThrowError(TypeError);
        expect(() => { transaction.setName(NaN); }).toThrowError(TypeError);
        expect(() => { transaction.setStatus(NaN); }).toThrowError(TypeError);
        expect(() => { transaction.setSource(NaN); }).toThrowError(TypeError);
        expect(() => { transaction.setGrandTotal(NaN); }).toThrowError(TypeError);
        expect(() => { transaction.setDiscount(NaN); }).toThrowError(TypeError);
        expect(() => { transaction.setCurrency(NaN); }).toThrowError(TypeError);
        expect(() => { transaction.setDateCreated(NaN); }).toThrowError(TypeError);
        expect(() => { transaction.setDateClosed(NaN); }).toThrowError(TypeError);
        expect(() => { transaction.setPaymentMethod(NaN); }).toThrowError(TypeError);

        expect(() => { transaction.number = NaN; }).toThrowError(TypeError);
        expect(() => { transaction.name = NaN; }).toThrowError(TypeError);
        expect(() => { transaction.status = NaN; }).toThrowError(TypeError);
        expect(() => { transaction.source = NaN; }).toThrowError(TypeError);
        expect(() => { transaction.grandTotal = NaN; }).toThrowError(TypeError);
        expect(() => { transaction.discount = NaN; }).toThrowError(TypeError);
        expect(() => { transaction.currency = NaN; }).toThrowError(TypeError);
        expect(() => { transaction.dateCreated = NaN; }).toThrowError(TypeError);
        expect(() => { transaction.dateClosed = NaN; }).toThrowError(TypeError);
        expect(() => { transaction.paymentMethod = NaN; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "Infinity"', () => {
        expect(() => { transaction.setProperty('number', Infinity); }).toThrowError(TypeError);
        expect(() => { transaction.setNumber(Infinity); }).toThrowError(TypeError);
        expect(() => { transaction.setName(Infinity); }).toThrowError(TypeError);
        expect(() => { transaction.setStatus(Infinity); }).toThrowError(TypeError);
        expect(() => { transaction.setSource(Infinity); }).toThrowError(TypeError);
        expect(() => { transaction.setGrandTotal(Infinity); }).toThrowError(TypeError);
        expect(() => { transaction.setDiscount(Infinity); }).toThrowError(TypeError);
        expect(() => { transaction.setCurrency(Infinity); }).toThrowError(TypeError);
        expect(() => { transaction.setDateCreated(Infinity); }).toThrowError(TypeError);
        expect(() => { transaction.setDateClosed(Infinity); }).toThrowError(TypeError);
        expect(() => { transaction.setPaymentMethod(Infinity); }).toThrowError(TypeError);

        expect(() => { transaction.number = Infinity; }).toThrowError(TypeError);
        expect(() => { transaction.name = Infinity; }).toThrowError(TypeError);
        expect(() => { transaction.status = Infinity; }).toThrowError(TypeError);
        expect(() => { transaction.source = Infinity; }).toThrowError(TypeError);
        expect(() => { transaction.grandTotal = Infinity; }).toThrowError(TypeError);
        expect(() => { transaction.discount = Infinity; }).toThrowError(TypeError);
        expect(() => { transaction.currency = Infinity; }).toThrowError(TypeError);
        expect(() => { transaction.dateCreated = Infinity; }).toThrowError(TypeError);
        expect(() => { transaction.dateClosed = Infinity; }).toThrowError(TypeError);
        expect(() => { transaction.paymentMethod = Infinity; }).toThrowError(TypeError);
    });

    it('check "removeProperty" method', () => {
        transaction.setProperty('number', 'number');
        transaction.removeProperty('number');

        expect(transaction.getProperty('number')).toBe(undefined);
        expect(transaction.number).toBe(undefined);
        expect(transaction.getNumber()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        transaction.setProperty('number', 'number');
        transaction.removeDefine('number');

        expect(transaction.number).toBe(undefined);
        expect(transaction.getProperty('number')).toBe('number');
        expect(transaction.getNumber()).toBe('number');

        transaction.number = 'number_1';

        expect(transaction.number).toBe('number_1');
        expect(transaction.getProperty('number')).toBe('number');
        expect(transaction.getNumber()).toBe('number');
    });
});
