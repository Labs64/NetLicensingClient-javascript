import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';
import LicensingModel from '@/constants/LicensingModel';

// entities
import ProductModule from '@/entities/ProductModule';

// services
import ProductModuleService from '@/services/ProductModuleService';
import Service from '@/services/Service';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

describe('ProductModuleService', () => {
  const context = new Context({ username: 'demo', password: '123' });
  const config = {};
  const endpoint = Constants.ProductModule.ENDPOINT_PATH;
  const itemType = Constants.ProductModule.TYPE;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('returns a valid productModule', async () => {
      const number = 'PM1';

      const props = {
        number,
        active: 'false',
        name: 'Sample name',
        licensingModel: LicensingModel.QUOTA,
        maxCheckoutValidity: '3',
        yellowThreshold: '5',
        redThreshold: '10',
        productNumber: 'P1',
        inUse: 'true',
      };

      const items = [createMockItem(itemType, props), createMockItem('Product', { number: 'P1' })];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const productModule = await ProductModuleService.get(context, number, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}/${number}`, {}, config);

      expect(productModule).toStrictEqual({
        number,
        active: false,
        name: 'Sample name',
        licensingModel: LicensingModel.QUOTA,
        maxCheckoutValidity: 3,
        yellowThreshold: 5,
        redThreshold: 10,
        productNumber: 'P1',
        inUse: true,
      });
    });
  });

  describe('list', () => {
    it('returns array of productModules', async () => {
      const raw = [
        { type: itemType, props: { number: 'PM1', active: 'false', customProperty: 'A' } },
        { type: itemType, props: { number: 'PM2', active: 'true', customProperty: 'B' } },
        { type: 'Product', props: { number: 'P1', active: 'true', customProperty: 'C' } },
        { type: 'License', props: { number: 'L1', active: 'true', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await ProductModuleService.list<{ customProperty: string }>(context, null, config);

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

      const result = await ProductModuleService.list(context, null, config);

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
      await ProductModuleService.list(context, { page: 2, items: 10 }, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, { filter: 'page=2;items=10' }, config);
    });
  });

  describe('create', () => {
    it('creates a productModule', async () => {
      const productNumber = 'P1';

      const productModule = ProductModule({
        active: false,
        name: 'Sample name',
        licensingModel: LicensingModel.QUOTA,
        maxCheckoutValidity: 3,
        yellowThreshold: 5,
        redThreshold: 10,
        productNumber: 'P1',
        customProperty: 'X',
        inUse: true,
      });

      const items = [
        createMockItem(itemType, {
          productNumber,
          active: 'false',
          name: 'Sample name',
          licensingModel: LicensingModel.QUOTA,
          maxCheckoutValidity: '3',
          yellowThreshold: '5',
          redThreshold: '10',
          customProperty: 'X',
          inUse: 'true',
        }),
        createMockItem('Product', { number: 'P1', active: 'true', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await ProductModuleService.create(context, 'P1', productModule, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        endpoint,
        {
          productNumber,
          active: 'false',
          name: 'Sample name',
          licensingModel: LicensingModel.QUOTA,
          maxCheckoutValidity: '3',
          yellowThreshold: '5',
          redThreshold: '10',
          customProperty: 'X',
        },
        config,
      );

      expect(result).toStrictEqual(productModule);
    });
  });

  describe('update', () => {
    it('updates a productModule', async () => {
      const number = 'PM1';

      const productModule = ProductModule({
        number,
        active: false,
        name: 'Sample name',
        licensingModel: LicensingModel.QUOTA,
        maxCheckoutValidity: 3,
        yellowThreshold: 5,
        redThreshold: 10,
        productNumber: 'P1',
        customProperty: 'X',
        inUse: true,
      });

      const items = [
        createMockItem(itemType, {
          number,
          active: 'false',
          name: 'Sample name',
          licensingModel: LicensingModel.QUOTA,
          maxCheckoutValidity: '3',
          yellowThreshold: '5',
          redThreshold: '10',
          productNumber: 'P1',
          customProperty: 'X',
          inUse: 'true',
        }),
        createMockItem('Product', { number: 'P1', active: 'ture', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await ProductModuleService.update(context, number, productModule, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        `${endpoint}/${number}`,
        {
          number,
          active: 'false',
          name: 'Sample name',
          licensingModel: LicensingModel.QUOTA,
          maxCheckoutValidity: '3',
          yellowThreshold: '5',
          redThreshold: '10',
          productNumber: 'P1',
          customProperty: 'X',
        },
        config,
      );

      expect(result).toStrictEqual(productModule);
    });
  });

  describe('delete', () => {
    it('deletes a productModule', async () => {
      vi.mocked(Service).delete.mockResolvedValueOnce({ status: 204 } as AxiosResponse<NlicResponse>);

      const number = 'PM1';
      const response = await ProductModuleService.delete(context, number, true, config);

      expect(response.status).toBe(204);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.delete).toHaveBeenCalledWith(context, `${endpoint}/${number}`, { forceCascade: true }, config);
    });
  });
});
