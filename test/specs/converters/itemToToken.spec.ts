import { describe, it, expect } from 'vitest';

// converters
import itemToToken from '@/converters/itemToToken';

// entities
import Token from '@/entities/Token';

// types
import { Item } from '@/types/api/response';
import { TokenProps } from '@/types/entities/Token';

describe('itemToToken converter', () => {
  it('should correctly convert item to Token', () => {
    const item: Item = {
      property: [
        { name: 'number', value: 'T1' },
        { name: 'active', value: 'true' },
        { name: 'expirationTime', value: '2024-01-03T12:00:00.000Z' },
        { name: 'tokenType', value: 'SHOP' },
        { name: 'licenseeNumber', value: 'L1' },
        { name: 'action', value: 'licenseeLogin' },
        { name: 'apiKeyRole', value: 'ROLE_APIKEY_ADMIN' },
        { name: 'bundleNumber', value: 'B1' },
        { name: 'bundlePrice', value: '0.99' },
        { name: 'productNumber', value: 'P1' },
        { name: 'predefinedShoppingItem', value: 'PSI1' },
        { name: 'successURL', value: 'http://some-success-url.test' },
        { name: 'successURLTitle', value: 'Sample of success title' },
        { name: 'cancelURL', value: 'http://some-cancel-url.test' },
        { name: 'cancelURLTitle', value: 'Sample of cancel title' },
        { name: 'shopURL', value: 'http://some-shop-url.test' },
        { name: 'customProperty', value: 'X' },
      ],
      list: [],
      type: 'Token',
    };

    const result = itemToToken(item);

    const expected: TokenProps<{ customProperty: string }> = {
      number: 'T1',
      active: true,
      tokenType: 'SHOP',
      expirationTime: new Date('2024-01-03T12:00:00.000Z'),
      licenseeNumber: 'L1',
      action: 'licenseeLogin',
      apiKeyRole: 'ROLE_APIKEY_ADMIN',
      bundleNumber: 'B1',
      bundlePrice: 0.99,
      productNumber: 'P1',
      predefinedShoppingItem: 'PSI1',
      successURL: 'http://some-success-url.test',
      successURLTitle: 'Sample of success title',
      cancelURL: 'http://some-cancel-url.test',
      cancelURLTitle: 'Sample of cancel title',
      shopURL: 'http://some-shop-url.test',
      customProperty: 'X',
    };

    expect(result).toBeInstanceOf(Token);
    expect(result).toStrictEqual(expected);
  });
});
