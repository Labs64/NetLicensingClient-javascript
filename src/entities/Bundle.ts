/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

// types
import type { BundleProps, BundleMethods, BundleEntity } from '@/types/entities/Bundle';

// utils
import { set, get } from '@/utils/helpers';
import serialize from '@/utils/serialize';

// entity factory
import defineEntity from './defineEntity';

/**
 * NetLicensing Bundle entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the bundle. Vendor can assign this number when creating a bundle or
 * let NetLicensing generate one.
 * @property string number
 *
 * If set to false, the bundle is disabled.
 * @property boolean active
 *
 * Bundle name.
 * @property string name
 *
 * Price for the bundle. If >0, it must always be accompanied by the currency specification.
 * @property number price
 *
 * Specifies currency for the bundle price. Check data types to discover which currencies are
 * supported.
 * @property string currency
 *
 * The bundle includes a set of templates, each identified by a unique template number.
 * @property string[] licenseTemplateNumbers
 *
 * Arbitrary additional user properties of string type may be associated with each bundle. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 */
const Bundle = function <T extends object>(properties: BundleProps<T> = {} as BundleProps<T>): BundleEntity<T> {
  const props: BundleProps = { ...properties };

  const methods: BundleMethods = {
    setActive(this: void, active: boolean) {
      set(props, 'active', active);
    },

    getActive<D = undefined>(this: void, def?: D): boolean | D {
      return get(props, 'active', def) as boolean | D;
    },

    setNumber(this: void, number: string) {
      set(props, 'number', number);
    },

    getNumber<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'number', def) as string | D;
    },

    setName(this: void, name: string): void {
      set(props, 'name', name);
    },

    getName<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'name', def) as string | D;
    },

    setPrice(this: void, price: number): void {
      set(props, 'price', price);
    },

    getPrice<D = undefined>(this: void, def?: D): number | D {
      return get(props, 'price', def) as number | D;
    },

    setCurrency(this: void, currency: string): void {
      set(props, 'currency', currency);
    },

    getCurrency<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'currency', def) as string | D;
    },

    setLicenseTemplateNumbers(this: void, numbers: string[]): void {
      set(props, 'licenseTemplateNumbers', numbers);
    },

    addLicenseTemplateNumber(this: void, number: string): void {
      if (!props.licenseTemplateNumbers) {
        props.licenseTemplateNumbers = [];
      }

      props.licenseTemplateNumbers.push(number);
    },

    getLicenseTemplateNumbers<D = undefined>(this: void, def?: D): string[] | D {
      return get(props, 'licenseTemplateNumbers', def) as string[] | D;
    },

    removeLicenseTemplateNumber(this: void, number: string): void {
      const { licenseTemplateNumbers: numbers = [] } = props;

      numbers.splice(numbers.indexOf(number), 1);
      props.licenseTemplateNumbers = numbers;
    },

    serialize(this: void): Record<string, string> {
      if (props.licenseTemplateNumbers) {
        const licenseTemplateNumbers = props.licenseTemplateNumbers.join(',');
        return serialize({ ...props, licenseTemplateNumbers });
      }

      return serialize(props);
    },
  };

  return defineEntity(props as BundleProps<T>, methods, Bundle);
};

export default Bundle;
