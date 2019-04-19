import Product from '@/entities/Product';
import Constants from '@/Constants';
import ProductDiscount from '@/entities/ProductDiscount';

describe('entities/Product', () => {
    let product;

    beforeEach(() => {
        product = new Product();
    });

    it('check "number" property setters/getters', () => {
        product.setProperty('number', 'number_0');
        expect(product.getProperty('number')).toBe('number_0');
        expect(product.getNumber()).toBe('number_0');
        expect(product.number).toBe('number_0');

        product.setNumber('number_1');
        expect(product.getProperty('number')).toBe('number_1');
        expect(product.getNumber()).toBe('number_1');
        expect(product.number).toBe('number_1');

        product.number = 'number_2';
        expect(product.getProperty('number')).toBe('number_2');
        expect(product.getNumber()).toBe('number_2');
        expect(product.number).toBe('number_2');
    });

    it('check "name" property setters/getters', () => {
        product.setProperty('name', 'name_0');
        expect(product.getProperty('name')).toBe('name_0');
        expect(product.getName()).toBe('name_0');
        expect(product.name).toBe('name_0');

        product.setName('name_1');
        expect(product.getProperty('name')).toBe('name_1');
        expect(product.getName()).toBe('name_1');
        expect(product.name).toBe('name_1');

        product.name = 'name_2';
        expect(product.getProperty('name')).toBe('name_2');
        expect(product.getName()).toBe('name_2');
        expect(product.name).toBe('name_2');
    });

    it('check "active" property setters/getters', () => {
        product.setProperty('active', true);
        expect(product.getProperty('active')).toBe(true);
        expect(product.getActive()).toBe(true);
        expect(product.active).toBe(true);

        product.setActive(false);
        expect(product.getProperty('active')).toBe(false);
        expect(product.getActive()).toBe(false);
        expect(product.active).toBe(false);

        product.active = true;
        expect(product.getProperty('active')).toBe(true);
        expect(product.getActive()).toBe(true);
        expect(product.active).toBe(true);
    });

    it('check "version" property setters/getters', () => {
        product.setProperty('version', '1.05');
        expect(product.getProperty('version')).toBe('1.05');
        expect(product.getVersion()).toBe('1.05');
        expect(product.version).toBe('1.05');

        product.setVersion('2.0');
        expect(product.getProperty('version')).toBe('2.0');
        expect(product.getVersion()).toBe('2.0');
        expect(product.version).toBe('2.0');

        product.version = '1.1';
        expect(product.getProperty('version')).toBe('1.1');
        expect(product.getVersion()).toBe('1.1');
        expect(product.version).toBe('1.1');
    });

    it('check "description" property setters/getters', () => {
        product.setProperty('description', 'description_0');
        expect(product.getProperty('description')).toBe('description_0');
        expect(product.getDescription()).toBe('description_0');
        expect(product.description).toBe('description_0');

        product.setDescription('description_1');
        expect(product.getProperty('description')).toBe('description_1');
        expect(product.getDescription()).toBe('description_1');
        expect(product.description).toBe('description_1');

        product.description = 'description_2';
        expect(product.getProperty('description')).toBe('description_2');
        expect(product.getDescription()).toBe('description_2');
        expect(product.description).toBe('description_2');
    });

    it('check "licensingInfo" property setters/getters', () => {
        product.setProperty('licensingInfo', 'licensingInfo_0');
        expect(product.getProperty('licensingInfo')).toBe('licensingInfo_0');
        expect(product.getLicensingInfo()).toBe('licensingInfo_0');
        expect(product.licensingInfo).toBe('licensingInfo_0');

        product.setLicensingInfo('licensingInfo_1');
        expect(product.getProperty('licensingInfo')).toBe('licensingInfo_1');
        expect(product.getLicensingInfo()).toBe('licensingInfo_1');
        expect(product.licensingInfo).toBe('licensingInfo_1');

        product.licensingInfo = 'licensingInfo_2';
        expect(product.getProperty('licensingInfo')).toBe('licensingInfo_2');
        expect(product.getLicensingInfo()).toBe('licensingInfo_2');
        expect(product.licensingInfo).toBe('licensingInfo_2');
    });

    it('check "licenseeAutoCreate" property setters/getters', () => {
        product.setProperty('licenseeAutoCreate', true);
        expect(product.getProperty('licenseeAutoCreate')).toBe(true);
        expect(product.getLicenseeAutoCreate()).toBe(true);
        expect(product.licenseeAutoCreate).toBe(true);

        product.setLicenseeAutoCreate(false);
        expect(product.getProperty('licenseeAutoCreate')).toBe(false);
        expect(product.getLicenseeAutoCreate()).toBe(false);
        expect(product.licenseeAutoCreate).toBe(false);

        product.licenseeAutoCreate = true;
        expect(product.getProperty('licenseeAutoCreate')).toBe(true);
        expect(product.getLicenseeAutoCreate()).toBe(true);
        expect(product.licenseeAutoCreate).toBe(true);
    });

    it('check "licenseeSecretMode" property setters/getters', () => {
        product.setProperty('licenseeSecretMode', Constants.Product.LicenseeSecretMode.DISABLED);
        expect(product.getProperty('licenseeSecretMode')).toBe(Constants.Product.LicenseeSecretMode.DISABLED);
        expect(product.getLicenseeSecretMode()).toBe(Constants.Product.LicenseeSecretMode.DISABLED);
        expect(product.licenseeSecretMode).toBe(Constants.Product.LicenseeSecretMode.DISABLED);

        product.setLicenseeSecretMode(Constants.Product.LicenseeSecretMode.PREDEFINED);
        expect(product.getProperty('licenseeSecretMode')).toBe(Constants.Product.LicenseeSecretMode.PREDEFINED);
        expect(product.getLicenseeSecretMode()).toBe(Constants.Product.LicenseeSecretMode.PREDEFINED);
        expect(product.licenseeSecretMode).toBe(Constants.Product.LicenseeSecretMode.PREDEFINED);

        product.licenseeSecretMode = Constants.Product.LicenseeSecretMode.CLIENT;
        expect(product.getProperty('licenseeSecretMode')).toBe(Constants.Product.LicenseeSecretMode.CLIENT);
        expect(product.getLicenseeSecretMode()).toBe(Constants.Product.LicenseeSecretMode.CLIENT);
        expect(product.licenseeSecretMode).toBe(Constants.Product.LicenseeSecretMode.CLIENT);
    });

    it('check "inUse" property setters/getters', () => {
        product.setProperty('inUse', true);
        expect(product.getProperty('inUse')).toBe(true);
        expect(product.getInUse()).toBe(true);
        expect(product.inUse).toBe(true);
    });

    it('check "custom-property" property setters/getters', () => {
        product.setProperty('custom_property', 'my_custom_property_0');
        expect(product.getProperty('custom_property')).toBe('my_custom_property_0');
        expect(product.custom_property).toBe('my_custom_property_0');

        product.custom_property = 'my_custom_property_1';
        expect(product.getProperty('custom_property')).toBe('my_custom_property_1');
        expect(product.custom_property).toBe('my_custom_property_1');
    });

    it('check "addDiscount" , "getProductDiscounts", "setProductDiscounts" methods', () => {
        product.addDiscount(new ProductDiscount().setTotalPrice(10).setCurrency('EUR').setAmountFix(8));
        product.addDiscount(new ProductDiscount().setTotalPrice(20).setCurrency('EUR').setAmountPercent(50));
        product.addDiscount(new ProductDiscount().setTotalPrice(30).setCurrency('EUR').setAmountFix(25));
        product.addDiscount(new ProductDiscount().setTotalPrice(40).setCurrency('EUR').setAmountPercent(34));
        product.addDiscount(new ProductDiscount().setTotalPrice(50).setCurrency('EUR').setAmountFix(15));
        expect(product.getProductDiscounts().length).toBe(5);

        product.setProductDiscounts([
            new ProductDiscount().setTotalPrice(10).setCurrency('EUR').setAmountFix(8),
            new ProductDiscount().setTotalPrice(20).setCurrency('EUR').setAmountPercent(50),
            new ProductDiscount().setTotalPrice(30).setCurrency('EUR').setAmountFix(25),
        ]);

        expect(product.getProductDiscounts().length).toBe(3);

        product.setProductDiscounts(new ProductDiscount().setTotalPrice(10).setCurrency('EUR').setAmountFix(8));
        expect(product.getProductDiscounts().length).toBe(1);

        product.setProductDiscounts(null);
        expect(product.getProductDiscounts().length).toBe(0);
    });

    it('check cast an properties to a native js type', () => {
        product.setProperty('number', 1);
        expect(product.getProperty('number')).toBe('1');
        product.setProperty('number', true);
        expect(product.getProperty('number')).toBe('true');

        product.setProperty('active', 1);
        expect(product.getProperty('active')).toBe(true);
        product.setProperty('active', 0);
        expect(product.getProperty('active')).toBe(false);
        product.setProperty('active', '');
        expect(product.getProperty('active')).toBe(false);
        product.setProperty('active', '123');
        expect(product.getProperty('active')).toBe(true);
        product.setProperty('active', null);
        expect(product.getProperty('active')).toBe(false);

        product.setProperty('name', 1);
        expect(product.getProperty('name')).toBe('1');
        product.setProperty('name', true);
        expect(product.getProperty('name')).toBe('true');

        product.setProperty('version', 1);
        expect(product.getProperty('version')).toBe('1');

        product.setProperty('description', 1);
        expect(product.getProperty('description')).toBe('1');
        product.setProperty('description', true);
        expect(product.getProperty('description')).toBe('true');

        product.setProperty('licensingInfo', 1);
        expect(product.getProperty('licensingInfo')).toBe('1');
        product.setProperty('licensingInfo', true);
        expect(product.getProperty('licensingInfo')).toBe('true');

        product.setProperty('licenseeAutoCreate', 1);
        expect(product.getProperty('licenseeAutoCreate')).toBe(true);
        product.setProperty('licenseeAutoCreate', 0);
        expect(product.getProperty('licenseeAutoCreate')).toBe(false);
        product.setProperty('licenseeAutoCreate', '');
        expect(product.getProperty('licenseeAutoCreate')).toBe(false);
        product.setProperty('licenseeAutoCreate', '123');
        expect(product.getProperty('licenseeAutoCreate')).toBe(true);
        product.setProperty('licenseeAutoCreate', null);
        expect(product.getProperty('licenseeAutoCreate')).toBe(false);
    });

    it('check "removeProperty" method', () => {
        product.setProperty('number', 'number');
        product.removeProperty('number');

        expect(product.getProperty('number')).toBe(undefined);
        expect(product.number).toBe(undefined);
        expect(product.getNumber()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        product.setProperty('number', 'number');
        product.removeDefine('number');

        expect(product.number).toBe(undefined);
        expect(product.getProperty('number')).toBe('number');
        expect(product.getNumber()).toBe('number');

        product.number = 'number_1';

        expect(product.number).toBe('number_1');
        expect(product.getProperty('number')).toBe('number');
        expect(product.getNumber()).toBe('number');
    });
});
