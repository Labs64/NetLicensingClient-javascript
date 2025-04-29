/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';
import LicenseTemplate from '@/entities/LicenseTemplate';

// types
import { Item } from '@/types/api/response';
import { LicenseTemplateProps } from '@/types/entities/LicenseTemplate';

export default <T extends object = LicenseTemplateProps>(item?: Item) => LicenseTemplate<T>(itemToObject<T>(item));
