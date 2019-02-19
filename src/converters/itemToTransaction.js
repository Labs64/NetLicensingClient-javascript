import itemToObject from './itemToObject';
import Transaction from '../entities/Transaction';
import License from '../entities/License';
import LicenseTransactionJoin from '../entities/LicenseTransactionJoin';
import Constants from '../Constants';

export default (item) => {
    const object = itemToObject(item);

    const { licenseTransactionJoin } = object;

    delete object.licenseTransactionJoin;

    const transaction = new Transaction(object);

    if (licenseTransactionJoin) {
        const joins = [];

        licenseTransactionJoin.forEach((v) => {
            const join = new LicenseTransactionJoin();
            join.setLicense(new License({ number: v[Constants.License.LICENSE_NUMBER] }));
            join.setTransaction(new Transaction({ number: v[Constants.Transaction.TRANSACTION_NUMBER] }));

            joins.push(join);
        });

        transaction.setLicenseTransactionJoins(joins);
    }

    return transaction;
};
