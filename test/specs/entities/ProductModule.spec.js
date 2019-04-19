import ProductModule from '@/entities/ProductModule';

describe('entities/ProductModule', () => {
    let productModule;

    beforeEach(() => {
        productModule = new ProductModule();
    });

    it('check "number" property setters/getters', () => {
        productModule.setProperty('number', 'number_0');
        expect(productModule.getProperty('number')).toBe('number_0');
        expect(productModule.getNumber()).toBe('number_0');
        expect(productModule.number).toBe('number_0');

        productModule.setNumber('number_1');
        expect(productModule.getProperty('number')).toBe('number_1');
        expect(productModule.getNumber()).toBe('number_1');
        expect(productModule.number).toBe('number_1');

        productModule.number = 'number_2';
        expect(productModule.getProperty('number')).toBe('number_2');
        expect(productModule.getNumber()).toBe('number_2');
        expect(productModule.number).toBe('number_2');
    });

    it('check "name" property setters/getters', () => {
        productModule.setProperty('name', 'name_0');
        expect(productModule.getProperty('name')).toBe('name_0');
        expect(productModule.getName()).toBe('name_0');
        expect(productModule.name).toBe('name_0');

        productModule.setName('name_1');
        expect(productModule.getProperty('name')).toBe('name_1');
        expect(productModule.getName()).toBe('name_1');
        expect(productModule.name).toBe('name_1');

        productModule.name = 'name_2';
        expect(productModule.getProperty('name')).toBe('name_2');
        expect(productModule.getName()).toBe('name_2');
        expect(productModule.name).toBe('name_2');
    });

    it('check "active" property setters/getters', () => {
        productModule.setProperty('active', true);
        expect(productModule.getProperty('active')).toBe(true);
        expect(productModule.getActive()).toBe(true);
        expect(productModule.active).toBe(true);

        productModule.setActive(false);
        expect(productModule.getProperty('active')).toBe(false);
        expect(productModule.getActive()).toBe(false);
        expect(productModule.active).toBe(false);

        productModule.active = true;
        expect(productModule.getProperty('active')).toBe(true);
        expect(productModule.getActive()).toBe(true);
        expect(productModule.active).toBe(true);
    });

    it('check "licensingModel" property setters/getters', () => {
        productModule.setProperty('licensingModel', 'TryAndBuy');
        expect(productModule.getProperty('licensingModel')).toBe('TryAndBuy');
        expect(productModule.getLicensingModel()).toBe('TryAndBuy');
        expect(productModule.licensingModel).toBe('TryAndBuy');

        productModule.setLicensingModel('Subscription');
        expect(productModule.getProperty('licensingModel')).toBe('Subscription');
        expect(productModule.getLicensingModel()).toBe('Subscription');
        expect(productModule.licensingModel).toBe('Subscription');

        productModule.licensingModel = 'Rental';
        expect(productModule.getProperty('licensingModel')).toBe('Rental');
        expect(productModule.getLicensingModel()).toBe('Rental');
        expect(productModule.licensingModel).toBe('Rental');
    });

    it('check "maxCheckoutValidity" property setters/getters', () => {
        productModule.setProperty('maxCheckoutValidity', 1);
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(1);
        expect(productModule.getMaxCheckoutValidity()).toBe(1);
        expect(productModule.maxCheckoutValidity).toBe(1);

        productModule.setMaxCheckoutValidity(2);
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(2);
        expect(productModule.getMaxCheckoutValidity()).toBe(2);
        expect(productModule.maxCheckoutValidity).toBe(2);

        productModule.maxCheckoutValidity = 3;
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(3);
        expect(productModule.getMaxCheckoutValidity()).toBe(3);
        expect(productModule.maxCheckoutValidity).toBe(3);
    });

    it('check "yellowThreshold" property setters/getters', () => {
        productModule.setProperty('yellowThreshold', 1);
        expect(productModule.getProperty('yellowThreshold')).toBe(1);
        expect(productModule.getYellowThreshold()).toBe(1);
        expect(productModule.yellowThreshold).toBe(1);

        productModule.setYellowThreshold(2);
        expect(productModule.getProperty('yellowThreshold')).toBe(2);
        expect(productModule.getYellowThreshold()).toBe(2);
        expect(productModule.yellowThreshold).toBe(2);

        productModule.yellowThreshold = 3;
        expect(productModule.getProperty('yellowThreshold')).toBe(3);
        expect(productModule.getYellowThreshold()).toBe(3);
        expect(productModule.yellowThreshold).toBe(3);
    });

    it('check "redThreshold" property setters/getters', () => {
        productModule.setProperty('redThreshold', 1);
        expect(productModule.getProperty('redThreshold')).toBe(1);
        expect(productModule.getRedThreshold()).toBe(1);
        expect(productModule.redThreshold).toBe(1);

        productModule.setRedThreshold(2);
        expect(productModule.getProperty('redThreshold')).toBe(2);
        expect(productModule.getRedThreshold()).toBe(2);
        expect(productModule.redThreshold).toBe(2);

        productModule.redThreshold = 3;
        expect(productModule.getProperty('redThreshold')).toBe(3);
        expect(productModule.getRedThreshold()).toBe(3);
        expect(productModule.redThreshold).toBe(3);
    });

    it('check "licenseTemplate" property setters/getters', () => {
        productModule.setProperty('licenseTemplate', 'TIMEVOLUME');
        expect(productModule.getProperty('licenseTemplate')).toBe('TIMEVOLUME');
        expect(productModule.getLicenseTemplate()).toBe('TIMEVOLUME');
        expect(productModule.licenseTemplate).toBe('TIMEVOLUME');

        productModule.setLicenseTemplate('FEATURE');
        expect(productModule.getProperty('licenseTemplate')).toBe('FEATURE');
        expect(productModule.getLicenseTemplate()).toBe('FEATURE');
        expect(productModule.licenseTemplate).toBe('FEATURE');

        productModule.licenseTemplate = 'TIMEVOLUME';
        expect(productModule.getProperty('licenseTemplate')).toBe('TIMEVOLUME');
        expect(productModule.getLicenseTemplate()).toBe('TIMEVOLUME');
        expect(productModule.licenseTemplate).toBe('TIMEVOLUME');
    });

    it('check "inUse" property setters/getters', () => {
        productModule.setProperty('inUse', true);
        expect(productModule.getProperty('inUse')).toBe(true);
        expect(productModule.getInUse()).toBe(true);
        expect(productModule.inUse).toBe(true);
    });

    it('check "custom-property" property setters/getters', () => {
        productModule.setProperty('custom_property', 'my_custom_property_0');
        expect(productModule.getProperty('custom_property')).toBe('my_custom_property_0');
        expect(productModule.custom_property).toBe('my_custom_property_0');

        productModule.custom_property = 'my_custom_property_1';
        expect(productModule.getProperty('custom_property')).toBe('my_custom_property_1');
        expect(productModule.custom_property).toBe('my_custom_property_1');
    });

    it('check cast an properties to a native js type', () => {
        productModule.setProperty('number', 1);
        expect(productModule.getProperty('number')).toBe('1');
        productModule.setProperty('number', true);
        expect(productModule.getProperty('number')).toBe('true');

        productModule.setProperty('active', 1);
        expect(productModule.getProperty('active')).toBe(true);
        productModule.setProperty('active', 0);
        expect(productModule.getProperty('active')).toBe(false);
        productModule.setProperty('active', '');
        expect(productModule.getProperty('active')).toBe(false);
        productModule.setProperty('active', '123');
        expect(productModule.getProperty('active')).toBe(true);
        productModule.setProperty('active', null);
        expect(productModule.getProperty('active')).toBe(false);

        productModule.setProperty('name', 1);
        expect(productModule.getProperty('name')).toBe('1');
        productModule.setProperty('name', true);
        expect(productModule.getProperty('name')).toBe('true');

        productModule.setProperty('licensingModel', 1);
        expect(productModule.getProperty('licensingModel')).toBe('1');
        productModule.setProperty('licensingModel', true);
        expect(productModule.getProperty('licensingModel')).toBe('true');

        productModule.setProperty('maxCheckoutValidity', '015');
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(15);
        productModule.setProperty('maxCheckoutValidity', 15.99);
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(15);
        productModule.setProperty('maxCheckoutValidity', '15*3');
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(15);
        productModule.setProperty('maxCheckoutValidity', '15e2');
        expect(productModule.getProperty('maxCheckoutValidity')).toBe(15);

        productModule.setProperty('yellowThreshold', '015');
        expect(productModule.getProperty('yellowThreshold')).toBe(15);
        productModule.setProperty('yellowThreshold', 15.99);
        expect(productModule.getProperty('yellowThreshold')).toBe(15);
        productModule.setProperty('yellowThreshold', '15*3');
        expect(productModule.getProperty('yellowThreshold')).toBe(15);
        productModule.setProperty('yellowThreshold', '15e2');
        expect(productModule.getProperty('yellowThreshold')).toBe(15);

        productModule.setProperty('redThreshold', '015');
        expect(productModule.getProperty('redThreshold')).toBe(15);
        productModule.setProperty('redThreshold', 15.99);
        expect(productModule.getProperty('redThreshold')).toBe(15);
        productModule.setProperty('redThreshold', '15*3');
        expect(productModule.getProperty('redThreshold')).toBe(15);
        productModule.setProperty('redThreshold', '15e2');
        expect(productModule.getProperty('redThreshold')).toBe(15);

        productModule.setProperty('licenseTemplate', 1);
        expect(productModule.getProperty('licenseTemplate')).toBe('1');
        productModule.setProperty('licenseTemplate', true);
        expect(productModule.getProperty('licenseTemplate')).toBe('true');
    });

    it('check "removeProperty" method', () => {
        productModule.setProperty('number', 'number');
        productModule.removeProperty('number');

        expect(productModule.getProperty('number')).toBe(undefined);
        expect(productModule.number).toBe(undefined);
        expect(productModule.getNumber()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        productModule.setProperty('number', 'number');
        productModule.removeDefine('number');

        expect(productModule.number).toBe(undefined);
        expect(productModule.getProperty('number')).toBe('number');
        expect(productModule.getNumber()).toBe('number');

        productModule.number = 'number_1';

        expect(productModule.number).toBe('number_1');
        expect(productModule.getProperty('number')).toBe('number');
        expect(productModule.getNumber()).toBe('number');
    });
});
