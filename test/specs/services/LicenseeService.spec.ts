import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';

// entities
import Licensee from '@/entities/Licensee';

// services
import LicenseeService from '@/services/LicenseeService';
import Service from '@/services/Service';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';
import ValidationParameters from '@/vo/ValidationParameters';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

describe('LicenseeService', () => {
  const context = Context({ username: 'demo', password: '123' });
  const config = {};
  const endpoint = Constants.Licensee.ENDPOINT_PATH;
  const itemType = Constants.Licensee.TYPE;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('returns a valid licensee', async () => {
      const number = 'L1';
      const props = {
        number,
        active: 'true',
        name: 'Sample name',
        markedForTransfer: 'false',
        productNumber: 'P1',
        inUse: 'true',
        customProperty: 'My-Property',
      };

      const items = [createMockItem(itemType, props), createMockItem('Product', { number: 'P1' })];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const licensee = await LicenseeService.get(context, number, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}/${number}`, {}, config);

      expect(licensee).toStrictEqual({
        number: 'L1',
        active: true,
        name: 'Sample name',
        markedForTransfer: false,
        productNumber: 'P1',
        inUse: true,
        customProperty: 'My-Property',
      });
    });
  });

  describe('list', () => {
    it('returns array of licensees', async () => {
      const raw = [
        { type: itemType, props: { number: 'L1', active: 'false', customProperty: 'A' } },
        { type: itemType, props: { number: 'L2', active: 'true', customProperty: 'B' } },
        { type: 'Product', props: { number: 'P1', active: 'true', customProperty: 'C' } },
        { type: 'License', props: { number: 'L1', active: 'true', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await LicenseeService.list<{ customProperty: string }>(context, '', config);

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

      const result = await LicenseeService.list(context, '', config);

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
      await LicenseeService.list(context, { page: 2, items: 10 }, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, { filter: 'page=2;items=10' }, config);
    });
  });

  describe('create', () => {
    it('creates a licensee', async () => {
      const productNumber = 'P1';

      const licensee = Licensee({ number: 'L1', active: false, customProperty: 'X' });

      const items = [
        createMockItem(itemType, { number: 'L1', active: 'false', customProperty: 'X' }),
        createMockItem('Product', { number: 'P1', active: 'true', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await LicenseeService.create(context, productNumber, licensee, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        endpoint,
        { productNumber, number: 'L1', active: 'false', customProperty: 'X' },
        config,
      );

      expect(result).toStrictEqual(licensee);
    });
  });

  describe('update', () => {
    it('updates a licensee', async () => {
      const number = 'L1';

      const licensee = Licensee({ number, active: false, customProperty: 'X' });
      const items = [
        createMockItem(itemType, { number, active: 'false', customProperty: 'X' }),
        createMockItem('Product', { number: 'P1', active: 'ture', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await LicenseeService.update(context, number, licensee, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(context, `${endpoint}/${number}`, licensee.serialize(), config);

      expect(result).toStrictEqual(licensee);
    });
  });

  describe('delete', () => {
    it('deletes a licensee', async () => {
      vi.mocked(Service).delete.mockResolvedValueOnce({ status: 204 } as AxiosResponse<NlicResponse>);

      const number = 'L1';
      const response = await LicenseeService.delete(context, number, true, config);

      expect(response.status).toBe(204);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.delete).toHaveBeenCalledWith(context, `${endpoint}/${number}`, { forceCascade: true }, config);
    });
  });

  describe('validate', () => {
    it('validate a licensee', async () => {
      const raw = [
        { type: Constants.Validation.TYPE, props: { productModuleNumber: 'PM1', valid: 'true' } },
        { type: Constants.Validation.TYPE, props: { productModuleNumber: 'PM2', valid: 'false' } },
        { type: Constants.Validation.TYPE, props: { productModuleNumber: 'PM3', valid: 'true' } },
        { type: 'License', props: { number: 'L1', active: 'true' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props as unknown as Record<string, string>));
      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const number = 'L1';

      const validationParameters = ValidationParameters();
      validationParameters.setProductNumber('P1');
      validationParameters.setLicenseeProperty('someLicenseeProperty', 'Z');
      validationParameters.setParameter('PM1', { xParameter: 'X', yParameter: 'Y' });
      validationParameters.setParameter('PM2', { xParameter: 'X', yParameter: 'Y' });

      const validationEndpoint = `${endpoint}/${number}/${Constants.Licensee.ENDPOINT_PATH_VALIDATE}`;

      const result = await LicenseeService.validate(context, number, validationParameters, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        validationEndpoint,
        {
          productNumber: 'P1',
          someLicenseeProperty: 'Z',
          productModuleNumber0: 'PM1',
          productModuleNumber1: 'PM2',
          xParameter0: 'X',
          xParameter1: 'X',
          yParameter0: 'Y',
          yParameter1: 'Y',
        },
        config,
      );

      const expected = raw
        .filter(({ type }) => type === Constants.Validation.TYPE)
        .map(({ props }) => ({
          productModuleNumber: props.productModuleNumber,
          valid: JSON.parse(props.valid || '') as boolean,
        }));

      expect(Object.values(result.validations)).toEqual(expected);
    });
  });

  describe('transfer', () => {
    it('transfer a licensee', async () => {
      const number = 'L1';
      const sourceLicenseeNumber = 'SL1';

      vi.mocked(Service).post.mockResolvedValueOnce({ status: 200 } as AxiosResponse<NlicResponse>);

      const transferEndpoint = `${endpoint}/${number}/${Constants.Licensee.ENDPOINT_PATH_TRANSFER}`;

      await LicenseeService.transfer(context, number, sourceLicenseeNumber, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(context, transferEndpoint, { sourceLicenseeNumber }, config);
    });
  });
});
