import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';

// entities
import Bundle from '@/entities/Bundle';

// services
import BundleService from '@/services/BundleService';
import Service from '@/services/Service';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

describe('BundleService', () => {
  const context = Context({ username: 'demo', password: '123' });
  const config = {};
  const endpoint = Constants.Bundle.ENDPOINT_PATH;
  const itemType = Constants.Bundle.TYPE;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('returns a valid bundle', async () => {
      const number = 'B1';
      const props = {
        number,
        active: 'true',
        name: 'Sample name',
        price: '2.99',
        currency: 'USD',
        licenseTemplateNumbers: 'LT1,LT2,LT4',
        customProperty: 'X',
      };

      const items = [createMockItem(itemType, props), createMockItem('OtherType', { number: 'Ignored' })];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const bundle = await BundleService.get(context, number, config);

      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}/${number}`, {}, config);

      expect(bundle).toStrictEqual({
        number,
        active: true,
        name: 'Sample name',
        price: 2.99,
        currency: 'USD',
        licenseTemplateNumbers: ['LT1', 'LT2', 'LT4'],
        customProperty: 'X',
      });
    });
  });

  describe('list', () => {
    it('returns array of bundles', async () => {
      const raw = [
        { type: itemType, props: { number: 'B1', active: 'false', customProperty: 'A' } },
        { type: itemType, props: { number: 'B2', active: 'true', customProperty: 'B' } },
        { type: 'Product', props: { number: 'P1', active: 'true', customProperty: 'C' } },
        { type: 'License', props: { number: 'L1', active: 'true', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await BundleService.list<{ customProperty: string }>(context, '', config);

      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}`, {}, config);

      const expected = raw
        .filter(({ type }) => type === itemType)
        .map(({ props }) => ({
          number: props.number,
          active: JSON.parse(props.active) as boolean,
          customProperty: props.customProperty,
        }));

      expect(result).toEqual(expected);
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

      const result = await BundleService.list(context, '', config);

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
      await BundleService.list(context, { page: 2, items: 10 }, config);

      expect(Service.get).toHaveBeenCalledWith(context, endpoint, { filter: 'page=2;items=10' }, config);
    });
  });

  describe('create', () => {
    it('creates a bundle', async () => {
      const bundle = Bundle({ number: 'B1', active: false, customProperty: 'X' });
      const items = [
        createMockItem(itemType, { number: 'B1', active: 'false', customProperty: 'X' }),
        createMockItem('OtherType', { number: 'Ignored' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await BundleService.create(context, bundle, config);

      expect(Service.post).toHaveBeenCalledWith(context, endpoint, bundle.serialize(), config);

      expect(result).toStrictEqual(bundle);
    });
  });

  describe('update', () => {
    it('updates a bundle', async () => {
      const number = 'B1';

      const bundle = Bundle({ number, active: false, customProperty: 'X' });
      const items = [
        createMockItem(itemType, { number, active: 'false', customProperty: 'X' }),
        createMockItem('OtherType', { number: 'Ignored' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await BundleService.update(context, number, bundle, config);

      expect(Service.post).toHaveBeenCalledWith(context, `${endpoint}/${number}`, bundle.serialize(), config);

      expect(result).toStrictEqual(bundle);
    });
  });

  describe('delete', () => {
    it('deletes a bundle', async () => {
      vi.mocked(Service).delete.mockResolvedValueOnce({ status: 204 } as AxiosResponse<NlicResponse>);

      const number = 'B1';
      const response = await BundleService.delete(context, number, true, config);

      expect(response.status).toBe(204);

      expect(Service.delete).toHaveBeenCalledWith(context, `${endpoint}/${number}`, { forceCascade: true }, config);
    });
  });

  describe('obtain', () => {
    it('should obtain a bundle', async () => {
      const raw = [
        { type: Constants.License.TYPE, props: { number: 'L1', active: 'false', customProperty: 'A' } },
        { type: Constants.License.TYPE, props: { number: 'L2', active: 'true', customProperty: 'B' } },
        { type: 'OtherType', props: { number: 'Ignored', active: 'false', customProperty: 'C' } },
        { type: 'OtherType', props: { number: 'Ignored too', active: 'false', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const number = 'B1';
      const licenseeNumber = 'L1';

      const result = await BundleService.obtain(context, number, licenseeNumber, config);

      const obtainEndpoint = `${endpoint}/${number}/${Constants.Bundle.ENDPOINT_OBTAIN_PATH}`;

      expect(Service.post).toHaveBeenCalledWith(context, obtainEndpoint, { licenseeNumber }, config);

      const expected = raw
        .filter(({ type }) => type === Constants.License.TYPE)
        .map(({ props }) => ({
          number: props.number,
          active: JSON.parse(props.active) as boolean,
          customProperty: props.customProperty,
        }));

      expect(result).toEqual(expected);
    });
  });
});
