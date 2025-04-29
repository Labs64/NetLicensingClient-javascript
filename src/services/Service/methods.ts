import type { AxiosResponse } from 'axios';

// types
import type { NlicResponse } from '@/types/api/response';
import type { RequestConfig } from '@/types/services/Service';
import type { Context } from '@/types/vo/Context';

// service
import request from './request';

export const get = (
  context: Context,
  endpoint: string,
  data?: Record<string, unknown>,
  config?: RequestConfig,
): Promise<AxiosResponse<NlicResponse>> => request(context, 'get', endpoint, data, config);

export const post = (
  context: Context,
  endpoint: string,
  data?: Record<string, unknown>,
  config?: RequestConfig,
): Promise<AxiosResponse<NlicResponse>> => request(context, 'post', endpoint, data, config);

export const del = (
  context: Context,
  endpoint: string,
  data?: Record<string, unknown>,
  config?: RequestConfig,
): Promise<AxiosResponse<NlicResponse>> => request(context, 'delete', endpoint, data, config);
