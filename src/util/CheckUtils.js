/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

export default {
    isValid(value) {
        let valid = (value !== undefined && typeof value !== 'function');
        if (typeof value === 'number') valid = Number.isFinite(value) && !Number.isNaN(value);
        return valid;
    },

    paramNotNull(parameter, parameterName) {
        if (!this.isValid(parameter)) throw new TypeError(`Parameter ${parameterName} has bad value ${parameter}`);
        if (parameter === null) throw new TypeError(`Parameter ${parameterName} cannot be null`);
    },

    paramNotEmpty(parameter, parameterName) {
        if (!this.isValid(parameter)) throw new TypeError(`Parameter ${parameterName} has bad value ${parameter}`);
        if (!parameter) throw new TypeError(`Parameter ${parameterName} cannot be null or empty string`);
    },
};
