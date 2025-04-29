/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';
import PaymentMethod from '@/entities/PaymentMethod';

// types
import { Item } from '@/types/api/response';
import { PaymentMethodProps } from '@/types/entities/PaymentMethod';

export default <T extends object = PaymentMethodProps>(item?: Item) => PaymentMethod<T>(itemToObject<T>(item));
