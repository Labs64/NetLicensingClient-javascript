/**
 * JS representation of the Notification Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/notification-services
 *
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// constants
import Constants from '@/constants';

// converters
import itemToNotification from '@/converters/itemToNotification';

// services
import Service from '@/services/Service';

// types
import { ItemPagination, NlicResponse } from '@/types/api/response';
import { NotificationProps, NotificationEntity } from '@/types/entities/Notification';
import { INotificationService } from '@/types/services/NotificationService';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

// utils
import { encode } from '@/utils/filter';
import { ensureNotEmpty, ensureNotNull } from '@/utils/validation';

// vo
import Page from '@/vo/Page';
import { Persisted } from '@/types/entities';

const endpoint = Constants.Notification.ENDPOINT_PATH;
const type = Constants.Notification.TYPE;

const notificationService: INotificationService = {
  /**
   * Gets notification by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/notification-services#get-notification
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the notification number
   * @param number string
   *
   * (optional) service request config
   * @param config
   *
   * return the notification object in promise
   * @returns {Promise}
   */
  async get<T extends object = NotificationProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<NotificationEntity<Persisted<T>>> {
    ensureNotEmpty(number, 'number');

    const response = await Service.get(context, `${endpoint}/${number}`, {}, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToNotification<Persisted<T>>(item);
  },

  /**
   * Returns notifications of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/notification-services#notifications-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * (optional) service request config
   * @param config
   *
   * array of notification entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  async list<T extends object = NotificationProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<NotificationEntity<Persisted<T>>[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const list: NotificationEntity<Persisted<T>>[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToNotification<Persisted<T>>(v));

    return Page(list || [], items as ItemPagination);
  },

  /**
   * Creates new notification with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/notification-services#create-notification
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param notification NetLicensing.Notification
   *
   * (optional) service request config
   * @param config
   *
   * return the newly created notification object in promise
   * @returns {Promise}
   */
  async create<T extends object = NotificationProps>(
    context: ContextInstance,
    notification: NotificationEntity<T>,
    config?: RequestConfig,
  ): Promise<NotificationEntity<Persisted<T>>> {
    ensureNotNull(notification, 'notification');

    const response = await Service.post(context, endpoint, notification.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToNotification<Persisted<T>>(item);
  },

  /**
   * Updates notification properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/notification-services#update-notification
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * notification number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param notification NetLicensing.Notification
   *
   * (optional) service request config
   * @param config
   *
   * updated notification in promise.
   * @returns {Promise}
   */
  async update<T extends object = NotificationProps>(
    context: ContextInstance,
    number: string,
    notification: NotificationEntity<T>,
    config?: RequestConfig,
  ): Promise<NotificationEntity<Persisted<T>>> {
    ensureNotEmpty(number, 'number');
    ensureNotNull(notification, 'notification');

    const response = await Service.post(context, `${endpoint}/${number}`, notification.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToNotification<Persisted<T>>(item);
  },

  /**
   * Deletes notification.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/notification-services#delete-notification
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * notification number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * (optional) service request config
   * @param config
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete(
    context: ContextInstance,
    number: string,
    forceCascade?: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>> {
    ensureNotEmpty(number, 'number');

    return Service.delete(context, `${endpoint}/${number}`, { forceCascade: Boolean(forceCascade) }, config);
  },
};

export default notificationService;
