/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Context from '../vo/Context';
import LicenseTemplate from '../entities/LicenseTemplate';
import CheckUtils from '../util/CheckUtils';
import Constants from '../Constants';
import Service from './Service';
import FilterUtils from '../util/FilterUtils';

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services
 *
 * @constructor
 */

export default {
    /**
     * Creates new license template object with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Createlicensetemplate
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * parent product module to which the new license template is to be added
     * @param productModuleNumber
     *
     * non-null properties will be taken for the new object, null properties will either stay null, or will
     * be set to a default value, depending on property.
     * @param licenseTemplate NetLicensing.LicenseTemplate
     *
     * the newly created license template object in promise
     * @returns {Promise}
     */
    create(context, productModuleNumber, licenseTemplate) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(licenseTemplate instanceof LicenseTemplate)) {
            throw new TypeError('licenseTemplate must be an instance of LicenseTemplate');
        }

        CheckUtils.paramNotEmpty(productModuleNumber, 'productModuleNumber');

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        licenseTemplate.setProperty('productModuleNumber', productModuleNumber);

        return Service
            .post(context, Constants.LicenseTemplate.ENDPOINT_PATH, licenseTemplate.asPropertiesMap(), LicenseTemplate);
    },

    /**
     * Gets license template by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Getlicensetemplate
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the license template number
     * @param number string
     *
     * return the license template object in promise
     * @returns {Promise}
     */
    get(context, number) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        return Service
            .get(context, `${Constants.LicenseTemplate.ENDPOINT_PATH}/${number}`, {}, LicenseTemplate);
    },

    /**
     * Returns all license templates of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Licensetemplateslist
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter string|null
     *
     * array of license templates (of all products/modules) or null/empty list if nothing found in promise.
     * @returns {Promise}
     */
    list(context, filter) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams.filter = typeof filter === 'string' ? filter : FilterUtils.encode(filter);
        }

        return Service
            .list(context, Constants.LicenseTemplate.ENDPOINT_PATH, queryParams, LicenseTemplate);
    },

    /**
     * Updates license template properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Updatelicensetemplate
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * license template number
     * @param number string
     *
     * non-null properties will be updated to the provided values, null properties will stay unchanged.
     * @param licenseTemplate NetLicensing.LicenseTemplate
     *
     * updated license template in promise.
     * @returns {Promise}
     */
    update(context, number, licenseTemplate) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(licenseTemplate instanceof LicenseTemplate)) {
            throw new TypeError('licenseTemplate must be an instance of LicenseTemplate');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        const path = `${Constants.LicenseTemplate.ENDPOINT_PATH}/${number}`;

        return Service
            .post(context, path, licenseTemplate.asPropertiesMap(), LicenseTemplate);
    },

    /**
     * Deletes license template.See NetLicensingAPI JavaDoc for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Deletelicensetemplate
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * license template number
     * @param number string
     *
     * if true, any entities that depend on the one being deleted will be deleted too
     * @param forceCascade boolean
     *
     * return boolean state of delete in promise
     * @returns {Promise}
     */
    delete(context, number, forceCascade) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        const queryParams = { forceCascade: Boolean(forceCascade) };

        return Service
            .delete(context, `${Constants.LicenseTemplate.ENDPOINT_PATH}/${number}`, queryParams);
    },
};
