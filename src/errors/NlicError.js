export default class NlicError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, NlicError);
    }
}
