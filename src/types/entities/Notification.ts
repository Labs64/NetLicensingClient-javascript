/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { RequiredProps } from '@/types';
import type { NotificationEventValues } from '@/types/constants/NotificationEvent';
import type { NotificationProtocolValues } from '@/types/constants/NotificationProtocol';
import type { Entity } from '@/types/entities/defineEntity';

export type NotificationProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  name?: string;
  protocol?: NotificationProtocolValues;
  events?: NotificationEventValues[];
  payload?: string;
  endpoint?: string;
} & T;

export type SavedNotificationProps<T extends object = object> = RequiredProps<
  NotificationProps,
  'active' | 'number' | 'name' | 'protocol' | 'events' | 'endpoint'
> &
  NotificationProps<T>;

export interface NotificationMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;

  setName(name: string): void;

  getName<D = undefined>(def?: D): string | D;

  setProtocol(protocol: NotificationProtocolValues): void;

  getProtocol<D = undefined>(def?: D): NotificationProtocolValues | D;

  setEvents(events: NotificationEventValues[]): void;

  getEvents<D = undefined>(def?: D): NotificationEventValues[] | D;

  addEvent(event: NotificationEventValues): void;

  setPayload(payload: string): void;

  getPayload<D = undefined>(def?: D): string | D;

  setEndpoint(endpoint: string): void;

  getEndpoint<D = undefined>(def?: D): string | D;

  serialize(): Record<string, string>;
}

export type NotificationEntity<T extends object = object> = Entity<NotificationProps<T>, NotificationMethods>;
