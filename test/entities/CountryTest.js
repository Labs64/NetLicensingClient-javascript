describe('entities.CountryTest', function () {
    var country;

    beforeEach(function () {
        country = new Netlicensing.Country();
    });

    it('check "code" property setters/getters', function () {
        country.setProperty('code', 'DE');
        expect(country.getProperty('code')).toBe('DE');
        expect(country.getCode()).toBe('DE');
        expect(country.code).toBe('DE');

        country.setCode('BY');
        expect(country.getProperty('code')).toBe('BY');
        expect(country.getCode()).toBe('BY');
        expect(country.code).toBe('BY');

        country.code = 'UA';
        expect(country.getProperty('code')).toBe('UA');
        expect(country.getCode()).toBe('UA');
        expect(country.code).toBe('UA');
    });

    it('check "name" property setters/getters', function () {
        country.setProperty('name', 'name_0');
        expect(country.getProperty('name')).toBe('name_0');
        expect(country.getName()).toBe('name_0');
        expect(country.name).toBe('name_0');

        country.setName('name_1');
        expect(country.getProperty('name')).toBe('name_1');
        expect(country.getName()).toBe('name_1');
        expect(country.name).toBe('name_1');

        country.name = 'name_2';
        expect(country.getProperty('name')).toBe('name_2');
        expect(country.getName()).toBe('name_2');
        expect(country.name).toBe('name_2');
    });

    it('check "vatPercent" property setters/getters', function () {
        country.setProperty('vatPercent', 10);
        expect(country.getProperty('vatPercent')).toBe(10);
        expect(country.getVatPercent()).toBe(10);
        expect(country.vatPercent).toBe(10);

        country.setVatPercent(20);
        expect(country.getProperty('vatPercent')).toBe(20);
        expect(country.getVatPercent()).toBe(20);
        expect(country.vatPercent).toBe(20);

        country.vatPercent = 30;
        expect(country.getProperty('vatPercent')).toBe(30);
        expect(country.getVatPercent()).toBe(30);
        expect(country.vatPercent).toBe(30);
    });

    it('check "isEu" property setters/getters', function () {
        country.setProperty('isEu', true);
        expect(country.getProperty('isEu')).toBe(true);
        expect(country.getIsEu()).toBe(true);
        expect(country.isEu).toBe(true);

        country.setIsEu(false);
        expect(country.getProperty('isEu')).toBe(false);
        expect(country.getIsEu()).toBe(false);
        expect(country.isEu).toBe(false);

        country.isEu = true;
        expect(country.getProperty('isEu')).toBe(true);
        expect(country.getIsEu()).toBe(true);
        expect(country.isEu).toBe(true);
    });

    it('check cast an properties to a native js type', function () {
        country.setProperty('code', 1);
        expect(country.getProperty('code')).toBe('1');
        country.setProperty('code', true);
        expect(country.getProperty('code')).toBe('true');

        country.setProperty('name', 1);
        expect(country.getProperty('name')).toBe('1');
        country.setProperty('name', true);
        expect(country.getProperty('name')).toBe('true');

        country.setProperty('vatPercent', "015");
        expect(country.getProperty('vatPercent')).toBe(15);
        country.setProperty('vatPercent', 15.99);
        expect(country.getProperty('vatPercent')).toBe(15);
        country.setProperty('vatPercent', '15*3');
        expect(country.getProperty('vatPercent')).toBe(15);
        country.setProperty('vatPercent', '15e2');
        expect(country.getProperty('vatPercent')).toBe(15);

        country.setProperty('isEu', 1);
        expect(country.getProperty('isEu')).toBe(true);
        country.setProperty('isEu', 0);
        expect(country.getProperty('isEu')).toBe(false);
        country.setProperty('isEu', "");
        expect(country.getProperty('isEu')).toBe(false);
        country.setProperty('isEu', "123");
        expect(country.getProperty('isEu')).toBe(true);
        country.setProperty('isEu', null);
        expect(country.getProperty('isEu')).toBe(false);
    });

    it('check throwable error if property value is typeof "function"', function () {
        var func = function () {
        };

        expect(function(){country.setProperty('code',func)}).toThrowError(TypeError);
        expect(function(){country.setCode(func)}).toThrowError(TypeError);
        expect(function(){country.setName(func)}).toThrowError(TypeError);
        expect(function(){country.setVatPercent(func)}).toThrowError(TypeError);
        expect(function(){country.setIsEu(func)}).toThrowError(TypeError);


        expect(function(){country.code = func}).toThrowError(TypeError);
        expect(function(){country.name = func}).toThrowError(TypeError);
        expect(function(){country.vatPercent = func}).toThrowError(TypeError);
        expect(function(){country.isEu = func}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "undefined"', function () {
        expect(function(){country.setProperty('code',undefined)}).toThrowError(TypeError);
        expect(function(){country.setCode(undefined)}).toThrowError(TypeError);
        expect(function(){country.setName(undefined)}).toThrowError(TypeError);
        expect(function(){country.setVatPercent(undefined)}).toThrowError(TypeError);
        expect(function(){country.setIsEu(undefined)}).toThrowError(TypeError);


        expect(function(){country.code = undefined}).toThrowError(TypeError);
        expect(function(){country.name = undefined}).toThrowError(TypeError);
        expect(function(){country.vatPercent = undefined}).toThrowError(TypeError);
        expect(function(){country.isEu = undefined}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "NaN"', function () {
        expect(function(){country.setProperty('code',NaN)}).toThrowError(TypeError);
        expect(function(){country.setCode(NaN)}).toThrowError(TypeError);
        expect(function(){country.setName(NaN)}).toThrowError(TypeError);
        expect(function(){country.setVatPercent(NaN)}).toThrowError(TypeError);
        expect(function(){country.setIsEu(NaN)}).toThrowError(TypeError);


        expect(function(){country.code = NaN}).toThrowError(TypeError);
        expect(function(){country.name = NaN}).toThrowError(TypeError);
        expect(function(){country.vatPercent = NaN}).toThrowError(TypeError);
        expect(function(){country.isEu = NaN}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "Infinity"', function () {
        expect(function(){country.setProperty('code',Infinity)}).toThrowError(TypeError);
        expect(function(){country.setCode(Infinity)}).toThrowError(TypeError);
        expect(function(){country.setName(Infinity)}).toThrowError(TypeError);
        expect(function(){country.setVatPercent(Infinity)}).toThrowError(TypeError);
        expect(function(){country.setIsEu(Infinity)}).toThrowError(TypeError);


        expect(function(){country.code = Infinity}).toThrowError(TypeError);
        expect(function(){country.name = Infinity}).toThrowError(TypeError);
        expect(function(){country.vatPercent = Infinity}).toThrowError(TypeError);
        expect(function(){country.isEu = Infinity}).toThrowError(TypeError);
    });
});