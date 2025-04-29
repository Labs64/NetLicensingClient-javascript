/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import type { NotificationEvent } from '@/types/constants/NotificationEvent';
import type { NotificationProtocol } from '@/types/constants/NotificationProtocol';
import type { Entity } from '@/types/entities/defineEntity';

export type NotificationProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  name?: string;
  protocol?: NotificationProtocol;
  events?: NotificationEvent[];
  payload?: string;
  endpoint?: string;
} & T;

export interface NotificationMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;

  setName(name: string): void;

  getName<D = undefined>(def?: D): string | D;

  setProtocol(protocol: NotificationProtocol): void;

  getProtocol<D = undefined>(def?: D): NotificationProtocol | D;

  setEvents(events: NotificationEvent[]): void;

  getEvents<D = undefined>(def?: D): NotificationEvent[] | D;

  addEvent(event: NotificationEvent): void;

  setPayload(payload: string): void;

  getPayload<D = undefined>(def?: D): string | D;

  setEndpoint(endpoint: string): void;

  getEndpoint<D = undefined>(def?: D): string | D;

  serialize(): Record<string, string>;
}

export type Notification<T extends object = object> = Entity<NotificationProps<T>, NotificationMethods>;
