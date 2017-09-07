describe('entities.ProductTest', function () {
    var product;

    beforeEach(function () {
        product = new Nlic.Product();
    });

    it('check "number" property setters/getters', function () {
        product.setProperty('number', 'number_0');
        expect(product.getProperty('number')).toBe('number_0');
        expect(product.getNumber()).toBe('number_0');
        expect(product.number).toBe('number_0');

        product.setNumber('number_1');
        expect(product.getProperty('number')).toBe('number_1');
        expect(product.getNumber()).toBe('number_1');
        expect(product.number).toBe('number_1');

        product.number = 'number_2';
        expect(product.getProperty('number')).toBe('number_2');
        expect(product.getNumber()).toBe('number_2');
        expect(product.number).toBe('number_2');
    });

    it('check "name" property setters/getters', function () {
        product.setProperty('name', 'name_0');
        expect(product.getProperty('name')).toBe('name_0');
        expect(product.getName()).toBe('name_0');
        expect(product.name).toBe('name_0');

        product.setName('name_1');
        expect(product.getProperty('name')).toBe('name_1');
        expect(product.getName()).toBe('name_1');
        expect(product.name).toBe('name_1');

        product.name = 'name_2';
        expect(product.getProperty('name')).toBe('name_2');
        expect(product.getName()).toBe('name_2');
        expect(product.name).toBe('name_2');
    });

    it('check "active" property setters/getters', function () {
        product.setProperty('active', true);
        expect(product.getProperty('active')).toBe(true);
        expect(product.getActive()).toBe(true);
        expect(product.active).toBe(true);

        product.setActive(false);
        expect(product.getProperty('active')).toBe(false);
        expect(product.getActive()).toBe(false);
        expect(product.active).toBe(false);

        product.active = true;
        expect(product.getProperty('active')).toBe(true);
        expect(product.getActive()).toBe(true);
        expect(product.active).toBe(true);
    });

    it('check "version" property setters/getters', function () {
        product.setProperty('version', '1.05');
        expect(product.getProperty('version')).toBe('1.05');
        expect(product.getVersion()).toBe('1.05');
        expect(product.version).toBe('1.05');

        product.setVersion('2.0');
        expect(product.getProperty('version')).toBe('2.0');
        expect(product.getVersion()).toBe('2.0');
        expect(product.version).toBe('2.0');

        product.version = '1.1';
        expect(product.getProperty('version')).toBe('1.1');
        expect(product.getVersion()).toBe('1.1');
        expect(product.version).toBe('1.1');
    });

    it('check "description" property setters/getters', function () {
        product.setProperty('description', 'description_0');
        expect(product.getProperty('description')).toBe('description_0');
        expect(product.getDescription()).toBe('description_0');
        expect(product.description).toBe('description_0');

        product.setDescription('description_1');
        expect(product.getProperty('description')).toBe('description_1');
        expect(product.getDescription()).toBe('description_1');
        expect(product.description).toBe('description_1');

        product.description = 'description_2';
        expect(product.getProperty('description')).toBe('description_2');
        expect(product.getDescription()).toBe('description_2');
        expect(product.description).toBe('description_2');
    });

    it('check "licensingInfo" property setters/getters', function () {
        product.setProperty('licensingInfo', 'licensingInfo_0');
        expect(product.getProperty('licensingInfo')).toBe('licensingInfo_0');
        expect(product.getLicensingInfo()).toBe('licensingInfo_0');
        expect(product.licensingInfo).toBe('licensingInfo_0');

        product.setLicensingInfo('licensingInfo_1');
        expect(product.getProperty('licensingInfo')).toBe('licensingInfo_1');
        expect(product.getLicensingInfo()).toBe('licensingInfo_1');
        expect(product.licensingInfo).toBe('licensingInfo_1');

        product.licensingInfo = 'licensingInfo_2';
        expect(product.getProperty('licensingInfo')).toBe('licensingInfo_2');
        expect(product.getLicensingInfo()).toBe('licensingInfo_2');
        expect(product.licensingInfo).toBe('licensingInfo_2');
    });

    it('check "licenseeAutoCreate" property setters/getters', function () {
        product.setProperty('licenseeAutoCreate', true);
        expect(product.getProperty('licenseeAutoCreate')).toBe(true);
        expect(product.getLicenseeAutoCreate()).toBe(true);
        expect(product.licenseeAutoCreate).toBe(true);

        product.setLicenseeAutoCreate(false);
        expect(product.getProperty('licenseeAutoCreate')).toBe(false);
        expect(product.getLicenseeAutoCreate()).toBe(false);
        expect(product.licenseeAutoCreate).toBe(false);

        product.licenseeAutoCreate = true;
        expect(product.getProperty('licenseeAutoCreate')).toBe(true);
        expect(product.getLicenseeAutoCreate()).toBe(true);
        expect(product.licenseeAutoCreate).toBe(true);
    });

    it('check "inUse" property getters', function () {
        product.inUse = true;
        expect(product.getProperty('inUse')).toBe(undefined);
        expect(product.getInUse()).toBe(undefined);
        expect(product.inUse).toBe(undefined);

        product.setProperty('inUse',true);
        expect(product.getProperty('inUse')).toBe(true);
        expect(product.getInUse()).toBe(true);
        expect(product.inUse).toBe(true);
    });

    it('check "custom-property" property setters/getters', function () {
        product.setProperty('custom_property', 'my_custom_property_0');
        expect(product.getProperty('custom_property')).toBe('my_custom_property_0');
        expect(product.custom_property).toBe('my_custom_property_0');

        product.custom_property = 'my_custom_property_1';
        expect(product.getProperty('custom_property')).toBe('my_custom_property_1');
        expect(product.custom_property).toBe('my_custom_property_1');
    });

    it('check "addDiscount" , "getProductDiscounts", "removeDiscount", "removeDiscounts" methods', function () {
        product.addDiscount(new Nlic.ProductDiscount().setTotalPrice(10).setCurrency('EUR').setAmountFix(8));
        product.addDiscount(new Nlic.ProductDiscount().setTotalPrice(20).setCurrency('EUR').setAmountPercent(50));
        product.addDiscount(new Nlic.ProductDiscount().setTotalPrice(30).setCurrency('EUR').setAmountFix(25));
        product.addDiscount(new Nlic.ProductDiscount().setTotalPrice(40).setCurrency('EUR').setAmountPercent(34));
        product.addDiscount(new Nlic.ProductDiscount().setTotalPrice(50).setCurrency('EUR').setAmountFix(15));
        expect(product.getProductDiscounts().length).toBe(5);

        product.removeDiscount(10);
        expect(product.getProductDiscounts().length).toBe(4);

        product.removeDiscounts([20, 30]);
        expect(product.getProductDiscounts().length).toBe(2);

        product.removeDiscounts();
        expect(product.getProductDiscounts().length).toBe(0);
    });

    it('check cast an properties to a native js type', function () {
        product.setProperty('number', 1);
        expect(product.getProperty('number')).toBe('1');
        product.setProperty('number', true);
        expect(product.getProperty('number')).toBe('true');

        product.setProperty('active', 1);
        expect(product.getProperty('active')).toBe(true);
        product.setProperty('active', 0);
        expect(product.getProperty('active')).toBe(false);
        product.setProperty('active', "");
        expect(product.getProperty('active')).toBe(false);
        product.setProperty('active', "123");
        expect(product.getProperty('active')).toBe(true);
        product.setProperty('active', null);
        expect(product.getProperty('active')).toBe(false);

        product.setProperty('name', 1);
        expect(product.getProperty('name')).toBe('1');
        product.setProperty('name', true);
        expect(product.getProperty('name')).toBe('true');

        product.setProperty('version', 1);
        expect(product.getProperty('version')).toBe('1');

        product.setProperty('description', 1);
        expect(product.getProperty('description')).toBe('1');
        product.setProperty('description', true);
        expect(product.getProperty('description')).toBe('true');

        product.setProperty('licensingInfo', 1);
        expect(product.getProperty('licensingInfo')).toBe('1');
        product.setProperty('licensingInfo', true);
        expect(product.getProperty('licensingInfo')).toBe('true');

        product.setProperty('licenseeAutoCreate', 1);
        expect(product.getProperty('licenseeAutoCreate')).toBe(true);
        product.setProperty('licenseeAutoCreate', 0);
        expect(product.getProperty('licenseeAutoCreate')).toBe(false);
        product.setProperty('licenseeAutoCreate', "");
        expect(product.getProperty('licenseeAutoCreate')).toBe(false);
        product.setProperty('licenseeAutoCreate', "123");
        expect(product.getProperty('licenseeAutoCreate')).toBe(true);
        product.setProperty('licenseeAutoCreate', null);
        expect(product.getProperty('licenseeAutoCreate')).toBe(false);
    });

    it('check throwable error if property value is typeof "function"', function () {
        var func = function () {
        };

        expect(function(){product.setProperty('number',func)}).toThrowError(TypeError);
        expect(function(){product.setNumber(func)}).toThrowError(TypeError);
        expect(function(){product.setName(func)}).toThrowError(TypeError);
        expect(function(){product.setActive(func)}).toThrowError(TypeError);
        expect(function(){product.setVersion(func)}).toThrowError(TypeError);
        expect(function(){product.setDescription(func)}).toThrowError(TypeError);
        expect(function(){product.setLicensingInfo(func)}).toThrowError(TypeError);
        expect(function(){product.setLicenseeAutoCreate(func)}).toThrowError(TypeError);

        expect(function(){product.number = func}).toThrowError(TypeError);
        expect(function(){product.name = func}).toThrowError(TypeError);
        expect(function(){product.active = func}).toThrowError(TypeError);
        expect(function(){product.version = func}).toThrowError(TypeError);
        expect(function(){product.description = func}).toThrowError(TypeError);
        expect(function(){product.licensingInfo = func}).toThrowError(TypeError);
        expect(function(){product.licenseeAutoCreate = func}).toThrowError(TypeError);
    });

    it('check throwable error if property value is "undefined"', function () {
        expect(function(){product.setProperty('number',undefined)}).toThrowError(TypeError);
        expect(function(){product.setNumber(undefined)}).toThrowError(TypeError);
        expect(function(){product.setName(undefined)}).toThrowError(TypeError);
        expect(function(){product.setActive(undefined)}).toThrowError(TypeError);
        expect(function(){product.setVersion(undefined)}).toThrowError(TypeError);
        expect(function(){product.setDescription(undefined)}).toThrowError(TypeError);
        expect(function(){product.setLicensingInfo(undefined)}).toThrowError(TypeError);
        expect(function(){product.setLicenseeAutoCreate(undefined)}).toThrowError(TypeError);

        expect(function(){product.number = undefined}).toThrowError(TypeError);
        expect(function(){product.name = undefined}).toThrowError(TypeError);
        expect(function(){product.active = undefined}).toThrowError(TypeError);
        expect(function(){product.version = undefined}).toThrowError(TypeError);
        expect(function(){product.description = undefined}).toThrowError(TypeError);
        expect(function(){product.licensingInfo = undefined}).toThrowError(TypeError);
        expect(function(){product.licenseeAutoCreate = undefined}).toThrowError(TypeError);
    });

    it('check throwable error if property value is "NaN"', function () {
        expect(function(){product.setProperty('number',NaN)}).toThrowError(TypeError);
        expect(function(){product.setNumber(NaN)}).toThrowError(TypeError);
        expect(function(){product.setName(NaN)}).toThrowError(TypeError);
        expect(function(){product.setActive(NaN)}).toThrowError(TypeError);
        expect(function(){product.setVersion(NaN)}).toThrowError(TypeError);
        expect(function(){product.setDescription(NaN)}).toThrowError(TypeError);
        expect(function(){product.setLicensingInfo(NaN)}).toThrowError(TypeError);
        expect(function(){product.setLicenseeAutoCreate(NaN)}).toThrowError(TypeError);

        expect(function(){product.number = NaN}).toThrowError(TypeError);
        expect(function(){product.name = NaN}).toThrowError(TypeError);
        expect(function(){product.active = NaN}).toThrowError(TypeError);
        expect(function(){product.version = NaN}).toThrowError(TypeError);
        expect(function(){product.description = NaN}).toThrowError(TypeError);
        expect(function(){product.licensingInfo = NaN}).toThrowError(TypeError);
        expect(function(){product.licenseeAutoCreate = NaN}).toThrowError(TypeError);
    });

    it('check throwable error if property value is "Infinity"', function () {
        expect(function(){product.setProperty('number',Infinity)}).toThrowError(TypeError);
        expect(function(){product.setNumber(Infinity)}).toThrowError(TypeError);
        expect(function(){product.setName(Infinity)}).toThrowError(TypeError);
        expect(function(){product.setActive(Infinity)}).toThrowError(TypeError);
        expect(function(){product.setVersion(Infinity)}).toThrowError(TypeError);
        expect(function(){product.setDescription(Infinity)}).toThrowError(TypeError);
        expect(function(){product.setLicensingInfo(Infinity)}).toThrowError(TypeError);
        expect(function(){product.setLicenseeAutoCreate(Infinity)}).toThrowError(TypeError);

        expect(function(){product.number = Infinity}).toThrowError(TypeError);
        expect(function(){product.name = Infinity}).toThrowError(TypeError);
        expect(function(){product.active = Infinity}).toThrowError(TypeError);
        expect(function(){product.version = Infinity}).toThrowError(TypeError);
        expect(function(){product.description = Infinity}).toThrowError(TypeError);
        expect(function(){product.licensingInfo = Infinity}).toThrowError(TypeError);
        expect(function(){product.licenseeAutoCreate = Infinity}).toThrowError(TypeError);
    });

    it('check throwable error if add not Nlic.ProductDiscount in "addDiscount" method', function () {
        expect(function(){product.addDiscount('discount')}).toThrowError(TypeError);
        expect(function(){product.addDiscount({})}).toThrowError(TypeError);
    });
});