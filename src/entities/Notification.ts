/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// entity factory
import defineEntity from '@/entities/defineEntity';
import { NotificationEvent } from '@/types/constants/NotificationEvent';
import { NotificationProtocol } from '@/types/constants/NotificationProtocol';

// types
import { NotificationMethods, NotificationProps, Notification as INotification } from '@/types/entities/Notification';

// utils
import { set, get } from '@/utils/helpers';
import serialize from '@/utils/serialize';

/**
 * NetLicensing Notification entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the notification. Vendor can assign this number when creating a notification or
 * let NetLicensing generate one.
 * @property string number
 *
 * If set to false, the notification is disabled. The notification will not be fired when the event triggered.
 * @property boolean active
 *
 * Notification name.
 * @property string name
 *
 * Notification type. Indicate the method of transmitting notification, ex: EMAIL, WEBHOOK.
 * @property float type
 *
 * Comma separated string of events that fire the notification when emitted.
 * @property string events
 *
 * Notification response payload.
 * @property string payload
 *
 * Notification response url. Optional. Uses only for WEBHOOK type notification.
 * @property string url
 *
 * Arbitrary additional user properties of string type may be associated with each notification.
 * The name of user property must not be equal to any of the fixed property names listed above and must be none of id,
 * deleted.
 */

const Notification = function <T extends object>(
  properties: NotificationProps<T> = {} as NotificationProps<T>,
): INotification<T> {
  const props: NotificationProps = { ...properties };

  const methods: NotificationMethods = {
    setActive(active: boolean): void {
      set(props, 'active', active);
    },

    getActive<D = undefined>(def?: D): boolean | D {
      return get(props, 'active', def) as boolean | D;
    },

    setNumber(number: string): void {
      set(props, 'number', number);
    },

    getNumber<D = undefined>(def?: D): string | D {
      return get(props, 'number', def) as string | D;
    },

    setName(name: string): void {
      set(props, 'name', name);
    },

    getName<D = undefined>(def?: D): string | D {
      return get(props, 'name', def) as string | D;
    },

    setProtocol(protocol: NotificationProtocol): void {
      set(props, 'protocol', protocol);
    },

    getProtocol<D = undefined>(def?: D): NotificationProtocol | D {
      return get(props, 'protocol', def) as NotificationProtocol | D;
    },

    setEvents(events: NotificationEvent[]): void {
      set(props, 'events', events);
    },

    getEvents<D = undefined>(def?: D): NotificationEvent[] | D {
      return get(props, 'events', def) as NotificationEvent[] | D;
    },

    addEvent(event: NotificationEvent): void {
      const events = this.getEvents([]) as NotificationEvent[];
      events.push(event);

      this.setEvents(events);
    },

    setPayload(payload: string): void {
      set(props, 'payload', payload);
    },

    getPayload<D = undefined>(def?: D): string | D {
      return get(props, 'payload', def) as string | D;
    },

    setEndpoint(endpoint: string): void {
      set(props, 'endpoint', endpoint);
    },

    getEndpoint<D = undefined>(def?: D): string | D {
      return get(props, 'endpoint', def) as string | D;
    },

    serialize(): Record<string, string> {
      const data = serialize(props);

      data.events = this.getEvents([]).join(',');

      return data;
    },
  };

  return defineEntity(props as NotificationProps<T>, methods, Notification);
};

export default Notification;
