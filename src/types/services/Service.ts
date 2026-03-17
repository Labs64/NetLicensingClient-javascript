/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import type { AxiosInstance, AxiosResponse, Method } from 'axios';
import { Info, NlicResponse } from '@/types/api/response';
import type { ContextInstance } from '@/types/vo/Context';

export type AxiosRequestClient = Pick<AxiosInstance, 'request'>;

export interface RequestConfig {
  onInfo?: (info: Info[]) => void;
  onResponse?: (response: AxiosResponse) => void;
  axiosInstance?: AxiosRequestClient;
}

export interface IService {
  setAxiosInstance(this: void, instance: AxiosRequestClient): void;

  getAxiosInstance(this: void): AxiosRequestClient;

  // @deprecated use getResponse in RequestConfig
  getLastHttpRequestInfo(this: void): AxiosResponse | null;

  // @deprecated use getInfo in RequestConfig
  getInfo(this: void): Info[];

  /**
   * this: void
   * @param context
   * @param endpoint
   * @param data
   * @param config
   */
  get(
    this: void,
    context: ContextInstance,
    endpoint: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;

  post(
    this: void,
    context: ContextInstance,
    endpoint: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;

  delete(
    this: void,
    context: ContextInstance,
    endpoint: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;

  request(
    this: void,
    context: ContextInstance,
    method: Method,
    endpoint: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;

  toQueryString<T extends Record<string, unknown>>(data: T): string;
}
