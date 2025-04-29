import { describe, it, expect } from 'vitest';

// entities
import Bundle from '@/entities/Bundle';

// test utils
import expectEntity from '@test-utils/expectEntity';
import expectEntityProp from '@test-utils/expectEntityProp';

describe('Bundle', () => {
  it('should create a Bundle with default properties', () => {
    const bundle = Bundle();

    expectEntity(bundle, {
      active: undefined,
      number: undefined,
      name: undefined,
      price: undefined,
      currency: undefined,
      licenseTemplateNumbers: undefined,
    });
  });

  it('should create a Bundle with provided properties', () => {
    const props = {
      active: true,
      number: 'B123',
      name: 'Sample Name',
      price: 66.99,
      currency: 'EUR',
      licenseTemplateNumbers: ['LT1', 'LT2'],
    };

    const bundle = Bundle(props);

    expectEntity(bundle, props);
    expect(bundle).toStrictEqual(props);
  });

  it('should set and get active status correctly', () => {
    const bundle = Bundle();

    bundle.setActive(true);
    expectEntityProp(bundle, 'active', true);

    bundle.active = false;
    expectEntityProp(bundle, 'active', false);

    bundle.set('active', true);
    expectEntityProp(bundle, 'active', true);

    bundle.setProperty('active', true);
    expectEntityProp(bundle, 'active', true);
  });

  it('should set and get number correctly', () => {
    const bundle = Bundle();

    bundle.setNumber('B1');
    expectEntityProp(bundle, 'number', 'B1');

    bundle.number = 'B2';
    expectEntityProp(bundle, 'number', 'B2');

    bundle.set('number', 'B3');
    expectEntityProp(bundle, 'number', 'B3');

    bundle.setProperty('number', 'B4');
    expectEntityProp(bundle, 'number', 'B4');
  });

  it('should set and get name correctly', () => {
    const bundle = Bundle();

    bundle.setName('B1');
    expectEntityProp(bundle, 'name', 'B1');

    bundle.name = 'B2';
    expectEntityProp(bundle, 'name', 'B2');

    bundle.set('name', 'B3');
    expectEntityProp(bundle, 'name', 'B3');

    bundle.setProperty('name', 'B4');
    expectEntityProp(bundle, 'name', 'B4');
  });

  it('should set and get price correctly', () => {
    const bundle = Bundle();

    bundle.setPrice(66.99);
    expectEntityProp(bundle, 'price', 66.99);

    bundle.price = 69.96;
    expectEntityProp(bundle, 'price', 69.96);

    bundle.set('price', 96.69);
    expectEntityProp(bundle, 'price', 96.69);

    bundle.setProperty('price', 99.66);
    expectEntityProp(bundle, 'price', 99.66);
  });

  it('should set and get currency correctly', () => {
    const bundle = Bundle();

    bundle.setCurrency('EUR');
    expectEntityProp(bundle, 'currency', 'EUR');

    bundle.currency = 'USD';
    expectEntityProp(bundle, 'currency', 'USD');

    bundle.set('currency', 'UAH');
    expectEntityProp(bundle, 'currency', 'UAH');

    bundle.setProperty('currency', 'GEL');
    expectEntityProp(bundle, 'currency', 'GEL');
  });

  it('should set and get license template numbers correctly', () => {
    const bundle = Bundle();

    bundle.setLicenseTemplateNumbers(['LT1', 'LT2']);
    expectEntityProp(bundle, 'licenseTemplateNumbers', ['LT1', 'LT2']);

    bundle.licenseTemplateNumbers = ['LT3'];
    expectEntityProp(bundle, 'licenseTemplateNumbers', ['LT3']);

    bundle.set('licenseTemplateNumbers', ['LT4', 'LT5']);
    expectEntityProp(bundle, 'licenseTemplateNumbers', ['LT4', 'LT5']);

    bundle.setProperty('licenseTemplateNumbers', ['LT6']);
    expectEntityProp(bundle, 'licenseTemplateNumbers', ['LT6']);
  });

  it('should allow custom properties', () => {
    const customBundle = Bundle({ number: 'B999', foo: 'bar', isFooBar: true });
    expect(customBundle.foo).toBe('bar');
    expect(customBundle.isFooBar).toBe(true);
  });

  it('should create an instance of Bundle', () => {
    const bundle = Bundle();
    expect(bundle instanceof Bundle).toBe(true);
  });

  it('should be correct map', () => {
    const bundle = Bundle({
      active: true,
      number: 'B123',
      name: 'Sample Name',
      price: 66.99,
      currency: 'EUR',
      licenseTemplateNumbers: ['LT1', 'LT2'],
    });

    expect(bundle.serialize()).toStrictEqual({
      active: 'true',
      number: 'B123',
      name: 'Sample Name',
      price: '66.99',
      currency: 'EUR',
      licenseTemplateNumbers: 'LT1,LT2',
    });
  });
});
