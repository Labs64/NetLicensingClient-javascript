/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';
import Licensee from '@/entities/Licensee';

// types
import { Item } from '@/types/api/response';
import { LicenseeProps } from '@/types/entities/Licensee';

export default <T extends object = LicenseeProps>(item?: Item) => Licensee<T>(itemToObject<T>(item));
