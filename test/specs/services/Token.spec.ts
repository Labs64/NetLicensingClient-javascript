import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';

// entities
import Token from '@/entities/Token';

// services
import Service from '@/services/Service';
import TokenService from '@/services/TokenService';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

describe('TokenService', () => {
  const context = Context({ username: 'demo', password: '123' });
  const config = {};
  const endpoint = Constants.Token.ENDPOINT_PATH;
  const itemType = Constants.Token.TYPE;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('returns a token', async () => {
      const number = 'T1';

      const props = {
        number,
        active: 'true',
        tokenType: 'SHOP',
        expirationTime: '2024-01-03T12:00:00.000Z',
        licenseeNumber: 'L1',
        action: 'licenseeLogin',
        apiKeyRole: 'ROLE_APIKEY_ADMIN',
        bundleNumber: 'B1',
        bundlePrice: '0.99',
        productNumber: 'P1',
        predefinedShoppingItem: 'PSI1',
        successURL: 'http://some-success-url.test',
        successURLTitle: 'Sample of success title',
        cancelURL: 'http://some-cancel-url.test',
        cancelURLTitle: 'Sample of cancel title',
        shopURL: 'http://some-shop-url.test',
        customProperty: 'X',
      };

      const items = [createMockItem(itemType, props), createMockItem('Product', { number: 'P1' })];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const token = await TokenService.get(context, number, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}/${number}`, {}, config);

      expect(token).toStrictEqual({
        number,
        active: true,
        expirationTime: new Date('2024-01-03T12:00:00.000Z'),
        tokenType: 'SHOP',
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
      });
    });
  });

  describe('list', () => {
    it('returns array of tokens', async () => {
      const raw = [
        { type: itemType, props: { number: 'T1', active: 'false', customProperty: 'A' } },
        { type: itemType, props: { number: 'T2', active: 'true', customProperty: 'B' } },
        { type: 'Product', props: { number: 'P1', active: 'true', customProperty: 'C' } },
        { type: 'License', props: { number: 'L1', active: 'true', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await TokenService.list<{ customProperty: string }>(context, null, config);

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

      const result = await TokenService.list(context, null, config);

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
      await TokenService.list(context, { page: 2, items: 10 }, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, { filter: 'page=2;items=10' }, config);
    });
  });

  describe('create', () => {
    it('creates a token', async () => {
      const token = Token({
        number: 'T1',
        active: true,
        expirationTime: new Date('2024-01-03T12:00:00.000Z'),
        tokenType: 'SHOP',
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
      });

      const items = [
        createMockItem(itemType, {
          number: 'T1',
          active: 'true',
          tokenType: 'SHOP',
          expirationTime: '2024-01-03T12:00:00.000Z',
          licenseeNumber: 'L1',
          action: 'licenseeLogin',
          apiKeyRole: 'ROLE_APIKEY_ADMIN',
          bundleNumber: 'B1',
          bundlePrice: '0.99',
          productNumber: 'P1',
          predefinedShoppingItem: 'PSI1',
          successURL: 'http://some-success-url.test',
          successURLTitle: 'Sample of success title',
          cancelURL: 'http://some-cancel-url.test',
          cancelURLTitle: 'Sample of cancel title',
          shopURL: 'http://some-shop-url.test',
          customProperty: 'X',
        }),
        createMockItem('Product', { number: 'P1', active: 'true', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await TokenService.create(context, token, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        endpoint,
        {
          number: 'T1',
          active: 'true',
          tokenType: 'SHOP',
          expirationTime: '2024-01-03T12:00:00.000Z',
          licenseeNumber: 'L1',
          action: 'licenseeLogin',
          apiKeyRole: 'ROLE_APIKEY_ADMIN',
          bundleNumber: 'B1',
          bundlePrice: '0.99',
          productNumber: 'P1',
          predefinedShoppingItem: 'PSI1',
          successURL: 'http://some-success-url.test',
          successURLTitle: 'Sample of success title',
          cancelURL: 'http://some-cancel-url.test',
          cancelURLTitle: 'Sample of cancel title',
          customProperty: 'X',
        },
        config,
      );

      expect(result).toStrictEqual(token);
    });
  });

  describe('delete', () => {
    it('deletes a token', async () => {
      vi.mocked(Service).delete.mockResolvedValueOnce({ status: 204 } as AxiosResponse<NlicResponse>);

      const number = 'PM1';
      const response = await TokenService.delete(context, number, true, config);

      expect(response.status).toBe(204);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.delete).toHaveBeenCalledWith(context, `${endpoint}/${number}`, { forceCascade: true }, config);
    });
  });
});
