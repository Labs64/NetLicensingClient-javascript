/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import type { CountryProps, CountryMethods, CountryEntity } from '@/types/entities/Country';

// entity factory
import defineEntity from './defineEntity';

/**
 * Country entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * @property code - Unique code of country.
 * @property name - Unique name of country
 * @property vatPercent - Country vat.
 * @property isEu - is country in EU.
 */
const Country = function (properties: CountryProps = {} as CountryProps): CountryEntity {
  const defaults: CountryProps = {
    code: '',
    name: '',
    vatPercent: 0,
    isEu: false,
  };

  const props: CountryProps = { ...defaults, ...properties };

  const methods: CountryMethods = {
    getCode(this: void): string {
      return props.code;
    },

    getName(this: void): string {
      return props.name;
    },

    getVatPercent(this: void): number {
      return props.vatPercent as number;
    },

    getIsEu(this: void): boolean {
      return props.isEu;
    },
  };

  return defineEntity(props, methods, Country);
};

export default Country;
