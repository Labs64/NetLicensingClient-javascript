/* global __dirname, require, module */
const path = require('path');
const pkg = require('./package.json');

const { argv: { env } } = require('yargs');

const libraryName = pkg.name;
const namespace = 'NetLicensing';

const config = {
    entry: `${__dirname}/src/netlicensing-client.js`,
    devtool: 'source-map',
    output: {
        path: `${__dirname}/dist`,
        filename: (env === 'build') ? `${libraryName}.min.js` : `${libraryName}.js`,
        library: namespace,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
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
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js'],
    },
    plugins: [],
};

module.exports = config;
