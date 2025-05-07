/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { NotificationEntity, NotificationProps } from '@/types/entities/Notification';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

export interface INotificationService {
  get<T extends object = NotificationProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<NotificationEntity<T>>;

  list<T extends object = NotificationProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<NotificationEntity<T>[]>>;

  create<T extends object = NotificationProps>(
    context: ContextInstance,
    notification: NotificationEntity<T>,
    config?: RequestConfig,
  ): Promise<NotificationEntity<T>>;

  update<T extends object = NotificationProps>(
    context: ContextInstance,
    number: string,
    notification: NotificationEntity<T>,
    config?: RequestConfig,
  ): Promise<NotificationEntity<T>>;

  delete(
    context: ContextInstance,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
