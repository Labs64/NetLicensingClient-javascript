import PaymentMethod from '@/entities/PaymentMethod';

describe('entities/PaymentMethod', () => {
    let paymentMethod;

    beforeEach(() => {
        paymentMethod = new PaymentMethod();
    });

    it('check "number" property setters/getters', () => {
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

    it('check "active" property setters/getters', () => {
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

    it('check "paypal.subject" property setters/getters', () => {
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

    it('check cast an properties to a native js type', () => {
        paymentMethod.setProperty('number', 1);
        expect(paymentMethod.getProperty('number')).toBe('1');
        paymentMethod.setProperty('number', true);
        expect(paymentMethod.getProperty('number')).toBe('true');

        paymentMethod.setProperty('active', 1);
        expect(paymentMethod.getProperty('active')).toBe(true);
        paymentMethod.setProperty('active', 0);
        expect(paymentMethod.getProperty('active')).toBe(false);
        paymentMethod.setProperty('active', '');
        expect(paymentMethod.getProperty('active')).toBe(false);
        paymentMethod.setProperty('active', '123');
        expect(paymentMethod.getProperty('active')).toBe(true);
        paymentMethod.setProperty('active', null);
        expect(paymentMethod.getProperty('active')).toBe(false);

        paymentMethod.setProperty('paypal.subject', 1);
        expect(paymentMethod.getProperty('paypal.subject')).toBe('1');
        paymentMethod.setProperty('paypal.subject', true);
        expect(paymentMethod.getProperty('paypal.subject')).toBe('true');
    });

    it('check "removeProperty" method', () => {
        paymentMethod.setProperty('number', 'number');
        paymentMethod.removeProperty('number');

        expect(paymentMethod.getProperty('number')).toBe(undefined);
        expect(paymentMethod.number).toBe(undefined);
        expect(paymentMethod.getNumber()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        paymentMethod.setProperty('number', 'number');
        paymentMethod.removeDefine('number');

        expect(paymentMethod.number).toBe(undefined);
        expect(paymentMethod.getProperty('number')).toBe('number');
        expect(paymentMethod.getNumber()).toBe('number');

        paymentMethod.number = 'number_1';

        expect(paymentMethod.number).toBe('number_1');
        expect(paymentMethod.getProperty('number')).toBe('number');
        expect(paymentMethod.getNumber()).toBe('number');
    });
});
