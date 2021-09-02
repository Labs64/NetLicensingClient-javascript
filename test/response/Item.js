import _each from 'lodash/each';
import _castArray from 'lodash/castArray';
import _isObject from 'lodash/isObject';

export default class Item {
    constructor(object = {}, type = null) {
        this.type = type || object.constructor.name;
        this.property = [];
        this.list = [];

        const covert = (obj, handler = { property: [], list: [] }) => {
            _each(obj, (value, name) => {
                if (_isObject(value)) {
                    _each(_castArray(value), (v) => {
                        const list = { property: [], list: [], name, type: v.constructor.name };
                        handler.list.push(list);
                        covert(v, list);
                    });
                    return;
                }

                const property = { value, name };
                handler.property.push(property);
            });
        };

        if (_isObject(object)) {
            covert(object, this);
        }
    }

    getProperty() {
        return this.property;
    }

    addProperty(key, value) {
        this.property.push(key, value);
        return this;
    }

    getList() {
        return this.list;
    }

    setType(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}
