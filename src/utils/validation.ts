/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

export const isDefined = (value: unknown): boolean => {
  return typeof value !== 'undefined' && typeof value !== 'function';
};

export const isValid = (value: unknown): boolean => {
  if (!isDefined(value)) {
    return false;
  }

  if (typeof value === 'number') {
    return !Number.isNaN(value);
  }

  return true;
};

export const ensureNotNull = (value: unknown, name: string): void => {
  if (value === null) {
    throw new TypeError(`Parameter "${name}" cannot be null.`);
  }

  if (!isValid(value)) {
    throw new TypeError(`Parameter "${name}" has an invalid value.`);
  }
};

export const ensureNotEmpty = (value: unknown, name: string): void => {
  ensureNotNull(value, name);

  if (!value) {
    throw new TypeError(`Parameter "${name}" cannot be empty.`);
  }
};

export default {
  isDefined,
  isValid,
  ensureNotNull,
  ensureNotEmpty,
};
