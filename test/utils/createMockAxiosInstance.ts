import type { AxiosResponse } from 'axios';
import { vi } from 'vitest';
import { AxiosRequestClient } from '@/types';

export const createMockAxiosRequestClient = (
  response?: Partial<AxiosResponse>,
): AxiosRequestClient & {
  request: ReturnType<typeof vi.fn>;
} => {
  const defaultResponse = {
    data: {},
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
    ...response,
  } as AxiosResponse;

  return {
    request: vi.fn().mockResolvedValue(defaultResponse),
  };
};

export default createMockAxiosRequestClient;