import Token from '@/entities/Token';

describe('entities/Token', () => {
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
        token.setProperty('shopURL', 'http://shop_url_example.com');
        expect(token.getProperty('shopURL')).toBe('http://shop_url_example.com');
        expect(token.getShopURL()).toBe('http://shop_url_example.com');
        expect(token.shopURL).toBe('http://shop_url_example.com');
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
