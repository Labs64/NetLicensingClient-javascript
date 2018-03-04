import Licensee from '../../src/entities/Licensee';

describe('entities.LicenseeTest', () => {
    let licensee;

    beforeEach(() => {
        licensee = new Licensee();
    });

    it('check "number" property setters/getters', () => {
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

    it('check "name" property setters/getters', () => {
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

    it('check "active" property setters/getters', () => {
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

    it('check "licenseeSecret" property setters/getters', () => {
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

    it('check "markedForTransfer" property setters/getters', () => {
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

    it('check "inUse" property setters/getters', () => {
        expect(() => { licensee.inUse = true; }).toThrowError(TypeError);

        expect(licensee.getProperty('inUse')).toBe(undefined);
        expect(licensee.getInUse()).toBe(undefined);
        expect(licensee.inUse).toBe(undefined);

        licensee.setProperty('inUse', true);
        expect(licensee.getProperty('inUse')).toBe(true);
        expect(licensee.getInUse()).toBe(true);
        expect(licensee.inUse).toBe(true);

        expect(() => { licensee.setProperty('inUse', false); }).toThrowError(TypeError);
    });

    it('check "custom-property" property setters/getters', () => {
        licensee.setProperty('custom_property', 'my_custom_property_0');
        expect(licensee.getProperty('custom_property')).toBe('my_custom_property_0');
        expect(licensee.custom_property).toBe('my_custom_property_0');

        licensee.custom_property = 'my_custom_property_1';
        expect(licensee.getProperty('custom_property')).toBe('my_custom_property_1');
        expect(licensee.custom_property).toBe('my_custom_property_1');
    });

    it('check cast an properties to a native js type', () => {
        licensee.setProperty('number', 1);
        expect(licensee.getProperty('number')).toBe('1');
        licensee.setProperty('number', true);
        expect(licensee.getProperty('number')).toBe('true');

        licensee.setProperty('active', 1);
        expect(licensee.getProperty('active')).toBe(true);
        licensee.setProperty('active', 0);
        expect(licensee.getProperty('active')).toBe(false);
        licensee.setProperty('active', '');
        expect(licensee.getProperty('active')).toBe(false);
        licensee.setProperty('active', '123');
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
        licensee.setProperty('markedForTransfer', '');
        expect(licensee.getProperty('markedForTransfer')).toBe(false);
        licensee.setProperty('markedForTransfer', '123');
        expect(licensee.getProperty('markedForTransfer')).toBe(true);
        licensee.setProperty('markedForTransfer', null);
        expect(licensee.getProperty('markedForTransfer')).toBe(false);
    });

    it('check throwable error if property value is typeof "function"', () => {
        const func = () => {};

        expect(() => { licensee.setProperty('number', func); }).toThrowError(TypeError);
        expect(() => { licensee.setNumber(func); }).toThrowError(TypeError);
        expect(() => { licensee.setName(func); }).toThrowError(TypeError);
        expect(() => { licensee.setActive(func); }).toThrowError(TypeError);
        expect(() => { licensee.setLicenseeSecret(func); }).toThrowError(TypeError);
        expect(() => { licensee.setMarkedForTransfer(func); }).toThrowError(TypeError);

        expect(() => { licensee.number = func; }).toThrowError(TypeError);
        expect(() => { licensee.name = func; }).toThrowError(TypeError);
        expect(() => { licensee.active = func; }).toThrowError(TypeError);
        expect(() => { licensee.licenseeSecret = func; }).toThrowError(TypeError);
        expect(() => { licensee.markedForTransfer = func; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "undefined"', () => {
        expect(() => { licensee.setProperty('number', undefined); }).toThrowError(TypeError);
        expect(() => { licensee.setNumber(undefined); }).toThrowError(TypeError);
        expect(() => { licensee.setName(undefined); }).toThrowError(TypeError);
        expect(() => { licensee.setActive(undefined); }).toThrowError(TypeError);
        expect(() => { licensee.setLicenseeSecret(undefined); }).toThrowError(TypeError);
        expect(() => { licensee.setMarkedForTransfer(undefined); }).toThrowError(TypeError);

        expect(() => { licensee.number = undefined; }).toThrowError(TypeError);
        expect(() => { licensee.name = undefined; }).toThrowError(TypeError);
        expect(() => { licensee.active = undefined; }).toThrowError(TypeError);
        expect(() => { licensee.licenseeSecret = undefined; }).toThrowError(TypeError);
        expect(() => { licensee.markedForTransfer = undefined; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "NaN"', () => {
        expect(() => { licensee.setProperty('number', NaN); }).toThrowError(TypeError);
        expect(() => { licensee.setNumber(NaN); }).toThrowError(TypeError);
        expect(() => { licensee.setName(NaN); }).toThrowError(TypeError);
        expect(() => { licensee.setActive(NaN); }).toThrowError(TypeError);
        expect(() => { licensee.setLicenseeSecret(NaN); }).toThrowError(TypeError);
        expect(() => { licensee.setMarkedForTransfer(NaN); }).toThrowError(TypeError);

        expect(() => { licensee.number = NaN; }).toThrowError(TypeError);
        expect(() => { licensee.name = NaN; }).toThrowError(TypeError);
        expect(() => { licensee.active = NaN; }).toThrowError(TypeError);
        expect(() => { licensee.licenseeSecret = NaN; }).toThrowError(TypeError);
        expect(() => { licensee.markedForTransfer = NaN; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "Infinity"', () => {
        expect(() => { licensee.setProperty('number', Infinity); }).toThrowError(TypeError);
        expect(() => { licensee.setNumber(Infinity); }).toThrowError(TypeError);
        expect(() => { licensee.setName(Infinity); }).toThrowError(TypeError);
        expect(() => { licensee.setActive(Infinity); }).toThrowError(TypeError);
        expect(() => { licensee.setLicenseeSecret(Infinity); }).toThrowError(TypeError);
        expect(() => { licensee.setMarkedForTransfer(Infinity); }).toThrowError(TypeError);

        expect(() => { licensee.number = Infinity; }).toThrowError(TypeError);
        expect(() => { licensee.name = Infinity; }).toThrowError(TypeError);
        expect(() => { licensee.active = Infinity; }).toThrowError(TypeError);
        expect(() => { licensee.licenseeSecret = Infinity; }).toThrowError(TypeError);
        expect(() => { licensee.markedForTransfer = Infinity; }).toThrowError(TypeError);
    });

    it('check "removeProperty" method', () => {
        licensee.setProperty('number', 'number');
        licensee.removeProperty('number');

        expect(licensee.getProperty('number')).toBe(undefined);
        expect(licensee.number).toBe(undefined);
        expect(licensee.getNumber()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        licensee.setProperty('number', 'number');
        licensee.removeDefine('number');

        expect(licensee.number).toBe(undefined);
        expect(licensee.getProperty('number')).toBe('number');
        expect(licensee.getNumber()).toBe('number');

        licensee.number = 'number_1';

        expect(licensee.number).toBe('number_1');
        expect(licensee.getProperty('number')).toBe('number');
        expect(licensee.getNumber()).toBe('number');
    });
});
