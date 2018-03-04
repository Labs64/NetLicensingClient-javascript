/* eslint-disable no-mixed-operators */
export default {
    string(prefix) {
        return (prefix || '') + Math.random().toString(36).substr(2, 9);
    },
    boolean() {
        return Boolean(Math.round(Math.random()));
    },
    float(min, max) {
        const minV = min || 0;
        const maxV = max || 100;
        return Number((Math.random() * (maxV - minV) + minV).toFixed(2));
    },
    int(min, max) {
        const minV = min || 0;
        const maxV = max || 100;
        return Math.round(Math.random() * (maxV - minV) + minV);
    },
};
