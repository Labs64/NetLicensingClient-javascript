/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import { TimeVolumePeriod } from '@/types/constants/TimeVolumePeriod';
import { LicenseMethods, LicenseProps, License as ILicense } from '@/types/entities/License';

// utils
import { set, get } from '@/utils/helpers';
import serialize from '@/utils/serialize';

// entity factory
import defineEntity from './defineEntity';

/**
 * License entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can
 * assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation
 * transaction status is set to closed.
 * @property string number
 *
 * Name for the licensed item. Set from license template on creation, if not specified explicitly.
 * @property string name
 *
 * If set to false, the license is disabled. License can be re-enabled, but as long as it is disabled,
 * the license is excluded from the validation process.
 * @property boolean active
 *
 * price for the license. If >0, it must always be accompanied by the currency specification. Read-only,
 * set from license template on creation.
 * @property number price
 *
 * specifies currency for the license price. Check data types to discover which currencies are
 * supported. Read-only, set from license template on creation.
 * @property string currency
 *
 * If set to true, this license is not shown in NetLicensing Shop as purchased license. Set from license
 * template on creation, if not specified explicitly.
 * @property boolean hidden
 *
 * The unique identifier assigned to the licensee (the entity to whom the license is issued). This number is typically
 * associated with a specific customer or organization. It is used internally to reference the licensee and cannot be
 * changed after the license is created.
 * @property string licenseeNumber
 *
 * The unique identifier for the license template from which this license was created.
 * @property string licenseTemplateNumber
 *
 * A boolean flag indicating whether the license is actively being used. If true, it means the license is currently in
 * use. If false, the license is not currently assigned or in use.
 * @property boolean inUse
 *
 * This parameter is specific to TimeVolume licenses and indicates the total volume of time (e.g., in hours, days, etc.)
 * associated with the license. This value defines the amount of time the license covers, which may affect the usage
 * period and limits associated with the license.
 * @property number timeVolume
 *
 * Also, specific to TimeVolume licenses, this field defines the period of time for the timeVolume
 * (e.g., "DAY", "WEEK", "MONTH", "YEAR"). It provides the time unit for the timeVolume value, clarifying whether the
 * time is measured in days, weeks, or any other defined period.
 * @property string timeVolumePeriod
 *
 * For TimeVolume licenses, this field indicates the start date of the license’s validity period. This date marks when
 * the license becomes active and the associated time volume starts being consumed.
 * It can be represented as a string "now" or a Date object.
 * @property string|Date Date startDate
 *
 * Parent(Feature) license number
 * @property string parentfeature
 *
 * Arbitrary additional user properties of string type may be associated with each license. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, licenseeNumber,
 * licenseTemplateNumber.
 */
const License = function <T extends object>(properties: LicenseProps<T> = {} as LicenseProps<T>): ILicense<T> {
  const props: LicenseProps = { ...(properties as T) };

  const methods: LicenseMethods = {
    setActive(active: boolean): void {
      set(props, 'active', active);
    },

    getActive<D = undefined>(def?: D): boolean | D {
      return get(props, 'active', def) as boolean | D;
    },

    setNumber(number: string): void {
      set(props, 'number', number);
    },

    getNumber<D = undefined>(def?: D): string | D {
      return get(props, 'number', def) as string | D;
    },

    setName(name: string): void {
      set(props, 'name', name);
    },

    getName<D = undefined>(def?: D): string | D {
      return get(props, 'name', def) as string | D;
    },

    setPrice(price: number): void {
      set(props, 'price', price);
    },

    getPrice<D = undefined>(def?: D): number | D {
      return get(props, 'price', def) as number | D;
    },

    setCurrency(currency: string): void {
      set(props, 'currency', currency);
    },

    getCurrency<D = undefined>(def?: D): string | D {
      return get(props, 'currency', def) as string | D;
    },

    setHidden(hidden: boolean): void {
      set(props, 'hidden', hidden);
    },

    getHidden<D = undefined>(def?: D): boolean | D {
      return get(props, 'hidden', def) as boolean | D;
    },

    setLicenseeNumber(number: string): void {
      set(props, 'licenseeNumber', number);
    },

    getLicenseeNumber<D = undefined>(def?: D): string | D {
      return get(props, 'licenseeNumber', def) as string | D;
    },

    setLicenseTemplateNumber(number: string): void {
      set(props, 'licenseTemplateNumber', number);
    },

    getLicenseTemplateNumber<D = undefined>(def?: D): string | D {
      return get(props, 'licenseTemplateNumber', def) as string | D;
    },

    // TimeVolume
    setTimeVolume(timeVolume: number): void {
      set(props, 'timeVolume', timeVolume);
    },

    getTimeVolume<D = undefined>(def?: D): number | D {
      return get(props, 'timeVolume', def) as number | D;
    },

    setTimeVolumePeriod(timeVolumePeriod: TimeVolumePeriod): void {
      set(props, 'timeVolumePeriod', timeVolumePeriod);
    },

    getTimeVolumePeriod<D = undefined>(def?: D): TimeVolumePeriod | D {
      return get(props, 'timeVolumePeriod', def) as TimeVolumePeriod | D;
    },

    setStartDate(startDate: Date | 'now'): void {
      set(props, 'startDate', startDate);
    },

    getStartDate<D = undefined>(def?: D): Date | 'now' | D {
      return get(props, 'startDate', def) as Date | 'now' | D;
    },

    // Rental
    setParentfeature(parentfeature?: string): void {
      set(props, 'parentfeature', parentfeature);
    },

    getParentfeature<D = undefined>(def?: D): string | D {
      return get(props, 'parentfeature', def) as string | D;
    },

    serialize(): Record<string, string> {
      return serialize(props, { ignore: ['inUse'] });
    },
  };

  return defineEntity(props as LicenseProps<T>, methods, License);
};

export default License;
