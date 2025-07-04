import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';

// entities
import Product from '@/entities/Product';
import ProductDiscount from '@/entities/ProductDiscount';

// services
import ProductService from '@/services/ProductService';
import Service from '@/services/Service';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

describe('ProductService', () => {
  const context = Context({ username: 'demo', password: '123' });
  const config = {};
  const endpoint = Constants.Product.ENDPOINT_PATH;
  const itemType = Constants.Product.TYPE;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('returns a valid product', async () => {
      const number = 'P1';

      const props = {
        number,
        active: 'true',
        name: 'Sample name',
        version: '1.0-alfa',
        description: 'Description',
        licensingInfo: 'Licensing Info',
        licenseeAutoCreate: 'false',
        discount: [
          {
            totalPrice: '100.00',
            currency: 'EUR',
            amountPercent: '10',
          },
          {
            totalPrice: '200.00',
            currency: 'USD',
            amountFix: '3',
          },
        ],
        inUse: 'true',
      };

      const items = [createMockItem(itemType, props), createMockItem('Transaction', { number: 'T1' })];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const product = await ProductService.get(context, number, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}/${number}`, {}, config);

      expect(product).toStrictEqual({
        number,
        active: true,
        name: 'Sample name',
        version: '1.0-alfa',
        description: 'Description',
        licensingInfo: 'Licensing Info',
        licenseeAutoCreate: false,
        discounts: [
          ProductDiscount({ totalPrice: 100, currency: 'EUR', amountPercent: 10 }),
          ProductDiscount({ totalPrice: 200, currency: 'USD', amountFix: 3 }),
        ],
        inUse: true,
      });
    });
  });

  describe('list', () => {
    it('returns array of products', async () => {
      const raw = [
        { type: itemType, props: { number: 'P1', active: 'false', customProperty: 'A' } },
        { type: itemType, props: { number: 'P2', active: 'true', customProperty: 'B' } },
        { type: 'Transaction', props: { number: 'T1', active: 'true', customProperty: 'C' } },
        { type: 'License', props: { number: 'L1', active: 'true', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await ProductService.list<{ customProperty: string }>(context, null, config);

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
      const items = Array.from({ length: 10 }, (_, i) => createMockItem(itemType, { number: `P${i}` }));

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items, undefined, pagination),
      } as AxiosResponse<NlicResponse>);

      const result = await ProductService.list(context, null, config);

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
      await ProductService.list(context, { page: 2, items: 10 }, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, { filter: 'page=2;items=10' }, config);
    });
  });

  describe('create', () => {
    it('creates a product', async () => {
      const product = Product({
        number: 'P1',
        active: true,
        name: 'Sample name',
        version: '1.0-alfa',
        description: 'Description',
        licensingInfo: 'Licensing Info',
        licenseeAutoCreate: false,
        discounts: [
          ProductDiscount({ totalPrice: 100, currency: 'EUR', amountPercent: 10 }),
          ProductDiscount({ totalPrice: 200, currency: 'USD', amountFix: 3 }),
        ],
        inUse: true,
      });

      const items = [
        createMockItem(itemType, {
          number: 'P1',
          active: 'true',
          name: 'Sample name',
          version: '1.0-alfa',
          description: 'Description',
          licensingInfo: 'Licensing Info',
          licenseeAutoCreate: 'false',
          discount: [
            {
              totalPrice: '100.00',
              currency: 'EUR',
              amountPercent: '10',
            },
            {
              totalPrice: '200.00',
              currency: 'USD',
              amountFix: '3',
            },
          ],
          inUse: 'true',
        }),
        createMockItem('Transaction', { number: 'T1', active: 'true', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await ProductService.create(context, product, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        endpoint,
        {
          number: 'P1',
          active: 'true',
          name: 'Sample name',
          version: '1.0-alfa',
          description: 'Description',
          licensingInfo: 'Licensing Info',
          licenseeAutoCreate: 'false',
          discount: ['100;EUR;10%', '200;USD;3'],
        },
        config,
      );

      expect(result).toStrictEqual(product);
    });
  });

  describe('update', () => {
    it('updates a product', async () => {
      const number = 'P1';

      const product = Product({
        number,
        active: true,
        name: 'Sample name',
        version: '1.0-alfa',
        description: 'Description',
        licensingInfo: 'Licensing Info',
        licenseeAutoCreate: false,
        discounts: [
          ProductDiscount({ totalPrice: 100, currency: 'EUR', amountPercent: 10 }),
          ProductDiscount({ totalPrice: 200, currency: 'USD', amountFix: 3 }),
        ],
        customProperty: 'X',
        inUse: true,
      });

      const items = [
        createMockItem(itemType, {
          number,
          active: 'true',
          name: 'Sample name',
          version: '1.0-alfa',
          description: 'Description',
          licensingInfo: 'Licensing Info',
          licenseeAutoCreate: 'false',
          discount: [
            {
              totalPrice: '100.00',
              currency: 'EUR',
              amountPercent: '10',
            },
            {
              totalPrice: '200.00',
              currency: 'USD',
              amountFix: '3',
            },
          ],
          customProperty: 'X',
          inUse: 'true',
        }),
        createMockItem('Transaction', { number: 'T1', active: 'ture', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await ProductService.update(context, number, product, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        `${endpoint}/${number}`,
        {
          number,
          active: 'true',
          name: 'Sample name',
          version: '1.0-alfa',
          description: 'Description',
          licensingInfo: 'Licensing Info',
          licenseeAutoCreate: 'false',
          discount: ['100;EUR;10%', '200;USD;3'],
          customProperty: 'X',
        },
        config,
      );

      expect(result).toStrictEqual(product);
    });
  });

  describe('delete', () => {
    it('deletes a product', async () => {
      vi.mocked(Service).delete.mockResolvedValueOnce({ status: 204 } as AxiosResponse<NlicResponse>);

      const number = 'PM1';
      const response = await ProductService.delete(context, number, true, config);

      expect(response.status).toBe(204);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.delete).toHaveBeenCalledWith(context, `${endpoint}/${number}`, { forceCascade: true }, config);
    });
  });
});
