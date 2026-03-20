/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import itemToObject from '@/converters/itemToObject';

// entities
import License from '@/entities/License';
import LicenseTransactionJoin from '@/entities/LicenseTransactionJoin';
import Transaction from '@/entities/Transaction';

// types
import { Item } from '@/types/api/response';
import { TransactionProps } from '@/types/entities/Transaction';

export default <T extends object = TransactionProps>(item?: Item) => {
  const props = itemToObject<Record<string, unknown>>(item, {
    active: 'boolean',
    number: 'string',
    status: 'string',
    source: 'string',
    grandTotal: 'number',
    discount: 'number',
    currency: 'string',
    datecreated: 'string',
    dateclosed: 'string',
    paymentMethod: 'string',
    licenseTransactionJoins: 'json',
    inUse: 'boolean',
  });

  const { datecreated: dateCreated, dateclosed: dateClosed } = props;

  if (dateCreated && typeof dateCreated === 'string') {
    props.dateCreated = new Date(dateCreated);
    delete props.datecreated;
  }

  if (dateClosed && typeof dateClosed === 'string') {
    props.dateClosed = new Date(dateClosed);
    delete props.dateclosed;
  }

  type LicenseTransactionJoins = { licenseNumber: string | number; transactionNumber: string | number }[] | undefined;
  const licenseTransactionJoins: LicenseTransactionJoins = props.licenseTransactionJoin as LicenseTransactionJoins;

  delete props.licenseTransactionJoin;

  if (licenseTransactionJoins) {
    props.licenseTransactionJoins = licenseTransactionJoins.map(({ transactionNumber, licenseNumber }) => {
      const transaction = Transaction({ number: String(transactionNumber) });
      const license = License({ number: String(licenseNumber) });

      return LicenseTransactionJoin(transaction, license);
    });
  }

  return Transaction<T>(props as TransactionProps<T>);
};
