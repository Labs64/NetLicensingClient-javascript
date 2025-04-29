import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';
import TimeVolumePeriod from '@/constants/TimeVolumePeriod';

// entities
import License from '@/entities/License';

// services
import LicenseService from '@/services/LicenseService';
import Service from '@/services/Service';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

describe('LicenseService', () => {
  const context = new Context({ username: 'demo', password: '123' });
  const config = {};
  const endpoint = Constants.License.ENDPOINT_PATH;
  const itemType = Constants.License.TYPE;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('returns a valid license', async () => {
      const number = 'L1';

      const props = {
        number,
        active: 'true',
        name: 'License name',
        price: '2.99',
        currency: 'EUR',
        hidden: 'true',
        licenseeNumber: 'LE1',
        licenseTemplateNumber: 'LT1',
        timeVolume: '12',
        timeVolumePeriod: TimeVolumePeriod.MONTH,
        startDate: 'now',
        parentfeature: 'PF1',
        inUse: 'true',
      };

      const items = [createMockItem(itemType, props), createMockItem('Product', { number: 'P1' })];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const license = await LicenseService.get(context, number, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}/${number}`, {}, config);

      expect(license).toStrictEqual({
        number,
        active: true,
        name: 'License name',
        price: 2.99,
        currency: 'EUR',
        hidden: true,
        licenseeNumber: 'LE1',
        licenseTemplateNumber: 'LT1',
        timeVolume: 12,
        timeVolumePeriod: TimeVolumePeriod.MONTH,
        startDate: 'now',
        parentfeature: 'PF1',
        inUse: true,
      });
    });
  });

  describe('list', () => {
    it('returns array of licenses', async () => {
      const raw = [
        { type: itemType, props: { number: 'L1', active: 'false', customProperty: 'A' } },
        { type: itemType, props: { number: 'L2', active: 'true', customProperty: 'B' } },
        { type: 'Product', props: { number: 'P1', active: 'true', customProperty: 'C' } },
        { type: 'Licensee', props: { number: 'L1', active: 'true', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await LicenseService.list<{ customProperty: string }>(context, '', config);

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

      const result = await LicenseService.list(context, '', config);

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
      await LicenseService.list(context, { page: 2, items: 10 }, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, { filter: 'page=2;items=10' }, config);
    });
  });

  describe('create', () => {
    it('creates a license', async () => {
      const license = License({ number: 'L1', active: false, customProperty: 'X' });

      const items = [
        createMockItem(itemType, { number: 'L1', active: 'false', customProperty: 'X' }),
        createMockItem('Product', { number: 'P1', active: 'true', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await LicenseService.create(context, 'LE1', 'LT1', null, license, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        endpoint,
        {
          number: 'L1',
          active: 'false',
          customProperty: 'X',
          licenseeNumber: 'LE1',
          licenseTemplateNumber: 'LT1',
        },
        config,
      );

      expect(result).toStrictEqual(license);
    });
  });

  describe('update', () => {
    it('updates a license', async () => {
      const number = 'L1';

      const license = License({ number, active: false, customProperty: 'X' });
      const items = [
        createMockItem(itemType, { number, active: 'false', customProperty: 'X' }),
        createMockItem('Product', { number: 'P1', active: 'ture', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await LicenseService.update(context, number, null, license, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(context, `${endpoint}/${number}`, license.serialize(), config);

      expect(result).toStrictEqual(license);
    });
  });

  describe('delete', () => {
    it('deletes a license', async () => {
      vi.mocked(Service).delete.mockResolvedValueOnce({ status: 204 } as AxiosResponse<NlicResponse>);

      const number = 'L1';
      const response = await LicenseService.delete(context, number, true, config);

      expect(response.status).toBe(204);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.delete).toHaveBeenCalledWith(context, `${endpoint}/${number}`, { forceCascade: true }, config);
    });
  });
});
