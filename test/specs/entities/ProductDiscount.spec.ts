import { describe, it, expect } from 'vitest';

// entities
import ProductDiscount from '@/entities/ProductDiscount';

// errors
import NlicError from '@/errors/NlicError';

// test utils
import expectEntity from '@test-utils/expectEntity';
import expectEntityProp from '@test-utils/expectEntityProp';

describe('ProductDiscount entity', () => {
  it('should create a ProductDiscount with default properties', () => {
    const productDiscount = ProductDiscount();

    expectEntity(productDiscount, {
      totalPrice: undefined,
      currency: undefined,
      amountFix: undefined,
      amountPercent: undefined,
    });
  });

  it('should throw if both "amountFix" and "amountPercent" are provided', () => {
    expect(() =>
      ProductDiscount({
        amountFix: 100,
        amountPercent: 10,
      }),
    ).toThrowError(new NlicError('Properties "amountFix" and "amountPercent" cannot be used at the same time'));
  });

  it('should allow creation with only "amountFix"', () => {
    expect(() =>
      ProductDiscount({
        amountFix: 100,
      }),
    ).not.toThrow();
  });

  it('should allow creation with only "amountPercent"', () => {
    expect(() =>
      ProductDiscount({
        amountPercent: 10,
      }),
    ).not.toThrow();
  });

  it('should create a ProductDiscount with provided properties', () => {
    const props = {
      totalPrice: 10,
      currency: 'EUR',
      amountFix: 100,
    };

    const discount = ProductDiscount(props);

    expectEntity(discount, props);
    expect(discount).toStrictEqual(props);
  });

  it('should set and get totalPrice correctly', () => {
    const discount = ProductDiscount();

    discount.setTotalPrice(10);
    expectEntityProp(discount, 'totalPrice', 10);

    discount.totalPrice = 20;
    expectEntityProp(discount, 'totalPrice', 20);

    discount.set('totalPrice', 30);
    expectEntityProp(discount, 'totalPrice', 30);

    discount.setProperty('totalPrice', 40);
    expectEntityProp(discount, 'totalPrice', 40);
  });

  it('should set and get currency correctly', () => {
    const discount = ProductDiscount();

    discount.setCurrency('USD');
    expectEntityProp(discount, 'currency', 'USD');

    discount.currency = 'EUR';
    expectEntityProp(discount, 'currency', 'EUR');

    discount.set('currency', 'UAH');
    expectEntityProp(discount, 'currency', 'UAH');

    discount.setProperty('currency', 'GEL');
    expectEntityProp(discount, 'currency', 'GEL');
  });

  it('should set and get amountFix correctly', () => {
    const discount = ProductDiscount();

    discount.setAmountFix(10);
    expectEntityProp(discount, 'amountFix', 10);

    discount.amountFix = 20;
    expectEntityProp(discount, 'amountFix', 20);

    discount.set('amountFix', 30);
    expectEntityProp(discount, 'amountFix', 30);

    discount.setProperty('amountFix', 40);
    expectEntityProp(discount, 'amountFix', 40);
  });

  it('should set and get amountPercent correctly', () => {
    const discount = ProductDiscount();

    discount.setAmountPercent(10);
    expectEntityProp(discount, 'amountPercent', 10);

    discount.amountPercent = 20;
    expectEntityProp(discount, 'amountPercent', 20);

    discount.set('amountPercent', 30);
    expectEntityProp(discount, 'amountPercent', 30);

    discount.setProperty('amountPercent', 40);
    expectEntityProp(discount, 'amountPercent', 40);
  });

  it('should remove amountPercent when amountFix set', () => {
    const discount = ProductDiscount({
      amountPercent: 100,
    });

    discount.amountFix = 20;

    expect(discount.amountPercent).toBeUndefined();
    expect(discount.amountFix).toBe(20);
  });

  it('should remove amountFix when amountPercent set', () => {
    const discount = ProductDiscount({
      amountFix: 100,
    });

    discount.amountPercent = 20;

    expect(discount.amountFix).toBeUndefined();
    expect(discount.amountPercent).toBe(20);
  });

  it('should create an instance of ProductDiscount', () => {
    const discount = ProductDiscount();
    expect(discount instanceof ProductDiscount).toBe(true);
  });

  it('should return correct string from toString()', () => {
    const fixDiscount = ProductDiscount({
      totalPrice: 10,
      currency: 'EUR',
      amountFix: 2,
    });

    const percentDiscount = ProductDiscount({
      totalPrice: 100,
      currency: 'USD',
      amountPercent: 3,
    });

    expect(fixDiscount.toString()).toBe('10;EUR;2');
    expect(percentDiscount.toString()).toBe('100;USD;3%');
  });
});
