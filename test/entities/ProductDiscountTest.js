describe('entities.ProductDiscountTest', function () {
    var productDiscount;

    beforeEach(function () {
        productDiscount = new NetLicensing .ProductDiscount();
    });

    it('check "totalPrice" property setters/getters', function () {
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

    it('check "currency" property setters/getters', function () {
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

    it('check "amountFix" property setters/getters', function () {
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

    it('check "amountPercent" property setters/getters', function () {
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

    it('check "toString" method', function () {
        productDiscount.setProperty('totalPrice', 100);
        productDiscount.setProperty('currency', 'EUR');
        productDiscount.setProperty('amountFix', 5);
        expect(productDiscount.toString()).toBe('100;EUR;5');

        productDiscount.setProperty('totalPrice', 50);
        productDiscount.setProperty('currency', 'USD');
        productDiscount.setProperty('amountPercent', 10);
        expect(productDiscount.toString()).toBe('50;USD;10%');
    });

    it('check cast an properties to a native js type', function () {
        productDiscount.setProperty('totalPrice', "3.14");
        expect(productDiscount.getProperty('totalPrice')).toBe(3.14);
        productDiscount.setProperty('totalPrice', "314e-2");
        expect(productDiscount.getProperty('totalPrice')).toBe(3.14);
        productDiscount.setProperty('totalPrice', "0.0314E+2");
        expect(productDiscount.getProperty('totalPrice')).toBe(3.14);
        productDiscount.setProperty('totalPrice', "3.14any non-numeric characters");
        expect(productDiscount.getProperty('totalPrice')).toBe(3.14);

        productDiscount.setProperty('currency', 1);
        expect(productDiscount.getProperty('currency')).toBe('1');
        productDiscount.setProperty('currency', true);
        expect(productDiscount.getProperty('currency')).toBe('true');

        productDiscount.setProperty('amountFix', "3.14");
        expect(productDiscount.getProperty('amountFix')).toBe(3.14);
        productDiscount.setProperty('amountFix', "314e-2");
        expect(productDiscount.getProperty('amountFix')).toBe(3.14);
        productDiscount.setProperty('amountFix', "0.0314E+2");
        expect(productDiscount.getProperty('amountFix')).toBe(3.14);
        productDiscount.setProperty('amountFix', "3.14any non-numeric characters");
        expect(productDiscount.getProperty('amountFix')).toBe(3.14);

        productDiscount.setProperty('amountPercent', "015");
        expect(productDiscount.getProperty('amountPercent')).toBe(15);
        productDiscount.setProperty('amountPercent', 15.99);
        expect(productDiscount.getProperty('amountPercent')).toBe(15);
        productDiscount.setProperty('amountPercent', '15*3');
        expect(productDiscount.getProperty('amountPercent')).toBe(15);
        productDiscount.setProperty('amountPercent', '15e2');
        expect(productDiscount.getProperty('amountPercent')).toBe(15);
    });

    it('check throwable error if property value is typeof "function"', function () {
        var func = function () {
        };

        expect(function(){productDiscount.setTotalPrice(func)}).toThrowError(TypeError);
        expect(function(){productDiscount.setNumber(func)}).toThrowError(TypeError);
        expect(function(){productDiscount.setCurrency(func)}).toThrowError(TypeError);
        expect(function(){productDiscount.setAmountFix(func)}).toThrowError(TypeError);
        expect(function(){productDiscount.setAmountPercent(func)}).toThrowError(TypeError);

        expect(function(){productDiscount.totalPrice = func}).toThrowError(TypeError);
        expect(function(){productDiscount.currency = func}).toThrowError(TypeError);
        expect(function(){productDiscount.amountFix = func}).toThrowError(TypeError);
        expect(function(){productDiscount.amountPercent = func}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "undefined"', function () {
        expect(function(){productDiscount.setTotalPrice(undefined)}).toThrowError(TypeError);
        expect(function(){productDiscount.setNumber(undefined)}).toThrowError(TypeError);
        expect(function(){productDiscount.setCurrency(undefined)}).toThrowError(TypeError);
        expect(function(){productDiscount.setAmountFix(undefined)}).toThrowError(TypeError);
        expect(function(){productDiscount.setAmountPercent(undefined)}).toThrowError(TypeError);

        expect(function(){productDiscount.totalPrice = undefined}).toThrowError(TypeError);
        expect(function(){productDiscount.currency = undefined}).toThrowError(TypeError);
        expect(function(){productDiscount.amountFix = undefined}).toThrowError(TypeError);
        expect(function(){productDiscount.amountPercent = undefined}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "NaN"', function () {
        expect(function(){productDiscount.setTotalPrice(NaN)}).toThrowError(TypeError);
        expect(function(){productDiscount.setNumber(NaN)}).toThrowError(TypeError);
        expect(function(){productDiscount.setCurrency(NaN)}).toThrowError(TypeError);
        expect(function(){productDiscount.setAmountFix(NaN)}).toThrowError(TypeError);
        expect(function(){productDiscount.setAmountPercent(NaN)}).toThrowError(TypeError);

        expect(function(){productDiscount.totalPrice = NaN}).toThrowError(TypeError);
        expect(function(){productDiscount.currency = NaN}).toThrowError(TypeError);
        expect(function(){productDiscount.amountFix = NaN}).toThrowError(TypeError);
        expect(function(){productDiscount.amountPercent = NaN}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "Infinity"', function () {
        expect(function(){productDiscount.setTotalPrice(Infinity)}).toThrowError(TypeError);
        expect(function(){productDiscount.setNumber(Infinity)}).toThrowError(TypeError);
        expect(function(){productDiscount.setCurrency(Infinity)}).toThrowError(TypeError);
        expect(function(){productDiscount.setAmountFix(Infinity)}).toThrowError(TypeError);
        expect(function(){productDiscount.setAmountPercent(Infinity)}).toThrowError(TypeError);

        expect(function(){productDiscount.totalPrice = Infinity}).toThrowError(TypeError);
        expect(function(){productDiscount.currency = Infinity}).toThrowError(TypeError);
        expect(function(){productDiscount.amountFix = Infinity}).toThrowError(TypeError);
        expect(function(){productDiscount.amountPercent = Infinity}).toThrowError(TypeError);
    });
});