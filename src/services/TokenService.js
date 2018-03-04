/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import Context from '../vo/Context';
import Token from '../entities/Token';
import Constants from '../Constants';
import Service from './Service';
import CheckUtils from '../util/CheckUtils';

/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services
 *
 * @constructor
 */

export default {
    /**
     * Creates new token.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Createtoken
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * non-null properties will be updated to the provided values, null properties will stay unchanged.
     * @param token NetLicensing.Token
     *
     * return created token in promise
     * @returns {Promise}
     */
    create(context, token) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(token instanceof Token)) {
            throw new TypeError('token must be an instance of Token');
        }

        return Service
            .post(context, Constants.Token.ENDPOINT_PATH, token.asPropertiesMap(), Token);
    },

    /**
     * Gets token by its number..See NetLicensingAPI for details:
     * @see https://www.labs64.de/conluence/display/NetLicensing PUB/Token+Services#TokenServices-Gettoken
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * the token number
     * @param number
     *
     * return the token in promise
     * @returns {Promise}
     */
    get(context, number) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of NetLicensing.Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        return Service
            .get(context, `${Constants.Token.ENDPOINT_PATH}/${number}`, {}, Token);
    },

    /**
     * Returns tokens of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Tokenslist
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * reserved for the future use, must be omitted / set to NULL
     * @param filter string|null
     *
     * array of token entities or empty array if nothing found.
     * @return array
     */
    list(context, filter) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of Context');
        }

        const queryParams = {};

        if (filter) {
            if (!CheckUtils.isValid(filter)) {
                throw new TypeError(`filter has bad value ${filter}`);
            }
            queryParams.filter = filter;
        }

        return Service
            .list(context, Constants.Token.ENDPOINT_PATH, queryParams, Token);
    },

    /**
     * Delete token by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Deletetoken
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     *  the token number
     * @param number string
     *
     * return boolean state of delete in promise
     * @returns {Promise}
     */
    delete(context, number) {
        if (!(context instanceof Context)) {
            throw new TypeError('context must be an instance of NetLicensing.Context');
        }

        CheckUtils.paramNotEmpty(number, 'number');

        return Service
            .delete(context, `${Constants.Token.ENDPOINT_PATH}/${number}`);
    },
};
