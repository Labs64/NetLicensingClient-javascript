export default {
    FILTER_DELIMITER: ';',
    FILTER_PAIR_DELIMITER: '=',
    encode(filter = {}) {
        const query = [];
        const has = Object.prototype.hasOwnProperty;
        Object.keys(filter).forEach((key) => {
            if (has.call(filter, key)) {
                query.push(`${encodeURIComponent(key)}${this.FILTER_PAIR_DELIMITER}${encodeURIComponent(filter[key])}`);
            }
        });
        return query.join(this.FILTER_DELIMITER);
    },
    decode(query = '') {
        const filter = {};
        query.split(this.FILTER_DELIMITER).forEach((v) => {
            const [name, value] = v.split(this.FILTER_PAIR_DELIMITER);
            filter[name] = value;
        });
        return filter;
    },
};
