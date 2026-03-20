/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';
import License from '@/entities/License';

// types
import { Item } from '@/types/api/response';
import { LicenseProps } from '@/types/entities/License';

export default <T extends object = LicenseProps>(item?: Item) => {
  const props = itemToObject<Record<string, unknown>>(item, {
    active: 'boolean',
    number: 'string',
    name: 'string',
    price: 'number',
    currency: 'string',
    hidden: 'boolean',
    licenseeNumber: 'string',
    licenseTemplateNumber: 'string',
    productModuleNumber: 'string',
    startDate: 'string',
    inUse: 'boolean',
  });

  const { startDate } = props;

  if (startDate && typeof startDate === 'string') {
    props.startDate = startDate === 'now' ? startDate : new Date(startDate);
  }

  return License<T>(props as LicenseProps<T>);
};
