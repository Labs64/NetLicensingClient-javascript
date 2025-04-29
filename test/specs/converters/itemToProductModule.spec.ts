import { describe, it, expect } from 'vitest';

// converters
import itemToProductModule from '@/converters/itemToProductModule';

// entities
import ProductModule from '@/entities/ProductModule';

// types
import { Item } from '@/types/api/response';
import { ProductModuleProps } from '@/types/entities/ProductModule';

describe('itemToProductModule converter', () => {
  it('should correctly convert item to ProductModule', () => {
    const item: Item = {
      property: [
        { name: 'number', value: 'PM1' },
        { name: 'active', value: 'true' },
        { name: 'name', value: 'Sample name' },
        { name: 'licensingModel', value: 'Subscription' },
        { name: 'maxCheckoutValidity', value: '3' },
        { name: 'yellowThreshold', value: '6' },
        { name: 'redThreshold', value: '10' },
        { name: 'productNumber', value: 'P1' },
        { name: 'customProperty', value: 'X' },
        { name: 'inUse', value: 'true' },
      ],
      list: [],
      type: 'ProductModule',
    };

    const result = itemToProductModule(item);

    const expected: ProductModuleProps<{ customProperty: string }> = {
      number: 'PM1',
      active: true,
      name: 'Sample name',
      licensingModel: 'Subscription',
      maxCheckoutValidity: 3,
      yellowThreshold: 6,
      redThreshold: 10,
      productNumber: 'P1',
      customProperty: 'X',
      inUse: true,
    };

    expect(result).toBeInstanceOf(ProductModule);
    expect(result).toStrictEqual(expected);
  });
});
