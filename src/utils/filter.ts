/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
const FILTER_DELIMITER = ';';
const FILTER_PAIR_DELIMITER = '=';

export const encode = (filter: Record<string, string | boolean | number>): string => {
  return Object.keys(filter)
    .map((key) => `${key}${FILTER_PAIR_DELIMITER}${String(filter[key])}`)
    .join(FILTER_DELIMITER);
};

export const decode = (filter: string): Record<string, string> => {
  const result: Record<string, string> = {};

  filter.split(FILTER_DELIMITER).forEach((v) => {
    const [name, value] = v.split(FILTER_PAIR_DELIMITER);
    result[name] = value;
  });

  return result;
};

export default { encode, decode };
