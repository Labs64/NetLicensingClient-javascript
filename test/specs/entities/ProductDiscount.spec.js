import ProductDiscount from '@/entities/ProductDiscount';

describe('entities/ProductDiscount', () => {
    let productDiscount;

    beforeEach(() => {
        productDiscount = new ProductDiscount();
    });

    it('check "totalPrice" property setters/getters', () => {
        productDiscount.setProperty('totalPrice', 10);
        expect(productDiscount.getProperty('totalPrice')).toBe(10);
        expect(productDiscount.getTotalPrice()).toBe(10);
        expect(productDiscount.totalPrice).toBe(10);

        productDiscount.setTotalPrice(20);
        expect(productDiscount.getProperty('totalPrice')).toBe(20);
        expect(productDiscount.getTotalPrice()).toBe(20);
        expect(productDiscount.totalPrice).toBe(20);

        productDiscount.totalPrice = 30;
        expect(productDiscount.getProperty('totalPrice')).toBe(30);
        expect(productDiscount.getTotalPrice()).toBe(30);
        expect(productDiscount.totalPrice).toBe(30);
    });

    it('check "currency" property setters/getters', () => {
        productDiscount.setProperty('currency', 'EUR');
        expect(productDiscount.getProperty('currency')).toBe('EUR');
        expect(productDiscount.getCurrency()).toBe('EUR');
        expect(productDiscount.currency).toBe('EUR');

        productDiscount.setCurrency('USD');
        expect(productDiscount.getProperty('currency')).toBe('USD');
        expect(productDiscount.getCurrency()).toBe('USD');
        expect(productDiscount.currency).toBe('USD');

        productDiscount.currency = 'BYN';
        expect(productDiscount.getProperty('currency')).toBe('BYN');
        expect(productDiscount.getCurrency()).toBe('BYN');
        expect(productDiscount.currency).toBe('BYN');
    });

    it('check "amountFix" property setters/getters', () => {
        productDiscount.setProperty('amountFix', 10);
        expect(productDiscount.getProperty('amountFix')).toBe(10);
        expect(productDiscount.getAmountFix()).toBe(10);
        expect(productDiscount.amountFix).toBe(10);

        productDiscount.setAmountFix(20);
        expect(productDiscount.getProperty('amountFix')).toBe(20);
        expect(productDiscount.getAmountFix()).toBe(20);
        expect(productDiscount.amountFix).toBe(20);

        productDiscount.amountFix = 30;
        expect(productDiscount.getProperty('amountFix')).toBe(30);
        expect(productDiscount.getAmountFix()).toBe(30);
        expect(productDiscount.amountFix).toBe(30);
    });

    it('check "amountPercent" property setters/getters', () => {
        productDiscount.setProperty('amountPercent', 10);
        expect(productDiscount.getProperty('amountPercent')).toBe(10);
        expect(productDiscount.getAmountPercent()).toBe(10);
        expect(productDiscount.amountPercent).toBe(10);

        productDiscount.setAmountPercent(20);
        expect(productDiscount.getProperty('amountPercent')).toBe(20);
        expect(productDiscount.getAmountPercent()).toBe(20);
        expect(productDiscount.amountPercent).toBe(20);

        productDiscount.amountPercent = 30;
        expect(productDiscount.getProperty('amountPercent')).toBe(30);
        expect(productDiscount.getAmountPercent()).toBe(30);
        expect(productDiscount.amountPercent).toBe(30);
    });

    it('check "toString" method', () => {
        productDiscount.setProperty('totalPrice', 100);
        productDiscount.setProperty('currency', 'EUR');
        productDiscount.setProperty('amountFix', 5);
        expect(productDiscount.toString()).toBe('100;EUR;5');

        productDiscount.setProperty('totalPrice', 50);
        productDiscount.setProperty('currency', 'USD');
        productDiscount.setProperty('amountPercent', 10);
        expect(productDiscount.toString()).toBe('50;USD;10%');
    });

    it('check cast an properties to a native js type', () => {
        productDiscount.setProperty('totalPrice', '3.14');
        expect(productDiscount.getProperty('totalPrice')).toBe(3.14);
        productDiscount.setProperty('totalPrice', '314e-2');
        expect(productDiscount.getProperty('totalPrice')).toBe(3.14);
        productDiscount.setProperty('totalPrice', '0.0314E+2');
        expect(productDiscount.getProperty('totalPrice')).toBe(3.14);
        productDiscount.setProperty('totalPrice', '3.14any non-numeric characters');
        expect(productDiscount.getProperty('totalPrice')).toBe(3.14);

        productDiscount.setProperty('currency', 1);
        expect(productDiscount.getProperty('currency')).toBe('1');
        productDiscount.setProperty('currency', true);
        expect(productDiscount.getProperty('currency')).toBe('true');

        productDiscount.setProperty('amountFix', '3.14');
        expect(productDiscount.getProperty('amountFix')).toBe(3.14);
        productDiscount.setProperty('amountFix', '314e-2');
        expect(productDiscount.getProperty('amountFix')).toBe(3.14);
        productDiscount.setProperty('amountFix', '0.0314E+2');
        expect(productDiscount.getProperty('amountFix')).toBe(3.14);
        productDiscount.setProperty('amountFix', '3.14any non-numeric characters');
        expect(productDiscount.getProperty('amountFix')).toBe(3.14);

        productDiscount.setProperty('amountPercent', '015');
        expect(productDiscount.getProperty('amountPercent')).toBe(15);
        productDiscount.setProperty('amountPercent', 15.99);
        expect(productDiscount.getProperty('amountPercent')).toBe(15);
        productDiscount.setProperty('amountPercent', '15*3');
        expect(productDiscount.getProperty('amountPercent')).toBe(15);
        productDiscount.setProperty('amountPercent', '15e2');
        expect(productDiscount.getProperty('amountPercent')).toBe(15);
    });

    it('check throwable error if property value is typeof "function"', () => {
        const func = () => {};

        expect(() => { productDiscount.setTotalPrice(func); }).toThrowError(TypeError);
        expect(() => { productDiscount.setNumber(func); }).toThrowError(TypeError);
        expect(() => { productDiscount.setCurrency(func); }).toThrowError(TypeError);
        expect(() => { productDiscount.setAmountFix(func); }).toThrowError(TypeError);
        expect(() => { productDiscount.setAmountPercent(func); }).toThrowError(TypeError);

        expect(() => { productDiscount.totalPrice = func; }).toThrowError(TypeError);
        expect(() => { productDiscount.currency = func; }).toThrowError(TypeError);
        expect(() => { productDiscount.amountFix = func; }).toThrowError(TypeError);
        expect(() => { productDiscount.amountPercent = func; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "undefined"', () => {
        expect(() => { productDiscount.setTotalPrice(undefined); }).toThrowError(TypeError);
        expect(() => { productDiscount.setNumber(undefined); }).toThrowError(TypeError);
        expect(() => { productDiscount.setCurrency(undefined); }).toThrowError(TypeError);
        expect(() => { productDiscount.setAmountFix(undefined); }).toThrowError(TypeError);
        expect(() => { productDiscount.setAmountPercent(undefined); }).toThrowError(TypeError);

        expect(() => { productDiscount.totalPrice = undefined; }).toThrowError(TypeError);
        expect(() => { productDiscount.currency = undefined; }).toThrowError(TypeError);
        expect(() => { productDiscount.amountFix = undefined; }).toThrowError(TypeError);
        expect(() => { productDiscount.amountPercent = undefined; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "NaN"', () => {
        expect(() => { productDiscount.setTotalPrice(NaN); }).toThrowError(TypeError);
        expect(() => { productDiscount.setNumber(NaN); }).toThrowError(TypeError);
        expect(() => { productDiscount.setCurrency(NaN); }).toThrowError(TypeError);
        expect(() => { productDiscount.setAmountFix(NaN); }).toThrowError(TypeError);
        expect(() => { productDiscount.setAmountPercent(NaN); }).toThrowError(TypeError);

        expect(() => { productDiscount.totalPrice = NaN; }).toThrowError(TypeError);
        expect(() => { productDiscount.currency = NaN; }).toThrowError(TypeError);
        expect(() => { productDiscount.amountFix = NaN; }).toThrowError(TypeError);
        expect(() => { productDiscount.amountPercent = NaN; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "Infinity"', () => {
        expect(() => { productDiscount.setTotalPrice(Infinity); }).toThrowError(TypeError);
        expect(() => { productDiscount.setNumber(Infinity); }).toThrowError(TypeError);
        expect(() => { productDiscount.setCurrency(Infinity); }).toThrowError(TypeError);
        expect(() => { productDiscount.setAmountFix(Infinity); }).toThrowError(TypeError);
        expect(() => { productDiscount.setAmountPercent(Infinity); }).toThrowError(TypeError);

        expect(() => { productDiscount.totalPrice = Infinity; }).toThrowError(TypeError);
        expect(() => { productDiscount.currency = Infinity; }).toThrowError(TypeError);
        expect(() => { productDiscount.amountFix = Infinity; }).toThrowError(TypeError);
        expect(() => { productDiscount.amountPercent = Infinity; }).toThrowError(TypeError);
    });

    it('check "removeProperty" method', () => {
        productDiscount.setProperty('totalPrice', 10);
        productDiscount.removeProperty('totalPrice');

        expect(productDiscount.getProperty('totalPrice')).toBe(undefined);
        expect(productDiscount.totalPrice).toBe(undefined);
        expect(productDiscount.getTotalPrice()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        productDiscount.setProperty('totalPrice', 20);
        productDiscount.removeDefine('totalPrice');

        expect(productDiscount.totalPrice).toBe(undefined);
        expect(productDiscount.getProperty('totalPrice')).toBe(20);
        expect(productDiscount.getTotalPrice()).toBe(20);

        productDiscount.totalPrice = 30;

        expect(productDiscount.totalPrice).toBe(30);
        expect(productDiscount.getProperty('totalPrice')).toBe(20);
        expect(productDiscount.getTotalPrice()).toBe(20);
    });
});
