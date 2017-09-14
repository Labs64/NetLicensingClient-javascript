describe('UtilityServiceTest', function () {
    var context;

    beforeAll(function () {
        context = new Netlicensing.Context().setUsername('Demo').setPassword('demo');
    });

    it('check "listLicenseTypes" method', function () {
        return Netlicensing.UtilityService.listLicenseTypes(context)
            .then(function (licenseTypes) {
                expect(Array.isArray(licenseTypes)).toBe(true);
                expect(licenseTypes.length).toBeGreaterThanOrEqual(4);
            });

    });

    it('check "listLicensingModels" method', function () {
        return Netlicensing.UtilityService.listLicensingModels(context)
            .then(function (licensingModels) {
                expect(Array.isArray(licensingModels)).toBe(true);
                expect(licensingModels.length).toBeGreaterThanOrEqual(6);
            });
    });

    it('check "listCountries" method', function () {
        return Netlicensing.UtilityService.listCountries(context)
            .then(function (listCountries) {
                expect(Array.isArray(listCountries)).toBe(true);
                expect(listCountries[0] instanceof Netlicensing.Country).toBe(true);
                expect(listCountries.length).toBeGreaterThanOrEqual(0);
            });
    });
});