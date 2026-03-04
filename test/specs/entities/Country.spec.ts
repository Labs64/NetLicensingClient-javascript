import { describe, it, expect } from 'vitest';

// entities
import Country from '@/entities/Country';

// test utils
import expectEntity from '@test-utils/expectEntity';

describe('Country Entity', () => {
  it('should create a Country with default values', () => {
    const country = Country();

    expectEntity(country, {
      code: '',
      name: '',
      vatPercent: 0,
      isEu: false,
    });
  });

  it('should create a Country with provided properties', () => {
    const countryProps = {
      code: 'US',
      name: 'United States',
      vatPercent: 7,
      isEu: false,
    };
    const country = Country(countryProps);

    expectEntity(country, {
      code: 'US',
      name: 'United States',
      vatPercent: 7,
      isEu: false,
    });
  });

  it('should create an instance of Country', () => {
    const country = Country();
    expect(country instanceof Country).toBe(true);
  });
});
