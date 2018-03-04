/* eslint-disable import/no-extraneous-dependencies */
/**
 * This is a karma config file. For more details see
 * http://karma-runner.github.io/0.13/config/configuration-file.html
 *
 * we are also using it with karma-webpack
 * https://github.com/webpack/karma-webpack
 */
const isDocker = require('is-docker')();

const { argv: { env } } = require('yargs');

let browsers = [];

if (env === 'travis-test') {
    browsers = ['Firefox'];
} else {
    browsers = ['Chrome'];
    if (!isDocker) browsers.push('Firefox');
}

module.exports = function karmaConfig(config) {
    config.set({
        // to run in additional browsers:
        // 1. install corresponding karma launcher
        //    http://karma-runner.github.io/0.13/config/browsers.html
        // 2. add it to the `browsers` array below.
        browsers,
        frameworks: ['jasmine'],
        reporters: ['spec'],
        customLaunchers: {
            Chrome: {
                base: 'ChromeHeadless',
                // We must disable the Chrome sandbox when running Chrome inside Docker
                // Chrome's sandbox needs more permissions than Docker allows by default
                flags: isDocker ? ['--no-sandbox'] : [],
            },
        },
        files: [
            'test/**/*.js',
        ],
        preprocessors: {
            'test/**/*.js': ['webpack', 'sourcemap'],
        },
        webpack: {
            devtool: 'inline-source-map',
            mode: 'development',
            module: {
                rules: [
                    {
                        test: /(\.jsx|\.js)$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                    },
                    {
                        test: /(\.jsx|\.js)$/,
                        loader: 'eslint-loader',
                        exclude: /node_modules/,
                    },
                ],
            },
        },
        webpackMiddleware: {
            noInfo: true,
        },
    });
};
