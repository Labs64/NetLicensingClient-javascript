import { describe, it, expect } from 'vitest';

// converters
import itemToProduct from '@/converters/itemToProduct';

// entities
import Product from '@/entities/Product';
import ProductDiscount from '@/entities/ProductDiscount';

// types
import { Item } from '@/types/api/response';
import { ProductProps } from '@/types/entities/Product';

describe('itemToProduct converter', () => {
  it('should correctly convert item to Product', () => {
    const item: Item = {
      property: [
        { name: 'number', value: 'P1' },
        { name: 'active', value: 'true' },
        { name: 'name', value: 'Sample name' },
        { name: 'version', value: '1.0-Alfa' },
        { name: 'description', value: 'Sample description' },
        { name: 'licensingInfo', value: 'Licensing info' },
        { name: 'licenseeAutoCreate', value: 'false' },
        { name: 'customProperty', value: 'X' },
        { name: 'inUse', value: 'true' },
      ],
      list: [
        {
          property: [
            { value: '3000.00', name: 'totalPrice' },
            { value: 'EUR', name: 'currency' },
            { value: '10', name: 'amountPercent' },
          ],
          list: [],
          name: 'discount',
        },
        {
          property: [
            { value: '100.00', name: 'totalPrice' },
            { value: 'USD', name: 'currency' },
            { value: '3', name: 'amountFix' },
          ],
          list: [],
          name: 'discount',
        },
      ],
      type: 'Product',
    };

    const result = itemToProduct(item);

    const expected: ProductProps<{ customProperty: string }> = {
      number: 'P1',
      active: true,
      name: 'Sample name',
      version: '1.0-Alfa',
      description: 'Sample description',
      licensingInfo: 'Licensing info',
      licenseeAutoCreate: false,
      discounts: [
        ProductDiscount({ totalPrice: 3000, currency: 'EUR', amountPercent: 10 }),
        ProductDiscount({ totalPrice: 100, currency: 'USD', amountFix: 3 }),
      ],
      customProperty: 'X',
      inUse: true,
    };

    expect(result).toBeInstanceOf(Product);
    expect(result).toStrictEqual(expected);
  });
});
