module.exports = function (config) {
    config.set({
        browsers: ['Chrome', 'Firefox', 'Edge'],
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*.js'
        ]
    });
};