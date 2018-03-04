import Context from '../../src/vo/Context';

describe('vo.ContextTest', () => {
    let context;

    beforeEach(() => {
        context = new Context();
    });

    it('check "baseUrl" property setters/getters', () => {
        context.setValue('baseUrl', 'baseUrl_0');
        expect(context.getValue('baseUrl')).toBe('baseUrl_0');
        expect(context.getBaseUrl()).toBe('baseUrl_0');
        expect(context.baseUrl).toBe('baseUrl_0');

        context.setBaseUrl('baseUrl_1');
        expect(context.getValue('baseUrl')).toBe('baseUrl_1');
        expect(context.getBaseUrl()).toBe('baseUrl_1');
        expect(context.baseUrl).toBe('baseUrl_1');

        context.baseUrl = 'baseUrl_2';
        expect(context.getValue('baseUrl')).toBe('baseUrl_2');
        expect(context.getBaseUrl()).toBe('baseUrl_2');
        expect(context.baseUrl).toBe('baseUrl_2');
    });

    it('check "username" property setters/getters', () => {
        context.setValue('username', 'username_0');
        expect(context.getValue('username')).toBe('username_0');
        expect(context.getUsername()).toBe('username_0');
        expect(context.username).toBe('username_0');

        context.setUsername('username_1');
        expect(context.getValue('username')).toBe('username_1');
        expect(context.getUsername()).toBe('username_1');
        expect(context.username).toBe('username_1');

        context.username = 'username_2';
        expect(context.getValue('username')).toBe('username_2');
        expect(context.getUsername()).toBe('username_2');
        expect(context.username).toBe('username_2');
    });

    it('check "username" property setters/getters', () => {
        context.setValue('username', 'username_0');
        expect(context.getValue('username')).toBe('username_0');
        expect(context.getUsername()).toBe('username_0');
        expect(context.username).toBe('username_0');

        context.setUsername('username_1');
        expect(context.getValue('username')).toBe('username_1');
        expect(context.getUsername()).toBe('username_1');
        expect(context.username).toBe('username_1');

        context.username = 'username_2';
        expect(context.getValue('username')).toBe('username_2');
        expect(context.getUsername()).toBe('username_2');
        expect(context.username).toBe('username_2');
    });

    it('check "password" property setters/getters', () => {
        context.setValue('password', 'password_0');
        expect(context.getValue('password')).toBe('password_0');
        expect(context.getPassword()).toBe('password_0');
        expect(context.password).toBe('password_0');

        context.setPassword('password_1');
        expect(context.getValue('password')).toBe('password_1');
        expect(context.getPassword()).toBe('password_1');
        expect(context.password).toBe('password_1');

        context.password = 'password_2';
        expect(context.getValue('password')).toBe('password_2');
        expect(context.getPassword()).toBe('password_2');
        expect(context.password).toBe('password_2');
    });

    it('check "apiKey" property setters/getters', () => {
        context.setValue('apiKey', 'apiKey_0');
        expect(context.getValue('apiKey')).toBe('apiKey_0');
        expect(context.getApiKey()).toBe('apiKey_0');
        expect(context.apiKey).toBe('apiKey_0');

        context.setApiKey('apiKey_1');
        expect(context.getValue('apiKey')).toBe('apiKey_1');
        expect(context.getApiKey()).toBe('apiKey_1');
        expect(context.apiKey).toBe('apiKey_1');

        context.apiKey = 'apiKey_2';
        expect(context.getValue('apiKey')).toBe('apiKey_2');
        expect(context.getApiKey()).toBe('apiKey_2');
        expect(context.apiKey).toBe('apiKey_2');
    });

    it('check "securityMode" property setters/getters', () => {
        context.setValue('securityMode', 'securityMode_0');
        expect(context.getValue('securityMode')).toBe('securityMode_0');
        expect(context.getSecurityMode()).toBe('securityMode_0');
        expect(context.securityMode).toBe('securityMode_0');

        context.setSecurityMode('securityMode_1');
        expect(context.getValue('securityMode')).toBe('securityMode_1');
        expect(context.getSecurityMode()).toBe('securityMode_1');
        expect(context.securityMode).toBe('securityMode_1');

        context.securityMode = 'securityMode_2';
        expect(context.getValue('securityMode')).toBe('securityMode_2');
        expect(context.getSecurityMode()).toBe('securityMode_2');
        expect(context.securityMode).toBe('securityMode_2');
    });

    it('check "vendorNumber" property setters/getters', () => {
        context.setValue('vendorNumber', 'vendorNumber_0');
        expect(context.getValue('vendorNumber')).toBe('vendorNumber_0');
        expect(context.getVendorNumber()).toBe('vendorNumber_0');
        expect(context.vendorNumber).toBe('vendorNumber_0');

        context.setVendorNumber('vendorNumber_1');
        expect(context.getValue('vendorNumber')).toBe('vendorNumber_1');
        expect(context.getVendorNumber()).toBe('vendorNumber_1');
        expect(context.vendorNumber).toBe('vendorNumber_1');

        context.vendorNumber = 'vendorNumber_2';
        expect(context.getValue('vendorNumber')).toBe('vendorNumber_2');
        expect(context.getVendorNumber()).toBe('vendorNumber_2');
        expect(context.vendorNumber).toBe('vendorNumber_2');
    });

    it('check "custom-value" value setters/getters', () => {
        context.setValue('custom_value', 'my_custom_value_0');
        expect(context.getValue('custom_value')).toBe('my_custom_value_0');
        expect(context.custom_value).toBe('my_custom_value_0');

        context.custom_value = 'my_custom_value_1';
        expect(context.getValue('custom_value')).toBe('my_custom_value_1');
        expect(context.custom_value).toBe('my_custom_value_1');
    });

    it('check "removeProperty" method', () => {
        context.setValue('baseUrl', 'baseUrl');
        context.removeValue('baseUrl');

        expect(context.getValue('baseUrl')).toBe(undefined);
        expect(context.baseUrl).toBe(undefined);
        expect(context.getBaseUrl()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        context.setValue('baseUrl', 'baseUrl_0');
        context.removeDefine('baseUrl');

        expect(context.baseUrl).toBe(undefined);
        expect(context.getValue('baseUrl')).toBe('baseUrl_0');
        expect(context.getBaseUrl()).toBe('baseUrl_0');

        context.baseUrl = 'baseUrl_1';

        expect(context.baseUrl).toBe('baseUrl_1');
        expect(context.getValue('baseUrl')).toBe('baseUrl_0');
        expect(context.getBaseUrl()).toBe('baseUrl_0');
    });
});
