/**
 * Converts an object into a map of type Record<string, string>, where the value of each object property is converted
 * to a string.
 * If the property's value is `undefined`, it will be replaced with an empty string.
 * If the value is already a string, it will remain unchanged.
 * If the value is Date instance, it wll be replaced with an ISO format date string.
 * For complex types (objects, arrays, etc.), the value will be serialized into a JSON string.
 * If serialization fails, the value will be converted to a string using `String()`.
 *
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 *
 * @param obj - The object to be converted into a map.
 * @param options
 * @returns A map (Record<string, string>) with converted property values from the object.
 */
export default <T extends object>(obj: T, options: { ignore?: string[] } = {}): Record<string, string> => {
  const map: Record<string, string> = {};

  const { ignore = [] } = options;

  Object.entries(obj).forEach(([k, v]) => {
    // ignore keys
    if (ignore.includes(k)) {
      return;
    }

    if (typeof v === 'function') {
      // ignore functions
      return;
    } else if (v === undefined) {
      map[k] = ''; // if the value is `undefined`, replace it with an empty string
    } else if (typeof v === 'string') {
      map[k] = v; // If the value is already a string, leave it unchanged
    } else if (v instanceof Date) {
      // if the value is Date, convert it to ISO string
      map[k] = v.toISOString();
    } else if (typeof v !== 'object' || v === null) {
      // If it's not an object (or is null), convert it to string
      map[k] = String(v);
    } else {
      // Try to serialize the object or array into JSON
      try {
        map[k] = JSON.stringify(v);
      } catch {
        map[k] = String(v);
      }
    }
  });

  return map;
};
