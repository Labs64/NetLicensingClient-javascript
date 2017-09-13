describe('entities.LicenseTest', function () {
    var license;

    beforeEach(function () {
        license = new Netlicensing.License();
    });

    it('check "number" property setters/getters', function () {
        license.setProperty('number', 'number_0');
        expect(license.getProperty('number')).toBe('number_0');
        expect(license.getNumber()).toBe('number_0');
        expect(license.number).toBe('number_0');

        license.setNumber('number_1');
        expect(license.getProperty('number')).toBe('number_1');
        expect(license.getNumber()).toBe('number_1');
        expect(license.number).toBe('number_1');

        license.number = 'number_2';
        expect(license.getProperty('number')).toBe('number_2');
        expect(license.getNumber()).toBe('number_2');
        expect(license.number).toBe('number_2');
    });

    it('check "name" property setters/getters', function () {
        license.setProperty('name', 'name_0');
        expect(license.getProperty('name')).toBe('name_0');
        expect(license.getName()).toBe('name_0');
        expect(license.name).toBe('name_0');

        license.setName('name_1');
        expect(license.getProperty('name')).toBe('name_1');
        expect(license.getName()).toBe('name_1');
        expect(license.name).toBe('name_1');

        license.name = 'name_2';
        expect(license.getProperty('name')).toBe('name_2');
        expect(license.getName()).toBe('name_2');
        expect(license.name).toBe('name_2');
    });

    it('check "active" property setters/getters', function () {
        license.setProperty('active', true);
        expect(license.getProperty('active')).toBe(true);
        expect(license.getActive()).toBe(true);
        expect(license.active).toBe(true);

        license.setActive(false);
        expect(license.getProperty('active')).toBe(false);
        expect(license.getActive()).toBe(false);
        expect(license.active).toBe(false);

        license.active = true;
        expect(license.getProperty('active')).toBe(true);
        expect(license.getActive()).toBe(true);
        expect(license.active).toBe(true);
    });

    it('check "parentfeature" property setters/getters', function () {
        license.setProperty('parentfeature', 'parentfeature_0');
        expect(license.getProperty('parentfeature')).toBe('parentfeature_0');
        expect(license.getParentfeature()).toBe('parentfeature_0');
        expect(license.parentfeature).toBe('parentfeature_0');

        license.setParentfeature('parentfeature_1');
        expect(license.getProperty('parentfeature')).toBe('parentfeature_1');
        expect(license.getParentfeature()).toBe('parentfeature_1');
        expect(license.parentfeature).toBe('parentfeature_1');

        license.parentfeature = 'parentfeature_2';
        expect(license.getProperty('parentfeature')).toBe('parentfeature_2');
        expect(license.getParentfeature()).toBe('parentfeature_2');
        expect(license.parentfeature).toBe('parentfeature_2');
    });

    it('check "timeVolume" property setters/getters', function () {
        license.setProperty('timeVolume', 1);
        expect(license.getProperty('timeVolume')).toBe(1);
        expect(license.getTimeVolume()).toBe(1);
        expect(license.timeVolume).toBe(1);

        license.setTimeVolume(2);
        expect(license.getProperty('timeVolume')).toBe(2);
        expect(license.getTimeVolume()).toBe(2);
        expect(license.timeVolume).toBe(2);

        license.timeVolume = 3;
        expect(license.getProperty('timeVolume')).toBe(3);
        expect(license.getTimeVolume()).toBe(3);
        expect(license.timeVolume).toBe(3);
    });

    it('check "startDate" property setters/getters', function () {
        license.setProperty('startDate', new Date('2055-01-01'));
        expect(license.getProperty('startDate').toISOString()).toBe(new Date('2055-01-01').toISOString());
        expect(license.getStartDate().toISOString()).toBe(new Date('2055-01-01').toISOString());
        expect(license.startDate.toISOString()).toBe(new Date('2055-01-01').toISOString());

        license.setStartDate(new Date('2055-01-02'));
        expect(license.getProperty('startDate').toISOString()).toBe(new Date('2055-01-02').toISOString());
        expect(license.getStartDate().toISOString()).toBe(new Date('2055-01-02').toISOString());
        expect(license.startDate.toISOString()).toBe(new Date('2055-01-02').toISOString());

        license.startDate = new Date('2055-01-03');
        expect(license.getProperty('startDate').toISOString()).toBe(new Date('2055-01-03').toISOString());
        expect(license.getStartDate().toISOString()).toBe(new Date('2055-01-03').toISOString());
        expect(license.startDate.toISOString()).toBe(new Date('2055-01-03').toISOString());
    });

    it('check "price" property getters', function () {
        license.price = 100;
        expect(license.getProperty('price')).toBe(undefined);
        expect(license.getPrice()).toBe(undefined);
        expect(license.price).toBe(undefined);

        license.setProperty('price', 100);
        expect(license.getProperty('price')).toBe(100);
        expect(license.getPrice()).toBe(100);
        expect(license.price).toBe(100);
    });

    it('check "currency" property getters', function () {
        license.currency = 'EUR';
        expect(license.getProperty('currency')).toBe(undefined);
        expect(license.getCurrency()).toBe(undefined);
        expect(license.currency).toBe(undefined);

        license.setProperty('currency', 'EUR');
        expect(license.getProperty('currency')).toBe('EUR');
        expect(license.getCurrency()).toBe('EUR');
        expect(license.currency).toBe('EUR');
    });

    it('check "inUse" property getters', function () {
        license.inUse = true;
        expect(license.getProperty('inUse')).toBe(undefined);
        expect(license.getInUse()).toBe(undefined);
        expect(license.inUse).toBe(undefined);

        license.setProperty('inUse', true);
        expect(license.getProperty('inUse')).toBe(true);
        expect(license.getInUse()).toBe(true);
        expect(license.inUse).toBe(true);
    });

    it('check "custom-property" property setters/getters', function () {
        license.setProperty('custom_property', 'my_custom_property_0');
        expect(license.getProperty('custom_property')).toBe('my_custom_property_0');
        expect(license.custom_property).toBe('my_custom_property_0');

        license.custom_property = 'my_custom_property_1';
        expect(license.getProperty('custom_property')).toBe('my_custom_property_1');
        expect(license.custom_property).toBe('my_custom_property_1');
    });

    it('check cast an properties to a native js type', function () {
        license.setProperty('number', 1);
        expect(license.getProperty('number')).toBe('1');
        license.setProperty('number', true);
        expect(license.getProperty('number')).toBe('true');

        license.setProperty('active', 1);
        expect(license.getProperty('active')).toBe(true);
        license.setProperty('active', 0);
        expect(license.getProperty('active')).toBe(false);
        license.setProperty('active', "");
        expect(license.getProperty('active')).toBe(false);
        license.setProperty('active', "123");
        expect(license.getProperty('active')).toBe(true);
        license.setProperty('active', null);
        expect(license.getProperty('active')).toBe(false);

        license.setProperty('startDate', '2055-01-01');
        expect(license.getProperty('startDate') instanceof Date).toBe(true);
        license.setProperty('startDate', new Date());
        expect(license.getProperty('startDate') instanceof Date).toBe(true);

        license.setProperty('name', 1);
        expect(license.getProperty('name')).toBe('1');
        license.setProperty('name', true);
        expect(license.getProperty('name')).toBe('true');

        license.setProperty('price', "3.14");
        expect(license.getProperty('price')).toBe(3.14);
        license.setProperty('price', "314e-2");
        expect(license.getProperty('price')).toBe(3.14);
        license.setProperty('price', "0.0314E+2");
        expect(license.getProperty('price')).toBe(3.14);
        license.setProperty('price', "3.14any non-numeric characters");
        expect(license.getProperty('price')).toBe(3.14);

        license.setProperty('hidden', 1);
        expect(license.getProperty('hidden')).toBe(true);
        license.setProperty('hidden', 0);
        expect(license.getProperty('hidden')).toBe(false);
        license.setProperty('hidden', "");
        expect(license.getProperty('hidden')).toBe(false);
        license.setProperty('hidden', "123");
        expect(license.getProperty('hidden')).toBe(true);
        license.setProperty('hidden', null);
        expect(license.getProperty('hidden')).toBe(false);

        license.setProperty('parentfeature', 1);
        expect(license.getProperty('parentfeature')).toBe('1');
        license.setProperty('parentfeature', true);
        expect(license.getProperty('parentfeature')).toBe('true');

        license.setProperty('timeVolume', "015");
        expect(license.getProperty('timeVolume')).toBe(15);
        license.setProperty('timeVolume', 15.99);
        expect(license.getProperty('timeVolume')).toBe(15);
        license.setProperty('timeVolume', '15*3');
        expect(license.getProperty('timeVolume')).toBe(15);
        license.setProperty('timeVolume', '15e2');
        expect(license.getProperty('timeVolume')).toBe(15);
    });


    it('check throwable error if property value is typeof "function"', function () {
        var func = function () {
        };

        expect(function(){license.setProperty('number',func)}).toThrowError(TypeError);
        expect(function(){license.setNumber(func)}).toThrowError(TypeError);
        expect(function(){license.setName(func)}).toThrowError(TypeError);
        expect(function(){license.setActive(func)}).toThrowError(TypeError);
        expect(function(){license.setHidden(func)}).toThrowError(TypeError);
        expect(function(){license.setParentfeature(func)}).toThrowError(TypeError);
        expect(function(){license.setTimeVolume(func)}).toThrowError(TypeError);
        expect(function(){license.setStartDate(func)}).toThrowError(TypeError);

        expect(function(){license.number = func}).toThrowError(TypeError);
        expect(function(){license.name = func}).toThrowError(TypeError);
        expect(function(){license.active = func}).toThrowError(TypeError);
        expect(function(){license.hidden = func}).toThrowError(TypeError);
        expect(function(){license.parentfeature = func}).toThrowError(TypeError);
        expect(function(){license.timeVolume = func}).toThrowError(TypeError);
        expect(function(){license.startDate = func}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "undefined"', function () {
        expect(function(){license.setProperty('number',undefined)}).toThrowError(TypeError);
        expect(function(){license.setNumber(undefined)}).toThrowError(TypeError);
        expect(function(){license.setName(undefined)}).toThrowError(TypeError);
        expect(function(){license.setActive(undefined)}).toThrowError(TypeError);
        expect(function(){license.setHidden(undefined)}).toThrowError(TypeError);
        expect(function(){license.setParentfeature(undefined)}).toThrowError(TypeError);
        expect(function(){license.setTimeVolume(undefined)}).toThrowError(TypeError);
        expect(function(){license.setStartDate(undefined)}).toThrowError(TypeError);

        expect(function(){license.number = undefined}).toThrowError(TypeError);
        expect(function(){license.name = undefined}).toThrowError(TypeError);
        expect(function(){license.active = undefined}).toThrowError(TypeError);
        expect(function(){license.hidden = undefined}).toThrowError(TypeError);
        expect(function(){license.parentfeature = undefined}).toThrowError(TypeError);
        expect(function(){license.timeVolume = undefined}).toThrowError(TypeError);
        expect(function(){license.startDate = undefined}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "NaN"', function () {
        expect(function(){license.setProperty('number',NaN)}).toThrowError(TypeError);
        expect(function(){license.setNumber(NaN)}).toThrowError(TypeError);
        expect(function(){license.setName(NaN)}).toThrowError(TypeError);
        expect(function(){license.setActive(NaN)}).toThrowError(TypeError);
        expect(function(){license.setHidden(NaN)}).toThrowError(TypeError);
        expect(function(){license.setParentfeature(NaN)}).toThrowError(TypeError);
        expect(function(){license.setTimeVolume(NaN)}).toThrowError(TypeError);
        expect(function(){license.setStartDate(NaN)}).toThrowError(TypeError);

        expect(function(){license.number = NaN}).toThrowError(TypeError);
        expect(function(){license.name = NaN}).toThrowError(TypeError);
        expect(function(){license.active = NaN}).toThrowError(TypeError);
        expect(function(){license.hidden = NaN}).toThrowError(TypeError);
        expect(function(){license.parentfeature = NaN}).toThrowError(TypeError);
        expect(function(){license.timeVolume = NaN}).toThrowError(TypeError);
        expect(function(){license.startDate = NaN}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "Infinity"', function () {
        expect(function(){license.setProperty('number',Infinity)}).toThrowError(TypeError);
        expect(function(){license.setNumber(Infinity)}).toThrowError(TypeError);
        expect(function(){license.setName(Infinity)}).toThrowError(TypeError);
        expect(function(){license.setActive(Infinity)}).toThrowError(TypeError);
        expect(function(){license.setHidden(Infinity)}).toThrowError(TypeError);
        expect(function(){license.setParentfeature(Infinity)}).toThrowError(TypeError);
        expect(function(){license.setTimeVolume(Infinity)}).toThrowError(TypeError);
        expect(function(){license.setStartDate(Infinity)}).toThrowError(TypeError);

        expect(function(){license.number = Infinity}).toThrowError(TypeError);
        expect(function(){license.name = Infinity}).toThrowError(TypeError);
        expect(function(){license.active = Infinity}).toThrowError(TypeError);
        expect(function(){license.hidden = Infinity}).toThrowError(TypeError);
        expect(function(){license.parentfeature = Infinity}).toThrowError(TypeError);
        expect(function(){license.timeVolume = Infinity}).toThrowError(TypeError);
        expect(function(){license.startDate = Infinity}).toThrowError(TypeError);
    });
});