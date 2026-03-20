/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';
import Bundle from '@/entities/Bundle';

// types
import { Item } from '@/types/api/response';
import { BundleProps } from '@/types/entities/Bundle';

export default <T extends object = BundleProps>(item?: Item) => {
  const props = itemToObject<Record<string, unknown>>(item,{
    active: 'boolean',
    number: 'string',
    name: 'string',
    price: 'number',
    currency: 'string',
    productNumber: 'string',
    licenseTemplateNumbers: 'string',
    staleLicenseTemplateNumbers: 'string',
  });

  const { licenseTemplateNumbers, staleLicenseTemplateNumbers } = props;

  if (licenseTemplateNumbers && typeof licenseTemplateNumbers === 'string') {
    props.licenseTemplateNumbers = licenseTemplateNumbers.split(',');
  }

  if (staleLicenseTemplateNumbers && typeof staleLicenseTemplateNumbers === 'string') {
    props.staleLicenseTemplateNumbers = staleLicenseTemplateNumbers.split(',');
  }

  return Bundle<T>(props as BundleProps<T>);
};
