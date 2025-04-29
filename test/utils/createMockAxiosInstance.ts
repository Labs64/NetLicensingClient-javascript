import type { AxiosInstance, AxiosResponse } from 'axios';
import { vi } from 'vitest';

export const createMockAxiosInstance = (response?: Partial<AxiosResponse>): AxiosInstance => {
  const defaultResponse = {
    data: {},
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
    ...response,
  } as AxiosResponse;

  const handler = vi.fn().mockResolvedValue(defaultResponse);

  const instance = Object.assign(handler, {
    request: vi.fn().mockResolvedValue(defaultResponse),
    get: vi.fn().mockResolvedValue(defaultResponse),
    delete: vi.fn().mockResolvedValue(defaultResponse),
    head: vi.fn().mockResolvedValue(defaultResponse),
    options: vi.fn().mockResolvedValue(defaultResponse),
    post: vi.fn().mockResolvedValue(defaultResponse),
    put: vi.fn().mockResolvedValue(defaultResponse),
    patch: vi.fn().mockResolvedValue(defaultResponse),
    defaults: {},
    interceptors: {
      request: { use: vi.fn(), eject: vi.fn() },
      response: { use: vi.fn(), eject: vi.fn() },
    },
  });

  return instance as unknown as AxiosInstance;
};

export default createMockAxiosInstance;
