import _each from 'lodash/each';
import _castArray from 'lodash/castArray';
import _isArray from 'lodash/isArray';
import _isPlainObject from 'lodash/isPlainObject';
import _isEmpty from 'lodash/isEmpty';

const convertToItem = (item, handler = { property: [], list: [] }) => {
    if (_isArray(item) || _isPlainObject(item)) {
        _each(item, (value, name) => {
            if (_isArray(value)) {
                _each(value, (v) => {
                    const list = { property: [], list: [], name };
                    handler.list.push(list);
                    convertToItem(v, list);
                });
                return;
            }

            const property = { value, name };
            handler.property.push(property);
        });
    }

    return handler;
};

export default (queryParams) => {
    const template = { items: { item: [] } };

    const items = _castArray(queryParams);

    if (!_isEmpty(items)) {
        _each(items, (i) => {
            template.items.item.push(convertToItem(i));
        });
    }

    return template;
};
