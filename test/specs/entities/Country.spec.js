import Country from '@/entities/Country';

describe('entities/Country', () => {
    let country;

    beforeEach(() => {
        country = new Country();
    });

    it('check "code" property setters/getters', () => {
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

    it('check "name" property setters/getters', () => {
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

    it('check "vatPercent" property setters/getters', () => {
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

    it('check "isEu" property setters/getters', () => {
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

    it('check cast an properties to a native js type', () => {
        country.setProperty('code', 1);
        expect(country.getProperty('code')).toBe('1');
        country.setProperty('code', true);
        expect(country.getProperty('code')).toBe('true');

        country.setProperty('name', 1);
        expect(country.getProperty('name')).toBe('1');
        country.setProperty('name', true);
        expect(country.getProperty('name')).toBe('true');

        country.setProperty('vatPercent', '015');
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
        country.setProperty('isEu', '');
        expect(country.getProperty('isEu')).toBe(false);
        country.setProperty('isEu', '123');
        expect(country.getProperty('isEu')).toBe(true);
        country.setProperty('isEu', null);
        expect(country.getProperty('isEu')).toBe(false);
    });

    it('check "removeProperty" method', () => {
        country.setProperty('code', 'EU');
        country.removeProperty('code');

        expect(country.getProperty('code')).toBe(undefined);
        expect(country.code).toBe(undefined);
        expect(country.getCode()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        country.setProperty('code', 'EU');
        country.removeDefine('code');

        expect(country.code).toBe(undefined);
        expect(country.getProperty('code')).toBe('EU');
        expect(country.getCode()).toBe('EU');

        country.code = 'DE';

        expect(country.code).toBe('DE');
        expect(country.getProperty('code')).toBe('EU');
        expect(country.getCode()).toBe('EU');
    });
});
