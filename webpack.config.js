/* global __dirname, require, module */

const webpack = require('webpack');

const path = require('path');

const pkg = require('./package.json');

const { optimize: { UglifyJsPlugin } } = webpack;

const { argv: { env } } = require('yargs');

const libraryName = pkg.name;
const namespace = 'NetLicensing';

const plugins = [];

let outputFile = `${libraryName}.js`;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = `${libraryName}.min.js`;
}

const config = {
    entry: `${__dirname}/src/netlicensing-client.js`,
    devtool: 'source-map',
    output: {
        path: `${__dirname}/dist`,
        filename: outputFile,
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
    plugins,
};

module.exports = config;
