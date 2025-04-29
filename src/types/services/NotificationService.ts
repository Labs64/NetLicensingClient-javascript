/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { Notification, NotificationProps } from '@/types/entities/Notification';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';

export interface NotificationService {
  get<T extends object = NotificationProps>(
    context: Context,
    number: string,
    config?: RequestConfig,
  ): Promise<Notification<T>>;

  list<T extends object = NotificationProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<Notification<T>[]>>;

  create<T extends object = NotificationProps>(
    context: Context,
    notification: Notification<T>,
    config?: RequestConfig,
  ): Promise<Notification<T>>;

  update<T extends object = NotificationProps>(
    context: Context,
    number: string,
    notification: Notification<T>,
    config?: RequestConfig,
  ): Promise<Notification<T>>;

  delete(
    context: Context,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
