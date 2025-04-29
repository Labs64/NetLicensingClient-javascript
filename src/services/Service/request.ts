import { AxiosRequestConfig, Method, AxiosRequestHeaders, AxiosResponse, AxiosError, AxiosInstance } from 'axios';

// constants
import SecurityMode from '@/constants/SecurityMode';

// errors
import NlicError from '@/errors/NlicError';

// types
import type { NlicResponse } from '@/types/api/response';
import type { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';

// package.json
import pkg from '../../../package.json';

// service
import { getAxiosInstance, setLastResponse, setInfo } from './instance';
import toQueryString from './toQueryString';

export default async (
  context: Context,
  method: Method,
  endpoint: string,
  data?: Record<string, unknown>,
  config?: RequestConfig,
): Promise<AxiosResponse<NlicResponse>> => {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  };

  // only node.js has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    headers['User-agent'] = `NetLicensing/Javascript ${pkg.version}/node&${process.version}`;
  }

  const req: AxiosRequestConfig = {
    method,
    headers,
    url: encodeURI(`${context.getBaseUrl()}/${endpoint}`),
    responseType: 'json',
    transformRequest: (d: unknown, h: AxiosRequestHeaders) => {
      if (h['Content-Type'] === 'application/x-www-form-urlencoded') {
        return toQueryString(d as Record<string, unknown>);
      }

      if (!h['NetLicensing-Origin']) {
        h['NetLicensing-Origin'] = `NetLicensing/Javascript ${pkg.version}`;
      }

      return d;
    },
  };

  if (['put', 'post', 'patch'].indexOf(method.toLowerCase()) >= 0) {
    if (req.method === 'post') {
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    req.data = data;
  } else {
    req.params = data;
  }

  switch (context.getSecurityMode()) {
    // Basic Auth
    case SecurityMode.BASIC_AUTHENTICATION:
      {
        if (!context.getUsername()) {
          throw new NlicError('Missing parameter "username"');
        }

        if (!context.getPassword()) {
          throw new NlicError('Missing parameter "password"');
        }

        req.auth = {
          username: context.getUsername(),
          password: context.getPassword(),
        };
      }
      break;
    // ApiKey Auth
    case SecurityMode.APIKEY_IDENTIFICATION:
      if (!context.getApiKey()) {
        throw new NlicError('Missing parameter "apiKey"');
      }

      headers.Authorization = `Basic ${btoa(`apiKey:${context.getApiKey()}`)}`;
      break;
    // without authorization
    case SecurityMode.ANONYMOUS_IDENTIFICATION:
      break;
    default:
      throw new NlicError('Unknown security mode');
  }

  const instance: AxiosInstance = config?.axiosInstance || getAxiosInstance();

  try {
    const response: AxiosResponse<NlicResponse> = await instance(req);
    const info = response.data.infos?.info || [];

    setLastResponse(response);
    setInfo(info);

    if (config?.onResponse) {
      config.onResponse(response);
    }

    if (info.length > 0) {
      if (config?.onInfo) {
        config.onInfo(info);
      }

      const eInfo = info.find(({ type }) => type === 'ERROR');

      if (eInfo) {
        throw new NlicError(eInfo.value, eInfo.id, response.config, response.request, response);
      }
    }

    return response;
  } catch (e) {
    const error = e as AxiosError;

    const response = error.response;
    const info = (response?.data as NlicResponse)?.infos?.info || [];

    setLastResponse(response || null);
    setInfo(info);

    if ((e as AxiosError).isAxiosError) {
      let message = (e as AxiosError).message;

      if (response?.data && info.length > 0) {
        const eInfo = info.find(({ type }) => type === 'ERROR');

        if (eInfo) {
          message = eInfo.value;
        }
      }

      throw new NlicError(
        message,
        error.code,
        error.config,
        error.request,
        error.response as AxiosResponse<NlicResponse>,
      );
    }

    throw e;
  }
};
