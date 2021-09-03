const { merge } = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webWebpackConfig = require('./webpack.web.conf');
const nodeWebpackConfig = require('./webpack.node.conf');

const webpackConfig = {
    mode: 'production',
    devtool: false,
    performance: { hints: false },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                include: /\.min\.js$/,
                uglifyOptions: {
                    warnings: false,
                },
                sourceMap: true,
                parallel: true,
            }),
        ],
    },
};

module.exports = [merge(webWebpackConfig, webpackConfig), merge(nodeWebpackConfig, webpackConfig)];
