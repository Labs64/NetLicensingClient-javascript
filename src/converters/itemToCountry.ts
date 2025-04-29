/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';

// entities
import Country from '@/entities/Country';

// types
import { Item } from '@/types/api/response';
import { CountryProps } from '@/types/entities/Country';

export default (item?: Item) => Country(itemToObject<CountryProps>(item));
