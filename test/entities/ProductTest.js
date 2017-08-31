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
        product.setProperty('version', 1.05);
        expect(product.getProperty('version')).toBe(1.05);
        expect(product.getVersion()).toBe(1.05);
        expect(product.version).toBe(1.05);

        product.setVersion(2);
        expect(product.getProperty('version')).toBe(2);
        expect(product.getVersion()).toBe(2);
        expect(product.version).toBe(2);

        product.version = 1.1;
        expect(product.getProperty('version')).toBe(1.1);
        expect(product.getVersion()).toBe(1.1);
        expect(product.version).toBe(1.1);
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

    it('check "addDiscount" , "getProductDiscounts" methods', function () {
        product.addDiscount(new Nlic.ProductDiscount());
        product.addDiscount(new Nlic.ProductDiscount());
        expect(product.getProductDiscounts().length).toBe(2);
    });

    it('check cast an properties to a native js type', function () {
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

        product.setProperty('version', "3.14");
        expect(product.getProperty('version')).toBe(3.14);
        product.setProperty('version', "314e-2");
        expect(product.getProperty('version')).toBe(3.14);
        product.setProperty('version', "0.0314E+2");
        expect(product.getProperty('version')).toBe(3.14);
        product.setProperty('version', "3.14any non-numeric characters");
        expect(product.getProperty('version')).toBe(3.14);

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

        expect(function(){product.setProperty('number',func)}).toThrowError();
        expect(function(){product.setNumber(func)}).toThrowError();
        expect(function(){product.setName(func)}).toThrowError();
        expect(function(){product.setActive(func)}).toThrowError();
        expect(function(){product.setVersion(func)}).toThrowError();
        expect(function(){product.setDescription(func)}).toThrowError();
        expect(function(){product.setLicensingInfo(func)}).toThrowError();
        expect(function(){product.setLicenseeAutoCreate(func)}).toThrowError();

        expect(function(){product.number = func}).toThrowError();
        expect(function(){product.name = func}).toThrowError();
        expect(function(){product.active = func}).toThrowError();
        expect(function(){product.version = func}).toThrowError();
        expect(function(){product.description = func}).toThrowError();
        expect(function(){product.licensingInfo = func}).toThrowError();
        expect(function(){product.licenseeAutoCreate = func}).toThrowError();
    });

    it('check throwable error if property value is "undefined"', function () {
        expect(function(){product.setProperty('number',undefined)}).toThrowError();
        expect(function(){product.setNumber(undefined)}).toThrowError();
        expect(function(){product.setName(undefined)}).toThrowError();
        expect(function(){product.setActive(undefined)}).toThrowError();
        expect(function(){product.setVersion(undefined)}).toThrowError();
        expect(function(){product.setDescription(undefined)}).toThrowError();
        expect(function(){product.setLicensingInfo(undefined)}).toThrowError();
        expect(function(){product.setLicenseeAutoCreate(undefined)}).toThrowError();

        expect(function(){product.number = undefined}).toThrowError();
        expect(function(){product.name = undefined}).toThrowError();
        expect(function(){product.active = undefined}).toThrowError();
        expect(function(){product.version = undefined}).toThrowError();
        expect(function(){product.description = undefined}).toThrowError();
        expect(function(){product.licensingInfo = undefined}).toThrowError();
        expect(function(){product.licenseeAutoCreate = undefined}).toThrowError();
    });

    it('check throwable error if property value is "NaN"', function () {
        expect(function(){product.setProperty('number',NaN)}).toThrowError();
        expect(function(){product.setNumber(NaN)}).toThrowError();
        expect(function(){product.setName(NaN)}).toThrowError();
        expect(function(){product.setActive(NaN)}).toThrowError();
        expect(function(){product.setVersion(NaN)}).toThrowError();
        expect(function(){product.setDescription(NaN)}).toThrowError();
        expect(function(){product.setLicensingInfo(NaN)}).toThrowError();
        expect(function(){product.setLicenseeAutoCreate(NaN)}).toThrowError();

        expect(function(){product.number = NaN}).toThrowError();
        expect(function(){product.name = NaN}).toThrowError();
        expect(function(){product.active = NaN}).toThrowError();
        expect(function(){product.version = NaN}).toThrowError();
        expect(function(){product.description = NaN}).toThrowError();
        expect(function(){product.licensingInfo = NaN}).toThrowError();
        expect(function(){product.licenseeAutoCreate = NaN}).toThrowError();
    });

    it('check throwable error if property value is "Infinity"', function () {
        expect(function(){product.setProperty('number',Infinity)}).toThrowError();
        expect(function(){product.setNumber(Infinity)}).toThrowError();
        expect(function(){product.setName(Infinity)}).toThrowError();
        expect(function(){product.setActive(Infinity)}).toThrowError();
        expect(function(){product.setVersion(Infinity)}).toThrowError();
        expect(function(){product.setDescription(Infinity)}).toThrowError();
        expect(function(){product.setLicensingInfo(Infinity)}).toThrowError();
        expect(function(){product.setLicenseeAutoCreate(Infinity)}).toThrowError();

        expect(function(){product.number = Infinity}).toThrowError();
        expect(function(){product.name = Infinity}).toThrowError();
        expect(function(){product.active = Infinity}).toThrowError();
        expect(function(){product.version = Infinity}).toThrowError();
        expect(function(){product.description = Infinity}).toThrowError();
        expect(function(){product.licensingInfo = Infinity}).toThrowError();
        expect(function(){product.licenseeAutoCreate = Infinity}).toThrowError();
    });

    it('check throwable error if add not Nlic.ProductDiscount in "addDiscount" method', function () {
        expect(function(){product.addDiscount('discount')}).toThrowError();
        expect(function(){product.addDiscount({})}).toThrowError();
    });
});