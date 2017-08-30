module.exports = function (config) {
    config.set({
        browsers: ['Chrome', 'Firefox', 'IE'],
        frameworks: ['jasmine'],
        files: [
            'test/**/*.spec.js'
        ]
    });
};