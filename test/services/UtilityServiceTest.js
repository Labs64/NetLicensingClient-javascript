describe('UtilityServiceTest', function () {
    var context;

    beforeAll(function () {
        context = new Nlic.Context().setUsername('Demo').setPassword('demo');
    });

    it('check "listLicenseTypes" method', function () {
        return Nlic.UtilityService.listLicenseTypes(context)
            .then(function (licenseTypes) {
                expect(Array.isArray(licenseTypes)).toBe(true);
                expect(licenseTypes.length).toBeGreaterThanOrEqual(4);
            });

    });

    it('check "listLicensingModels" method', function () {
        return Nlic.UtilityService.listLicensingModels(context)
            .then(function (licensingModels) {
                expect(Array.isArray(licensingModels)).toBe(true);
                expect(licensingModels.length).toBeGreaterThanOrEqual(6);
            });
    });
});