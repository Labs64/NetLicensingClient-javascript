/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

function CheckUtils() {

    /**
     * Check if value is valid
     * @param value
     * @returns {boolean}
     */
    CheckUtils.isValid = function (value) {
        return (value !== undefined
        && typeof value === 'function'
        && value !== Infinity
        && value !== -Infinity
        && !isNaN(value));
    }
}