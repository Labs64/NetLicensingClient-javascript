/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';
import Token from '@/entities/Token';

// types
import { Item } from '@/types/api/response';
import { TokenProps } from '@/types/entities/Token';

export default <T extends object = TokenProps>(item?: Item) => {
  const props = itemToObject<Record<string, unknown>>(item, {
    active: 'boolean',
    number: 'string',
    expirationTime: 'string',
    tokenType: 'string',
    licenseeNumber: 'string',
    action: 'string',
    apiKeyRole: 'string',
    bundleNumber: 'string',
    bundlePrice: 'number',
    productNumber: 'string',
    predefinedShoppingItem: 'string',
    successURL: 'string',
    successURLTitle: 'string',
    cancelURL: 'string',
    cancelURLTitle: 'string',
    shopURL: 'string',
  });

  const { expirationTime } = props;

  if (expirationTime && typeof expirationTime === 'string') {
    props.expirationTime = new Date(expirationTime);
  }

  return Token<T>(props as TokenProps<T>);
};
