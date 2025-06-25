import { describe, it, expect } from 'vitest';

// converters
import itemToPaymentMethod from '@/converters/itemToPaymentMethod';

// entities
import PaymentMethod from '@/entities/PaymentMethod';

// types
import { Item } from '@/types/api/response';
import { PaymentMethodProps } from '@/types/entities/PaymentMethod';

describe('itemToPaymentMethod converter', () => {
  it('should correctly convert item to PaymentMethod', () => {
    const item: Item = {
      property: [
        { name: 'number', value: 'PAYPAL' },
        { name: 'active', value: 'true' },
        { name: 'paypal.subject', value: 'P-SUBJECT' },
        { name: 'customProperty', value: 'X' },
      ],
      list: [],
      type: 'PaymentMethod',
    };

    const result = itemToPaymentMethod(item);

    const expected: PaymentMethodProps<{ ['paypal.subject']: string; customProperty: string }> = {
      number: 'PAYPAL',
      active: true,
      'paypal.subject': 'P-SUBJECT',
      customProperty: 'X',
    };

    expect(result).toBeInstanceOf(PaymentMethod);
    expect(result).toStrictEqual(expected);
  });
});
