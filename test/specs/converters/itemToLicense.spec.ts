import { describe, it, expect } from 'vitest';

// converters
import itemToLicense from '@/converters/itemToLicense';

// entities
import License from '@/entities/License';

// types
import { Item } from '@/types/api/response';
import { LicenseProps } from '@/types/entities/License';

describe('itemToLicense converter', () => {
  it('should correctly convert item to License', () => {
    const item: Item = {
      property: [
        { value: 'L1', name: 'number' },
        { value: 'true', name: 'active' },
        { value: 'Sample name', name: 'name' },
        { value: '3.99', name: 'price' },
        { value: 'EUR', name: 'currency' },
        { value: 'false', name: 'hidden' },
        { value: 'LE1', name: 'licenseeNumber' },
        { value: 'LT1', name: 'licenseTemplateNumber' },
        { value: '10', name: 'timeVolume' },
        { value: 'DAY', name: 'timeVolumePeriod' },
        { value: '2024-01-03T12:00:00.000Z', name: 'startDate' },
        { value: 'PF1', name: 'parentfeature' },
        { value: 'X', name: 'customProperty' },
        { value: 'true', name: 'inUse' },
      ],
      list: [],
      type: 'License',
    };

    const result = itemToLicense(item);

    const expected: LicenseProps<{ customProperty: string }> = {
      number: 'L1',
      active: true,
      name: 'Sample name',
      price: 3.99,
      currency: 'EUR',
      hidden: false,
      licenseeNumber: 'LE1',
      licenseTemplateNumber: 'LT1',
      timeVolume: 10,
      timeVolumePeriod: 'DAY',
      parentfeature: 'PF1',
      customProperty: 'X',
      inUse: true,
    };

    expect(result).toBeInstanceOf(License);
    expect(result).toMatchObject(expected);
    expect((result.startDate as Date).toISOString()).toBe('2024-01-03T12:00:00.000Z');
  });
});
