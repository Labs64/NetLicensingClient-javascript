const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");
const webWebpackConfig = require('./webpack.web.conf');
const nodeWebpackConfig = require('./webpack.node.conf');

const webpackConfig = {
    mode: 'production',
    devtool: false,
    performance: { hints: false },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                test: /\.min\.js$/,
            }),
        ],
    },
};

module.exports = [merge(webWebpackConfig, webpackConfig), merge(nodeWebpackConfig, webpackConfig)];
