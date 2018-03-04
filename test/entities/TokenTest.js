import Token from '../../src/entities/Token';

describe('entities.TokenTest', () => {
    let token;

    beforeEach(() => {
        token = new Token();
    });

    it('check "number" property getters', () => {
        token.setProperty('number', 'number_0');
        expect(token.getProperty('number')).toBe('number_0');
        expect(token.getNumber()).toBe('number_0');
        expect(token.number).toBe('number_0');
    });

    it('check "active" property setters/getters', () => {
        token.setProperty('active', true);
        expect(token.getProperty('active')).toBe(true);
        expect(token.getActive()).toBe(true);
        expect(token.active).toBe(true);

        token.setActive(false);
        expect(token.getProperty('active')).toBe(false);
        expect(token.getActive()).toBe(false);
        expect(token.active).toBe(false);

        token.active = true;
        expect(token.getProperty('active')).toBe(true);
        expect(token.getActive()).toBe(true);
        expect(token.active).toBe(true);
    });

    it('check "expirationTime" property setters/getters', () => {
        token.setProperty('expirationTime', new Date('2055-01-01'));
        expect(token.getProperty('expirationTime').toISOString()).toBe(new Date('2055-01-01').toISOString());
        expect(token.getExpirationTime().toISOString()).toBe(new Date('2055-01-01').toISOString());
        expect(token.expirationTime.toISOString()).toBe(new Date('2055-01-01').toISOString());

        token.setExpirationTime(new Date('2055-01-02'));
        expect(token.getProperty('expirationTime').toISOString()).toBe(new Date('2055-01-02').toISOString());
        expect(token.getExpirationTime().toISOString()).toBe(new Date('2055-01-02').toISOString());
        expect(token.expirationTime.toISOString()).toBe(new Date('2055-01-02').toISOString());

        token.expirationTime = new Date('2055-01-03');
        expect(token.getProperty('expirationTime').toISOString()).toBe(new Date('2055-01-03').toISOString());
        expect(token.getExpirationTime().toISOString()).toBe(new Date('2055-01-03').toISOString());
        expect(token.expirationTime.toISOString()).toBe(new Date('2055-01-03').toISOString());
    });

    it('check "vendorNumber" property setters/getters', () => {
        token.setProperty('vendorNumber', 'vendorNumber_0');
        expect(token.getProperty('vendorNumber')).toBe('vendorNumber_0');
        expect(token.getVendorNumber()).toBe('vendorNumber_0');
        expect(token.vendorNumber).toBe('vendorNumber_0');

        token.setVendorNumber('vendorNumber_1');
        expect(token.getProperty('vendorNumber')).toBe('vendorNumber_1');
        expect(token.getVendorNumber()).toBe('vendorNumber_1');
        expect(token.vendorNumber).toBe('vendorNumber_1');

        token.vendorNumber = 'vendorNumber_2';
        expect(token.getProperty('vendorNumber')).toBe('vendorNumber_2');
        expect(token.getVendorNumber()).toBe('vendorNumber_2');
        expect(token.vendorNumber).toBe('vendorNumber_2');
    });

    it('check "tokenType" property setters/getters', () => {
        token.setProperty('tokenType', 'tokenType_0');
        expect(token.getProperty('tokenType')).toBe('tokenType_0');
        expect(token.getTokenType()).toBe('tokenType_0');
        expect(token.tokenType).toBe('tokenType_0');

        token.setTokenType('tokenType_1');
        expect(token.getProperty('tokenType')).toBe('tokenType_1');
        expect(token.getTokenType()).toBe('tokenType_1');
        expect(token.tokenType).toBe('tokenType_1');

        token.tokenType = 'tokenType_2';
        expect(token.getProperty('tokenType')).toBe('tokenType_2');
        expect(token.getTokenType()).toBe('tokenType_2');
        expect(token.tokenType).toBe('tokenType_2');
    });

    it('check "licenseeNumber" property setters/getters', () => {
        token.setProperty('licenseeNumber', 'licenseeNumber_0');
        expect(token.getProperty('licenseeNumber')).toBe('licenseeNumber_0');
        expect(token.getLicenseeNumber()).toBe('licenseeNumber_0');
        expect(token.licenseeNumber).toBe('licenseeNumber_0');

        token.setLicenseeNumber('licenseeNumber_1');
        expect(token.getProperty('licenseeNumber')).toBe('licenseeNumber_1');
        expect(token.getLicenseeNumber()).toBe('licenseeNumber_1');
        expect(token.licenseeNumber).toBe('licenseeNumber_1');

        token.licenseeNumber = 'licenseeNumber_2';
        expect(token.getProperty('licenseeNumber')).toBe('licenseeNumber_2');
        expect(token.getLicenseeNumber()).toBe('licenseeNumber_2');
        expect(token.licenseeNumber).toBe('licenseeNumber_2');
    });

    it('check "successURL" property setters/getters', () => {
        token.setProperty('successURL', 'successURL_0');
        expect(token.getProperty('successURL')).toBe('successURL_0');
        expect(token.getSuccessURL()).toBe('successURL_0');
        expect(token.successURL).toBe('successURL_0');

        token.setSuccessURL('successURL_1');
        expect(token.getProperty('successURL')).toBe('successURL_1');
        expect(token.getSuccessURL()).toBe('successURL_1');
        expect(token.successURL).toBe('successURL_1');

        token.successURL = 'successURL_2';
        expect(token.getProperty('successURL')).toBe('successURL_2');
        expect(token.getSuccessURL()).toBe('successURL_2');
        expect(token.successURL).toBe('successURL_2');
    });

    it('check "successURLTitle" property setters/getters', () => {
        token.setProperty('successURLTitle', 'successURLTitle_0');
        expect(token.getProperty('successURLTitle')).toBe('successURLTitle_0');
        expect(token.getSuccessURLTitle()).toBe('successURLTitle_0');
        expect(token.successURLTitle).toBe('successURLTitle_0');

        token.setSuccessURLTitle('successURLTitle_1');
        expect(token.getProperty('successURLTitle')).toBe('successURLTitle_1');
        expect(token.getSuccessURLTitle()).toBe('successURLTitle_1');
        expect(token.successURLTitle).toBe('successURLTitle_1');

        token.successURLTitle = 'successURLTitle_2';
        expect(token.getProperty('successURLTitle')).toBe('successURLTitle_2');
        expect(token.getSuccessURLTitle()).toBe('successURLTitle_2');
        expect(token.successURLTitle).toBe('successURLTitle_2');
    });

    it('check "cancelURL" property setters/getters', () => {
        token.setProperty('cancelURL', 'cancelURL_0');
        expect(token.getProperty('cancelURL')).toBe('cancelURL_0');
        expect(token.getCancelURL()).toBe('cancelURL_0');
        expect(token.cancelURL).toBe('cancelURL_0');

        token.setCancelURL('cancelURL_1');
        expect(token.getProperty('cancelURL')).toBe('cancelURL_1');
        expect(token.getCancelURL()).toBe('cancelURL_1');
        expect(token.cancelURL).toBe('cancelURL_1');

        token.cancelURL = 'cancelURL_2';
        expect(token.getProperty('cancelURL')).toBe('cancelURL_2');
        expect(token.getCancelURL()).toBe('cancelURL_2');
        expect(token.cancelURL).toBe('cancelURL_2');
    });

    it('check "cancelURLTitle" property setters/getters', () => {
        token.setProperty('cancelURLTitle', 'cancelURLTitle_0');
        expect(token.getProperty('cancelURLTitle')).toBe('cancelURLTitle_0');
        expect(token.getCancelURLTitle()).toBe('cancelURLTitle_0');
        expect(token.cancelURLTitle).toBe('cancelURLTitle_0');

        token.setCancelURLTitle('cancelURLTitle_1');
        expect(token.getProperty('cancelURLTitle')).toBe('cancelURLTitle_1');
        expect(token.getCancelURLTitle()).toBe('cancelURLTitle_1');
        expect(token.cancelURLTitle).toBe('cancelURLTitle_1');

        token.cancelURLTitle = 'cancelURLTitle_2';
        expect(token.getProperty('cancelURLTitle')).toBe('cancelURLTitle_2');
        expect(token.getCancelURLTitle()).toBe('cancelURLTitle_2');
        expect(token.cancelURLTitle).toBe('cancelURLTitle_2');
    });

    it('check "shopURL" property setters/getters', () => {
        expect(() => { token.shopURL = 'http://shop_url_example.com'; }).toThrowError(TypeError);

        expect(token.getProperty('shopURL')).toBe(undefined);
        expect(token.getShopURL()).toBe(undefined);
        expect(token.shopURL).toBe(undefined);

        token.setProperty('shopURL', 'http://shop_url_example.com');
        expect(token.getProperty('shopURL')).toBe('http://shop_url_example.com');
        expect(token.getShopURL()).toBe('http://shop_url_example.com');
        expect(token.shopURL).toBe('http://shop_url_example.com');

        expect(() => { token.setProperty('shopURL', 'http://shop_url_example.com'); }).toThrowError(TypeError);
    });

    it('check cast an properties to a native js type', () => {
        token.setProperty('number', 1);
        expect(token.getProperty('number')).toBe('1');

        token = new Token();
        token.setProperty('number', true);
        expect(token.getProperty('number')).toBe('true');

        token.setProperty('active', 1);
        expect(token.getProperty('active')).toBe(true);
        token.setProperty('active', 0);
        expect(token.getProperty('active')).toBe(false);
        token.setProperty('active', '');
        expect(token.getProperty('active')).toBe(false);
        token.setProperty('active', '123');
        expect(token.getProperty('active')).toBe(true);
        token.setProperty('active', null);
        expect(token.getProperty('active')).toBe(false);

        token.setProperty('expirationTime', '2055-01-01');
        expect(token.getProperty('expirationTime') instanceof Date).toBe(true);
        token.setProperty('expirationTime', new Date());
        expect(token.getProperty('expirationTime') instanceof Date).toBe(true);

        token.setProperty('vendorNumber', 1);
        expect(token.getProperty('vendorNumber')).toBe('1');
        token.setProperty('vendorNumber', true);
        expect(token.getProperty('vendorNumber')).toBe('true');

        token.setProperty('tokenType', 1);
        expect(token.getProperty('tokenType')).toBe('1');
        token.setProperty('tokenType', true);
        expect(token.getProperty('tokenType')).toBe('true');

        token.setProperty('licenseeNumber', 1);
        expect(token.getProperty('licenseeNumber')).toBe('1');
        token.setProperty('licenseeNumber', true);
        expect(token.getProperty('licenseeNumber')).toBe('true');

        token.setProperty('successURL', 1);
        expect(token.getProperty('successURL')).toBe('1');
        token.setProperty('successURL', true);
        expect(token.getProperty('successURL')).toBe('true');

        token.setProperty('successURLTitle', 1);
        expect(token.getProperty('successURLTitle')).toBe('1');
        token.setProperty('successURLTitle', true);
        expect(token.getProperty('successURLTitle')).toBe('true');

        token.setProperty('cancelURL', 1);
        expect(token.getProperty('cancelURL')).toBe('1');
        token.setProperty('cancelURL', true);
        expect(token.getProperty('cancelURL')).toBe('true');

        token.setProperty('cancelURLTitle', 1);
        expect(token.getProperty('cancelURLTitle')).toBe('1');
        token.setProperty('cancelURLTitle', true);
        expect(token.getProperty('cancelURLTitle')).toBe('true');

        token.setProperty('shopURL', 1);
        expect(token.getProperty('shopURL')).toBe('1');

        token = new Token();
        token.setProperty('shopURL', true);
        expect(token.getProperty('shopURL')).toBe('true');
    });

    it('check throwable error if property value is typeof "function"', () => {
        const func = () => {};

        expect(() => { token.setProperty('number', func); }).toThrowError(TypeError);
        expect(() => { token.setActive(func); }).toThrowError(TypeError);
        expect(() => { token.setExpirationTime(func); }).toThrowError(TypeError);
        expect(() => { token.setVendorNumber(func); }).toThrowError(TypeError);
        expect(() => { token.setTokenType(func); }).toThrowError(TypeError);
        expect(() => { token.setLicenseeNumber(func); }).toThrowError(TypeError);
        expect(() => { token.setSuccessURL(func); }).toThrowError(TypeError);
        expect(() => { token.setSuccessURLTitle(func); }).toThrowError(TypeError);
        expect(() => { token.setCancelURL(func); }).toThrowError(TypeError);
        expect(() => { token.setCancelURLTitle(func); }).toThrowError(TypeError);
        expect(() => { token.setProperty('shopURL', func); }).toThrowError(TypeError);

        expect(() => { token.active = func; }).toThrowError(TypeError);
        expect(() => { token.expirationTime = func; }).toThrowError(TypeError);
        expect(() => { token.vendorNumber = func; }).toThrowError(TypeError);
        expect(() => { token.tokenType = func; }).toThrowError(TypeError);
        expect(() => { token.licenseeNumber = func; }).toThrowError(TypeError);
        expect(() => { token.successURL = func; }).toThrowError(TypeError);
        expect(() => { token.successURLTitle = func; }).toThrowError(TypeError);
        expect(() => { token.cancelURL = func; }).toThrowError(TypeError);
        expect(() => { token.cancelURLTitle = func; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "undefined"', () => {
        expect(() => { token.setProperty('number', undefined); }).toThrowError(TypeError);
        expect(() => { token.setActive(undefined); }).toThrowError(TypeError);
        expect(() => { token.setExpirationTime(undefined); }).toThrowError(TypeError);
        expect(() => { token.setVendorNumber(undefined); }).toThrowError(TypeError);
        expect(() => { token.setTokenType(undefined); }).toThrowError(TypeError);
        expect(() => { token.setLicenseeNumber(undefined); }).toThrowError(TypeError);
        expect(() => { token.setSuccessURL(undefined); }).toThrowError(TypeError);
        expect(() => { token.setSuccessURLTitle(undefined); }).toThrowError(TypeError);
        expect(() => { token.setCancelURL(undefined); }).toThrowError(TypeError);
        expect(() => { token.setCancelURLTitle(undefined); }).toThrowError(TypeError);
        expect(() => { token.setProperty('shopURL', undefined); }).toThrowError(TypeError);

        expect(() => { token.active = undefined; }).toThrowError(TypeError);
        expect(() => { token.expirationTime = undefined; }).toThrowError(TypeError);
        expect(() => { token.vendorNumber = undefined; }).toThrowError(TypeError);
        expect(() => { token.tokenType = undefined; }).toThrowError(TypeError);
        expect(() => { token.licenseeNumber = undefined; }).toThrowError(TypeError);
        expect(() => { token.successURL = undefined; }).toThrowError(TypeError);
        expect(() => { token.successURLTitle = undefined; }).toThrowError(TypeError);
        expect(() => { token.cancelURL = undefined; }).toThrowError(TypeError);
        expect(() => { token.cancelURLTitle = undefined; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "NaN"', () => {
        expect(() => { token.setProperty('number', NaN); }).toThrowError(TypeError);
        expect(() => { token.setActive(NaN); }).toThrowError(TypeError);
        expect(() => { token.setExpirationTime(NaN); }).toThrowError(TypeError);
        expect(() => { token.setVendorNumber(NaN); }).toThrowError(TypeError);
        expect(() => { token.setTokenType(NaN); }).toThrowError(TypeError);
        expect(() => { token.setLicenseeNumber(NaN); }).toThrowError(TypeError);
        expect(() => { token.setSuccessURL(NaN); }).toThrowError(TypeError);
        expect(() => { token.setSuccessURLTitle(NaN); }).toThrowError(TypeError);
        expect(() => { token.setCancelURL(NaN); }).toThrowError(TypeError);
        expect(() => { token.setCancelURLTitle(NaN); }).toThrowError(TypeError);
        expect(() => { token.setProperty('shopURL', NaN); }).toThrowError(TypeError);

        expect(() => { token.active = NaN; }).toThrowError(TypeError);
        expect(() => { token.expirationTime = NaN; }).toThrowError(TypeError);
        expect(() => { token.vendorNumber = NaN; }).toThrowError(TypeError);
        expect(() => { token.tokenType = NaN; }).toThrowError(TypeError);
        expect(() => { token.licenseeNumber = NaN; }).toThrowError(TypeError);
        expect(() => { token.successURL = NaN; }).toThrowError(TypeError);
        expect(() => { token.successURLTitle = NaN; }).toThrowError(TypeError);
        expect(() => { token.cancelURL = NaN; }).toThrowError(TypeError);
        expect(() => { token.cancelURLTitle = NaN; }).toThrowError(TypeError);
    });

    it('check throwable error if property value is typeof "Infinity"', () => {
        expect(() => { token.setProperty('number', Infinity); }).toThrowError(TypeError);
        expect(() => { token.setActive(Infinity); }).toThrowError(TypeError);
        expect(() => { token.setExpirationTime(Infinity); }).toThrowError(TypeError);
        expect(() => { token.setVendorNumber(Infinity); }).toThrowError(TypeError);
        expect(() => { token.setTokenType(Infinity); }).toThrowError(TypeError);
        expect(() => { token.setLicenseeNumber(Infinity); }).toThrowError(TypeError);
        expect(() => { token.setSuccessURL(Infinity); }).toThrowError(TypeError);
        expect(() => { token.setSuccessURLTitle(Infinity); }).toThrowError(TypeError);
        expect(() => { token.setCancelURL(Infinity); }).toThrowError(TypeError);
        expect(() => { token.setCancelURLTitle(Infinity); }).toThrowError(TypeError);
        expect(() => { token.setProperty('shopURL', Infinity); }).toThrowError(TypeError);

        expect(() => { token.active = Infinity; }).toThrowError(TypeError);
        expect(() => { token.expirationTime = Infinity; }).toThrowError(TypeError);
        expect(() => { token.vendorNumber = Infinity; }).toThrowError(TypeError);
        expect(() => { token.tokenType = Infinity; }).toThrowError(TypeError);
        expect(() => { token.licenseeNumber = Infinity; }).toThrowError(TypeError);
        expect(() => { token.successURL = Infinity; }).toThrowError(TypeError);
        expect(() => { token.successURLTitle = Infinity; }).toThrowError(TypeError);
        expect(() => { token.cancelURL = Infinity; }).toThrowError(TypeError);
        expect(() => { token.cancelURLTitle = Infinity; }).toThrowError(TypeError);
    });

    it('check "removeProperty" method', () => {
        token.setProperty('successURL', 'successURL');
        token.removeProperty('successURL');

        expect(token.getProperty('successURL')).toBe(undefined);
        expect(token.successURL).toBe(undefined);
        expect(token.getSuccessURL()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        token.setProperty('successURL', 'successURL');
        token.removeDefine('successURL');

        expect(token.successURL).toBe(undefined);
        expect(token.getProperty('successURL')).toBe('successURL');
        expect(token.getSuccessURL()).toBe('successURL');

        token.successURL = 'successURL_1';

        expect(token.successURL).toBe('successURL_1');
        expect(token.getProperty('successURL')).toBe('successURL');
        expect(token.getSuccessURL()).toBe('successURL');
    });
});
