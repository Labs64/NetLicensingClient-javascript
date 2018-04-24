import LicenseTemplate from '../../src/entities/LicenseTemplate';

describe('entities.LicenseTemplateTest', () => {
    let licenseTemplate;

    beforeEach(() => {
        licenseTemplate = new LicenseTemplate();
    });

    it('check "number" property setters/getters', () => {
        licenseTemplate.setProperty('number', 'number_0');
        expect(licenseTemplate.getProperty('number')).toBe('number_0');
        expect(licenseTemplate.getNumber()).toBe('number_0');
        expect(licenseTemplate.number).toBe('number_0');

        licenseTemplate.setNumber('number_1');
        expect(licenseTemplate.getProperty('number')).toBe('number_1');
        expect(licenseTemplate.getNumber()).toBe('number_1');
        expect(licenseTemplate.number).toBe('number_1');

        licenseTemplate.number = 'number_2';
        expect(licenseTemplate.getProperty('number')).toBe('number_2');
        expect(licenseTemplate.getNumber()).toBe('number_2');
        expect(licenseTemplate.number).toBe('number_2');
    });

    it('check "name" property setters/getters', () => {
        licenseTemplate.setProperty('name', 'name_0');
        expect(licenseTemplate.getProperty('name')).toBe('name_0');
        expect(licenseTemplate.getName()).toBe('name_0');
        expect(licenseTemplate.name).toBe('name_0');

        licenseTemplate.setName('name_1');
        expect(licenseTemplate.getProperty('name')).toBe('name_1');
        expect(licenseTemplate.getName()).toBe('name_1');
        expect(licenseTemplate.name).toBe('name_1');

        licenseTemplate.name = 'name_2';
        expect(licenseTemplate.getProperty('name')).toBe('name_2');
        expect(licenseTemplate.getName()).toBe('name_2');
        expect(licenseTemplate.name).toBe('name_2');
    });

    it('check "active" property setters/getters', () => {
        licenseTemplate.setProperty('active', true);
        expect(licenseTemplate.getProperty('active')).toBe(true);
        expect(licenseTemplate.getActive()).toBe(true);
        expect(licenseTemplate.active).toBe(true);

        licenseTemplate.setActive(false);
        expect(licenseTemplate.getProperty('active')).toBe(false);
        expect(licenseTemplate.getActive()).toBe(false);
        expect(licenseTemplate.active).toBe(false);

        licenseTemplate.active = true;
        expect(licenseTemplate.getProperty('active')).toBe(true);
        expect(licenseTemplate.getActive()).toBe(true);
        expect(licenseTemplate.active).toBe(true);
    });

    it('check "licenseType" property setters/getters', () => {
        licenseTemplate.setProperty('licenseType', 'TIMEVOLUME');
        expect(licenseTemplate.getProperty('licenseType')).toBe('TIMEVOLUME');
        expect(licenseTemplate.getLicenseType()).toBe('TIMEVOLUME');
        expect(licenseTemplate.licenseType).toBe('TIMEVOLUME');

        licenseTemplate.setLicenseType('FLOATING');
        expect(licenseTemplate.getProperty('licenseType')).toBe('FLOATING');
        expect(licenseTemplate.getLicenseType()).toBe('FLOATING');
        expect(licenseTemplate.licenseType).toBe('FLOATING');

        licenseTemplate.licenseType = 'FEATURE';
        expect(licenseTemplate.getProperty('licenseType')).toBe('FEATURE');
        expect(licenseTemplate.getLicenseType()).toBe('FEATURE');
        expect(licenseTemplate.licenseType).toBe('FEATURE');
    });

    it('check "price" property setters/getters', () => {
        licenseTemplate.setProperty('price', 10);
        expect(licenseTemplate.getProperty('price')).toBe(10);
        expect(licenseTemplate.getPrice()).toBe(10);
        expect(licenseTemplate.price).toBe(10);

        licenseTemplate.setPrice(20);
        expect(licenseTemplate.getProperty('price')).toBe(20);
        expect(licenseTemplate.getPrice()).toBe(20);
        expect(licenseTemplate.price).toBe(20);

        licenseTemplate.price = 30;
        expect(licenseTemplate.getProperty('price')).toBe(30);
        expect(licenseTemplate.getPrice()).toBe(30);
        expect(licenseTemplate.price).toBe(30);
    });

    it('check "currency" property setters/getters', () => {
        licenseTemplate.setProperty('currency', 'EUR');
        expect(licenseTemplate.getProperty('currency')).toBe('EUR');
        expect(licenseTemplate.getCurrency()).toBe('EUR');
        expect(licenseTemplate.currency).toBe('EUR');

        licenseTemplate.setCurrency('USD');
        expect(licenseTemplate.getProperty('currency')).toBe('USD');
        expect(licenseTemplate.getCurrency()).toBe('USD');
        expect(licenseTemplate.currency).toBe('USD');

        licenseTemplate.currency = 'BYN';
        expect(licenseTemplate.getProperty('currency')).toBe('BYN');
        expect(licenseTemplate.getCurrency()).toBe('BYN');
        expect(licenseTemplate.currency).toBe('BYN');
    });

    it('check "automatic" property setters/getters', () => {
        licenseTemplate.setProperty('automatic', true);
        expect(licenseTemplate.getProperty('automatic')).toBe(true);
        expect(licenseTemplate.getAutomatic()).toBe(true);
        expect(licenseTemplate.automatic).toBe(true);

        licenseTemplate.setAutomatic(false);
        expect(licenseTemplate.getProperty('automatic')).toBe(false);
        expect(licenseTemplate.getAutomatic()).toBe(false);
        expect(licenseTemplate.automatic).toBe(false);

        licenseTemplate.automatic = true;
        expect(licenseTemplate.getProperty('automatic')).toBe(true);
        expect(licenseTemplate.getAutomatic()).toBe(true);
        expect(licenseTemplate.automatic).toBe(true);
    });

    it('check "hidden" property setters/getters', () => {
        licenseTemplate.setProperty('hidden', true);
        expect(licenseTemplate.getProperty('hidden')).toBe(true);
        expect(licenseTemplate.getHidden()).toBe(true);
        expect(licenseTemplate.hidden).toBe(true);

        licenseTemplate.setHidden(false);
        expect(licenseTemplate.getProperty('hidden')).toBe(false);
        expect(licenseTemplate.getHidden()).toBe(false);
        expect(licenseTemplate.hidden).toBe(false);

        licenseTemplate.hidden = true;
        expect(licenseTemplate.getProperty('hidden')).toBe(true);
        expect(licenseTemplate.getHidden()).toBe(true);
        expect(licenseTemplate.hidden).toBe(true);
    });

    it('check "hideLicenses" property setters/getters', () => {
        licenseTemplate.setProperty('hideLicenses', true);
        expect(licenseTemplate.getProperty('hideLicenses')).toBe(true);
        expect(licenseTemplate.getHideLicenses()).toBe(true);
        expect(licenseTemplate.hideLicenses).toBe(true);

        licenseTemplate.setHideLicenses(false);
        expect(licenseTemplate.getProperty('hideLicenses')).toBe(false);
        expect(licenseTemplate.getHideLicenses()).toBe(false);
        expect(licenseTemplate.hideLicenses).toBe(false);

        licenseTemplate.hideLicenses = true;
        expect(licenseTemplate.getProperty('hideLicenses')).toBe(true);
        expect(licenseTemplate.getHideLicenses()).toBe(true);
        expect(licenseTemplate.hideLicenses).toBe(true);
    });

    it('check "timeVolume" property setters/getters', () => {
        licenseTemplate.setProperty('timeVolume', 10);
        expect(licenseTemplate.getProperty('timeVolume')).toBe(10);
        expect(licenseTemplate.getTimeVolume()).toBe(10);
        expect(licenseTemplate.timeVolume).toBe(10);

        licenseTemplate.setTimeVolume(20);
        expect(licenseTemplate.getProperty('timeVolume')).toBe(20);
        expect(licenseTemplate.getTimeVolume()).toBe(20);
        expect(licenseTemplate.timeVolume).toBe(20);

        licenseTemplate.timeVolume = 30;
        expect(licenseTemplate.getProperty('timeVolume')).toBe(30);
        expect(licenseTemplate.getTimeVolume()).toBe(30);
        expect(licenseTemplate.timeVolume).toBe(30);
    });

    it('check "timeVolumePeriod" property setters/getters', () => {
        licenseTemplate.setProperty('timeVolumePeriod', 'DAY');
        expect(licenseTemplate.getProperty('timeVolumePeriod')).toBe('DAY');
        expect(licenseTemplate.getTimeVolumePeriod()).toBe('DAY');
        expect(licenseTemplate.timeVolumePeriod).toBe('DAY');

        licenseTemplate.setTimeVolumePeriod('WEEK');
        expect(licenseTemplate.getProperty('timeVolumePeriod')).toBe('WEEK');
        expect(licenseTemplate.getTimeVolumePeriod()).toBe('WEEK');
        expect(licenseTemplate.timeVolumePeriod).toBe('WEEK');

        licenseTemplate.timeVolumePeriod = 'MONTH';
        expect(licenseTemplate.getProperty('timeVolumePeriod')).toBe('MONTH');
        expect(licenseTemplate.getTimeVolumePeriod()).toBe('MONTH');
        expect(licenseTemplate.timeVolumePeriod).toBe('MONTH');
    });

    it('check "maxSessions" property setters/getters', () => {
        licenseTemplate.setProperty('maxSessions', 10);
        expect(licenseTemplate.getProperty('maxSessions')).toBe(10);
        expect(licenseTemplate.getMaxSessions()).toBe(10);
        expect(licenseTemplate.maxSessions).toBe(10);

        licenseTemplate.setMaxSessions(20);
        expect(licenseTemplate.getProperty('maxSessions')).toBe(20);
        expect(licenseTemplate.getMaxSessions()).toBe(20);
        expect(licenseTemplate.maxSessions).toBe(20);

        licenseTemplate.maxSessions = 30;
        expect(licenseTemplate.getProperty('maxSessions')).toBe(30);
        expect(licenseTemplate.getMaxSessions()).toBe(30);
        expect(licenseTemplate.maxSessions).toBe(30);
    });

    it('check "maxSessions" property setters/getters', () => {
        licenseTemplate.setProperty('quantity', 10);
        expect(licenseTemplate.getProperty('quantity')).toBe(10);
        expect(licenseTemplate.getQuantity()).toBe(10);
        expect(licenseTemplate.quantity).toBe(10);

        licenseTemplate.setQuantity(20);
        expect(licenseTemplate.getProperty('quantity')).toBe(20);
        expect(licenseTemplate.getQuantity()).toBe(20);
        expect(licenseTemplate.quantity).toBe(20);

        licenseTemplate.quantity = 30;
        expect(licenseTemplate.getProperty('quantity')).toBe(30);
        expect(licenseTemplate.getQuantity()).toBe(30);
        expect(licenseTemplate.quantity).toBe(30);
    });

    it('check "inUse" property setters/getters', () => {
        expect(() => { licenseTemplate.inUse = true; }).toThrowError(TypeError);

        expect(licenseTemplate.getProperty('inUse')).toBe(undefined);
        expect(licenseTemplate.getInUse()).toBe(undefined);
        expect(licenseTemplate.inUse).toBe(undefined);

        licenseTemplate.setProperty('inUse', true);
        expect(licenseTemplate.getProperty('inUse')).toBe(true);
        expect(licenseTemplate.getInUse()).toBe(true);
        expect(licenseTemplate.inUse).toBe(true);

        expect(() => { licenseTemplate.setProperty('inUse', false); }).toThrowError(TypeError);
    });

    it('check "custom-property" property setters/getters', () => {
        licenseTemplate.setProperty('custom_property', 'my_custom_property_0');
        expect(licenseTemplate.getProperty('custom_property')).toBe('my_custom_property_0');
        expect(licenseTemplate.custom_property).toBe('my_custom_property_0');

        licenseTemplate.custom_property = 'my_custom_property_1';
        expect(licenseTemplate.getProperty('custom_property')).toBe('my_custom_property_1');
        expect(licenseTemplate.custom_property).toBe('my_custom_property_1');
    });

    it('check cast an properties to a native js type', () => {
        licenseTemplate.setProperty('number', 1);
        expect(licenseTemplate.getProperty('number')).toBe('1');
        licenseTemplate.setProperty('number', true);
        expect(licenseTemplate.getProperty('number')).toBe('true');

        licenseTemplate.setProperty('active', 1);
        expect(licenseTemplate.getProperty('active')).toBe(true);
        licenseTemplate.setProperty('active', 0);
        expect(licenseTemplate.getProperty('active')).toBe(false);
        licenseTemplate.setProperty('active', '');
        expect(licenseTemplate.getProperty('active')).toBe(false);
        licenseTemplate.setProperty('active', '123');
        expect(licenseTemplate.getProperty('active')).toBe(true);
        licenseTemplate.setProperty('active', null);
        expect(licenseTemplate.getProperty('active')).toBe(false);

        licenseTemplate.setProperty('name', 1);
        expect(licenseTemplate.getProperty('name')).toBe('1');
        licenseTemplate.setProperty('name', true);
        expect(licenseTemplate.getProperty('name')).toBe('true');

        licenseTemplate.setProperty('licenseType', 1);
        expect(licenseTemplate.getProperty('licenseType')).toBe('1');
        licenseTemplate.setProperty('licenseType', true);
        expect(licenseTemplate.getProperty('licenseType')).toBe('true');

        licenseTemplate.setProperty('price', '3.14');
        expect(licenseTemplate.getProperty('price')).toBe(3.14);
        licenseTemplate.setProperty('price', '314e-2');
        expect(licenseTemplate.getProperty('price')).toBe(3.14);
        licenseTemplate.setProperty('price', '0.0314E+2');
        expect(licenseTemplate.getProperty('price')).toBe(3.14);
        licenseTemplate.setProperty('price', '3.14any non-numeric characters');
        expect(licenseTemplate.getProperty('price')).toBe(3.14);

        licenseTemplate.setProperty('automatic', 1);
        expect(licenseTemplate.getProperty('automatic')).toBe(true);
        licenseTemplate.setProperty('automatic', 0);
        expect(licenseTemplate.getProperty('automatic')).toBe(false);
        licenseTemplate.setProperty('automatic', '');
        expect(licenseTemplate.getProperty('automatic')).toBe(false);
        licenseTemplate.setProperty('automatic', '123');
        expect(licenseTemplate.getProperty('automatic')).toBe(true);
        licenseTemplate.setProperty('automatic', null);
        expect(licenseTemplate.getProperty('automatic')).toBe(false);

        licenseTemplate.setProperty('hidden', 1);
        expect(licenseTemplate.getProperty('hidden')).toBe(true);
        licenseTemplate.setProperty('hidden', 0);
        expect(licenseTemplate.getProperty('hidden')).toBe(false);
        licenseTemplate.setProperty('hidden', '');
        expect(licenseTemplate.getProperty('hidden')).toBe(false);
        licenseTemplate.setProperty('hidden', '123');
        expect(licenseTemplate.getProperty('hidden')).toBe(true);
        licenseTemplate.setProperty('hidden', null);
        expect(licenseTemplate.getProperty('hidden')).toBe(false);

        licenseTemplate.setProperty('hideLicenses', 1);
        expect(licenseTemplate.getProperty('hideLicenses')).toBe(true);
        licenseTemplate.setProperty('hideLicenses', 0);
        expect(licenseTemplate.getProperty('hideLicenses')).toBe(false);
        licenseTemplate.setProperty('hideLicenses', '');
        expect(licenseTemplate.getProperty('hideLicenses')).toBe(false);
        licenseTemplate.setProperty('hideLicenses', '123');
        expect(licenseTemplate.getProperty('hideLicenses')).toBe(true);
        licenseTemplate.setProperty('hideLicenses', null);
        expect(licenseTemplate.getProperty('hideLicenses')).toBe(false);

        licenseTemplate.setProperty('timeVolume', '015');
        expect(licenseTemplate.getProperty('timeVolume')).toBe(15);
        licenseTemplate.setProperty('timeVolume', 15.99);
        expect(licenseTemplate.getProperty('timeVolume')).toBe(15);
        licenseTemplate.setProperty('timeVolume', '15*3');
        expect(licenseTemplate.getProperty('timeVolume')).toBe(15);
        licenseTemplate.setProperty('timeVolume', '15e2');
        expect(licenseTemplate.getProperty('timeVolume')).toBe(15);

        licenseTemplate.setProperty('maxSessions', '015');
        expect(licenseTemplate.getProperty('maxSessions')).toBe(15);
        licenseTemplate.setProperty('maxSessions', 15.99);
        expect(licenseTemplate.getProperty('maxSessions')).toBe(15);
        licenseTemplate.setProperty('maxSessions', '15*3');
        expect(licenseTemplate.getProperty('maxSessions')).toBe(15);
        licenseTemplate.setProperty('maxSessions', '15e2');
        expect(licenseTemplate.getProperty('maxSessions')).toBe(15);

        licenseTemplate.setProperty('quantity', '015');
        expect(licenseTemplate.getProperty('quantity')).toBe(15);
        licenseTemplate.setProperty('quantity', 15.99);
        expect(licenseTemplate.getProperty('quantity')).toBe(15);
        licenseTemplate.setProperty('quantity', '15*3');
        expect(licenseTemplate.getProperty('quantity')).toBe(15);
        licenseTemplate.setProperty('quantity', '15e2');
        expect(licenseTemplate.getProperty('quantity')).toBe(15);
    });

    it('check throwable error if property value is typeof "function"', () => {
        const func = () => {};

        expect(() => { licenseTemplate.setProperty('number', func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setNumber(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setName(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setActive(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setLicenseType(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setPrice(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setCurrency(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setAutomatic(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setHidden(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setHideLicenses(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setTimeVolume(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setMaxSessions(func); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setQuantity(func); }).toThrowError(TypeError);

        expect(() => { licenseTemplate.number = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.name = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.active = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.licenseType = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.price = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.currency = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.automatic = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.hidden = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.hideLicenses = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.timeVolume = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.maxSessions = func; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.quantity = func; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "undefined"', () => {
        expect(() => { licenseTemplate.setProperty('number', undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setNumber(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setName(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setActive(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setLicenseType(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setPrice(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setCurrency(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setAutomatic(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setHidden(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setHideLicenses(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setTimeVolume(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setMaxSessions(undefined); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setQuantity(undefined); }).toThrowError(TypeError);

        expect(() => { licenseTemplate.number = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.name = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.active = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.licenseType = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.price = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.currency = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.automatic = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.hidden = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.hideLicenses = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.timeVolume = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.maxSessions = undefined; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.quantity = undefined; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "NaN"', () => {
        expect(() => { licenseTemplate.setProperty('number', NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setNumber(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setName(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setActive(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setLicenseType(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setPrice(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setCurrency(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setAutomatic(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setHidden(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setHideLicenses(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setTimeVolume(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setMaxSessions(NaN); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setQuantity(NaN); }).toThrowError(TypeError);

        expect(() => { licenseTemplate.number = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.name = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.active = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.licenseType = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.price = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.currency = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.automatic = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.hidden = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.hideLicenses = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.timeVolume = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.maxSessions = NaN; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.quantity = NaN; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "Infinity"', () => {
        expect(() => { licenseTemplate.setProperty('number', Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setNumber(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setName(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setActive(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setLicenseType(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setPrice(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setCurrency(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setAutomatic(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setHidden(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setHideLicenses(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setTimeVolume(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setMaxSessions(Infinity); }).toThrowError(TypeError);
        expect(() => { licenseTemplate.setQuantity(Infinity); }).toThrowError(TypeError);

        expect(() => { licenseTemplate.number = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.name = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.active = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.licenseType = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.price = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.currency = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.automatic = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.hidden = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.hideLicenses = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.timeVolume = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.maxSessions = Infinity; }).toThrowError(TypeError);
        expect(() => { licenseTemplate.quantity = Infinity; }).toThrowError(TypeError);
    });

    it('check "removeProperty" method', () => {
        licenseTemplate.setProperty('number', 'number');
        licenseTemplate.removeProperty('number');

        expect(licenseTemplate.getProperty('number')).toBe(undefined);
        expect(licenseTemplate.number).toBe(undefined);
        expect(licenseTemplate.getNumber()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        licenseTemplate.setProperty('number', 'number');
        licenseTemplate.removeDefine('number');

        expect(licenseTemplate.number).toBe(undefined);
        expect(licenseTemplate.getProperty('number')).toBe('number');
        expect(licenseTemplate.getNumber()).toBe('number');

        licenseTemplate.number = 'number_1';

        expect(licenseTemplate.number).toBe('number_1');
        expect(licenseTemplate.getProperty('number')).toBe('number');
        expect(licenseTemplate.getNumber()).toBe('number');
    });
});
