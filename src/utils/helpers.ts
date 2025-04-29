export const has = <T extends object, K extends keyof T>(obj: T, key: K): boolean => {
  return Object.hasOwn(obj, key);
};

export const set = <T extends object, K extends keyof T>(obj: T, key: K, value: T[K]): void => {
  obj[key] = value;
};

export const get = <T extends object, K extends keyof T, D = undefined>(obj: T, key: K, def?: D): T[K] | D => {
  return has(obj, key) ? obj[key] : (def as D);
};

export default {
  has,
  set,
  get,
};
