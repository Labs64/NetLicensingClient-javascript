const itemToObject = (item) => {
    const object = {};
    const { property, list } = item;

    if (property && Array.isArray(property)) {
        property.forEach((p) => {
            const { name, value } = p;
            if (name) object[name] = value;
        });
    }

    if (list && Array.isArray(list)) {
        list.forEach((l) => {
            const { name } = l;
            if (name) {
                object[name] = object[name] || [];
                object[name].push(itemToObject(l));
            }
        });
    }

    return object;
};

export default itemToObject;
