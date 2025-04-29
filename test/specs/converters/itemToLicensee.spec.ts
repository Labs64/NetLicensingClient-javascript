import { describe, it, expect } from 'vitest';

// converters
import itemToLicensee from '@/converters/itemToLicensee';

// entities
import Licensee from '@/entities/Licensee';

// types
import { Item } from '@/types/api/response';
import { LicenseeProps } from '@/types/entities/Licensee';

describe('itemToLicensee converter', () => {
  it('should correctly convert item to Licensee', () => {
    const item: Item = {
      property: [
        { name: 'number', value: 'L1' },
        { name: 'active', value: 'true' },
        { name: 'name', value: 'Sample name' },
        { name: 'markedForTransfer', value: 'false' },
        { name: 'productNumber', value: 'P1' },
        { name: 'customProperty', value: 'X' },
        { name: 'inUse', value: 'true' },
      ],
      list: [],
      type: 'Licensee',
    };

    const result = itemToLicensee(item);

    const expected: LicenseeProps<{ customProperty: string }> = {
      number: 'L1',
      active: true,
      name: 'Sample name',
      markedForTransfer: false,
      productNumber: 'P1',
      customProperty: 'X',
      inUse: true,
    };

    expect(result).toBeInstanceOf(Licensee);
    expect(result).toStrictEqual(expected);
  });
});
