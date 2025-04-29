import { describe, it, expect } from 'vitest';
// constants
import TimeVolumePeriod from '@/constants/TimeVolumePeriod';

// entities
import License from '@/entities/License';

// test utils
import { LicenseProps } from '@/types/entities/License';
import expectEntity from '@test-utils/expectEntity';
import expectEntityProp from '@test-utils/expectEntityProp';

describe('License Entity', () => {
  it('should create a License with default properties', () => {
    const license = License();

    expectEntity(license, {
      active: undefined,
      number: undefined,
      name: undefined,
      price: undefined,
      currency: undefined,
      hidden: undefined,
      licenseeNumber: undefined,
      licenseTemplateNumber: undefined,
      timeVolume: undefined,
      timeVolumePeriod: undefined,
      startDate: undefined,
      inUse: undefined,
    });
  });

  it('should create a License with provided properties', () => {
    const props: LicenseProps = {
      number: '12345',
      name: 'Sample License',
      price: 100,
      currency: 'USD',
      active: true,
      hidden: false,
      licenseeNumber: 'ABC123',
      licenseTemplateNumber: 'TPL001',
      timeVolume: 50,
      timeVolumePeriod: TimeVolumePeriod.DAY,
      startDate: 'now',
      parentfeature: 'PARENT123',
      inUse: true,
    };

    const license = License(props);

    expectEntity(license, props);
    expect(license).toStrictEqual(props);
  });

  it('should set and get active status correctly', () => {
    const license = License();

    license.setActive(true);
    expectEntityProp(license, 'active', true);

    license.active = false;
    expectEntityProp(license, 'active', false);

    license.set('active', true);
    expectEntityProp(license, 'active', true);

    license.setProperty('active', false);
    expectEntityProp(license, 'active', false);
  });

  it('should set and get number correctly', () => {
    const license = License();

    license.setNumber('L1');
    expectEntityProp(license, 'number', 'L1');

    license.number = 'L2';
    expectEntityProp(license, 'number', 'L2');

    license.set('number', 'L3');
    expectEntityProp(license, 'number', 'L3');

    license.setProperty('number', 'L4');
    expectEntityProp(license, 'number', 'L4');
  });

  it('should set and get name correctly', () => {
    const license = License();

    license.setName('Name 1');
    expectEntityProp(license, 'name', 'Name 1');

    license.name = 'Name 2';
    expectEntityProp(license, 'name', 'Name 2');

    license.set('name', 'Name 3');
    expectEntityProp(license, 'name', 'Name 3');

    license.setProperty('name', 'Name 4');
    expectEntityProp(license, 'name', 'Name 4');
  });

  it('should set and get price correctly', () => {
    const license = License();

    license.setPrice(99.66);
    expectEntityProp(license, 'price', 99.66);

    license.price = 66.99;
    expectEntityProp(license, 'price', 66.99);

    license.set('price', 69.69);
    expectEntityProp(license, 'price', 69.69);

    license.setProperty('price', 23.69);
    expectEntityProp(license, 'price', 23.69);
  });

  it('should set and get currency correctly', () => {
    const license = License();

    license.setCurrency('EUR');
    expectEntityProp(license, 'currency', 'EUR');

    license.currency = 'USD';
    expectEntityProp(license, 'currency', 'USD');

    license.set('currency', 'UAH');
    expectEntityProp(license, 'currency', 'UAH');

    license.setProperty('currency', 'GEL');
    expectEntityProp(license, 'currency', 'GEL');
  });

  it('should set and get hidden status correctly', () => {
    const license = License();

    license.setHidden(true);
    expectEntityProp(license, 'hidden', true);

    license.hidden = false;
    expectEntityProp(license, 'hidden', false);

    license.set('hidden', true);
    expectEntityProp(license, 'hidden', true);

    license.setProperty('hidden', false);
    expectEntityProp(license, 'hidden', false);
  });

  it('should set and get licensee number correctly', () => {
    const license = License();

    license.setLicenseeNumber('L1');
    expectEntityProp(license, 'licenseeNumber', 'L1');

    license.licenseeNumber = 'L2';
    expectEntityProp(license, 'licenseeNumber', 'L2');

    license.set('licenseeNumber', 'L3');
    expectEntityProp(license, 'licenseeNumber', 'L3');

    license.setProperty('licenseeNumber', 'L4');
    expectEntityProp(license, 'licenseeNumber', 'L4');
  });

  it('should set and get license template number correctly', () => {
    const license = License();

    license.setLicenseTemplateNumber('LT1');
    expectEntityProp(license, 'licenseTemplateNumber', 'LT1');

    license.licenseTemplateNumber = 'LT2';
    expectEntityProp(license, 'licenseTemplateNumber', 'LT2');

    license.set('licenseTemplateNumber', 'LT3');
    expectEntityProp(license, 'licenseTemplateNumber', 'LT3');

    license.setProperty('licenseTemplateNumber', 'LT4');
    expectEntityProp(license, 'licenseTemplateNumber', 'LT4');
  });

  it('should return correct inUse status', () => {
    const license = License({ inUse: true });
    expectEntityProp(license, 'inUse', true);
  });

  it('should set and get time volume correctly', () => {
    const license = License();
    license.setTimeVolume(1);
    expectEntityProp(license, 'timeVolume', 1);

    license.timeVolume = 2;
    expectEntityProp(license, 'timeVolume', 2);

    license.set('timeVolume', 3);
    expectEntityProp(license, 'timeVolume', 3);

    license.setProperty('timeVolume', 4);
    expectEntityProp(license, 'timeVolume', 4);
  });

  it('should set and get time volume period correctly', () => {
    const license = License();

    license.setTimeVolumePeriod(TimeVolumePeriod.MONTH);
    expectEntityProp(license, 'timeVolumePeriod', TimeVolumePeriod.MONTH);

    license.timeVolumePeriod = TimeVolumePeriod.DAY;
    expectEntityProp(license, 'timeVolumePeriod', TimeVolumePeriod.DAY);

    license.set('timeVolumePeriod', TimeVolumePeriod.WEEK);
    expectEntityProp(license, 'timeVolumePeriod', TimeVolumePeriod.WEEK);

    license.setProperty('timeVolumePeriod', TimeVolumePeriod.YEAR);
    expectEntityProp(license, 'timeVolumePeriod', TimeVolumePeriod.YEAR);
  });

  it('should set and get start date correctly', () => {
    const license = License();

    const date1 = new Date();

    license.setStartDate(date1);
    expectEntityProp(license, 'startDate', date1);

    const date2 = new Date();

    license.startDate = date2;
    expectEntityProp(license, 'startDate', date2);

    license.set('startDate', 'now');
    expectEntityProp(license, 'startDate', 'now');

    const date3 = new Date();

    license.setProperty('startDate', date3);
    expectEntityProp(license, 'startDate', date3);
  });

  it('should set and get parent feature correctly', () => {
    const license = License();

    license.setParentfeature('PF1');
    expectEntityProp(license, 'parentfeature', 'PF1');

    license.parentfeature = 'PF2';
    expectEntityProp(license, 'parentfeature', 'PF2');

    license.set('parentfeature', 'PF3');
    expectEntityProp(license, 'parentfeature', 'PF3');

    license.setProperty('parentfeature', 'PF4');
    expectEntityProp(license, 'parentfeature', 'PF4');
  });

  it('should allow custom properties', () => {
    const customLicense = License({ number: 'L999', foo: 'bar', isFooBar: true });
    expect(customLicense.foo).toBe('bar');
    expect(customLicense.isFooBar).toBe(true);
  });

  it('should create an instance of License', () => {
    const license = License();
    expect(license instanceof License).toBe(true);
  });

  it('should be correct map', () => {
    const license = License({
      number: '12345',
      name: 'Sample License',
      price: 100,
      currency: 'USD',
      active: true,
      hidden: false,
      licenseeNumber: 'ABC123',
      licenseTemplateNumber: 'TPL001',
      timeVolume: 50,
      timeVolumePeriod: TimeVolumePeriod.DAY,
      startDate: 'now',
      parentfeature: 'PARENT123',
      inUse: true,
    });

    expect(license.serialize()).toStrictEqual({
      number: '12345',
      name: 'Sample License',
      price: '100',
      currency: 'USD',
      active: 'true',
      hidden: 'false',
      licenseeNumber: 'ABC123',
      licenseTemplateNumber: 'TPL001',
      timeVolume: '50',
      timeVolumePeriod: TimeVolumePeriod.DAY,
      startDate: 'now',
      parentfeature: 'PARENT123',
    });
  });
});
