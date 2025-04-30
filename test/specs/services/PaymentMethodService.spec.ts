import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';

// entities
import PaymentMethod from '@/entities/PaymentMethod';

// services
import PaymentMethodService from '@/services/PaymentMethodService';
import Service from '@/services/Service';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

describe('PaymentMethodService', () => {
  const context = Context({ username: 'demo', password: '123' });
  const config = {};
  const endpoint = Constants.PaymentMethod.ENDPOINT_PATH;
  const itemType = Constants.PaymentMethod.TYPE;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('returns a valid paymentMethod', async () => {
      const number = 'PAYPAL';

      const props = {
        number,
        active: 'false',
        'paypal.subject': 'P-SUBJECT',
      };

      const items = [createMockItem(itemType, props), createMockItem('Product', { number: 'P1' })];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const paymentMethod = await PaymentMethodService.get(context, number, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}/${number}`, {}, config);

      expect(paymentMethod).toStrictEqual({
        number,
        active: false,
        'paypal.subject': 'P-SUBJECT',
      });
    });
  });

  describe('list', () => {
    it('returns array of paymentMethods', async () => {
      const raw = [
        { type: itemType, props: { number: 'PAYPAL', active: 'false', customProperty: 'A' } },
        { type: itemType, props: { number: 'STRIPE', active: 'true', customProperty: 'B' } },
        { type: 'Product', props: { number: 'P1', active: 'true', customProperty: 'C' } },
        { type: 'License', props: { number: 'L1', active: 'true', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await PaymentMethodService.list<{ customProperty: string }>(context, null, config);

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

      const result = await PaymentMethodService.list(context, null, config);

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
      await PaymentMethodService.list(context, { page: 2, items: 10 }, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, { filter: 'page=2;items=10' }, config);
    });
  });

  describe('update', () => {
    it('updates a paymentMethod', async () => {
      const number = 'STRIPE';

      const paymentMethod = PaymentMethod({
        number,
        active: true,
        customProperty: 'X',
      });

      const items = [
        createMockItem(itemType, {
          number,
          active: 'true',
          customProperty: 'X',
        }),
        createMockItem('Product', { number: 'P1', active: 'ture', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await PaymentMethodService.update(context, number, paymentMethod, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(context, `${endpoint}/${number}`, paymentMethod.serialize(), config);

      expect(result).toStrictEqual(paymentMethod);
    });
  });
});
