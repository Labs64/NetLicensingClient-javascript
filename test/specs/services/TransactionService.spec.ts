import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';

// entities
import License from '@/entities/License';
import LicenseTransactionJoin from '@/entities/LicenseTransactionJoin';
import Transaction from '@/entities/Transaction';

// services
import Service from '@/services/Service';
import TransactionService from '@/services/TransactionService';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

describe('TransactionService', () => {
  const context = Context({ username: 'demo', password: '123' });
  const config = {};
  const endpoint = Constants.Transaction.ENDPOINT_PATH;
  const itemType = Constants.Transaction.TYPE;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('returns a transaction', async () => {
      const number = 'T1';

      const props = {
        number,
        active: 'true',
        status: 'CLOSED',
        source: 'AUTO_LICENSEE_VALIDATE',
        grandTotal: '10.99',
        discount: '2.99',
        currency: 'EUR',
        dateCreated: '2025-04-23T13:51:14.024Z',
        dateClosed: '2025-04-24T13:51:14.024Z',
        paymentMethod: 'PAYPAL',
        licenseTransactionJoin: [
          { licenseNumber: 'L1', transactionNumber: 'T1' },
          { licenseNumber: 'L2', transactionNumber: 'T2' },
        ],
        customProperty: 'X',
        inUse: 'true',
      };

      const items = [createMockItem(itemType, props), createMockItem('Product', { number: 'P1' })];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const transaction = await TransactionService.get(context, number, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}/${number}`, {}, config);

      expect(transaction).toStrictEqual({
        number,
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
      });
    });
  });

  describe('list', () => {
    it('returns array of transactions', async () => {
      const raw = [
        { type: itemType, props: { number: 'T1', active: 'false', customProperty: 'A' } },
        { type: itemType, props: { number: 'T2', active: 'true', customProperty: 'B' } },
        { type: 'Product', props: { number: 'P1', active: 'true', customProperty: 'C' } },
        { type: 'License', props: { number: 'L1', active: 'true', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await TransactionService.list<{ customProperty: string }>(context, null, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}`, {}, config);

      const expected = raw
        .filter(({ type }) => type === itemType)
        .map(({ props }) => ({
          number: props.number,
          active: JSON.parse(props.active) as boolean,
          customProperty: props.customProperty,
        }));

      expect(result).toEqual(expect.arrayContaining(expected));
    });

    it('parses pagination', async () => {
      const pagination = {
        pagenumber: '1',
        itemsnumber: '10',
        totalpages: '30',
        totalitems: '300',
        hasnext: 'true',
      };
      const items = Array.from({ length: 10 }, (_, i) => createMockItem(itemType, { number: `L${i}` }));

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items, undefined, pagination),
      } as AxiosResponse<NlicResponse>);

      const result = await TransactionService.list(context, null, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}`, {}, config);

      expect(result.getPagination()).toStrictEqual({
        pageNumber: parseInt(pagination.pagenumber, 10),
        itemsNumber: parseInt(pagination.itemsnumber, 10),
        totalPages: parseInt(pagination.totalpages, 10),
        totalItems: parseInt(pagination.totalitems, 10),
        hasNext: true,
      });
    });

    it('sends correct filter param', async () => {
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse() } as AxiosResponse<NlicResponse>);
      await TransactionService.list(context, { page: 2, items: 10 }, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, { filter: 'page=2;items=10' }, config);
    });
  });

  describe('create', () => {
    it('creates a transaction', async () => {
      const transaction = Transaction({
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
      });

      const items = [
        createMockItem(itemType, {
          number: 'T1',
          active: 'true',
          status: 'CLOSED',
          source: 'AUTO_LICENSEE_VALIDATE',
          grandTotal: '10.99',
          discount: '2.99',
          currency: 'EUR',
          dateCreated: '2025-04-23T13:51:14.024Z',
          dateClosed: '2025-04-24T13:51:14.024Z',
          paymentMethod: 'PAYPAL',
          licenseTransactionJoin: [
            { licenseNumber: 'L1', transactionNumber: 'T1' },
            { licenseNumber: 'L2', transactionNumber: 'T2' },
          ],
          customProperty: 'X',
          inUse: 'true',
        }),
        createMockItem('Product', { number: 'P1', active: 'true', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await TransactionService.create(context, transaction, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        endpoint,
        {
          number: 'T1',
          active: 'true',
          status: 'CLOSED',
          source: 'AUTO_LICENSEE_VALIDATE',
          grandTotal: '10.99',
          discount: '2.99',
          currency: 'EUR',
          dateCreated: '2025-04-23T13:51:14.024Z',
          dateClosed: '2025-04-24T13:51:14.024Z',
          paymentMethod: 'PAYPAL',
          customProperty: 'X',
        },
        config,
      );

      expect(result).toStrictEqual(transaction);
    });
  });

  describe('update', () => {
    it('updates a transaction', async () => {
      const number = 'T1';

      const transaction = Transaction({
        number,
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
      });

      const items = [
        createMockItem(itemType, {
          number,
          active: 'true',
          status: 'CLOSED',
          source: 'AUTO_LICENSEE_VALIDATE',
          grandTotal: '10.99',
          discount: '2.99',
          currency: 'EUR',
          dateCreated: '2025-04-23T13:51:14.024Z',
          dateClosed: '2025-04-24T13:51:14.024Z',
          paymentMethod: 'PAYPAL',
          licenseTransactionJoin: [
            { licenseNumber: 'L1', transactionNumber: 'T1' },
            { licenseNumber: 'L2', transactionNumber: 'T2' },
          ],
          customProperty: 'X',
          inUse: 'true',
        }),
        createMockItem('Product', { number: 'P1', active: 'ture', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await TransactionService.update(context, number, transaction, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        `${endpoint}/${number}`,
        {
          number: 'T1',
          active: 'true',
          status: 'CLOSED',
          source: 'AUTO_LICENSEE_VALIDATE',
          grandTotal: '10.99',
          discount: '2.99',
          currency: 'EUR',
          dateCreated: '2025-04-23T13:51:14.024Z',
          dateClosed: '2025-04-24T13:51:14.024Z',
          paymentMethod: 'PAYPAL',
          customProperty: 'X',
        },
        config,
      );

      expect(result).toStrictEqual(transaction);
    });
  });
});
