import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';
import LicenseType from '@/constants/LicenseType';
import TimeVolumePeriod from '@/constants/TimeVolumePeriod';

// entities
import LicenseTemplate from '@/entities/LicenseTemplate';

// services
import LicenseTemplateService from '@/services/LicenseTemplateService';
import Service from '@/services/Service';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

describe('LicenseTemplateService', () => {
  const context = new Context({ username: 'demo', password: '123' });
  const config = {};
  const endpoint = Constants.LicenseTemplate.ENDPOINT_PATH;
  const itemType = Constants.LicenseTemplate.TYPE;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('returns a valid licenseTemplate', async () => {
      const number = 'LT1';

      const props = {
        number,
        active: 'false',
        name: 'Sample name',
        licenseType: LicenseType.QUANTITY,
        price: '5.99',
        currency: 'UAH',
        automatic: 'true',
        hidden: 'false',
        hideLicenses: 'false',
        gracePeriod: 'true',
        timeVolume: '12',
        timeVolumePeriod: TimeVolumePeriod.YEAR,
        maxSessions: '3',
        quantity: '30',
        productModuleNumber: 'PM1',
        inUse: 'true',
      };

      const items = [createMockItem(itemType, props), createMockItem('Product', { number: 'P1' })];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const licenseTemplate = await LicenseTemplateService.get(context, number, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}/${number}`, {}, config);

      expect(licenseTemplate).toStrictEqual({
        number,
        active: false,
        name: 'Sample name',
        licenseType: LicenseType.QUANTITY,
        price: 5.99,
        currency: 'UAH',
        automatic: true,
        hidden: false,
        hideLicenses: false,
        gracePeriod: true,
        timeVolume: 12,
        timeVolumePeriod: TimeVolumePeriod.YEAR,
        maxSessions: 3,
        quantity: 30,
        productModuleNumber: 'PM1',
        inUse: true,
      });
    });
  });

  describe('list', () => {
    it('returns array of licenseTemplates', async () => {
      const raw = [
        { type: itemType, props: { number: 'L1', active: 'false', customProperty: 'A' } },
        { type: itemType, props: { number: 'L2', active: 'true', customProperty: 'B' } },
        { type: 'Product', props: { number: 'P1', active: 'true', customProperty: 'C' } },
        { type: 'License', props: { number: 'L1', active: 'true', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await LicenseTemplateService.list<{ customProperty: string }>(context, '', config);

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

      const result = await LicenseTemplateService.list(context, null, config);

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
      await LicenseTemplateService.list(context, { page: 2, items: 10 }, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, { filter: 'page=2;items=10' }, config);
    });
  });

  describe('create', () => {
    it('creates a licenseTemplate', async () => {
      const productModuleNumber = 'PM1';
      const licenseTemplate = LicenseTemplate({ number: 'LT1', active: false, customProperty: 'X' });

      const items = [
        createMockItem(itemType, { number: 'LT1', active: 'false', customProperty: 'X' }),
        createMockItem('Product', { number: 'P1', active: 'true', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await LicenseTemplateService.create(context, productModuleNumber, licenseTemplate, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        endpoint,
        {
          productModuleNumber,
          number: 'LT1',
          active: 'false',
          customProperty: 'X',
        },
        config,
      );

      expect(result).toStrictEqual(licenseTemplate);
    });
  });

  describe('update', () => {
    it('updates a licenseTemplate', async () => {
      const number = 'LT1';

      const licenseTemplate = LicenseTemplate({ number, active: false, customProperty: 'X' });
      const items = [
        createMockItem(itemType, { number, active: 'false', customProperty: 'X' }),
        createMockItem('Product', { number: 'P1', active: 'ture', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await LicenseTemplateService.update(context, number, licenseTemplate, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(context, `${endpoint}/${number}`, licenseTemplate.serialize(), config);

      expect(result).toStrictEqual(licenseTemplate);
    });
  });

  describe('delete', () => {
    it('deletes a licenseTemplate', async () => {
      vi.mocked(Service).delete.mockResolvedValueOnce({ status: 204 } as AxiosResponse<NlicResponse>);

      const number = 'LT1';
      const response = await LicenseTemplateService.delete(context, number, true, config);

      expect(response.status).toBe(204);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.delete).toHaveBeenCalledWith(context, `${endpoint}/${number}`, { forceCascade: true }, config);
    });
  });
});
