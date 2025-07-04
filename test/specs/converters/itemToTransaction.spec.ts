import { describe, it, expect } from 'vitest';

// converters
import itemToTransaction from '@/converters/itemToTransaction';

// entities
import License from '@/entities/License';
import LicenseTransactionJoin from '@/entities/LicenseTransactionJoin';
import Transaction from '@/entities/Transaction';

// types
import type { Item } from '@/types/api/response';
import type { TransactionProps } from '@/types/entities/Transaction';

describe('itemToTransaction converter', () => {
  it('should correctly convert item to Transaction', () => {
    const item: Item = {
      property: [
        { name: 'number', value: 'T1' },
        { name: 'active', value: 'true' },
        { name: 'status', value: 'CLOSED' },
        { name: 'source', value: 'AUTO_LICENSEE_VALIDATE' },
        { name: 'grandTotal', value: '10.99' },
        { name: 'discount', value: '2.99' },
        { name: 'currency', value: 'EUR' },
        { name: 'dateCreated', value: '2025-04-23T13:51:14.024Z' },
        { name: 'dateClosed', value: '2025-04-24T13:51:14.024Z' },
        { name: 'paymentMethod', value: 'PAYPAL' },
        { name: 'customProperty', value: 'X' },
        { name: 'inUse', value: 'true' },
      ],
      list: [
        {
          property: [
            { name: 'licenseNumber', value: 'L1' },
            { name: 'transactionNumber', value: 'T1' },
          ],
          list: [],
          name: 'licenseTransactionJoin',
        },
        {
          property: [
            { name: 'licenseNumber', value: 'L2' },
            { name: 'transactionNumber', value: 'T2' },
          ],
          list: [],
          name: 'licenseTransactionJoin',
        },
      ],
      type: 'Transaction',
    };

    const result = itemToTransaction(item);

    const expected: TransactionProps<{ customProperty: string }> = {
      number: 'T1',
      active: true,
      status: 'CLOSED',
      source: 'AUTO_LICENSEE_VALIDATE',
      grandTotal: 10.99,
      discount: 2.99,
      currency: 'EUR',
      dateCreated: new Date('2025-04-23T13:51:14.024Z'),
      dateClosed: new Date('2025-04-24T13:51:14.024Z'),
      paymentMethod: 'PAYPAL',
      licenseTransactionJoins: [
        LicenseTransactionJoin(Transaction({ number: 'T1' }), License({ number: 'L1' })),
        LicenseTransactionJoin(Transaction({ number: 'T2' }), License({ number: 'L2' })),
      ],
      customProperty: 'X',
      inUse: true,
    };

    expect(result).toBeInstanceOf(Transaction);
    expect(result).toMatchObject(expected);
  });
});
