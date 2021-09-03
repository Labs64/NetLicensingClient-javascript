import License from '@/entities/License';

describe('entities/License', () => {
    let license;

    beforeEach(() => {
        license = new License();
    });

    it('check "number" property setters/getters', () => {
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

    it('check "name" property setters/getters', () => {
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

    it('check "active" property setters/getters', () => {
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

    it('check "parentfeature" property setters/getters', () => {
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

    it('check "timeVolume" property setters/getters', () => {
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

    it('check "startDate" property setters/getters', () => {
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

    it('check "price" property getters', () => {
        license.setProperty('price', 100);
        expect(license.getProperty('price')).toBe(100);
        expect(license.getPrice()).toBe(100);
        expect(license.price).toBe(100);
    });

    it('check "currency" property getters', () => {
        license.setProperty('currency', 'EUR');
        expect(license.getProperty('currency')).toBe('EUR');
        expect(license.getCurrency()).toBe('EUR');
        expect(license.currency).toBe('EUR');
    });

    it('check "inUse" property setters/getters', () => {
        license.setProperty('inUse', true);
        expect(license.getProperty('inUse')).toBe(true);
        expect(license.getInUse()).toBe(true);
        expect(license.inUse).toBe(true);
    });

    it('check "custom-property" property setters/getters', () => {
        license.setProperty('custom_property', 'my_custom_property_0');
        expect(license.getProperty('custom_property')).toBe('my_custom_property_0');
        expect(license.custom_property).toBe('my_custom_property_0');

        license.custom_property = 'my_custom_property_1';
        expect(license.getProperty('custom_property')).toBe('my_custom_property_1');
        expect(license.custom_property).toBe('my_custom_property_1');
    });

    it('check cast an properties to a native js type', () => {
        license.setProperty('number', 1);
        expect(license.getProperty('number')).toBe('1');
        license.setProperty('number', true);
        expect(license.getProperty('number')).toBe('true');

        license.setProperty('active', 1);
        expect(license.getProperty('active')).toBe(true);
        license.setProperty('active', 0);
        expect(license.getProperty('active')).toBe(false);
        license.setProperty('active', '');
        expect(license.getProperty('active')).toBe(false);
        license.setProperty('active', '123');
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

        license.setProperty('price', '3.14');
        expect(license.getProperty('price')).toBe(3.14);

        license = new License();
        license.setProperty('price', '314e-2');
        expect(license.getProperty('price')).toBe(3.14);

        license = new License();
        license.setProperty('price', '0.0314E+2');
        expect(license.getProperty('price')).toBe(3.14);

        license = new License();
        license.setProperty('price', '3.14any non-numeric characters');
        expect(license.getProperty('price')).toBe(3.14);

        license.setProperty('hidden', 1);
        expect(license.getProperty('hidden')).toBe(true);
        license.setProperty('hidden', 0);
        expect(license.getProperty('hidden')).toBe(false);
        license.setProperty('hidden', '');
        expect(license.getProperty('hidden')).toBe(false);
        license.setProperty('hidden', '123');
        expect(license.getProperty('hidden')).toBe(true);
        license.setProperty('hidden', null);
        expect(license.getProperty('hidden')).toBe(false);

        license.setProperty('parentfeature', 1);
        expect(license.getProperty('parentfeature')).toBe('1');
        license.setProperty('parentfeature', true);
        expect(license.getProperty('parentfeature')).toBe('true');

        license.setProperty('timeVolume', '015');
        expect(license.getProperty('timeVolume')).toBe(15);
        license.setProperty('timeVolume', 15.99);
        expect(license.getProperty('timeVolume')).toBe(15);
        license.setProperty('timeVolume', '15*3');
        expect(license.getProperty('timeVolume')).toBe(15);
        license.setProperty('timeVolume', '15e2');
        expect(license.getProperty('timeVolume')).toBe(15);
    });

    it('check "removeProperty" method', () => {
        license.setProperty('number', 'number');
        license.removeProperty('number');

        expect(license.getProperty('number')).toBe(undefined);
        expect(license.number).toBe(undefined);
        expect(license.getNumber()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        license.setProperty('number', 'number');
        license.removeDefine('number');

        expect(license.number).toBe(undefined);
        expect(license.getProperty('number')).toBe('number');
        expect(license.getNumber()).toBe('number');

        license.number = 'number_1';

        expect(license.number).toBe('number_1');
        expect(license.getProperty('number')).toBe('number');
        expect(license.getNumber()).toBe('number');
    });
});
