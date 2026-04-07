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

export default <T extends object = LicenseeProps>(item?: Item) => {
  const props = itemToObject<Record<string, unknown>>(item, {
    active: 'boolean',
    number: 'string',
    name: 'string',
    markedForTransfer: 'boolean',
    productNumber: 'string',
    inUse: 'boolean',
  });

  const { aliases } = props;

  if (aliases && typeof aliases === 'string') {
    props.aliases = aliases.split(',');
  }
  
  return Licensee<T>(props as LicenseeProps<T>);
};
