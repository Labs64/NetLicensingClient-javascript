import { describe, it, expect } from 'vitest';

// constants
import LicensingModel from '@/constants/LicensingModel';

// entities
import ProductModule from '@/entities/ProductModule';

// test utils
import expectEntity from '@test-utils/expectEntity';
import expectEntityProp from '@test-utils/expectEntityProp';

describe('ProductModule Entity', () => {
  it('should create a LicenseTemplate with default properties', () => {
    const productModule = ProductModule();

    expectEntity(productModule, {
      active: undefined,
      number: undefined,
      name: undefined,
      licensingModel: undefined,
      maxCheckoutValidity: undefined,
      yellowThreshold: undefined,
      redThreshold: undefined,
      productNumber: undefined,
      inUse: undefined,
    });
  });

  it('should create a LicenseTemplate with provided properties', () => {
    const props = {
      active: true,
      number: 'PM1',
      name: 'Name Sample',
      licensingModel: LicensingModel.FLOATING,
      maxCheckoutValidity: 3,
      yellowThreshold: 5,
      redThreshold: 8,
      productNumber: 'P1',
      inUse: true,
    };

    const productModule = ProductModule(props);

    expectEntity(productModule, props);
    expect(productModule).toStrictEqual(props);
  });

  it('should set and get active status correctly', () => {
    const productModule = ProductModule();

    productModule.setActive(true);
    expectEntityProp(productModule, 'active', true);

    productModule.active = false;
    expectEntityProp(productModule, 'active', false);

    productModule.set('active', true);
    expectEntityProp(productModule, 'active', true);

    productModule.setProperty('active', false);
    expectEntityProp(productModule, 'active', false);
  });

  it('should set and get number correctly', () => {
    const productModule = ProductModule();

    productModule.setNumber('PM1');
    expectEntityProp(productModule, 'number', 'PM1');

    productModule.number = 'PM2';
    expectEntityProp(productModule, 'number', 'PM2');

    productModule.set('number', 'LT3');
    expectEntityProp(productModule, 'number', 'LT3');

    productModule.setProperty('number', 'LT4');
    expectEntityProp(productModule, 'number', 'LT4');
  });

  it('should set and get name correctly', () => {
    const productModule = ProductModule();

    productModule.setName('LT1');
    expectEntityProp(productModule, 'name', 'LT1');

    productModule.name = 'LT2';
    expectEntityProp(productModule, 'name', 'LT2');

    productModule.set('name', 'LT3');
    expectEntityProp(productModule, 'name', 'LT3');

    productModule.setProperty('name', 'LT4');
    expectEntityProp(productModule, 'name', 'LT4');
  });

  it('should set and get licensingModel correctly', () => {
    const productModule = ProductModule();

    productModule.setLicensingModel(LicensingModel.PAY_PER_USE);
    expectEntityProp(productModule, 'licensingModel', LicensingModel.PAY_PER_USE);

    productModule.licensingModel = LicensingModel.QUOTA;
    expectEntityProp(productModule, 'licensingModel', LicensingModel.QUOTA);

    productModule.set('licensingModel', LicensingModel.PRICING_TABLE);
    expectEntityProp(productModule, 'licensingModel', LicensingModel.PRICING_TABLE);

    productModule.setProperty('licensingModel', LicensingModel.FLOATING);
    expectEntityProp(productModule, 'licensingModel', LicensingModel.FLOATING);
  });

  it('should set and get maxCheckoutValidity correctly', () => {
    const productModule = ProductModule();

    productModule.setMaxCheckoutValidity(200);
    expectEntityProp(productModule, 'maxCheckoutValidity', 200);

    productModule.maxCheckoutValidity = 50;
    expectEntityProp(productModule, 'maxCheckoutValidity', 50);

    productModule.set('maxCheckoutValidity', 500);
    expectEntityProp(productModule, 'maxCheckoutValidity', 500);

    productModule.setProperty('maxCheckoutValidity', 66);
    expectEntityProp(productModule, 'maxCheckoutValidity', 66);
  });

  it('should set and get yellowThreshold correctly', () => {
    const productModule = ProductModule();

    productModule.setYellowThreshold(200);
    expectEntityProp(productModule, 'yellowThreshold', 200);

    productModule.yellowThreshold = 50;
    expectEntityProp(productModule, 'yellowThreshold', 50);

    productModule.set('yellowThreshold', 500);
    expectEntityProp(productModule, 'yellowThreshold', 500);

    productModule.setProperty('yellowThreshold', 66);
    expectEntityProp(productModule, 'yellowThreshold', 66);
  });

  it('should set and get redThreshold correctly', () => {
    const productModule = ProductModule();

    productModule.setRedThreshold(200);
    expectEntityProp(productModule, 'redThreshold', 200);

    productModule.redThreshold = 50;
    expectEntityProp(productModule, 'redThreshold', 50);

    productModule.set('redThreshold', 500);
    expectEntityProp(productModule, 'redThreshold', 500);

    productModule.setProperty('redThreshold', 66);
    expectEntityProp(productModule, 'redThreshold', 66);
  });

  it('should set and get productNumber correctly', () => {
    const productModule = ProductModule();

    productModule.setProductNumber('P1');
    expectEntityProp(productModule, 'productNumber', 'P1');

    productModule.productNumber = 'P2';
    expectEntityProp(productModule, 'productNumber', 'P2');

    productModule.set('productNumber', 'P3');
    expectEntityProp(productModule, 'productNumber', 'P3');

    productModule.setProperty('productNumber', 'P4');
    expectEntityProp(productModule, 'productNumber', 'P4');
  });

  it('should allow custom properties', () => {
    const productModule = ProductModule({ number: 'L999', foo: 'bar', isFooBar: true });
    expect(productModule.foo).toBe('bar');
    expect(productModule.isFooBar).toBe(true);
  });

  it('should create an instance of ProductModule', () => {
    const productModule = ProductModule();
    expect(productModule instanceof ProductModule).toBe(true);
  });

  it('should be correct map', () => {
    const productModule = ProductModule({
      active: true,
      number: 'PM1',
      name: 'Name Sample',
      licensingModel: LicensingModel.FLOATING,
      maxCheckoutValidity: 3,
      yellowThreshold: 5,
      redThreshold: 8,
      productNumber: 'P1',
      inUse: true,
    });

    expect(productModule.serialize()).toStrictEqual({
      active: 'true',
      number: 'PM1',
      name: 'Name Sample',
      licensingModel: LicensingModel.FLOATING,
      maxCheckoutValidity: '3',
      yellowThreshold: '5',
      redThreshold: '8',
      productNumber: 'P1',
    });
  });
});
