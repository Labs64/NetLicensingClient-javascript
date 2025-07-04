/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// entity factory
import defineEntity from '@/entities/defineEntity';
import { LicensingModelValues } from '@/types/constants/LicensingModel';

// types
import { ProductModuleEntity, ProductModuleMethods, ProductModuleProps } from '@/types/entities/ProductModule';

// utils
import { set, get } from '@/utils/helpers';
import serialize from '@/utils/serialize';

/**
 * Product module entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the product module. Vendor can assign
 * this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first
 * licensee for the product.
 * @property string number
 *
 * If set to false, the product module is disabled. Licensees can not obtain any new licenses for this
 * product module.
 * @property boolean active
 *
 * Product module name that is visible to the end customers in NetLicensing Shop.
 * @property string name
 *
 * Licensing model applied to this product module. Defines what license templates can be
 * configured for the product module and how licenses for this product module are processed during validation.
 * @property string licensingModel
 *
 * Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
 * @property number maxCheckoutValidity
 *
 * Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.
 * @property number yellowThreshold
 *
 * Remaining time volume for red level. Mandatory for 'Rental' licensing model.
 * @property number redThreshold
 */

const ProductModule = function <T extends object = object>(
  properties: ProductModuleProps<T> = {} as ProductModuleProps<T>,
): ProductModuleEntity<T> {
  const props: ProductModuleProps = { ...properties };

  const methods: ProductModuleMethods = {
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

    setLicensingModel(licensingModel: LicensingModelValues): void {
      set(props, 'licensingModel', licensingModel);
    },

    getLicensingModel<D = undefined>(this: void, def?: D): LicensingModelValues | D {
      return get(props, 'licensingModel', def) as LicensingModelValues | D;
    },

    setMaxCheckoutValidity(this: void, maxCheckoutValidity: number): void {
      set(props, 'maxCheckoutValidity', maxCheckoutValidity);
    },

    getMaxCheckoutValidity<D = undefined>(this: void, def?: D): number | D {
      return get(props, 'maxCheckoutValidity', def) as number | D;
    },

    setYellowThreshold(this: void, yellowThreshold: number): void {
      set(props, 'yellowThreshold', yellowThreshold);
    },

    getYellowThreshold<D = undefined>(this: void, def?: D): number | D {
      return get(props, 'yellowThreshold', def) as number | D;
    },

    setRedThreshold(this: void, redThreshold: number): void {
      set(props, 'redThreshold', redThreshold);
    },

    getRedThreshold<D = undefined>(this: void, def?: D): number | D {
      return get(props, 'redThreshold', def) as number | D;
    },

    setProductNumber(this: void, productNumber: string): void {
      set(props, 'productNumber', productNumber);
    },

    getProductNumber<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'productNumber', def) as string | D;
    },

    serialize(this: void): Record<string, string> {
      return serialize(props, { ignore: ['inUse'] });
    },
  };

  return defineEntity(props as ProductModuleProps<T>, methods, ProductModule);
};

export default ProductModule;
