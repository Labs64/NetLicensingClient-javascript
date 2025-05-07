/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import type {
  Entity,
  EntityMethods,
  Proto,
  PropGetEventListener,
  PropSetEventListener,
} from '@/types/entities/defineEntity';

// utils
import { set, has, get } from '@/utils/helpers';
import serialize from '@/utils/serialize';

const defineEntity = function <P extends Proto, T extends object, M extends object>(
  props: T,
  methods: M,
  proto: P = {} as P,
  options?: { set?: PropSetEventListener<T>; get?: PropGetEventListener<T> },
) {
  const listeners: { set: PropSetEventListener<T>[]; get: PropGetEventListener<T>[] } = {
    set: [],
    get: [],
  };

  if (options?.get) {
    listeners.get.push(options.get);
  }

  if (options?.set) {
    listeners.set.push(options.set);
  }

  const base: EntityMethods<T> = {
    set(this: void, key, value): void {
      set(props, key, value);
    },

    get(this: void, key, def) {
      return get(props, key, def);
    },

    has(this: void, key) {
      return has(props, key);
    },

    // Aliases
    setProperty(key, value) {
      this.set(key, value);
    },

    addProperty(key, value) {
      this.set(key, value);
    },

    getProperty(key, def) {
      return this.get(key, def);
    },

    hasProperty(key) {
      return this.has(key);
    },

    setProperties(properties) {
      Object.entries(properties).forEach(([k, v]) => {
        this.set(k as keyof T, v as T[keyof T]);
      });
    },

    serialize(this: void) {
      return serialize(props);
    },
  };

  return new Proxy(props, {
    get(obj: T, prop: string | symbol, receiver) {
      if (Object.hasOwn(methods, prop)) {
        return methods[prop as keyof typeof methods];
      }

      if (Object.hasOwn(base, prop)) {
        return base[prop as keyof typeof base];
      }

      listeners.get.forEach((l) => {
        l(obj, prop, receiver);
      });

      return Reflect.get(obj, prop, receiver);
    },

    set(obj, prop, value, receiver) {
      listeners.set.forEach((l) => {
        l(obj, prop, value, receiver);
      });

      return Reflect.set(obj, prop, value, receiver);
    },

    getPrototypeOf() {
      return proto.prototype || null;
    },
  }) as Entity<T, M>;
};

export default defineEntity;
