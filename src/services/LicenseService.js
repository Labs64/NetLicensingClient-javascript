/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import CheckUtils from '../util/CheckUtils';
import Constants from '../Constants';
import Service from './Service';
import FilterUtils from '../util/FilterUtils';
import itemToLicense from '../converters/itemToLicense';
import Page from '../vo/Page';

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
    async create(context, licenseeNumber, licenseTemplateNumber, transactionNumber, license) {
        CheckUtils.paramNotEmpty(licenseeNumber, Constants.Licensee.LICENSEE_NUMBER);
        CheckUtils.paramNotEmpty(licenseTemplateNumber, Constants.LicenseTemplate.LICENSE_TEMPLATE_NUMBER);

        license.setProperty(Constants.Licensee.LICENSEE_NUMBER, licenseeNumber);
        license.setProperty(Constants.LicenseTemplate.LICENSE_TEMPLATE_NUMBER, licenseTemplateNumber);

        if (transactionNumber) license.setProperty(Constants.Transaction.TRANSACTION_NUMBER, transactionNumber);

        const { data: { items: { item: [item] } } } = await Service
            .post(context, Constants.License.ENDPOINT_PATH, license.asPropertiesMap());

        return itemToLicense(item);
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
    async get(context, number) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const { data: { items: { item: [item] } } } = await Service
            .get(context, `${Constants.License.ENDPOINT_PATH}/${number}`);

        return itemToLicense(item);
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
    async list(context, filter) {
        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams[Constants.FILTER] = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        const { data } = await Service
            .get(context, Constants.License.ENDPOINT_PATH, queryParams);

        return Page(
            data.items.item.map(v => itemToLicense(v)),
            data.items.pagenumber,
            data.items.itemsnumber,
            data.items.totalpages,
            data.items.totalitems,
        );
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
    async update(context, number, transactionNumber, license) {
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        if (transactionNumber) license.setProperty(Constants.Transaction.TRANSACTION_NUMBER, transactionNumber);

        const { data: { items: { item: [item] } } } = await Service
            .post(context, `${Constants.License.ENDPOINT_PATH}/${number}`, license.asPropertiesMap());

        return itemToLicense(item);
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
        CheckUtils.paramNotEmpty(number, Constants.NUMBER);

        const queryParams = { forceCascade: Boolean(forceCascade) };

        return Service
            .delete(context, `${Constants.License.ENDPOINT_PATH}/${number}`, queryParams);
    },
};
