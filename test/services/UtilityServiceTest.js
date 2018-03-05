import Context from '../../src/vo/Context';
import Country from '../../src/entities/Country';
import UtilityService from '../../src/services/UtilityService';


describe('services.UtilityServiceTest', () => {
    let context;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    it('check "listLicenseTypes" method', () => UtilityService.listLicenseTypes(context)
            .then((licenseTypes) => {
                expect(Array.isArray(licenseTypes)).toBe(true);
                expect(licenseTypes.length).toBeGreaterThanOrEqual(4);
            }));

    it('check "listLicensingModels" method', () => UtilityService.listLicensingModels(context)
            .then((licensingModels) => {
                expect(Array.isArray(licensingModels)).toBe(true);
                expect(licensingModels.length).toBeGreaterThanOrEqual(6);
            }));

    it('check "listCountries" method', () => UtilityService.listCountries(context)
            .then((listCountries) => {
                expect(Array.isArray(listCountries)).toBe(true);
                expect(listCountries[0] instanceof Country).toBe(true);
                expect(listCountries.length).toBeGreaterThanOrEqual(0);
                expect(listCountries[0] instanceof Country).toBe(true);
            }));
});
