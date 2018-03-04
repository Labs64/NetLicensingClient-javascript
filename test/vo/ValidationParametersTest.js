import ValidationParameters from '../../src/vo/ValidationParameters';

describe('vo.ValidationParametersTest', () => {
    let vp;

    beforeEach(() => {
        vp = new ValidationParameters();
    });

    it('check "setProductNumber/getProductNumber" methods', () => {
        vp.setProductNumber('productNumber_0');
        expect(vp.getProductNumber()).toBe('productNumber_0');

        vp.setProductNumber('productNumber_1');
        expect(vp.getProductNumber()).toBe('productNumber_1');
    });

    it('check "setLicenseeName/getLicenseeName" methods', () => {
        vp.setLicenseeName('licenseeName_0');
        expect(vp.getLicenseeName()).toBe('licenseeName_0');

        vp.setLicenseeName('licenseeName_1');
        expect(vp.getLicenseeName()).toBe('licenseeName_1');
    });

    it('check "setLicenseeSecret/getLicenseeSecret" methods', () => {
        vp.setLicenseeSecret('licenseeSecret_0');
        expect(vp.getLicenseeSecret()).toBe('licenseeSecret_0');

        vp.setLicenseeSecret('licenseeSecret_1');
        expect(vp.getLicenseeSecret()).toBe('licenseeSecret_1');
    });

    it('check "getParameters" method', () => {
        vp.setProductModuleValidationParameters('productModuleNumber_0', { valid: true });
        vp.setProductModuleValidationParameters('productModuleNumber_1', { valid: true });
        vp.setProductModuleValidationParameters('productModuleNumber_2', { valid: true });

        expect(Object.keys(vp.getParameters()).length).toBe(3);
    });

    it('check "setProductModuleValidationParameters/getProductModuleValidationParameters" methods', () => {
        vp.setProductModuleValidationParameters('productModuleNumber_0', { valid: true });
        expect(vp.getProductModuleValidationParameters('productModuleNumber_0').valid).toBe(true);

        vp.setProductModuleValidationParameters('productModuleNumber_1', { valid: false });
        expect(vp.getProductModuleValidationParameters('productModuleNumber_1').valid).toBe(false);
    });
});
