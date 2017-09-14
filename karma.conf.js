module.exports = function (config) {
    config.set({
        browsers: ['Chrome', 'Firefox', 'Edge'],
        frameworks: ['jasmine'],
        files: [
            'src/util/*.js',
            'src/entities/*.js',
            'src/vo/*.js',
            'src/services/*.js',

            'test/**/*.js'
        ]
    });
};