import { describe, it, expect } from 'vitest';

// converters
import itemToBundle from '@/converters/itemToBundle';

// entities
import Bundle from '@/entities/Bundle';

// types
import { Item } from '@/types/api/response';
import { BundleProps } from '@/types/entities/Bundle';

describe('itemToBundle converter', () => {
  it('should correctly convert item to Bundle', () => {
    const item: Item = {
      property: [
        { value: 'B1', name: 'number' },
        { value: 'true', name: 'active' },
        { value: 'Sample name', name: 'name' },
        { value: '2.99', name: 'price' },
        { value: 'USD', name: 'currency' },
        { value: 'LT1,LT2,LT4', name: 'licenseTemplateNumbers' },
        { value: 'X', name: 'customProperty' },
      ],
      list: [],
      type: 'Bundle',
    };

    const result = itemToBundle(item);

    const expected: BundleProps<{ customProperty: string }> = {
      number: 'B1',
      active: true,
      name: 'Sample name',
      price: 2.99,
      currency: 'USD',
      licenseTemplateNumbers: ['LT1', 'LT2', 'LT4'],
      customProperty: 'X',
    };

    expect(result).toBeInstanceOf(Bundle);
    expect(result).toStrictEqual(expected);
  });
});
