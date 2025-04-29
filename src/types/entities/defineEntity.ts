/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
export interface EntityMethods<T extends object> {
  set<K extends keyof T>(key: K, value: T[K]): void;

  get<K extends keyof T, D = undefined>(key: K, def?: D): T[K] | D;

  has<K extends keyof T>(key: K): boolean;

  setProperty<K extends keyof T>(key: K, value: T[K]): void;

  addProperty<K extends keyof T>(key: K, value: T[K]): void;

  getProperty<K extends keyof T, D = undefined>(key: K, def?: D): T[K] | D;

  hasProperty<K extends keyof T>(key: K): boolean;

  setProperties(properties: Partial<T>): void;

  serialize(): Record<string, string>;
}

export interface Proto {
  prototype: object;
}

export type PropGetEventListener<T> = (obj: T, prop: string | symbol, receiver: unknown) => void;
export type PropSetEventListener<T> = (obj: T, prop: string | symbol, value: unknown, receiver: unknown) => void;

export type Entity<T extends object, M extends object> = T & M & EntityMethods<T>;
