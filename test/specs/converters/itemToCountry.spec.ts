import { describe, it, expect } from 'vitest';

// converters
import itemToCountry from '@/converters/itemToCountry';

// entities
import Country from '@/entities/Country';

// types
import { Item } from '@/types/api/response';
import { CountryProps } from '@/types/entities/Country';

describe('itemToCountry converter', () => {
  it('should correctly convert item to Token', () => {
    const item: Item = {
      property: [
        { name: 'code', value: 'GE' },
        { name: 'name', value: 'Germany' },
        { name: 'isEu', value: 'true' },
        { name: 'vatPercent', value: '20' },
      ],
      list: [],
      type: 'Country',
    };

    const result = itemToCountry(item);

    const expected: CountryProps = {
      code: 'GE',
      name: 'Germany',
      vatPercent: 20,
      isEu: true,
    };

    expect(result).toBeInstanceOf(Country);
    expect(result).toStrictEqual(expected);
  });
});
