import { AxiosResponse } from 'axios';
import { describe, it, expect, vi, afterEach } from 'vitest';

// constants
import Constants from '@/constants';
import NotificationProtocol from '@/constants/NotificationProtocol';

// entities
import Notification from '@/entities/Notification';

// services
import NotificationService from '@/services/NotificationService';
import Service from '@/services/Service';

// types
import { NlicResponse } from '@/types/api/response';

// vo
import Context from '@/vo/Context';

// test utils
import { createMockItem, createMockResponse } from '@test-utils/nlic';

// mocking
vi.mock('@/services/Service');

describe('NotificationService', () => {
  const context = Context({ username: 'demo', password: '123' });
  const config = {};
  const endpoint = Constants.Notification.ENDPOINT_PATH;
  const itemType = Constants.Notification.TYPE;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('returns a valid notification', async () => {
      const number = 'N1';

      const props = {
        number,
        active: 'true',
        name: 'Sample name',
        protocol: NotificationProtocol.WEBHOOK,
        events: 'LICENSEE_CREATED,LICENSE_CREATED',
        payload: '{$}',
        endpoint: 'http://some-endpoint.test',
      };

      const items = [createMockItem(itemType, props), createMockItem('Product', { number: 'P1' })];

      vi.mocked(Service).get.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const notification = await NotificationService.get(context, number, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, `${endpoint}/${number}`, {}, config);

      expect(notification).toStrictEqual({
        number,
        active: true,
        name: 'Sample name',
        protocol: NotificationProtocol.WEBHOOK,
        events: ['LICENSEE_CREATED', 'LICENSE_CREATED'],
        payload: '{$}',
        endpoint: 'http://some-endpoint.test',
      });
    });
  });

  describe('list', () => {
    it('returns array of notifications', async () => {
      const raw = [
        { type: itemType, props: { number: 'N1', active: 'false', customProperty: 'A' } },
        { type: itemType, props: { number: 'N2', active: 'true', customProperty: 'B' } },
        { type: 'Product', props: { number: 'P1', active: 'true', customProperty: 'C' } },
        { type: 'License', props: { number: 'L1', active: 'true', customProperty: 'D' } },
      ];

      const items = raw.map(({ type, props }) => createMockItem(type, props));
      vi.mocked(Service).get.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await NotificationService.list<{ customProperty: string }>(context, null, config);

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

      const result = await NotificationService.list(context, null, config);

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
      await NotificationService.list(context, { page: 2, items: 10 }, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.get).toHaveBeenCalledWith(context, endpoint, { filter: 'page=2;items=10' }, config);
    });
  });

  describe('create', () => {
    it('creates a notification', async () => {
      const notification = Notification({
        number: 'N1',
        active: false,
        events: ['LICENSEE_CREATED', 'LICENSE_CREATED'],
        customProperty: 'X',
      });

      const items = [
        createMockItem(itemType, {
          number: 'N1',
          active: 'false',
          events: 'LICENSEE_CREATED,LICENSE_CREATED',
          customProperty: 'X',
        }),
        createMockItem('Product', { number: 'P1', active: 'true', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({
        data: createMockResponse(items),
      } as AxiosResponse<NlicResponse>);

      const result = await NotificationService.create(context, notification, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(
        context,
        endpoint,
        {
          number: 'N1',
          active: 'false',
          events: 'LICENSEE_CREATED,LICENSE_CREATED',
          customProperty: 'X',
        },
        config,
      );

      expect(result).toStrictEqual(notification);
    });
  });

  describe('update', () => {
    it('updates a notification', async () => {
      const number = 'N1';

      const notification = Notification({
        number,
        active: false,
        events: ['LICENSEE_CREATED', 'LICENSE_CREATED'],
        customProperty: 'X',
      });

      const items = [
        createMockItem(itemType, {
          number,
          active: 'false',
          events: 'LICENSEE_CREATED,LICENSE_CREATED',
          customProperty: 'X',
        }),
        createMockItem('Product', { number: 'P1', active: 'ture', customProperty: 'Y' }),
      ];

      vi.mocked(Service).post.mockResolvedValueOnce({ data: createMockResponse(items) } as AxiosResponse<NlicResponse>);

      const result = await NotificationService.update(context, number, notification, config);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.post).toHaveBeenCalledWith(context, `${endpoint}/${number}`, notification.serialize(), config);

      expect(result).toStrictEqual(notification);
    });
  });

  describe('delete', () => {
    it('deletes a notification', async () => {
      vi.mocked(Service).delete.mockResolvedValueOnce({ status: 204 } as AxiosResponse<NlicResponse>);

      const number = 'N1';
      const response = await NotificationService.delete(context, number, true, config);

      expect(response.status).toBe(204);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(Service.delete).toHaveBeenCalledWith(context, `${endpoint}/${number}`, { forceCascade: true }, config);
    });
  });
});
