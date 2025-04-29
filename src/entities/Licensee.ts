/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

// entity factory
import defineEntity from '@/entities/defineEntity';

// types
import { LicenseeMethods, LicenseeProps, Licensee as ILicense } from '@/types/entities/Licensee';

// utils
import { set, get } from '@/utils/helpers';
import serialize from '@/utils/serialize';

/**
 * Licensee entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this
 * number when creating a licensee or let NetLicensing  generate one. Read-only after creation of the first license for
 * the licensee.
 * @property string number
 *
 * Licensee name.
 * @property string name
 *
 * If set to false, the licensee is disabled. Licensee can not obtain new licenses, and validation is
 * disabled (tbd).
 * @property boolean active
 *
 * Licensee Secret for licensee deprecated use Node-Locked Licensing Model instead
 * @property string licenseeSecret
 *
 * Mark licensee for transfer.
 * @property boolean markedForTransfer
 *
 * Arbitrary additional user properties of string type may be associated with each licensee. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, productNumber
 */

const Licensee = function <T extends object>(properties: LicenseeProps<T> = {} as LicenseeProps<T>): ILicense<T> {
  const props: LicenseeProps = { ...properties };

  const methods: LicenseeMethods = {
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

    setProductNumber(number: string): void {
      set(props, 'productNumber', number);
    },

    getProductNumber<D = undefined>(def?: D): string | D {
      return get(props, 'productNumber', def) as string | D;
    },

    setMarkedForTransfer(mark: boolean): void {
      set(props, 'markedForTransfer', mark);
    },

    getMarkedForTransfer<D = undefined>(def?: D): boolean | D {
      return get(props, 'markedForTransfer', def) as boolean | D;
    },

    serialize(): Record<string, string> {
      return serialize(props, { ignore: ['inUse'] });
    },
  };

  return defineEntity(props as LicenseeProps<T>, methods, Licensee);
};

export default Licensee;
