import { describe, it, expect } from 'vitest';

// entities
import PaymentMethod from '@/entities/PaymentMethod';

// test utils
import expectEntity from '@test-utils/expectEntity';

describe('PaymentMethod Entity', () => {
  it('should create a PaymentMethod with default values', () => {
    const paymentMethod = PaymentMethod();

    expectEntity(paymentMethod, {
      active: undefined,
      number: undefined,
      'paypal.subject': undefined,
    });
  });

  it('should create a PaymentMethod with provided properties', () => {
    const props = {
      active: true,
      number: 'PAYPAL',
      'paypal.subject': 'dummy.subject',
    };

    const paymentMethod = PaymentMethod(props);

    expectEntity(paymentMethod, props);
    expect(paymentMethod).toStrictEqual(props);
  });

  it('should create an instance of PaymentMethod', () => {
    const paymentMethod = PaymentMethod();
    expect(paymentMethod instanceof PaymentMethod).toBe(true);
  });

  it('should be correct map', () => {
    const paymentMethod = PaymentMethod({
      active: true,
      number: 'PAYPAL',
      'paypal.subject': 'dummy.subject',
    });

    expect(paymentMethod.serialize()).toStrictEqual({
      active: 'true',
      number: 'PAYPAL',
      'paypal.subject': 'dummy.subject',
    });
  });
});
