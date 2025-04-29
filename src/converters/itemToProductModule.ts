/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';
import ProductModule from '@/entities/ProductModule';

// types
import { Item } from '@/types/api/response';
import { ProductModuleProps } from '@/types/entities/ProductModule';

export default <T extends object = ProductModuleProps>(item?: Item) => ProductModule<T>(itemToObject<T>(item));
