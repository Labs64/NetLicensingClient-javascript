/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// entity factory
import defineEntity from '@/entities/defineEntity';

// types
import { ProductProps, ProductEntity, ProductMethods } from '@/types/entities/Product';
import { ProductDiscountEntity } from '@/types/entities/ProductDiscount';

// utils
import { set, get } from '@/utils/helpers';
import serialize from '@/utils/serialize';

/**
 * NetLicensing  Product entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the product. Vendor can assign this number when creating a product or
 * let NetLicensing  generate one. Read-only after creation of the first licensee for the product.
 * @property string number
 *
 * If set to false, the product is disabled. No new licensees can be registered for the product,
 * existing licensees can not obtain new licenses.
 * @property boolean active
 *
 * Product name. Together with the version identifies the product for the end customer.
 * @property string name
 *
 * Product version. Convenience parameter, additional to the product name.
 * @property string version
 *
 * If set to 'true', non-existing licensees will be created at first validation attempt.
 * @property boolean licenseeAutoCreate
 *
 * Licensee secret mode for product.Supported types: "DISABLED", "PREDEFINED", "CLIENT"
 * @property boolean licenseeSecretMode
 *
 * Product description. Optional.
 * @property string description
 *
 * Licensing information. Optional.
 * @property string licensingInfo
 *
 * @property boolean inUse
 *
 * Arbitrary additional user properties of string type may be associated with each product. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 */
const Product = function <T extends object = object>(
  properties: ProductProps<T> = {} as ProductProps<T>,
): ProductEntity<T> {
  const props: ProductProps = { ...properties };

  const methods: ProductMethods = {
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

    setVersion(this: void, version: string): void {
      set(props, 'version', version);
    },

    getVersion<D = undefined>(this: void, def?: D): string | number | D {
      return get(props, 'version', def) as string | number | D;
    },

    setDescription(this: void, description: string): void {
      set(props, 'description', description);
    },

    getDescription<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'description', def) as string | D;
    },

    setLicensingInfo(this: void, licensingInfo: string): void {
      set(props, 'licensingInfo', licensingInfo);
    },

    getLicensingInfo<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'licensingInfo', def) as string | D;
    },

    setLicenseeAutoCreate(this: void, licenseeAutoCreate: boolean): void {
      set(props, 'licenseeAutoCreate', licenseeAutoCreate);
    },

    getLicenseeAutoCreate<D = undefined>(this: void, def?: D): boolean | D {
      return get(props, 'licenseeAutoCreate', def) as boolean | D;
    },

    setDiscounts(this: void, discounts: ProductDiscountEntity[]): void {
      set(props, 'discounts', discounts);
    },

    getDiscounts<D = undefined>(this: void, def?: D): ProductDiscountEntity[] | D {
      return get(props, 'discounts', def) as ProductDiscountEntity[] | D;
    },

    addDiscount(discount: ProductDiscountEntity): void {
      const discounts = this.getDiscounts([] as ProductDiscountEntity[]);
      discounts.push(discount);

      this.setDiscounts(discounts);
    },

    removeDiscount(discount: ProductDiscountEntity): void {
      const discounts = this.getDiscounts();

      if (Array.isArray(discounts) && discounts.length > 0) {
        discounts.splice(discounts.indexOf(discount), 1);
        this.setDiscounts(discounts);
      }
    },

    setProductDiscounts(productDiscounts: ProductDiscountEntity[]): void {
      this.setDiscounts(productDiscounts);
    },

    getProductDiscounts<D = undefined>(def?: D): ProductDiscountEntity[] | D {
      return this.getDiscounts(def);
    },

    serialize(): Record<string, string | string[]> {
      const map: Record<string, string | string[]> = serialize(props, { ignore: ['discounts', 'inUse'] });
      const discounts = this.getDiscounts();

      if (discounts) {
        map.discount = discounts.length > 0 ? discounts.map((discount) => discount.toString()) : '';
      }

      return map;
    },
  };

  return defineEntity(props as ProductProps<T>, methods, Product);
};

export default Product;
