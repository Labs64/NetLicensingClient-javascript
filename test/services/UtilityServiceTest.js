describe('UtilityServiceTest', function () {
    var context;

    beforeAll(function () {
        context = new NetLicensing.Context().setUsername('Demo').setPassword('demo');
    });

    it('check "listLicenseTypes" method', function () {
        return NetLicensing.UtilityService.listLicenseTypes(context)
            .then(function (licenseTypes) {
                expect(Array.isArray(licenseTypes)).toBe(true);
                expect(licenseTypes.length).toBeGreaterThanOrEqual(4);
            });

    });

    it('check "listLicensingModels" method', function () {
        return NetLicensing.UtilityService.listLicensingModels(context)
            .then(function (licensingModels) {
                expect(Array.isArray(licensingModels)).toBe(true);
                expect(licensingModels.length).toBeGreaterThanOrEqual(6);
            });
    });

    it('check "listCountries" method', function () {
        return NetLicensing.UtilityService.listCountries(context)
            .then(function (listCountries) {
                expect(Array.isArray(listCountries)).toBe(true);
                expect(listCountries[0] instanceof NetLicensing.Country).toBe(true);
                expect(listCountries.length).toBeGreaterThanOrEqual(0);
            });
    });
});