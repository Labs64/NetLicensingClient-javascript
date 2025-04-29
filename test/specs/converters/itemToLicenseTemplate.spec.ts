import { describe, it, expect } from 'vitest';

// converters
import itemToLicenseTemplate from '@/converters/itemToLicenseTemplate';

// entities
import LicenseTemplate from '@/entities/LicenseTemplate';

// types
import { Item } from '@/types/api/response';
import { LicenseTemplateProps } from '@/types/entities/LicenseTemplate';

describe('itemToLicenseTemplate converter', () => {
  it('should correctly convert item to LicenseTemplate', () => {
    const item: Item = {
      property: [
        { name: 'number', value: 'L1' },
        { name: 'active', value: 'true' },
        { name: 'name', value: 'Sample name' },
        { name: 'licenseType', value: 'QUANTITY' },
        { name: 'price', value: '2.99' },
        { name: 'currency', value: 'EUR' },
        { name: 'automatic', value: 'true' },
        { name: 'hidden', value: 'true' },
        { name: 'hideLicenses', value: 'false' },
        { name: 'gracePeriod', value: 'false' },
        { name: 'timeVolume', value: '12' },
        { name: 'timeVolumePeriod', value: 'MONTH' },
        { name: 'maxSessions', value: '3' },
        { name: 'quantity', value: '10' },
        { name: 'productModuleNumber', value: 'PM1' },
        { name: 'customProperty', value: 'X' },
        { name: 'inUse', value: 'false' },
      ],
      list: [],
      type: 'LicenseTemplate',
    };

    const result = itemToLicenseTemplate(item);

    const expected: LicenseTemplateProps<{ customProperty: string }> = {
      number: 'L1',
      active: true,
      name: 'Sample name',
      licenseType: 'QUANTITY',
      price: 2.99,
      currency: 'EUR',
      automatic: true,
      hidden: true,
      hideLicenses: false,
      gracePeriod: false,
      timeVolume: 12,
      timeVolumePeriod: 'MONTH',
      maxSessions: 3,
      quantity: 10,
      productModuleNumber: 'PM1',
      customProperty: 'X',
      inUse: false,
    };

    expect(result).toBeInstanceOf(LicenseTemplate);
    expect(result).toStrictEqual(expected);
  });
});
