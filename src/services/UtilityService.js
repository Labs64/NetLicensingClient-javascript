/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Context from '../vo/Context';
import Constants from '../Constants';
import Service from './Service';
import CheckUtils from '../util/CheckUtils';
import Country from '../entities/Country';
import FilterUtils from '../util/FilterUtils';

/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services
 * @constructor
 */

export default {
    /**
     * Returns all license types. See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services#UtilityServices-LicenseTypeslist
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * array of available license types or empty array if nothing found in promise.
     * @returns {Promise}
     */
    listLicenseTypes(context) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        return Service
            .list(context, `${Constants.Utility.ENDPOINT_PATH}/licenseTypes`)
            .then(items => items.map(item => item.property[0].value));
    },

    /**
     * Returns all license models. See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services#UtilityServices-LicensingModelslist
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * array of available license models or empty array if nothing found in promise.
     * @returns {Promise}
     */
    listLicensingModels(context) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(Constants.BASIC_AUTHENTICATION);

        return Service
            .list(context, `${Constants.Utility.ENDPOINT_PATH}/licensingModels`)
            .then(items => items.map(item => item.property[0].value));
    },

    /**
     * Returns all countries.
     *
     * determines the vendor on whose behalf the call is performed
     * @param context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter
     *
     * collection of available countries or null/empty list if nothing found in promise.
     * @returns {Promise}
     */
    listCountries(context, filter) {
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
            .list(context, `${Constants.Utility.ENDPOINT_PATH}/countries`, queryParams, Country);
    },
};
