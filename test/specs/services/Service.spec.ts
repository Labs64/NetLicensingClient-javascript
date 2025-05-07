import { describe, it, expect, vi, beforeEach } from 'vitest';

// services
import Service from '@/services/Service';

// types
import type { Info } from '@/types/api/response';
import type { RequestConfig } from '@/types/services/Service';
import type { ContextInstance as IContext } from '@/types/vo/Context';

// vo
import Context from '@/vo/Context';

// utils
import createMockAxiosInstance from '@test-utils/createMockAxiosInstance';
import { createMockItem, createMockResponse } from '@test-utils/nlic';

describe('Service', () => {
  let mockAxios: ReturnType<typeof createMockAxiosInstance>;

  beforeEach(() => {
    mockAxios = createMockAxiosInstance();
    Service.setAxiosInstance(mockAxios);
  });

  describe('axios integration', () => {
    it('calls axios and triggers response/info callbacks', async () => {
      const infos = [{ id: 'SomeInfo', type: 'INFO', value: 'Test warning' }];
      const items = [createMockItem('SomeItem', { number: 'N1' })];
      const data = createMockResponse(items, infos as Info[]);

      mockAxios = createMockAxiosInstance({ data });
      Service.setAxiosInstance(mockAxios);

      const context = Context({ username: 'demo', password: '123' });
      const onResponse = vi.fn();
      const onInfo = vi.fn();

      const response = await Service.get(context, 'token/123', {}, { onResponse, onInfo });

      expect(mockAxios).toHaveBeenCalledOnce();
      expect(onResponse).toHaveBeenCalledWith(response);
      expect(onInfo).toHaveBeenCalledWith(infos);
      expect(response).toMatchObject({ data });
    });
  });

  describe.each([
    ['get', Service.get],
    ['post', Service.post],
    ['delete', Service.delete],
    [
      'request',
      (ctx: IContext, url: string, data?: Record<string, unknown>, cfg?: RequestConfig) =>
        Service.request(ctx, 'put', url, data, cfg),
    ],
  ])('%s method', (methodName, method) => {
    it('includes default headers and parameters', async () => {
      const context = Context({ username: 'demo', password: '123' });
      const payload = { someData: 'value' };

      await method(context, 'some-url', payload, { axiosInstance: mockAxios });

      expect(mockAxios).toHaveBeenCalledWith(
        expect.objectContaining({
          headers: expect.objectContaining({ Accept: 'application/json' }) as Record<string, string>,
          url: expect.stringContaining('some-url') as string,
          ...(methodName === 'post' || methodName === 'request' ? { data: payload } : { params: payload }),
        }),
      );
    });

    describe('auth strategies', () => {
      it('uses basic auth when username/password provided', async () => {
        const context = Context({ username: 'demo', password: '123' });

        await method(context, 'some-url', {}, { axiosInstance: mockAxios });

        expect(mockAxios).toHaveBeenCalledWith(
          expect.objectContaining({
            auth: {
              username: context.getUsername(),
              password: context.getPassword(),
            },
          }),
        );
      });

      it('uses apiKey when securityMode is APIKEY', async () => {
        const context = Context({ securityMode: 'APIKEY', apiKey: 'some-api-key' });

        await method(context, 'some-url', {}, { axiosInstance: mockAxios });

        expect(mockAxios).toHaveBeenCalledWith(
          expect.objectContaining({
            headers: expect.objectContaining({
              Authorization: `Basic ${btoa('apiKey:some-api-key')}`,
            }) as Record<string, string>,
          }),
        );
      });
    });
  });

  describe('toQueryString', () => {
    it('serializes flat objects', () => {
      expect(Service.toQueryString({ name: 'John', age: 30 })).toBe('name=John&age=30');
    });

    it('serializes nested objects', () => {
      expect(Service.toQueryString({ user: { name: 'John', age: 30 } })).toBe('user[name]=John&user[age]=30');
    });

    it('serializes arrays', () => {
      expect(Service.toQueryString({ tags: ['tag1', 'tag2'] })).toBe('tags=tag1&tags=tag2');
    });

    it('serializes dates', () => {
      const str = Service.toQueryString({ createdAt: new Date('2025-04-22T00:00:00Z') });
      expect(str).toContain('createdAt=2025-04-22T00%3A00%3A00.000Z');
    });

    it('skips null and undefined values', () => {
      expect(Service.toQueryString({ name: 'John', age: null, address: undefined })).toBe('name=John');
    });
  });
});
