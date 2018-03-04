/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

// Cast an attribute to a native JS type.
export default (key, value) => {
    switch (key.trim().toLowerCase()) {
        case 'str':
        case 'string':
            return String(value);
        case 'int':
        case 'integer':
            return parseInt(value, 10);
        case 'float':
        case 'double':
            return parseFloat(value);
        case 'bool':
        case 'boolean':
            switch (value) {
                case 'true':
                case 'TRUE':
                    return true;
                case 'false':
                case 'FALSE':
                    return false;
                default:
                    return Boolean(value);
            }
        case 'date':
            return (value === 'now') ? 'now' : new Date(String(value));
        default:
            return value;
    }
};
