import { AxiosInstance, AxiosResponse, Method } from 'axios';

// service
import { setAxiosInstance, getAxiosInstance, getLastResponse, getInfo } from '@/services/Service/instance';
import { get, post, del } from '@/services/Service/methods';
import request from '@/services/Service/request';
import toQueryString from '@/services/Service/toQueryString';

// types
import { Info, NlicResponse } from '@/types/api/response';
import { RequestConfig, Service } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';

export { get, post, del, request, toQueryString };

const service: Service = {
  setAxiosInstance(this: void, instance: AxiosInstance) {
    setAxiosInstance(instance);
  },

  getAxiosInstance(this: void): AxiosInstance {
    return getAxiosInstance();
  },

  getLastHttpRequestInfo(this: void): AxiosResponse | null {
    return getLastResponse();
  },

  getInfo(this: void): Info[] {
    return getInfo();
  },

  get(
    this: void,
    context: Context,
    endpoint: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>> {
    return get(context, endpoint, data, config);
  },

  post(
    this: void,
    context: Context,
    endpoint: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>> {
    return post(context, endpoint, data, config);
  },

  delete(
    this: void,
    context: Context,
    endpoint: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>> {
    return del(context, endpoint, data, config);
  },

  request(
    this: void,
    context: Context,
    method: Method,
    endpoint: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>> {
    return request(context, method, endpoint, data, config);
  },

  toQueryString<T extends Record<string, unknown>>(this: void, data: T): string {
    return toQueryString(data);
  },
};

export default service;
