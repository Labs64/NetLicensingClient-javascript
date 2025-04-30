import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';

// entities
import Token from '@/entities/Token';

// services
import Service from '@/services/Service';
import UtilityService from '@/services/UtilityService';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

vi.mock('@/services/Service');

describe('UtilityService', () => {
  const context = Context({ username: 'demo', password: '123' });
  const config = {};

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('listLicenseTypes', () => {
    it('should fetch license types', async () => {
      const type = Constants.Utility.LICENSE_TYPE;
      const items = [
        createMockItem(type, { name: 'FLOATING' }),
        createMockItem(type, { name: 'NODE_LOCKED' }),
        createMockItem('OtherType', { name: 'Ignored' }),
      ];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await UtilityService.listLicenseTypes(context, config);

      const endpoint = `${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSE_TYPES}`;

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, undefined, config);

      expect(result).toEqual(['FLOATING', 'NODE_LOCKED']);
    });
  });

  describe('listLicensingModels', () => {
    it('should fetch licensing models', async () => {
      const type = Constants.Utility.LICENSING_MODEL_TYPE;
      const items = [
        createMockItem(type, { name: 'Subscription' }),
        createMockItem(type, { name: 'NodeLocked' }),
        createMockItem('OtherType', { name: 'Ignored' }),
      ];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await UtilityService.listLicensingModels(context, config);

      const endpoint = `${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSING_MODELS}`;

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, undefined, config);

      expect(result).toEqual(['Subscription', 'NodeLocked']);
    });
  });

  describe('listCountries', () => {
    it('should fetch countries', async () => {
      const type = Constants.Utility.COUNTRY_TYPE;
      const items = [
        createMockItem(type, { code: 'GE', name: 'Georgia', isEu: 'false' }),
        createMockItem(type, { code: 'DE', name: 'Germany', isEu: 'true', vatPercent: '20' }),
        createMockItem('OtherType', { code: 'XX', name: 'Other' }),
      ];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await UtilityService.listCountries(context, '', config);

      const endpoint = `${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_COUNTRIES}`;

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, {}, config);

      expect(result).toEqual([
        { code: 'GE', name: 'Georgia', isEu: false, vatPercent: 0 },
        { code: 'DE', name: 'Germany', isEu: true, vatPercent: 20 },
      ]);
    });
  });
});
