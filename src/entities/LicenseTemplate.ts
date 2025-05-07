/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// entity factory
import defineEntity from '@/entities/defineEntity';

// types
import { LicenseTypeValues } from '@/types/constants/LicenseType';
import { TimeVolumePeriodValues } from '@/types/constants/TimeVolumePeriod';
import { LicenseTemplateMethods, LicenseTemplateProps, LicenseTemplateEntity } from '@/types/entities/LicenseTemplate';

// utils
import { set, get } from '@/utils/helpers';
import serialize from '@/utils/serialize';

/**
 * License template entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the license template. Vendor can
 * assign this number when creating a license template or let NetLicensing  generate one.
 * Read-only after creation of the first license from this license template.
 * @property string number
 *
 * If set to false, the license template is disabled. Licensee can not obtain any new licenses off this
 * license template.
 * @property boolean active
 *
 * Name for the licensed item.
 * @property string name
 *
 * Type of licenses created from this license template. Supported types: "FEATURE", "TIMEVOLUME",
 * "FLOATING", "QUANTITY"
 * @property string licenseType
 *
 * Price for the license. If >0, it must always be accompanied by the currency specification.
 * @property number price
 *
 * Specifies currency for the license price. Check data types to discover which currencies are
 * supported.
 * @property string currency
 *
 * If set to true, every new licensee automatically gets one license out of this license template on
 * creation. Automatic licenses must have their price set to 0.
 * @property boolean automatic
 *
 * If set to true, this license template is not shown in NetLicensing  Shop as offered for purchase.
 * @property boolean hidden
 *
 * If set to true, licenses from this license template are not visible to the end customer, but
 * participate in validation.
 * @property boolean hideLicenses
 *
 * If set to true, this license template defines grace period of validity granted after subscription expiration.
 * @property boolean gracePeriod
 *
 * Mandatory for 'TIMEVOLUME' license type.
 * @property number timeVolume
 *
 * Time volume period for 'TIMEVOLUME' license type. Supported types: "DAY", "WEEK", "MONTH", "YEAR"
 * @property string timeVolumePeriod
 *
 * Mandatory for 'FLOATING' license type.
 * @property number maxSessions
 *
 * Mandatory for 'QUANTITY' license type.
 * @property number quantity
 */

const LicenseTemplate = function <T extends object>(
  properties: LicenseTemplateProps<T> = {} as LicenseTemplateProps<T>,
): LicenseTemplateEntity<T> {
  const props: LicenseTemplateProps = { ...properties };

  const methods: LicenseTemplateMethods = {
    setActive(this: void, active: boolean): void {
      set(props, 'active', active);
    },

    getActive<D = undefined>(this: void, def?: D): boolean | D {
      return get(props, 'active', def) as boolean | D;
    },

    setNumber(this: void, number: string): void {
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

    setLicenseType(this: void, type: LicenseTypeValues): void {
      set(props, 'licenseType', type);
    },

    getLicenseType<D = undefined>(this: void, def?: D): LicenseTypeValues | D {
      return get(props, 'licenseType', def) as LicenseTypeValues | D;
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

    setAutomatic(this: void, automatic: boolean): void {
      set(props, 'automatic', automatic);
    },

    getAutomatic<D = undefined>(this: void, def?: D): boolean | D {
      return get(props, 'automatic', def) as boolean | D;
    },

    setHidden(this: void, hidden: boolean): void {
      set(props, 'hidden', hidden);
    },

    getHidden<D = undefined>(this: void, def?: D): boolean | D {
      return get(props, 'hidden', def) as boolean | D;
    },

    setHideLicenses(this: void, hideLicenses: boolean): void {
      set(props, 'hideLicenses', hideLicenses);
    },

    getHideLicenses<D = undefined>(this: void, def?: D): boolean | D {
      return get(props, 'hideLicenses', def) as boolean | D;
    },

    setGracePeriod(this: void, gradePeriod: boolean): void {
      set(props, 'gracePeriod', gradePeriod);
    },

    getGracePeriod<D = undefined>(this: void, def?: D): boolean | D {
      return get(props, 'gracePeriod', def) as boolean | D;
    },

    setTimeVolume(this: void, timeVolume: number): void {
      set(props, 'timeVolume', timeVolume);
    },

    getTimeVolume<D = undefined>(this: void, def?: D): number | D {
      return get(props, 'timeVolume', def) as number | D;
    },

    setTimeVolumePeriod(this: void, timeVolumePeriod: TimeVolumePeriodValues): void {
      set(props, 'timeVolumePeriod', timeVolumePeriod);
    },

    getTimeVolumePeriod<D = undefined>(this: void, def?: D): TimeVolumePeriodValues | D {
      return get(props, 'timeVolumePeriod', def) as TimeVolumePeriodValues | D;
    },

    setMaxSessions(this: void, maxSessions: number): void {
      set(props, 'maxSessions', maxSessions);
    },

    getMaxSessions<D = undefined>(this: void, def?: D): number | D {
      return get(props, 'maxSessions', def) as number | D;
    },

    setQuantity(this: void, quantity: number): void {
      set(props, 'quantity', quantity);
    },

    getQuantity<D = undefined>(this: void, def?: D): number | D {
      return get(props, 'quantity', def) as number | D;
    },

    setProductModuleNumber(this: void, productModuleNumber: string): void {
      set(props, 'productModuleNumber', productModuleNumber);
    },

    getProductModuleNumber<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'productModuleNumber', def) as string | D;
    },

    serialize(this: void): Record<string, string> {
      return serialize(props, { ignore: ['inUse'] });
    },
  };

  return defineEntity(props as LicenseTemplateProps<T>, methods, LicenseTemplate);
};

export default LicenseTemplate;
