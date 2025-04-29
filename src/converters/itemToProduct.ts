/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';
import Product from '@/entities/Product';
import ProductDiscount from '@/entities/ProductDiscount';

// types
import { Item } from '@/types/api/response';
import { ProductProps } from '@/types/entities/Product';
import { ProductDiscount as IProductDiscount } from '@/types/entities/ProductDiscount';

export default <T extends object = ProductProps>(item?: Item) => {
  const props = itemToObject<Record<string, unknown>>(item);

  const discounts: IProductDiscount[] | undefined = props.discount as IProductDiscount[] | undefined;
  delete props.discount;

  if (discounts) {
    props.discounts = discounts.map((d) => ProductDiscount(d));
  }

  return Product<T>(props as ProductProps<T>);
};
