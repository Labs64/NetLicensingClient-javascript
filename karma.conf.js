var os = require('os');

module.exports = function (config) {
    var browsers = ['Chrome', 'Firefox'];
    if (os.platform() == 'win32') browsers.push('Edge');

    config.set({
        browsers: browsers,
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