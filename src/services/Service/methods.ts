import type { AxiosResponse } from 'axios';

// types
import type { NlicResponse } from '@/types/api/response';
import type { RequestConfig } from '@/types/services/Service';
import type { ContextInstance } from '@/types/vo/Context';

// service
import request from './request';

export const get = (
  context: ContextInstance,
  endpoint: string,
  data?: Record<string, unknown>,
  config?: RequestConfig,
): Promise<AxiosResponse<NlicResponse>> => request(context, 'get', endpoint, data, config);

export const post = (
  context: ContextInstance,
  endpoint: string,
  data?: Record<string, unknown>,
  config?: RequestConfig,
): Promise<AxiosResponse<NlicResponse>> => request(context, 'post', endpoint, data, config);

export const del = (
  context: ContextInstance,
  endpoint: string,
  data?: Record<string, unknown>,
  config?: RequestConfig,
): Promise<AxiosResponse<NlicResponse>> => request(context, 'delete', endpoint, data, config);
