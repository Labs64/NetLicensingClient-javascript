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
  const props = itemToObject<Record<string, unknown>>(item);

  const { dateCreated, dateClosed } = props;

  if (dateCreated && typeof dateCreated === 'string') {
    props.dateCreated = new Date(dateCreated);
  }

  if (dateClosed && typeof dateClosed === 'string') {
    props.dateClosed = new Date(dateClosed);
  }

  const licenseTransactionJoins: { licenseNumber: string; transactionNumber: string }[] | undefined =
    props.licenseTransactionJoin as { licenseNumber: string; transactionNumber: string }[];

  delete props.licenseTransactionJoin;

  if (licenseTransactionJoins) {
    props.licenseTransactionJoins = licenseTransactionJoins.map(({ transactionNumber, licenseNumber }) => {
      const transaction = Transaction({ number: transactionNumber });
      const license = License({ number: licenseNumber });

      return LicenseTransactionJoin(transaction, license);
    });
  }

  return Transaction<T>(props as TransactionProps<T>);
};
