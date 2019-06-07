/**
 * @deprecated
 */
export default class NlicError extends Error {
    constructor(...args) {
        super(...args);

        this.config = {};
        this.response = {};
        this.request = {};
        this.code = '';

        this.isNlicError = true;
        this.isAxiosError = true;
    }
}
