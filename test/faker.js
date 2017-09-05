var Faker = {
    string: function (prefix) {
        prefix = prefix || '';
        return prefix + Math.random().toString(36).substr(2, 9);
    },
    boolean: function () {
        return Boolean(Math.round(Math.random()));
    },
    float: function (min, max) {
        min = min || 0;
        max = max || 100;
        return Number((Math.random() * (max - min) + min).toFixed(2));
    },
    int: function (min, max) {
        min = min || 0;
        max = max || 100;
        return Math.round(Math.random() * (max - min) + min);
    }
};