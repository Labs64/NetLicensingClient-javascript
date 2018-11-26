/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import License from '../entities/License';
import CheckUtils from '../util/CheckUtils';
import Constants from '../Constants';
import Service from './Service';
import FilterUtils from '../util/FilterUtils';

/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services
 *
 * @constructor
 */

export default {
    /**
     * Creates new license object with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Createlicense
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * parent licensee to which the new license is to be added
     * @param licenseeNumber string
     *
     *  license template that the license is created from
     * @param licenseTemplateNumber string
     *
     * For privileged logins specifies transaction for the license creation. For regular logins new
     * transaction always created implicitly, and the operation will be in a separate transaction.
     * Transaction is generated with the provided transactionNumber, or, if transactionNumber is null, with
     * auto-generated number.
     * @param transactionNumber null|string
     *
     * non-null properties will be taken for the new object, null properties will either stay null, or will
     * be set to a default value, depending on property.
     * @param license NetLicensing.License
     *
     * return the newly created license object in promise
     * @returns {Promise}
     */
    create(context, licenseeNumber, licenseTemplateNumber, transactionNumber, license) {
        CheckUtils.paramNotEmpty(licenseeNumber, 'licenseeNumber');
        CheckUtils.paramNotEmpty(licenseTemplateNumber, 'licenseTemplateNumber');

        license.setProperty('licenseeNumber', licenseeNumber);
        license.setProperty('licenseTemplateNumber', licenseTemplateNumber);

        if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

        return Service
            .post(context, Constants.License.ENDPOINT_PATH, license.asPropertiesMap(), License);
    },


    /**
     * Gets license by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Getlicense
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the license number
     * @param number string
     *
     * return the license in promise
     * @returns {Promise}
     */
    get(context, number) {
        CheckUtils.paramNotEmpty(number, 'number');

        return Service
            .get(context, `${Constants.License.ENDPOINT_PATH}/${number}`, {}, License);
    },

    /**
     * Returns licenses of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Licenseslist
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter string|null
     *
     * return array of licenses (of all products) or empty array if nothing found in promise.
     * @returns {Promise}
     */
    list(context, filter) {
        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams.filter = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        return Service
            .list(context, Constants.License.ENDPOINT_PATH, queryParams, License);
    },

    /**
     * Updates license properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Updatelicense
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * license number
     * @param number string
     *
     * transaction for the license update. Created implicitly if transactionNumber is null. In this case the
     * operation will be in a separate transaction.
     * @param transactionNumber string|null
     *
     * non-null properties will be updated to the provided values, null properties will stay unchanged.
     * @param license NetLicensing.License
     *
     * return updated license in promise.
     * @returns {Promise}
     */
    update(context, number, transactionNumber, license) {
        CheckUtils.paramNotEmpty(number, 'number');

        if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

        return Service
            .post(context, `${Constants.License.ENDPOINT_PATH}/${number}`, license.asPropertiesMap(), License);
    },

    /**
     * Deletes license.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Deletelicense
     *
     * When any license is deleted, corresponding transaction is created automatically.
     *
     *  determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * license number
     * @param number string
     *
     * if true, any entities that depend on the one being deleted will be deleted too
     * @param forceCascade boolean
     *
     * return boolean state of delete in promise
     * @returns {Promise}
     */
    delete(context, number, forceCascade) {
        CheckUtils.paramNotEmpty(number, 'number');

        const queryParams = { forceCascade: Boolean(forceCascade) };

        return Service
            .delete(context, `${Constants.License.ENDPOINT_PATH}/${number}`, queryParams);
    },
};
