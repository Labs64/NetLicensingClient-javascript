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

    toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
        };
    }
}
