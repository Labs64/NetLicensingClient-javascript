/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';
import Notification from '@/entities/Notification';

// types
import { Item } from '@/types/api/response';
import { NotificationProps } from '@/types/entities/Notification';

export default <T extends object = NotificationProps>(item?: Item) => {
  const props = itemToObject<Record<string, unknown>>(item);

  const { events } = props;

  if (events && typeof events === 'string') {
    props.events = events.split(',');
  }

  return Notification<T>(props as NotificationProps<T>);
};
