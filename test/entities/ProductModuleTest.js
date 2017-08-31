describe('entities.ProductModuleTest', function () {
    var productModule;

    beforeEach(function () {
        productModule = new Nlic.ProductModule();
    });

    it('check "number" property setters/getters', function () {
        productModule.setProperty('number', 'number_0');
        expect(productModule.getProperty('number')).toBe('number_0');
        expect(productModule.getNumber()).toBe('number_0');
        expect(productModule.number).toBe('number_0');

        productModule.setNumber('number_1');
        expect(productModule.getProperty('number')).toBe('number_1');
        expect(productModule.getNumber()).toBe('number_1');
        expect(productModule.number).toBe('number_1');

        productModule.number = 'number_2';
        expect(productModule.getProperty('number')).toBe('number_2');
        expect(productModule.getNumber()).toBe('number_2');
        expect(productModule.number).toBe('number_2');
    });

    it('check "name" property setters/getters', function () {
        productModule.setProperty('name', 'name_0');
        expect(productModule.getProperty('name')).toBe('name_0');
        expect(productModule.getName()).toBe('name_0');
        expect(productModule.name).toBe('name_0');

        productModule.setName('name_1');
        expect(productModule.getProperty('name')).toBe('name_1');
        expect(productModule.getName()).toBe('name_1');
        expect(productModule.name).toBe('name_1');

        productModule.name = 'name_2';
        expect(productModule.getProperty('name')).toBe('name_2');
        expect(productModule.getName()).toBe('name_2');
        expect(productModule.name).toBe('name_2');
    });

    it('check "active" property setters/getters', function () {
        productModule.setProperty('active', true);
        expect(productModule.getProperty('active')).toBe(true);
        expect(productModule.getActive()).toBe(true);
        expect(productModule.active).toBe(true);

        productModule.setActive(false);
        expect(productModule.getProperty('active')).toBe(false);
        expect(productModule.getActive()).toBe(false);
        expect(productModule.active).toBe(false);

        productModule.active = true;
        expect(productModule.getProperty('active')).toBe(true);
        expect(productModule.getActive()).toBe(true);
        expect(productModule.active).toBe(true);
    });

    it('check "licensingModel" property setters/getters', function () {
        productModule.setProperty('licensingModel', 'TryAndBuy');
        expect(productModule.getProperty('licensingModel')).toBe('TryAndBuy');
        expect(productModule.getLicensingModel()).toBe('TryAndBuy');
        expect(productModule.licensingModel).toBe('TryAndBuy');

        productModule.setLicensingModel('Subscription');
        expect(productModule.getProperty('licensingModel')).toBe('Subscription');
        expect(productModule.getLicensingModel()).toBe('Subscription');
        expect(productModule.licensingModel).toBe('Subscription');

        productModule.licensingModel = 'Rental';
        expect(productModule.getProperty('licensingModel')).toBe('Rental');
        expect(productModule.getLicensingModel()).toBe('Rental');
        expect(productModule.licensingModel).toBe('Rental');
    });

    it('check "maxCheckoutValidity" property setters/getters', function () {
        productModule.setProperty('maxCheckoutValidity', 1);
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(1);
        expect(productModule.getMaxCheckoutValidity()).toBe(1);
        expect(productModule.maxCheckoutValidity).toBe(1);

        productModule.setMaxCheckoutValidity(2);
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(2);
        expect(productModule.getMaxCheckoutValidity()).toBe(2);
        expect(productModule.maxCheckoutValidity).toBe(2);

        productModule.maxCheckoutValidity = 3;
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(3);
        expect(productModule.getMaxCheckoutValidity()).toBe(3);
        expect(productModule.maxCheckoutValidity).toBe(3);
    });

    it('check "yellowThreshold" property setters/getters', function () {
        productModule.setProperty('yellowThreshold', 1);
        expect(productModule.getProperty('yellowThreshold')).toBe(1);
        expect(productModule.getYellowThreshold()).toBe(1);
        expect(productModule.yellowThreshold).toBe(1);

        productModule.setYellowThreshold(2);
        expect(productModule.getProperty('yellowThreshold')).toBe(2);
        expect(productModule.getYellowThreshold()).toBe(2);
        expect(productModule.yellowThreshold).toBe(2);

        productModule.yellowThreshold = 3;
        expect(productModule.getProperty('yellowThreshold')).toBe(3);
        expect(productModule.getYellowThreshold()).toBe(3);
        expect(productModule.yellowThreshold).toBe(3);
    });

    it('check "redThreshold" property setters/getters', function () {
        productModule.setProperty('redThreshold', 1);
        expect(productModule.getProperty('redThreshold')).toBe(1);
        expect(productModule.getRedThreshold()).toBe(1);
        expect(productModule.redThreshold).toBe(1);

        productModule.setRedThreshold(2);
        expect(productModule.getProperty('redThreshold')).toBe(2);
        expect(productModule.getRedThreshold()).toBe(2);
        expect(productModule.redThreshold).toBe(2);

        productModule.redThreshold = 3;
        expect(productModule.getProperty('redThreshold')).toBe(3);
        expect(productModule.getRedThreshold()).toBe(3);
        expect(productModule.redThreshold).toBe(3);
    });

    it('check "licenseTemplate" property setters/getters', function () {
        productModule.setProperty('licenseTemplate', 'TIMEVOLUME');
        expect(productModule.getProperty('licenseTemplate')).toBe('TIMEVOLUME');
        expect(productModule.getLicenseTemplate()).toBe('TIMEVOLUME');
        expect(productModule.licenseTemplate).toBe('TIMEVOLUME');

        productModule.setLicenseTemplate('FEATURE');
        expect(productModule.getProperty('licenseTemplate')).toBe('FEATURE');
        expect(productModule.getLicenseTemplate()).toBe('FEATURE');
        expect(productModule.licenseTemplate).toBe('FEATURE');

        productModule.licenseTemplate = 'TIMEVOLUME';
        expect(productModule.getProperty('licenseTemplate')).toBe('TIMEVOLUME');
        expect(productModule.getLicenseTemplate()).toBe('TIMEVOLUME');
        expect(productModule.licenseTemplate).toBe('TIMEVOLUME');
    });

    it('check "inUse" property getters', function () {
        productModule.inUse = true;
        expect(productModule.getProperty('inUse')).toBe(undefined);
        expect(productModule.getInUse()).toBe(undefined);
        expect(productModule.inUse).toBe(undefined);

        productModule.setProperty('inUse',true);
        expect(productModule.getProperty('inUse')).toBe(true);
        expect(productModule.getInUse()).toBe(true);
        expect(productModule.inUse).toBe(true);
    });

    it('check "custom-property" property setters/getters', function () {
        productModule.setProperty('custom_property', 'my_custom_property_0');
        expect(productModule.getProperty('custom_property')).toBe('my_custom_property_0');
        expect(productModule.custom_property).toBe('my_custom_property_0');

        productModule.custom_property = 'my_custom_property_1';
        expect(productModule.getProperty('custom_property')).toBe('my_custom_property_1');
        expect(productModule.custom_property).toBe('my_custom_property_1');
    });

    it('check cast an properties to a native js type', function () {
        productModule.setProperty('active', 1);
        expect(productModule.getProperty('active')).toBe(true);
        productModule.setProperty('active', 0);
        expect(productModule.getProperty('active')).toBe(false);
        productModule.setProperty('active', "");
        expect(productModule.getProperty('active')).toBe(false);
        productModule.setProperty('active', "123");
        expect(productModule.getProperty('active')).toBe(true);
        productModule.setProperty('active', null);
        expect(productModule.getProperty('active')).toBe(false);

        productModule.setProperty('maxCheckoutValidity', "015");
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(15);
        productModule.setProperty('maxCheckoutValidity', 15.99);
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(15);
        productModule.setProperty('maxCheckoutValidity', '15*3');
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(15);
        productModule.setProperty('maxCheckoutValidity', '15e2');
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(15);

        productModule.setProperty('yellowThreshold', "015");
        expect(productModule.getProperty('yellowThreshold')).toBe(15);
        productModule.setProperty('yellowThreshold', 15.99);
        expect(productModule.getProperty('yellowThreshold')).toBe(15);
        productModule.setProperty('yellowThreshold', '15*3');
        expect(productModule.getProperty('yellowThreshold')).toBe(15);
        productModule.setProperty('yellowThreshold', '15e2');
        expect(productModule.getProperty('yellowThreshold')).toBe(15);

        productModule.setProperty('redThreshold', "015");
        expect(productModule.getProperty('redThreshold')).toBe(15);
        productModule.setProperty('redThreshold', 15.99);
        expect(productModule.getProperty('redThreshold')).toBe(15);
        productModule.setProperty('redThreshold', '15*3');
        expect(productModule.getProperty('redThreshold')).toBe(15);
        productModule.setProperty('redThreshold', '15e2');
        expect(productModule.getProperty('redThreshold')).toBe(15);
    });

    it('check throwable error if property value is typeof "function"', function () {
        var func = function () {
        };

        expect(function(){productModule.setProperty('number',func)}).toThrowError();
        expect(function(){productModule.setNumber(func)}).toThrowError();
        expect(function(){productModule.setName(func)}).toThrowError();
        expect(function(){productModule.setActive(func)}).toThrowError();
        expect(function(){productModule.setLicensingModel(func)}).toThrowError();
        expect(function(){productModule.setMaxCheckoutValidity(func)}).toThrowError();
        expect(function(){productModule.setYellowThreshold(func)}).toThrowError();
        expect(function(){productModule.setRedThreshold(func)}).toThrowError();
        expect(function(){productModule.setLicenseTemplate(func)}).toThrowError();

        expect(function(){productModule.number = func}).toThrowError();
        expect(function(){productModule.name = func}).toThrowError();
        expect(function(){productModule.active = func}).toThrowError();
        expect(function(){productModule.licensingModel = func}).toThrowError();
        expect(function(){productModule.maxCheckoutValidity = func}).toThrowError();
        expect(function(){productModule.yellowThreshold = func}).toThrowError();
        expect(function(){productModule.redThreshold = func}).toThrowError();
        expect(function(){productModule.licenseTemplate = func}).toThrowError();
    });

    it('check throwable error if property value is "undefined"', function () {
        expect(function(){productModule.setProperty('number',undefined)}).toThrowError();
        expect(function(){productModule.setNumber(undefined)}).toThrowError();
        expect(function(){productModule.setName(undefined)}).toThrowError();
        expect(function(){productModule.setActive(undefined)}).toThrowError();
        expect(function(){productModule.setLicensingModel(undefined)}).toThrowError();
        expect(function(){productModule.setMaxCheckoutValidity(undefined)}).toThrowError();
        expect(function(){productModule.setYellowThreshold(undefined)}).toThrowError();
        expect(function(){productModule.setRedThreshold(undefined)}).toThrowError();
        expect(function(){productModule.setLicenseTemplate(undefined)}).toThrowError();

        expect(function(){productModule.number = undefined}).toThrowError();
        expect(function(){productModule.name = undefined}).toThrowError();
        expect(function(){productModule.active = undefined}).toThrowError();
        expect(function(){productModule.licensingModel = undefined}).toThrowError();
        expect(function(){productModule.maxCheckoutValidity = undefined}).toThrowError();
        expect(function(){productModule.yellowThreshold = undefined}).toThrowError();
        expect(function(){productModule.redThreshold = undefined}).toThrowError();
        expect(function(){productModule.licenseTemplate = undefined}).toThrowError();
    });

    it('check throwable error if property value is "NaN"', function () {
        expect(function(){productModule.setProperty('number',NaN)}).toThrowError();
        expect(function(){productModule.setNumber(NaN)}).toThrowError();
        expect(function(){productModule.setName(NaN)}).toThrowError();
        expect(function(){productModule.setActive(NaN)}).toThrowError();
        expect(function(){productModule.setLicensingModel(NaN)}).toThrowError();
        expect(function(){productModule.setMaxCheckoutValidity(NaN)}).toThrowError();
        expect(function(){productModule.setYellowThreshold(NaN)}).toThrowError();
        expect(function(){productModule.setRedThreshold(NaN)}).toThrowError();
        expect(function(){productModule.setLicenseTemplate(NaN)}).toThrowError();

        expect(function(){productModule.number = NaN}).toThrowError();
        expect(function(){productModule.name = NaN}).toThrowError();
        expect(function(){productModule.active = NaN}).toThrowError();
        expect(function(){productModule.licensingModel = NaN}).toThrowError();
        expect(function(){productModule.maxCheckoutValidity = NaN}).toThrowError();
        expect(function(){productModule.yellowThreshold = NaN}).toThrowError();
        expect(function(){productModule.redThreshold = NaN}).toThrowError();
        expect(function(){productModule.licenseTemplate = NaN}).toThrowError();
    });

    it('check throwable error if property value is "Infinity"', function () {
        expect(function(){productModule.setProperty('number',Infinity)}).toThrowError();
        expect(function(){productModule.setNumber(Infinity)}).toThrowError();
        expect(function(){productModule.setName(Infinity)}).toThrowError();
        expect(function(){productModule.setActive(Infinity)}).toThrowError();
        expect(function(){productModule.setLicensingModel(Infinity)}).toThrowError();
        expect(function(){productModule.setMaxCheckoutValidity(Infinity)}).toThrowError();
        expect(function(){productModule.setYellowThreshold(Infinity)}).toThrowError();
        expect(function(){productModule.setRedThreshold(Infinity)}).toThrowError();
        expect(function(){productModule.setLicenseTemplate(Infinity)}).toThrowError();

        expect(function(){productModule.number = Infinity}).toThrowError();
        expect(function(){productModule.name = Infinity}).toThrowError();
        expect(function(){productModule.active = Infinity}).toThrowError();
        expect(function(){productModule.licensingModel = Infinity}).toThrowError();
        expect(function(){productModule.maxCheckoutValidity = Infinity}).toThrowError();
        expect(function(){productModule.yellowThreshold = Infinity}).toThrowError();
        expect(function(){productModule.redThreshold = Infinity}).toThrowError();
        expect(function(){productModule.licenseTemplate = Infinity}).toThrowError();
    });
});