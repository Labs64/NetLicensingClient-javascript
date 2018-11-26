/* eslint-disable no-param-reassign */
import _defaults from 'lodash/defaults';
import isPlainObject from 'lodash/isPlainObject';

export default factory => (count = 1, data = {}) => {
    if (isPlainObject(count)) {
        data = count;
        count = 1;
    }
    const result = [];
    for (let i = 0; i < count; i += 1) {
        result.push(_defaults(data, factory()));
    }

    return (result.length === 1) ? result[0] : result;
};
