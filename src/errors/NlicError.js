export default class NlicError extends Error {
    constructor(...args) {
        super(...args);
        this.response = {};
    }
}
