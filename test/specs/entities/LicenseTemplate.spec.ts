import { describe, it, expect } from 'vitest';
// constants
import LicenseType from '@/constants/LicenseType';
import TimeVolumePeriod from '@/constants/TimeVolumePeriod';

// entities
import LicenseTemplate from '@/entities/LicenseTemplate';

// test utils
import expectEntity from '@test-utils/expectEntity';
import expectEntityProp from '@test-utils/expectEntityProp';

describe('LicenseTemplate Entity', () => {
  it('should create a LicenseTemplate with default properties', () => {
    const licenseTemplate = LicenseTemplate();

    expectEntity(licenseTemplate, {
      active: undefined,
      number: undefined,
      name: undefined,
      licenseType: undefined,
      price: undefined,
      currency: undefined,
      automatic: undefined,
      hidden: undefined,
      hideLicenses: undefined,
      gracePeriod: undefined,
      timeVolume: undefined,
      timeVolumePeriod: undefined,
      maxSessions: undefined,
      quantity: undefined,
      productModuleNumber: undefined,
      inUse: undefined,
    });
  });

  it('should create a LicenseTemplate with provided properties', () => {
    const props = {
      number: 'LT123',
      name: 'Sample License Template',
      active: true,
      licenseType: LicenseType.TIMEVOLUME,
      price: 100,
      currency: 'USD',
      automatic: true,
      hidden: false,
      hideLicenses: true,
      gracePeriod: true,
      timeVolume: 12,
      timeVolumePeriod: TimeVolumePeriod.MONTH,
      maxSessions: 10,
      quantity: 1000,
      productModuleNumber: 'PM1',
      inUse: true,
    };

    const licenseTemplate = LicenseTemplate(props);

    expectEntity(licenseTemplate, props);
    expect(licenseTemplate).toStrictEqual(props);
  });

  it('should set and get active status correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setActive(true);
    expectEntityProp(licenseTemplate, 'active', true);

    licenseTemplate.active = false;
    expectEntityProp(licenseTemplate, 'active', false);

    licenseTemplate.set('active', true);
    expectEntityProp(licenseTemplate, 'active', true);

    licenseTemplate.setProperty('active', false);
    expectEntityProp(licenseTemplate, 'active', false);
  });

  it('should set and get number correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setNumber('LT1');
    expectEntityProp(licenseTemplate, 'number', 'LT1');

    licenseTemplate.number = 'LT2';
    expectEntityProp(licenseTemplate, 'number', 'LT2');

    licenseTemplate.set('number', 'LT3');
    expectEntityProp(licenseTemplate, 'number', 'LT3');

    licenseTemplate.setProperty('number', 'LT4');
    expectEntityProp(licenseTemplate, 'number', 'LT4');
  });

  it('should set and get name correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setName('LT1');
    expectEntityProp(licenseTemplate, 'name', 'LT1');

    licenseTemplate.name = 'LT2';
    expectEntityProp(licenseTemplate, 'name', 'LT2');

    licenseTemplate.set('name', 'LT3');
    expectEntityProp(licenseTemplate, 'name', 'LT3');

    licenseTemplate.setProperty('name', 'LT4');
    expectEntityProp(licenseTemplate, 'name', 'LT4');
  });

  it('should set and get license type correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setLicenseType(LicenseType.QUANTITY);
    expectEntityProp(licenseTemplate, 'licenseType', LicenseType.QUANTITY);

    licenseTemplate.licenseType = LicenseType.FEATURE;
    expectEntityProp(licenseTemplate, 'licenseType', LicenseType.FEATURE);

    licenseTemplate.set('licenseType', LicenseType.TIMEVOLUME);
    expectEntityProp(licenseTemplate, 'licenseType', LicenseType.TIMEVOLUME);

    licenseTemplate.setProperty('licenseType', LicenseType.FLOATING);
    expectEntityProp(licenseTemplate, 'licenseType', LicenseType.FLOATING);
  });

  it('should set and get price correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setPrice(200);
    expectEntityProp(licenseTemplate, 'price', 200);

    licenseTemplate.price = 50;
    expectEntityProp(licenseTemplate, 'price', 50);

    licenseTemplate.set('price', 500);
    expectEntityProp(licenseTemplate, 'price', 500);

    licenseTemplate.setProperty('price', 66);
    expectEntityProp(licenseTemplate, 'price', 66);
  });

  it('should set and get price and currency correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setCurrency('EUR');
    expectEntityProp(licenseTemplate, 'currency', 'EUR');

    licenseTemplate.currency = 'USD';
    expectEntityProp(licenseTemplate, 'currency', 'USD');

    licenseTemplate.set('currency', 'UAH');
    expectEntityProp(licenseTemplate, 'currency', 'UAH');

    licenseTemplate.setProperty('currency', 'GEL');
    expectEntityProp(licenseTemplate, 'currency', 'GEL');
  });

  it('should set and get automatic status correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setAutomatic(true);
    expectEntityProp(licenseTemplate, 'automatic', true);

    licenseTemplate.automatic = false;
    expectEntityProp(licenseTemplate, 'automatic', false);

    licenseTemplate.set('automatic', true);
    expectEntityProp(licenseTemplate, 'automatic', true);

    licenseTemplate.setProperty('automatic', false);
    expectEntityProp(licenseTemplate, 'automatic', false);
  });

  it('should set and get hidden status correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setHidden(true);
    expectEntityProp(licenseTemplate, 'hidden', true);

    licenseTemplate.hidden = false;
    expectEntityProp(licenseTemplate, 'hidden', false);

    licenseTemplate.set('hidden', true);
    expectEntityProp(licenseTemplate, 'hidden', true);

    licenseTemplate.setProperty('hidden', false);
    expectEntityProp(licenseTemplate, 'hidden', false);
  });

  it('should set and get hide licenses status correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setHideLicenses(true);
    expectEntityProp(licenseTemplate, 'hideLicenses', true);

    licenseTemplate.hideLicenses = false;
    expectEntityProp(licenseTemplate, 'hideLicenses', false);

    licenseTemplate.set('hideLicenses', true);
    expectEntityProp(licenseTemplate, 'hideLicenses', true);

    licenseTemplate.setProperty('hideLicenses', false);
    expectEntityProp(licenseTemplate, 'hideLicenses', false);
  });

  it('should set and get grace period status correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setGracePeriod(true);
    expectEntityProp(licenseTemplate, 'gracePeriod', true);

    licenseTemplate.gracePeriod = false;
    expectEntityProp(licenseTemplate, 'gracePeriod', false);

    licenseTemplate.set('gracePeriod', true);
    expectEntityProp(licenseTemplate, 'gracePeriod', true);

    licenseTemplate.setProperty('gracePeriod', false);
    expectEntityProp(licenseTemplate, 'gracePeriod', false);
  });

  it('should set and get time volume correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setTimeVolume(10);
    expectEntityProp(licenseTemplate, 'timeVolume', 10);

    licenseTemplate.timeVolume = 20;
    expectEntityProp(licenseTemplate, 'timeVolume', 20);

    licenseTemplate.set('timeVolume', 30);
    expectEntityProp(licenseTemplate, 'timeVolume', 30);

    licenseTemplate.setProperty('timeVolume', 40);
    expectEntityProp(licenseTemplate, 'timeVolume', 40);
  });

  it('should set and get time volume period correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setTimeVolumePeriod(TimeVolumePeriod.DAY);
    expectEntityProp(licenseTemplate, 'timeVolumePeriod', TimeVolumePeriod.DAY);

    licenseTemplate.timeVolumePeriod = TimeVolumePeriod.MONTH;
    expectEntityProp(licenseTemplate, 'timeVolumePeriod', TimeVolumePeriod.MONTH);

    licenseTemplate.set('timeVolumePeriod', TimeVolumePeriod.WEEK);
    expectEntityProp(licenseTemplate, 'timeVolumePeriod', TimeVolumePeriod.WEEK);

    licenseTemplate.setProperty('timeVolumePeriod', TimeVolumePeriod.YEAR);
    expectEntityProp(licenseTemplate, 'timeVolumePeriod', TimeVolumePeriod.YEAR);
  });

  it('should set and get max sessions correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setMaxSessions(5);
    expectEntityProp(licenseTemplate, 'maxSessions', 5);

    licenseTemplate.maxSessions = 10;
    expectEntityProp(licenseTemplate, 'maxSessions', 10);

    licenseTemplate.set('maxSessions', 7);
    expectEntityProp(licenseTemplate, 'maxSessions', 7);

    licenseTemplate.setProperty('maxSessions', 9);
    expectEntityProp(licenseTemplate, 'maxSessions', 9);
  });

  it('should set and get quantity correctly for QUANTITY license type', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setQuantity(100);
    expectEntityProp(licenseTemplate, 'quantity', 100);

    licenseTemplate.quantity = 200;
    expectEntityProp(licenseTemplate, 'quantity', 200);

    licenseTemplate.set('quantity', 150);
    expectEntityProp(licenseTemplate, 'quantity', 150);

    licenseTemplate.setProperty('quantity', 350);
    expectEntityProp(licenseTemplate, 'quantity', 350);
  });

  it('should set and get productModuleNumber correctly', () => {
    const licenseTemplate = LicenseTemplate();

    licenseTemplate.setProductModuleNumber('PM1');
    expectEntityProp(licenseTemplate, 'productModuleNumber', 'PM1');

    licenseTemplate.productModuleNumber = 'PM2';
    expectEntityProp(licenseTemplate, 'productModuleNumber', 'PM2');

    licenseTemplate.set('productModuleNumber', 'PM3');
    expectEntityProp(licenseTemplate, 'productModuleNumber', 'PM3');

    licenseTemplate.setProperty('productModuleNumber', 'PM4');
    expectEntityProp(licenseTemplate, 'productModuleNumber', 'PM4');
  });

  it('should allow custom properties', () => {
    const licenseTemplate = LicenseTemplate({ number: 'L999', foo: 'bar', isFooBar: true });
    expect(licenseTemplate.foo).toBe('bar');
    expect(licenseTemplate.isFooBar).toBe(true);
  });

  it('should create an instance of LicenseTemplate', () => {
    const licenseTemplate = LicenseTemplate();
    expect(licenseTemplate instanceof LicenseTemplate).toBe(true);
  });

  it('should be correct map', () => {
    const licenseTemplate = LicenseTemplate({
      number: 'LT123',
      name: 'Sample License Template',
      active: true,
      licenseType: LicenseType.TIMEVOLUME,
      price: 100,
      currency: 'USD',
      automatic: true,
      hidden: false,
      hideLicenses: true,
      gracePeriod: true,
      timeVolume: 12,
      timeVolumePeriod: TimeVolumePeriod.MONTH,
      maxSessions: 10,
      quantity: 1000,
      productModuleNumber: 'PM1',
      inUse: true,
    });

    expect(licenseTemplate.serialize()).toStrictEqual({
      number: 'LT123',
      name: 'Sample License Template',
      active: 'true',
      licenseType: LicenseType.TIMEVOLUME,
      price: '100',
      currency: 'USD',
      automatic: 'true',
      hidden: 'false',
      hideLicenses: 'true',
      gracePeriod: 'true',
      timeVolume: '12',
      timeVolumePeriod: TimeVolumePeriod.MONTH,
      maxSessions: '10',
      quantity: '1000',
      productModuleNumber: 'PM1',
    });
  });
});
