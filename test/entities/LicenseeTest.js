describe('entities.LicenseeTest', function () {
    var licensee;

    beforeEach(function () {
        licensee = new NetLicensing .Licensee();
    });


    it('check "number" property setters/getters', function () {
        licensee.setProperty('number', 'number_0');
        expect(licensee.getProperty('number')).toBe('number_0');
        expect(licensee.getNumber()).toBe('number_0');
        expect(licensee.number).toBe('number_0');

        licensee.setNumber('number_1');
        expect(licensee.getProperty('number')).toBe('number_1');
        expect(licensee.getNumber()).toBe('number_1');
        expect(licensee.number).toBe('number_1');

        licensee.number = 'number_2';
        expect(licensee.getProperty('number')).toBe('number_2');
        expect(licensee.getNumber()).toBe('number_2');
        expect(licensee.number).toBe('number_2');
    });

    it('check "name" property setters/getters', function () {
        licensee.setProperty('name', 'name_0');
        expect(licensee.getProperty('name')).toBe('name_0');
        expect(licensee.getName()).toBe('name_0');
        expect(licensee.name).toBe('name_0');

        licensee.setName('name_1');
        expect(licensee.getProperty('name')).toBe('name_1');
        expect(licensee.getName()).toBe('name_1');
        expect(licensee.name).toBe('name_1');

        licensee.name = 'name_2';
        expect(licensee.getProperty('name')).toBe('name_2');
        expect(licensee.getName()).toBe('name_2');
        expect(licensee.name).toBe('name_2');
    });

    it('check "active" property setters/getters', function () {
        licensee.setProperty('active', true);
        expect(licensee.getProperty('active')).toBe(true);
        expect(licensee.getActive()).toBe(true);
        expect(licensee.active).toBe(true);

        licensee.setActive(false);
        expect(licensee.getProperty('active')).toBe(false);
        expect(licensee.getActive()).toBe(false);
        expect(licensee.active).toBe(false);

        licensee.active = true;
        expect(licensee.getProperty('active')).toBe(true);
        expect(licensee.getActive()).toBe(true);
        expect(licensee.active).toBe(true);
    });

    it('check "licenseeSecret" property setters/getters', function () {
        licensee.setProperty('licenseeSecret', 'licenseeSecret_0');
        expect(licensee.getProperty('licenseeSecret')).toBe('licenseeSecret_0');
        expect(licensee.getLicenseeSecret()).toBe('licenseeSecret_0');
        expect(licensee.licenseeSecret).toBe('licenseeSecret_0');

        licensee.setLicenseeSecret('licenseeSecret_1');
        expect(licensee.getProperty('licenseeSecret')).toBe('licenseeSecret_1');
        expect(licensee.getLicenseeSecret()).toBe('licenseeSecret_1');
        expect(licensee.licenseeSecret).toBe('licenseeSecret_1');

        licensee.licenseeSecret = 'licenseeSecret_2';
        expect(licensee.getProperty('licenseeSecret')).toBe('licenseeSecret_2');
        expect(licensee.getLicenseeSecret()).toBe('licenseeSecret_2');
        expect(licensee.licenseeSecret).toBe('licenseeSecret_2');
    });

    it('check "markedForTransfer" property setters/getters', function () {
        licensee.setProperty('markedForTransfer', true);
        expect(licensee.getProperty('markedForTransfer')).toBe(true);
        expect(licensee.getMarkedForTransfer()).toBe(true);
        expect(licensee.markedForTransfer).toBe(true);

        licensee.setMarkedForTransfer(false);
        expect(licensee.getProperty('markedForTransfer')).toBe(false);
        expect(licensee.getMarkedForTransfer()).toBe(false);
        expect(licensee.markedForTransfer).toBe(false);

        licensee.markedForTransfer = true;
        expect(licensee.getProperty('markedForTransfer')).toBe(true);
        expect(licensee.getMarkedForTransfer()).toBe(true);
        expect(licensee.markedForTransfer).toBe(true);
    });

    it('check "inUse" property getters', function () {
        licensee.inUse = true;
        expect(licensee.getProperty('inUse')).toBe(undefined);
        expect(licensee.getInUse()).toBe(undefined);
        expect(licensee.inUse).toBe(undefined);

        licensee.setProperty('inUse', true);
        expect(licensee.getProperty('inUse')).toBe(true);
        expect(licensee.getInUse()).toBe(true);
        expect(licensee.inUse).toBe(true);
    });

    it('check "custom-property" property setters/getters', function () {
        licensee.setProperty('custom_property', 'my_custom_property_0');
        expect(licensee.getProperty('custom_property')).toBe('my_custom_property_0');
        expect(licensee.custom_property).toBe('my_custom_property_0');

        licensee.custom_property = 'my_custom_property_1';
        expect(licensee.getProperty('custom_property')).toBe('my_custom_property_1');
        expect(licensee.custom_property).toBe('my_custom_property_1');
    });

    it('check cast an properties to a native js type', function () {
        licensee.setProperty('number', 1);
        expect(licensee.getProperty('number')).toBe('1');
        licensee.setProperty('number', true);
        expect(licensee.getProperty('number')).toBe('true');

        licensee.setProperty('active', 1);
        expect(licensee.getProperty('active')).toBe(true);
        licensee.setProperty('active', 0);
        expect(licensee.getProperty('active')).toBe(false);
        licensee.setProperty('active', "");
        expect(licensee.getProperty('active')).toBe(false);
        licensee.setProperty('active', "123");
        expect(licensee.getProperty('active')).toBe(true);
        licensee.setProperty('active', null);
        expect(licensee.getProperty('active')).toBe(false);

        licensee.setProperty('name', 1);
        expect(licensee.getProperty('name')).toBe('1');
        licensee.setProperty('name', true);
        expect(licensee.getProperty('name')).toBe('true');

        licensee.setProperty('licenseeSecret', 1);
        expect(licensee.getProperty('licenseeSecret')).toBe('1');
        licensee.setProperty('licenseeSecret', true);
        expect(licensee.getProperty('licenseeSecret')).toBe('true');

        licensee.setProperty('markedForTransfer', 1);
        expect(licensee.getProperty('markedForTransfer')).toBe(true);
        licensee.setProperty('markedForTransfer', 0);
        expect(licensee.getProperty('markedForTransfer')).toBe(false);
        licensee.setProperty('markedForTransfer', "");
        expect(licensee.getProperty('markedForTransfer')).toBe(false);
        licensee.setProperty('markedForTransfer', "123");
        expect(licensee.getProperty('markedForTransfer')).toBe(true);
        licensee.setProperty('markedForTransfer', null);
        expect(licensee.getProperty('markedForTransfer')).toBe(false);
    });

    it('check throwable error if property value is typeof "function"', function () {
        var func = function () {
        };

        expect(function(){licensee.setProperty('number',func)}).toThrowError(TypeError);
        expect(function(){licensee.setNumber(func)}).toThrowError(TypeError);
        expect(function(){licensee.setName(func)}).toThrowError(TypeError);
        expect(function(){licensee.setActive(func)}).toThrowError(TypeError);
        expect(function(){licensee.setLicenseeSecret(func)}).toThrowError(TypeError);
        expect(function(){licensee.setMarkedForTransfer(func)}).toThrowError(TypeError);

        expect(function(){licensee.number = func}).toThrowError(TypeError);
        expect(function(){licensee.name = func}).toThrowError(TypeError);
        expect(function(){licensee.active = func}).toThrowError(TypeError);
        expect(function(){licensee.licenseeSecret = func}).toThrowError(TypeError);
        expect(function(){licensee.markedForTransfer = func}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "undefined"', function () {
        expect(function(){licensee.setProperty('number',undefined)}).toThrowError(TypeError);
        expect(function(){licensee.setNumber(undefined)}).toThrowError(TypeError);
        expect(function(){licensee.setName(undefined)}).toThrowError(TypeError);
        expect(function(){licensee.setActive(undefined)}).toThrowError(TypeError);
        expect(function(){licensee.setLicenseeSecret(undefined)}).toThrowError(TypeError);
        expect(function(){licensee.setMarkedForTransfer(undefined)}).toThrowError(TypeError);

        expect(function(){licensee.number = undefined}).toThrowError(TypeError);
        expect(function(){licensee.name = undefined}).toThrowError(TypeError);
        expect(function(){licensee.active = undefined}).toThrowError(TypeError);
        expect(function(){licensee.licenseeSecret = undefined}).toThrowError(TypeError);
        expect(function(){licensee.markedForTransfer = undefined}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "NaN"', function () {
        expect(function(){licensee.setProperty('number',NaN)}).toThrowError(TypeError);
        expect(function(){licensee.setNumber(NaN)}).toThrowError(TypeError);
        expect(function(){licensee.setName(NaN)}).toThrowError(TypeError);
        expect(function(){licensee.setActive(NaN)}).toThrowError(TypeError);
        expect(function(){licensee.setLicenseeSecret(NaN)}).toThrowError(TypeError);
        expect(function(){licensee.setMarkedForTransfer(NaN)}).toThrowError(TypeError);

        expect(function(){licensee.number = NaN}).toThrowError(TypeError);
        expect(function(){licensee.name = NaN}).toThrowError(TypeError);
        expect(function(){licensee.active = NaN}).toThrowError(TypeError);
        expect(function(){licensee.licenseeSecret = NaN}).toThrowError(TypeError);
        expect(function(){licensee.markedForTransfer = NaN}).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "Infinity"', function () {
        expect(function(){licensee.setProperty('number',Infinity)}).toThrowError(TypeError);
        expect(function(){licensee.setNumber(Infinity)}).toThrowError(TypeError);
        expect(function(){licensee.setName(Infinity)}).toThrowError(TypeError);
        expect(function(){licensee.setActive(Infinity)}).toThrowError(TypeError);
        expect(function(){licensee.setLicenseeSecret(Infinity)}).toThrowError(TypeError);
        expect(function(){licensee.setMarkedForTransfer(Infinity)}).toThrowError(TypeError);

        expect(function(){licensee.number = Infinity}).toThrowError(TypeError);
        expect(function(){licensee.name = Infinity}).toThrowError(TypeError);
        expect(function(){licensee.active = Infinity}).toThrowError(TypeError);
        expect(function(){licensee.licenseeSecret = Infinity}).toThrowError(TypeError);
        expect(function(){licensee.markedForTransfer = Infinity}).toThrowError(TypeError);
    });
});